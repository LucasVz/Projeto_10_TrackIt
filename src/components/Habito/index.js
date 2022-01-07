import Topo from "../Topo";

export default function Habito({token, user}){
    console.log(token);
    return(
        <>
            <Topo user = {user}/>
            <h1>Habito</h1>
        </>
    );
}
