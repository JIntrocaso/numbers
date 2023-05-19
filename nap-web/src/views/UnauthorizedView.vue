<template>
  <div class="unauthorized-page">
    <h1 class="unauthorized-page-title">Unauthorized</h1>
    <p class="unauthorized-page-message">You don't have permission to access this page.</p>
  </div>
</template>

<style scoped>
.unauthorized-page {
  background-color: #000;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.unauthorized-page-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
}

.unauthorized-page-message {
  font-size: 18px;
  text-align: center;
}
</style>
