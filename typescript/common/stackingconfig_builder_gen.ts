// Code generated - EDITING IS FUTILE. DO NOT EDIT.

import * as cog from '../cog';
import * as common from '../common';

// TODO docs
export class StackingConfigBuilder implements cog.OptionsBuilder<common.StackingConfig> {
    private readonly internal: common.StackingConfig;

    constructor() {
        this.internal = common.defaultStackingConfig();
    }

    build(): common.StackingConfig {
        return this.internal;
    }

    mode(mode: common.StackingMode): this {
        this.internal.mode = mode;
        return this;
    }

    group(group: string): this {
        this.internal.group = group;
        return this;
    }
}
