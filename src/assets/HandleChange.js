function handleChange({ target }) {
  const { name, value } = target;
  this.setState({ [name]: value });
}

export default handleChange;
