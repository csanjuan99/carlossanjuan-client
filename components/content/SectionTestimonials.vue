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
        class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 xl:columns-4 p-4 lg:px-48 xl:px-48 block">
      <ContentSlot name="testimonials"/>
    </article>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .lg\:columns-3 {
    column-count: 3;
  }
}

@media (min-width: 768px) {
  .md\:columns-2 {
    column-count: 2;
  }
}
</style>
