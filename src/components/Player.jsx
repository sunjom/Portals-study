import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef();
    const [name,setName] = useState(null);

    function submitChange(){
        setName(playerName.current.value);
        playerName.current.value="";
    }
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknow User"}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={submitChange}>Set Name</button>
      </p>
    </section>
  );
}
