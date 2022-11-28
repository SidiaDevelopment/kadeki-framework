import {LoggingContext, service, Service, useContext} from "@kadeki/core";
import {ConfigContext} from "@kadeki/config";

@service({
    tag: "ping"
})
export class PingService extends Service {
    async init(): Promise<void> {
        const {ping} = useContext(ConfigContext);
        const {logger} = useContext(LoggingContext);

        logger.debug(`Pingservice [Init]: ${ping.greeting}`);
    }
}
