<template>
  <div
    class="slidev-layout code-layout"
    :class="{ grid: $attrs.center }"
  >
    <div class="my-auto z-10 relative">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.code-layout :deep(pre) {
  background-color: #000 !important;
  border: 1px solid #333 !important;
}

/* コードブロック内の基本テキストは白色 */
.code-layout :deep(pre code) {
  color: #ddd !important;
}

.code-layout :deep(pre code .line) {
  color: #ddd;
}

/* Shikiのシンタックスハイライトを黒背景用に調整 (dark.jsonの色を使用) */

/* コメント */
.code-layout :deep(pre .comment),
.code-layout :deep(pre .token.comment),
.code-layout :deep(pre .prolog),
.code-layout :deep(pre .doctype),
.code-layout :deep(pre .cdata) {
  color: #888888 !important;
}

/* キーワード、型、制御構文 */
.code-layout :deep(pre .keyword),
.code-layout :deep(pre .token.keyword),
.code-layout :deep(pre .storage),
.code-layout :deep(pre .token.storage) {
  color: #FF5AA7 !important;
}

/* 関数、クラス、数値 */
.code-layout :deep(pre .function),
.code-layout :deep(pre .token.function),
.code-layout :deep(pre .class-name),
.code-layout :deep(pre .token.class-name),
.code-layout :deep(pre .number),
.code-layout :deep(pre .token.number) {
  color: #60A7FA !important;
}

/* 文字列 */
.code-layout :deep(pre .string),
.code-layout :deep(pre .token.string) {
  color: #2CB092 !important;
}

/* 演算子 */
.code-layout :deep(pre .operator),
.code-layout :deep(pre .token.operator) {
  color: #FF5AA7 !important;
}

/* プリミティブ型 */
.code-layout :deep(pre .type),
.code-layout :deep(pre .token.type) {
  color: #36ACAA !important;
}

/* 変数 */
.code-layout :deep(pre .variable),
.code-layout :deep(pre .token.variable) {
  color: #ddd !important;
}

/* 定数 */
.code-layout :deep(pre .constant),
.code-layout :deep(pre .token.constant) {
  color: #D9931E !important;
}

/* 句読点 */
.code-layout :deep(pre .punctuation),
.code-layout :deep(pre .token.punctuation) {
  color: #ddd !important;
}

/* HTMLタグ */
.code-layout :deep(pre .tag),
.code-layout :deep(pre .token.tag) {
  color: #60A7FA !important;
}

/* 属性名 */
.code-layout :deep(pre .attr-name),
.code-layout :deep(pre .token.attr-name) {
  color: #d9931e !important;
}

/* インラインコードは通常通り（黒背景にしない） */
.code-layout :deep(:not(pre) > code) {
  color: var(--ninja-highlight-purple);
  background: transparent;
}
</style>
