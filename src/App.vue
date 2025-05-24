<script setup>
import PortfolioHeader from '@/components/PortfolioHeader.vue';
import Welcome from '@/components/Welcome.vue';
import Projects from '@/components/Projects.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import AboutMe from '@/components/AboutMe.vue';
import ContactMe from '@/components/ContactMe.vue';
</script>

<template>
    <div
      class="absolute top-0 z-[-2] min-h-screen w-full dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-28%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    ></div>

    <PortfolioHeader />

    <main>
      <SectionContainer clases="h-screen flex flex-col justify-center items-start gap-5" id="welcome-section">
        <Welcome />
      </SectionContainer>
      <div class="bg-gray-950">
        <SectionContainer class="" id="projects-section">
          <Projects />
        </SectionContainer>

        <SectionContainer class="" id="about-me">
          <AboutMe />
        </SectionContainer>

      </div>
    </main>
    <ContactMe />
</template>

