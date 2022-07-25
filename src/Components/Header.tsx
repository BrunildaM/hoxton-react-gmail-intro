import Headericons from "./Header-left";
import Headersearch from "./Header-right";
import './Header.css'

function Header () {
    return <header className="header">
        <Headericons />
        <Headersearch />  
    </header>
}

export default Header