// @flow
import _ from 'lodash/fp';
import { getPointsByMatchAndTeam } from './match';

export const updateRankingByMatch = (ranking, match) => {
    const homeId = match.home.id;
    const awayId = match.away.id;
    const home = ranking[homeId];
    const away = ranking[awayId];
    return {
        ...ranking,
        [homeId]: {
            ...home,
            pts: home.pts + getPointsByMatchAndTeam(match, homeId),
            bp: home.bp + match.homeScore,
            bc: home.bc + match.awayScore
        },
        [awayId]: {
            ...away,
            pts: away.pts + getPointsByMatchAndTeam(match, awayId),
            bp: away.bp + match.awayScore,
            bc: away.bc + match.homeScore
        }
    };
};

export const computeRanks = ranking => {
    const ranks = _.flow(
        _.values,
        _.orderBy(
            [_.get('pts'), team => team.bp - team.bc, _.get('bp')],
            ['desc', 'desc', 'desc']
        ),
        _.map(_.get('id'))
    )(ranking);
    return _.mapValues(
        team => ({
            ...team,
            rank: _.findIndex(_.isEqual(team.id), ranks) + 1
        }),
        ranking
    );
};

export const getRankings = (teams, matches) => {
    // ranking for theoretical day 0:
    // a dictionary of teams
    // for the real seed, we'll wrap it in an array
    // we'll also have to remove this specific week at the end of the
    // calculations
    const seed = _.flow(
        _.map(team => ({
            id: team.id,
            pts: 0,
            bp: 0,
            bc: 0,
            rank: 0
        })),
        _.keyBy(_.get('id'))
    )(teams);
    return _.flow(
        _.groupBy(_.get('week')),
        _.values,
        _.orderBy(_.get('[0].week'), 'asc'),
        // for each week
        _.reduce(
            (acc, matchesOfTheWeek) => {
                const lastRanking = _.last(acc);
                const newRanking = _.flow(
                    // update ranking for both teams of current match
                    _.reduce((ranking, match) => {
                        return updateRankingByMatch(ranking, match);
                    }, lastRanking),
                    // compute ranks at the end of the week
                    computeRanks
                )(matchesOfTheWeek);
                return [...acc, newRanking];
            },
            [seed]
        ),
        // remove artificial week 0
        _.drop(1)
    )(matches);
};
