// 1. Use React.memo
const Child = React.memo(function Child() {
  return <p>Child component</p>;
});


//2. Use useCallback for function props when needed

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);


// 3.Use useMemo for stable object or array props
const settings = useMemo(
  () => ({
    theme: "dark",
    language: "English",
  }),
  []
);

// 4.Keep state close to where it is needed

// Do not place every state value at the top of the application.

function App() {
  return (
    <>
      <Header />
      <Counter />
    </>
  );
}

// If the counter state is inside Counter, updating it will not force App to manage that state.

//5. Split large contexts

// If one context contains many unrelated values, every consumer may re-render when the provider value changes.

// Instead of one large context, use smaller focused contexts where appropriate.

//6. Avoid unnecessary effects that update state

// An effect that repeatedly updates state may create unnecessary render cycles.

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);

This derived value can usually be calculated directly:

const fullName = `${firstName} ${lastName}`;

// A re-render is not automatically a performance problem. React rendering is usually fast. Optimisation should focus on expensive or frequently repeated work.