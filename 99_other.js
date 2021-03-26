let names = ['Ivan', 'Ann', 'Ksenia', 'Vladimir'];

let shirtNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shirtNames);


let answers = ['IvAn', 'ANNA', 'hello'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);


let name ='Alex',
    age = 20;

console.log(`Пользователь ${name}, ${age}`);


/********************/

const x = 25, y = 25;

//const coords = {
//    x: x,            <- Старый формат записи
//    y: y,
//    calcSq: function() {}
//}

const coords = {x,y,      //<- Новый формат
    calcSq() {
        console.log(this.x*this.y);
    }
}; 

console.log(coords);
coords.calcSq();

/**************************/

function connect({
    host = 'localhost',
    port = '3000',
    user = 'default'} = {}) {console.log(`host: ${host}, port: ${port}, user: ${user}`)
}
    
connect({
    port:232,
    host:'af'
});

connect();