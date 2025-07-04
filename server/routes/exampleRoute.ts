import { Hono } from "hono";

export const exampleRoute = new Hono()

exampleRoute.get('/', (c) => c.json({ message: "Hello World" }));

export default exampleRoute;
export type ExampleRoute = typeof exampleRoute;