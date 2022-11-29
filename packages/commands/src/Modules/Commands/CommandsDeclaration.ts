import {LocalizationFiles} from "@kadeki/localization";
import en from "./Localization/en";
import {CommandsLocalizationType} from "@kadeki/localization/translations";

declare module "@kadeki/localization/translations" {
    type CommandsLocalizationType = typeof en;
    export interface ILocalization extends CommandsLocalizationType {}
}

export const CommandsLocalizations: LocalizationFiles = {
    en,
}
