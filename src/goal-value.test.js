// @flow
import _ from 'lodash/fp';
import { getExpectedPointValue, getExpectedResult } from './goal-value';

// $FlowFixMe
describe('getExpectedPointValue', () => {
    // $FlowFixMe
    it('should be defined', () => {
        // $FlowFixMe
        expect(getExpectedPointValue).toBeDefined();
    });
    it('should be a function', () => {
        // $FlowFixMe
        expect(getExpectedPointValue).toBeInstanceOf(Function);
    });
    it('should return a valid number with valid params', () => {
        // $FlowFixMe
        expect(typeof getExpectedPointValue(0, [0, 0], true)).toBe('number');
    });
});

describe('getExpectedResult', () => {
    // $FlowFixMe
    it('should be defined', () => {
        // $FlowFixMe
        expect(getExpectedResult).toBeDefined();
    });
});
