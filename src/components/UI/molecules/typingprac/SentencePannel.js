import { useState, useRef } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { classAtom, classListSelector } from 'recoil/state/ClassState';
import { currentSpeedAtom, maxSpeedAtom, accurancyAtom } from 'recoil/state/StatisticState';

function SentencePannel() {
    
    console.dir('render SentencePannel');

    const [classState, setClassState] = useRecoilState(classAtom);
    const classList = useRecoilValue(classListSelector(`/api/class/${classState.packaze.name}`));
    
    const [maxSpeed, setMaxSpeed] = useRecoilState(maxSpeedAtom);
    const [currentSpeed, setCurrentSpeed] = useRecoilState(currentSpeedAtom);
    const setAccurancy = useSetRecoilState(accurancyAtom);
    
    const [inputText, setInputText] = useState('');
    const [intervalFlg, setIntervalFlg] = useState(false);
    const [renderIntervalId, setRenderIntervalId] = useState({});
    const [typingCnt, setTypingCnt] = useState(0);
    
    const inputTextDOM = useRef();
    const sentence = classState.desc;
    
    function initNextPractice(){

        if(currentSpeed > maxSpeed) setMaxSpeed(currentSpeed);

        const nextIdx = classList.indexOf(classState)+1;
        setClassState(classList[nextIdx > classList.lastIndexOf() ? 0 : nextIdx])
        setInputText('');
        inputTextDOM.current.innerHTML = '';
        setAccurancy(0);
        setCurrentSpeed(0);
        setIntervalFlg(false);
    }

    function typing(e){

        if(inputText.length == sentence.length) {
            e.preventDefault();
            if (e.key == 'Enter'){
                initNextPractice();
            } 

            return;
        }

        if (e.key == 'Enter') {
            e.preventDefault();
            return;
        }

        if (e.key == 'Backspace') {
            setInputText(inputText.substring(0, inputText.length - 1));
            return;
        }

        if(e.key.length !== 1){
            e.preventDefault();
            return;
        }
        
        setTypingCnt(typingCnt+1);

        if (e.key !== sentence.charAt(inputText.length)) {
            e.preventDefault();
            return;
        }

        setInputText(inputText + e.key);

        if(!intervalFlg){
            let runningTime = 500;
            setRenderIntervalId(setInterval(()=>{
                runningTime += 500;
                let runningMinute = runningTime / 60000;
                let txt = inputTextDOM.current.textContent;
                let speed = Math.floor(txt.length / runningMinute);
                setCurrentSpeed(speed);
            },500));
            setIntervalFlg(true);

        }else{
            if(inputText.length < sentence.length-1) return;
            clearInterval(renderIntervalId);
            setAccurancy(((sentence.length-1)/typingCnt * 100).toFixed(1));
            if(currentSpeed > maxSpeed) setMaxSpeed(currentSpeed);                           
            return;
        }
    }

    return (
        <div className="description mb-5" >
            <ul className="blockList">
                <li className="blockList">
                    <hr />
                    <div className="progress__div--white">{inputText}</div>
                    <div className="sentence__div">{sentence}</div>
                    <div contentEditable className="sentence__textarea mt-2" ref={inputTextDOM} onKeyDown={typing} html={inputText}></div>
                </li>
            </ul>
        </div>
    )
}


export default SentencePannel;