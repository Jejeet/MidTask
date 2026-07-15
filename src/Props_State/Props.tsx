// Props are values passed from a parent component to a child component. They allow components to receive data and configuration from outside.

interface WelcomeProps {
  name: string;
}

function Welcome({ name }: WelcomeProps) {
  return <h1>Welcome, {name}</h1>;
}

function App() {
  return <Welcome name="Adewumi" />;
}

// In this example, name is a prop. The Welcome component receives it from App.

// Props are generally: Read-only, Passed from parent to child, Used to configure a component