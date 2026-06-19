(function () {

    class SimpleBarChart extends HTMLElement {

        connectedCallback() {
            this.innerHTML = "<h2>Check Console</h2>";
        }

        onCustomWidgetAfterUpdate(changedProperties) {

            if (changedProperties.dataBinding?.state === "success") {

                let data = changedProperties.dataBinding.data;

                let maxValue = Math.max(
                    ...data.map(x => x.measures_0.raw)
                );

                let html = "<h3>Sales by Month</h3>";

                data.forEach(row => {

                    let width =
                        (row.measures_0.raw / maxValue) * 300;

                    html += `
                        <div style="margin-bottom:10px">
                            <div>
                                ${row.dimensions_0.label}
                                (${row.measures_0.formatted})
                            </div>

                            <div
                                style="
                                    background:#4285f4;
                                    height:25px;
                                    width:${width}px;
                                ">
                            </div>
                        </div>
                    `;
                });

                this.innerHTML = html;
            }
        }

    }   // <-- THIS BRACE IS MISSING IN YOUR FILE

    customElements.define(
        "com-demo-simplebarchart",
        SimpleBarChart
    );

})();
