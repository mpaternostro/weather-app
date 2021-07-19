// import nodeFetch from "node-fetch";
import fetch from "cross-fetch";
import { server } from "./mocks/server";

if (!global.fetch) {
  global.fetch = fetch;
}

process.env.SNOWPACK_PUBLIC_OPEN_WEATHER_API_KEY = "test-app-id";

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
