<script setup lang="ts">

</script>

<template>
  <div class="py-24 sm:py-32 md:py-40 relative">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
      <div class="text-center space-y-4">
        <div class="mb-4">
          <UBadge size="lg" variant="outline">
            <ContentSlot name="badge"/>
          </UBadge>
        </div>
        <h1>
          <ContentSlot name="title"/>
        </h1>
        <p>
          <ContentSlot name="description"/>
        </p>
        <div class="flex flex-wrap gap-x-6 gap-y-3 justify-center">
          <UButton
              variant="solid"
              size="lg"
              to="mailto:hello@carlossanjuan.co"
          >
            <ContentSlot name="contact-me"/>
          </UButton>
          <UButton
              variant="outline"
              size="lg"
              to="https://github.com/csanjuan99"
              target="_blank"
          >
            <ContentSlot name="view-projects"/>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
