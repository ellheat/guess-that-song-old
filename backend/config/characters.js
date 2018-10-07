const random = require('lodash.random');
const characters = require('../json/characters');

const CHARACTERS = [];


const getCharacters = () => new Promise((resolve) => {
  const animals = characters.characters;
  const adjectives = characters.adjectives;
  const colors = characters.colors;

  animals.forEach((animal, index) => {
    const randomColor = colors[random(0, colors.length - 1)];
    const randomAdjective = adjectives[random(0, adjectives.length - 1)];

    CHARACTERS.push({
      id: index,
      name: `${randomAdjective} ${animal}`,
      color: randomColor,
      points: 0,
      correctAnswers: 0,
    });
  });
  resolve();
});

const characterPicker = () => {
  const randomNumberOfCharacter = random(0, CHARACTERS.length - 1);
  return CHARACTERS.splice(randomNumberOfCharacter, 1)[0];
};

module.exports = {
  characterPicker,
  getCharacters,
};
