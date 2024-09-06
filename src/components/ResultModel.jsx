import {forwardRef, useImperativeHandle, useRef} from 'react';
import {createPortal} from "react-dom";
const ResultModal = forwardRef(function ResultModel({onReset, targetTime, remainingTime},ref){
    const dialog = useRef();
    //남아있는 시간이 없다면 진걸로 판단.
    const userLost = remainingTime <= 0;
    //현실에서 1초가, 여기에선 1000이기 때문에 표시를 하기 위해 1000으로 나눠줌.
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2); // 소수 2자리 까지만 출력
    const score = Math.round((1- remainingTime / (targetTime * 1000)) * 100);
    //TimeChallenge에서 useRef를 통해 사용하기 위해 useImperativeHandle사용.
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    });
    //다른곳을 클릭해도 동작하지 못하게 createPortal을 사용해 다른 Dom에 삽입함.
    return createPortal(<dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>the target time was <strong>{targetTime} seconds</strong></p>
        <p>You stopped the timer with<strong>{formattedRemainingTime} seconds left</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>, document.getElementById('modal'));
})

export default ResultModal;