import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import { DynamicLayoutProps } from '@/types/next';
import { RouteVariants } from '@/utils/server/routeVariants';

import HotkeySetting from './features/HotkeySetting';

export const generateMetadata = async (props: DynamicLayoutProps) => {
  const locale = await RouteVariants.getLocale(props);
  const { t } = await translation('setting', locale);
  return metadataModule.generate({
    description: t('header.desc'),
    title: t('tab.hotkey'),
    url: '/settings/hotkey',
  });
};

const Page = () => {
  return <HotkeySetting />;
};

Page.displayName = 'HotkeySetting';

export default Page;
