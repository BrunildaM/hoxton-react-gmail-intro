import EmailActions from "./Email-actions";
import EmailBody from "./Email-body";
import MainHeader from "./Main-header";
import MainTitle from "./Main-title";

function MainEmailContent() {
    return (<article className="email-content">
        <MainTitle />
        <MainHeader />
        <EmailBody />
        <EmailActions />
    </article>
    )
}

export default MainEmailContent