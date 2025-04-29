import { ElectronAppState } from '../types';

export interface SystemDispatchEvents {
  checkSystemAccessibility: () => boolean | undefined;
  getDesktopAppState: () => ElectronAppState;
  /**
   * 更新应用语言设置
   * @param locale 语言设置
   */
  updateLocale: (locale: string) => { success: boolean };
}
