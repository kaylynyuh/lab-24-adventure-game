'use strict';

require('./_game-pad.scss'); 

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl',
});

ngAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService){
  $log.debug('init GamePadController');

  this.directions = ['north', 'south', 'east', 'west'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function(){
    playerService.movePlayer(this.moveDirection)
    .then(location => {
      $log.log(`Arya's currently located in ${location}`);
    })
    .catch(err => {
      $log.error(err);
    });
  };
}
