'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('testing gamePadCtrl', function(){
  beforeEach(() => {
    angular.mock.module('ngAdventure');

    angular.mock.inject($controller => {
      this.gamePadCtrl = new $controller('GamePadController');
    });
  });
});

describe('testing initial properties', () => {
  it('directions should equal north, south, east, and west', () => {
    expect(this.gamePadCtrl.directions).toBe('north', 'south', 'east', 'west');
  });
  it('moveDirection should be the first element in the array', () => {
    expect(this.moveDirection).toEqual(this.directions[0]);
  });
});

describe('testing #movePlayer()', () => {
  it('should equal a location', () => {
    let expectedResult;
    let result;
    expect(result).toEqual(expectedResult);
  });
});
