const user = {
    email:'samuel.rvg@gmail.com',
    password:'123456'
}

const data = [
    {
        id:'1',
        service:'gmail',
        content: [
            {
                id:'1', service:'gmail', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
            },
            {
                id:'2', service:'gmail', login:'samuel.rgv@gmail.com', password:'123456', cpf:'', obs:'',
            }]
    },
    {
        id:'2',
        service:'rockseat',
        content: [{
            id:'1', service:'rockseat', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
        }]
    },
    {
        id:'3',
        service:'github',
        content: [{
            id:'1', service:'github', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
        }]
    },
    {
        id:'4',
        service:'microsoft',
        content: [{
            id:'1', service:'microsoft', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
        }]
    },
    {
        id:'5',
        service:'corretoras',
        content: [{
            id:'1', service:'clear', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
        }]
    }
];

// const data = [
//     {
//         id:1, service:'gmail', login:'samuel.rvg@gmail.com', password:'123456'
//     },
//     {
//         id:2, service:'gmail', login:'samuel.rvg@gmail.com', password:'123456'
//     },
//     {
//         id:3, service:'rockseat', login:'samuel.rvg@gmail.com', password:'123456'
//     },
//     {
//         id:4, service:'github', login:'samuel.rvg@gmail.com', password:'123456'
//     },
//     {
//         id:5, service:'microsoft', login:'samuel.rvg@gmail.com', password:'123456'
//     },
//     {
//         id:6, service:'corretora clear', login:'samuel.rvg@gmail.com', password:'123456'
//     }
// ]

export { data, user };