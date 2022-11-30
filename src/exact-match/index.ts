import BruteForceStringMatch from './BruteForce';
import HorspoolStringMatch from './Horspool';
import ShiftTable from './ShiftTable';

console.log('Exact string match');

console.log('Brute Force');
console.log(BruteForceStringMatch('Hello World!', 'World'));
console.log(BruteForceStringMatch('Hello World!', 'world!'));
console.log(BruteForceStringMatch('Run and track unit test results', 'unit'));

console.log('Horspool\'s algorithm');
console.log(HorspoolStringMatch('Hello World!', 'World'));
console.log(HorspoolStringMatch('Hello World!', 'world!'));
console.log(HorspoolStringMatch('Run and track unit test results', 'unit'));
