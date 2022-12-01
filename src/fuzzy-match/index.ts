import HammingDistance from './Hamming';
import LevenshteinDistance from './Levenshtein';

console.log('Fuzzy string match');

console.log('Hamming distance');
console.log(HammingDistance('elhlo rwold', 'hello world'));

console.log('Levenshtein distance');
console.log(LevenshteinDistance('helloworld', 'elhlorwold'));
