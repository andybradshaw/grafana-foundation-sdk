// Code generated - EDITING IS FUTILE. DO NOT EDIT.

import * as cog from '../cog';
import * as cloudwatch from '../cloudwatch';

export class QueryEditorFunctionExpressionBuilder implements cog.OptionsBuilder<cloudwatch.QueryEditorFunctionExpression> {
    private readonly internal: cloudwatch.QueryEditorFunctionExpression;

    constructor() {
        this.internal = cloudwatch.defaultQueryEditorFunctionExpression();
        this.internal.type = "function";
    }

    build(): cloudwatch.QueryEditorFunctionExpression {
        return this.internal;
    }

    name(name: string): this {
        this.internal.name = name;
        return this;
    }

    parameters(parameters: cog.OptionsBuilder<cloudwatch.QueryEditorFunctionParameterExpression>[]): this {
        const parametersResources = parameters.map(builder => builder.build());
        this.internal.parameters = parametersResources;
        return this;
    }
}
