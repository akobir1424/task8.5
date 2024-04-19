import { Outlet, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Orders/Orders";
import Createorder from "../pages/CreateOrder/Createorder";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Outlet />}>
          <Route path="createorder" element={<Createorder />} />
          <Route index element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}
