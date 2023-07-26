import {Localization} from "../Providers/LocalizationProvider";
import {useLocalization} from "./useLocalization";

export const translate = (path: Localization, language: string = "en"): string => {
    const localization = useLocalization();
    return localization.get(language, path);
}
