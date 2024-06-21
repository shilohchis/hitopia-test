function highestPalindrome(s, k) {
  function makePalindrome(chars, left, right, changes, k) {
    if (left >= right) {
      return changes;
    }

    if (chars[left] !== chars[right]) {
      chars[left] = chars[right] = Math.max(chars[left], chars[right]);
      changes++;
    }

    return makePalindrome(chars, left + 1, right - 1, changes, k);
  }

  function maximizePalindrome(chars, left, right, k) {
    if (left >= right) {
      if (left === right && k > 0) {
        chars[left] = "9";
      }
      return;
    }

    if (chars[left] < "9") {
      if (chars[left] !== chars[right]) {
        if (k > 1) {
          chars[left] = chars[right] = "9";
          k -= 2;
        }
      } else if (k >= 2) {
        chars[left] = chars[right] = "9";
        k -= 2;
      }
    }

    maximizePalindrome(chars, left + 1, right - 1, k);
  }

  const chars = s.split("");
  const changes = makePalindrome(chars, 0, chars.length - 1, 0, k);

  if (changes > k) {
    return "-1";
  }

  k -= changes;
  maximizePalindrome(chars, 0, chars.length - 1, k);

  return chars.join("");
}

const str = "3943";
const k = 1;
console.log(highestPalindrome(str, k));
