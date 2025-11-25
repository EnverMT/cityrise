<template>
  <header class="site-header">
    <div class="content-container site-header__inner">
      <div class="site-logo">
        Cityrise
        <span>Management</span>
      </div>

      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-label="Открыть меню"
        aria-controls="site-nav"
        @click="toggleMenu"
      >
        <span class="menu-toggle__bar menu-toggle__bar--top"></span>
        <span class="menu-toggle__bar menu-toggle__bar--middle"></span>
        <span class="menu-toggle__bar menu-toggle__bar--bottom"></span>
      </button>

      <nav id="site-nav" class="site-nav" :class="{ 'site-nav--open': isMenuOpen }" aria-label="Основная навигация">
        <a href="#services">Услуги</a>
        <a href="#consulting">Консультации</a>
        <a href="#benefits">Преимущества</a>
        <a href="#contact">Контакты</a>
      </nav>

      <a class="primary-button site-header__cta" href="#contact">Связаться</a>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
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
  position: relative;
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
  position: absolute;
  top: calc(100% + 0.75rem);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 1rem;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-0.5rem);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: -1;
}

.site-nav--open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  z-index: 5;
}

.site-nav a {
  border: none;
  background: transparent;
  color: var(--slate-600);
  font-weight: 600;
  transition: color 0.3s ease;
  text-align: left;
}

.site-nav a:hover {
  color: var(--emerald-600);
}

.site-nav__cta {
  width: 100%;
  justify-content: center;
  margin-top: 0.5rem;
}

.menu-toggle {
  display: inline-flex;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.menu-toggle:hover {
  border-color: rgba(16, 185, 129, 0.4);
}

.menu-toggle__bar {
  width: 1.25rem;
  height: 2px;
  background-color: var(--slate-900);
  transition: transform 0.3s ease, opacity 0.3s ease;
  display: block;
}

.menu-toggle[aria-expanded="true"] .menu-toggle__bar--top {
  transform: translateY(4px) rotate(45deg);
}

.menu-toggle[aria-expanded="true"] .menu-toggle__bar--middle {
  opacity: 0;
}

.menu-toggle[aria-expanded="true"] .menu-toggle__bar--bottom {
  transform: translateY(-4px) rotate(-45deg);
}

.site-header__cta {
  display: none;
}

@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }

  .site-nav {
    position: static;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding: 0;
    border: none;
    box-shadow: none;
    opacity: 1;
    pointer-events: auto;
    transform: none;
    z-index: 1;
  }

  .site-header__cta {
    display: inline-flex;
  }

  .site-nav__cta {
    display: none;
  }
}
</style>
