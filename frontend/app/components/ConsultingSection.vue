<template>
  <section id="consulting" class="consulting section-spacing" aria-labelledby="consulting-title">
    <div class="consulting__glow consulting__glow--top" aria-hidden="true" />
    <div class="consulting__glow consulting__glow--bottom" aria-hidden="true" />

    <div class="content-container consulting__inner">
      <div class="consulting__heading">
        <div class="consulting__chip">
          <Icon name="lucide:users" size="18" />
          Консалтинг
        </div>
        <h2 id="consulting-title" class="section-title consulting__title">Консультации для собственников и УК</h2>
        <p class="consulting__description">
          Профессиональная помощь в вопросах управления многоквартирным домом и организации деятельности управляющих
          компаний
        </p>
      </div>

      <div class="consulting__grid">
        <article v-for="service in consultingServices" :key="service.title" class="consulting-card">
          <div class="consulting-card__icon">
            <Icon name="lucide:check-circle-2" size="26" />
          </div>
          <div>
            <h3 class="consulting-card__title">{{ service.title }}</h3>
            <p class="consulting-card__description">{{ service.description }}</p>
          </div>
        </article>
      </div>

      <div class="consulting__cta-wrapper">
        <button type="button" class="consulting__cta" @click="scrollToSection('contact')">Получить консультацию</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const consultingServices = [
  {
    title: "Переход на новую УК",
    description:
      "Поможем организовать собрание собственников, подготовить документы и провести процедуру смены управляющей компании",
  },
  {
    title: "Создание ТСЖ/ТСН",
    description: "Консультации по созданию товарищества собственников и оформлению необходимой документации",
  },
  {
    title: "Аудит текущего управления",
    description: "Проверим качество работы текущей УК, выявим нарушения и поможем защитить ваши права",
  },
  {
    title: "Ведение деятельности УК",
    description: "Обучение и консультации для начинающих управляющих компаний по всем аспектам работы",
  },
];

const scrollToSection = (id: string) => {
  if (typeof document === "undefined") {
    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.consulting {
  position: relative;
  background: #0b1120;
  color: #fff;
  overflow: hidden;
}

.consulting__inner {
  position: relative;
  z-index: 1;
}

.consulting__glow {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 999px;
  filter: blur(120px);
  opacity: 0.5;
}

.consulting__glow--top {
  top: -80px;
  right: -60px;
  background: rgba(16, 185, 129, 0.4);
}

.consulting__glow--bottom {
  bottom: -80px;
  left: -60px;
  background: rgba(59, 130, 246, 0.35);
}

.consulting__heading {
  text-align: center;
  margin-bottom: 3rem;
}

.consulting__chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1.4rem;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.15);
  color: #6ee7b7;
  font-weight: 600;
}

.consulting__title {
  color: #fff;
}

.consulting__description {
  font-size: 1.2rem;
  color: #94a3b8;
  line-height: 1.7;
  max-width: 780px;
  margin: 1rem auto 0;
}

.consulting__grid {
  display: grid;
  gap: 1.5rem;
}

.consulting-card {
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition: background 0.3s ease, transform 0.3s ease;
}

.consulting-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
}

.consulting-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 20px;
  background: linear-gradient(135deg, #10b981, #2563eb);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.consulting-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.consulting-card__description {
  color: #94a3b8;
  line-height: 1.6;
}

.consulting__cta-wrapper {
  margin-top: 3rem;
  text-align: center;
}

.consulting__cta {
  border: none;
  border-radius: var(--radius-lg);
  padding: 1rem 3.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: #fff;
  color: var(--slate-900);
  box-shadow: 0 25px 45px rgba(15, 23, 42, 0.35);
  transition: transform 0.3s ease, background 0.3s ease;
}

.consulting__cta:hover {
  transform: translateY(-3px);
  background: #f8fafc;
}

@media (min-width: 768px) {
  .consulting__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
