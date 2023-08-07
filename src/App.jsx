import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";

export default function App() {
  return (
    <>
      {" "}
      <main className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path={`/players/:id`} element={<SinglePlayer />} />
        </Routes>
      </main>
      <NewPlayerForm />
    </>
  );
}
