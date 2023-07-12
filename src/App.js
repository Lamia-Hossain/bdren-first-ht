import "./styles/App.css";
import Layout from "./Layout";
import SearchBar from "./component/SearchBar";
import Data from "./Data.json";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-[#daf5da]">
      <div>
        <SearchBar placeholder="Enter to search" data={Data} />
        {/* <Layout /> */}
      </div>
    </div>
  );
}

export default App;
