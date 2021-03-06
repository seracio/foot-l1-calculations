'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash/fp'));

var table={minutes:[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90],scores:[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[9,0],[9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[10,0],[10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10]],matrix:[[308,258,153,61,24,4,2,1,0,1,0,406,471,215,85,23,4,1,0,0,0,0,317,283,153,59,16,4,2,1,0,0,0,128,134,75,17,5,1,0,0,0,0,0,72,54,21,3,5,1,0,0,0,0,0,18,19,1,1,0,1,0,0,0,0,0,4,5,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[322,273,150,63,21,3,2,1,0,1,0,421,470,221,87,22,5,0,0,0,0,0,318,281,142,54,12,2,2,1,0,0,0,129,127,71,16,4,1,0,0,0,0,0,69,54,21,2,5,1,0,0,0,0,0,19,16,1,1,0,0,0,0,0,0,0,3,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[353,299,161,62,18,3,3,0,0,1,0,449,469,206,82,21,2,0,1,0,0,0,317,282,131,51,11,2,2,0,0,0,0,129,115,60,10,6,0,0,0,0,0,0,61,52,19,2,2,1,0,0,0,0,0,15,13,2,0,0,0,0,0,0,0,0,5,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[387,318,178,57,16,4,2,0,1,0,0,482,493,181,81,18,2,1,0,0,0,0,326,256,120,44,7,2,2,0,0,0,0,121,108,52,9,4,0,0,0,0,0,0,56,48,13,1,2,0,0,0,0,0,0,13,9,2,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[430,341,169,57,13,5,2,0,0,0,0,525,485,185,69,11,2,1,0,0,0,0,321,255,108,37,5,2,2,0,0,0,0,114,103,45,7,2,0,0,0,0,0,0,48,36,13,1,2,0,0,0,0,0,0,13,7,1,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[485,364,168,59,11,5,1,0,0,0,0,557,488,163,65,8,2,1,0,0,0,0,313,234,102,34,4,2,1,0,0,0,0,122,91,31,6,1,0,0,0,0,0,0,40,28,9,1,1,0,0,0,0,0,0,12,7,1,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[546,396,168,54,11,4,1,0,0,0,0,588,463,159,57,8,3,0,0,0,0,0,298,226,85,30,3,2,0,0,0,0,0,116,83,23,4,1,0,0,0,0,0,0,38,26,8,2,0,0,0,0,0,0,0,9,5,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[612,427,168,51,9,3,1,0,0,0,0,620,441,143,49,8,2,0,0,0,0,0,297,215,77,20,1,2,0,0,0,0,0,108,71,16,5,1,0,0,0,0,0,0,36,20,5,0,0,0,0,0,0,0,0,7,3,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[692,463,160,50,8,1,1,0,0,0,0,634,428,137,39,5,2,0,0,0,0,0,290,198,62,16,1,1,0,0,0,0,0,107,53,12,3,1,0,0,0,0,0,0,28,15,4,0,0,0,0,0,0,0,0,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[781,504,160,47,8,0,1,0,0,0,0,648,400,114,33,3,1,0,0,0,0,0,293,183,51,7,0,0,0,0,0,0,0,92,42,6,4,0,0,0,0,0,0,0,22,11,4,0,0,0,0,0,0,0,0,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[892,535,148,42,5,1,0,0,0,0,0,698,379,86,26,2,1,0,0,0,0,0,288,142,35,3,0,0,0,0,0,0,0,72,30,7,3,0,0,0,0,0,0,0,18,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1020,534,146,32,5,0,0,0,0,0,0,715,353,75,20,0,1,0,0,0,0,0,283,118,23,1,0,0,0,0,0,0,0,53,21,5,2,0,0,0,0,0,0,0,10,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1173,562,134,23,1,0,0,0,0,0,0,737,287,64,15,0,1,0,0,0,0,0,242,102,13,1,0,0,0,0,0,0,0,44,12,4,0,0,0,0,0,0,0,0,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1347,549,125,16,1,0,0,0,0,0,0,750,246,45,6,0,0,0,0,0,0,0,212,72,12,1,0,0,0,0,0,0,0,27,7,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1557,554,99,10,0,0,0,0,0,0,0,712,214,27,4,0,0,0,0,0,0,0,177,40,4,0,0,0,0,0,0,0,0,18,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1802,524,72,5,0,0,0,0,0,0,0,678,150,18,0,0,0,0,0,0,0,0,131,22,4,0,0,0,0,0,0,0,0,10,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2120,435,56,1,0,0,0,0,0,0,0,600,109,7,0,0,0,0,0,0,0,0,73,11,1,0,0,0,0,0,0,0,0,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2437,373,24,0,0,0,0,0,0,0,0,493,52,1,0,0,0,0,0,0,0,0,35,3,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2881,220,6,0,0,0,0,0,0,0,0,288,14,0,0,0,0,0,0,0,0,0,10,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],numMatches:3420};

var mapWithIndex=_.map.convert({cap:!1}); var scores=table.scores; var minutes=table.minutes; var matrix=table.matrix; var numMatches=table.numMatches;var findIndexMinute=function(a){return _.flow(_.orderBy(_.flow(_.subtract(a),function(a){return Math.abs(a)}),'asc'),_.first,_.isEqual,_.findIndex(_,minutes))(minutes)};var getPoints=function(a,b){return a[0]>a[1]?b?3:0:a[1]>a[0]?b?0:3:1};var getPointDifference=function(a,b){var c=b?[a[0]+1,a[1]]:[a[0],a[1]+1],d=getPoints(c,b),e=getPoints(a,b);return d-e};var getExpectedPointValue=function(a,b,c){var d=findIndexMinute(a),e=matrix[d];return _.flow(mapWithIndex(function(a,d){var e=scores[d],f=_.flow(_.zip(e),_.map(_.sum))(b),g=getPointDifference(f,c);return g*(a/numMatches)}),_.sum)(e)};var getVND=function(a,b){return a[0]>a[1]?b?[1,0,0]:[0,0,1]:a[1]>a[0]?b?[0,0,1]:[1,0,0]:[0,1,0]};var getExpectedResult=function(a,b,c){var d=findIndexMinute(a),e=matrix[d];return _.flow(mapWithIndex(function(a,d){var e=scores[d],f=_.flow(_.zip(e),_.map(_.sum))(b),g=getVND(f,c);return _.map(function(b){return b*(a/numMatches)},g)}),_.zipAll,_.map(_.sum))(e)};

var getPointsByMatchAndTeam=function(a,b){if(a.homeScore===a.awayScore)return 1;var c=a.home.id===b;return c&&a.homeScore>a.awayScore||!c&&a.awayScore>a.homeScore?3:0};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();













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

exports.getPointsByMatchAndTeam = getPointsByMatchAndTeam;
exports.getRankings = getRankings;
exports.getExpectedResult = getExpectedResult;
exports.getExpectedPointValue = getExpectedPointValue;
