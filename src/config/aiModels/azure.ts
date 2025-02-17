import { AIChatModelCard } from '@/types/aiModel';

const azureChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    config: {
      deploymentName: 'o3-mini',
    },
    contextWindowTokens: 200_000,
    description:
      'o3-mini 是我们最新的小型推理模型，在与 o1-mini 相同的成本和延迟目标下提供高智能。',
    displayName: 'OpenAI o3-mini',
    id: 'o3-mini',
    maxOutput: 100_000,
    pricing: {
      input: 1.1,
      output: 4.4,
    },
    releasedAt: '2025-01-31',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    config: {
      deploymentName: 'o1-mini',
    },
    contextWindowTokens: 128_000,
    description:
      'o1-mini是一款针对编程、数学和科学应用场景而设计的快速、经济高效的推理模型。该模型具有128K上下文和2023年10月的知识截止日期。',
    displayName: 'OpenAI o1-mini',
    enabled: true,
    id: 'o1-mini',
    maxOutput: 65_536,
    pricing: {
      input: 1.1,
      output: 4.4,
    },
    releasedAt: '2024-09-12',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    config: {
      deploymentName: 'o1',
    },
    contextWindowTokens: 200_000,
    description:
      'o1是OpenAI新的推理模型，支持图文输入并输出文本，适用于需要广泛通用知识的复杂任务。该模型具有200K上下文和2023年10月的知识截止日期。',
    displayName: 'OpenAI o1',
    enabled: true,
    id: 'o1',
    maxOutput: 100_000,
    pricing: {
      input: 15,
      output: 60,
    },
    releasedAt: '2024-12-17',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    config: {
      deploymentName: 'o1-preview',
    },
    contextWindowTokens: 128_000,
    description:
      'o1是OpenAI新的推理模型，适用于需要广泛通用知识的复杂任务。该模型具有128K上下文和2023年10月的知识截止日期。',
    displayName: 'OpenAI o1-preview',
    id: 'o1-preview',
    maxOutput: 32_768,
    pricing: {
      input: 15,
      output: 60,
    },
    releasedAt: '2024-09-12',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    config: {
      deploymentName: 'gpt-4o',
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'GPT-4o',
    enabled: true,
    id: 'gpt-4o',
    pricing: {
      input: 2.5,
      output: 10,
    },
    releasedAt: '2024-05-13',
    type: 'chat',
  },

  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    config: {
      deploymentName: 'gpt-4-turbo',
    },
    contextWindowTokens: 128_000,
    description: 'GPT 4 Turbo，多模态模型，提供杰出的语言理解和生成能力，同时支持图像输入。',
    displayName: 'GPT 4 Turbo',
    id: 'gpt-4',
    maxOutput: 4096,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    config: {
      deploymentName: 'gpt-4o-mini',
    },
    contextWindowTokens: 128_000,
    description: 'GPT-4o Mini，小型高效模型，具备与GPT-4o相似的卓越性能。',
    displayName: 'GPT 4o Mini',
    enabled: true,
    id: 'gpt-4o-mini',
    maxOutput: 4096,
    type: 'chat',
  },
];

export const allModels = [...azureChatModels];

export default allModels;
