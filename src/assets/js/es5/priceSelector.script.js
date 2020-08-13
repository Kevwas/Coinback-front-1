"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PriceSelector = function (_HTMLElement) {
  _inherits(PriceSelector, _HTMLElement);

  function PriceSelector() {
    _classCallCheck(this, PriceSelector);

    return _possibleConstructorReturn(this, (PriceSelector.__proto__ || Object.getPrototypeOf(PriceSelector)).apply(this, arguments));
  }

  _createClass(PriceSelector, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      console.log(this.getAttributeNames());
      this.innerHTML = "\n        <style>\n\n        \n        .selector-wrap {\n            display: flex;\n            font-family: Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;\n        }\n        .icon-container {\n            color: " + (this.getAttribute("icon-color") ? this.getAttribute("icon-color") : "black") + ";\n            font-size: " + (this.getAttribute("font-size") ? this.getAttribute("font-size") : "15px") + ";\n            width: 25px;\n        }\n\n        .price-container {\n            color: " + (this.getAttribute("color") ? this.getAttribute("color") : "black") + ";\n            font-size: " + (this.getAttribute("font-size") ? this.getAttribute("font-size") : "15px") + ";\n        }\n\n        @media (max-width: 500px) {\n          .icon-container { \n            font-size: 14px;\n          }\n\n          .price-container { \n            font-size: 14px;\n          }\n\n        }\n        </style>\n        <div class=\"selector-wrap d-flex align-items-center justify-content-left\">\n            <div class=\"icon-container\">\n                <ion-icon name=\"caret-down-outline\"></ion-icon>\n            </div>\n            <div id=\"price-container\" class=\"price-container\">\n                BTC/USD 10000\n            </div>\n        </div>";
      this.fetchPrice();
    }
  }, {
    key: "fetchPrice",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var defaultCoin, defaultCurrency, coinData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //bitcoin
                defaultCoin = this.getAttribute("default-coin") ? this.getAttribute("default-coiin") : "bitcoin";
                //usd

                defaultCurrency = this.getAttribute("default-currency") ? this.getAttribute("default-currency") : "usd";
                coinData = null;
                _context.next = 5;
                return fetch("https://api.coingecko.com/api/v3/coins/" + defaultCoin).then(function (res) {
                  return res.json();
                }).then(function (data) {
                  return coinData = data;
                });

              case 5:
                document.getElementById("price-container").innerHTML = coinData.symbol.toUpperCase() + "/" + defaultCurrency.toUpperCase() + " " + coinData.market_data.current_price[defaultCurrency];

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchPrice() {
        return _ref.apply(this, arguments);
      }

      return fetchPrice;
    }()
  }]);

  return PriceSelector;
}(HTMLElement);

customElements.define("price-selector", PriceSelector);