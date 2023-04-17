<template>
  <div>
    <article v-for="item, ind in data.options" :key="`stat_${ind}`" class="rounded-lg border border-gray-100 bg-white p-6">
      <div class="mt-1 flex gap-1 text-green-600">
        <Icon :name="item.icon" />
        <p class="flex gap-2 text-xs">
          <span class="font-medium"> {{ item.value }} % </span>
          <span class="text-gray-500"> Since last week </span>
        </p>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [{
      icon: undefined,
      title: undefined,
      value: undefined
    }],
  },
})
</script>