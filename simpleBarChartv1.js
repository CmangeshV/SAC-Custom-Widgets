(function () {

    class SimpleBarChart extends HTMLElement {

        connectedCallback() {
            this.innerHTML = "<h2>Check Console</h2>";
        }

   onCustomWidgetAfterUpdate(changedProperties) {

    console.log(
        JSON.stringify(
            changedProperties.dataBinding.data,
            null,
            2
        )
    );
}

    customElements.define(
        "com-demo-simplebarchart",
        SimpleBarChart
    );

})();
