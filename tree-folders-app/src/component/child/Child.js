import React, {useState} from 'react';
import ch from './Child.module.css';
import openFolder from '../../image/open folder.png';
import of from './Child.module.css'
import closedFolder from "../../image/closed folder.png";
import fail from '../../image/File_font_awesome.svg.png'
import NextFolder from "../next-folder/NextFolder";
import minus from "../../image/emblem-minus.png";

const Child = (props) => {

    const [showF, setShowF] = useState(false);
    const [showSecF, setSecF] = useState(false);
    const folder = props.folder;
    const fails = props.folder.fails;

    let onFolder = () => {
        if (showF === false) {
            setShowF(true)
        }
        if (showF) {
            setShowF(false)
        }
    };

    let onNextFolder = () => {
        if (showSecF === false) {
            setSecF(true)
        }
        if (showSecF) {
            setSecF(false)
        }
    };

    let openF = <div>
        <img src={minus} alt="folder" className={of.open_folder}/>
        <img src={openFolder} alt="folder" className={of.open_folder}/>
    </div>;

    let failEl = fails.map((f) =>
        <ul className='header__table'>
            <li>
                {f.failName
                    ? <div className={ch.item}><img src={fail} alt="fail" className={of.open_folder}/> {f.failName}</div>
                    : <div onClick={onNextFolder}><div className={ch.item}>
                        {showSecF ? openF : <img src={closedFolder} alt="folder" className={of.open_folder}/>}
                        {f.folderS}</div>
                        {showSecF ? <NextFolder folder={f.folderSS}/> : ''}
                    </div>}
            </li>
        </ul>
    );

    return (
        <div className={ch.child}>
            <div onClick={(i) => onFolder(fails[i])} className={ch.item}>
                {showF ? openF : <img src={closedFolder} alt="folder" className={of.open_folder}/>}
                <span className={ch.folders}>{folder.name}</span>
            </div>
            {showF ? <div>{failEl}</div> : ''}
        </div>
    );
};

export default Child;