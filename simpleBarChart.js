(function () {

    class SimpleBarChart extends HTMLElement {

        connectedCallback() {
            this.innerHTML = "<h2>Check Console</h2>";
        }

        onCustomWidgetAfterUpdate(changedProperties) {

            console.log("===== AFTER UPDATE =====");

            console.log(changedProperties);

            console.log("THIS:", this);

            console.log("KEYS:", Object.keys(this));

            if (this.dataBindings) {
                console.log("dataBindings:", this.dataBindings);
            }

            if (this.dataBinding) {
                console.log("dataBinding:", this.dataBinding);
            }
        }
    }

    customElements.define(
        "com-demo-simplebarchart",
        SimpleBarChart
    );

})();
