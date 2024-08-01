import Styles from "./style.module.scss";
import photo from "../../assets/gildasioPerfil.jpeg";
import curriculum from "../../assets/CV - Gildasio Almeida.pdf";

export const Apresentation = () => {
  return (
    <section className={`container ${Styles.apresentationBox}`}>
      <div>
        <div className={Styles.boxInfo_Img}>
          <div className={Styles.boxInfo}>
            <h1 className="title1">
              Olá, sou Gildasio Almeida, Desenvolvedor Frontend e Backend.
            </h1>
            <p className="paragraph">
              Sou um Desenvolvedor Full Stack atualmente cursando o Bacharelado
              em Análise e Desenvolvimento de Sistemas na PUCRS. Concluí um
              curso intensivo de Desenvolvimento Web Full Stack na Kenzie
              Academy Brasil, com mais de 2.000 horas de aulas. Tenho uma sólida
              base em tecnologias Front End e Back End, com habilidades em HTML,
              CSS3, JavaScript (ES6+), React, Node.js e SQL. Estou em busca de
              oportunidades para aplicar minhas habilidades técnicas e colaborar
              em projetos inovadores, com um foco constante no aprendizado
              contínuo e uma paixão por tecnologia
            </p>{" "}
          </div>
          <div className={Styles.boxImg}>
            <img src={photo} alt="Perfil Image" />
          </div>
        </div>
        <div className={Styles.boxButton}>
          <a href={curriculum} download="Currículo Gildasio Almeida.pdf">Download CV</a>
        </div>
      </div>
    </section>
  );
};
