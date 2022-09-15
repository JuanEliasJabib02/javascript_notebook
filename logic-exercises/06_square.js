//Paint a hollow square in the console.log()


const square =(number) => {

    const side = (number) => {

    let side = "";

    for( let i = 0; i < number ; i ++){
        side+= "*";
    }

      return side;
    }

    let draw = side(number) + "\n";

    let content = "";

    for(let i=2; i < number; i++){
        content = "*"

        for(let x = 2; x < number; x++){
          content += " ";
        }

        content += "*";

        draw += content +"\n"
    }
    draw += side(number);

    return draw;
}

console.log(square(4))