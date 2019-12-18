const questionJSON = require("./questions.json");
const Questionnaire = require("./Questionnaire");
const GiftList = require("./GiftList");

const kidsXmasGiftsQuestionnaire = new Questionnaire();
kidsXmasGiftsQuestionnaire.translateRawQuestionJSON(questionJSON);

const queries = kidsXmasGiftsQuestionnaire.run();

const kidsGiftList = new GiftList(queries);

//create a class named gift that has 3 prop, title, description, price
//that are required during object instantiation

console.log(kidsGiftList.list);

console.log(queries);

kidsGiftList.getGiftsFromQueries().then(hey => {
  console.log(hey.list);
});
