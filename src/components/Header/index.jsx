import { useEffect, useState } from "react";
import Styles from "./style.module.scss";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaRegLightbulb,
} from "react-icons/fa";

export const Header = () => {

  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedMode = JSON.parse(
      localStorage.getItem("@gildasiosPortifolio:light-mode")
    );
    if (savedMode) {
      document.documentElement.classList.add("light-mode");
      setIsLightMode(true);
    }
  }, []);

  const toggleLightMode = () => {
    const html = document.documentElement;
    const result = html.classList.toggle("light-mode");

    setIsLightMode(result);
    localStorage.setItem(
      "@gildasiosPortifolio:light-mode",
      JSON.stringify(result)
    );
  };


  
  return (
    <header className={`container ${Styles.headerBox}`}>
      <div>
        <h1>Gildasio Almeida</h1>
        <div className={Styles.boxLinks}>
          <ul>
            <li>
              <button onClick={toggleLightMode}>
                {isLightMode ? (
                  <FaRegLightbulb size={21} />
                ) : (
                  <FaRegLightbulb size={21} color="white" />
                )}
              </button>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/gildasio-almeida-651605278/"
                target="blank"
              >
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
        </div>
        <div className={Styles.boxMenu}>
          <nav>
            <ul>
              <li>
                <a className="paragraph" href="#projects">
                  Projetos
                </a>
              </li>
              <li>
                <a className="paragraph" href="#skills">
                  Habilidades
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
