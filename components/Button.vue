<template>
    <button>
        <slot />
    </button>
</template>

<style scoped>
button {
    color: var(--ninja-background);
    background-color: var(--ninja-foreground);
    border: 1px solid var(--ninja-foreground);
    border-radius: var(--ninja-radius);
    padding: 6px 12px;
    @apply text-sm;
}
button:hover {
    color: var(--ninja-foreground);
    background-color: var(--ninja-background);
}
</style>
