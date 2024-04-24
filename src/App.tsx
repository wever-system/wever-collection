import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
];

const RenderRouter = () => useRoutes([...routes]);

function App() {
  return (
    <>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
