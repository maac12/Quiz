
export default class TrivDB {


  
  async getQuestions() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple"
    );

    if (!res.ok) {
      throw new Error(
        `Could not fletch Trivia Database service, received ${res.status}`
      );
    }
     return await res.json();
 
  }
}

