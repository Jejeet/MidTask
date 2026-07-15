// 1.A React component commonly re-renders when its state changes
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
// Here, count is state. Calling setCount updates the value and causes React to re-render the component.

// 2. Its parent re-renders

// By default, when a parent component re-renders, React also calls its child components again.

function Child() {
  console.log("Child rendered");

  return <p>I am the child</p>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((value) => value + 1)}>
        Count: {count}
      </button>

      <Child />
    </>
  );
}

// 3.Its props change
<Profile name={username} />

// 4. When username changes, the Profile component receives a new prop and re-renders.
// A consumed context value changes
const theme = useContext(ThemeContext);

// 5.When the context provider's value changes, components consuming the context re-render.

//6.A custom hook causes state or context updates

//7.Custom hooks use React's built-in hooks internally. If the custom hook updates state, the component using it re-renders.