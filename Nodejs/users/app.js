const chalk=require('chalk');
const users=require('./users.js')
// const validator=require('validator');
const yargs=require('yargs')

yargs.version('1.1.0');

yargs.command({
    'command': 'create',
    'describe': 'create new user',
    builder:{
        username:{
            describe: 'username',
            demandOption:true,
            type:'string'
        },
        email:{
            describe: 'user email',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
       users.createUser(argv.username, argv.email)
    }
})
yargs.command({
    'command': 'read',
    'describe': 'read a user',
    builder:{
        id:{
            describe: 'id',
            demandOption:true,
            type:'string'
        },
        
    },
    handler(argv){
       users.readUser(argv.id);
    }
})
yargs.command({
    'command': 'update',
    'describe': 'update a user',
    builder:{
        id:{
            describe: 'id',
            demandOption:true,
            type:'string'
        },
        
    },
    handler(argv){
       users.updateUser(argv.id, argv.username, argv.email);
    }
})
yargs.command({
    'command': 'delete',
    'describe': 'delete a user',
    builder:{
        id:{
            describe: 'id',
            demandOption:true,
            type:'string'
        },
        
    },
    handler(argv){
       users.deleteUser(argv.id);
    }
})


console.log(yargs.argv);