<script lang="ts">
    export default {
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            signIn() {
                console.log('Signing in...');
                // Add your sign-in logic here
                this.email = '';
                this.password = '';
                this.$emit('close');
            },
            close() {
                this.$emit('close');
            },
        },
    }
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white w-full sm:w-96 p-6 rounded shadow-lg">
        <h2 class="text-xl mb-6">Sign In</h2>
        <form @submit.prevent="signIn">
          <div class="mb-4">
            <label for="email" class="block mb-1">Email:</label>
            <input type="email" id="email" v-model="email" class="w-full p-2 border border-gray-300 rounded">
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-1">Password:</label>
            <input type="password" id="password" v-model="password" class="w-full p-2 border border-gray-300 rounded">
          </div>
          <div class="flex justify-end">
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign In</button>
            <button type="button" class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 ml-2" @click="close">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  