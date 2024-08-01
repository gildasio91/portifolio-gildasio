import Styles from "./style.module.scss";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {

    return (
        <footer className={`container ${Styles.footerBox}`}>
            <div>
                <h2>Sinta-se à vontade para me contatar</h2>
                
                <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/gildasio-almeida-651605278/" target="blank">
                                <FaLinkedin size={21} color="white" />
                            </a>
                        </li>
                        <li>
                        <a href="https://wa.me/+5521970055453" target="blank">
                                <FaWhatsapp size={21} color="white" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/gildasio91" target="blank">
                                <FaGithub size={21} color="white" />
                            </a>
                        </li>
                    </ul>
                <p>gildasioalmeidasilvarj@gmail.com</p>    
            </div>
        </footer>
    )
}