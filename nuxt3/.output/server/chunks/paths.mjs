import { joinURL } from 'ufo';
import { u as useRuntimeConfig } from './config.mjs';

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

export { buildAssetsURL as b, publicAssetsURL as p };
//# sourceMappingURL=paths.mjs.map
