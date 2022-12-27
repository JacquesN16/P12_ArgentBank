import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Routes, Route} from "react-router-dom";
import {route} from "./util/route";
import Homepage from "./app/01.Homepage/Homepage";
import Login from "./app/02.Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {constant} from "./util/constant";
import {setUser} from "./app/00.Reducer/reducer";
import Profile from "./app/03.Profile/Profile";
import {useEffect} from "react";


function App() {
    const dispatch = useDispatch()
    const user = useSelector(s => s.user)

    // const loadUserFromStorage = () => {
    //     if (user) {
    //         return
    //     }

    //     const userRes = localStorage.getItem(constant.user)
    //     const newUser = JSON.parse(userRes)

    //     dispatch(setUser(newUser))
    // }

    // useEffect(()=>{
    //     loadUserFromStorage()
    // },[user])

  return (
    <div className="App">
        <Header/>
            <Routes>
                <Route path={route.home} element={<Homepage />} />
                <Route path={route.login} element={<Login/>}/>
                <Route path={route.profile} element={<Profile/>}/>
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
