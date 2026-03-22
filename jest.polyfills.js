/* eslint-disable @typescript-eslint/no-require-imports */
const { TextEncoder, TextDecoder } = require("node:util");
const {
  ReadableStream,
  WritableStream,
  TransformStream,
} = require("node:stream/web");

Object.defineProperties(globalThis, {
  TextEncoder: { value: TextEncoder, configurable: true },
  TextDecoder: { value: TextDecoder, configurable: true },
  ReadableStream: { value: ReadableStream, configurable: true },
  WritableStream: { value: WritableStream, configurable: true },
  TransformStream: { value: TransformStream, configurable: true },
});