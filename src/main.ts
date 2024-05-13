import "@dist/quark-next/lib/theme-chalk/index.css"
import "tailwindcss/tailwind.css"
import "virtual:svg-icons-register"
import { createApp } from "vue"
import "./styles/main.css"

import App from "./App.vue"
import router from "./router"
import store from "./stores"
const app = createApp(App)

app.use(store)
app.use(router)
app.mount("#app")
