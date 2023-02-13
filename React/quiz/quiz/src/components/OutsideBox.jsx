import './OutsideBox.css'
import Title from'./QuizTitle'
import Q1Title from'./Q1Title'
import Bar from'./Slider'
import Q2 from'./Q2'
function Box(){
    return (<div className="box">
        <Title/>
        <Q1Title/>
        <Q2/>
    </div>);
}


export default Box;