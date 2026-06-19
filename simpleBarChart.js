(function () {

    class SimpleBarChart extends HTMLElement {

        constructor() {
            super();
            this._props = {};
        }

        connectedCallback() {
            this.render();
        }

        onCustomWidgetAfterUpdate(changedProperties) {
            this._props = { ...this._props, ...changedProperties };
            this.render();
        }

        render() {
            this.innerHTML =
                `<h2>${this._props.title || "Bar Chart"}</h2>`;
        }
    }

    customElements.define(
        "com-demo-simplebarchart",
        SimpleBarChart
    );

})();
