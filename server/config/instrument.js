
import * as Sentry from "@sentry/node"
//  profiling
import { nodeProfilingIntegration } from "@sentry/profiling-node";
//  profiling
// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: "https://0901711f8b575466ad575d2135830b03@o4510044857499648.ingest.us.sentry.io/4510044864970752",

  sendDefaultPii: true,
  //  profiling
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),

    Sentry.mongooseIntegration()
  ],
 
});

// manually call startProfiler

Sentry.profiler.startProfiler();