import '../css/Footer.css';
import linkedin from'../img/logo/linkedin.png'
import github from'../img/logo/github.png'

const Footer = () => {
    return (
      <footer>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-saraiva/">         
        <img src={linkedin} alt="" />
        </a>
        <a className='git' href="https://github.com/pedrosvr">
        <img src={github} alt="" />
        </a>
        
      </footer>
    );
  };
  
  export default Footer;