'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _ProjectLab = require('./build/ProjectLab.json');

var _ProjectLab2 = _interopRequireDefault(_ProjectLab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_ProjectLab2.default.interface), '0x5F43Ea3C01C5A84A6B0562512e03c7d75e5e45EE');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2xhYi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiUHJvamVjdExhYiIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF1QixBQUF2Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLHFCQUFXLEFBQXRCLEFBRGUsWUFFZixBQUZlLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoibGFiLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2dyb290L2VkLWFwcCJ9