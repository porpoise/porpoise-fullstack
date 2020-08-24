# `porpoise-fullstack`

A barebones starter template with Porpoise and ExpressJS

## Get started via GitHub:

Click on [use this template](https://github.com/porpoise/porpoise-fullstack/generate).

## Get started on your machine:

`npx degit https://github.com/porpoise/porpoise-fullstack`

## Make stuff run:

### DEV
`npm run dev` (Start auto-reloading server).
`npm run watch` (Build client bundle on change).

### PROD
`npm run start` (Build client and start server).

## Changing things:

Literally nothing is forced, preset, or hidden. Everything is exposed.

- Mess with webpack: `webpack.config.js`
- Hate the server setup? `server.js`

## TypeScript?

A TypeScript version is coming *very soon*.

For now though:
- `npm i typescript ts-node ts-loader`
- (ts-node for the server)
- Mess with `webpack.config.js` and the NPM scripts.
- To auto-reload the server, try `ts-node-dev` [(here)](https://www.npmjs.com/package/ts-node-dev).
