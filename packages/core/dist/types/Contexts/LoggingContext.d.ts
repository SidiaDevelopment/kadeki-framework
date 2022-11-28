import { Logger } from "../Bases/Logging/Logger";
import { Context } from "../Bases/Context";
export interface ILoggingContext {
    logger: Logger;
}
export declare class LoggingContext extends Context<ILoggingContext> {
}
