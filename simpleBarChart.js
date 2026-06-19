(function () {

    class SimpleBarChart extends HTMLElement {

        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = "<h2>Waiting for Data...</h2>";
        }

       onCustomWidgetAfterUpdate(changedProperties) {

    console.log("changedProperties", changedProperties);

    if (this.dataBindings) {
        console.log("dataBindings", this.dataBindings);
    }

    if (this.dataBinding) {
        console.log("dataBinding", this.dataBinding);
    }

    console.log("this", this);
}

    customElements.define(
        "com-demo-simplebarchart",
        SimpleBarChart
    );

})();
