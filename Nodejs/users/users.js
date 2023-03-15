const chalk=require('chalk');
const fs=require('node:fs')
const uniqid=require('uniqid')

const createUser=(username, email)=>{
    const users=loadUsers();
    const duplicates=users.filter((u)=>{
        return u.username===username;
    })
    if(duplicates.length===0){
        users.push({
            id: uniqid(),
            username: username,
            email: email,
        })
        console.log(chalk.green.inverse('added new user'));
    }else{
        console.log(chalk.red.inverse('username exists'));
    }
    
    
    saveUsers(users);

}

const readUser=(id)=>{
    const users=loadUsers();
    const user=users.find((u)=>{return u.id===id});
    console.log(chalk.blue.inverse('read user: '));
    console.log(user);
    return user;

}

const updateUser=(id, username, email)=>{
    const users=loadUsers();
    const index=users.findIndex((o)=>o.id===id);
    console.log('usera',users[index]);
    
    if(users[index].username!==username){
        users[index].username=username;
        console.log('users[index] name', users[index]);
        console.log(chalk.green.inverse('username updated'));
    }
    if(users[index].email!==email){
        users[index].email=email;
        console.log('users[index] email', users[index]);
        console.log(chalk.green.inverse('user email updated'));
    }

    saveUsers(users)

}

const deleteUser=(id)=>{
    const users=loadUsers();
    const newUsers=users.filter((u)=>{
        return u.id!==id;
    })

    saveUsers(newUsers);
}

const saveUsers=function(notes){
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('users.json', dataJSON)
}

const loadUsers=()=>{
    try {
        const dataBuffer=fs.readFileSync('users.json')
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
        
    }
}


module.exports={
    createUser: createUser,
    readUser:readUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
}