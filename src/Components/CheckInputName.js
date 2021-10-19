export default function CheckInputName() {
  const { LoginUser } = this.state;
  const minimumCharacters = 3;
  const result = LoginUser.length < minimumCharacters;
  return result;
}
