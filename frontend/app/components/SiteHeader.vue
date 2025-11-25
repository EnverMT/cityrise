<template>
  <header class="site-header">
    <div class="content-container site-header__inner">
      <div class="site-logo">
        Cityrise
        <span>Management</span>
      </div>

      <nav class="site-nav" aria-label="Основная навигация">
        <button type="button" @click="scrollToSection('services')">Услуги</button>
        <button type="button" @click="scrollToSection('consulting')">Консультации</button>
        <button type="button" @click="scrollToSection('benefits')">Преимущества</button>
        <button type="button" @click="scrollToSection('contact')">Контакты</button>
      </nav>

      <button type="button" class="primary-button site-header__cta" @click="scrollToSection('contact')">
        Связаться
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrollToSection = (id: string) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(226, 232, 240, 0.7);
  z-index: 100;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
}

.site-logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--slate-900);
}

.site-logo span {
  color: var(--emerald-600);
}

.site-nav {
  display: none;
  align-items: center;
  gap: 2rem;
}

.site-nav button {
  border: none;
  background: transparent;
  color: var(--slate-600);
  font-weight: 600;
  transition: color 0.3s ease;
}

.site-nav button:hover {
  color: var(--emerald-600);
}

.site-header__cta {
  display: none;
}

@media (min-width: 768px) {
  .site-nav {
    display: flex;
  }

  .site-header__cta {
    display: inline-flex;
  }
}
</style>
