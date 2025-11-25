<template>
  <footer class="site-footer">
    <div class="content-container site-footer__inner">
      <h3 class="site-footer__title">Cityrise Management</h3>
      <p class="site-footer__subtitle">Профессиональное управление многоквартирными домами</p>
      <p class="site-footer__note">© 2025 Cityrise Management. Все права защищены.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #0f172a;
  color: #fff;
  padding: 3rem 0;
}

.site-footer__inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.site-footer__title {
  font-size: 1.75rem;
  font-weight: 700;
}

.site-footer__subtitle {
  color: #94a3b8;
}

.site-footer__note {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  color: #94a3b8;
  font-size: 0.9rem;
}
</style>
