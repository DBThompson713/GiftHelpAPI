const questionJSON = require("./questions.json");
const Questionnaire = require("./Questionnaire");
const GiftList = require("./GiftList");

const kidsXmasGiftsQuestionnaire = new Questionnaire();

kidsXmasGiftsQuestionnaire.translateRawQuestionJSON(questionJSON);

const queries = kidsXmasGiftsQuestionnaire.run();

//create another class called GiftList that upon object creation takes in an array of queries
//save those queries in a queries property

const kidsGiftList = new GiftList(queries);

// create a class called gift that has 3 properties: title, description, price that are required during object instantiation

// console.log(queries);
