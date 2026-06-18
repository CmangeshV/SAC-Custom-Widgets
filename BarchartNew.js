(function () {
  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host { display: block; width: 100%; height: 100%; }
      .bar { fill: #4A90E2; }
      .bar:hover { fill: #2c6fad; }
      svg { width: 100%; height: 100%; }
    </style>
    <div id="chart-container"></div>
  `;

  class CustomBarChart extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._data = [];
      this._color = "#4A90E2";
    }

    // Called before SAC updates properties
    onCustomWidgetBeforeUpdate(changedProps) {}

    // Called after SAC updates properties
    onCustomWidgetAfterUpdate(changedProps) {
      if ("chartData" in changedProps) {
        try {
          this._data = JSON.parse(changedProps.chartData);
        } catch (e) {
          this._data = [];
        }
      }
      if ("barColor" in changedProps) {
        this._color = changedProps.barColor;
      }
      this._render();
    }

    connectedCallback() {
      this._render();
    }

    // Property setters/getters
    get chartData() { return JSON.stringify(this._data); }
    set chartData(value) {
      try { this._data = JSON.parse(value); } catch { this._data = []; }
      this._render();
    }

    get barColor() { return this._color; }
    set barColor(value) { this._color = value; this._render(); }

    // Script API method
    setData(jsonString) {
      this.chartData = jsonString;
    }

    _render() {
      const container = this._shadowRoot.getElementById("chart-container");
      if (!this._data.length) {
        container.innerHTML = "<p>No data available</p>";
        return;
      }

      const width = this.offsetWidth || 400;
      const height = this.offsetHeight || 300;
      const margin = { top: 20, right: 20, bottom: 40, left: 50 };
      const chartW = width - margin.left - margin.right;
      const chartH = height - margin.top - margin.bottom;
      const maxVal = Math.max(...this._data.map(d => d.value));

      // Build SVG manually (no D3 dependency)
      const barWidth = chartW / this._data.length - 5;
      const bars = this._data.map((d, i) => {
        const barH = (d.value / maxVal) * chartH;
        const x = margin.left + i * (barWidth + 5);
        const y = margin.top + (chartH - barH);
        return `
          <rect class="bar" x="${x}" y="${y}"
            width="${barWidth}" height="${barH}"
            fill="${this._color}" rx="3"/>
          <text x="${x + barWidth / 2}" y="${height - 5}"
            text-anchor="middle" font-size="12">${d.label}</text>
          <text x="${x + barWidth / 2}" y="${y - 5}"
            text-anchor="middle" font-size="11">${d.value}</text>
        `;
      }).join("");

      container.innerHTML = `
        <svg viewBox="0 0 ${width} ${height}">
          ${bars}
        </svg>
      `;
    }
  }

  customElements.define("com-custom-barchart", CustomBarChart);
})();