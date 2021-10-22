import { createUser } from '../services/userAPI';

export default async function entryCondition(loginuser, history) {
  this.setState({ submitlogin: false });
  await createUser({ name: loginuser });
  history.push('/search');
}
