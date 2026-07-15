// Solution 2: React Context

import { createContext, useContext } from "react";

// Context allows data to be shared without passing it through every intermediate component.import { createContext, useContext } from "react";

interface User {
  name: string;
}

const UserContext = createContext<User | null>(null);

function App() {
  const user = { name: "Hezekiah" };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  return <Sidebar />;
}

function Sidebar() {
  return <UserProfile />;
}

function UserProfile() {
  const user = useContext(UserContext);

  if (!user) {
    return <p>No user found</p>;
  }

  return <p>{user.name}</p>;
}

// and also State-management libraries

// For larger applications, shared state may be managed using tools such as:

// Redux Toolkit
// Zustand