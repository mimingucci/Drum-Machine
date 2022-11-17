import React, {ReactDOM} from "react";
import Drum from '../sass/drumNode.module.scss';
import classNames from "classnames/bind";
import clsx from "clsx";
const cx=classNames.bind(Drum);
function DrumNode({index, src, keyTrigger,  handleRef, keyCode, valueSource}) {
    const refe=React.createRef(null);
    function handleClick(){
        refe.current.volume=valueSource;
      refe.current.play();
      handleRef.current.innerHTML=keyTrigger;
    }
    function handleOnKeyDown(event){
        if(event.keyCode===keyCode){
            
            handleClick();
        }
        
    }
    window.addEventListener("keydown", handleOnKeyDown);
    return ( <div onClick={handleClick} className={clsx(cx("drum"))} id={index} onKeyDown={handleOnKeyDown}>
        <span>{keyTrigger}</span>
        <audio src={src} ref={refe}></audio>
    </div> );
}

export default DrumNode;