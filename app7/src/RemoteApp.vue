<template>
  <div class="card mx-auto" style="width: 20rem; background-color: #f9f2f4">
    <img
        src="https://picsum.photos/320/180"
        class="card-img-top"
        alt="Random image"
    />
    <div class="card-body" @shippingAddressChange="doSomething">
      <h5 class="card-title">Ez itt a Remote 3 APP</h5>
      <p class="card-text">
        Üdv, ez itt a külső félnek átadott rendelés azonosító:
        <span class="label label-success">{{ orderId }}</span>
      </p>
      <div v-if="showAlert"
          class="alert alert-success alert-dismissible fade show mt-3"
          role="alert">
        Szállítási cím változás: <span class="label label-success">{{ shippingAddress1 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemoteApp',
  data() {
    return {
      showAlert: false,
      shippingAddress1: ''
    };
  },
  props: [
    'orderId',
    'eventBus'
  ],
  mounted() {
    this.eventBus.addEventListener('shippingAddressChange', this.doSomething);
  },
  methods: {
    doSomething(event) {
      console.log('event from bus', event)
      this.showAlert = true
      this.shippingAddress1 = event.detail.shippingAddress.shippingAddress1
    },
  }
}
</script>

<style>
/* Lehet ide is írni extra stílusokat, ha még jobban el akarod téríteni */
</style>
