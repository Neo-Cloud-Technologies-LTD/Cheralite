import { Outlet } from "react-router-dom";


export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> will go here */}
      <main className="flex-grow">
        <Outlet /> {/* This is where your page sections will render */}
      </main>
      {/* <Footer /> will go here */}
    </div>
  );
};