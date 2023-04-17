<template>
  <div>
    <div class="flex">
      <span v-if="!Logo" class="bg-slate-300 h-2 w-full animate-pulse rounded-full m-2 w-[20vw]" />
      <img v-else :src="Logo" alt="image" class="p-6" />
      <slot name="nav" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '~/assets/logo.svg'
</script>