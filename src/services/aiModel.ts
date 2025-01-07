import { lambdaClient } from '@/libs/trpc/client';
import {
  AiModelSortMap,
  AiProviderModelListItem,
  CreateAiModelParams,
  ToggleAiModelEnableParams,
  UpdateAiModelParams,
} from '@/types/aiModel';

class AiModelService {
  createAiModel = async (params: CreateAiModelParams) => {
    return lambdaClient.aiModel.createAiModel.mutate(params);
  };

  getAiProviderModelList = async (id: string): Promise<AiProviderModelListItem[]> => {
    return lambdaClient.aiModel.getAiProviderModelList.query({ id });
  };

  getAiModelById = async (id: string) => {
    return lambdaClient.aiModel.getAiModelById.query({ id });
  };

  toggleModelEnabled = async (params: ToggleAiModelEnableParams) => {
    return lambdaClient.aiModel.toggleModelEnabled.mutate(params);
  };

  updateAiModel = async (id: string, providerId: string, value: UpdateAiModelParams) => {
    return lambdaClient.aiModel.updateAiModel.mutate({ id, providerId, value });
  };

  batchUpdateAiModels = async (id: string, models: AiProviderModelListItem[]) => {
    return lambdaClient.aiModel.batchUpdateAiModels.mutate({ id, models });
  };

  batchToggleAiModels = async (id: string, models: string[], enabled: boolean) => {
    return lambdaClient.aiModel.batchToggleAiModels.mutate({ enabled, id, models });
  };

  clearRemoteModels = async (providerId: string) => {
    return lambdaClient.aiModel.clearRemoteModels.mutate({ providerId });
  };

  updateAiModelOrder = async (providerId: string, items: AiModelSortMap[]) => {
    return lambdaClient.aiModel.updateAiModelOrder.mutate({ providerId, sortMap: items });
  };

  deleteAiModel = async (params: { id: string; providerId: string }) => {
    return lambdaClient.aiModel.removeAiModel.mutate(params);
  };
}

export const aiModelService = new AiModelService();
