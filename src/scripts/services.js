// @flow
import gql from 'graphql-tag';
import _ from 'lodash/fp';
import Helper from '@seracio/apollo-client-helper';

const helper = new Helper('https://data.serac.io/ligue1');

export const getMatchesBySeason = (season: string): Promise<Array<Object>> =>
    helper
        .getQuery(
            gql`
                query($season: String!) {
                    matches(season: $season) {
                        home {
                            id
                        }
                        away {
                            id
                        }
                        goals {
                            time {
                                minute
                            }
                            team {
                                id
                            }
                        }
                    }
                }
            `,
            { season }
        )
        .then(_.get('matches'));
