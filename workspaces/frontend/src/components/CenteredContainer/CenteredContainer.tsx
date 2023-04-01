import { FC, HTMLAttributes } from "react";
import "./CenteredContainer.css";

interface ICenteredContainer extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
};

const CenteredContainer: FC<ICenteredContainer> = ({
  children
}) => {
  return (
    <div className='CenteredContainer'>
        {children}
    </div>
  )
}

export default CenteredContainer;
