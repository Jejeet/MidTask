// useEffect allows a component to perform side effects after React renders the component.
// For example, you can use useEffect to fetch data from an API, set up a subscription, or manually change the DOM in React components.

import { useEffect } from "react";

function Page() {
  useEffect(() => {
    document.title = "Dashboard";
  });

  return <h1>Dashboard</h1>;
}

// Without a dependency array, the effect runs after every render.
// Empty dependency array means the effect runs only once after the initial render, similar to componentDidMount in class components.
useEffect(() => {
  console.log("Component mounted");
}, []);

// Effect with dependencies runs only when the specified dependencies change.
function UserProfile({ userId }: { userId: string }) {
  useEffect(() => {
    console.log(`Loading user ${userId}`);
  }, [userId]);

  return <div>User profile</div>;
}
// This effect runs:

// When the component mounts
// Whenever userId changes