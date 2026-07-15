// An uncontrolled input stores its current value in the DOM rather than React state.
// You usually access the value using useRef.
// React does not update state whenever the user types. The browser manages the input value.

import { FormEvent, useRef } from "react";

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = emailRef.current?.value;
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" />
      <button type="submit">Submit</button>
    </form>
  );
}