<template>
  <div class="home-page">
    <SiteHeader />
    <main class="home-main">
      <HeroSection />
      <ServicesSection />
      <ConsultingSection />
      <BenefitsSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #ecfdf5 100%);
  color: #0f172a;
}

.home-main {
  padding-top: 96px;
}

@media (min-width: 768px) {
  .home-main {
    padding-top: 112px;
  }
}
</style>
