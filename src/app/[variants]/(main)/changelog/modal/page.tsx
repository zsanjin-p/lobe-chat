'use client';

import { useLayoutEffect } from 'react';

import { withSuspense } from '@/components/withSuspense';
import { useQueryRoute } from '@/hooks/useQueryRoute';

/**
 * @description: Changelog Modal (intercepting routes fallback when hard refresh)
 * @example: /changelog/modal => /changelog
 * @refs: https://github.com/lobehub/lobe-chat/discussions/2295#discussioncomment-9290942
 */

const ChangelogModal = () => {
  const router = useQueryRoute();

  useLayoutEffect(() => {
    router.replace('/changelog');
  }, []);

  return null;
};

export default withSuspense(ChangelogModal);
