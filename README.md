## Koa DataDog Agent example

The purpose of this repo is to replicate a bug with Koa DataDog trace integration. Currently used for support ticket with DataDog support team.

### Setup
- Set up datadog trace agent locally with default config:
https://github.com/DataDog/datadog-trace-agent/blob/master/README.md
- Ensure datadog is running with default local settings, EG listening for traces at http://localhost:8126
- run `npm install` and `npm run start` to start this application on http://localhost:3005
- visit http://localhost:3005/ -- even though koa listens to the root route, 404 occurs. Server logs should show connection to DataDog agent but the koa route responds with 404 -- *this is the bug that this repo replicates*
- edit `app.js` per the instructions there -- EG, comment out dd-trace import and initialization
- restart the node server visit http://localhost:3005 -- the route now responds as expected.
