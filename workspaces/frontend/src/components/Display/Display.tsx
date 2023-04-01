import { FC, HTMLAttributes } from "react";
import "./Display.css";

interface IDisplay extends HTMLAttributes<HTMLDivElement> {
  leftColumn: React.ReactNode,
  rightColumn: React.ReactNode
};

const Display: FC<IDisplay> = (
  {
    leftColumn,
    rightColumn
  }
) => {

  return (
    <div className="Display__outer">
      <div className='Display'>
        <div className="Display__column Display__column_left">
          {leftColumn}
        </div>
        <div className="Display__column Display__column_right">
          {rightColumn}
        </div>
      </div>
    </div>
  )
}

export default Display;
