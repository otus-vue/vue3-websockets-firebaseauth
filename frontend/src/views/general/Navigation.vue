<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'post', params: { postId: 12 } }"
              class="nav-link"
            >
              Sample Post 12
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'post', params: { postId: 14 } }"
              class="nav-link"
            >
              Sample Post 14
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'contacts', hash: '#contactForm' }"
              class="nav-link"
              >Contact</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'sign_in' }"
              class="nav-link"
              >
              <span v-if="$store.state.user">Account [{{ $store.state.user.displayName }}]</span>
              <span v-else>Log in</span>
            </router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  position: fixed !important;
  background: #111 !important;
}
</style>

<script>
export default {};
</script>
