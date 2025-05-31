'use client';

import {
  Form,
  type FormGroupItemType,
  Icon,
  Select,
  SliderWithInput,
  highlighterThemes,
  mermaidThemes,
} from '@lobehub/ui';
import { Skeleton } from 'antd';
import isEqual from 'fast-deep-equal';
import { Loader2Icon } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FORM_STYLE } from '@/const/layoutTokens';
import { useUserStore } from '@/store/user';
import { settingsSelectors } from '@/store/user/selectors';

import ChatPreview from './ChatPreview';
import HighlighterPreview from './HighlighterPreview';
import MermaidPreview from './MermaidPreview';

const ChatAppearance = memo(() => {
  const { t } = useTranslation('setting');
  const { general } = useUserStore(settingsSelectors.currentSettings, isEqual);
  const [setSettings, isUserStateInit] = useUserStore((s) => [s.setSettings, s.isUserStateInit]);
  const [loading, setLoading] = useState(false);

  if (!isUserStateInit) return <Skeleton active paragraph={{ rows: 5 }} title={false} />;

  const theme: FormGroupItemType = {
    children: [
      {
        children: <ChatPreview fontSize={general.fontSize} />,
        noStyle: true,
      },
      {
        children: (
          <SliderWithInput
            marks={{
              12: {
                label: 'A',
                style: {
                  fontSize: 12,
                  marginTop: 4,
                },
              },
              14: {
                label: t('settingChatAppearance.fontSize.marks.normal'),
                style: {
                  fontSize: 14,
                  marginTop: 4,
                },
              },
              18: {
                label: 'A',
                style: {
                  fontSize: 18,
                  marginTop: 4,
                },
              },
            }}
            max={18}
            min={12}
            step={1}
          />
        ),
        desc: t('settingChatAppearance.fontSize.desc'),
        label: t('settingChatAppearance.fontSize.title'),
        name: 'fontSize',
      },
      {
        children: <HighlighterPreview theme={general.highlighterTheme} />,
        noStyle: true,
      },
      {
        children: (
          <Select
            options={highlighterThemes.map((item) => ({
              label: item.displayName,
              value: item.id,
            }))}
          />
        ),
        label: t('settingChatAppearance.highlighterTheme.title'),
        name: 'highlighterTheme',
      },
      {
        children: <MermaidPreview theme={general.mermaidTheme} />,
        noStyle: true,
      },
      {
        children: (
          <Select
            options={mermaidThemes.map((item) => ({
              label: item.displayName,
              value: item.id,
            }))}
          />
        ),
        label: t('settingChatAppearance.mermaidTheme.title'),
        name: 'mermaidTheme',
      },
    ],
    extra: loading && <Icon icon={Loader2Icon} size={16} spin style={{ opacity: 0.5 }} />,
    title: t('settingChatAppearance.title'),
  };

  return (
    <Form
      initialValues={general}
      items={[theme]}
      itemsType={'group'}
      onValuesChange={async (value) => {
        setLoading(true);
        await setSettings({ general: value });
        setLoading(false);
      }}
      variant={'borderless'}
      {...FORM_STYLE}
    />
  );
});

export default ChatAppearance;
