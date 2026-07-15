// React.memo memoises a component.
import { memo } from "react";

interface ChildProps {
  onSave: () => void;
}

const Child = memo(function Child({ onSave }: ChildProps) {
  console.log("Child rendered");

  return <button onClick={onSave}>Save</button>;
});

// React.memo is useful for preventing unnecessary re-renders of a component when its props haven't changed. It only re-renders when the props change.

// A component wrapped in React.memo skips re-rendering when its props have not changed.k ml 