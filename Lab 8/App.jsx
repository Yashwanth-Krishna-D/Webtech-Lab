import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";

function Home() {
  return <h2 className="text-center mt-4">Welcome to the Blog Dashboard</h2>;
}

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
