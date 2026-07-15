import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [note, setNote] = useLocalStorage<string>(
    "personal-note",
    ""
  );

  return (
    <main>
      <h1>Persistent Notes</h1>

      <textarea
        value={note}
        rows={10}
        placeholder="Write your note here..."
        onChange={(event) =>
          setNote(event.target.value)
        }
      />

      <p>{note.length} characters</p>

      <button onClick={() => setNote("")}>
        Clear note
      </button>
    </main>
  );
}