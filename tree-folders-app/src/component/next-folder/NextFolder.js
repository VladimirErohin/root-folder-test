import React from 'react';
import of from "../child/Child.module.css";
import fail from "../../image/File_font_awesome.svg.png";

const NextFolder = (props) => {

    let nF = props.folder.map(fn=>
        <ul>
            <li className={of.item}><img src={fail} alt="fail" className={of.open_folder}/>{fn.failSName}</li>
        </ul>
        );

    return (
        <div>
            {nF}
        </div>
    );
};

export default NextFolder;