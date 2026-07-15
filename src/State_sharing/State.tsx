// Sibling components cannot directly pass state to each other.

// The usual solution is to move the state into their closest common parent. This is called lifting state up.

import { useState } from "react";

function Parent() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <MessageInput
        message={message}
        onMessageChange={setMessage}
      />

      <MessagePreview message={message} />
    </div>
  );
}

interface MessageInputProps {
  message: string;
  onMessageChange: (value: string) => void;
}

function MessageInput({
  message,
  onMessageChange,
}: MessageInputProps) {
  return (
    <input
      value={message}
      onChange={(event) => onMessageChange(event.target.value)}
    />
  );
}

function MessagePreview({ message }: { message: string }) {
  return <p>Preview: {message}</p>;
}

// The parent owns the state.

// MessageInput changes the state by calling the function received from the parent. MessagePreview receives the updated value.