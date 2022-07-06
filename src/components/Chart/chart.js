"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../styles/Chart.css");
const react_1 = __importDefault(require("react"));
const chartBar_1 = __importDefault(require("./chartBar"));
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (react_1.default.createElement("div", { className: "chart" }, props.dataPoints.map((dataPoint) => (react_1.default.createElement(chartBar_1.default, { key: dataPoint.label, value: dataPoint.value, maxValue: totalMaximum, label: dataPoint.label })))));
};
exports.default = Chart;
