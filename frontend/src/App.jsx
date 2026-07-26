import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Add more pages here later (e.g., /about, /contact)
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;