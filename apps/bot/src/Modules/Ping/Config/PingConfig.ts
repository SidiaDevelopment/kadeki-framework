import {Config, defaultConfig} from "@kadeki/core";

interface IPingConfig {
    greeting: string;
    ping: string;
}

declare module "@kadeki/core/context" {
    export interface IConfigContext extends IPingConfig {}
}


@defaultConfig
class PingConfig extends Config<IPingConfig> {
    data: IPingConfig = {
        greeting: "Hello!",
        ping: "Ping!"
    }
}
