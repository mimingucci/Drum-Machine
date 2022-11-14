import React, {ReactDOM} from "react";
import Drum from '../sass/drumNode.module.scss';
import classNames from "classnames/bind";
import clsx from "clsx";
const cx=classNames.bind(Drum);
function DrumNode({index, src, keyTrigger,  handleRef, keyCode}) {
    const refe=React.createRef(null);
    function handleClick(){
      refe.current.play();
      handleRef.current.innerHTML=keyTrigger;
    }
    function handleOnKeyDown(event){
        if(event.keyCode===keyCode){
            handleClick();
            ReactDOM.findDOMNode(document.querySelector(`#${index}`)).classList.add(cx("active"));
        }
        
    }
    window.addEventListener('keydown', handleOnKeyDown);
    return ( <div onClick={handleClick} className={clsx(cx("drum"), `this${index}`)} id={index}>
        <span>{keyTrigger}</span>
        <audio src={src} ref={refe}></audio>
    </div> );
}

export default DrumNode;