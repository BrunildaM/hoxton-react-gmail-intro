import MainSenderInfo from "./Main-senderInfo";
import MainUserInfo from "./Main-userInfo";
import './Main-emailInfo.css'

function MainEmailInfo () {
    return <div className="email-info">
        <MainSenderInfo />
        <MainUserInfo />          
    </div>
}

export default MainEmailInfo