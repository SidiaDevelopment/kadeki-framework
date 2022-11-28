import {Logger} from "../Bases/Logging/Logger";
import {Context} from "../Bases/Context";
import {createContext} from "../Hooks/createContext";

export interface ILoggingContext {
    logger: Logger;
}

export class LoggingContext extends Context<ILoggingContext> {}

createContext(new LoggingContext());
