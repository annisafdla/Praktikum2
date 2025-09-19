import Navbar from "../components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div>
      <Card title="Komponen 1" description="Ini adalah komponen pertama" />
      <Card title="Komponen 2" description="Ini adalah komponen kedua" />
    </div>
    </>
  );
}
