console.log("CUSTOM WIDGET JS LOADED");

customElements.define(
    "com-demo-simplebarchart",
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = "Hello SAC";
        }
    }
);

console.log("CUSTOM ELEMENT REGISTERED");