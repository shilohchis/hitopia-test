# HITOPIA TEST

Setup JS

- You can use any REPL website that provide JS language
- Or you can set up node on your PC/laptop recommend using NVM, follow this guide from NodeJS https://nodejs.org/en/download/package-manager

### Test 1 - Weighted Strings

How to run:

- Make sure you have node JS installed and ready to use
- Open your terminal and run `node weighted-strings-test-1.js`
- It'll show you the output on terminal
- If you need test other strings and queries, open the file `weighted-strings-test-1.js` and update line 35 with data you want to test

### Test 2 - Balance Bracket

How to run:

- Make sure you have node JS installed and ready to use
- Open your terminal and run `node balanced-bracket-test-2.js`
- It'll show you the output on terminal
- If you need test other strings and queries, open the file `balanced-bracket-test-2.js` and update line 25 with data you want to test

Complexity:

- Initializing `data` object is O(1), since it's constant
- Removing whitespace O(n), since it'll depend on number of iterations
- For loop is O(n), since it'll depend on number of iterations
- Inside loop - When checking if character is an opening bracket will be O(1) since it only check `data` object which is fixed values so - Array push or pop is O(1)
  So the most expensive computation will be on iteration which is O(n) so I can say overall time complexity: O(n)

### Test 3 - Highest Palindrome

How to run:

- Make sure you have node JS installed and ready to use
- Open your terminal and run `node highest-palindrome-test-3.js`
- It'll show you the output on terminal
- If you need test other strings and queries, open the file `highest-palindrome-test-3.js` and update line 35 with data you want to test
