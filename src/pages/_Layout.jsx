import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";

export function Layout() {
  return (
    <div
      className={`
        flex 
        min-w-screen min-h-screen       
    `}
    >
      <Menu />
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  );
}
  