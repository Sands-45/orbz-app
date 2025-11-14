import * as React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router";
import Sidebar from "./sidebar";
import Topnav from "./topnav";

const MainShell = () => {
  return (
    <motion.div
      initial={{ x: 30, opacity: 0, filter: "blur(20px)" }}
      exit={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, type: "keyframes" }}
      className="fixed inset-0 bg-linear-to-b from-main-background to-zinc-200 overflow-hidden flex
      flex-col justify-center"
    >
      <Topnav />
      <div className="w-full h-full flex items-center">
        <Sidebar />

        <div className="w-full h-full overflow-hidden flex flex-col overflow-y-auto no-scrollbar">
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(MainShell);
