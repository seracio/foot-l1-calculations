# foot-l1-calculations
A set of calculation functions used in our projects for Ligue 1 data

## Usage

```bash
yarn add lodash @seracio/foot-l1-calculations
```

```javascript
import {getRankings} from '@seracio/foot-l1-calculations';

const rankings = getRankings(teams, matches);
```

## API

```javascript
type Ranking = {
    [id: string]: {
        rank: number,
        bp: number,
        bc: number,
        pts: number
    }
}

type Score = [number, number];
```

* `getRankings`: returns an array of rankings for each weeks found in given matches

```javascript
getRankings(teams: Array<Team>, matches: Array<Matches>): Array<Ranking>
```

* `getPointsByMatchAndTeam`: returns the num of points won for the given team Id in the given match

```javascript
getPointsByMatchAndTeam(match: Match, teamId: string): number
```

* `getExpectedPointValue`: returns the expected value of a given goal 

```javascript
getExpectedPointValue(minute: number,scoreBefore: Score, isHome: boolean): number
```

* `getExpectedResult`: returns the probability of v, n, d for a given team

```javascript
getExpectedResult(minute: number, score: Score, isHome: boolean): [v: number, n: number, d: number];
```

## Development

* Tests

```bash
yarn test 
yarn test -- --watch
```

* release a new version

```bash
yarn build
git commit -am 'new version'
npm version patch | major | minor
git push 
git push --tags
npm publish --access=public
```

## License

MIT License

Copyright (c) 2017 serac.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
