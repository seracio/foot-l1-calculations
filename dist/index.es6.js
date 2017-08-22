import _ from 'lodash/fp';

var getPointsByMatchAndTeam=function(a,b){if(a.homeScore===a.awayScore)return 1;var c=a.home.id===b;return c&&a.homeScore>a.awayScore||!c&&a.awayScore>a.homeScore?3:0};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var updateRankingByMatch=function(a,b){var c,d=b.home.id,e=b.away.id,f=a[d],g=a[e];return _extends({},a,(c={},defineProperty(c,d,_extends({},f,{pts:f.pts+getPointsByMatchAndTeam(b,d),bp:f.bp+b.homeScore,bc:f.bc+b.awayScore})),defineProperty(c,e,_extends({},g,{pts:g.pts+getPointsByMatchAndTeam(b,e),bp:g.bp+b.awayScore,bc:g.bc+b.homeScore})),c))};var computeRanks=function(a){var b=_.flow(_.values,_.orderBy([_.get('pts'),function(a){return a.bp-a.bc},_.get('bp')],['desc','desc','desc']),_.map(_.get('id')))(a);return _.mapValues(function(a){return _extends({},a,{rank:_.findIndex(_.isEqual(a.id),b)+1})},a)};var getRankings=function(a,b){var c=_.flow(_.map(function(a){return{id:a.id,pts:0,bp:0,bc:0,rank:0}}),_.keyBy(_.get('id')))(a);return _.flow(_.groupBy(_.get('week')),_.values,_.orderBy(_.get('[0].week'),'asc'),_.reduce(function(a,b){var c=_.last(a),d=_.flow(_.reduce(function(a,b){return updateRankingByMatch(a,b)},c),computeRanks)(b);return[].concat(toConsumableArray(a),[d])},[c]),_.drop(1))(b)};

export { getPointsByMatchAndTeam, getRankings };
