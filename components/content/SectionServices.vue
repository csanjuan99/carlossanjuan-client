<script setup lang="ts">
</script>

<template>
  <section class="w-full min-h-fit text-center">
    <UBadge size="lg" variant="outline">
      <ContentSlot name="badge"/>
    </UBadge>
    <h2>
      <ContentSlot name="title"/>
    </h2>
    <p>
      <ContentSlot name="description"/>
    </p>
    <article
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 xl:gap-8 lg:px-8 xl:px-48 mt-4 p-8">
      <ContentSlot name="features"/>
    </article>
  </section>
</template>
