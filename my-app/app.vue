<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- <LoadingComponent v-if="app.isLoading" /> -->
    <NotificationComponent v-if="app.isNotification" />
  </NuxtLayout>
</template>

<script setup>
import { useAppStore } from '~/store/app'
const app = useAppStore()

watchEffect(() => {
  if (app.isNotification === true) {
    setTimeout(() => {
      app.closeNotification()
    }, 3000)
  }
})
</script>
