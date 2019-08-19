'use strict';

function countSameElements(collection) {
  var result = [];
  for(let i = 0; i < collection.length; i++){
    isContainer(result, collection[i]);
  }
  
  return result;
}

function isContainer(collection, key){
  for(let i = 0; i < collection.length; i++){
    if(key == collection[i].key){
      collection[i].count++;
      return;
    }
  }
  var map = {};
  map.key = key;
  map.count = 1;
  collection.push(map);
}
