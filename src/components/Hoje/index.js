import Topo from "../Topo";
import Menu from "../Menu";

export default function Hoje({token, user}){
    console.log(token)
    return(
        <>
            <Topo user = {user}/>
            <h1>hoje</h1>
            <Menu />
        </>
    );
}
