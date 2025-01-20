export async function loadRemoteModule(remote, exposedModule) {
    const container = window[remote]; // Access remote container
    await container.init(__webpack_share_scopes__.default); // Initialize shared scope
    const factory = await container.get(exposedModule); // Get the module factory
    return factory(); // Execute the factory to get the module
}
