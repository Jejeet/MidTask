// solution 1
// Component composition
// Sometimes the component structure can be changed so fewer props need to be passed.
function Solution1() {
  const user = { name: "Hezekiah" };

  return (
    <Dashboard>
      <UserProfile user={user} />
    </Dashboard>
  );
}

function Dashboard({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}