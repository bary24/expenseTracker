"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../styles/chartBar.css");
const ChartBar = (props) => {
    let barFillHeight = "0%";
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }
    return (react_1.default.createElement("div", { className: "chart-bar" },
        react_1.default.createElement("div", { className: "chart-bar__inner" },
            react_1.default.createElement("div", { className: "chart-bar__fill", style: { height: barFillHeight } })),
        react_1.default.createElement("div", { className: "chart-bar__label" }, props.label)));
};
exports.default = ChartBar;
