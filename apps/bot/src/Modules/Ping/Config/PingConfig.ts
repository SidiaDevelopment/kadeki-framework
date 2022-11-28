import {Config, defaultConfig} from "@kadeki/config";

interface IPingConfig {
    ping: {
        greeting: string;
    }
}

declare module "@kadeki/core/context" {
    export interface IConfigContext extends IPingConfig {}
}


@defaultConfig
export class PingConfig extends Config<IPingConfig> {
    data: IPingConfig = {
        ping: {
            greeting: "Hello!"
        },
    }
}
