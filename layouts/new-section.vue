<template>
  <div class="bg-section slidev-layout new-section">
    <div class="flex flex-col justify-center text-center">
      <slot></slot>
    </div>
    <AsGraphic
      type="zigzag"
      class="absol`ute top-20 -right-30"
    />
  </div>
</template>

<style>
.slidev-layout.new-section {
  h1 {
    @apply text-primary text-4xl leading-20 mb-0 font-title font-extrabold;
  }

  h1 + p {
    @apply mt-4 opacity-100;
  }

  p > img {
    @apply w-2/3 mx-auto;
  }
}
</style>
