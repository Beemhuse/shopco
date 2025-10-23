import { RouterProvider } from "react-router";
import "./App.css";
import Button from "./components/ui/button";
import router from "./router";

function App() {
  return (
     <RouterProvider router={router} />

  );
}

export default App;
