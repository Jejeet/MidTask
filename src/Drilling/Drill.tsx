// Prop drilling happens when data is passed through multiple component levels, even though some intermediate components do not need the data.

function App() {
  const user = { name: "Hezekiah" };

  return <Dashboard user={user} />;
}

function Dashboard({ user }: { user: { name: string } }) {
  return <Sidebar user={user} />;
}

function Sidebar({ user }: { user: { name: string } }) {
  return <UserProfile user={user} />;
}

function UserProfile({ user }: { user: { name: string } }) {
  return <p>{user.name}</p>;
}

// Dashboard and Sidebar only pass the data down. They do not use it themselves.

// This is not always a problem. Passing props is simple and explicit. It becomes difficult when:

// The component tree is deeply nested
// Many values must be passed
// Several components need the same data
// Updating the structure requires changing many prop definitions




