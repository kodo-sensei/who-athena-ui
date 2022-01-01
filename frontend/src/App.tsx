import LinearProgress from "@mui/material/LinearProgress";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RootState } from "./app/storeTypes";
import Header from "./lib/components/header/Header";
import SideBar from "./lib/components/sidebar/SideBar";
import Home from "./pages/home/Home";

function App() {
  const codes = useSelector((state: RootState) => state.codes);
  return (
    <>
      <Header />
      {codes.status === "loading" && (
        <div>
          <LinearProgress />
        </div>
      )}

      <div className="flex min-h-screen">
        <div className="w-64 border-r bg-gray-50 overflow-y-scroll max-h-screen">
          <SideBar />
        </div>
        <div className="flex-1 overflow-y-scroll max-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
