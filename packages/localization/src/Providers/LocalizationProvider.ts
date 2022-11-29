import deepmerge from "deepmerge";
import {addContextData, Module, ProviderContext, useContext} from "@kadeki/core";
import {ILocalization} from "@kadeki/localization/translations";
import {Paths} from "../Utils/FlatIndexJson";

export type LocalizationFile = any;
export type LocalizationFiles = Record<string, LocalizationFile>;
export type Localization = Paths<ILocalization>;

export class LocalizationProvider {
    private translations: Record<string, ILocalization> = {};

    public load(files: LocalizationFiles) {
        for (let filesKey in files) {
            if (Object.prototype.hasOwnProperty.call(this.translations, filesKey))
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
