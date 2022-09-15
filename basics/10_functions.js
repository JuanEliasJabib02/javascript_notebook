/* 
Whats is a function

 -A function is a "subprogram" that can be called by code external or internal to the function
 -is composed of a sequence of statements called the function body
 */



// Function declaration
function functionName (params) {
    return console.log("body of the function")
};

functionName(/* arguments */)// Call the function


// Function expression 

/* 
    -In this type of function the name can be omitted
    in which case the function becomes known as an anonymous function
    - The diference between fucntion expression and function declaration is that
    the function expression cant be initializate before the function
 */

//functionExpression(); // This cant be initializate 

const functionExpression = function/*name*/(params){
    console.log("body   ")
};

functionExpression() // right way



// How works the params in a function

const sum = (a,b) => {
    console.log( a + b)
}

sum(5,6); // 5 are the arguments



// paramets by default

const hello = (name,lastname = "default value") => {
    console.log(`Hi ${name} ${lastname}`)
}

hello("juan")


// How the functions are comunicated

initApp();
function initApp(){
    console.log("init App...")
    usingApp("netflix");
}

function usingApp(name) {
    console.log(`using ${name} app`)
    shutdownApp("5 hours")
}

function shutdownApp(time) {
    console.log(`shut down the app after ${time}`)
}

// functions insade a object (using arrow functions)


const spootify = {
    play: (id) => {
        console.log(` playing the song with id ${id} `)
    },
    stop: () => {
        console.log("stop")
    },
    delete: (id ) => {
        console.log(` delete the song with id  ${id} `)
    },
    newPlayList: (name) => {
        console.log(`newPlayList${name}`)
    },
}


    


