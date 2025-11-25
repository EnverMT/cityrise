<template>
  <section id="contact" class="contact section-spacing" aria-labelledby="contact-title">
    <div class="content-container">
      <div class="contact__heading">
        <h2 id="contact-title" class="section-title">Свяжитесь с нами</h2>
        <p class="section-description">Мы всегда на связи и готовы помочь</p>
      </div>

      <div class="contact__grid">
        <article class="contact-card">
          <div class="contact-card__icon contact-card__icon--green">
            <Icon name="lucide:phone" size="32" />
          </div>
          <p class="contact-card__label">Телефон</p>
          <a class="contact-card__value" href="tel:+74951234567">+7 (495) 123-45-67</a>
        </article>

        <article class="contact-card">
          <div class="contact-card__icon contact-card__icon--blue">
            <Icon name="lucide:mail" size="32" />
          </div>
          <p class="contact-card__label">Email</p>
          <a class="contact-card__value" href="mailto:info@cityrise.ru">info@cityrise.ru</a>
        </article>

        <article class="contact-card">
          <div class="contact-card__icon contact-card__icon--purple">
            <Icon name="lucide:map-pin" size="32" />
          </div>
          <p class="contact-card__label">Адрес офиса</p>
          <p class="contact-card__value">г. Москва, ул. Примерная, д. 1</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__heading {
  text-align: center;
  margin-bottom: 3rem;
}

.contact__grid {
  display: grid;
  gap: 1.5rem;
}

.contact-card {
  text-align: center;
  padding: 2.5rem 2rem;
  background: #fff;
  border-radius: var(--radius-xl);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow);
}

.contact-card__icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.25rem;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
}

.contact-card__icon--green {
  background: #d1fae5;
  color: var(--emerald-600);
}

.contact-card__icon--blue {
  background: #dbeafe;
  color: var(--blue-500);
}

.contact-card__icon--purple {
  background: #ede9fe;
  color: var(--purple-500);
}

.contact-card__label {
  font-weight: 600;
  color: var(--slate-900);
}

.contact-card__value {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: var(--slate-600);
}

@media (min-width: 640px) {
  .contact__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
