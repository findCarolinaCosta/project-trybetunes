import { createUser } from '../services/userAPI';

async function entryCondition(e, user) {
  e.preventDefault();
  await createUser({ name: user });
}

export default entryCondition;
