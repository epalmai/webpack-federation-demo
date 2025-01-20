<template>
  <div id="app">
    <h1>Hello, it's App.</h1>
    <component :is="RemoteComponent" v-if="RemoteComponent" />
  </div>
</template>

<script>
import { ref } from "vue";
import { loadRemoteModule } from "@/util/loadRemoteModule";

export default {
  name: 'App',
  data() {
    return {
      RemoteComponent: null,
    };
  },
  async mounted() {
    const remote = await import("app2/App");
    this.RemoteComponent = remote.default;
  },
  setup() {
    /*
    const RemoteComponent = ref(null);

    async function loadRemoteComponent() {
      try {
        const Component = await loadRemoteModule("app2", "./App");
        RemoteComponent.value = Component.default;
      } catch (error) {
        console.error("Error loading remote component:", error);
      }
    }

    return { RemoteComponent, loadRemoteComponent };

     */
  },
}
</script>

<style>
h1 {
  color: #42b983;
}
</style>
