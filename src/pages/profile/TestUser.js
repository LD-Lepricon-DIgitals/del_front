let testUser = {
    name: 'Даша',
    surname: 'Бургер',
    patronymic: 'Бургерович',
    address: 'Хрещатик 12',
    phone_number: '0973567823',
    login: 'testuser',
    password: 'testuser123',
    new_password: ' '
};

export const setTestUser = (newUser) => {
    testUser = { ...testUser, ...newUser };
};

export const getTestUser = () => testUser;

