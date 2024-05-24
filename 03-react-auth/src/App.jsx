import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "@/Routes/RoutesIndex";
import Header from "@/Components/Header";

function App() {
  return (
    <>
    <BrowserRouter>
       <Header />
       <RoutesIndex/>
    </BrowserRouter>
    </>
  );
}

export default App;
