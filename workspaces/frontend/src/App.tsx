import { CenteredContainer, Display } from "components";
import Terminal from "modules/TerminalDisplay/Terminal";
import { FC, HTMLAttributes, useState } from "react";

interface IApp extends HTMLAttributes<HTMLDivElement> {

}

const App: FC<IApp> = () => {

  return (
   <CenteredContainer><Display leftColumn={<Terminal/>} rightColumn={<Terminal/>}/></CenteredContainer>

  )
}

export default App;
