<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__overlay hero__overlay--gradient" aria-hidden="true" />
    <div class="hero__overlay hero__overlay--image" aria-hidden="true" />

    <div class="content-container hero__inner">
      <div class="chip">
        <Icon name="lucide:sparkles" size="20" />
        <span>Профессиональное управление домами</span>
      </div>

      <h1 id="hero-title" class="hero__title">
        Cityrise
        <span class="gradient-text">Management</span>
      </h1>

      <p class="hero__subtitle">
        Создаём комфорт и порядок в вашем доме. Полный спектр услуг ЖКХ для многоквартирных домов
      </p>

      <div class="hero__actions">
        <button type="button" class="primary-button hero__primary" @click="scrollToSection('contact')">
          Оставить заявку
        </button>
        <button type="button" class="secondary-button hero__secondary" @click="scrollToSection('services')">
          Наши услуги
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToSection = (id: string) => {
  if (typeof document === "undefined") {
    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 5rem 0 6rem;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__overlay--gradient {
  background: radial-gradient(circle at top left, rgba(16, 185, 129, 0.2), transparent 55%),
    radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.2), transparent 60%),
    linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(59, 130, 246, 0.08));
}

.hero__overlay--image {
  background-image: url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600");
  background-size: cover;
  background-position: center;
  opacity: 0.07;
}

.hero__inner {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.hero__title {
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
}

.hero__subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  color: var(--slate-600);
  max-width: 720px;
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero__primary,
.hero__secondary {
  width: 100%;
  border-radius: var(--radius-lg);
  padding: 1rem 3rem;
  font-size: 1.1rem;
}

@media (min-width: 640px) {
  .hero__actions {
    flex-direction: row;
    justify-content: center;
  }

  .hero__primary,
  .hero__secondary {
    width: auto;
  }
}
</style>
