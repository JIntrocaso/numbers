<template>
  <div class="dashboard-page">
    <h1 class="dashboard-page-title">dashboard</h1>
    <p class="dashboard-page-message">This is your logged in dashboard</p>
  </div>
</template>

<style scoped>
.dashboard-page {
  background-color: #000;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dashboard-page-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
}

.dashboard-page-message {
  font-size: 18px;
  text-align: center;
}
</style>