'use strict';

// const angular = require('angular');
const ngAdventure = require('ngAdventure', []);

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('init playerService');

  let service = {};

  let turn = 0;

  let player = service.player = {
    name: 'Arya Stark',
    location: 'House Stark',
    healthPoints: 10,
  };

  let history = service.history = {
    turn,
    desc: 'Welcome to The Game of Thrones...',
    location: 'House Stark',
    healthPoints: player.healthPoints,
  };

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn++;
      let currentLocation = player.location;
      let newLocation = mapService.mapData[currentLocation][direction];
      if(!newLocation){
        history.unshift({
          turn,
          desc: 'It appears you have hit a wall',
          location: player.location,
          healthPoints: player.healthPoints,
        });
        console.log('history', history);
        return reject('There is no House in that direction');
      }
      history.unshift({
        turn,
        desc: mapService.mapData[newLocation].desc,
        healthPoints: player.healthPoints,
      });
      console.log('history', history);
      player.location = newLocation;
      return resolve(player.location);
    });
  };
}
