import Logo from './argentBankLogo.png'
import {Link, useNavigate} from "react-router-dom";
import './header.scss'
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../app/00.Reducer/reducer";

export default function Header () {
    const dispatch = useDispatch()
    const user = useSelector(s => s.user.user)
    const navigate = useNavigate()

    const logOut = () => {

        dispatch(setUser(null))
        navigate('/')
    }

    return (<>
        <div className="header">
            <Link to="/">
                <img className="logo" src={Logo} alt="ArgentBankLogo" />
            </Link>
            <div>
                {user === null ? <Link to="login" className="login">
                    <i className="fa fa-user-circle">

                    </i>
                    <span>Sign in</span>
                </Link> :
                <a>
                    <i className="fa fa-user-circle">

                    </i>
                    <button
                        onClick={logOut}
                    >
                        <span>Log out</span>
                    </button>
                </a>}


            </div>
        </div>
    </>)
}
