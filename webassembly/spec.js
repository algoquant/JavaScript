function iterations2spec(iterations) {
  // Because the initial guess can be changed now we need to scale equation line to iterations
  const max_x = Math.max(...iterations.map(d => d.x));
  const min_x = Math.min(...iterations.map(d => d.x));
  const equation_line = {
    "width": 800,
    "height": 600,
    "data": {
      "sequence": {
        // Draw equation within -4 to 4 window, if iterations are inside of window
        // otherwise use iterations min to max x
        "start": min_x > -4 ? -4 : min_x,
        "stop": max_x < 4 ? 4 : max_x,
        "step": 0.1, "as": "x"
      }
    },
    "transform": [
      {
        "calculate": "2 * datum.x * datum.x * datum.x - 4 * datum.x * datum.x + 6",
        "as": "y"
      }
    ],
    "mark": "line",
    "encoding": {
      "x": { "type": "quantitative", "field": "x" },
      "y": { "field": "y", "type": "quantitative" },
      "color": { "value": "#f00" }
    }
  };
  const root_rule = {
    "data": { "values": [{ "x": -1 }] },
    "encoding": { "x": { "field": "x", "type": "quantitative" } },
    "layer": [
      { "mark": { "type": "rule", "strokeDash": [4, 8] } },
      { "mark":
        {
          "type": "text",
          "align": "right",
          "baseline": "bottom",
          "dx": -4,
          "dy": 10,
          "x": "width",
          "fontSize": 20,
          "text": "root = -1.0"
        }
      }
    ]
  };
  const iterations_scatter = {
    "title": {
      "text": "2x^3 - 4x^2 + 6 with root",
      "fontSize": 20,
      "fontWeight": "normal"
    },
    "data": {
      "values": iterations
    },
    "encoding": {
      "x": {
        "field": "x",
        "type": "quantitative",
        "title": "x",
        "axis": {
          "labelFontSize": 20,
          "titleFontSize": 20,
          "labelFontWeight": "lighter",
          "tickMinStep": 1.0
        }
      },
      "y": {
        "field": "y",
        "type": "quantitative",
        "title": "y",
        "axis": {
          "labelFontSize": 20,
          "titleFontSize": 20,
          "labelFontWeight": "lighter",
          "titleX": -65
        }
      },
      "text": { "field": "index", "type": "nominal" }
    },
    "layer": [
      {
        "mark": { "type": "circle", "tooltip": { "content": "data" } },
        "selection": { "grid": { "type": "interval", "bind": "scales" } }
      },
      { "mark": { "type": "text", "dy": -10, "fontSize": 16 } }
    ]
  };
  const iteration_vs_y = {
    "title": {
      "text": "Iterations",
      "fontSize": 20,
      "fontWeight": "normal"
    },
    "width": 400,
    "height": 600,
    "data": {
      "values": iterations
    },
    "encoding": {
      "x": {
        "field": "index",
        "type": "quantitative",
        "title": "Iteration index",
        "axis": {
          "labelFontSize": 20,
          "titleFontSize": 20,
          "labelFontWeight": "lighter",
          "tickMinStep": 1.0
        }
      },
      "y": {
        "field": "y",
        "type": "quantitative",
        "axis": {
          "labelFontSize": 20,
          "titleFontSize": 20,
          "labelFontWeight": "lighter",
          "titleX": -65
        }
      }
    },
    "mark": {
      "type": "line",
      "point": true,
      // Enable tooltip so on mouseover it shows all data of that iteration
      "tooltip": { "content": "data" }
    },
    // Enable zooming and panning
    "selection": { "grid": { "type": "interval", "bind": "scales" } }
  };

  return {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "hconcat": [
      {
        "layer": [
          equation_line,
          root_rule,
          iterations_scatter
        ]
      }
      , iteration_vs_y
    ]
  };
}
