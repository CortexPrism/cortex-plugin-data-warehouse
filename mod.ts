// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolCallResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolCallResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const dw_queryTool: Tool = {
  definition: {
    name: 'dw_query',
    description: 'Execute read-only analytical query',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[data-warehouse] dw_query executed');
      return ok('dw_query', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'dw_query',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const dw_explore_schemaTool: Tool = {
  definition: {
    name: 'dw_explore_schema',
    description: 'Explore database and table schemas',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[data-warehouse] dw_explore_schema executed');
      return ok('dw_explore_schema', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'dw_explore_schema',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const dw_estimate_costTool: Tool = {
  definition: {
    name: 'dw_estimate_cost',
    description: 'Estimate query cost before running',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[data-warehouse] dw_estimate_cost executed');
      return ok('dw_estimate_cost', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'dw_estimate_cost',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const dw_list_databasesTool: Tool = {
  definition: {
    name: 'dw_list_databases',
    description: 'List available databases and tables',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[data-warehouse] dw_list_databases executed');
      return ok('dw_list_databases', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'dw_list_databases',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-data-warehouse] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-data-warehouse] Unloading...');
}
export const tools: Tool[] = [
  dw_queryTool,
  dw_explore_schemaTool,
  dw_estimate_costTool,
  dw_list_databasesTool,
];
