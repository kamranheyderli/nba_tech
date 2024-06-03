import { Link } from "react-router-dom"
import classes from "./style.module.css"
const Header = () => {
    return (
        <header className={classes.header}>
            <div className="logo">
                <h1>User</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/addUser"}>Add-User</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header