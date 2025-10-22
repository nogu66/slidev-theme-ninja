<template>
  <div class="slidev-layout h-full">
    <div
      class="grid grid-cols-2 h-full"
      :class="$attrs.reverse ? 'gap-16' : 'gap-8'"
    >
      <div
        class="prose pr-16"
        :class="{ 'order-1': $attrs.reverse }"
      >
        <slot name="default"></slot>
      </div>
      <figure class="relative h-full flex flex-col justify-center items-center">
        <AsGraphic
          type="zigzag"
          absolute
          bottom-4
          right-0
        />
        <img
          :src="String($attrs.media)"
          class="rounded-lg shadow-lg object-cover z-10"
        />
        <figcaption class="mt-2 text-xs text-center">
          {{ $attrs.caption }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>
