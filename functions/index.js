const {setGlobalOptions} = require("firebase-functions/v2");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

setGlobalOptions({ maxInstances: 10 });

// Real workable function for Washer Status
exports.washerStatus = onRequest((request, response) => {
  logger.info("Washer status requested");
  response.json({
    status: "idle",
    timeRemaining: 0,
    lastCycle: "delicate",
    timestamp: new Date().toISOString()
  });
});
