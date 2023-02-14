import './ChildComp.css'
import MotherComp from './Mother'
import Balloon from './Ballon'

export default function ChildComp(props){

    return (<div id='ChildComp' >
        <h3>{props.name}</h3>
        <Balloon/>
    </div>);
}