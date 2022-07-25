import MainActionIcons from "./Main-actionIcons"
import MainAvatar from "./Main-avatar"
import MainDateInfo from "./Main-dateInfo"
import MainEmailInfo from "./Main-emailInfo"
import './Main-header.css'

function MainHeader () {
    return  (<header className="email-content--header">
        <MainAvatar />
        <MainEmailInfo />
        <MainDateInfo />
        <MainActionIcons />

    </header>
    )
}

export default MainHeader