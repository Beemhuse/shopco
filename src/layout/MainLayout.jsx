import { Outlet } from "react-router";
import Navbar from "../components/navbar";

export default function MainLayout() {
  return (
    <div className="flex w-full flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6">
        <Outlet /> {/* Render matched child route here */}
      </main>
    </div>
  );
}
