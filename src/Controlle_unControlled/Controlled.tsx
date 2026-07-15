// A controlled input gets its value from React state. React is responsible for the current value.

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <p>Email: {email}</p>
    </form>
  );
}
// The input is controlled because:

// Its value comes from email
// Every change calls setEmail
// React state is the source of truth

// Controlled inputs are useful when you need:

// Immediate validation
// Conditional button states
// Input formatting
// Dynamic UI updates
// Easy access to the current value
// example:
// function RegistrationForm() {
//   const [username, setUsername] = useState("");

//   const isValid = username.length >= 3;

//   return (
//     <div>
//       <input
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//       />

//       {!isValid && (
//         <p>Username must contain at least three characters.</p>
//       )}

//       <button disabled={!isValid}>Submit</button>
//     </div>
//   );
// }