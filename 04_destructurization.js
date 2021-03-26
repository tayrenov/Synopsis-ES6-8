const user = {
    name: 'default',
    pass: 'root',
    rigths: 'user'
};

//const userName = user.name;

const {name, rigths} = user;

console.log(name, rigths);

/*---------------------------*/

const user = {
    name: {
        first: 'Sam',
        second: 'Smit'
    },
    pass: 'root',
    rigths: 'user'
};


const {name: {first, second}, rigths} = user;

console.log(first, second, rigths);


/********************************/

const numbers = [3, 5, 6, 6];

const [a, b, c] = numbers;

console.log(a, b, c);

//-----------------------------------

const numbers = [3, 5, 6, 6];

const [ ,  , c] = numbers;

console.log(c);

//-----------------------------------

const numbers = [ [3, 5], [7, 6] ];

const [[a , b], [ , d]] = numbers;

console.log(a,b,d);

/***********************************/

const country = {
    name: 'England',
    population: 220000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }

}

const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

console.log(maleUnder18,femAdult);