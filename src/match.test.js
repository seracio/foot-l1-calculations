// @flow
import _ from 'lodash/fp';
import { getPointsByMatchAndTeam } from './match';

describe('getPointsByMatch', () => {
    it('should be defined', () => {
        expect(getPointsByMatchAndTeam).toBeDefined();
    });
});
