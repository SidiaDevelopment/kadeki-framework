import "../Config/PingConfig";

import {ConfigContext, service, Service, useContext} from "@kadeki/core";

@service({
    tag: "ping"
})
export class PingService extends Service {
    async init(): Promise<void> {
        const {greeting, ping} = useContext(ConfigContext);
        console.log(`Pingservice: ${greeting} ${ping}`);
    }
}
