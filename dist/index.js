'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash/fp'));

const table = {
    minutes: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
    scores: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9], [6, 10], [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10], [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9], [8, 10], [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9], [9, 10], [10, 0], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10]],
    matrix: [[308, 258, 153, 61, 24, 4, 2, 1, 0, 1, 0, 406, 471, 215, 85, 23, 4, 1, 0, 0, 0, 0, 317, 283, 153, 59, 16, 4, 2, 1, 0, 0, 0, 128, 134, 75, 17, 5, 1, 0, 0, 0, 0, 0, 72, 54, 21, 3, 5, 1, 0, 0, 0, 0, 0, 18, 19, 1, 1, 0, 1, 0, 0, 0, 0, 0, 4, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [322, 273, 150, 63, 21, 3, 2, 1, 0, 1, 0, 421, 470, 221, 87, 22, 5, 0, 0, 0, 0, 0, 318, 281, 142, 54, 12, 2, 2, 1, 0, 0, 0, 129, 127, 71, 16, 4, 1, 0, 0, 0, 0, 0, 69, 54, 21, 2, 5, 1, 0, 0, 0, 0, 0, 19, 16, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [353, 299, 161, 62, 18, 3, 3, 0, 0, 1, 0, 449, 469, 206, 82, 21, 2, 0, 1, 0, 0, 0, 317, 282, 131, 51, 11, 2, 2, 0, 0, 0, 0, 129, 115, 60, 10, 6, 0, 0, 0, 0, 0, 0, 61, 52, 19, 2, 2, 1, 0, 0, 0, 0, 0, 15, 13, 2, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [387, 318, 178, 57, 16, 4, 2, 0, 1, 0, 0, 482, 493, 181, 81, 18, 2, 1, 0, 0, 0, 0, 326, 256, 120, 44, 7, 2, 2, 0, 0, 0, 0, 121, 108, 52, 9, 4, 0, 0, 0, 0, 0, 0, 56, 48, 13, 1, 2, 0, 0, 0, 0, 0, 0, 13, 9, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [430, 341, 169, 57, 13, 5, 2, 0, 0, 0, 0, 525, 485, 185, 69, 11, 2, 1, 0, 0, 0, 0, 321, 255, 108, 37, 5, 2, 2, 0, 0, 0, 0, 114, 103, 45, 7, 2, 0, 0, 0, 0, 0, 0, 48, 36, 13, 1, 2, 0, 0, 0, 0, 0, 0, 13, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [485, 364, 168, 59, 11, 5, 1, 0, 0, 0, 0, 557, 488, 163, 65, 8, 2, 1, 0, 0, 0, 0, 313, 234, 102, 34, 4, 2, 1, 0, 0, 0, 0, 122, 91, 31, 6, 1, 0, 0, 0, 0, 0, 0, 40, 28, 9, 1, 1, 0, 0, 0, 0, 0, 0, 12, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [546, 396, 168, 54, 11, 4, 1, 0, 0, 0, 0, 588, 463, 159, 57, 8, 3, 0, 0, 0, 0, 0, 298, 226, 85, 30, 3, 2, 0, 0, 0, 0, 0, 116, 83, 23, 4, 1, 0, 0, 0, 0, 0, 0, 38, 26, 8, 2, 0, 0, 0, 0, 0, 0, 0, 9, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [612, 427, 168, 51, 9, 3, 1, 0, 0, 0, 0, 620, 441, 143, 49, 8, 2, 0, 0, 0, 0, 0, 297, 215, 77, 20, 1, 2, 0, 0, 0, 0, 0, 108, 71, 16, 5, 1, 0, 0, 0, 0, 0, 0, 36, 20, 5, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [692, 463, 160, 50, 8, 1, 1, 0, 0, 0, 0, 634, 428, 137, 39, 5, 2, 0, 0, 0, 0, 0, 290, 198, 62, 16, 1, 1, 0, 0, 0, 0, 0, 107, 53, 12, 3, 1, 0, 0, 0, 0, 0, 0, 28, 15, 4, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [781, 504, 160, 47, 8, 0, 1, 0, 0, 0, 0, 648, 400, 114, 33, 3, 1, 0, 0, 0, 0, 0, 293, 183, 51, 7, 0, 0, 0, 0, 0, 0, 0, 92, 42, 6, 4, 0, 0, 0, 0, 0, 0, 0, 22, 11, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [892, 535, 148, 42, 5, 1, 0, 0, 0, 0, 0, 698, 379, 86, 26, 2, 1, 0, 0, 0, 0, 0, 288, 142, 35, 3, 0, 0, 0, 0, 0, 0, 0, 72, 30, 7, 3, 0, 0, 0, 0, 0, 0, 0, 18, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1020, 534, 146, 32, 5, 0, 0, 0, 0, 0, 0, 715, 353, 75, 20, 0, 1, 0, 0, 0, 0, 0, 283, 118, 23, 1, 0, 0, 0, 0, 0, 0, 0, 53, 21, 5, 2, 0, 0, 0, 0, 0, 0, 0, 10, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1173, 562, 134, 23, 1, 0, 0, 0, 0, 0, 0, 737, 287, 64, 15, 0, 1, 0, 0, 0, 0, 0, 242, 102, 13, 1, 0, 0, 0, 0, 0, 0, 0, 44, 12, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1347, 549, 125, 16, 1, 0, 0, 0, 0, 0, 0, 750, 246, 45, 6, 0, 0, 0, 0, 0, 0, 0, 212, 72, 12, 1, 0, 0, 0, 0, 0, 0, 0, 27, 7, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1557, 554, 99, 10, 0, 0, 0, 0, 0, 0, 0, 712, 214, 27, 4, 0, 0, 0, 0, 0, 0, 0, 177, 40, 4, 0, 0, 0, 0, 0, 0, 0, 0, 18, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1802, 524, 72, 5, 0, 0, 0, 0, 0, 0, 0, 678, 150, 18, 0, 0, 0, 0, 0, 0, 0, 0, 131, 22, 4, 0, 0, 0, 0, 0, 0, 0, 0, 10, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2120, 435, 56, 1, 0, 0, 0, 0, 0, 0, 0, 600, 109, 7, 0, 0, 0, 0, 0, 0, 0, 0, 73, 11, 1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2437, 373, 24, 0, 0, 0, 0, 0, 0, 0, 0, 493, 52, 1, 0, 0, 0, 0, 0, 0, 0, 0, 35, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2881, 220, 6, 0, 0, 0, 0, 0, 0, 0, 0, 288, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    numMatches: 3420
};

const mapWithIndex = _.map.convert({ cap: false });

const { scores, minutes, matrix, numMatches } = table;

const findIndexMinute = minute => _.flow(
// find closest minute
_.orderBy(_.flow(_.subtract(minute), val => Math.abs(val)), 'asc'), _.first,
// find its index in minutes
_.isEqual, _.findIndex(_, minutes))(minutes);

/**
 * Compute points for a given score 
 * @param {*} score 
 * @param {*} isHome 
 */
const getPoints = (score, isHome) => {
    if (score[0] > score[1]) {
        return isHome ? 3 : 0;
    }
    if (score[1] > score[0]) {
        return isHome ? 0 : 3;
    }
    return 1;
};

/**
 * Compute points difference between two scores for a given team
 * @param {*} minuendScore 
 * @param {*} subtraendScore 
 * @param {*} isHome 
 */
const getPointDifference = (scoreBefore, isHome) => {
    const scoreAfter = isHome ? [scoreBefore[0] + 1, scoreBefore[1]] : [scoreBefore[0], scoreBefore[1] + 1];
    const pointsAfter = getPoints(scoreAfter, isHome);
    const pointsBefore = getPoints(scoreBefore, isHome);
    return pointsAfter - pointsBefore;
};

/**
 * Return the expected value of a goal in points
 * @param {*} minute 
 * @param {*} scoreBefore 
 * @param {*} isHome 
 */
const getExpectedPointValue = (minute, scoreBefore, isHome) => {
    const indexMinute = findIndexMinute(minute);

    // find corresponding probabilities
    const frequencies = matrix[indexMinute];
    // compute the sum of potential points diff
    return _.flow(mapWithIndex((frequency, index) => {
        const probability = frequency / numMatches;
        // retrieve potential goals for each side for this probability
        const goalsUntilEnd = scores[index];
        // add the potential goals to the current score
        const potentialScore = _.flow(_.zip(goalsUntilEnd), _.map(_.sum))(scoreBefore);
        // compute the points difference
        const potentialDifference = getPointDifference(potentialScore, isHome);
        return potentialDifference * probability;
    }), _.sum)(frequencies);
};

const getVND = (score, isHome) => {
    if (score[0] > score[1]) {
        return isHome ? [1, 0, 0] : [0, 0, 1];
    }
    if (score[1] > score[0]) {
        return isHome ? [0, 0, 1] : [1, 0, 0];
    }
    return [0, 1, 0];
};

const getExpectedResult = (minute, score, isHome) => {
    const indexMinute = findIndexMinute(minute);
    // find corresponding probabilities
    const frequencies = matrix[indexMinute];

    return _.flow(mapWithIndex((frequency, index) => {
        const probability = frequency / numMatches;
        // retrieve potential goals for each side for this probability
        const goalsUntilEnd = scores[index];
        // add the potential goals to the current score
        const potentialScore = _.flow(_.zip(goalsUntilEnd), _.map(_.sum))(score);
        // compute the points difference
        const vnd = getVND(potentialScore, isHome);
        return _.map(res => res * probability, vnd);
    }), _.zipAll, _.map(_.sum))(frequencies);
};

const getPointsByMatchAndTeam = (match, teamId) => {
    if (match.homeScore === match.awayScore) return 1;
    const isHome = match.home.id === teamId;
    return isHome && match.homeScore > match.awayScore || !isHome && match.awayScore > match.homeScore ? 3 : 0;
};

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

const updateRankingByMatch = (ranking, match) => {
    const homeId = match.home.id;
    const awayId = match.away.id;
    const home = ranking[homeId];
    const away = ranking[awayId];
    return _extends({}, ranking, {
        [homeId]: _extends({}, home, {
            pts: home.pts + getPointsByMatchAndTeam(match, homeId),
            bp: home.bp + match.homeScore,
            bc: home.bc + match.awayScore
        }),
        [awayId]: _extends({}, away, {
            pts: away.pts + getPointsByMatchAndTeam(match, awayId),
            bp: away.bp + match.awayScore,
            bc: away.bc + match.homeScore
        })
    });
};

const computeRanks = ranking => {
    const ranks = _.flow(_.values, _.orderBy([_.get('pts'), team => team.bp - team.bc, _.get('bp')], ['desc', 'desc', 'desc']), _.map(_.get('id')))(ranking);
    return _.mapValues(team => _extends({}, team, {
        rank: _.findIndex(_.isEqual(team.id), ranks) + 1
    }), ranking);
};

const getRankings = (teams, matches) => {
    // ranking for theoretical day 0:
    // a dictionary of teams
    // for the real seed, we'll wrap it in an array
    // we'll also have to remove this specific week at the end of the
    // calculations
    const seed = _.flow(_.map(team => ({
        id: team.id,
        pts: 0,
        bp: 0,
        bc: 0,
        rank: 0
    })), _.keyBy(_.get('id')))(teams);
    return _.flow(_.groupBy(_.get('week')), _.values, _.orderBy(_.get('[0].week'), 'asc'),
    // for each week
    _.reduce((acc, matchesOfTheWeek) => {
        const lastRanking = _.last(acc);
        const newRanking = _.flow(
        // update ranking for both teams of current match
        _.reduce((ranking, match) => {
            return updateRankingByMatch(ranking, match);
        }, lastRanking),
        // compute ranks at the end of the week
        computeRanks)(matchesOfTheWeek);
        return [...acc, newRanking];
    }, [seed]),
    // remove artificial week 0
    _.drop(1))(matches);
};

exports.getPointsByMatchAndTeam = getPointsByMatchAndTeam;
exports.getRankings = getRankings;
exports.getExpectedResult = getExpectedResult;
exports.getExpectedPointValue = getExpectedPointValue;
