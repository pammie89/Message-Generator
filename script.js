function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num);
}

const collectiveWisdom = {
  // signInfo: ["star", "moon", "sun", "comet"],
  signInfo: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  fortuneOutput: [
    "Empty",
    "Somewhat Empty",
    "Full",
    "Somewhat Full",
    "STUFFED",
  ],
  advice: ["eat a hamburger", "eat a salad", "eat pasta", "nutritional bar"],
};

// Store the 'wisdom' in an array
let personalWisdom = [];

// Iterate over the object
for (let prop in collectiveWisdom) {
  let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);

  // use the object's properties to customize the message being added to personalWisdom
  switch (prop) {
    case "signInfo":
      personalWisdom.push(`Today is: "${collectiveWisdom[prop][optionIdx]}".`);
      break;
    case "fortuneOutput":
      personalWisdom.push(
        `How is your stomach feeling: "${collectiveWisdom[prop][optionIdx]}".`
      );
      break;
    case "advice":
      personalWisdom.push(
        `You should: "${collectiveWisdom[prop][optionIdx]}".`
      );
      break;
    default:
      personalWisdom.push("There is not enough info.");
  }
}

function formatWisdom(wisdom) {
  // Add some ASCII here?
  // Add in more symbols to the array? like emojies or what not?
  const formatted = personalWisdom.join("\n");
  // document.body.innerHTML = formatted;

  document.write(
    `<h1 class="message">Your Personal Automatic Food Selector</h1>`
  );
  document.write(
    `<h4 class="refresh">Refresh your screen for new food suggestions</h4>`
  );

  document.write(`<h2 class="formatted">${formatted}</h2>`);

  console.log(formatted);
}

formatWisdom(personalWisdom);
