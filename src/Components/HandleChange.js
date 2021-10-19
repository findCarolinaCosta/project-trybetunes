export default function HandleChange({ target }) {
  const { name, value } = target;
  this.setState({ [name]: value });
}
