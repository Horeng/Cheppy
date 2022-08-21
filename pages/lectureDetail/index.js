import { useEffect, useState } from "react";
import styles from "../../styles/lectureDetail/LectureDetail.module.css";
import Home from "./components/_home";
import Learning from "./components/_learning";
import Notice from "./components/_notice";
import Assignment from "./components/_assignment";
import Exam from "./components/_exam";
import Header from "./components/_header";
import Footer from "./components/_footer";
import Menu from "./components/_menu";
import Unit from "./components/_unit";
import Lecture from "./components/_lecture";

export default function Index() {
    const [mode, setMode] = useState(0);    
    const [dropdown, setDropdown] = useState([]);

    return(
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                <Lecture/>

                <div className={styles["content"]}>
                    <div className={styles["content-left"]}>
                        <Menu mode={mode} setMode={setMode}/>
                        <div>
                            {
                                mode == 0 ?
                                <>
                                <Home/>
                                </>
                                : mode === 1 ?
                                <>
                                <Notice/>
                                </>
                                : mode === 2 ?
                                <>
                                <Learning/>
                                </>
                                : mode === 3 ?
                                <>
                                <Assignment/>
                                </>
                                    :
                                    <>
                                    <Exam/>
                                    </>
                            }
                        </div>
                    </div>
                    <div className={styles["vectorline"]}/>
                    <div className={styles["content-right"]}>
                        <Unit dropdown={dropdown} setDropdown={setDropdown}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}