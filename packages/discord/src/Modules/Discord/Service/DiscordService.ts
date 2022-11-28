import {InitPriority, service, Service, useContext} from "@kadeki/core";
import {ConfigContext} from "@kadeki/config";
import {Client} from "discord.js";
import {LoggingContext} from "@kadeki/core";

@service({
    tag: "discord",
    priority: InitPriority.High
})
export class DiscordService extends Service {
    private client: Client | null = null;

    public async init() {
        const {discord} = useContext(ConfigContext);
        this.client = new Client({
            intents: discord.intents
        })
        await this.client.login(discord.key);

        const {logger} = useContext(LoggingContext);
        logger.debug("Discord bot logged in")
    }

    public getClient(): Client | null {
        return this.client;
    }
}
