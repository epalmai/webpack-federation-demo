import { remotes, shareScopes, initSharing, registerShared, findShared, registerRemotes, findRemote, findModule } from 'module-federation-runtime';

import remoteDataSource from "./../remotes.json"

export async function registerRemotess() {
    // 1. __webpack_init_sharing__
    await require("module-federation-runtime").initSharing("default")

// 2. __webpack_share_scopes__
    require("module-federation-runtime").shareScopes

// 3. dynamic-remotes
    const register = await require("module-federation-runtime").registerRemotes(
        remoteDataSource
    )

    //console.log("remotes", remotes)
}



