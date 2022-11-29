import {LocalizationFiles, LocalizationProvider} from "./LocalizationProvider";

declare module "@kadeki/core/context" {
    export interface IProviderContext {
        localizationProvider: LocalizationProvider;
    }
}

declare module "@kadeki/core/module" {
    interface IModuleData {
        localizations?: LocalizationFiles;
    }
}
