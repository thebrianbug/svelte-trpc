import type { Router } from '$lib/server/trpc';
import trpcTransformer from '$lib/trcpTransformer';
import * as trpc from '@trpc/client';
import type { inferProcedureInput, inferProcedureOutput } from '@trpc/server';

const client = trpc.createTRPCClient<Router>({ url: '/trpc', transformer: trpcTransformer });

type Query = keyof Router['_def']['queries'];
type Mutation = keyof Router['_def']['mutations'];

export type InferQueryOutput<RouteKey extends Query> = inferProcedureOutput<
  Router['_def']['queries'][RouteKey]
>;
export type InferQueryInput<RouteKey extends Query> = inferProcedureInput<
  Router['_def']['queries'][RouteKey]
>;
export type InferMutationOutput<RouteKey extends Mutation> = inferProcedureOutput<
  Router['_def']['mutations'][RouteKey]
>;
export type InferMutationInput<RouteKey extends Mutation> = inferProcedureInput<
  Router['_def']['mutations'][RouteKey]
>;

export default client;