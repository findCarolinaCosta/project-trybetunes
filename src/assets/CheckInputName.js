function checkInputName(user) {
  const minimumCharacters = 3;
  const result = user.length < minimumCharacters;
  return result;
}

export default checkInputName;
