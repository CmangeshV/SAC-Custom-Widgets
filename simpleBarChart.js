(function () {

    class SimpleBarChart extends HTMLElement {

        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = "<h2>Waiting for Data...</h2>";
        }

       onCustomWidgetAfterUpdate(changedProperties) {

     console.log("Object Keys");
    console.log(Object.keys(this));

    console.log("Widget Object");
    console.log(this);
}

    customElements.define(
        "com-demo-simplebarchart",
        SimpleBarChart
    );

})();
