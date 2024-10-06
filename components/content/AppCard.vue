<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()
</script>

<template>
  <UCard class="text-left">
    <UIcon
        class="w-6 h-6"
        :name="props.icon"/>
    <p class="text-lg">
      <ContentSlot name="title"/>
    </p>
    <p class="font-light text-base">
      <ContentSlot name="description"/>
    </p>
  </UCard>
</template>

<style scoped>

</style>
