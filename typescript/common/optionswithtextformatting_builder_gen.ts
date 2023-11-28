// Code generated - EDITING IS FUTILE. DO NOT EDIT.

import * as cog from '../cog';
import * as common from '../common';

// TODO docs
export class OptionsWithTextFormattingBuilder implements cog.OptionsBuilder<common.OptionsWithTextFormatting> {
    private readonly internal: common.OptionsWithTextFormatting;

    constructor() {
        this.internal = common.defaultOptionsWithTextFormatting();
    }

    build(): common.OptionsWithTextFormatting {
        return this.internal;
    }

    text(text: cog.OptionsBuilder<common.VizTextDisplayOptions>): this {
        const textResource = text.build();
        this.internal.text = textResource;
        return this;
    }
}
