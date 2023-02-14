
import './image.css'

export default function MyImage(props){

    const SrcLink=props.srcLink;
    const desc=props.desc;
    const MyH1=props.MyH1;
    const RandomText=props.p;
    const Alink=props.ALinktxt;
    const ATxt=props.Atxt;

    return (<div id='imageComp'>
        
        <img src={SrcLink} alt={desc} id='image'/>
        <h1>{MyH1}</h1>
        <p>{RandomText}</p>
        <div id='links'>
        <a href={Alink}>{ATxt}</a>
        <a href={Alink}>{ATxt}</a>
        </div>
        </div>);

}