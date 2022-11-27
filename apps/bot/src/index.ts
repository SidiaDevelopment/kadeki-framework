import {Core} from "@kadeki/core";
import {modules} from "./modules";
import {config} from "./config";

const core = Core.create({
    modules: modules,
    config: config
});

core.start();
