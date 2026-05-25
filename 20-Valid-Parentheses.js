/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    
    const stack = [];
    const map = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (char !== map[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;

};