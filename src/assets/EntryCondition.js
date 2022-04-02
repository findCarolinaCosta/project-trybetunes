import { createUser } from '../services/userAPI';

async function entryCondition(e, user) {
  e.preventDefault();
  await createUser({ userName: user });
}

export default entryCondition;
