<template>
  <ui-container class="flex min-h-dvh items-center justify-center">
    <counter class="mx-auto max-w-md" />
  </ui-container>
</template>

<script lang="ts" setup>
  const title = "Counter - UI Thing Starter";
  const description = `A simple counter application built with Nuxt & UI Thing.\nA great starting point for your next project!`;
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: "summary_large_image",
  });
  defineOgImageComponent("Site", {
    title,
    description,
  });
</script>
