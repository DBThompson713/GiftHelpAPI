const queries = require("./Questionnaire");
const gift = require("./gift");
const axios = require("axios");

class GiftList {
  constructor(queries) {
    this.queries = queries;
    this.list = [];
    this.getGiftsFromQueries();
  }

  //addGift -- adds gift to the list after checking that it is a gift
  addGift(gift) {
    if (gift.constructor.name === "Gift") {
      this.list.push(gift);
    }
  }

  //   axios.get('https://openapi.etsy.com/v2/listings/active?api_key=0cybldlljac0tj4lsic7bnkb')
  //   .then(response => {
  //     console.log(response);
  //   });

  getGiftsFromQueries() {
    const url =
      "https://openapi.etsy.com/v2/listings/active?api_key=0cybldlljac0tj4lsic7bnkb";

    const promises = [];

    for (let query of this.queries) {
      promises.push(axios.get(url + `&keywords=${query}`));
    }

    Promise.all(promises).then(responses => {
      for (let response of responses) {
        console.log(response.data);
      }
    });

    // use Promise.all to get all the results
    // put 2 random gifts into the list per query
  }

  //create a new method called getGiftsFromQueries
  //this method will call the etsy api for each query
  //put 2 random gifts into the list per query
}

module.exports = GiftList;
