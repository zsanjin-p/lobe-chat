import { useGlobalStore } from '@/store/global';
import { systemStatusSelectors } from '@/store/global/selectors';
import { useSessionStore } from '@/store/session';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/slices/auth/selectors';

export const useFetchSessions = () => {
  const isPgliteInited = useGlobalStore(systemStatusSelectors.isPgliteInited);
  const isLogin = useUserStore(authSelectors.isLogin);
  const useFetchSessions = useSessionStore((s) => s.useFetchSessions);

  useFetchSessions(isPgliteInited, isLogin);
};
