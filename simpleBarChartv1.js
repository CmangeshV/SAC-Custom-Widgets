(function () {

    class SimpleBarChart extends HTMLElement {

        connectedCallback() {
            this.innerHTML = "<h2>Check Console</h2>";
        }

       onCustomWidgetAfterUpdate(changedProperties) {

    console.log("===== DATA BINDING =====");

    console.log(changedProperties.dataBinding);

    if (changedProperties.dataBinding) {

        console.log("===== MESSAGES =====");

        console.log(changedProperties.dataBinding.messages);

        console.log(
            JSON.stringify(
                changedProperties.dataBinding,
                null,
                2
            )
        );
    }
}

    customElements.define(
        "com-demo-simplebarchart",
        SimpleBarChart
    );

})();
