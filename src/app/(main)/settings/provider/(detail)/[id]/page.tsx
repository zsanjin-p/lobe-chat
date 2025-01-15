import { redirect } from 'next/navigation';

import { DEFAULT_MODEL_PROVIDER_LIST } from '@/config/modelProviders';
import { isServerMode } from '@/const/version';
import { serverDB } from '@/database/server';
import { AiProviderModel } from '@/database/server/models/aiProvider';
import { KeyVaultsGateKeeper } from '@/server/modules/KeyVaultsEncrypt';
import { PagePropsWithId } from '@/types/next';
import { getUserAuth } from '@/utils/server/auth';

import ProviderDetail from './index';

const Page = async (props: PagePropsWithId) => {
  const params = await props.params;

  const builtinProviderCard = DEFAULT_MODEL_PROVIDER_LIST.find((v) => v.id === params.id);
  // if builtin provider
  if (!!builtinProviderCard) return <ProviderDetail source={'builtin'} {...builtinProviderCard} />;

  // if user custom provider
  if (isServerMode) {
    const { userId } = await getUserAuth();

    const aiProviderModel = new AiProviderModel(serverDB, userId!);

    const userCard = await aiProviderModel.getAiProviderById(
      params.id,
      KeyVaultsGateKeeper.getUserKeyVaults,
    );

    if (!userCard) return redirect('/settings/provider');

    return <ProviderDetail {...userCard} />;
  }

  return <div>not found</div>;
};

export default Page;
