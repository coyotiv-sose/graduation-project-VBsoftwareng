<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <h1>Welcome to SiDoctor!</h1>
  <h2>The easy way to book an appointment with the doctor you need</h2>
  <br />
  <br />
  <h3>Learn everything about improving your health</h3>
  <main>
    <Suspense>
      <TheWelcome />
    </Suspense>
  </main>
</template>
