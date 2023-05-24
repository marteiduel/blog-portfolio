import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/main page/Home";

export function App() {
  return (
    <>
      <nav>
        <div className="flex justify-evenly">
          <p className=" text-blue-500 text-lg font-semibold">
            <Link to="/">Home</Link>
          </p>
          <p className=" text-blue-500 text-lg font-semibold">
            <Link to="/">ReactJS</Link>
          </p>
          <p className=" text-blue-500 text-lg font-semibold">
            <Link to="/">Javascript</Link>
          </p>
          <p className=" text-blue-500 text-lg font-semibold">
            <Link to="/">Python</Link>
          </p>
          <p className=" text-blue-500 text-lg font-semibold">
            <Link to="/">SQL</Link>
          </p>
          <p className=" text-blue-500 text-lg font-semibold">
            <Link to="/">PHP</Link>
          </p>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
