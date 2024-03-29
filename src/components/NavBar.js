import { useState,useEffect } from "react"
import { Navbar,Container } from "react-bootstrap"
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, seScrolled] = useState(false)

        useEffect(() => {
        const onScroll = () => {
        if(window.scrollY >50){
            seScrolled(true);
        }else{
            seScrolled(false);
        }
        }
        window.addEventListener("scroll", onScroll);
        return ()=> window.removeEventListener("scroll", onScroll)
    }, [])
     const onUpdateActiveLink = (value)  =>{
        setActiveLink(value);
     }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className ={activeLink ==='home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink ('home')}>Home</Nav.Link>
                        <Nav.Link href="#habilidades" className ={activeLink ==='habilidades' ? 'active navbar-link': 'navbar-link'}onClick={() => onUpdateActiveLink ('habilidades')} >Habilidades</Nav.Link>
                        <Nav.Link href="#projetos" className ={activeLink ==='projetos' ? 'active navbar-link': 'navbar-link'}onClick={() => onUpdateActiveLink ('projetos')}>Projetos</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => (console.log('Conexão Boa ! '))}><span> Conectar</span> </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}