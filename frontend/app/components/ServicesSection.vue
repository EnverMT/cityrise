<template>
  <section id="services" class="section-spacing services">
    <div class="content-container">
      <div class="services__heading">
        <p class="section-title">Наши услуги</p>
        <p class="section-description">Комплексное обслуживание для безопасности и комфорта жителей</p>
      </div>

      <div class="services__grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <div class="service-card__icon" :style="{ backgroundImage: service.gradient }">
            <Icon :name="service.icon" size="32" />
          </div>
          <h3 class="service-card__title">{{ service.title }}</h3>
          <p class="service-card__description">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: "lucide:zap",
    title: "Электрика",
    description: "Профессиональное обслуживание электросетей, ремонт и замена освещения в подъездах и на территории",
    gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
  },
  {
    icon: "lucide:droplets",
    title: "Сантехника",
    description: "Быстрое устранение протечек, ремонт водопровода и канализации в общедомовых помещениях",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  },
  {
    icon: "lucide:sparkles",
    title: "Уборка подъездов",
    description: "Регулярная поддержка чистоты в подъездах: влажная уборка, дезинфекция, мытье окон",
    gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
  },
  {
    icon: "lucide:home",
    title: "Благоустройство территории",
    description: "Уход за придомовой территорией, уборка снега, озеленение, вывоз мусора",
    gradient: "linear-gradient(135deg, #22c55e, #84cc16)",
  },
];
</script>

<style scoped>
.services {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.services__heading {
  text-align: center;
  margin-bottom: 3rem;
}

.services__grid {
  display: grid;
  gap: 2rem;
}

.service-card {
  padding: 2.5rem;
  background: #fff;
  border-radius: var(--radius-xl);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--card-shadow);
}

.service-card__icon {
  width: 64px;
  height: 64px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 1.5rem;
  transition: transform 0.4s ease;
}

.service-card:hover .service-card__icon {
  transform: scale(1.08);
}

.service-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--slate-900);
  margin-bottom: 0.75rem;
}

.service-card__description {
  color: var(--slate-600);
  line-height: 1.6;
}

@media (min-width: 768px) {
  .services__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
