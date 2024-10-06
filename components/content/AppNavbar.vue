<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <nav class="h-auto w-full bg-transparent backdrop-blur-2xl fixed top-0 left-0 py-4 z-10">
    <div class="container mx-auto flex items-center justify-between h-full">
      <code>
        Carlos Sanjuan
      </code>
      <ClientOnly>
        <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
        />
        <template #fallback>
          <div class="w-8 h-8"/>
        </template>
      </ClientOnly>
    </div>
  </nav>
</template>

<style scoped>

</style>
