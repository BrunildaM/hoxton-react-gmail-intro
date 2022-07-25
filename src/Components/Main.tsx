import MainEmailContent from "./Main-email-content";
import MainNav from "./Main-nav";
import WritingEmails from "./Writing-emails";

function Main () {
    return <main className="email-view">
        <MainNav />
        <MainEmailContent />
        <WritingEmails />
    </main>
}

export default Main