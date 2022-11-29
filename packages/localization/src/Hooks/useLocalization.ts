import {LocalizationProvider} from "../Providers/LocalizationProvider";
import {ProviderContext, useContext} from "@kadeki/core";

export const useLocalization = (): LocalizationProvider => {
    const {localizationProvider} = useContext(ProviderContext);
    return localizationProvider;
}
