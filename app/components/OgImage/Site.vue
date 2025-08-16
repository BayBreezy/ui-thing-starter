<template>
  <div class="h-full w-full bg-zinc-950 p-20 text-zinc-50">
    <div class="relative h-full w-full border border-zinc-900/80 bg-zinc-900/10 p-10">
      <div class="absolute -top-px right-0 h-px w-12 bg-zinc-700" />
      <div class="absolute top-0 -right-px h-12 w-px bg-zinc-700" />
      <div class="absolute right-0 -bottom-px h-px w-12 bg-zinc-700" />
      <div class="absolute -right-px bottom-0 h-12 w-px bg-zinc-700" />

      <div class="absolute -top-px left-0 h-px w-12 bg-zinc-700" />
      <div class="absolute top-0 -left-px h-12 w-px bg-zinc-700" />
      <div class="absolute -bottom-px left-0 h-px w-12 bg-zinc-700" />
      <div class="absolute bottom-0 -left-px h-12 w-px bg-zinc-700" />

      <h1 class="text-5xl leading-none tracking-tighter">{{ title }}</h1>
      <p class="text-3xl text-pretty whitespace-pre-line opacity-80" v-html="description" />

      <div class="absolute right-6 bottom-6">
        <img src="/icon.png" alt="UI Thing Icon" class="h-10 w-10 object-contain" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    title?: string;
    description?: string;
  }>();
</script>
