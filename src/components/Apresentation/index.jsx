import Styles from "./style.module.scss";
import photo from "../../assets/gildasioPerfil.jpeg";
// import curriculum from "../../assets/";

export const Apresentation = () => {
  return (
    <section className={`container ${Styles.apresentationBox}`}>
      <div>
        <div className={Styles.boxInfo_Img}>
          <div className={Styles.boxInfo}>
            <h1 className="title1">
              Hello, I'm Gildasio Almeida, Frontend Developer and Backend Developer
            </h1>
            <p className="paragraph">
            I am a Full Stack Developer currently pursuing a Bachelor's degree in Systems Analysis and Development at PUCRS. I completed an intensive Full Stack Web Development course at Kenzie Academy Brasil, with over 2,000 hours of classes. I have a strong foundation in Front End and Back End technologies, with skills in HTML, CSS3, JavaScript (ES6+), React, Node.js, and SQL. I am seeking opportunities to apply my technical skills and collaborate on innovative projects, with a constant focus on continuous learning and a passion for technology.
            </p>
          </div>
          <div className={Styles.boxImg}>
            <img src={photo} alt="Perfil Image" />
          </div>
        </div>
        <div className={Styles.boxButton}>
          <a  download="">Download CV</a>
        </div>
        
      </div>
    </section>
  );
};
