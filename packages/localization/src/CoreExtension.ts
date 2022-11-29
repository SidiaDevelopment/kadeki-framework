import {Core, PartialRecursive} from "@kadeki/core";
import {ILocalization} from "@kadeki/localization/translations";
import {useLocalization} from "./Hooks/useLocalization";

declare module "@kadeki/core/app" {
    export interface ICoreStartupOptions {
        translations?: Record<string, PartialRecursive<ILocalization>>;
    }
}

Core.events.onCreate.addListener(async ({translations}) => {
    if (!translations) return;

    const localizationProvider = useLocalization();
    localizationProvider.load(translations);
})
