import { useSelector } from 'react-redux';

export const useUserId = () => {
  return useSelector((state) => state.user.userId) || 'anuraghazra';
};

export const useIsAuthenticated = () => {
  return useSelector((state) => {
    const userId = state.user.userId;
    return userId && userId.length > 0;
  });
};

export const usePrivateAccess = () => {
  return useSelector((state) => state.user.privateAccess);
};

export const useUserKey = () => {
  return useSelector((state) => state.user.userKey);
};

export const useUserToken = () => {
  return useSelector((state) => state.user.token);
};
