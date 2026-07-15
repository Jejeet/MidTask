// 1. Model the request status
type RequestStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

// This is clearer than maintaining several Boolean values

const [isLoading, setIsLoading] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [isError, setIsError] = useState(false);

// Separate Boolean values can accidentally produce contradictory states, such as loading and success both being true.

// With one status value, the request can only be in one state at a time.

// 2. Set the loading state before requesting data

setStatus("loading");
setErrorMessage("");

// Setting the status to loading allows the interface to display feedback immediately.

// Clearing the previous error prevents an old error message from remaining visible during a new request.

if (status === "loading") {
  return <p>Loading users...</p>;
}

// In a real application, this could be a spinner or skeleton screen.

// 3. Check the HTTP response

if (!response.ok) {
  throw new Error(
    `Request failed with status ${response.status}`
  );
}

// fetch does not automatically throw an error for HTTP responses such as;

// 400 Bad Request
// 404 Not Found
// 500 Internal Server Error

// It normally rejects only when there is a network-level problem. Therefore, response.ok should be checked manually.

// 4. Store successful data
const data = (await response.json()) as User[];

setUsers(data);
setStatus("success");

// When the request succeeds:

// The response is converted from JSON.
// The result is stored in state.
// The status changes to success.
// React re-renders the component and displays the users.
// 5. Handle request errors
catch (error) {
  const message =
    error instanceof Error
      ? error.message
      : "An unexpected error occurred.";

  setErrorMessage(message);
  setStatus("error");
}
// The error state should provide useful feedback and ideally a recovery action.

// 6. Handle the empty state separately

if (users.length === 0) {
  return <p>No users were found.</p>;
}

// An empty state is not the same as an error.

// An error means the request failed. An empty state means the request succeeded, but the server returned no records.

// For example:

[]

// Cancel the request during cleanup

useEffect(() => {
  const controller = new AbortController();

  fetchUsers(controller.signal);

  return () => {
    controller.abort();
  };
}, [fetchUsers]);

// The AbortController cancels the request when:

// The component unmounts.
// The effect runs again before the previous request completes.

// The signal is passed to fetch

fetch(url, {
  signal: controller.signal,
});

// A cancelled request should not be displayed as an application error

if (
  error instanceof DOMException &&
  error.name === "AbortError"
) {
  return;
}