
const {findModule} = require("module-federation-runtime");

export async function loadModule(remote, path) {
    return findModule(remote, path);
}
