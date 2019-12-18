//create a question class
// when creating a new question object
// text, options

class Question {
  constructor(text) {
    this.text = text;
    this.options = [];
  }
  addOption(option) {
    if (!option.value || !option.query) {
      throw new Error("option must have a value and a query");
    }

    this.options.push(option);
  }
}

module.exports = Question;
