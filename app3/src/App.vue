<template>
  <div id="app">
    <h1>Hello, it's App.</h1>
    <component :is="RemoteComponent" v-if="RemoteComponent" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      RemoteComponent: null,
    };
  },
  async mounted() {

    const remote = await import("app4/App");
    this.RemoteComponent = remote.default;


  },
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
