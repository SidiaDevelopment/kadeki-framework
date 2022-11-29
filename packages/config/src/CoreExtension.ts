import {addContextData, Core, PartialRecursive} from "@kadeki/core";
import {IConfigContext} from "@kadeki/core/context";
import {ConfigContext} from "./Contexts/ConfigContext";

declare module "@kadeki/core/app" {
    export interface ICoreStartupOptions {
        config: PartialRecursive<IConfigContext>
    }
}

Core.events.onCreate.addListener(async ({config}) => {
    addContextData(ConfigContext, config);
})
