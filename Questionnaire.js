// create a class Questionnaire
// has a property called questions
// that starts as an empty array
// has a method on the class to add
// a question object to the array

const Question = require("./Question");
const questionJSON = require("./questions.json");
const readline = require("readline");
const readlineSync = require("readline-sync");

class Questionnaire {
  constructor() {
    this.questions = [];
  }

  addQuestion(question) {
    if (question.constructor.name === "Question") {
      this.questions.push(question);
    }
  }

  translateRawQuestionJSON(questionJSON) {
    //parse and store the question json in variable
    let parsedJson = JSON.parse(questionJSON);
    //loop through objects in array
    //create a new question object as we loop using the text property
    for (let entry of parsedJson) {
      const { text, options } = entry;
      const question = new Question(text);
      //loop through options
      // add options to questions
      for (let option of options) {
        question.addOption(option);
      }
      // add completed question to the questionnaire questions to the property
      this.addQuestion(question);
    }
  }

  // add another method named run
  // loop through the questions in the question list
  //ask the user the question value
  //retrieve their response
  //console.log the query associated with their answer
  run() {
    const queries = [];
    for (let { text, options } of this.questions) {
      let values = options.map(response => {
        return response.value;
      });
      let index = readlineSync.keyInSelect(values, text, { cancel: false });
      let query = options[index].query;

      queries.push(query);
    }
    return queries;
  }
}

module.exports = Questionnaire;
