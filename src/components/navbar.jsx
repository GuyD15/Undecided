const Nav = () => {
    const linkStyle = { border: '1px black', padding: '5px'};

    return (
        <nav className="main-header-menu">
            <section style={{
                display: 'flex', 
                fontFamily: 'helvetica',
                flexDirection: 'column',
                alignItems:'flex-end',
                justifyContent: 'flex-start',
            }}>
                <div style={linkStyle}>
                    <a href="/">Home</a>
                </div>
                <div style={linkStyle}>
                    <a href="./projects.jsx">Projects</a>
                </div>
                <div style={linkStyle}>
                    <a href="./contact.jsx">Contact</a>
                </div>
                <div style={linkStyle}>
                    <a href="./technologies.jsx">Technologies</a>
                </div>
            </section>
        </nav>
    );
};

export default Nav;