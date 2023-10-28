/*import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
*/
import { createApp } from "vue"; // Importez "createApp" à partir du package Vue
import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '319369323087-et996fgrtnp0b69tgb9ba0lv45l7995g.apps.googleusercontent.com'
})


app.use(router);
app.mount("#app");
