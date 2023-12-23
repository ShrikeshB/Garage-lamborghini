import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  const r = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={r} />
    </div>
  );
}

export default App;
