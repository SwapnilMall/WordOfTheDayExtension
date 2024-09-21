//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.name == "fetchWords") {
    const apiKey =
      "00001111222233334444555566667777hhhh8888ggg9999dddd00rrr000ttt";
    const dateStr = new Date().toISOString().slice(0, 10); //2020-01-01
    const apiCall =
      "https://api.wordnik.com/v4/words.json/wordOfTheDay?date=" +
      dateStr +
      "&api_key=" +
      apiKey;
    //We call api..
    fetch(apiCall)
      .then(function (res) {
        //wait for response..
        if (res.status !== 200) {
          response({
            word: "Error",
            desc: "There was a problem loding for the word of the day",
          });
          return;
        }
        res.json().then(function (date) {
          //Send response ...
          response({ word: data.word, desc: data.note });
        });
      })
      .catch(function (err) {
        response({
          word: "Error",
          desc: "There was a problem loding for the word of the day",
        });
      });

    return true;

    //If the api is not working
    // const wordsObj = [
    //   "surimono",
    //   "flanconade",
    //   "perihelion",
    //   "brailler",
    //   "needfire"
    // ];
    // const wordsDescObj = [
    //   "A kind of Japanese woodblock print, privately commissioned for special occasions such as the New Year.",
    //   "In <em>fencing</em>, the ninth and last thrust, usually aimed at the side.",
    //   "The point in a solar orbit where the orbiting body is closest to the sun.",
    //   "A typewriter used to emboss paper with braille cells to be read by the visually impaired instead of using a manual stylus.",
    //   "A fire produced by the friction of one piece of wood upon another, or of a rope upon a stake of wood."
    // ];

    // response({word: wordsObj[0], desc: wordsDescObj[0]});
  }
});
