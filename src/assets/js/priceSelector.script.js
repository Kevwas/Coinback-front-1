class PriceSelector extends HTMLElement {
  connectedCallback() {
    console.log(this.getAttributeNames());
    this.innerHTML = `
        <style>
        .selector-wrap {
            display: flex;
            font-family: Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        }
        .icon-container {
            color: ${
              this.getAttribute("icon-color")
                ? this.getAttribute("icon-color")
                : "black"
            };
            font-size: ${
              this.getAttribute("font-size")
                ? this.getAttribute("font-size")
                : "15px"
            };
            width: 25px;
        }

        .price-container {
            color: ${
              this.getAttribute("color") ? this.getAttribute("color") : "black"
            };
            font-size: ${
              this.getAttribute("font-size")
                ? this.getAttribute("font-size")
                : "15px"
            };
        }
        </style>
        <div class="selector-wrap d-flex align-items-center justify-content-left">
            <div class="icon-container">
                <ion-icon name="caret-down-outline"></ion-icon>
            </div>
            <div id="price-container" class="price-container">
                BTC/USD 10000
            </div>
        </div>`;
    this.fetchPrice();
  }

  async fetchPrice() {
    //bitcoin
    const defaultCoin = this.getAttribute("default-coin")
      ? this.getAttribute("default-coiin")
      : "bitcoin";
    //usd
    const defaultCurrency = this.getAttribute("default-currency")
      ? this.getAttribute("default-currency")
      : "usd";

    let coinData = null;
    await fetch("https://api.coingecko.com/api/v3/coins/" + defaultCoin)
      .then((res) => res.json())
      .then((data) => coinData = data);
    document.getElementById('price-container').innerHTML = `${coinData.symbol.toUpperCase()}/${defaultCurrency.toUpperCase()} ${coinData.market_data.current_price[defaultCurrency]}`;
  }
}

customElements.define("price-selector", PriceSelector);
