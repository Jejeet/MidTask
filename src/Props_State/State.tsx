// State is data managed inside a component. State can change over time, usually in response to user actions, API responses, or other events.

import { useState } from "react";

function Counter() {
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

// A parent can also pass state down as props: