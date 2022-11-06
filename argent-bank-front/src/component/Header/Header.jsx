import Logo from './argentBankLogo.png'
import {Link} from "react-router-dom";
import './header.scss'

export default function Header () {
    return (<>
        <div className="header">
            <Link to="/">
                <img className="logo" src={Logo} alt="ArgentBankLogo" />
            </Link>
            <div>
                <Link to="login" className="login">
                    <i className="fa fa-user-circle">

                    </i>
                    <span>Sign in</span>
                </Link>
            </div>
        </div>
    </>)
}
