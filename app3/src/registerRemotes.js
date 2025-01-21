import { remotes, shareScopes, initSharing, registerShared, findShared, registerRemotes, findRemote, findModule } from 'module-federation-runtime';

import remoteDataSource from "./../remotes.json"

export async function registerRemotess() {
    // 1. __webpack_init_sharing__
    await initSharing("default")

    // 3. dynamic-remotes
    await require("module-federation-runtime").registerRemotes(
        remoteDataSource
    )

    //console.log("remotes", remotes)
}



