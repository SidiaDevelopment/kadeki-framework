import {Localization} from "../Providers/LocalizationProvider";
import {useLocalization} from "./useLocalization";

export const translate = (path: Localization): string => {
    const localization = useLocalization();
    return localization.get("en", path);
}
