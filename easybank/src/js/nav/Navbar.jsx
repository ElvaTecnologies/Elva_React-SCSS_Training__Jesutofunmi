import React, {useState, useEffect, useRef} from 'react'
import logo from '../../images/logo.svg'
import close from '../../images/icon-close.svg'
import hamburger from '../../images/icon-hamburger.svg'



const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksheight = linksRef.current.getBoundingClientRect().height;
    if (showLink) {
      linksContainerRef.current.style.height = `${linksheight}px`
    } else {
      linksContainerRef.current.style.height = `0px`
    }

  }, [showLink])

console.log(showLink);
  return (
    <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className="nav-toggle" onClick={() => setShowLink(!showLink)}>
            {showLink? (<img src={hamburger} width='30px' alt="menu" />) : (<img src={close} width='30px' alt="close" />)}
            </button>
          </div>
          <div className="nav-desktop" ref={linksContainerRef}>
            <div className="nav-links" ref={linksRef}>
              <ul className="links">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
            </div>
            <div className="nav-right">
              <button className='nav-button'>Request invite</button>
            </div>
          </div>
        </div>  
      </nav>
  )
}

export default Navbar