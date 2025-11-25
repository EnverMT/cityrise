<template>
  <div class="page-layout">
    <SiteHeader />
    <main class="main-content">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page-layout {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #ecfdf5 100%);
  color: #0f172a;
}

.main-content {
  padding-top: 96px;
}

@media (min-width: 768px) {
  .main-content {
    padding-top: 112px;
  }
}
</style>
