import deepmerge from "deepmerge";
import {addContextData, LoggingContext, Module, PartialRecursive, ProviderContext, useContext} from "@kadeki/core";
import {ILocalization} from "@kadeki/localization/translations";
import {Leaves} from "../Utils/FlatIndexJson";

export type LocalizationFile = any;
export type LocalizationFiles = Record<string, LocalizationFile>;
export type Localization = Leaves<ILocalization>;
export type LocalizationOverride = PartialRecursive<ILocalization>;

export class LocalizationProvider {
    private translations: Record<string, ILocalization> = {};

    public load(files: LocalizationFiles) {
        for (let filesKey in files) {
            if (!Object.prototype.hasOwnProperty.call(this.translations, filesKey))
                this.translations[filesKey] = {};

            const file = files[filesKey];
            this.translations[filesKey] = deepmerge(this.translations[filesKey], file);
        }
    }

    public get(language: string, path: Localization): string {
        if (!Object.prototype.hasOwnProperty.call(this.translations, language))
            return path;

        const translations = this.translations[language];
        const pathName = path as string;
        const splitPath = pathName.split(".");

        let current: any = translations;
        for (let pathPart of splitPath) {
            if (!Object.prototype.hasOwnProperty.call(current, pathPart)) {
                // Translation does not exist in current language
                const {logger} = useContext(LoggingContext);

                if (language == "en") {
                    logger.error("Missing translation in english language");
                    return "";
                }
                logger.warn(`Missing translation in ${language}`);
                return this.get("en", path);
            }
            current = current[pathPart];
        }

        return current;
    }
}

addContextData(ProviderContext, {
    localizationProvider: new LocalizationProvider()
})

Module.onInit.addListener(async ({module}) => {
    const {localizationProvider} = useContext(ProviderContext);
    if (!module.data.localizations)
        return;

    localizationProvider.load(module.data.localizations);
})
