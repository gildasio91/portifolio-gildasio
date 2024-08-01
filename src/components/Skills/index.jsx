import Styles from "./style.module.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaBook, FaClipboardList, FaNodeJs, FaJava, FaWordpressSimple } from "react-icons/fa";
import { SiJavascript, SiSass, SiExpress, SiPrisma, SiRedux, SiJest } from "react-icons/si";
import {MdGroups2} from "react-icons/md";
import {RiSpeakLine} from "react-icons/ri";
import {AiFillFile} from "react-icons/ai";
import { BiLogoTypescript, BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";

export const Skills = () => {

    return (
        <section className={`container ${Styles.skillsBox}`} id="skills">
            <div>
                <div className={Styles.infoTech}>
                    <div className={Styles.infoName}>
                        <h2 className="title2"> Hard & Soft Skills</h2>
                    </div>

                </div>
                <div className={Styles.imgTech}>
                    <div>
                        <h2 className="title3">Hard Skills</h2>
                        <div>
                            <ul>
                                <li>
                                    <FaHtml5 size={40} color="#EC6231" />
                                    <p className="paragraph">HTML5</p>
                                </li>
                                <li>
                                    <FaCss3Alt size={40} color="rgb(41 169 223)" />
                                    <p className="paragraph">CSS3</p>
                                </li>
                                <li>
                                    <SiJavascript size={40} color="rgb(249 224 62)" />
                                    <p className="paragraph">JavaScript</p>
                                </li>
                                <li>
                                    <FaReact size={40} color="rgb(97 219 251)" />
                                    <p className="paragraph">React</p>
                                </li>
                        
                                { <li>
                                    <SiRedux  size={40} color="rgb(118 74 188)" />
                                    <p className="paragraph">Redux</p>
                                </li> }
                                <li>
                                    <SiSass size={40} color="rgb(204 102 153)" />
                                    <p className="paragraph">SASS</p>
                                </li>
                                <li>
                                    <FaGitAlt size={40} color="rgb(240 80 51)" />
                                    <p className="paragraph">Git</p>
                                </li>
                                <li>
                                    <FaGithub size={40} color="rgb(61 117 194)" />
                                    <p className="paragraph">GitHub</p>
                                </li>
                                <li>
                                    <BiLogoTypescript size={40} color="rgb(49 120 198)" />
                                    <p className="paragraph">TypeScript</p>
                                </li>
                                <li>
                                    <FaNodeJs size={40} color="rgb(83 158 67)" />
                                    <p className="paragraph">Nodejs</p>
                                </li>
                                <li>
                                    <SiExpress size={40} color="rgb(130 130 130)" />
                                    <p className="paragraph">Express</p>
                                </li>
                                <li>
                                    <BiLogoPostgresql  size={40} color="rgb(51 103 145)" />
                                    <p className="paragraph">PostgreSQL</p>
                                </li>
                                <li>
                                    <SiPrisma  size={40}/>
                                    <p className="paragraph">Prisma</p>
                                </li>
                                <li>
                                    <SiJest size={40} color="rgb(154 67 80)" />
                                    <p className="paragraph">Jest</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="title3">Soft Skills</h2>
                        <div>
                            <ul>
                                <li>
                                    <AiFillFile size={40} color="#EC6231" />
                                    <p className="paragraph">Responsabilidade</p>
                                </li>
                                <li>
                                    <FaBook size={40} color="rgb(41 169 223)" />
                                    <p className="paragraph">Autoaprendizagem</p>
                                </li>
                                <li>
                                    <MdGroups2 size={40} color="rgb(249 224 62)" />
                                    <p className="paragraph">Trabalho em equipe</p>
                                </li>
                                <li>
                                    <FaClipboardList size={40} color="rgb(97 219 251)" />
                                    <p className="paragraph">Organização</p>
                                </li>
                                <li>
                                    <RiSpeakLine size={40} color="rgb(204 102 153)" />
                                    <p className="paragraph">Comunicação</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}