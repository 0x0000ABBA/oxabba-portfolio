import { FC, HTMLAttributes } from "react";

interface IApp extends HTMLAttributes<HTMLDivElement> { }

const App: FC<IApp> = () => {
  return (<div>Hello World</div>)
}

export default App;
