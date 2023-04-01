import { FC, HTMLAttributes, useState } from 'react';
import "./TerminalInput.css";

interface ITerminalInput extends HTMLAttributes<HTMLDivElement> {
  onSend: (value: string) => void;
};

const TerminalInput: FC<ITerminalInput> = ({
  onSend
}) => {

  const THIN_SPACE = " ";

  const [input, setInput] = useState([THIN_SPACE]);
  const [caretIndex, setCaretIndex] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value.replaceAll(THIN_SPACE, "").split("");
    newInput.push(THIN_SPACE);
    setInput(newInput);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if (event.ctrlKey && (event.code === "KeyA" || event.code === "KeyZ")) {
      setCaretIndex(0);
      return;
    }

    switch (event.key) {
      case ("ArrowLeft"):
        setCaretIndex((state) => (state > 0 ? state - 1 : state));
        break;
      case ("ArrowRight"):
        setCaretIndex((state) => (state < input.length - 1 ? state + 1 : state));
        break;
      case ("Backspace"):
        setCaretIndex((state) => (state > 0 ? state - 1 : state));
        break;
      case ("End"):
        setCaretIndex(input.length - 1);
        break;
      case ("Home"):
        setCaretIndex(0);
        break;
      default:
        if (event.key.length === 1) setCaretIndex((state) => (state + 1));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSend && onSend(input.slice(0, -1).join(""));
    setInput([THIN_SPACE]);
    setCaretIndex(0);
  };

  return (
    <form
      className="TerminalInput"
      onSubmit={handleSubmit}
    >
      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        autoFocus
        value={input.join("").slice(0, -1)}
        type="text"
      />
      <div className="TerminalInput__display" >
        {input.map((item, index) => (
          <span
            className={"TerminalInput__char" + (index === caretIndex ? " TerminalInput__char-caret" : "")}
            key={"TerminalInput_char__" + index}
          >
            {item}
          </span>))
        }
      </div>
    </form>

  )
}

export default TerminalInput;
