import { createApp } from "vue";
import { ReactButtonElement } from "./components/react/react-button";
import VueForm from "./components/vue/vue-form.vue";

customElements.define("react-button", ReactButtonElement);

const app = createApp(VueForm);
app.mount("#vue-app");

if (VueForm.compilerOptions && VueForm.compilerOptions.isCustomElement) {
  VueForm.compilerOptions.isCustomElement("react-button");
}
