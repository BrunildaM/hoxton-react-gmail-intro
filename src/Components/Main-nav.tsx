import MainButtons from "./Main-buttons";
import MainRight from "./Main-right";
import MainSpace from "./Main-space";
import './Main-nav.css'

function MainNav() {
    return (
        <nav className="email-toolbar">
            <MainButtons />
            <MainSpace />
            <MainRight />

        </nav>
    )
}

export default MainNav