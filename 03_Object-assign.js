const avatar = 'avatar';
const user = {
    name: 'default',
    pass: 'root',
    rigths: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
};

// const res = Object.assign({}, user, admin);

const res = {...user, ...admin, avatar};

console.log(res);