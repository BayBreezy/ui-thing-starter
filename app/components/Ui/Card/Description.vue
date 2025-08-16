<template>
  <Primitive
    data-slot="card-description"
    :class="styles({ class: props.class })"
    :as="as"
    :as-child="asChild"
  >
    <slot>
      {{ description }}
    </slot>
  </Primitive>
</template>

<script lang="ts" setup>
  import { Primitive } from "reka-ui";
  import type { PrimitiveProps } from "reka-ui";
  import type { HTMLAttributes } from "vue";

  const props = withDefaults(
    defineProps<
      PrimitiveProps & {
        /** Description to display in the card */
        description?: string;
        /** Custom class(es) to add to the element */
        class?: HTMLAttributes["class"];
      }
    >(),
    {
      as: "div",
    }
  );
  const styles = tv({
    base: "text-muted-foreground text-sm",
  });
</script>
