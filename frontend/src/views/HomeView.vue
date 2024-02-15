<script setup>
import { ref } from 'vue'
import axios from 'axios'

import TheWelcome from '../components/TheWelcome.vue'
// Reactive data properties
const searchQuery = ref('')
const searchResults = ref([])

// Method to perform the search
const searchDoctors = async () => {
  if (!searchQuery.value.trim()) return
  try {
    // Replace `/api/doctors/search` with your actual search API endpoint
    const response = await axios.get(`/search/` + searchQuery.value)

    searchResults.value = response.data // Assuming the response data is the array of search results
  } catch (error) {
    console.error('Error fetching search results:', error)
  }
}
</script>

<template>
  <h1>Welcome to SiDoctor!</h1>
  <h2>The easy way to book an appointment with the doctor you need</h2>
  <br />
  <br />
  <h3>Learn everything about improving your health</h3>
  <main>
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="searchDoctors">
            <div class="input-group mb-3"></div>
          </form>
          <input
            type="text"
            class="form-control"
            placeholder="Search doctors..."
            v-model="searchQuery"
          />
          <button @click="searchDoctors" class="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
    <!-- Results Section -->
    <div v-if="searchResults.length" class="row">
      <div v-if="searchResults.length" class="search-results">
        <ul>
          <li v-for="result in searchResults" :key="result.id">
            <h3>{{ result.name }}</h3>
            <p>{{ result.specialty }}</p>
            <p>{{ result.address }}</p>
          </li>
        </ul>
        <!-- Loop through searchResults and display them -->
      </div>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://picsum.photos/200/300?grayscale" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/237/200/300" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/237/200/300" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <Suspense>
      <TheWelcome />
    </Suspense>
  </main>
</template>
<style scoped>
.carousel {
  width: 50vw;
  height: 50vh;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  overflow: hidden;
}
</style>
