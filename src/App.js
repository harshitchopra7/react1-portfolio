import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";

// Components to be made
// 1. Navbar 
// 2. About
// 3. Tech Stack
// 4. Experience
// 5. Projects

function App() {
  return( 
    <div className="App">
      <Navbar />
      <About />
      <TechStack />
    </div>
  );
}

export default App;
