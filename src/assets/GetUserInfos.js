import { getUser } from '../services/userAPI';

export default async function getUsermame() {
  const { name } = await getUser();
  this.setState({
    username: name,
    loading: false,
  });
}
