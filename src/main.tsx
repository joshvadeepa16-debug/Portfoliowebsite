
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { AuthProvider } from "./app/context/AuthContext.tsx";
import { Toaster } from 'sonner';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <Toaster theme="dark" position="top-center" />
      <App />
    </AuthProvider>
  </BrowserRouter>
);
  