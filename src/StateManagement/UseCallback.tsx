// useCallback memoises a function reference.

import { use, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleSave = useCallback(() => {
    console.log("Saved");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Child onSave={handleSave} />
    </div>
  );
}

// useCallback is useful when passing functions to child components that rely on reference equality to prevent unnecessary renders. It only recreates the function when its dependencies change.