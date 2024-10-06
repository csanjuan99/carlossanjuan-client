<script setup lang="ts">

</script>

<template>
  <article class="break-inside-avoid">
    <UCard class="text-left">
      <q class="font-light text-base italic">
        <ContentSlot name="quote"/>
      </q>
      <div class="flex items-center gap-3 mt-6 relative">
        <UAvatar
            class="w-10 h-10"
            src="https://i.pravatar.cc/120?img=1"/>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white text-sm">
            <ContentSlot name="name"/>
          </p>
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            <ContentSlot name="position"/>
          </p>
        </div>
      </div>
    </UCard>
  </article>
</template>

<style scoped>
.break-inside-avoid {
  break-inside: avoid;
}
</style>
