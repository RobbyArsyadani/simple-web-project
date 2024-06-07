import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="container-fluid px-0">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
