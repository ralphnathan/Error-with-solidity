"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _routes = require("../../../routes");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require("semantic-ui-react");

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\HP\\Desktop\\Solidity\\kickstart\\pages\\campaigns\\requests\\index.js?entry";


var RequestsIndex = function (_Component) {
  (0, _inherits3.default)(RequestsIndex, _Component);

  function RequestsIndex() {
    (0, _classCallCheck3.default)(this, RequestsIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestsIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestsIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestsIndex, [{
    key: "renderRows",
    value: function renderRows() {
      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          id: index,
          key: index,
          request: request,
          address: address,
          approversCount: approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Requests"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Add Requests"))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Id"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Approval Count"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.approversCount().call();

              case 7:
                approversCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt("return", { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
              case "end":
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

  return RequestsIndex;
}(_react.Component);

exports.default = RequestsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkJ1dHRvbiIsIlRhYmxlIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RzSW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3dzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7O2lDQWtCUyxBQUNYO2tCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDakQ7K0JBQ0UsQUFBQztjQUFELEFBQ00sQUFDSjtlQUZGLEFBRU8sQUFDTDttQkFIRixBQUdXLEFBQ1Q7bUJBSkYsQUFJVyxBQUNUOzBCQUxGLEFBS2tCOztzQkFMbEI7d0JBREYsQUFDRSxBQVFIO0FBUkc7QUFDRSxTQURGO0FBRkosQUFBTyxBQVdSLE9BWFE7Ozs7NkJBYUE7VUFBQSxBQUNDLFNBREQsQUFDbUMsdUJBRG5DLEFBQ0M7VUFERCxBQUNTLE1BRFQsQUFDbUMsdUJBRG5DLEFBQ1M7VUFEVCxBQUNjLGFBRGQsQUFDbUMsdUJBRG5DLEFBQ2M7VUFEZCxBQUMwQixPQUQxQixBQUNtQyx1QkFEbkMsQUFDMEIsQUFFakM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FKTixBQUVFLEFBQ0UsQUFDRSxBQUlKLG1DQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsZ0NBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUpGLEFBSUUsQUFDQSw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMRixBQUtFLEFBQ0EsbUNBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTkYsQUFNRSxBQUNBLDRCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVROLEFBQ0UsQUFDRSxBQU9FLEFBR0osK0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FyQk4sQUFDRSxBQVFFLEFBWUUsQUFBTyxBQUFLLEFBSW5COzs7OzsyRyxBQTNENEI7Ozs7O21CQUNuQjtBLDBCQUFZLE0sQUFBTSxNQUNwQixBLEFBREU7QSwyQkFDUyx3QixBQUFBLEFBQVM7O3VCQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBQUFvQyxBOzttQkFBekQ7QTs7dUJBQ3VCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCQUFqQixBQUFrQyxBOzttQkFBekQ7QTs7eUNBRWlCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3pDO0EsQUFMa0IsQUFDckIsaUJBQUEsQ0FEcUI7O21CQUFqQjtBO2lEQVFDLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsY0FBckIsY0FBbUMsZ0IsQUFBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmaUIsQSxBQStENUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSFAvRGVza3RvcC9Tb2xpZGl0eS9raWNrc3RhcnQifQ==