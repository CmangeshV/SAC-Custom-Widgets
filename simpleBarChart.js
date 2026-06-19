(function () {

    class SimpleBarChart extends HTMLElement {
        connectedCallback() {
            this.innerHTML = "<h2>Hello SAC Widget</h2>";
        }
    }

    class SimpleBarChartBuilder extends HTMLElement {
        connectedCallback() {
            this.innerHTML = "";
        }
    }

    customElements.define(
        "com-demo-simplebarchart",
        SimpleBarChart
    );

    customElements.define(
        "com-demo-simplebarchart-builder",
        SimpleBarChartBuilder
    );

})();
