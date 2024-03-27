import { useState } from "react";
import "./App.css";
import Book from "./components/Book";
import Login from "./components/Login";

function App() {
  const [startingText, setStartingText] = useState(-1);

  return (
    <>
      {startingText != -1 ? (
        <Book startingText={startingText} />
      ) : (
        <Login onEnter={(num: number) => setStartingText(num)} />
      )}
    </>
  );
}

export default App;
