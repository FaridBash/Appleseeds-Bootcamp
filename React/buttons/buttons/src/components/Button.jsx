

export default function Btn(props){
    const myText=props.txt;
    if(myText==='Important'){
        return(
            <button><b>{myText}</b></button>)
    }
    else
    return (
        <button>{myText}</button>);
}