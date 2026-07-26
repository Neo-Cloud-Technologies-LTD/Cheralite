import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { index: true, element: <HomePage /> },          // Route: /
      { path: "about", element: <AboutPage /> },       // Route: /about
      { path: "services", element: <ServicesPage /> }, // Route: /services
      { path: "contact", element: <ContactPage /> },   // Route: /contact
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;