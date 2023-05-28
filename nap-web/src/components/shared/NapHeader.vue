<template>
  <header class="nap-header">
    <div class="nap-header-title">{{ title }}</div>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/help">Help</RouterLink>
      </nav>
    <button class="nap-header-button" @click="openSignInModal">Sign In</button>
  </header>
  <sign-in-modal v-if="showSignInModal" @close="closeSignInModal" />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import SignInModal from '@/components/shared/SignInModal.vue';

export default defineComponent({
  name: 'NapHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    SignInModal
  },
  setup() {
    const showSignInModal = ref(false);

    const openSignInModal = () => {
      showSignInModal.value = true;
    };

    const closeSignInModal = () => {
      showSignInModal.value = false;
    };

    const signIn = () => {
      // Add your sign-in logic here
      console.log('User signed in');
    };

    return {
      showSignInModal,
      openSignInModal,
      closeSignInModal,
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
