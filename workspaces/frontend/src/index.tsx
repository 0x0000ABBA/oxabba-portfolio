import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'App';

import "styles";

const app = document.getElementById("app") as HTMLElement;
const root = createRoot(app);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
