// @flow
import _ from 'lodash/fp';
import table from './table';

type Score = [number, number];

type Table = {
    scores: Array<Score>,
    minutes: Array<number>,
    matrix: Array<Array<number>>,
    numMatches: number
};

const mapWithIndex = _.map.convert({ cap: false });

const { scores, minutes, matrix, numMatches }: Table = table;

export const findIndexMinute = (minute: number) =>
    _.flow(
        // find closest minute
        _.orderBy(_.flow(_.subtract(minute), val => Math.abs(val)), 'asc'),
        _.first,
        // find its index in minutes
        _.isEqual,
        _.findIndex(_, minutes)
    )(minutes);

/**
 * Compute points for a given score 
 * @param {*} score 
 * @param {*} isHome 
 */
export const getPoints = (score: Score, isHome: boolean): number => {
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
export const getPointDifference = (
    scoreBefore: Score,
    isHome: boolean
): number => {
    const scoreAfter = isHome
        ? [scoreBefore[0] + 1, scoreBefore[1]]
        : [scoreBefore[0], scoreBefore[1] + 1];
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
export const getExpectedPointValue = (
    minute: number,
    scoreBefore: Score,
    isHome: boolean
): number => {
    const indexMinute: number = findIndexMinute(minute);

    // find corresponding probabilities
    const frequencies: Array<number> = matrix[indexMinute];
    // compute the sum of potential points diff
    return _.flow(
        mapWithIndex((frequency, index) => {
            const probability = frequency / numMatches;
            // retrieve potential goals for each side for this probability
            const goalsUntilEnd = scores[index];
            // add the potential goals to the current score
            const potentialScore = _.flow(_.zip(goalsUntilEnd), _.map(_.sum))(
                scoreBefore
            );
            // compute the points difference
            const potentialDifference = getPointDifference(
                potentialScore,
                isHome
            );
            return potentialDifference * probability;
        }),
        _.sum
    )(frequencies);
};

export const getVND = (score: Score, isHome: boolean) => {
    if (score[0] > score[1]) {
        return isHome ? [1, 0, 0] : [0, 0, 1];
    }
    if (score[1] > score[0]) {
        return isHome ? [0, 0, 1] : [1, 0, 0];
    }
    return [0, 1, 0];
};

export const getExpectedResult = (
    minute: number,
    score: Score,
    isHome: boolean
) => {
    const indexMinute: number = findIndexMinute(minute);
    // find corresponding probabilities
    const frequencies: Array<number> = matrix[indexMinute];

    return _.flow(
        mapWithIndex((frequency, index) => {
            const probability = frequency / numMatches;
            // retrieve potential goals for each side for this probability
            const goalsUntilEnd = scores[index];
            // add the potential goals to the current score
            const potentialScore = _.flow(_.zip(goalsUntilEnd), _.map(_.sum))(
                score
            );
            // compute the points difference
            const vnd = getVND(potentialScore, isHome);
            return _.map(res => res * probability, vnd);
        }),
        _.zipAll,
        _.map(_.sum)
    )(frequencies);
};
