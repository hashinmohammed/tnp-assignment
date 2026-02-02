import Navbar from "@/components/layout/Navbarbanner";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
    </>
  );
}
