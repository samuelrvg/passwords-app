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
                id:'1', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
            },
            {
                id:'2', login:'samuel.rgv@gmail.com', password:'123456', cpf:'', obs:'Sem Observaçoões',
            }]
    },
    {
        id:'2',
        service:'rockseat',
        content: [{
            id:'1', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
        }]
    },
    {
        id:'3',
        service:'github',
        content: [{
            id:'1', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
        }]
    },
    {
        id:'4',
        service:'microsoft',
        content: [{
            id:'1', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
        }]
    },
    {
        id:'5',
        service:'corretoras',
        content: [{
            id:'1', login:'samuel.rvg@gmail.com', password:'123456', cpf:'', obs:'',
        }]
    }
];

export { data, user };