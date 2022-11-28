import { PartialRecursive } from "@kadeki/core";
import { IConfigContext } from "@kadeki/core/context";
declare module "@kadeki/core/app" {
    interface ICoreStartupOptions {
        config: PartialRecursive<IConfigContext>;
    }
}
