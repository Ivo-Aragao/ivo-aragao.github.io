import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {
  return (
      <div id="portfolio">
        <h1>Ivo Aragão</h1>
        <Sidebar />
        <MainContent />
      </div> 
  );
}

export default App
