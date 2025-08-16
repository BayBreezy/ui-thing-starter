<template>
  <ui-card class="relative w-full">
    <ui-card-header class="items-center justify-center text-center">
      <ui-card-title>Counter</ui-card-title>
      <ui-card-description> A simple counter component w/ Pinia </ui-card-description>
    </ui-card-header>
    <ui-card-content class="flex items-center justify-center gap-5 pt-5">
      <ui-button
        size="icon"
        variant="outline"
        class="rounded-full"
        @click="counterStore.decrement()"
      >
        <Icon name="lucide:minus" />
        <span class="sr-only">Decrement Button</span>
      </ui-button>
      <h1 class="text-center text-4xl font-extrabold">{{ counterStore.counter }}</h1>
      <ui-button
        size="icon"
        variant="outline"
        class="rounded-full"
        @click="counterStore.increment()"
      >
        <Icon name="lucide:plus" />
        <span class="sr-only">Increment Button</span>
      </ui-button>
    </ui-card-content>
    <div class="absolute top-4 right-4">
      <ui-button
        size="icon-sm"
        variant="outline"
        @click="$colorMode.preference = $colorMode.value == 'dark' ? 'light' : 'dark'"
      >
        <icon name="lucide:moon" />
      </ui-button>
    </div>
  </ui-card>
</template>

<script lang="ts" setup>
  const counterStore = useCounterStore();
</script>
