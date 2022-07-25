import MainEmailContent from "./Main-email-content";
import MainNav from "./Main-nav";

function Main () {
    return <main className="email-view">
        <MainNav />
        <MainEmailContent />
    </main>
}

export default Main