'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _project = require('../../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/groot/ed-app/pages/projects/show.js?entry';


var ProjectShow = function (_Component) {
  (0, _inherits3.default)(ProjectShow, _Component);

  function ProjectShow() {
    (0, _classCallCheck3.default)(this, ProjectShow);

    return (0, _possibleConstructorReturn3.default)(this, (ProjectShow.__proto__ || (0, _getPrototypeOf2.default)(ProjectShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of Project',
        description: 'https://github.com/OmnipotenceLLC',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become an approver'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this project'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Project Balance (ether)',
        description: 'The balance is how much money this project has left to spend.'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Project Show'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(_semanticUiReact.Statistic, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, '1,550'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Downloads'), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), ' ', _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Learners, start here'), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { secondary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Teachers, start here'), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'Parents, start here'), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_routes.Link, { route: '/projects/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var project, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                project = (0, _project2.default)(props.query.address);
                _context.next = 3;
                return project.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProjectShow;
}(_react.Component);

exports.default = ProjectShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIlN0YXRpc3RpYyIsIkxheW91dCIsIlByb2plY3QiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwiUHJvamVjdFNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJwcm9qZWN0IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQVE7O0FBQzdCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOzs7Ozs7O0lBR2YsQTs7Ozs7Ozs7Ozs7a0NBZ0JVO21CQU9SLEtBUFEsQUFPSDtVQVBHLEFBRVYsaUJBRlUsQUFFVjtVQUZVLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYsNkJBSlUsQUFJVjtVQUpVLEFBS1YsdUJBTFUsQUFLVjtVQUxVLEFBTVYsd0JBTlUsQUFNVixBQUdGOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBTEMsQUFDWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0UsT0FGVTtnQkFPWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBVlUsQUFPWixBQUlJO0FBSkosQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBaEJVLEFBYVosQUFJSTtBQUpKLEFBQ0U7Z0JBS0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQXRCVSxBQW1CWixBQUlJO0FBSkosQUFDRTtnQkFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEN0IsQUFDVSxBQUE0QixBQUNwQztjQUZGLEFBRVEsQUFDTjtxQkE1QkosQUFBYyxBQXlCWixBQUlJLEFBSU47QUFSRSxBQUNFOzsyQ0FPRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUF5QjtBQUF6QjtjQURGLEFBQ0UsQUFBeUIsQUFBSyxBQUU5QixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBREYsQUFDRSxBQUNFO0FBREY7MEJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCwyQkFBQSxBQUFXOztvQkFBWDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMEJBQUMsY0FBRCwyQkFBQSxBQUFXOztvQkFBWDtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLGNBQTZDOztvQkFBQTtzQkFKbkQsQUFFSSxBQUUrQyxBQUcvQztBQUgrQztBQUFBOztvQkFHL0M7c0JBUEosQUFPSTtBQUFBO0FBQUEsVUFBTSxxQkFBQSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FQVixBQU9VLHlCQUFzQzs7b0JBQUE7c0JBUGhELEFBT2dELEFBQzlDO0FBRDhDO0FBQUEsMEJBQzlDLEFBQUMseUNBQU8sV0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBUkYsQUFRRSx5QkFBZ0Q7O29CQUFBO3NCQVJsRCxBQVFrRCxBQUNoRDtBQURnRDtBQUFBLDBCQUNoRCxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQVRGLEFBU0Usd0JBQTZDOztvQkFBQTtzQkFibkQsQUFDRSxBQUdFLEFBUytDLEFBS2pEO0FBTGlEO0FBQUEsNEJBS2hELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLHNCQUFvQixLQUFBLEFBQUssTUFBekIsQUFBK0IsVUFBckM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBekJkLEFBQ0UsQUFFRSxBQWtCRSxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBUWY7Ozs7OzJHQTlGNEIsQTs7Ozs7bUJBQ3JCO0EsMEJBQVUsdUJBQVEsTUFBQSxBQUFNLE1BQWQsQSxBQUFvQjs7dUJBRWQsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsYSxBQUFoQixBQUE2Qjs7bUJBQTdDO0E7OzJCQUdLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3VDQUFxQixRQUZoQixBQUVnQixBQUFRLEFBQzdCOzJCQUFTLFFBSEosQUFHSSxBQUFRLEFBQ2pCO2lDQUFlLFFBSlYsQUFJVSxBQUFRLEFBQ3ZCO2tDQUFnQixRQUxYLEFBS1csQUFBUSxBQUN4QjsyQkFBUyxRQU5KLEFBTUksQUFBUSxBO0FBTlosQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBvQixBLEFBa0cxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2dyb290L2VkLWFwcCJ9