import React, {useState} from 'react';
import Child from "../child/Child";
import r from './Root.module.css';
import openFolder from "../../image/open folder.png";
import f from "../child/Child.module.css";
import closedFolder from "../../image/closed folder.png";
import minus from "../../image/emblem-minus.png"

const Root = () => {

    const [showLi, setShowLi] = useState(false);

    const folder = [
        {
            name: 'Child 1',
            fails: [
                {failName: "Grandchild 1.1"},
                {failName: "Grandchild 1.2"},
                {failName: "Grandchild 1.3"}
            ]
        },
        {
            name: 'Child 2',
            fails: [
                {failName: "Grandchild 2.1"},
                {
                    folderS: "Grandchild 2.2",
                    folderSS: [
                        {failSName: "Grandchild 2.2.1"},
                        {failSName: "Grandchild 2.2.2"},
                        {failSName: "Grandchild 2.2.3"}
                    ]
                }]
        },
        {
            name: 'Child 3',
            fails: [
                {failName: "Grandchild 3.1"}
            ]
        }
    ];


    let childElement = folder.map((f) =>
        <ul className='header__table'>
            <li>
                <Child folder={f}/>
            </li>
        </ul>
    );

    let onRoot = () => {
        if (showLi === false) {
            setShowLi(true)
        }
        if (showLi) {
            setShowLi(false)
        }
    };

    let openF = <div>
        <img src={minus} alt="folder" className={f.open_folder}/>
        <img src={openFolder} alt="folder" className={f.open_folder}/>
    </div>;

    return (
        <div className={r.root}>
            <div onClick={onRoot} className={r.item}>
                {showLi ? openF : <img src={closedFolder} alt="folder" className={f.open_folder}/>} Root
            </div>
            {showLi ? <div>{childElement}</div> : ''}
        </div>
    );
};

export default Root;