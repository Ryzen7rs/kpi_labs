'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Anton': '+380501112233',
  'Ivan': '+380679998877'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };