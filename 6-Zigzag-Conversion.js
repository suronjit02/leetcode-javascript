/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows = Array(numRows).fill("");

  let currentRow = 0;
  let direction = 1;

  for (const char of s) {
    rows[currentRow] += char;

    if (currentRow === 0) {
      direction = 1;
    } else if (currentRow === numRows - 1) {
      direction = -1;
    }

    currentRow += direction;
  }

  return rows.join("");
};

// console.log(convert("PAYPALISHIRING", 3));
