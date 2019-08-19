'use strict';

function countSameElements(collection) {
  var result = [];
  for(let i = 0; i < collection.length; i++){
    isContainer(result, collection[i]);
  }
  
  return result;
}

function isContainer(collection, key){

  var flg = false;
  if(key.search("-") == 1){
    flg = true;
  }

  for(let i = 0; i < collection.length; i++){
    if(key == collection[i].key){
      if(flg){
        collection[i] = collection[i] + key.split("-")[1];
      }else{
        collection[i].count++;
      }
      return;
    }
  }
  var map = {};
  if(flg){
    map.key = key.split("-")[0];
    map.count = parseInt(key.split("-")[1]);
  }else{
    map.key = key;
    map.count = 1;
  }
  collection.push(map);
}