"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//Conversion d'un plugin jQuery en React
// Importation de React et du composant DatePicker de la bibliothèque react-datepicker

// Composant CustomDatePicker qui prend plusieurs props : 
// label (le texte à afficher pour le champ), selectedDate (la date sélectionnée), onChange (la fonction pour modifier la date), 
// et className (les classes CSS à appliquer à l'élément div qui enveloppe le DatePicker)
const CustomDatePicker = _ref => {
  let {
    label,
    selectedDate,
    onChange,
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("label", null, label), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: selectedDate,
    onChange: onChange,
    dateFormat: "MM/dd/yyyy"
  }));
};
var _default = exports.default = CustomDatePicker;