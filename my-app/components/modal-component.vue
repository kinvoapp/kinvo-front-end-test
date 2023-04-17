<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4 bg-white">
            <div v-if="app.modal.template === 'change_language'" class="flex items-start">
              <div class="flex-shrink-0">
                <Icon :name="app.notification.icon" class="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 border-b  pt-0.5 w-full">
                <p class="text-sm font-medium text-gray-900">
                  {{ app.modal.title }}
                </p>
                <div class="absolute top-0 right-0 mt-12 w-64 rounded-md shadow-lg bg-white ring-1 ring-indigo-800 ring-opacity-5">
                  <div class="text-gray-700 flex flex-col gap-y-4 m-2">
                    <NuxtLink :to="switchLocalePath('pt')" class="btn btn-ghost normal-case text-base" @click="popoverLanguage = false">
                      <Icon name="game-icons:brazil" size="2em" />
                      {{ $t('portuguese') }}
                    </NuxtLink>
                    <NuxtLink :to="switchLocalePath('en')" class="btn btn-ghost normal-case text-base" @click="popoverLanguage = false">
                      <Icon name="icon-park-outline:english" size="2em" />
                      {{ $t('english') }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="app.closeModal"
                >
                  <span class="sr-only">
                    Close
                  </span>
                  <Icon name="line-md:close" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'
const app = useAppStore()
</script>
