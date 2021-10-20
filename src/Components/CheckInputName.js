export default function checkInputName() {
  const { loginuser } = this.state;
  const minimumCharacters = 3;
  const result = loginuser.length < minimumCharacters;
  return result;
}
