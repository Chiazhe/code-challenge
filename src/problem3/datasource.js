import fetch from "node-fetch";

/**
 * Datasource class implementation
 */
class Datasource {
  /**
   * Constructor function for Datasource class
   * @param {Number} buy - buy price of the token
   * @param {Number} sell - sell price of the token
   * @param {Number} id - id of the token
   * @param {String} pair - tradepair of the token
   * @param {String} timestamp - timestamp when the data is retrieved
   */
  constructor(buy, sell, id, pair, timestamp) {
    this.buy = buy;
    this.sell = sell;
    this.id = id;
    this.pair = pair;
    this.timestamp = timestamp;
  }

  /**
   * function that returns a Promise which provides fulfilment handler
   * with an array of prices retrieved from a remote pricing engine
   */
  getPrices() {
    return new Promise((resolve, reject) => {
      fetch("https://static.ngnrs.io/test/prices")
        .then((res) => res.json())
        .then((res) => {
          let data = [];
          for (let prices of res.data.prices) {
            data.push(
              new Datasource(
                prices.buy,
                prices.sell,
                prices.id,
                prices.pair,
                prices.timestamp
              )
            );
          }
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }

  /*
   * function that returns the mid-point value between price.buy and price.sell
   */
  mid() {
    return (this.buy + this.sell) / 2;
  }

  /*
   * function that returns the quote currency (counter currency) of the trade pair
   */
  quote() {
    return this.pair.slice(this.pair.length - 3, this.pair.length);
  }
}

let ds = new Datasource();
ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
