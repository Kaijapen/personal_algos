/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let merged = "";
    
    for (let i = 0; i < word1.length; i++) {
        if (i >= word2.length) {
            merged += word1[i]
            continue
        }

        merged += word1[i] + word2[i]

        if (i == word1.length - 1 && word2.length > i) {
            for (let j = i + 1; j < word2.length; j++){
                merged += word2[j]
            }
        }
    }
    return merged
};

console.log(mergeAlternately("abcd", "pq"))


