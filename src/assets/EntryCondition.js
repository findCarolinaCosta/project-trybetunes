import { createUser } from '../services/userAPI';

export default async function entryCondition(e) {
  const { loginuser } = this.state;
  e.preventDefault();
  this.setState({ submitlogin: false, redirect: true });
  await createUser({ name: loginuser });
}
