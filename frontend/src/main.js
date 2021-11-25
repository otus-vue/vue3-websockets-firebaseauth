import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNativeSock from "vue-native-websocket-vue3"
import firebase from 'firebase/compat';


const app = createApp(App)
const firebaseConfig = {
    apiKey: "AIzaSyAmsLPmUkKCJWhwAtjQyn1gmQM-k3I05u4",
    authDomain: "secret-zephyr-330518.firebaseapp.com",
    projectId: "secret-zephyr-330518",
    storageBucket: "secret-zephyr-330518.appspot.com",
    messagingSenderId: "105337273039",
    appId: "1:105337273039:web:a1344529b4983247d795ba"
};

const firebase1 = firebase.initializeApp(firebaseConfig);

app.config.globalProperties.$firebase = firebase1

firebase.auth().onAuthStateChanged(function (user) {
    store.commit("setUser", user);
});


app.use(store).use(router)
    .use(VueNativeSock,
        'ws://localhost:3000',
        { format: 'json', store })
.mount('#app')



// firebase;

// const socket = new WebSocket("ws://localhost:3000")
//
// socket.onopen = function (event) {
//     console.log(event);
//
//     socket.send(JSON.stringify({ text: 'hello world' }))
// }
//
// socket.onmessage = function (event) {
//     const data = JSON.parse(event.data)
//
//     alert(data.response)
//     socket.close()
// }
//
// socket.onerror = function (event) {
//     console.log(event)
// }
//
// socket.onclose = function (event) {
//     console.log(event)
// }