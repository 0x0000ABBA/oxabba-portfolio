import TerminalInput from 'components/TerminalInput/TerminalInput';
import { FC, useEffect, useRef, useState } from 'react';
import "./Terminal.css";

interface TerminalProps {
  startMessages?: string[]
};

const THIN_SPACE = " ";

const messages = [
"Привет, %USERNAME%!",
"",

];

const Terminal: FC<TerminalProps> = (
  {
    startMessages = messages
  }
) => {

  const [messages, setMessages] = useState<string[]>([]);

  const onSend = (value: string) => {
    messagesQueue.current = [...messagesQueue.current, value];
  };

  const messagesQueue = useRef<string[]>(startMessages);

  const animateParagraph = () => {
    const elem = messagesQueue.current.shift();
    if (elem) {
      setMessages((state) => ([...state, elem]))
    }
    const delay = (((elem?.length || 0) / 150) * 1000) || 100;
    setTimeout(animateParagraph, delay);
  };

  useEffect(() => {
    animateParagraph();
  }, []);

  const animateString = (str: string) => {
    return str
      .split("")
      .map((item, index) => (<span
        className="Terminal__char"
        style={{ animationDelay: (index / 150 + "s") }}
        key={"Terminal_char__" + index}
      >
        {item}
      </span>
      ));
  };

  return (
    <div className="Terminal">
      {messages.map((item, index) => (
        <p key={"Terminal_message__" + index}>
          {animateString(item)}
        </p>)
      )}
      <div className="Spread"></div>
      <TerminalInput onSend={onSend} />
    </div>
  )
};

export default Terminal;
