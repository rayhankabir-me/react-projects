import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SideBar from "./components/SideBar";
import { MovieContext } from "./context";

function App() {
  const [cartMovie, setCartMovie] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartMovie, setCartMovie }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
