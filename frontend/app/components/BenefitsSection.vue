<template>
  <section id="benefits" class="benefits section-spacing" aria-labelledby="benefits-title">
    <div class="content-container">
      <div class="benefits__heading">
        <h2 id="benefits-title" class="section-title">Почему выбирают нас</h2>
        <p class="section-description">Ваш надежный партнер в сфере ЖКХ</p>
      </div>

      <div class="benefits__grid">
        <article v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
          <div class="benefit-card__icon">
            <Icon :name="benefit.icon" size="40" />
          </div>
          <h3 class="benefit-card__title">{{ benefit.title }}</h3>
          <p class="benefit-card__description">{{ benefit.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: 'lucide:shield',
    title: 'Надежность',
    description: 'Опытная команда профессионалов'
  },
  {
    icon: 'lucide:clock-4',
    title: 'Оперативность',
    description: 'Быстрое реагирование на заявки'
  },
  {
    icon: 'lucide:check-circle-2',
    title: 'Качество',
    description: 'Гарантия на все виды работ'
  },
  {
    icon: 'lucide:users',
    title: 'Индивидуальный подход',
    description: 'Учитываем особенности каждого дома'
  }
];
</script>

<style scoped>
.benefits {
  background: linear-gradient(180deg, #fff 0%, #ecfdf5 100%);
}

.benefits__heading {
  text-align: center;
  margin-bottom: 3rem;
}

.benefits__grid {
  display: grid;
  gap: 2rem;
}

.benefit-card {
  text-align: center;
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 15px 40px rgba(15, 23, 42, 0.08);
  transition: background 0.3s ease, transform 0.3s ease;
}

.benefit-card:hover {
  background: #fff;
  transform: translateY(-4px);
}

.benefit-card__icon {
  width: 84px;
  height: 84px;
  margin: 0 auto 1rem;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d1fae5, #dbeafe);
  color: var(--emerald-600);
}

.benefit-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.benefit-card__description {
  color: var(--slate-600);
}

@media (min-width: 640px) {
  .benefits__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .benefits__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
