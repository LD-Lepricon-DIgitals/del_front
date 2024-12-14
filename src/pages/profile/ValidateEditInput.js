function ValidateEditInput(formValues){
    const emptyField = findEmptyField(formValues);
    if (emptyField) {
        return {success: false, message: `Заповніть поле "${emptyField}"`}
    }

    if (!ValidateAdressLength(formValues['user_address'])){
        return { success: false, message: 'Адреса закоротка або відсутня' };
    }

    if (!ValidateNumber(formValues['user_phone'])){
        return { success: false, message: 'Неправильний формат номеру' };
    }

    if (!ValidateLoginLength(formValues['user_login'])){
        return { success: false, message: 'Логін має містити не менше 8 символів'};
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

function ValidateLoginLength(user_login){
    if (user_login.length < 8){
        return false;
    }
    return true
}

function ValidateAdressLength(user_address){
    if (user_address.length < 10){
        return false;
    }
    return true
}

export default ValidateEditInput; 