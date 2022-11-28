import { Ctor } from "../../Utils/Ctor";
import { RecursiveRequired } from "../../Utils/RequiredRecursive";
export declare abstract class Providable<ConfigT extends IProvidableConfig> {
    config: RecursiveRequired<ConfigT>;
    abstract init(): Promise<void>;
    get isLoaded(): boolean;
}
export declare enum InitPriority {
    High = 0,
    Normal = 1,
    Low = 2
}
export interface IProvidableConfig {
    priority?: InitPriority;
}
export declare const providableDecorator: <ConfigT extends IProvidableConfig>(defaultConfig: Required<{ [P in keyof ConfigT]: ConfigT[P] extends object | undefined ? Required<Required<ConfigT[P]> extends infer T ? { [P_1 in keyof T]: Required<ConfigT[P]>[P_1] extends object | undefined ? Required<Required<Required<ConfigT[P]>[P_1]> extends infer T_1 ? { [P_2 in keyof T_1]: Required<Required<ConfigT[P]>[P_1]>[P_2] extends object | undefined ? Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]> extends infer T_2 ? { [P_3 in keyof T_2]: Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3] extends object | undefined ? Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]> extends infer T_3 ? { [P_4 in keyof T_3]: Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4] extends object | undefined ? Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]> extends infer T_4 ? { [P_5 in keyof T_4]: Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5] extends object | undefined ? Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]> extends infer T_5 ? { [P_6 in keyof T_5]: Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6] extends object | undefined ? Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]> extends infer T_6 ? { [P_7 in keyof T_6]: Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7] extends object | undefined ? Required<Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]> extends infer T_7 ? { [P_8 in keyof T_7]: Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]>[P_8] extends object | undefined ? Required<Required<Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]>[P_8]> extends infer T_8 ? { [P_9 in keyof T_8]: Required<Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]>[P_8]>[P_9] extends object | undefined ? Required<Required<Required<Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]>[P_8]>[P_9]> extends infer T_9 ? { [P_10 in keyof T_9]: Required<Required<Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]>[P_8]>[P_9]>[P_10] extends object | undefined ? Required<any> : Required<Required<Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]>[P_8]>[P_9]>[P_10]; } : never> : Required<Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]>[P_8]>[P_9]; } : never> : Required<Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]>[P_8]; } : never> : Required<Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]>[P_7]; } : never> : Required<Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]>[P_6]; } : never> : Required<Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]>[P_5]; } : never> : Required<Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]>[P_4]; } : never> : Required<Required<Required<ConfigT[P]>[P_1]>[P_2]>[P_3]; } : never> : Required<Required<ConfigT[P]>[P_1]>[P_2]; } : never> : Required<ConfigT[P]>[P_1]; } : never> : ConfigT[P]; }>) => (config: ConfigT) => (constructor: Ctor<Providable<ConfigT>>) => void;
