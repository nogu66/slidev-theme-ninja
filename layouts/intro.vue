<template>
  <div class="slidev-layout title-layout">
    <!-- Frame border -->
    <div class="frame-border"></div>

    <!-- Main content area -->
    <div class="content-area">
      <slot></slot>
    </div>

    <!-- Bottom right image -->
    <div class="bottom-right-image">
      <img :src="String($attrs.avatar)" alt="Avatar" class="avatar-img" />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.title-layout {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--ninja-background);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Main content area */
.content-area {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 80%;
}

.content-area :deep(h1) {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--ninja-foreground);
  line-height: 1.3;
  margin-bottom: 2rem;
}

.content-area :deep(h2) {
  font-size: 2rem;
  font-weight: 700;
  color: var(--ninja-foreground);
  margin-bottom: 3rem;
}

.content-area :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--ninja-foreground);
  margin-bottom: 1rem;
}

.content-area :deep(p) {
  font-size: 1.25rem;
  color: var(--ninja-foreground);
  line-height: 1.6;
}

/* Bottom right image */
.bottom-right-image {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 20;
  border-radius: 50%;
}

.avatar-img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
