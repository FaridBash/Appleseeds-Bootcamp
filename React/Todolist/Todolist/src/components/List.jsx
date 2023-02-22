import './List.css'


export default function List({deleteHandler, item, done}){


    return <div id='todo-list'>
        <label htmlFor=""></label>
        <p><label htmlFor="">{done+" - "}</label> {item}</p>
        <button onClick={()=>{deleteHandler(item)}}>Delete</button>
    </div>

}