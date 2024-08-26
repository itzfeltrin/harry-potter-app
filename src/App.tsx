import "./App.css";
import Layout from "./components/layout/Layout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import CharacterList from "./pages/Character/List/List";
import { CharacterDetails } from "./pages/Character/Details";

const router = createBrowserRouter([
  {
    path: "character",
    children: [
      {
        path: "list",
        element: <CharacterList />,
      },
      {
        path: ":id",
        element: <CharacterDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/character/list" />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
