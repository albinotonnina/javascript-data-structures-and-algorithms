import getEvenOccurrence from './getevenoccurrence'
import getPermutations from './getpermutations'
import translateRomanNumeral from './translateromannumerals'

console.log('getEvenOccurrence([1,2,3,4,4,5,5,6,6,6,7,7,7,7]) = 4 ?', getEvenOccurrence([1,2,3,4,4,5,5,6,6,6,7,7,7,7]));
console.log('getPermutations(\'abc\') = [ \'abc\', \'acb\', \'bac\', \'bca\', \'cab\', \'cba\' ]?', getPermutations('abc'));
console.log('translateRomanNumeral(\'VI\') = 6?', translateRomanNumeral('VI'));
