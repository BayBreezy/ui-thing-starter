<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
  useHead({
    htmlAttrs: { lang: "en" },
    link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }],
  });
</script>
