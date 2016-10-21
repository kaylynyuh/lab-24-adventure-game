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
    expect(Array.isArray(this.gamePadCtrl.directions)).toBe(true);
  });

  it('directions array should have a length of 4', () => {
    expect(this.gamePadCtrl.directions.length).toEqual(4);
  });

  it('should have a default direction north', () => {
    expect(this.gamePadCtrl.moveDirection).toBe('north');
  });

});

describe('testing #movePlayer()', () => {
  it('should return to the default', () => {
    this.gamePadCtrl.movePlayer();
    let expectedResult = this.gamePadCtrl.moveDirection;
    expect(expectedResult).toBe('north');
  });
});
