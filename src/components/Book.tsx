import { useState } from "react";
import data from "../texts";

interface Props {
  startingText: number;
}

const Book = ({ startingText }: Props) => {
  const [currentText, setCurrentText] = useState(startingText);

  const listButtons = data[currentText].buttons.map((button) => {
    return (
      <div
        key={currentText * button.target}
        className="btn"
        onClick={() => setCurrentText(button.target)}
      >
        {button.text}
      </div>
    );
  });

  return (
    <>
      <span className="title">Où sont-ils passés ?</span>
      <p
        className="main-text"
        dangerouslySetInnerHTML={{
          __html: data[currentText].text.replace(/\n/g, "<br />&emsp;"),
        }}
      ></p>
      {listButtons}
      <span className="powered">
        Powered by <a href="https://github.com/raphael384">raphael384</a>
      </span>
    </>
  );
};

export default Book;
