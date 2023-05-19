
const botsData = require("../src/botsData");
const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an object', () => {
    expect(typeof shuffle(botsData)).toBe('object')
  }),
  test('returns object with same length', () => {
    expect(shuffle(botsData).length).toEqual(botsData.length)
  })
});
