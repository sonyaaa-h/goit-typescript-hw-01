type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

const initialValues: User = {
    name: 'John',
    surname: 'Doe',
    email: 'user@mail',
    password: 'password123'
}

function createOrUpdateUser(initialValues: User, updateValues: Partial<User>) {
    return {...initialValues, ...updateValues};
}

createOrUpdateUser(initialValues,{
    email: 'user@mail.com',
    password: 'password123'
});
