import './Mother.css'
import ChildComp from './ChildComp';
export default function MotherComp(props){
    const kids= [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
        ];
    return <div className='Wrapper'>
        <h1>A Tale of 5 Ballons</h1>
        <ChildComp>
            {name=kids[0].name}
            {color=kids[0].color}    
        </ChildComp>
        <ChildComp>
            {name=kids[1].name}
            {color=kids[1].color}    
        </ChildComp>
        <ChildComp>
            {name=kids[2].name}
            {color=kids[2].color}    
        </ChildComp>
        <ChildComp>
            {name=kids[3].name}
            {color=kids[3].color}    
        </ChildComp>
        <ChildComp>
            {name=kids[4].name}
            {color=kids[4].color}    
        </ChildComp>
        </div>;        
}