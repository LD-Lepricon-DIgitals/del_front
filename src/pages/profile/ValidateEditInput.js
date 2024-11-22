function ValidateEditInput(formValues){
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

function ValidateAdressLength(address){
    if (address.length < 10){
        return false;
    }
    return true
}

export default ValidateEditInput; 