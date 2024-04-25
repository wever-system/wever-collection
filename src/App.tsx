import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DailyScrumble from "./pages/DailyScrumble";
import Place from "./pages/Place";
import BookMark from "./pages/BookMark";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dailyscrumble",
    element: <DailyScrumble />,
  },
  {
    path: "/place",
    element: <Place />,
  },
  {
    path: "/bookmark",
    element: <BookMark />,
  },
  {
    path: "*",
    element: <Home />,
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
