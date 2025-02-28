import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.jsx";
import Historia from "./pages/Historia.jsx";
import Detalhes from "./pages/Detalhes.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/historia",
                element: <Historia />,
            },
            {
                path: "/detalhes/:id",
                element: <Detalhes />,
            },
            {
                path: "/cadastro",
                element: <Cadastro />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ]}
  ]);
  export default router;