<template>
  <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
    <article v-for="item, ind in props.options" :key="`stat_${ind}`" class="rounded-lg border border-gray-100 bg-white p-6">
      <div class="mt-1 flex gap-1 text-green-600">
        <Icon :name="item.icon" />
        <p class="flex gap-2 text-xs">
          <span class="text-gray-500">
            {{ item.title }}
          </span>
          <span class="font-medium">
            {{ item.value }} %
          </span>
        </p>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Object,
    required: true
  }
})
</script>
