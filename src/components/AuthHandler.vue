<template>
  <div>Please wait....</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AuthHandler",
  //triggering the finalizeLogin method in the actions from this component
  methods: mapActions(["finalizeLogin"]),
  //create  a lifecycle method where we will trigger an action
  //before the component is mounted on the browser
  created() {
    //finalizeLogin method will be called from this lifecycle method
    //and passing evertything to right of the hash in the url to the method
    this.finalizeLogin(window.location.hash);
  }
};
</script>

