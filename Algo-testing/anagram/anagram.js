function isAnagram(str1, str2) {
    const charMap1 = buildCharMap(str1);
    const charMap2 = buildCharMap(str2);

    if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
        return false;
    }

    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }
}

function buildCharMap(str) {
    const charMap = {};
    for (let char of str.toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

module.exports = isAnagram;