(function () {

    class SimpleBarChart extends HTMLElement {

        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = "<h2>Waiting for Data...</h2>";
        }

        onCustomWidgetAfterUpdate(changedProperties) {

            console.log("After Update");

            console.log(changedProperties);

            if (changedProperties.dataBinding) {

                console.log("DATA BINDING FOUND");

                console.log(changedProperties.dataBinding);
            }
        }
    }

    customElements.define(
        "com-demo-simplebarchart",
        SimpleBarChart
    );

})();
