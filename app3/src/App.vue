<template>
  <div id="app">
    <h1>Hello, it's App.</h1>
    <component :is="RemoteComponent" v-if="RemoteComponent" />
  </div>
</template>

<script>
import {loadModule} from "./loadModules"
import {registerRemotess} from "./registerRemotes";

export default {
  name: 'App',
  data() {
    return {
      RemoteComponent: null,
    };
  },
  async mounted() {
      await registerRemotess()
      loadModule('app4', './App').then(
          remote => {
            this.RemoteComponent = remote.default
      })
  },
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
