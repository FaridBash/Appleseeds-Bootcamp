function lightORDark(color){

    const myColor=color.toLowerCase();

    switch (color){

        case ('yellow'):
            return "light color";
        case ('orange'):
            return "light color";
        case ('pink'):
            return "light color";
        case ('blue'):
            return "dark color";
        case ('purple'):
            return "dark color";
        case ('brown'):
            return "dark color";
        default:
            return "Unkown color";

    }
}

console.log(lightORDark('yellow'));
console.log(lightORDark('brown'));
console.log(lightORDark('black'));