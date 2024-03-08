import { Outlet } from "react-router-dom";
import Logo from "./Logo";

function AppLayout() {
  return (
    <div>
      <Logo />
      <Outlet />
    </div>
  );
}

export default AppLayout;
