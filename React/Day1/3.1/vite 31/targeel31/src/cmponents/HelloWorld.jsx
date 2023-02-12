const HelloWorld = () => {

    const data = ["hello", "world"];


    const sentence=`${data[0]} ${data[1]}`;

    // let sentence = `The fact that ${user.name} is ${user.age} years old and his hobby is ${user.hobby} amazes me.`;
 
    return (
       <div className="container">
          <div>
             <p>{sentence}</p>
          </div>
       </div>
    );
 };


 export default HelloWorld;