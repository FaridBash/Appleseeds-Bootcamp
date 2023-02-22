import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import List from "./components/List";
function App() {
  const data = useRef(null);
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem("storage"))??[]
  );
  const [item, setItem] = useState("");

  // useEffect(() => {
  //   console.log("created");
  //   if (localStorage.getItem("storage") === null) {
  //     localStorage.setItem("storage", JSON.stringify([]));
  //   }
  // },[]);

  useEffect(() => {
    
    console.log("TEST");
    localStorage.setItem("storage", JSON.stringify(storage));
    console.log(
      'JSON.parse(localStorage.getItem("storage"))',
      localStorage.getItem("storage")
    );
    console.log("storage", storage);
      
  }),[item];


  function addItemHandler() {

    setStorage([data.current.value, ...storage]);
    // setItem(data.current.value);
    
  }


  function deleteHandler(i){
    console.log("clicked delete", i);
    const newArr=JSON.parse(localStorage.getItem("storage")).filter(element => {
      console.log(element);
      if(element!=i){
        return element
      }
    });
    console.log("newArr: ", newArr);
    setStorage(newArr);
    // return newArr;
  }

  

  return (
    <div className="App">
      <h1>TODO'S</h1>
      <h3>Local Storage Crud</h3>
      <div id="input-div">
        <label>Add todo</label>
        <input type="text" ref={data} />
        <button onClick={addItemHandler}>Add</button>
      </div>

      {storage.map((e, i) => {
            return <List key={i} done={'x'} item={e} deleteHandler={deleteHandler}/>;
          })
       }
    </div>
  );
}

export default App;
