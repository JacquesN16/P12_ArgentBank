import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Routes, Route} from "react-router-dom";
import {route} from "./util/route";
import Homepage from "./app/01.Homepage/Homepage";


function App() {
  return (
    <div className="App">
        <Header/>
            <Routes>
                <Route path={route.home} element={<Homepage />} />
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
