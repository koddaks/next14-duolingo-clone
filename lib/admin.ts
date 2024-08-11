import { auth } from '@clerk/nextjs/server';

const adminIds = ['user_2jCE1etvFd4CLBok17FogzXJ7Ch'];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
