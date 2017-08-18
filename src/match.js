// @flow
import _ from 'lodash/fp';

export const getPointsByMatch = _.curry((team, match) => {
    if (match.homeScore === match.awayScore) return 1;
    const isHome = match.home.id === team.id;
    return (isHome && match.homeScore > match.awayScore) ||
    (!isHome && match.awayScore > match.homeScore)
        ? 3
        : 0;
});
