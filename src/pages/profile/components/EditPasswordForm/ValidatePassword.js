function ValidatePasswordEdit(userPassword) {
  console.log(userPassword);

  const emptyField = findEmptyField(userPassword);

  if (emptyField) {
    return { success: false, message: `Заповніть поле "${emptyField}"!` };
  }
  if (!ValidatePasswordLength(userPassword["old_password"])) {
    return { success: false, message: "Пароль має містити більше 8 символів" };
  }
  if (!ValidatePasswordLength(userPassword["new_password"])) {
    return { success: false, message: "Пароль має містити більше 8 символів" };
  }
  return { success: true };

  function ValidatePasswordLength(password) {
    if (password.length < 8) {
      return false;
    }

    return true;
  }

  function findEmptyField(userPassword) {
    for (let key in userPassword) {
      if (userPassword[key].length <= 0) {
        return key;
      }
    }
    return null;
  }
}

export default ValidatePasswordEdit;
