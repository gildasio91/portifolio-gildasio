import Styles from "./style.module.scss";
import kenziehub from "../../assets/kenziehub.png";
import hamburgueria from "../../assets/hamburgueria.png";
import carapi from "../../assets/carapi.png";


export const MyProject = () => {
  return (
    <section className={`container ${Styles.projectsBox}`} id="projects">
      <div>
        <div className={Styles.projectsInfo}>
          <h2 className="title2">Meus Projetos</h2>
        </div>
        <div className={Styles.projectsCard}>
          <ul>
            <div>
              <li>
                <div className={Styles.card}>
                  <div className={`${Styles.cardImg}`}>
                    <img src={kenziehub} alt="Kenzie Hub" />
                    <div className={Styles.cardDescription}>
                      <h3>Kenzie Hub</h3>
                      <p>Layout responsivo em ReactJs para projeto Kenzie Hub. React, JavaScript, SASS</p>
                    </div>
                    <div className={Styles.cardLink}>
                      <div>
                        <a
                          href="https://react-entrega-kenzie-hub-gildasio91.vercel.app/"
                          target="_blank"
                        >
                          <p>Visualizar</p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/gildasio91/react-entrega-kenzie-hub-gildasio91"
                          target="_blank"
                        >
                          <p>GitHub</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className={Styles.card}>
                  <div className={`${Styles.cardImg}`}>
                    <img src={hamburgueria} alt="Site Hamburgueria" />
                    <div className={Styles.cardDescription}>
                      <h3>Site Hamburgueria</h3>
                      <p>Layout responsivo em ReactJs para projeto de site de hamburgueria. React, JavaScript, SASS</p>
                    </div>
                    <div className={Styles.cardLink}>
                      <div>
                        <a
                          href="https://react-entrega-s3-template-hamburgueria-gildasio91.vercel.app/"
                          target="_blank"
                        >
                          <p>Visualizar</p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/gildasio91/hamburgueria-gildasio91"
                          target="_blank"
                        >
                          <p>GitHub</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className={Styles.card}>
                  <div className={`${Styles.cardImg}`}>
                    <img
                      src={carapi}
                      alt="cars API"
                    />
                    <div className={Styles.cardDescription}>
                      <h3>API de catálogo de carros</h3>
                      <p>Backend project. TypeScript, NodeJs, Express, Jest, PostgreSQL, Prisma, Helmet, Zod</p>
                    </div>
                    <div className={Styles.cardLink}>
                      <div>
                        <a
                          href="https://github.com/gildasio91/car_catalog_api_gildasio91/tree/main"
                          target="_blank"
                        >
                          <p>GitHub</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};
