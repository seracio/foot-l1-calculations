// @flow
import _ from 'lodash/fp';

export const getPointsByMatchAndTeam = (match, teamId) => {
    if (match.homeScore === match.awayScore) return 1;
    const isHome = match.home.id === teamId;
    return (isHome && match.homeScore > match.awayScore) ||
    (!isHome && match.awayScore > match.homeScore)
        ? 3
        : 0;
};
