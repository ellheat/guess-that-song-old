const random = require('lodash.random');
const characters = require('../json/characters');

const CHARACTERS = [];


const getCharacters = () => new Promise((resolve) => {
  const animals = characters.characters;
  const adverbs = characters.adverbs;
  const colors = characters.colors;

  animals.forEach(animal => {
    const randomColor = colors[random(0, colors.length - 1)];
    const randomAdverb = adverbs[random(0, adverbs.length - 1)];

    CHARACTERS.push({ name: `${randomAdverb} ${animal}`, color: randomColor });
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
