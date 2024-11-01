function ValidateRegisterInput(formValues){
    const emptyField = findEmptyField(formValues);
    if (emptyField) {
        return {success: false, message: `Заповніть поле "${emptyField}"!`}
    }

    if (!ValidateAdressLength(formValues['address'])){
        return { success: false, message: 'Адреса закоротка або відсутня' };
    }

    if (!ValidateNumber(formValues['phone_number'])){
        return { success: false, message: 'Неправильний формат номеру!' };
    }
    if (!ValidateLoginLength(formValues['login'])){
        return { success: false, message: 'Логін має містити не менше 8 символів!'};
    }
    if (!ValidatePasswordLength(formValues['password'])){
        return { success: false, message: 'Пароль має містити більше 8 символів'};
    }

    if (formValues['password'] !== formValues['submit_password']){
        return { success: false, message: 'Паролі не співпадають!' };
    }

    if (!formValues['personal_data_allow']){
        return { success: false, message: 'Ви маєте дати згоду на обробку персональних даних.'};
    }

    return {success: true} 
}
function ValidateLoginInput(formValues){
    if (!ValidateLoginLength(formValues['login'])){
        return { success: false, message: 'Логін має містити не менше 8 символів!'};
    }
    if (!ValidatePasswordLength(formValues['password'])){
        return { success: false, message: 'Неправильний пароль!'};
    }

    return {success: true} 
}

function ValidateNumber(phoneNumber){
    const phoneRegex = /^\+?3?8?(0\d{9})$/; 
    return phoneRegex.test(phoneNumber);
}
function findEmptyField(formValues) {
    for (let key in formValues) {
        if (formValues[key].length <= 0) {
            return key; 
        }
    }
    return null; 
}
function ValidatePasswordLength(password){
    if (password.length < 8){
        return false;
    }

    return true;
}
function ValidateAdressLength(address){
    if (address.length < 10){
        return false;
    }
    return true
}
function ValidateLoginLength(login){
    if (login.length < 8){
        return false;
    }
    return true
}
export {ValidateLoginInput, ValidateRegisterInput}
