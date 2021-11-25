<template>
  <PageTemplate>
    <template #header>
      <PageHeader bg-image="/img/home-bg.jpg">
        <template #header> Clean Blog </template>
        <template #subheader> A Blog Theme by Start Bootstrap </template>
      </PageHeader>
    </template>

    <template #main>
      <div class="container">
        <div id="firebaseui-auth-container" v-show="!$store.state.user"></div>
        <div v-if="$store.state.user">
          <button class="btn btn-primary" @click="logout">
            Log out
          </button>
        </div>
      </div>
    </template>
  </PageTemplate>
</template>

<script>
import PageTemplate from "./general/PageTemplate";
import PageHeader from "./general/PageHeader";
import {mapState} from 'vuex';

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


export default {
  name: "home",
  components: {
    PageTemplate,
    PageHeader,
  },
  mounted() {
    let firebase = this.$firebase.firebase;

    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
    } // https://github.com/firebase/firebaseui-web#starting-the-sign-in-flow
// Initialize the FirebaseUI Widget using Firebase.
    const ui = firebaseui.auth.AuthUI.getInstance() ?? new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  },
  methods: {
    logout() {
      this.$firebase.auth().signOut();
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts
    }),
    reversedPosts: function() {
      const temp = [...this.posts];
      return temp.reverse();
    }
  },
};
</script>
