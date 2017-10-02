// @flow
import 'isomorphic-fetch';
import { range } from 'd3-array';
import { writeFileSync } from 'filendir';
import _ from 'lodash/fp';
import * as services from './services';

function generateScores(maxGoals: number): Array<Array<number>> {
    const goalsRange = range(0, maxGoals + 1);
    const scores = [];
    for (const home of goalsRange) {
        for (const away of goalsRange) {
            scores.push([home, away]);
        }
    }
    return scores;
}

function generateMatrix(
    minutes: Array<number>,
    scores: Array<Array<number>>
): Array<Array<number>> {
    return minutes.map(minute => scores.map(score => 0));
}

function getGoalsAfter(match, time) {
    return _.flow(
        _.get('goals'),
        _.filter(_.flow(_.get('time.minute'), _.gte(_, time))),
        _.partition(_.flow(_.get('team.id'), _.isEqual(match.home.id))),
        _.map(_.size)
    )(match);
}

(async function main() {
    /**
     * MINUTES
     */
    const minutes = range(0, 95, 5);

    /**
     * SCORES
     */
    const scores = generateScores(10);

    /**
     * MATRIX
     */
    const matrix = generateMatrix(minutes, scores);

    console.log(matrix);

    // for all seasons
    let numMatches = 0;
    for (const year of range(2008, 2017)) {
        const season = `${year}/${year + 1}`;
        console.log(season);
        const matches = await services.getMatchesBySeason(season);
        numMatches += matches.length;
        // for all matches
        for (const match of matches) {
            for (const minute of minutes) {
                const score = getGoalsAfter(match, minute);
                const indexMinute = _.findIndex(_.isEqual(minute), minutes);
                const indexScore = _.findIndex(_.isEqual(score), scores);
                if (indexScore !== -1) {
                    matrix[indexMinute][indexScore] += 1;
                }
            }
        }
    }

    writeFileSync(
        'src/table.json',
        JSON.stringify(
            {
                minutes,
                scores,
                matrix,
                numMatches
            },
            null,
            2
        )
    );
})();
