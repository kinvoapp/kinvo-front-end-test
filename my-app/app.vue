<template>
  <NuxtLayout>
    <NuxtPage />
    <ModalComponent v-if="app.modal.show" />
    <NotificationComponent v-if="app.isNotification" />
    <!-- <LoadingComponent v-if="app.isLoading" /> -->
  </NuxtLayout>
</template>

<script setup>
import { useAppStore } from '~/store/app'
const app = useAppStore()

watchEffect(() => {
  if (app.isNotification === true) {
    setTimeout(() => {
      app.closeNotification()
    }, 4000)
  }
})
</script>
