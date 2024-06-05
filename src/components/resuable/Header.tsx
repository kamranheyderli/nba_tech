import { Link } from "react-router-dom"
import classes from "./style.module.css"
const Header = () => {
    return (
        <header className={classes.header}>
            <div className="logo" style={{ color: "white", backgroundColor: "blue", padding: "10px", borderRadius: "5px", width: "100px",display: "flex",justifyContent: "center",alignItems: "center" }}>
                <Link style={{ color: "white",fontWeight: "bold", }} to={"/"}>User</Link>
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