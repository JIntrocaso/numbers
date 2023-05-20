<template>
  <header class="nap-header">
    <div class="nap-header-title">{{ title }}</div>
    <button class="nap-header-button" @click="signIn">Sign In</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NapHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const signIn = () => {
      // Add your sign-in logic here
      console.log('User signed in');
    };

    return {
      signIn
    };
  }
});
</script>

<style scoped>
.nap-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black;
}

.nap-header-title {
  font-size: 20px;
  font-weight: bold;
}

.nap-header-button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.nap-header-button:hover {
  background-color: #45a049;
}
</style>
