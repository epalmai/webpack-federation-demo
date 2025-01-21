<template>
  <div id="app">
    <h1>Hello, it's App2.</h1>

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
    /*
    const remote = await import("app4/App");
    this.RemoteComponent = remote.default;

     */
  },
}
</script>

<style scoped>
h1 {
  color: #5242b9;
}
</style>
