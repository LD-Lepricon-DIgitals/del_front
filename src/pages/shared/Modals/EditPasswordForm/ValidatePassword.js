import { getTestUser, setTestUser } from "../../../profile/TestUser";

const testUser = getTestUser();

function ValidatePasswordEdit(formValues){

    const emptyField = findEmptyField(formValues);

    if (emptyField) {
        return {success: false, message: `Заповніть поле "${emptyField}"!`}
    }
    if(!PasswordCheck(formValues['password'])){
        return { success: false, message: 'Неправильний пароль'};
    }
    if (!ValidatePasswordLength(formValues['password'])){
        return { success: false, message: 'Пароль має містити більше 8 символів'};
    }
    if (!ValidatePasswordLength(formValues['new_password'])){
        return { success: false, message: 'Пароль має містити більше 8 символів'};
    }
    return {success: true}
} 

function ValidatePasswordLength(password){
    if (password.length < 8){
        return false;
    }

    return true;
}

function PasswordCheck(prop) {
    if(!(prop == testUser.password)) {
        return false;
    }
    return true;

}

function findEmptyField(formValues) {
    for (let key in formValues) {
        if (formValues[key].length <= 0) {
            return key; 
        }
    }
    return null; 
}
export default ValidatePasswordEdit;