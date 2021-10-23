import { createUser } from '../services/userAPI';

export default async function entryCondition() {
  const { loginuser } = this.state;
  this.setState({ submitlogin: false, redirect: true });
  await createUser({ name: loginuser });
}
