import backArrow from "../assets/icons/back-arrow.png";

function WritingEmailsHeader () {
    return <header>
    <nav className="header-nav">
        <ul className="header-nav--icons">
            <li><img src={backArrow} alt="back-arrow" width={20}/></li>
            <li><img src="https://cdn-icons-png.flaticon.com/512/57/57055.png" alt="" width={20} /></li>
            <li>Freepik Company (no-reply@freepik.com)</li>
        </ul>
        <ul className="header-nav--send">
            <li><img src="https://cdn-icons-png.flaticon.com/512/8036/8036036.png" alt="" width={20} /></li>
        </ul>
    </nav>
</header>
}

export default WritingEmailsHeader
