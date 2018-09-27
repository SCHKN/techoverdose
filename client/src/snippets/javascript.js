export default {
  data: [
    {
      id: "all",
      type: "snippet",
      attributes: {
        fileName: "all.md",
        text:
          "Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.\n\nUse `Array.every()` to test if all elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default.",
        codeBlocks: [
          "const all = (arr, fn = Boolean) => arr.every(fn);",
          "all([4, 2, 3], x => x > 1); // true\nall([1, 2, 3]); // true"
        ],
        tags: ["array", "function", "beginner"]
      },
      meta: {
        archived: false,
        hash: "8a036b5ffee127e5456d59e36f3c9abb24f1692f6a398b61c20ebacaae8380e4"
      }
    },
    {
      id: "allEqual",
      type: "snippet",
      attributes: {
        fileName: "allEqual.md",
        text:
          "Check if all elements in an array are equal.\n\nUse `Array.every()` to check if all the elements of the array are the same as the first one.",
        codeBlocks: [
          "const allEqual = arr => arr.every(val => val === arr[0]);",
          "allEqual([1, 2, 3, 4, 5, 6]); // false\nallEqual([1, 1, 1, 1]); // true"
        ],
        tags: ["array", "function", "beginner"]
      },
      meta: {
        archived: false,
        hash: "2801b6d7350ed3dd502d1efbaf32f0f3e8671002843ac3930e7e38a7e085213d"
      }
    },
    {
      id: "any",
      type: "snippet",
      attributes: {
        fileName: "any.md",
        text:
          "Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.\n\nUse `Array.some()` to test if any elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default.",
        codeBlocks: [
          "const any = (arr, fn = Boolean) => arr.some(fn);",
          "any([0, 1, 2, 0], x => x >= 2); // true\nany([0, 0, 1, 0]); // true"
        ],
        tags: ["array", "function", "beginner"]
      },
      meta: {
        archived: false,
        hash: "15bee4484e96a2d052368ef9dd743819b30d8d883b52575bee65fdc194dc9e93"
      }
    },
    {
      id: "approximatelyEqual",
      type: "snippet",
      attributes: {
        fileName: "approximatelyEqual.md",
        text:
          "Checks if two numbers are approximately equal to each other.\n\nUse `Math.abs()` to compare the absolute difference of the two values to `epsilon`.\nOmit the third parameter, `epsilon`, to use a default value of `0.001`.",
        codeBlocks: [
          "const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;",
          "approximatelyEqual(Math.PI / 2.0, 1.5708); // true"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "4fa8b87ac30ec67afe40c80101a702986dd1e5cab3cd8b9653f1b7c8cbac7540"
      }
    },
    {
      id: "arrayToCSV",
      type: "snippet",
      attributes: {
        fileName: "arrayToCSV.md",
        text:
          "Converts a 2D array to a comma-separated values (CSV) string.\n\nUse `Array.map()` and `Array.join(delimiter)` to combine individual 1D arrays (rows) into strings.\nUse `Array.join('\\n')` to combine all rows into a CSV string, separating each row with a newline.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.",
        codeBlocks: [
          "const arrayToCSV = (arr, delimiter = ',') =>\n  arr.map(v => v.map(x => `\"${x}\"`).join(delimiter)).join('\\n');",
          "arrayToCSV([['a', 'b'], ['c', 'd']]); // '\"a\",\"b\"\\n\"c\",\"d\"'\narrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '\"a\";\"b\"\\n\"c\";\"d\"'"
        ],
        tags: ["array", "string", "utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "47f27df615f87cf59e53ae3a618249f8413dd9d9c8939296a8b8f3785697de3d"
      }
    },
    {
      id: "arrayToHtmlList",
      type: "snippet",
      attributes: {
        fileName: "arrayToHtmlList.md",
        text:
          "Converts the given array elements into `<li>` tags and appends them to the list of the given id.\n\nUse `Array.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags.",
        codeBlocks: [
          "const arrayToHtmlList = (arr, listID) =>\n  (el => (\n    (el = document.querySelector('#' + listID)),\n    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))\n  ))();",
          "arrayToHtmlList(['item 1', 'item 2'], 'myListID');"
        ],
        tags: ["browser", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "71d7b2d9a38cff92cda899e1be04c7995f097781b48ef89e3f766e27d9272fa7"
      }
    },
    {
      id: "ary",
      type: "snippet",
      attributes: {
        fileName: "ary.md",
        text:
          "Creates a function that accepts up to `n` arguments, ignoring any additional arguments.\n\nCall the provided function, `fn`, with up to `n` arguments, using `Array.slice(0,n)` and the spread operator (`...`).",
        codeBlocks: [
          "const ary = (fn, n) => (...args) => fn(...args.slice(0, n));",
          "const firstTwoMax = ary(Math.max, 2);\n[[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)); // [6, 8, 10]"
        ],
        tags: ["adapter", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "41109ef32647c55ece0a9dba06c840250979124e790c944d732683d27ac26f1f"
      }
    },
    {
      id: "atob",
      type: "snippet",
      attributes: {
        fileName: "atob.md",
        text:
          "Decodes a string of data which has been encoded using base-64 encoding.\n\nCreate a `Buffer` for the given string with base-64 encoding and use `Buffer.toString('binary')` to return the decoded string.",
        codeBlocks: [
          "const atob = str => new Buffer(str, 'base64').toString('binary');",
          "atob('Zm9vYmFy'); // 'foobar'"
        ],
        tags: ["node", "string", "utility", "beginner"]
      },
      meta: {
        archived: false,
        hash: "b0f4a972f1e217c5f558359fa17693140a8b97a04a48ec1261691f10fb0c2a3e"
      }
    },
    {
      id: "attempt",
      type: "snippet",
      attributes: {
        fileName: "attempt.md",
        text:
          "Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.\n\nUse a `try... catch` block to return either the result of the function or an appropriate error.",
        codeBlocks: [
          "const attempt = (fn, ...args) => {\n  try {\n    return fn(...args);\n  } catch (e) {\n    return e instanceof Error ? e : new Error(e);\n  }\n};",
          "var elements = attempt(function(selector) {\n  return document.querySelectorAll(selector);\n}, '>_>');\nif (elements instanceof Error) elements = []; // elements = []"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "ac8ac4dc2ac7d0e2de1cf9f6afff46350aa530a51275658e8b34072740d10b0f"
      }
    },
    {
      id: "average",
      type: "snippet",
      attributes: {
        fileName: "average.md",
        text:
          "Returns the average of two or more numbers.\n\nUse `Array.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.",
        codeBlocks: [
          "const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;",
          "average(...[1, 2, 3]); // 2\naverage(1, 2, 3); // 2"
        ],
        tags: ["math", "array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "992835ed744ef767f4cdf46f9881cca57a73695e2a8637a383490bf44369d31b"
      }
    },
    {
      id: "averageBy",
      type: "snippet",
      attributes: {
        fileName: "averageBy.md",
        text:
          "Returns the average of an array, after mapping each element to a value using the provided function.\n\nUse `Array.map()` to map each element to the value returned by `fn`, `Array.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.",
        codeBlocks: [
          "const averageBy = (arr, fn) =>\n  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /\n  arr.length;",
          "averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5\naverageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5"
        ],
        tags: ["math", "array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "0ad10d648c24e0c27cfbb5cf65f18ad3fc7e072e6459c0bfc2d9936a0e497a03"
      }
    },
    {
      id: "bifurcate",
      type: "snippet",
      attributes: {
        fileName: "bifurcate.md",
        text:
          "Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.\n\nUse `Array.reduce()` and `Array.push()` to add elements to groups, based on `filter`.",
        codeBlocks: [
          "const bifurcate = (arr, filter) =>\n  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);",
          "bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "dd427f7304a3c161c95f9b1ae11f0adbe0d687076a5ed16ce2404ed29c136067"
      }
    },
    {
      id: "bifurcateBy",
      type: "snippet",
      attributes: {
        fileName: "bifurcateBy.md",
        text:
          "Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.\n\nUse `Array.reduce()` and `Array.push()` to add elements to groups, based on the value returned by `fn` for each element.",
        codeBlocks: [
          "const bifurcateBy = (arr, fn) =>\n  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);",
          "bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "65534a8995d70358bf0faeb62cfa1e241147c8142e0bb62dd9015219cf367f9f"
      }
    },
    {
      id: "bind",
      type: "snippet",
      attributes: {
        fileName: "bind.md",
        text:
          "Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.\n\nReturn a `function` that uses `Function.apply()` to apply the given `context` to `fn`.\nUse `Array.concat()` to prepend any additional supplied parameters to the arguments.",
        codeBlocks: [
          "const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);",
          "function greet(greeting, punctuation) {\n  return greeting + ' ' + this.user + punctuation;\n}\nconst freddy = { user: 'fred' };\nconst freddyBound = bind(greet, freddy);\nconsole.log(freddyBound('hi', '!')); // 'hi fred!'"
        ],
        tags: ["function", "object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "4909c73d0435a32df36abef06a58c21362ed3991aedc95421516a5d0ea83264a"
      }
    },
    {
      id: "bindAll",
      type: "snippet",
      attributes: {
        fileName: "bindAll.md",
        text:
          "Binds methods of an object to the object itself, overwriting the existing method.\n\nUse `Array.forEach()` to return a `function` that uses `Function.apply()` to apply the given context (`obj`) to `fn` for each function specified.",
        codeBlocks: [
          "const bindAll = (obj, ...fns) =>\n  fns.forEach(\n    fn => (\n      (f = obj[fn]),\n      (obj[fn] = function() {\n        return f.apply(obj);\n      })\n    )\n  );",
          "var view = {\n  label: 'docs',\n  click: function() {\n    console.log('clicked ' + this.label);\n  }\n};\nbindAll(view, 'click');\njQuery(element).on('click', view.click); // Logs 'clicked docs' when clicked."
        ],
        tags: ["object", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "791096ce761f35096c86403c6bc290381982d7a9bfc9bda4b70270aaf6ec4df2"
      }
    },
    {
      id: "bindKey",
      type: "snippet",
      attributes: {
        fileName: "bindKey.md",
        text:
          "Creates a function that invokes the method at a given key of an object, optionally adding any additional supplied parameters to the beginning of the arguments.\n\nReturn a `function` that uses `Function.apply()` to bind `context[fn]` to `context`.\nUse the spread operator (`...`) to prepend any additional supplied parameters to the arguments.",
        codeBlocks: [
          "const bindKey = (context, fn, ...boundArgs) => (...args) =>\n  context[fn].apply(context, [...boundArgs, ...args]);",
          "const freddy = {\n  user: 'fred',\n  greet: function(greeting, punctuation) {\n    return greeting + ' ' + this.user + punctuation;\n  }\n};\nconst freddyBound = bindKey(freddy, 'greet');\nconsole.log(freddyBound('hi', '!')); // 'hi fred!'"
        ],
        tags: ["function", "object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "cfbb9759a71b09d9351a02f39f828578290e389aeb5390ce760957ee43be0297"
      }
    },
    {
      id: "binomialCoefficient",
      type: "snippet",
      attributes: {
        fileName: "binomialCoefficient.md",
        text:
          "Evaluates the binomial coefficient of two integers `n` and `k`.\n\nUse `Number.isNaN()` to check if any of the two values is `NaN`.\nCheck if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.\nCheck if `n - k` is less than `k` and switch their values accordingly.\nLoop from `2` through `k` and calculate the binomial coefficient.\nUse `Math.round()` to account for rounding errors in the calculation.",
        codeBlocks: [
          "const binomialCoefficient = (n, k) => {\n  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;\n  if (k < 0 || k > n) return 0;\n  if (k === 0 || k === n) return 1;\n  if (k === 1 || k === n - 1) return n;\n  if (n - k < k) k = n - k;\n  let res = n;\n  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;\n  return Math.round(res);\n};",
          "binomialCoefficient(8, 2); // 28"
        ],
        tags: ["math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "0fca1b134c1a13fef45cde62e8f04c70361b477be88222aa7d81ac5d153b3a13"
      }
    },
    {
      id: "bottomVisible",
      type: "snippet",
      attributes: {
        fileName: "bottomVisible.md",
        text:
          "Returns `true` if the bottom of the page is visible, `false` otherwise.\n\nUse `scrollY`, `scrollHeight` and `clientHeight` to determine if the bottom of the page is visible.",
        codeBlocks: [
          "const bottomVisible = () =>\n  document.documentElement.clientHeight + window.scrollY >=\n  (document.documentElement.scrollHeight || document.documentElement.clientHeight);",
          "bottomVisible(); // true"
        ],
        tags: ["browser", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "a40dc0094d62d44e7d086513bca6afb74734dd1e5e56a0ce66e91517b459f50c"
      }
    },
    {
      id: "btoa",
      type: "snippet",
      attributes: {
        fileName: "btoa.md",
        text:
          "Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.\n\nCreate a `Buffer` for the given string with binary encoding and use `Buffer.toString('base64')` to return the encoded string.",
        codeBlocks: [
          "const btoa = str => new Buffer(str, 'binary').toString('base64');",
          "btoa('foobar'); // 'Zm9vYmFy'"
        ],
        tags: ["node", "string", "utility", "beginner"]
      },
      meta: {
        archived: false,
        hash: "ddbab0e7190004d5240469256d66629aa2fcf3c22348818edc01a8beb64831a6"
      }
    },
    {
      id: "byteSize",
      type: "snippet",
      attributes: {
        fileName: "byteSize.md",
        text:
          "Returns the length of a string in bytes.\n\nConvert a given string to a [`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and find its `size`.",
        codeBlocks: [
          "const byteSize = str => new Blob([str]).size;",
          "byteSize('😀'); // 4\nbyteSize('Hello World'); // 11"
        ],
        tags: ["string", "beginner"]
      },
      meta: {
        archived: false,
        hash: "5a7936489c66b541e2e1caf4254540a75557e049d1a10c7da0b38bd3b247f00b"
      }
    },
    {
      id: "call",
      type: "snippet",
      attributes: {
        fileName: "call.md",
        text:
          "Given a key and a set of arguments, call them when given a context. Primarily useful in composition.\r\n\r\nUse a closure to call a stored key with stored arguments.",
        codeBlocks: [
          "const call = (key, ...args) => context => context[key](...args);",
          "Promise.resolve([1, 2, 3])\n  .then(call('map', x => 2 * x))\n  .then(console.log); //[ 2, 4, 6 ]\nconst map = call.bind(null, 'map');\nPromise.resolve([1, 2, 3])\n  .then(map(x => 2 * x))\n  .then(console.log); //[ 2, 4, 6 ]"
        ],
        tags: ["adapter", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "732d63737f940a76c33a42ae3a1dcbf72b93149f57e14e34e301dad7ce245236"
      }
    },
    {
      id: "capitalize",
      type: "snippet",
      attributes: {
        fileName: "capitalize.md",
        text:
          "Capitalizes the first letter of a string.\n\nUse array destructuring and `String.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.join('')` to make it a string again.\nOmit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.",
        codeBlocks: [
          "const capitalize = ([first, ...rest], lowerRest = false) =>\n  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));",
          "capitalize('fooBar'); // 'FooBar'\ncapitalize('fooBar', true); // 'Foobar'"
        ],
        tags: ["string", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "6f2f03a62a2b6f4a1a79d9864543d87297a1e2550ca5988d23b110fbc5c6a870"
      }
    },
    {
      id: "capitalizeEveryWord",
      type: "snippet",
      attributes: {
        fileName: "capitalizeEveryWord.md",
        text:
          "Capitalizes the first letter of every word in a string.\n\nUse `String.replace()` to match the first character of each word and `String.toUpperCase()` to capitalize it.",
        codeBlocks: [
          "const capitalizeEveryWord = str => str.replace(/\\b[a-z]/g, char => char.toUpperCase());",
          "capitalizeEveryWord('hello world!'); // 'Hello World!'"
        ],
        tags: ["string", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "a5d1dd83d8cceafaa3d628655b8595942b549835f90e587202ef972c31e2ca3a"
      }
    },
    {
      id: "castArray",
      type: "snippet",
      attributes: {
        fileName: "castArray.md",
        text:
          "Casts the provided value as an array if it's not one.\n\nUse `Array.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.",
        codeBlocks: [
          "const castArray = val => (Array.isArray(val) ? val : [val]);",
          "castArray('foo'); // ['foo']\ncastArray([1]); // [1]"
        ],
        tags: ["utility", "array", "type", "beginner"]
      },
      meta: {
        archived: false,
        hash: "b746ad19e2ea713891fb4c625a4c0cbaaad08e2189ecfbb1763ecaf8f2802ec7"
      }
    },
    {
      id: "chainAsync",
      type: "snippet",
      attributes: {
        fileName: "chainAsync.md",
        text:
          "Chains asynchronous functions.\n\nLoop through an array of functions containing asynchronous events, calling `next` when each asynchronous event has completed.",
        codeBlocks: [
          "const chainAsync = fns => {\n  let curr = 0;\n  const next = () => fns[curr++](next);\n  next();\n};",
          "chainAsync([\n  next => {\n    console.log('0 seconds');\n    setTimeout(next, 1000);\n  },\n  next => {\n    console.log('1 second');\n  }\n]);"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "8c245a7fc94edffaf5cae4c28f37ed2e989772a9663a5f5bce98147f708a712e"
      }
    },
    {
      id: "chunk",
      type: "snippet",
      attributes: {
        fileName: "chunk.md",
        text:
          "Chunks an array into smaller arrays of a specified size.\n\nUse `Array.from()` to create a new array, that fits the number of chunks that will be produced.\nUse `Array.slice()` to map each element of the new array to a chunk the length of `size`.\nIf the original array can't be split evenly, the final chunk will contain the remaining elements.",
        codeBlocks: [
          "const chunk = (arr, size) =>\n  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>\n    arr.slice(i * size, i * size + size)\n  );",
          "chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "ae5220ae568a7482ee8f82b1af8816f5be99211ff99d7f290a0408d41ca58014"
      }
    },
    {
      id: "clampNumber",
      type: "snippet",
      attributes: {
        fileName: "clampNumber.md",
        text:
          "Clamps `num` within the inclusive range specified by the boundary values `a` and `b`.\n\nIf `num` falls within the range, return `num`.\nOtherwise, return the nearest number in the range.",
        codeBlocks: [
          "const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));",
          "clampNumber(2, 3, 5); // 3\nclampNumber(1, -1, -5); // -1"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "8e63c143d08d73cae1038ca8c6622ddf728b661528b246b55d6eb3b1ae41fe76"
      }
    },
    {
      id: "cloneRegExp",
      type: "snippet",
      attributes: {
        fileName: "cloneRegExp.md",
        text:
          "Clones a regular expression.\n\nUse `new RegExp()`, `RegExp.source` and `RegExp.flags` to clone the given regular expression.",
        codeBlocks: [
          "const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);",
          "const regExp = /lorem ipsum/gi;\nconst regExp2 = cloneRegExp(regExp); // /lorem ipsum/gi"
        ],
        tags: ["utility", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "57532d74214897181db46b09dc0be86d26e9877785ec85c3acd1113d5371fa95"
      }
    },
    {
      id: "coalesce",
      type: "snippet",
      attributes: {
        fileName: "coalesce.md",
        text:
          "Returns the first non-null/undefined argument.\n\nUse `Array.find()` to return the first non `null`/`undefined` argument.",
        codeBlocks: [
          "const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));",
          "coalesce(null, undefined, '', NaN, 'Waldo'); // \"\""
        ],
        tags: ["utility", "beginner"]
      },
      meta: {
        archived: false,
        hash: "9b2c0c5b8dda71c75580f5f7214e93fffddf6ac872f39206fe26793ab60403ce"
      }
    },
    {
      id: "coalesceFactory",
      type: "snippet",
      attributes: {
        fileName: "coalesceFactory.md",
        text:
          "Returns a customized coalesce function that returns the first argument that returns `true` from the provided argument validation function.\n\nUse `Array.find()` to return the first argument that returns `true` from the provided argument validation function.",
        codeBlocks: [
          "const coalesceFactory = valid => (...args) => args.find(valid);",
          "const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));\ncustomCoalesce(undefined, null, NaN, '', 'Waldo'); // \"Waldo\""
        ],
        tags: ["utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "3f2182bea1d9f17e2f315f6e8d72b3c31a42ff427e2a90d38fe50d6b86483f2e"
      }
    },
    {
      id: "collectInto",
      type: "snippet",
      attributes: {
        fileName: "collectInto.md",
        text:
          "Changes a function that accepts an array into a variadic function.\r\n\r\nGiven a function, return a closure that collects all inputs into an array-accepting function.",
        codeBlocks: [
          "const collectInto = fn => (...args) => fn(args);",
          "const Pall = collectInto(Promise.all.bind(Promise));\nlet p1 = Promise.resolve(1);\nlet p2 = Promise.resolve(2);\nlet p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));\nPall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)"
        ],
        tags: ["adapter", "function", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "6b57cac68ad177d8fbb30e9c586f8f9c088acf755c6c956b5387441ea3850fce"
      }
    },
    {
      id: "colorize",
      type: "snippet",
      attributes: {
        fileName: "colorize.md",
        text:
          "Add special characters to text to print in color in the console (combined with `console.log()`).\n\nUse template literals and special characters to add the appropriate color code to the string output.\nFor background colors, add a special character that resets the background color at the end of the string.",
        codeBlocks: [
          "const colorize = (...args) => ({\n  black: `\\x1b[30m${args.join(' ')}`,\n  red: `\\x1b[31m${args.join(' ')}`,\n  green: `\\x1b[32m${args.join(' ')}`,\n  yellow: `\\x1b[33m${args.join(' ')}`,\n  blue: `\\x1b[34m${args.join(' ')}`,\n  magenta: `\\x1b[35m${args.join(' ')}`,\n  cyan: `\\x1b[36m${args.join(' ')}`,\n  white: `\\x1b[37m${args.join(' ')}`,\n  bgBlack: `\\x1b[40m${args.join(' ')}\\x1b[0m`,\n  bgRed: `\\x1b[41m${args.join(' ')}\\x1b[0m`,\n  bgGreen: `\\x1b[42m${args.join(' ')}\\x1b[0m`,\n  bgYellow: `\\x1b[43m${args.join(' ')}\\x1b[0m`,\n  bgBlue: `\\x1b[44m${args.join(' ')}\\x1b[0m`,\n  bgMagenta: `\\x1b[45m${args.join(' ')}\\x1b[0m`,\n  bgCyan: `\\x1b[46m${args.join(' ')}\\x1b[0m`,\n  bgWhite: `\\x1b[47m${args.join(' ')}\\x1b[0m`\n});",
          "console.log(colorize('foo').red); // 'foo' (red letters)\nconsole.log(colorize('foo', 'bar').bgBlue); // 'foo bar' (blue background)\nconsole.log(colorize(colorize('foo').yellow, colorize('foo').green).bgWhite); // 'foo bar' (first word in yellow letters, second word in green letters, white background for both)"
        ],
        tags: ["node", "utility", "string", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "30fc60a8ab8c8005f7d31b82f4386ba17caa9fed690916581b2c18fa0a125215"
      }
    },
    {
      id: "compact",
      type: "snippet",
      attributes: {
        fileName: "compact.md",
        text:
          'Removes falsey values from an array.\n\nUse `Array.filter()` to filter out falsey values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).',
        codeBlocks: [
          "const compact = arr => arr.filter(Boolean);",
          "compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "2b349628df5c87359dfe7b113c4002212490693bb1dc1342f25775018764efd7"
      }
    },
    {
      id: "compose",
      type: "snippet",
      attributes: {
        fileName: "compose.md",
        text:
          "Performs right-to-left function composition.\n\nUse `Array.reduce()` to perform right-to-left function composition.\nThe last (rightmost) function can accept one or more arguments; the remaining functions must be unary.",
        codeBlocks: [
          "const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));",
          "const add5 = x => x + 5;\nconst multiply = (x, y) => x * y;\nconst multiplyAndAdd5 = compose(\n  add5,\n  multiply\n);\nmultiplyAndAdd5(5, 2); // 15"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "99383d2b505d6afcd239d6369ab28b319b0ea0b1bcf2cc9176ac5762516e4413"
      }
    },
    {
      id: "composeRight",
      type: "snippet",
      attributes: {
        fileName: "composeRight.md",
        text:
          "Performs left-to-right function composition.\n\nUse `Array.reduce()` to perform left-to-right function composition.\nThe first (leftmost) function can accept one or more arguments; the remaining functions must be unary.",
        codeBlocks: [
          "const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));",
          "const add = (x, y) => x + y;\nconst square = x => x * x;\nconst addAndSquare = composeRight(add, square);\naddAndSquare(1, 2); // 9"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "dd019505c88315f8744dd12bc7a66f5bd2aac07e2bbb3f6b3be100a1c1b96484"
      }
    },
    {
      id: "converge",
      type: "snippet",
      attributes: {
        fileName: "converge.md",
        text:
          "Accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.\n\nUse `Array.map()` and `Function.apply()` to apply each function to the given arguments.\nUse the spread operator (`...`) to call `coverger` with the results of all other functions.",
        codeBlocks: [
          "const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));",
          "const average = converge((a, b) => a / b, [\n  arr => arr.reduce((a, v) => a + v, 0),\n  arr => arr.length\n]);\naverage([1, 2, 3, 4, 5, 6, 7]); // 4"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "12ac9307e4f8d368f6c1fa85caa9a16365fbbbd09ede026992155067f18b20f9"
      }
    },
    {
      id: "copyToClipboard",
      type: "snippet",
      attributes: {
        fileName: "copyToClipboard.md",
        text:
          "⚠️ **NOTICE:** The same functionality can be easily implemented by using the new asynchronous Clipboard API, which is still experimental but should be used in the future instead of this snippet. Find out more about it [here](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard).\n\nCopy a string to the clipboard. Only works as a result of user action (i.e. inside a `click` event listener).\n\nCreate a new `<textarea>` element, fill it with the supplied data and add it to the HTML document.\nUse `Selection.getRangeAt()`to store the selected range (if any).\nUse `document.execCommand('copy')` to copy to the clipboard.\nRemove the `<textarea>` element from the HTML document.\nFinally, use `Selection().addRange()` to recover the original selected range (if any).",
        codeBlocks: [
          "const copyToClipboard = str => {\n  const el = document.createElement('textarea');\n  el.value = str;\n  el.setAttribute('readonly', '');\n  el.style.position = 'absolute';\n  el.style.left = '-9999px';\n  document.body.appendChild(el);\n  const selected =\n    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;\n  el.select();\n  document.execCommand('copy');\n  document.body.removeChild(el);\n  if (selected) {\n    document.getSelection().removeAllRanges();\n    document.getSelection().addRange(selected);\n  }\n};",
          "copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard."
        ],
        tags: ["browser", "string", "advanced"]
      },
      meta: {
        archived: false,
        hash: "9d6a47c41fe4f5e0c006e29daef0c3eb7d9df37fa98c3498f938a6d2e4daf197"
      }
    },
    {
      id: "countBy",
      type: "snippet",
      attributes: {
        fileName: "countBy.md",
        text:
          "Groups the elements of an array based on the given function and returns the count of elements in each group.\n\nUse `Array.map()` to map the values of an array to a function or property name.\nUse `Array.reduce()` to create an object, where the keys are produced from the mapped results.",
        codeBlocks: [
          "const countBy = (arr, fn) =>\n  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {\n    acc[val] = (acc[val] || 0) + 1;\n    return acc;\n  }, {});",
          "countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}\ncountBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}"
        ],
        tags: ["array", "object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "3d377baf4b065d0780e77bbded1bd2eac67ee72161bf3ff6fea061bb0e852453"
      }
    },
    {
      id: "counter",
      type: "snippet",
      attributes: {
        fileName: "counter.md",
        text:
          "Creates a counter with the specified range, step and duration for the specified selector.\n\nCheck if `step` has the proper sign and change it accordingly.\nUse `setInterval()` in combination with `Math.abs()` and `Math.floor()` to calculate the time between each new text draw.\nUse `document.querySelector().innerHTML` to update the value of the selected element.\nOmit the fourth parameter, `step`, to use a default step of `1`.\nOmit the fifth parameter, `duration`, to use a default duration of `2000`ms.",
        codeBlocks: [
          "const counter = (selector, start, end, step = 1, duration = 2000) => {\n  let current = start,\n    _step = (end - start) * step < 0 ? -step : step,\n    timer = setInterval(() => {\n      current += _step;\n      document.querySelector(selector).innerHTML = current;\n      if (current >= end) document.querySelector(selector).innerHTML = end;\n      if (current >= end) clearInterval(timer);\n    }, Math.abs(Math.floor(duration / (end - start))));\n  return timer;\n};",
          "counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id=\"my-id\""
        ],
        tags: ["browser", "advanced"]
      },
      meta: {
        archived: false,
        hash: "5bf0c865aba5b748d185b9415c3b66ed61c77a0c5c052d44cfb745661f9a5802"
      }
    },
    {
      id: "countOccurrences",
      type: "snippet",
      attributes: {
        fileName: "countOccurrences.md",
        text:
          "Counts the occurrences of a value in an array.\n\nUse `Array.reduce()` to increment a counter each time you encounter the specific value inside the array.",
        codeBlocks: [
          "const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);",
          "countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "8d268b66806bbfee8a6bf73bd4979d061fcdc77f23729acca7a3d30b454bd70c"
      }
    },
    {
      id: "createElement",
      type: "snippet",
      attributes: {
        fileName: "createElement.md",
        text:
          "Creates an element from a string (without appending it to the document). \nIf the given string contains multiple elements, only the first one will be returned.\n\nUse `document.createElement()` to create a new element.\nSet its `innerHTML` to the string supplied as the argument. \nUse `ParentNode.firstElementChild` to return the element version of the string.",
        codeBlocks: [
          "const createElement = str => {\n  const el = document.createElement('div');\n  el.innerHTML = str;\n  return el.firstElementChild;\n};",
          "const el = createElement(\n  `<div class=\"container\">\n    <p>Hello!</p>\n  </div>`\n);\nconsole.log(el.className); // 'container'"
        ],
        tags: ["browser", "utility", "beginner"]
      },
      meta: {
        archived: false,
        hash: "90ce0d4ef6e6fece19d008d21e0201864dafbe48a62dbc7226f31f4b9c834090"
      }
    },
    {
      id: "createEventHub",
      type: "snippet",
      attributes: {
        fileName: "createEventHub.md",
        text:
          "Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.\r\n\r\nUse `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.\r\nFor `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.forEach()` by passing in the data as an argument.\r\nFor `on`, create an array for the event if it does not yet exist, then use `Array.push()` to add the handler\r\nto the array.\r\nFor `off`, use `Array.findIndex()` to find the index of the handler in the event array and remove it using `Array.splice()`.",
        codeBlocks: [
          "const createEventHub = () => ({\n  hub: Object.create(null),\n  emit(event, data) {\n    (this.hub[event] || []).forEach(handler => handler(data));\n  },\n  on(event, handler) {\n    if (!this.hub[event]) this.hub[event] = [];\n    this.hub[event].push(handler);\n  },\n  off(event, handler) {\n    const i = (this.hub[event] || []).findIndex(h => h === handler);\n    if (i > -1) this.hub[event].splice(i, 1);\n  }\n});",
          "const handler = data => console.log(data);\nconst hub = createEventHub();\nlet increment = 0;\n\n// Subscribe: listen for different types of events\nhub.on('message', handler);\nhub.on('message', () => console.log('Message event fired'));\nhub.on('increment', () => increment++);\n\n// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument\nhub.emit('message', 'hello world'); // logs 'hello world' and 'Message event fired'\nhub.emit('message', { hello: 'world' }); // logs the object and 'Message event fired'\nhub.emit('increment'); // `increment` variable is now 1\n\n// Unsubscribe: stop a specific handler from listening to the 'message' event\nhub.off('message', handler);"
        ],
        tags: ["browser", "event", "advanced"]
      },
      meta: {
        archived: false,
        hash: "e952a30a27c1465ea9ac465d4b7de3f9dda6e58279c176bc7c0e98fb6d99f1fc"
      }
    },
    {
      id: "CSVToArray",
      type: "snippet",
      attributes: {
        fileName: "CSVToArray.md",
        text:
          "Converts a comma-separated values (CSV) string to a 2D array.\n\nUse `Array.slice()` and `Array.indexOf('\\n')` to remove the first row (title row) if `omitFirstRow` is `true`.\nUse `String.split('\\n')` to create a string for each row, then `String.split(delimiter)` to separate the values in each row.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.\nOmit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.",
        codeBlocks: [
          "const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>\n  data\n    .slice(omitFirstRow ? data.indexOf('\\n') + 1 : 0)\n    .split('\\n')\n    .map(v => v.split(delimiter));",
          "CSVToArray('a,b\\nc,d'); // [['a','b'],['c','d']];\nCSVToArray('a;b\\nc;d', ';'); // [['a','b'],['c','d']];\nCSVToArray('col1,col2\\na,b\\nc,d', ',', true); // [['a','b'],['c','d']];"
        ],
        tags: ["string", "array", "utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "323a85ce03cc446dcfc3dfd8a89b4501b217b0e846fa73b99a6c3e2ee51a1caf"
      }
    },
    {
      id: "CSVToJSON",
      type: "snippet",
      attributes: {
        fileName: "CSVToJSON.md",
        text:
          "Converts a comma-separated values (CSV) string to a 2D array of objects.\nThe first row of the string is used as the title row.\n\nUse `Array.slice()` and `Array.indexOf('\\n')` and `String.split(delimiter)` to separate the first row (title row) into values.\nUse `String.split('\\n')` to create a string for each row, then `Array.map()` and `String.split(delimiter)` to separate the values in each row.\nUse `Array.reduce()` to create an object for each row's values, with the keys parsed from the title row.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.",
        codeBlocks: [
          "const CSVToJSON = (data, delimiter = ',') => {\n  const titles = data.slice(0, data.indexOf('\\n')).split(delimiter);\n  return data\n    .slice(data.indexOf('\\n') + 1)\n    .split('\\n')\n    .map(v => {\n      const values = v.split(delimiter);\n      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});\n    });\n};",
          "CSVToJSON('col1,col2\\na,b\\nc,d'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];\nCSVToJSON('col1;col2\\na;b\\nc;d', ';'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];"
        ],
        tags: ["string", "array", "object", "advanced"]
      },
      meta: {
        archived: false,
        hash: "de42726725b56d870fa0a7b16dc327589bbeba5a6d821d5f43d09b8a478a139a"
      }
    },
    {
      id: "currentURL",
      type: "snippet",
      attributes: {
        fileName: "currentURL.md",
        text:
          "Returns the current URL.\n\nUse `window.location.href` to get current URL.",
        codeBlocks: [
          "const currentURL = () => window.location.href;",
          "currentURL(); // 'https://google.com'"
        ],
        tags: ["browser", "url", "beginner"]
      },
      meta: {
        archived: false,
        hash: "965397215e067e73b7c7bbd8f376f5773c79bb82f370747603647b01dee09a28"
      }
    },
    {
      id: "curry",
      type: "snippet",
      attributes: {
        fileName: "curry.md",
        text:
          "Curries a function.\n\nUse recursion.\nIf the number of provided arguments (`args`) is sufficient, call the passed function `fn`.\nOtherwise, return a curried function `fn` that expects the rest of the arguments.\nIf you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.",
        codeBlocks: [
          "const curry = (fn, arity = fn.length, ...args) =>\n  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);",
          "curry(Math.pow)(2)(10); // 1024\ncurry(Math.min, 3)(10)(50)(2); // 2"
        ],
        tags: ["function", "recursion", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "e3b0d5ff10d79034d6ccc448282097089b084ed71c608bc8f3468c0a8533ec14"
      }
    },
    {
      id: "debounce",
      type: "snippet",
      attributes: {
        fileName: "debounce.md",
        text:
          "Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.\n\nEach time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.apply()` to apply the `this` context to the function and provide the necessary arguments.\nOmit the second argument, `ms`, to set the timeout at a default of 0 ms.",
        codeBlocks: [
          "const debounce = (fn, ms = 0) => {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), ms);\n  };\n};",
          "window.addEventListener(\n  'resize',\n  debounce(() => {\n    console.log(window.innerWidth);\n    console.log(window.innerHeight);\n  }, 250)\n); // Will log the window dimensions at most every 250ms"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "2c956f3d572d8d1a8534827e4ff3e8c41f47ca6e4e899715146413162d8cd72a"
      }
    },
    {
      id: "decapitalize",
      type: "snippet",
      attributes: {
        fileName: "decapitalize.md",
        text:
          "Decapitalizes the first letter of a string.\n\nUse array destructuring and `String.toLowerCase()` to decapitalize first letter, `...rest` to get array of characters after first letter and then `Array.join('')` to make it a string again.\nOmit the `upperRest` parameter to keep the rest of the string intact, or set it to `true` to convert to uppercase.",
        codeBlocks: [
          "const decapitalize = ([first, ...rest], upperRest = false) =>\n  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));",
          "decapitalize('FooBar'); // 'fooBar'\ndecapitalize('FooBar', true); // 'fOOBAR'"
        ],
        tags: ["string", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "c787309273fe531dcbc4ebc32b078cef19b3205c78f1e5c3863acac06ce23df4"
      }
    },
    {
      id: "deepClone",
      type: "snippet",
      attributes: {
        fileName: "deepClone.md",
        text:
          "Creates a deep clone of an object.\n\nUse recursion.\nUse `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.\nUse `Object.keys()` and `Array.forEach()` to determine which key-value pairs need to be deep cloned.",
        codeBlocks: [
          "const deepClone = obj => {\n  let clone = Object.assign({}, obj);\n  Object.keys(clone).forEach(\n    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])\n  );\n  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;\n};",
          "const a = { foo: 'bar', obj: { a: 1, b: 2 } };\nconst b = deepClone(a); // a !== b, a.obj !== b.obj"
        ],
        tags: ["object", "recursion", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "348cfded2d11812e84ba6416f258b90bf01ec50515f0aa97052c1f166b51a489"
      }
    },
    {
      id: "deepFlatten",
      type: "snippet",
      attributes: {
        fileName: "deepFlatten.md",
        text:
          "Deep flattens an array.\n\nUse recursion.\nUse `Array.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.\nRecursively flatten each element that is an array.",
        codeBlocks: [
          "const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));",
          "deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]"
        ],
        tags: ["array", "recursion", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "31714831376eeddd863a295af778632f584468745fbeb4e9a6f62b5275ea3562"
      }
    },
    {
      id: "deepFreeze",
      type: "snippet",
      attributes: {
        fileName: "deepFreeze.md",
        text:
          "Deep freezes an object.\n\nCalls `Object.freeze(obj)` recursively on all unfrozen properties of passed object that are `instanceof` object.",
        codeBlocks: [
          "const deepFreeze = obj =>\n  Object.keys(obj).forEach(\n    prop =>\n      !obj[prop] instanceof Object || Object.isFrozen(obj[prop]) ? null : deepFreeze(obj[prop])\n  ) || Object.freeze(obj);",
          "'use strict';\n\nconst o = deepFreeze([1, [2, 3]]);\n\no[0] = 3; // not allowed\no[1][0] = 4; // not allowed as well"
        ],
        tags: ["object", "recursion", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "24b3dd66c4b69577d70917ba4f0c119a7ad21497d18704b7150c3693673b5e53"
      }
    },
    {
      id: "defaults",
      type: "snippet",
      attributes: {
        fileName: "defaults.md",
        text:
          "Assigns default values for all properties in an object that are `undefined`.\n\nUse `Object.assign()` to create a new empty object and copy the original one to maintain key order, use `Array.reverse()` and the spread operator `...` to combine the default values from left to right, finally use `obj` again to overwrite properties that originally had a value.",
        codeBlocks: [
          "const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);",
          "defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }"
        ],
        tags: ["object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "067c820cb1b4afca0eca5ff9c3f9a835360224ac513fc50b247118adf54fea2b"
      }
    },
    {
      id: "defer",
      type: "snippet",
      attributes: {
        fileName: "defer.md",
        text:
          "Defers invoking a function until the current call stack has cleared.\n\nUse `setTimeout()` with a timeout of 1ms to add a new event to the browser event queue and allow the rendering engine to complete its work. Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.",
        codeBlocks: [
          "const defer = (fn, ...args) => setTimeout(fn, 1, ...args);",
          "// Example A:\ndefer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'\n\n// Example B:\ndocument.querySelector('#someElement').innerHTML = 'Hello';\nlongRunningFunction(); //Browser will not update the HTML until this has finished\ndefer(longRunningFunction); // Browser will update the HTML then run the function"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "eeeaf78d587fe1afdef8eb4b8c3f9f7887e364894d4efb1beecc0adf59250009"
      }
    },
    {
      id: "degreesToRads",
      type: "snippet",
      attributes: {
        fileName: "degreesToRads.md",
        text:
          "Converts an angle from degrees to radians.\n\nUse `Math.PI` and the degree to radian formula to convert the angle from degrees to radians.",
        codeBlocks: [
          "const degreesToRads = deg => (deg * Math.PI) / 180.0;",
          "degreesToRads(90.0); // ~1.5708"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "7f34bce958e51235318edc3a1fba0acf0fa110e533f3e92f87d27e74d7c1532b"
      }
    },
    {
      id: "delay",
      type: "snippet",
      attributes: {
        fileName: "delay.md",
        text:
          "Invokes the provided function after `wait` milliseconds.\n\nUse `setTimeout()` to delay execution of `fn`.\nUse the spread (`...`) operator to supply the function with an arbitrary number of arguments.",
        codeBlocks: [
          "const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);",
          "delay(\n  function(text) {\n    console.log(text);\n  },\n  1000,\n  'later'\n); // Logs 'later' after one second."
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "818427da43b193ebf9f10dccd7399c405c437cc5d0040add0df40fd25e940218"
      }
    },
    {
      id: "detectDeviceType",
      type: "snippet",
      attributes: {
        fileName: "detectDeviceType.md",
        text:
          "Detects wether the website is being opened in a mobile device or a desktop/laptop.\n\nUse a regular expression to test the `navigator.userAgent` property to figure out if the device is a mobile device or a desktop/laptop.",
        codeBlocks: [
          "const detectDeviceType = () =>\n  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)\n    ? 'Mobile'\n    : 'Desktop';",
          'detectDeviceType(); // "Mobile" or "Desktop"'
        ],
        tags: ["browser", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "2262275b7adcd7d9b2dd8f31da2a3a2dbcc663584928f46131a0d273b587403b"
      }
    },
    {
      id: "difference",
      type: "snippet",
      attributes: {
        fileName: "difference.md",
        text:
          "Returns the difference between two arrays.\n\nCreate a `Set` from `b`, then use `Array.filter()` on `a` to only keep values not contained in `b`.",
        codeBlocks: [
          "const difference = (a, b) => {\n  const s = new Set(b);\n  return a.filter(x => !s.has(x));\n};",
          "difference([1, 2, 3], [1, 2, 4]); // [3]"
        ],
        tags: ["array", "math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "e516410de0d0625f9673ba17858a2aeaea84918ebd58e27f53cd300519992ffd"
      }
    },
    {
      id: "differenceBy",
      type: "snippet",
      attributes: {
        fileName: "differenceBy.md",
        text:
          "Returns the difference between two arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to each element in `b`, then use `Array.filter()` in combination with `fn` on `a` to only keep values not contained in the previously created set.",
        codeBlocks: [
          "const differenceBy = (a, b, fn) => {\n  const s = new Set(b.map(v => fn(v)));\n  return a.filter(x => !s.has(fn(x)));\n};",
          "differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]\ndifferenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "34b876f5bf471d60d20a0e04c8e489de256ce0d5cef28de3bd70789d1b93d919"
      }
    },
    {
      id: "differenceWith",
      type: "snippet",
      attributes: {
        fileName: "differenceWith.md",
        text:
          "Filters out all values from an array for which the comparator function does not return `true`.\n\nUse `Array.filter()` and `Array.findIndex()` to find the appropriate values.",
        codeBlocks: [
          "const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);",
          "differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "e80b6619b9690e2a5d5cfd9d5fbe77fc25b6698e580e4b36e2c3c5fc54e3e572"
      }
    },
    {
      id: "dig",
      type: "snippet",
      attributes: {
        fileName: "dig.md",
        text:
          "Returns the target value in a nested JSON object, based on the given key.\n\nUse the `in` operator to check if `target` exists in `obj`.\nIf found, return the value of `obj[target]`, otherwise use `Object.values(obj)` and `Array.reduce()` to recursively call `dig` on each nested object until the first matching key/value pair is found.",
        codeBlocks: [
          "const dig = (obj, target) =>\n  target in obj\n    ? obj[target]\n    : Object.values(obj).reduce((acc, val) => {\n        if (acc !== undefined) return acc;\n        if (typeof val === 'object') return dig(val, target);\n      }, undefined);",
          "const data = {\n  level1: {\n    level2: {\n      level3: 'some data'\n    }\n  }\n};\ndig(data, 'level3'); // 'some data'\ndig(data, 'level4'); // undefined"
        ],
        tags: ["object", "recursion", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "0f53175b7bf367b55e612ccca6061c8e2a3db68af00950af2fda92746055cc05"
      }
    },
    {
      id: "digitize",
      type: "snippet",
      attributes: {
        fileName: "digitize.md",
        text:
          "Converts a number to an array of digits.\n\nConvert the number to a string, using the spread operator (`...`) to build an array.\nUse `Array.map()` and `parseInt()` to transform each value to an integer.",
        codeBlocks: [
          "const digitize = n => [...`${n}`].map(i => parseInt(i));",
          "digitize(123); // [1, 2, 3]"
        ],
        tags: ["math", "array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "24c310daf1753360f1227331a36b1bfa6e1a165a65ca1c74acd9d90050b67bbe"
      }
    },
    {
      id: "distance",
      type: "snippet",
      attributes: {
        fileName: "distance.md",
        text:
          "Returns the distance between two points.\n\nUse `Math.hypot()` to calculate the Euclidean distance between two points.",
        codeBlocks: [
          "const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);",
          "distance(1, 1, 2, 3); // 2.23606797749979"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "7023fa4063eaa53d06b0efd531455be981b3a14e6e0443cb9a04a639653103cc"
      }
    },
    {
      id: "drop",
      type: "snippet",
      attributes: {
        fileName: "drop.md",
        text:
          "Returns a new array with `n` elements removed from the left.\n\nUse `Array.slice()` to slice the remove the specified number of elements from the left.",
        codeBlocks: [
          "const drop = (arr, n = 1) => arr.slice(n);",
          "drop([1, 2, 3]); // [2,3]\ndrop([1, 2, 3], 2); // [3]\ndrop([1, 2, 3], 42); // []"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "d890ae5478fb895bf8dd02c48afd2ba157a8a10953459486a1ef1a3907960344"
      }
    },
    {
      id: "dropRight",
      type: "snippet",
      attributes: {
        fileName: "dropRight.md",
        text:
          "Returns a new array with `n` elements removed from the right.\n\nUse `Array.slice()` to slice the remove the specified number of elements from the right.",
        codeBlocks: [
          "const dropRight = (arr, n = 1) => arr.slice(0, -n);",
          "dropRight([1, 2, 3]); // [1,2]\ndropRight([1, 2, 3], 2); // [1]\ndropRight([1, 2, 3], 42); // []"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "363950cfd962ab27b0a0e8cac684d67a6e2b68e889af62e01ab1b4723ec0e2aa"
      }
    },
    {
      id: "dropRightWhile",
      type: "snippet",
      attributes: {
        fileName: "dropRightWhile.md",
        text:
          "Removes elements from the end of an array until the passed function returns `true`. Returns the remaining elements in the array.\n\nLoop through the array, using `Array.slice()` to drop the last element of the array until the returned value from the function is `true`.\nReturns the remaining elements.",
        codeBlocks: [
          "const dropRightWhile = (arr, func) => {\n  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);\n  return arr;\n};",
          "dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "78b914b8c51d1cfdac70746979b8e25d8649c4543d14da14e2950f63f889e2e4"
      }
    },
    {
      id: "dropWhile",
      type: "snippet",
      attributes: {
        fileName: "dropWhile.md",
        text:
          "Removes elements in an array until the passed function returns `true`. Returns the remaining elements in the array.\n\nLoop through the array, using `Array.slice()` to drop the first element of the array until the returned value from the function is `true`.\nReturns the remaining elements.",
        codeBlocks: [
          "const dropWhile = (arr, func) => {\n  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);\n  return arr;\n};",
          "dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "5d6353c95ab328b21e84f4a5cf2c49bea9516e4945a91658bed14309c8919990"
      }
    },
    {
      id: "elementContains",
      type: "snippet",
      attributes: {
        fileName: "elementContains.md",
        text:
          "Returns `true` if the `parent` element contains the `child` element, `false` otherwise.\n\nCheck that `parent` is not the same element as `child`, use `parent.contains(child)` to check if the `parent` element contains the `child` element.",
        codeBlocks: [
          "const elementContains = (parent, child) => parent !== child && parent.contains(child);",
          "elementContains(document.querySelector('head'), document.querySelector('title')); // true\nelementContains(document.querySelector('body'), document.querySelector('body')); // false"
        ],
        tags: ["browser", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "2f2c68c3368f5658fd54cb70b6264dce87ee68b23e805a95c62d55eef1854958"
      }
    },
    {
      id: "elementIsVisibleInViewport",
      type: "snippet",
      attributes: {
        fileName: "elementIsVisibleInViewport.md",
        text:
          "Returns `true` if the element specified is visible in the viewport, `false` otherwise.\n\nUse `Element.getBoundingClientRect()` and the `window.inner(Width|Height)` values\nto determine if a given element is visible in the viewport.\nOmit the second argument to determine if the element is entirely visible, or specify `true` to determine if\nit is partially visible.",
        codeBlocks: [
          "const elementIsVisibleInViewport = (el, partiallyVisible = false) => {\n  const { top, left, bottom, right } = el.getBoundingClientRect();\n  const { innerHeight, innerWidth } = window;\n  return partiallyVisible\n    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&\n        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))\n    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;\n};",
          "// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}\nelementIsVisibleInViewport(el); // false - (not fully visible)\nelementIsVisibleInViewport(el, true); // true - (partially visible)"
        ],
        tags: ["browser", "advanced"]
      },
      meta: {
        archived: false,
        hash: "d38bc0cd234c57cb95db1e60c47eb11a4d89775a4694acc520a8f113d03e3a39"
      }
    },
    {
      id: "elo",
      type: "snippet",
      attributes: {
        fileName: "elo.md",
        text:
          "Computes the new ratings between two or more opponents using the [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system). It takes an array\nof pre-ratings and returns an array containing post-ratings.\nThe array should be ordered from best performer to worst performer (winner -> loser).\n\nUse the exponent `**` operator and math operators to compute the expected score (chance of winning).\nof each opponent and compute the new rating for each.\nLoop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion. \nOmit the second argument to use the default `kFactor` of 32.",
        codeBlocks: [
          "const elo = ([...ratings], kFactor = 32, selfRating) => {\n  const [a, b] = ratings;\n  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));\n  const newRating = (rating, i) =>\n    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));\n  if (ratings.length === 2) {\n    return [newRating(a, 1), newRating(b, 0)];\n  }\n  for (let i = 0, len = ratings.length; i < len; i++) {\n    let j = i;\n    while (j < len - 1) {\n      j++;\n      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);\n    }\n  }\n  return ratings;\n};",
          "// Standard 1v1s\nelo([1200, 1200]); // [1216, 1184]\nelo([1200, 1200], 64); // [1232, 1168]\n// 4 player FFA, all same rank\nelo([1200, 1200, 1200, 1200]).map(Math.round); // [1246, 1215, 1185, 1154]\n/*\nFor teams, each rating can adjusted based on own team's average rating vs.\naverage rating of opposing team, with the score being added to their\nown individual rating by supplying it as the third argument.\n*/"
        ],
        tags: ["math", "array", "advanced"]
      },
      meta: {
        archived: false,
        hash: "3fc1fe2b64b13a3064c547933e759c0782bd43f357056a467d0ce2cc7e9a38e3"
      }
    },
    {
      id: "equals",
      type: "snippet",
      attributes: {
        fileName: "equals.md",
        text:
          "Performs a deep comparison between two values to determine if they are equivalent.\n\nCheck if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).\nCheck if only one value is `null` or `undefined` or if their prototypes differ.\nIf none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.",
        codeBlocks: [
          "const equals = (a, b) => {\n  if (a === b) return true;\n  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();\n  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;\n  if (a === null || a === undefined || b === null || b === undefined) return false;\n  if (a.prototype !== b.prototype) return false;\n  let keys = Object.keys(a);\n  if (keys.length !== Object.keys(b).length) return false;\n  return keys.every(k => equals(a[k], b[k]));\n};",
          "equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true"
        ],
        tags: ["object", "array", "type", "advanced"]
      },
      meta: {
        archived: false,
        hash: "7682a58d7745903fc19aa4341b8594d85714d563cfda1b44779bc0663338c3cf"
      }
    },
    {
      id: "escapeHTML",
      type: "snippet",
      attributes: {
        fileName: "escapeHTML.md",
        text:
          "Escapes a string for use in HTML.\n\nUse `String.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object).",
        codeBlocks: [
          "const escapeHTML = str =>\n  str.replace(\n    /[&<>'\"]/g,\n    tag =>\n      ({\n        '&': '&amp;',\n        '<': '&lt;',\n        '>': '&gt;',\n        \"'\": '&#39;',\n        '\"': '&quot;'\n      }[tag] || tag)\n  );",
          "escapeHTML('<a href=\"#\">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'"
        ],
        tags: ["string", "browser", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "ae852a538f18374cd16ddd80cbac643bcbd6ed1ff70c49fa01b59e517fad69c9"
      }
    },
    {
      id: "escapeRegExp",
      type: "snippet",
      attributes: {
        fileName: "escapeRegExp.md",
        text:
          "Escapes a string to use in a regular expression.\n\nUse `String.replace()` to escape special characters.",
        codeBlocks: [
          "const escapeRegExp = str => str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');",
          "escapeRegExp('(test)'); // \\\\(test\\\\)"
        ],
        tags: ["string", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "d328f5aca40c6ee25ff1d6ad4fe813a6bdd2e7dc2bf01567ba8cf8fd2470be83"
      }
    },
    {
      id: "everyNth",
      type: "snippet",
      attributes: {
        fileName: "everyNth.md",
        text:
          "Returns every nth element in an array.\n\nUse `Array.filter()` to create a new array that contains every nth element of a given array.",
        codeBlocks: [
          "const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);",
          "everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "bcf1b2900f8cd6ca9b62cc02e102cb94b494ab142d8f1d6f99dbaae0677d0fe9"
      }
    },
    {
      id: "extendHex",
      type: "snippet",
      attributes: {
        fileName: "extendHex.md",
        text:
          "Extends a 3-digit color code to a 6-digit color code.\n\nUse `Array.map()`, `String.split()` and `Array.join()` to join the mapped array for converting a 3-digit RGB notated hexadecimal color-code to the 6-digit form.\n`Array.slice()` is used to remove `#` from string start since it's added once.",
        codeBlocks: [
          "const extendHex = shortHex =>\n  '#' +\n  shortHex\n    .slice(shortHex.startsWith('#') ? 1 : 0)\n    .split('')\n    .map(x => x + x)\n    .join('');",
          "extendHex('#03f'); // '#0033ff'\nextendHex('05a'); // '#0055aa'"
        ],
        tags: ["utility", "string", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "f0f0a6da4c1fc17507cc956b0fa76d12efa81379b5626eb5ab739714ba139864"
      }
    },
    {
      id: "factorial",
      type: "snippet",
      attributes: {
        fileName: "factorial.md",
        text:
          "Calculates the factorial of a number.\n\nUse recursion.\nIf `n` is less than or equal to `1`, return `1`.\nOtherwise, return the product of `n` and the factorial of `n - 1`.\nThrows an exception if `n` is a negative number.",
        codeBlocks: [
          "const factorial = n =>\n  n < 0\n    ? (() => {\n        throw new TypeError('Negative numbers are not allowed!');\n      })()\n    : n <= 1\n      ? 1\n      : n * factorial(n - 1);",
          "factorial(6); // 720"
        ],
        tags: ["math", "recursion", "beginner"]
      },
      meta: {
        archived: false,
        hash: "319e1a8fb41490965ee6e28db3e139e65c4ea5b7f43e332bc7216cd790e5d409"
      }
    },
    {
      id: "fibonacci",
      type: "snippet",
      attributes: {
        fileName: "fibonacci.md",
        text:
          "Generates an array, containing the Fibonacci sequence, up until the nth term.\n\nCreate an empty array of the specific length, initializing the first two values (`0` and `1`).\nUse `Array.reduce()` to add values into the array, using the sum of the last two values, except for the first two.",
        codeBlocks: [
          "const fibonacci = n =>\n  Array.from({ length: n }).reduce(\n    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),\n    []\n  );",
          "fibonacci(6); // [0, 1, 1, 2, 3, 5]"
        ],
        tags: ["math", "array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "51d2fb1f44adfb7dde99fbe118ed9101b6e8848512cfd29324cccff15c4e3c1d"
      }
    },
    {
      id: "filterNonUnique",
      type: "snippet",
      attributes: {
        fileName: "filterNonUnique.md",
        text:
          "Filters out the non-unique values in an array.\n\nUse `Array.filter()` for an array containing only the unique values.",
        codeBlocks: [
          "const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));",
          "filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1,3,5]"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "8f319457b4350e041ba31cd4b4d02135013d8ea6716d0a4d00cf1b1bfd214ffa"
      }
    },
    {
      id: "filterNonUniqueBy",
      type: "snippet",
      attributes: {
        fileName: "filterNonUniqueBy.md",
        text:
          "Filters out the non-unique values in an array, based on a provided comparator function.\n\nUse `Array.filter()` and `Array.every()` for an array containing only the unique values, based on the comparator function, `fn`.\nThe comparator function takes four arguments: the values of the two elements being compared and their indexes.",
        codeBlocks: [
          "const filterNonUniqueBy = (arr, fn) =>\n  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));",
          "filterNonUniqueBy(\n  [\n    { id: 0, value: 'a' },\n    { id: 1, value: 'b' },\n    { id: 2, value: 'c' },\n    { id: 1, value: 'd' },\n    { id: 0, value: 'e' }\n  ],\n  (a, b) => a.id == b.id\n); // [ { id: 2, value: 'c' } ]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "39812240e9f09488915843a8ecb6373908513a7a469c00b120779ca462c651c5"
      }
    },
    {
      id: "findKey",
      type: "snippet",
      attributes: {
        fileName: "findKey.md",
        text:
          "Returns the first key that satisfies the provided testing function. Otherwise `undefined` is returned.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.",
        codeBlocks: [
          "const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));",
          "findKey(\n  {\n    barney: { age: 36, active: true },\n    fred: { age: 40, active: false },\n    pebbles: { age: 1, active: true }\n  },\n  o => o['active']\n); // 'barney'"
        ],
        tags: ["object", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "3ffa31973db7065ca8be2e550838839b555e07e8022647f8288da7ae3dc9680c"
      }
    },
    {
      id: "findLast",
      type: "snippet",
      attributes: {
        fileName: "findLast.md",
        text:
          "Returns the last element for which the provided function returns a truthy value.\n\nUse `Array.filter()` to remove elements for which `fn` returns falsey values, `Array.pop()` to get the last one.",
        codeBlocks: [
          "const findLast = (arr, fn) => arr.filter(fn).pop();",
          "findLast([1, 2, 3, 4], n => n % 2 === 1); // 3"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "5ee9242026e09ac101ace1edb4c5b1d01ab00dd5c718118ab2bf5cb38193abab"
      }
    },
    {
      id: "findLastIndex",
      type: "snippet",
      attributes: {
        fileName: "findLastIndex.md",
        text:
          "Returns the index of the last element for which the provided function returns a truthy value.\n\nUse `Array.map()` to map each element to an array with its index and value.\nUse `Array.filter()` to remove elements for which `fn` returns falsey values, `Array.pop()` to get the last one.",
        codeBlocks: [
          "const findLastIndex = (arr, fn) =>\n  arr\n    .map((val, i) => [i, val])\n    .filter(([i, val]) => fn(val, i, arr))\n    .pop()[0];",
          "findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "1af02f52c6aef95d92a27280477d30d4a677600433809267a04ed8bcb5b8f549"
      }
    },
    {
      id: "findLastKey",
      type: "snippet",
      attributes: {
        fileName: "findLastKey.md",
        text:
          "Returns the last key that satisfies the provided testing function. Otherwise `undefined` is returned.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.reverse()` to reverse their order and `Array.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.",
        codeBlocks: [
          "const findLastKey = (obj, fn) =>\n  Object.keys(obj)\n    .reverse()\n    .find(key => fn(obj[key], key, obj));",
          "findLastKey(\n  {\n    barney: { age: 36, active: true },\n    fred: { age: 40, active: false },\n    pebbles: { age: 1, active: true }\n  },\n  o => o['active']\n); // 'pebbles'"
        ],
        tags: ["object", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "c06e83c16f06394a29a029019a33c3ce0eb942f84ad6f1ef2b149ef09f836837"
      }
    },
    {
      id: "flatten",
      type: "snippet",
      attributes: {
        fileName: "flatten.md",
        text:
          "Flattens an array up to the specified depth.\n\nUse recursion, decrementing `depth` by 1 for each level of depth.\nUse `Array.reduce()` and `Array.concat()` to merge elements or arrays.\nBase case, for `depth` equal to `1` stops recursion.\nOmit the second argument, `depth` to flatten only to a depth of `1` (single flatten).",
        codeBlocks: [
          "const flatten = (arr, depth = 1) =>\n  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);",
          "flatten([1, [2], 3, 4]); // [1, 2, 3, 4]\nflatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "976416611eef7ea7ec02cfa6ddc08711f633e2a87d4f04b3b255cf5cd6bd9b9f"
      }
    },
    {
      id: "flattenObject",
      type: "snippet",
      attributes: {
        fileName: "flattenObject.md",
        text:
          "Flatten an object with the paths for keys.\n\nUse recursion.\nUse `Object.keys(obj)` combined with `Array.reduce()` to convert every leaf node to a flattened path node.\nIf the value of a key is an object, the function calls itself with the appropriate `prefix` to create the path using `Object.assign()`.\nOtherwise, it adds the appropriate prefixed key-value pair to the accumulator object.\nYou should always omit the second argument, `prefix`, unless you want every key to have a prefix.",
        codeBlocks: [
          "const flattenObject = (obj, prefix = '') =>\n  Object.keys(obj).reduce((acc, k) => {\n    const pre = prefix.length ? prefix + '.' : '';\n    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));\n    else acc[pre + k] = obj[k];\n    return acc;\n  }, {});",
          "flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }"
        ],
        tags: ["object", "recursion", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "445459e7eb304ee9069d72088883128e487c8bbac8f5b13f518b0332a99758a4"
      }
    },
    {
      id: "flip",
      type: "snippet",
      attributes: {
        fileName: "flip.md",
        text:
          "Flip takes a function as an argument, then makes the first argument the last.\r\n\r\nReturn a closure that takes variadic inputs, and splices the last argument to make it the first argument before applying the rest.",
        codeBlocks: [
          "const flip = fn => (first, ...rest) => fn(...rest, first);",
          "let a = { name: 'John Smith' };\nlet b = {};\nconst mergeFrom = flip(Object.assign);\nlet mergePerson = mergeFrom.bind(null, a);\nmergePerson(b); // == b\nb = {};\nObject.assign(b, a); // == b"
        ],
        tags: ["adapter", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "57a42eb12cc7d4535c25d9945db9abb115ca9520e298fbaed64549ee22ac76aa"
      }
    },
    {
      id: "forEachRight",
      type: "snippet",
      attributes: {
        fileName: "forEachRight.md",
        text:
          "Executes a provided function once for each array element, starting from the array's last element.\n\nUse `Array.slice(0)` to clone the given array, `Array.reverse()` to reverse it and `Array.forEach()` to iterate over the reversed array.",
        codeBlocks: [
          "const forEachRight = (arr, callback) =>\n  arr\n    .slice(0)\n    .reverse()\n    .forEach(callback);",
          "forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "c1d57024a1a572f9b8a4f7449aae2065e62fbd942709b9f4f6f09b64f518a1ca"
      }
    },
    {
      id: "formatDuration",
      type: "snippet",
      attributes: {
        fileName: "formatDuration.md",
        text:
          "Returns the human readable format of the given number of milliseconds.\n\nDivide `ms` with the appropriate values to obtain the appropriate values for `day`, `hour`, `minute`, `second` and `millisecond`.\nUse `Object.entries()` with `Array.filter()` to keep only non-zero values.\nUse `Array.map()` to create the string for each value, pluralizing appropriately.\nUse `String.join(', ')` to combine the values into a string.",
        codeBlocks: [
          "const formatDuration = ms => {\n  if (ms < 0) ms = -ms;\n  const time = {\n    day: Math.floor(ms / 86400000),\n    hour: Math.floor(ms / 3600000) % 24,\n    minute: Math.floor(ms / 60000) % 60,\n    second: Math.floor(ms / 1000) % 60,\n    millisecond: Math.floor(ms) % 1000\n  };\n  return Object.entries(time)\n    .filter(val => val[1] !== 0)\n    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)\n    .join(', ');\n};",
          "formatDuration(1001); // '1 second, 1 millisecond'\nformatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'"
        ],
        tags: ["date", "math", "string", "utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "fcaccacf92e1a1e5f8610cf78b840a6b897fc5e6cadb54d7a32efadb71b99f80"
      }
    },
    {
      id: "forOwn",
      type: "snippet",
      attributes: {
        fileName: "forOwn.md",
        text:
          "Iterates over all own properties of an object, running a callback for each one.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.",
        codeBlocks: [
          "const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));",
          "forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1"
        ],
        tags: ["object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "9f0a397890471bc6cab05493ae03780a0edca56e684c896a7f2e3fc773ab4642"
      }
    },
    {
      id: "forOwnRight",
      type: "snippet",
      attributes: {
        fileName: "forOwnRight.md",
        text:
          "Iterates over all own properties of an object in reverse, running a callback for each one.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.reverse()` to reverse their order and `Array.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.",
        codeBlocks: [
          "const forOwnRight = (obj, fn) =>\n  Object.keys(obj)\n    .reverse()\n    .forEach(key => fn(obj[key], key, obj));",
          "forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); // 1, 'bar'"
        ],
        tags: ["object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "6f320512c0362081df614d61e17ed8562bb7ee07bbcb62def3f3ac459b5be6bf"
      }
    },
    {
      id: "fromCamelCase",
      type: "snippet",
      attributes: {
        fileName: "fromCamelCase.md",
        text:
          "Converts a string from camelcase.\n\nUse `String.replace()` to remove underscores, hyphens, and spaces and convert words to camelcase.\nOmit the second argument to use a default `separator` of `_`.",
        codeBlocks: [
          "const fromCamelCase = (str, separator = '_') =>\n  str\n    .replace(/([a-z\\d])([A-Z])/g, '$1' + separator + '$2')\n    .replace(/([A-Z]+)([A-Z][a-z\\d]+)/g, '$1' + separator + '$2')\n    .toLowerCase();",
          "fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'\nfromCamelCase('someLabelThatNeedsToBeCamelized', '-'); // 'some-label-that-needs-to-be-camelized'\nfromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'"
        ],
        tags: ["string", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "09fc37c37860d58380c6ce23d61f872193415d1cfe7446fe7ff6943d0b7d9968"
      }
    },
    {
      id: "functionName",
      type: "snippet",
      attributes: {
        fileName: "functionName.md",
        text:
          "Logs the name of a function.\n\nUse `console.debug()` and the `name` property of the passed method to log the method's name to the `debug` channel of the console.",
        codeBlocks: [
          "const functionName = fn => (console.debug(fn.name), fn);",
          "functionName(Math.max); // max (logged in debug channel of console)"
        ],
        tags: ["function", "utility", "beginner"]
      },
      meta: {
        archived: false,
        hash: "66e540b754a02d3deba942aa9854d1051ec54c81f22e0dea859c5d3305b89fec"
      }
    },
    {
      id: "functions",
      type: "snippet",
      attributes: {
        fileName: "functions.md",
        text:
          "Returns an array of function property names from own (and optionally inherited) enumerable properties of an object.\n\nUse `Object.keys(obj)` to iterate over the object's own properties.\nIf `inherited` is `true`, use `Object.get.PrototypeOf(obj)` to also get the object's inherited properties.\nUse `Array.filter()` to keep only those properties that are functions.\nOmit the second argument, `inherited`, to not include inherited properties by default.",
        codeBlocks: [
          "const functions = (obj, inherited = false) =>\n  (inherited\n    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]\n    : Object.keys(obj)\n  ).filter(key => typeof obj[key] === 'function');",
          "function Foo() {\n  this.a = () => 1;\n  this.b = () => 2;\n}\nFoo.prototype.c = () => 3;\nfunctions(new Foo()); // ['a', 'b']\nfunctions(new Foo(), true); // ['a', 'b', 'c']"
        ],
        tags: ["object", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "89af4f514247f8d9702dfa3d6a77df187ca7ab5994dd8074da1f293cec24ff61"
      }
    },
    {
      id: "gcd",
      type: "snippet",
      attributes: {
        fileName: "gcd.md",
        text:
          "Calculates the greatest common divisor between two or more numbers/arrays.\n\nThe inner `_gcd` function uses recursion.\nBase case is when `y` equals `0`. In this case, return `x`.\nOtherwise, return the GCD of `y` and the remainder of the division `x/y`.",
        codeBlocks: [
          "const gcd = (...arr) => {\n  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));\n  return [...arr].reduce((a, b) => _gcd(a, b));\n};",
          "gcd(8, 36); // 4\ngcd(...[12, 8, 32]); // 4"
        ],
        tags: ["math", "recursion", "beginner"]
      },
      meta: {
        archived: false,
        hash: "1e35c8e3f0346e387fd97c25ecd0560270860bae65cc4a2d333b949f8187fa92"
      }
    },
    {
      id: "geometricProgression",
      type: "snippet",
      attributes: {
        fileName: "geometricProgression.md",
        text:
          "Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive and the ratio between two terms is `step`.\nReturns an error if `step` equals `1`.\n\nUse `Array.from()`, `Math.log()` and `Math.floor()` to create an array of the desired length, `Array.map()` to fill with the desired values in a range.\nOmit the second argument, `start`, to use a default value of `1`.\nOmit the third argument, `step`, to use a default value of `2`.",
        codeBlocks: [
          "const geometricProgression = (end, start = 1, step = 2) =>\n  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(\n    (v, i) => start * step ** i\n  );",
          "geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]\ngeometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]\ngeometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]"
        ],
        tags: ["math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "b94f3a44fb67360e307a17096a743c8616f1a194ba08a549064d090ef86c31ee"
      }
    },
    {
      id: "get",
      type: "snippet",
      attributes: {
        fileName: "get.md",
        text:
          "Retrieve a set of properties indicated by the given selectors from an object.\n\nUse `Array.map()` for each selector, `String.replace()` to replace square brackets with dots, `String.split('.')` to split each selector, `Array.filter()` to remove empty values and `Array.reduce()` to get the value indicated by it.",
        codeBlocks: [
          "const get = (from, ...selectors) =>\n  [...selectors].map(s =>\n    s\n      .replace(/\\[([^\\[\\]]*)\\]/g, '.$1.')\n      .split('.')\n      .filter(t => t !== '')\n      .reduce((prev, cur) => prev && prev[cur], from)\n  );",
          "const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };\nget(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']"
        ],
        tags: ["object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "85d56939e95b4f3015a2ee7b7a74ed2855e4e387ce5eb03d7d3c6c3a071dcf5c"
      }
    },
    {
      id: "getColonTimeFromDate",
      type: "snippet",
      attributes: {
        fileName: "getColonTimeFromDate.md",
        text:
          "Returns a string of the form `HH:MM:SS` from a `Date` object.\n\nUse `Date.toString()` and `String.slice()` to get the `HH:MM:SS` part of a given `Date` object.",
        codeBlocks: [
          "const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);",
          'getColonTimeFromDate(new Date()); // "08:38:00"'
        ],
        tags: ["date", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "757e7f51ea8c8b5803769c92b60966580c3fa3a227036cb3ca41406c22c6632b"
      }
    },
    {
      id: "getDaysDiffBetweenDates",
      type: "snippet",
      attributes: {
        fileName: "getDaysDiffBetweenDates.md",
        text:
          "Returns the difference (in days) between two dates.\n\nCalculate the difference (in days) between two `Date` objects.",
        codeBlocks: [
          "const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>\n  (dateFinal - dateInitial) / (1000 * 3600 * 24);",
          "getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9"
        ],
        tags: ["date", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "baeec5f4220f1e457b11034e29d84277dbdc9fc5c9e69c1a225bb22f13b843ec"
      }
    },
    {
      id: "getMeridiemSuffixOfInteger",
      type: "snippet",
      attributes: {
        fileName: "getMeridiemSuffixOfInteger.md",
        text:
          "Converts an integer to a suffixed string, adding `am` or `pm` based on its value.\n\nUse the modulo operator (`%`) and conditional checks to transform an integer to a stringified 12-hour format with meridiem suffix.",
        codeBlocks: [
          "const getMeridiemSuffixOfInteger = num =>\n  num === 0 || num === 24\n    ? 12 + 'am'\n    : num === 12\n      ? 12 + 'pm'\n      : num < 12\n        ? (num % 12) + 'am'\n        : (num % 12) + 'pm';",
          'getMeridiemSuffixOfInteger(0); // "12am"\ngetMeridiemSuffixOfInteger(11); // "11am"\ngetMeridiemSuffixOfInteger(13); // "1pm"\ngetMeridiemSuffixOfInteger(25); // "1pm"'
        ],
        tags: ["date", "beginner"]
      },
      meta: {
        archived: false,
        hash: "561d55a2f839596b336a04badbd160a3b895e9ebb9c1d392998ecccdbe5fb98d"
      }
    },
    {
      id: "getScrollPosition",
      type: "snippet",
      attributes: {
        fileName: "getScrollPosition.md",
        text:
          "Returns the scroll position of the current page.\n\nUse `pageXOffset` and `pageYOffset` if they are defined, otherwise `scrollLeft` and `scrollTop`.\nYou can omit `el` to use a default value of `window`.",
        codeBlocks: [
          "const getScrollPosition = (el = window) => ({\n  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,\n  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop\n});",
          "getScrollPosition(); // {x: 0, y: 200}"
        ],
        tags: ["browser", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "4033549c80f649c2a9b9b50d1af42410811ff72914c5eb576445219bddfc792f"
      }
    },
    {
      id: "getStyle",
      type: "snippet",
      attributes: {
        fileName: "getStyle.md",
        text:
          "Returns the value of a CSS rule for the specified element.\n\nUse `Window.getComputedStyle()` to get the value of the CSS rule for the specified element.",
        codeBlocks: [
          "const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];",
          "getStyle(document.querySelector('p'), 'font-size'); // '16px'"
        ],
        tags: ["browser", "css", "beginner"]
      },
      meta: {
        archived: false,
        hash: "b9668334e0fd077c4e43d616765e4343b3770a0a3bd6b846ecc743ca7d65a804"
      }
    },
    {
      id: "getType",
      type: "snippet",
      attributes: {
        fileName: "getType.md",
        text:
          'Returns the native type of a value.\n\nReturns lowercased constructor name of value, `"undefined"` or `"null"` if value is `undefined` or `null`.',
        codeBlocks: [
          "const getType = v =>\n  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();",
          "getType(new Set([1, 2, 3])); // 'set'"
        ],
        tags: ["type", "beginner"]
      },
      meta: {
        archived: false,
        hash: "7fb09e3f807459959cae5fcb87ac323286e0a36ed4500b699c292c19b709af38"
      }
    },
    {
      id: "getURLParameters",
      type: "snippet",
      attributes: {
        fileName: "getURLParameters.md",
        text:
          "Returns an object containing the parameters of the current URL.\n\nUse `String.match()` with an appropriate regular expression to get all key-value pairs, `Array.reduce()` to map and combine them into a single object.\nPass `location.search` as the argument to apply to the current `url`.",
        codeBlocks: [
          "const getURLParameters = url =>\n  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(\n    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),\n    {}\n  );",
          "getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}\ngetURLParameters('google.com'); // {}"
        ],
        tags: ["utility", "browser", "string", "url", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "1083da3e052cd8a654bc85150a434fe1a31729be0b78c2fa573887a9a7318ba3"
      }
    },
    {
      id: "groupBy",
      type: "snippet",
      attributes: {
        fileName: "groupBy.md",
        text:
          "Groups the elements of an array based on the given function.\n\nUse `Array.map()` to map the values of an array to a function or property name.\nUse `Array.reduce()` to create an object, where the keys are produced from the mapped results.",
        codeBlocks: [
          "const groupBy = (arr, fn) =>\n  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {\n    acc[val] = (acc[val] || []).concat(arr[i]);\n    return acc;\n  }, {});",
          "groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}\ngroupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}"
        ],
        tags: ["array", "object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "16d1dadd1272a4627adf5788c6419a8c0ea578db3769f13995471067e621198e"
      }
    },
    {
      id: "hammingDistance",
      type: "snippet",
      attributes: {
        fileName: "hammingDistance.md",
        text:
          "Calculates the Hamming distance between two values.\n\nUse XOR operator (`^`) to find the bit difference between the two numbers, convert to a binary string using `toString(2)`.\nCount and return the number of `1`s in the string, using `match(/1/g)`.",
        codeBlocks: [
          "const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;",
          "hammingDistance(2, 3); // 1"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "e75b1c53cb28dce1ac4f8e1d1289f96da22e2b24e6c3a28bd5fd5adc5f4ec5de"
      }
    },
    {
      id: "hasClass",
      type: "snippet",
      attributes: {
        fileName: "hasClass.md",
        text:
          "Returns `true` if the element has the specified class, `false` otherwise.\n\nUse `element.classList.contains()` to check if the element has the specified class.",
        codeBlocks: [
          "const hasClass = (el, className) => el.classList.contains(className);",
          "hasClass(document.querySelector('p.special'), 'special'); // true"
        ],
        tags: ["browser", "css", "beginner"]
      },
      meta: {
        archived: false,
        hash: "edb16de35e0a033f7dece0ff7854b17cb6c5ed0ed68438556ee38b68b219e7fe"
      }
    },
    {
      id: "hasFlags",
      type: "snippet",
      attributes: {
        fileName: "hasFlags.md",
        text:
          "Check if the current process's arguments contain the specified flags.\n\nUse `Array.every()` and `Array.includes()` to check if `process.argv` contains all the specified flags.\nUse a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly.",
        codeBlocks: [
          "const hasFlags = (...flags) =>\n  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));",
          "// node myScript.js -s --test --cool=true\nhasFlags('-s'); // true\nhasFlags('--test', 'cool=true', '-s'); // true\nhasFlags('special'); // false"
        ],
        tags: ["node", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "3ea93481e9752f37b1b4fae54740a49df11068de7fea73e7a90db2d79019eb29"
      }
    },
    {
      id: "hashBrowser",
      type: "snippet",
      attributes: {
        fileName: "hashBrowser.md",
        text:
          "Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.\n\nUse the [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to create a hash for the given value.",
        codeBlocks: [
          "const hashBrowser = val =>\n  crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(val)).then(h => {\n    let hexes = [],\n      view = new DataView(h);\n    for (let i = 0; i < view.byteLength; i += 4)\n      hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));\n    return hexes.join('');\n  });",
          "hashBrowser(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'"
        ],
        tags: ["browser", "utility", "advanced", "promise", "advanced"]
      },
      meta: {
        archived: false,
        hash: "aa8ba51d9419e05e0d2962221c0a65311ad54b4b38f278a1d4ab546ca5b29bc9"
      }
    },
    {
      id: "hashNode",
      type: "snippet",
      attributes: {
        fileName: "hashNode.md",
        text:
          "Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.\n\nUse `crypto` API to create a hash for the given value.",
        codeBlocks: [
          "const crypto = require('crypto');\nconst hashNode = val =>\n  new Promise(resolve =>\n    setTimeout(\n      () =>\n        resolve(\n          crypto\n            .createHash('sha256')\n            .update(val)\n            .digest('hex')\n        ),\n      0\n    )\n  );",
          "hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'"
        ],
        tags: ["node", "utility", "promise", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "80adea6b33dacdfc5f2d25ce270472f232208fa688794b71ba042ea368e1ad63"
      }
    },
    {
      id: "head",
      type: "snippet",
      attributes: {
        fileName: "head.md",
        text:
          "Returns the head of a list.\n\nUse `arr[0]` to return the first element of the passed array.",
        codeBlocks: ["const head = arr => arr[0];", "head([1, 2, 3]); // 1"],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "cd65a1dea363ab1e3773705c33b30afd44fd1ab2ecb57f732c35fd4e737ada11"
      }
    },
    {
      id: "hexToRGB",
      type: "snippet",
      attributes: {
        fileName: "hexToRGB.md",
        text:
          "Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.\n\nUse bitwise right-shift operator and mask bits with `&` (and) operator to convert a hexadecimal color code (with or without prefixed with `#`) to a string with the RGB values. If it's 3-digit color code, first convert to 6-digit version. If an alpha value is provided alongside 6-digit hex, give `rgba()` string in return.",
        codeBlocks: [
          "const hexToRGB = hex => {\n  let alpha = false,\n    h = hex.slice(hex.startsWith('#') ? 1 : 0);\n  if (h.length === 3) h = [...h].map(x => x + x).join('');\n  else if (h.length === 8) alpha = true;\n  h = parseInt(h, 16);\n  return (\n    'rgb' +\n    (alpha ? 'a' : '') +\n    '(' +\n    (h >>> (alpha ? 24 : 16)) +\n    ', ' +\n    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +\n    ', ' +\n    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +\n    (alpha ? `, ${h & 0x000000ff}` : '') +\n    ')'\n  );\n};",
          "hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'\nhexToRGB('27ae60'); // 'rgb(39, 174, 96)'\nhexToRGB('#fff'); // 'rgb(255, 255, 255)'"
        ],
        tags: ["utility", "string", "math", "advanced"]
      },
      meta: {
        archived: false,
        hash: "181b4df31bcbafebd7960725d19c945925a2dc5ee79ef30668d4becae0c82518"
      }
    },
    {
      id: "hide",
      type: "snippet",
      attributes: {
        fileName: "hide.md",
        text:
          "Hides all the elements specified.\n\nUse `NodeList.prototype.forEach()` to apply `display: none` to each element specified.",
        codeBlocks: [
          "const hide = els => els.forEach(e => (e.style.display = 'none'));",
          "hide(document.querySelectorAll('img')); // Hides all <img> elements on the page"
        ],
        tags: ["browser", "css", "beginner"]
      },
      meta: {
        archived: false,
        hash: "8b7b70809f93fd9392315a5c63aa4cbbf9b45eb1165a7d44db314186d407816b"
      }
    },
    {
      id: "httpGet",
      type: "snippet",
      attributes: {
        fileName: "httpGet.md",
        text:
          "Makes a `GET` request to the passed URL.\n\nUse [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `get` request to the given `url`.\nHandle the `onload` event, by calling the given `callback` the `responseText`.\nHandle the `onerror` event, by running the provided `err` function.\nOmit the third argument, `err`, to log errors to the console's `error` stream by default.",
        codeBlocks: [
          "const httpGet = (url, callback, err = console.error) => {\n  const request = new XMLHttpRequest();\n  request.open('GET', url, true);\n  request.onload = () => callback(request.responseText);\n  request.onerror = () => err(request);\n  request.send();\n};",
          'httpGet(\n  \'https://jsonplaceholder.typicode.com/posts/1\',\n  console.log\n); /* \nLogs: {\n  "userId": 1,\n  "id": 1,\n  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n  "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto"\n}\n*/'
        ],
        tags: ["utility", "url", "browser", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "beb6cc37601ceaae4203ff5a6dbd6f8bf9ba83cb24b159e5e6d7d18a7d0efb2a"
      }
    },
    {
      id: "httpPost",
      type: "snippet",
      attributes: {
        fileName: "httpPost.md",
        text:
          "Makes a `POST` request to the passed URL.\n\nUse [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `post` request to the given `url`.\nSet the value of an `HTTP` request header with `setRequestHeader` method.\nHandle the `onload` event, by calling the given `callback` the `responseText`.\nHandle the `onerror` event, by running the provided `err` function.\nOmit the third argument, `data`, to send no data to the provided `url`.\nOmit the fourth argument, `err`, to log errors to the console's `error` stream by default.",
        codeBlocks: [
          "const httpPost = (url, data, callback, err = console.error) => {\n  const request = new XMLHttpRequest();\n  request.open('POST', url, true);\n  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n  request.onload = () => callback(request.responseText);\n  request.onerror = () => err(request);\n  request.send(data);\n};",
          'const newPost = {\n  userId: 1,\n  id: 1337,\n  title: \'Foo\',\n  body: \'bar bar bar\'\n};\nconst data = JSON.stringify(newPost);\nhttpPost(\n  \'https://jsonplaceholder.typicode.com/posts\',\n  data,\n  console.log\n); /*\nLogs: {\n  "userId": 1,\n  "id": 1337,\n  "title": "Foo",\n  "body": "bar bar bar"\n}\n*/\nhttpPost(\n  \'https://jsonplaceholder.typicode.com/posts\',\n  null, //does not send a body\n  console.log\n); /*\nLogs: {\n  "id": 101\n}\n*/'
        ],
        tags: ["utility", "url", "browser", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "a74182199fce00d578629f774e05c256a30a624e254da6ea6aee532803ad08d6"
      }
    },
    {
      id: "httpsRedirect",
      type: "snippet",
      attributes: {
        fileName: "httpsRedirect.md",
        text:
          "Redirects the page to HTTPS if its currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as its replaced in the history.\n\nUse `location.protocol` to get the protocol currently being used. If it's not HTTPS, use `location.replace()` to replace the existing page with the HTTPS version of the page. Use `location.href` to get the full address, split it with `String.split()` and remove the protocol part of the URL.",
        codeBlocks: [
          "const httpsRedirect = () => {\n  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);\n};",
          "httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com"
        ],
        tags: ["browser", "url", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "15f1d0142c25cc971b11c18db69dbc7cc4492877661a7b7b471add15dd6c5316"
      }
    },
    {
      id: "hz",
      type: "snippet",
      attributes: {
        fileName: "hz.md",
        text:
          "Returns the number of times a function executed per second. \n`hz` is the unit for `hertz`, the unit of frequency defined as one cycle per second.\n\nUse `performance.now()` to get the difference in milliseconds before and after the iteration loop to calculate the time elapsed executing the function `iterations` times. \nReturn the number of cycles per second by converting milliseconds to seconds and dividing it by the time elapsed. \nOmit the second argument, `iterations`, to use the default of 100 iterations.",
        codeBlocks: [
          "const hz = (fn, iterations = 100) => {\n  const before = performance.now();\n  for (let i = 0; i < iterations; i++) fn();\n  return (1000 * iterations) / (performance.now() - before);\n};",
          "// 10,000 element array\nconst numbers = Array(10000)\n  .fill()\n  .map((_, i) => i);\n\n// Test functions with the same goal: sum up the elements in the array\nconst sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);\nconst sumForLoop = () => {\n  let sum = 0;\n  for (let i = 0; i < numbers.length; i++) sum += numbers[i];\n  return sum;\n};\n\n// `sumForLoop` is nearly 10 times faster\nMath.round(hz(sumReduce)); // 572\nMath.round(hz(sumForLoop)); // 4784"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "4c8c44d8677b7b591d36d043e3c1347b50ad21e2b24aa371ea50b515ee98254f"
      }
    },
    {
      id: "indexOfAll",
      type: "snippet",
      attributes: {
        fileName: "indexOfAll.md",
        text:
          "Returns all indices of `val` in an array. If `val` never occurs, returns `[]`.\n\nUse `Array.reduce()` to loop over elements and store indices for matching elements.\nReturn the array of indices.",
        codeBlocks: [
          "const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);",
          "indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]\nindexOfAll([1, 2, 3], 4); // []"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "643cb7b5df16c9da268e21b65b4cf73bb572e7b93a5859d09bb3bc949665f65b"
      }
    },
    {
      id: "initial",
      type: "snippet",
      attributes: {
        fileName: "initial.md",
        text:
          "Returns all the elements of an array except the last one.\n\nUse `arr.slice(0,-1)` to return all but the last element of the array.",
        codeBlocks: [
          "const initial = arr => arr.slice(0, -1);",
          "initial([1, 2, 3]); // [1,2]"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "fbb48fd534c60e0b78ddc84eb7dcdc74e0cb8487545da6a49ca53149915af632"
      }
    },
    {
      id: "initialize2DArray",
      type: "snippet",
      attributes: {
        fileName: "initialize2DArray.md",
        text:
          "Initializes a 2D array of given width and height and value.\n\nUse `Array.map()` to generate h rows where each is a new array of size w initialize with value. If the value is not provided, default to `null`.",
        codeBlocks: [
          "const initialize2DArray = (w, h, val = null) =>\n  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));",
          "initialize2DArray(2, 2, 0); // [[0,0], [0,0]]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "bb9a475bb49367ff2cb0a58f47992d69f2fecbc5f614c1a6e41c469495e93af3"
      }
    },
    {
      id: "initializeArrayWithRange",
      type: "snippet",
      attributes: {
        fileName: "initializeArrayWithRange.md",
        text:
          "Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive with their common difference `step`.\n\nUse `Array.from()` to create an array of the desired length, `(end - start + 1)/step`, and a map function to fill it with the desired values in the given range.\nYou can omit `start` to use a default value of `0`.\nYou can omit `step` to use a default value of `1`.",
        codeBlocks: [
          "const initializeArrayWithRange = (end, start = 0, step = 1) =>\n  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);",
          "initializeArrayWithRange(5); // [0,1,2,3,4,5]\ninitializeArrayWithRange(7, 3); // [3,4,5,6,7]\ninitializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]"
        ],
        tags: ["array", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "f2cb7d6d0d34691affe17f7c06ee5c45944bd9515298560a18543f0798b4fe13"
      }
    },
    {
      id: "initializeArrayWithRangeRight",
      type: "snippet",
      attributes: {
        fileName: "initializeArrayWithRangeRight.md",
        text:
          "Initializes an array containing the numbers in the specified range (in reverse) where `start` and `end` are inclusive with their common difference `step`.\n\nUse `Array.from(Math.ceil((end+1-start)/step))` to create an array of the desired length(the amounts of elements is equal to `(end-start)/step` or `(end+1-start)/step` for inclusive end), `Array.map()` to fill with the desired values in a range.\nYou can omit `start` to use a default value of `0`.\nYou can omit `step` to use a default value of `1`.",
        codeBlocks: [
          "const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>\n  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(\n    (v, i, arr) => (arr.length - i - 1) * step + start\n  );",
          "initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]\ninitializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]\ninitializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]"
        ],
        tags: ["array", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "25359e2d70e26266be459ea522d6272581c099089ae79b5bc48116cfb88cc088"
      }
    },
    {
      id: "initializeArrayWithValues",
      type: "snippet",
      attributes: {
        fileName: "initializeArrayWithValues.md",
        text:
          "Initializes and fills an array with the specified values.\n\nUse `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.\nYou can omit `val` to use a default value of `0`.",
        codeBlocks: [
          "const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);",
          "initializeArrayWithValues(5, 2); // [2,2,2,2,2]"
        ],
        tags: ["array", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "f6e42080918660d432e391965815f7e2106ba2be536432f6c4aefdd658324d0b"
      }
    },
    {
      id: "initializeNDArray",
      type: "snippet",
      attributes: {
        fileName: "initializeNDArray.md",
        text:
          "Create a n-dimensional array with given value.\n\nUse recursion.\nUse `Array.map()` to generate rows where each is a new array initialized using `initializeNDArray`.",
        codeBlocks: [
          "const initializeNDArray = (val, ...args) =>\n  args.length === 0\n    ? val\n    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));",
          "initializeNDArray(1, 3); // [1,1,1]\ninitializeNDArray(5, 2, 2, 2); // [[[5,5],[5,5]],[[5,5],[5,5]]]"
        ],
        tags: ["array", "recursion", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "30158adba400501632e1ac4d55a5f0fcc2d9416f77aee9156844450689c929dc"
      }
    },
    {
      id: "inRange",
      type: "snippet",
      attributes: {
        fileName: "inRange.md",
        text:
          "Checks if the given number falls within the given range.\n\nUse arithmetic comparison to check if the given number is in the specified range.\nIf the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.",
        codeBlocks: [
          "const inRange = (n, start, end = null) => {\n  if (end && start > end) [end, start] = [start, end];\n  return end == null ? n >= 0 && n < start : n >= start && n < end;\n};",
          "inRange(3, 2, 5); // true\ninRange(3, 4); // true\ninRange(2, 3, 5); // false\ninRange(3, 2); // false"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "cb00d1c23e02506fc968515ce8c18dcec8837d447cd47a99f73777574308fb49"
      }
    },
    {
      id: "insertAfter",
      type: "snippet",
      attributes: {
        fileName: "insertAfter.md",
        text:
          "Inserts an HTML string after the end of the specified element.\n\nUse `el.insertAdjacentHTML()` with a position of `'afterend'` to parse `htmlString` and insert it after the end of `el`.",
        codeBlocks: [
          "const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);",
          "insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id=\"myId\">...</div> <p>after</p>"
        ],
        tags: ["browser", "beginner"]
      },
      meta: {
        archived: false,
        hash: "6fb50a82d884c18e13fce553a0027ab6816697d3be1dd4c5e22d0c8f833744bf"
      }
    },
    {
      id: "insertBefore",
      type: "snippet",
      attributes: {
        fileName: "insertBefore.md",
        text:
          "Inserts an HTML string before the start of the specified element.\n\nUse `el.insertAdjacentHTML()` with a position of `'beforebegin'` to parse `htmlString` and insert it before the start of `el`.",
        codeBlocks: [
          "const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);",
          "insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id=\"myId\">...</div>"
        ],
        tags: ["browser", "beginner"]
      },
      meta: {
        archived: false,
        hash: "bd45d57d669eeecd55bb507ab12c09839dc35ee90f99bcc182dae0a41649a19d"
      }
    },
    {
      id: "intersection",
      type: "snippet",
      attributes: {
        fileName: "intersection.md",
        text:
          "Returns a list of elements that exist in both arrays.\n\nCreate a `Set` from `b`, then use `Array.filter()` on `a` to only keep values contained in `b`.",
        codeBlocks: [
          "const intersection = (a, b) => {\n  const s = new Set(b);\n  return a.filter(x => s.has(x));\n};",
          "intersection([1, 2, 3], [4, 3, 2]); // [2,3]"
        ],
        tags: ["array", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "3a8920e513726008197584769c01a4fffd26e93d945e40a944189872c7585730"
      }
    },
    {
      id: "intersectionBy",
      type: "snippet",
      attributes: {
        fileName: "intersectionBy.md",
        text:
          "Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to all elements in `b`, then use `Array.filter()` on `a` to only keep elements, which produce values contained in `b` when `fn` is applied to them.",
        codeBlocks: [
          "const intersectionBy = (a, b, fn) => {\n  const s = new Set(b.map(fn));\n  return a.filter(x => s.has(fn(x)));\n};",
          "intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "78c90426a81372be83af6ef2bdee0147263361673ab99fa2315ead2720d991b8"
      }
    },
    {
      id: "intersectionWith",
      type: "snippet",
      attributes: {
        fileName: "intersectionWith.md",
        text:
          "Returns a list of elements that exist in both arrays, using a provided comparator function.\n\nUse `Array.filter()` and `Array.findIndex()` in combination with the provided comparator to determine intersecting values.",
        codeBlocks: [
          "const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);",
          "intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "66050987342924eff56a42b04bb50287f8d46d8f504d186478141dbcd2fb1f4b"
      }
    },
    {
      id: "invertKeyValues",
      type: "snippet",
      attributes: {
        fileName: "invertKeyValues.md",
        text:
          "Inverts the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.\n\nUse `Object.keys()` and `Array.reduce()` to invert the key-value pairs of an object and apply the function provided (if any).\nOmit the second argument, `fn`, to get the inverted keys without applying a function to them.",
        codeBlocks: [
          "const invertKeyValues = (obj, fn) =>\n  Object.keys(obj).reduce((acc, key) => {\n    const val = fn ? fn(obj[key]) : obj[key];\n    acc[val] = acc[val] || [];\n    acc[val].push(key);\n    return acc;\n  }, {});",
          "invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }\ninvertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value); // { group1: [ 'a', 'c' ], group2: [ 'b' ] }"
        ],
        tags: ["object", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "9a0cd8cae3d3901bf78fad156e810f80738e7ee3e51b288dc89fa7b9eb54c866"
      }
    },
    {
      id: "is",
      type: "snippet",
      attributes: {
        fileName: "is.md",
        text:
          "Checks if the provided value is of the specified type.\n\nEnsure the value is not `undefined` or `null` using `Array.includes()`, and compare the `constructor` property on the value with `type` to check if the provided value is of the specified `type`.",
        codeBlocks: [
          "const is = (type, val) => ![, null].includes(val) && val.constructor === type;",
          "is(Array, [1]); // true\nis(ArrayBuffer, new ArrayBuffer()); // true\nis(Map, new Map()); // true\nis(RegExp, /./g); // true\nis(Set, new Set()); // true\nis(WeakMap, new WeakMap()); // true\nis(WeakSet, new WeakSet()); // true\nis(String, ''); // true\nis(String, new String('')); // true\nis(Number, 1); // true\nis(Number, new Number(1)); // true\nis(Boolean, true); // true\nis(Boolean, new Boolean(true)); // true"
        ],
        tags: ["type", "array", "regexp", "beginner"]
      },
      meta: {
        archived: false,
        hash: "b89d0ccfdf527ef90c49a4b4e54b9d5106691abe8c94a94ba8fda3a43c77391b"
      }
    },
    {
      id: "isAbsoluteURL",
      type: "snippet",
      attributes: {
        fileName: "isAbsoluteURL.md",
        text:
          "Returns `true` if the given string is an absolute URL, `false` otherwise.\n\nUse a regular expression to test if the string is an absolute URL.",
        codeBlocks: [
          "const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);",
          "isAbsoluteURL('https://google.com'); // true\nisAbsoluteURL('ftp://www.myserver.net'); // true\nisAbsoluteURL('/foo/bar'); // false"
        ],
        tags: ["string", "utility", "browser", "url", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "74e18a4c018b09d172b04daec6aeab29297b83986bb846028fc20ab1300c84a5"
      }
    },
    {
      id: "isAnagram",
      type: "snippet",
      attributes: {
        fileName: "isAnagram.md",
        text:
          "Checks if a string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters).\n\nUse `String.toLowerCase()`, `String.replace()` with an appropriate regular expression to remove unnecessary characters, `String.split('')`, `Array.sort()` and `Array.join('')` on both strings to normalize them, then check if their normalized forms are equal.",
        codeBlocks: [
          "const isAnagram = (str1, str2) => {\n  const normalize = str =>\n    str\n      .toLowerCase()\n      .replace(/[^a-z0-9]/gi, '')\n      .split('')\n      .sort()\n      .join('');\n  return normalize(str1) === normalize(str2);\n};",
          "isAnagram('iceman', 'cinema'); // true"
        ],
        tags: ["string", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "2bda59143e64383a94ba8fd9c519db16b50566b2810030493a1d77d229ce7841"
      }
    },
    {
      id: "isArrayLike",
      type: "snippet",
      attributes: {
        fileName: "isArrayLike.md",
        text:
          "Checks if the provided argument is array-like (i.e. is iterable).\n\nCheck if the provided argument is not `null` and that its `Symbol.iterator` property is a function.",
        codeBlocks: [
          "const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';",
          "isArrayLike(document.querySelectorAll('.className')); // true\nisArrayLike('abc'); // true\nisArrayLike(null); // false"
        ],
        tags: ["type", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "00b43a2b430d5d9205046ad6fbf7442f0d4507895c82545753253b5b5f97fa3a"
      }
    },
    {
      id: "isBoolean",
      type: "snippet",
      attributes: {
        fileName: "isBoolean.md",
        text:
          "Checks if the given argument is a native boolean element.\n\nUse `typeof` to check if a value is classified as a boolean primitive.",
        codeBlocks: [
          "const isBoolean = val => typeof val === 'boolean';",
          "isBoolean(null); // false\nisBoolean(false); // true"
        ],
        tags: ["type", "beginner"]
      },
      meta: {
        archived: false,
        hash: "e1adac3af11702cb65c30ecaf573659d215b3e2c2b5825e9993d36d889c5fd52"
      }
    },
    {
      id: "isBrowser",
      type: "snippet",
      attributes: {
        fileName: "isBrowser.md",
        text:
          "Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.\n\nUse `Array.includes()` on the `typeof` values of both `window` and `document` (globals usually only available in a browser environment unless they were explicitly defined), which will return `true` if one of them is `undefined`. \n`typeof` allows globals to be checked for existence without throwing a `ReferenceError`. \nIf both of them are not `undefined`, then the current environment is assumed to be a browser.",
        codeBlocks: [
          "const isBrowser = () => ![typeof window, typeof document].includes('undefined');",
          "isBrowser(); // true (browser)\nisBrowser(); // false (Node)"
        ],
        tags: ["utility", "browser", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "b207815a1a26a3161f3c79e64052e8feac65e44a34cef545851300c8b9f08d0d"
      }
    },
    {
      id: "isBrowserTabFocused",
      type: "snippet",
      attributes: {
        fileName: "isBrowserTabFocused.md",
        text:
          "Returns `true` if the browser tab of the page is focused, `false` otherwise.\n\nUse the `Document.hidden` property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden.",
        codeBlocks: [
          "const isBrowserTabFocused = () => !document.hidden;",
          "isBrowserTabFocused(); // true"
        ],
        tags: ["browser", "beginner"]
      },
      meta: {
        archived: false,
        hash: "af819966e11f4832bfc0129d1d0e148fa0157775d9a07d26f4c17f7096c6a176"
      }
    },
    {
      id: "isDivisible",
      type: "snippet",
      attributes: {
        fileName: "isDivisible.md",
        text:
          "Checks if the first numeric argument is divisible by the second one.\n\nUse the modulo operator (`%`) to check if the remainder is equal to `0`.",
        codeBlocks: [
          "const isDivisible = (dividend, divisor) => dividend % divisor === 0;",
          "isDivisible(6, 3); // true"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "660aff9a5f540384603a2ab18d24e933b37e71972bd6bbc708b7bfb77ac13a50"
      }
    },
    {
      id: "isEmpty",
      type: "snippet",
      attributes: {
        fileName: "isEmpty.md",
        text:
          "Returns true if the a value is an empty object, collection, map or set, has no enumerable properties or is any type that is not considered a collection.\n\nCheck if the provided value is `null` or if its `length` is equal to `0`.",
        codeBlocks: [
          "const isEmpty = val => val == null || !(Object.keys(val) || val).length;",
          "isEmpty(new Map()); // true\nisEmpty(new Set()); // true\nisEmpty([]); // true\nisEmpty({}); // true\nisEmpty(''); // true\nisEmpty([1, 2]); // false\nisEmpty({ a: 1, b: 2 }); // false\nisEmpty('text'); // false\nisEmpty(123); // true - type is not considered a collection\nisEmpty(true); // true - type is not considered a collection"
        ],
        tags: ["type", "array", "object", "string", "beginner"]
      },
      meta: {
        archived: false,
        hash: "55954fcfb879542225f7d1861ae7de6faac288e28ca857367b6a2eeba9a54786"
      }
    },
    {
      id: "isEven",
      type: "snippet",
      attributes: {
        fileName: "isEven.md",
        text:
          "Returns `true` if the given number is even, `false` otherwise.\n\nChecks whether a number is odd or even using the modulo (`%`) operator.\nReturns `true` if the number is even, `false` if the number is odd.",
        codeBlocks: [
          "const isEven = num => num % 2 === 0;",
          "isEven(3); // false"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "1c88249edc75925e83e8a4abc28f300c27bf9be1440bcc30b1b798b7d7ea8596"
      }
    },
    {
      id: "isFunction",
      type: "snippet",
      attributes: {
        fileName: "isFunction.md",
        text:
          "Checks if the given argument is a function.\n\nUse `typeof` to check if a value is classified as a function primitive.",
        codeBlocks: [
          "const isFunction = val => typeof val === 'function';",
          "isFunction('x'); // false\nisFunction(x => x); // true"
        ],
        tags: ["type", "function", "beginner"]
      },
      meta: {
        archived: false,
        hash: "22009c1df55cca53bc9b227d4f8f2e3d475abe5f5eecfbf9ab3cb30948c9d783"
      }
    },
    {
      id: "isLowerCase",
      type: "snippet",
      attributes: {
        fileName: "isLowerCase.md",
        text:
          "Checks if a string is lower case.\n\nConvert the given string to lower case, using `String.toLowerCase()` and compare it to the original.",
        codeBlocks: [
          "const isLowerCase = str => str === str.toLowerCase();",
          "isLowerCase('abc'); // true\nisLowerCase('a3@$'); // true\nisLowerCase('Ab4'); // false"
        ],
        tags: ["string", "utility", "beginner"]
      },
      meta: {
        archived: false,
        hash: "e23c295c6c1d85cbeae2cfad15be98d3d8093ba59266f14af7dc47d19a68f43b"
      }
    },
    {
      id: "isNil",
      type: "snippet",
      attributes: {
        fileName: "isNil.md",
        text:
          "Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.\n\nUse the strict equality operator to check if the value and of `val` are equal to `null` or `undefined`.",
        codeBlocks: [
          "const isNil = val => val === undefined || val === null;",
          "isNil(null); // true\nisNil(undefined); // true"
        ],
        tags: ["type", "beginner"]
      },
      meta: {
        archived: false,
        hash: "8a0c679926f99b1f710ad093e3ca2ae845eea383740b4aa655e2e3beb99472ca"
      }
    },
    {
      id: "isNull",
      type: "snippet",
      attributes: {
        fileName: "isNull.md",
        text:
          "Returns `true` if the specified value is `null`, `false` otherwise.\n\nUse the strict equality operator to check if the value and of `val` are equal to `null`.",
        codeBlocks: [
          "const isNull = val => val === null;",
          "isNull(null); // true"
        ],
        tags: ["type", "beginner"]
      },
      meta: {
        archived: false,
        hash: "e38f39701757feb6e2515736d446b2de580f19c77f9eaacb5d0d5b3e787209f8"
      }
    },
    {
      id: "isNumber",
      type: "snippet",
      attributes: {
        fileName: "isNumber.md",
        text:
          "Checks if the given argument is a number.\n\nUse `typeof` to check if a value is classified as a number primitive.",
        codeBlocks: [
          "const isNumber = val => typeof val === 'number';",
          "isNumber('1'); // false\nisNumber(1); // true"
        ],
        tags: ["type", "math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "446ed50e100f18a606c8443be196992b74b235ed98646632463fdc3d01f9eb04"
      }
    },
    {
      id: "isObject",
      type: "snippet",
      attributes: {
        fileName: "isObject.md",
        text:
          "Returns a boolean determining if the passed value is an object or not.\n\nUses the  `Object` constructor to create an object wrapper for the given value. \nIf the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.",
        codeBlocks: [
          "const isObject = obj => obj === Object(obj);",
          "isObject([1, 2, 3, 4]); // true\nisObject([]); // true\nisObject(['Hello!']); // true\nisObject({ a: 1 }); // true\nisObject({}); // true\nisObject(true); // false"
        ],
        tags: ["type", "object", "beginner"]
      },
      meta: {
        archived: false,
        hash: "64de55a580b3db52f79f2bc3168e312d4087891216853e51f8585e30c6eb3d3d"
      }
    },
    {
      id: "isObjectLike",
      type: "snippet",
      attributes: {
        fileName: "isObjectLike.md",
        text:
          "Checks if a value is object-like.\n\nCheck if the provided value is not `null` and its `typeof` is equal to `'object'`.",
        codeBlocks: [
          "const isObjectLike = val => val !== null && typeof val === 'object';",
          "isObjectLike({}); // true\nisObjectLike([1, 2, 3]); // true\nisObjectLike(x => x); // false\nisObjectLike(null); // false"
        ],
        tags: ["type", "object", "beginner"]
      },
      meta: {
        archived: false,
        hash: "5388bdd5320b8b68511c1a6b77683e8320177a9c6561e5e952a60193c1b73844"
      }
    },
    {
      id: "isPlainObject",
      type: "snippet",
      attributes: {
        fileName: "isPlainObject.md",
        text:
          "Checks if the provided value is an object created by the Object constructor.\n\nCheck if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.",
        codeBlocks: [
          "const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;",
          "isPlainObject({ a: 1 }); // true\nisPlainObject(new Map()); // false"
        ],
        tags: ["type", "object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "f57c53ec6964e15510cd9bf9ad53429721c6a6547b59bd302ebcbc4cd19557ea"
      }
    },
    {
      id: "isPrime",
      type: "snippet",
      attributes: {
        fileName: "isPrime.md",
        text:
          "Checks if the provided integer is a prime number.\n\nCheck numbers from `2` to the square root of the given number.\nReturn `false` if any of them divides the given number, else return `true`, unless the number is less than `2`.",
        codeBlocks: [
          "const isPrime = num => {\n  const boundary = Math.floor(Math.sqrt(num));\n  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;\n  return num >= 2;\n};",
          "isPrime(11); // true"
        ],
        tags: ["math", "beginner", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "023b7e9fded22fad9cd776f01c60c8238236cb2921523d7d612034bb465cba7d"
      }
    },
    {
      id: "isPrimitive",
      type: "snippet",
      attributes: {
        fileName: "isPrimitive.md",
        text:
          "Returns a boolean determining if the passed value is primitive or not.\n\nUse `Array.includes()` on an array of type strings which are not primitive,\nsupplying the type using `typeof`.\nSince `typeof null` evaluates to `'object'`, it needs to be directly compared.",
        codeBlocks: [
          "const isPrimitive = val => !['object', 'function'].includes(typeof val) || val === null;",
          "isPrimitive(null); // true\nisPrimitive(50); // true\nisPrimitive('Hello!'); // true\nisPrimitive(false); // true\nisPrimitive(Symbol()); // true\nisPrimitive([]); // false"
        ],
        tags: ["type", "function", "array", "string", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "f71ccc907c6ffd6bc29d461f12529872a78a78f871633fceeceed4e60a666c6f"
      }
    },
    {
      id: "isPromiseLike",
      type: "snippet",
      attributes: {
        fileName: "isPromiseLike.md",
        text:
          "Returns `true` if an object looks like a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), `false` otherwise.\n\nCheck if the object is not `null`, its `typeof` matches either `object` or `function` and if it has a `.then` property, which is also a `function`.",
        codeBlocks: [
          "const isPromiseLike = obj =>\n  obj !== null &&\n  (typeof obj === 'object' || typeof obj === 'function') &&\n  typeof obj.then === 'function';",
          "isPromiseLike({\n  then: function() {\n    return '';\n  }\n}); // true\nisPromiseLike(null); // false\nisPromiseLike({}); // false"
        ],
        tags: ["type", "function", "promise", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "fa8bfc91bfa09eb76f7131c3cc7b890598f8a30ec9e9872f7ffd9c282d37ba72"
      }
    },
    {
      id: "isSorted",
      type: "snippet",
      attributes: {
        fileName: "isSorted.md",
        text:
          "Returns `1` if the array is sorted in ascending order, `-1` if it is sorted in descending order or `0` if it is not sorted.\n\nCalculate the ordering `direction` for the first two elements.\nUse `Object.entries()` to loop over array objects and compare them in pairs.\nReturn `0` if the `direction` changes or the `direction` if the last element is reached.",
        codeBlocks: [
          "const isSorted = arr => {\n  let direction = -(arr[0] - arr[1]);\n  for (let [i, val] of arr.entries()) {\n    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;\n    if (i === arr.length - 1) return !direction ? 0 : direction;\n    else if ((val - arr[i + 1]) * direction > 0) return 0;\n  }\n};",
          "isSorted([0, 1, 2, 2]); // 1\nisSorted([4, 3, 2]); // -1\nisSorted([4, 3, 5]); // 0"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "2dfe9101a9ab2945ffddb46ecbca0fdd5dea384683d310e8adb852ac9c51970f"
      }
    },
    {
      id: "isString",
      type: "snippet",
      attributes: {
        fileName: "isString.md",
        text:
          "Checks if the given argument is a string.\n\nUse `typeof` to check if a value is classified as a string primitive.",
        codeBlocks: [
          "const isString = val => typeof val === 'string';",
          "isString('10'); // true"
        ],
        tags: ["type", "string", "beginner"]
      },
      meta: {
        archived: false,
        hash: "1292c2a3504428962a0851e2f433aac67bfdd581f5abf08df967f5c8fef0954b"
      }
    },
    {
      id: "isSymbol",
      type: "snippet",
      attributes: {
        fileName: "isSymbol.md",
        text:
          "Checks if the given argument is a symbol.\n\nUse `typeof` to check if a value is classified as a symbol primitive.",
        codeBlocks: [
          "const isSymbol = val => typeof val === 'symbol';",
          "isSymbol(Symbol('x')); // true"
        ],
        tags: ["type", "beginner"]
      },
      meta: {
        archived: false,
        hash: "680fe44539f63a13c6586153e9ffdddd2a9a9b83c2736a69eaf5fe24080675e3"
      }
    },
    {
      id: "isTravisCI",
      type: "snippet",
      attributes: {
        fileName: "isTravisCI.md",
        text:
          "Checks if the current environment is [Travis CI](https://travis-ci.org/).\n\nChecks if the current environment has the `TRAVIS` and `CI` environment variables ([reference](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables)).",
        codeBlocks: [
          "const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;",
          "isTravisCI(); // true (if code is running on Travis CI)"
        ],
        tags: ["node", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "1528bcadc4afcb7240a9f5d53b49243d512d8c98814b3fe841889d0772ad2030"
      }
    },
    {
      id: "isUndefined",
      type: "snippet",
      attributes: {
        fileName: "isUndefined.md",
        text:
          "Returns `true` if the specified value is `undefined`, `false` otherwise.\n\nUse the strict equality operator to check if the value and of `val` are equal to `undefined`.",
        codeBlocks: [
          "const isUndefined = val => val === undefined;",
          "isUndefined(undefined); // true"
        ],
        tags: ["type", "beginner"]
      },
      meta: {
        archived: false,
        hash: "00eca9d29a66b8b8cee4b059a88bdae8f60cdc557cdff52817edd811cde5281b"
      }
    },
    {
      id: "isUpperCase",
      type: "snippet",
      attributes: {
        fileName: "isUpperCase.md",
        text:
          "Checks if a string is upper case.\n\nConvert the given string to upper case, using `String.toUpperCase()` and compare it to the original.",
        codeBlocks: [
          "const isUpperCase = str => str === str.toUpperCase();",
          "isUpperCase('ABC'); // true\nisLowerCase('A3@$'); // true\nisLowerCase('aB4'); // false"
        ],
        tags: ["string", "utility", "beginner"]
      },
      meta: {
        archived: false,
        hash: "b4fea8a827ecac55b823edbeac26371b6ab29321180ca71bf3a47fa2fedcabb6"
      }
    },
    {
      id: "isValidJSON",
      type: "snippet",
      attributes: {
        fileName: "isValidJSON.md",
        text:
          "Checks if the provided argument is a valid JSON.\n\nUse `JSON.parse()` and a `try... catch` block to check if the provided argument is a valid JSON.",
        codeBlocks: [
          "const isValidJSON = obj => {\n  try {\n    JSON.parse(obj);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};",
          'isValidJSON(\'{"name":"Adam","age":20}\'); // true\nisValidJSON(\'{"name":"Adam",age:"20"}\'); // false\nisValidJSON(null); // true'
        ],
        tags: ["type", "json", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "b4417a972f391836241e88587797a8cd995f32ee71fbfcfe9e590c8fa8675558"
      }
    },
    {
      id: "join",
      type: "snippet",
      attributes: {
        fileName: "join.md",
        text:
          "Joins all elements of an array into a string and returns this string. Uses a separator and an end separator.\n\nUse `Array.reduce()` to combine elements into a string.\nOmit the second argument, `separator`, to use a default separator of `','`.\nOmit the third argument, `end`, to use the same value as `separator` by default.",
        codeBlocks: [
          "const join = (arr, separator = ',', end = separator) =>\n  arr.reduce(\n    (acc, val, i) =>\n      i === arr.length - 2\n        ? acc + val + end\n        : i === arr.length - 1\n          ? acc + val\n          : acc + val + separator,\n    ''\n  );",
          "join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'); // \"pen,pineapple,apple&pen\"\njoin(['pen', 'pineapple', 'apple', 'pen'], ','); // \"pen,pineapple,apple,pen\"\njoin(['pen', 'pineapple', 'apple', 'pen']); // \"pen,pineapple,apple,pen\""
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "05c13ad111a5815d05ba0d2ca0bb17a7ab7e02fc3b33f0e5e049acc25fc2cbb4"
      }
    },
    {
      id: "JSONtoCSV",
      type: "snippet",
      attributes: {
        fileName: "JSONtoCSV.md",
        text:
          "Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.\n\nUse `Array.join(demiliter)` to combine all the names in `columns` to create the first row.\nUse `Array.map()` and `Array.reduce()` to create a row for each object, substituting non-existent values with empty strings and only mapping values in `columns`.\nUse `Array.join('\\n')` to combine all rows into a string.\nOmit the third argument, `delimiter`, to use a default delimiter of `,`.",
        codeBlocks: [
          "const JSONtoCSV = (arr, columns, delimiter = ',') =>\n  [\n    columns.join(delimiter),\n    ...arr.map(obj =>\n      columns.reduce(\n        (acc, key) => `${acc}${!acc.length ? '' : delimiter}\"${!obj[key] ? '' : obj[key]}\"`,\n        ''\n      )\n    )\n  ].join('\\n');",
          'JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], [\'a\', \'b\']); // \'a,b\\n"1","2"\\n"3","4"\\n"6",""\\n"","7"\'\nJSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], [\'a\', \'b\'], \';\'); // \'a;b\\n"1";"2"\\n"3";"4"\\n"6";""\\n"";"7"\''
        ],
        tags: ["array", "string", "object", "advanced"]
      },
      meta: {
        archived: false,
        hash: "65457b943f03456c28e947f21177ffd0c9d8a00eb37aab7f7f76cb666f8c0acc"
      }
    },
    {
      id: "JSONToFile",
      type: "snippet",
      attributes: {
        fileName: "JSONToFile.md",
        text:
          "Writes a JSON object to a file.\n\nUse `fs.writeFile()`, template literals and `JSON.stringify()` to write a `json` object to a `.json` file.",
        codeBlocks: [
          "const fs = require('fs');\nconst JSONToFile = (obj, filename) =>\n  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));",
          "JSONToFile({ test: 'is passed' }, 'testJsonFile'); // writes the object to 'testJsonFile.json'"
        ],
        tags: ["node", "json", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "1428086b630fa917dbb5a4ecd2854e9371b07244b3968bc3eb3184b4b589ea0c"
      }
    },
    {
      id: "last",
      type: "snippet",
      attributes: {
        fileName: "last.md",
        text:
          "Returns the last element in an array.\n\nUse `arr.length - 1` to compute the index of the last element of the given array and returning it.",
        codeBlocks: [
          "const last = arr => arr[arr.length - 1];",
          "last([1, 2, 3]); // 3"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "49eb0b667109a372349e32fbcb809894ed62b5a1a3dab305876b810f8adfef29"
      }
    },
    {
      id: "lcm",
      type: "snippet",
      attributes: {
        fileName: "lcm.md",
        text:
          "Returns the least common multiple of two or more numbers.\n\nUse the greatest common divisor (GCD) formula and the fact that `lcm(x,y) = x * y / gcd(x,y)` to determine the least common multiple.\nThe GCD formula uses recursion.",
        codeBlocks: [
          "const lcm = (...arr) => {\n  const gcd = (x, y) => (!y ? x : gcd(y, x % y));\n  const _lcm = (x, y) => (x * y) / gcd(x, y);\n  return [...arr].reduce((a, b) => _lcm(a, b));\n};",
          "lcm(12, 7); // 84\nlcm(...[1, 3, 4, 5]); // 60"
        ],
        tags: ["math", "recursion", "beginner"]
      },
      meta: {
        archived: false,
        hash: "ac4ec1ff763b005ddd65e6ed5bdb49b18a4ce53f8b7ccf79536fa49ebeb6efa8"
      }
    },
    {
      id: "longestItem",
      type: "snippet",
      attributes: {
        fileName: "longestItem.md",
        text:
          "Takes any number of iterable objects or objects with a `length` property and returns the longest one.\nIf multiple objects have the same length, the first one will be returned.\nReturns `undefined` if no arguments are provided.\n\nUse `Array.reduce()`, comparing the `length` of objects to find the longest one.",
        codeBlocks: [
          "const longestItem = (val, ...vals) =>\n  [val, ...vals].reduce((a, x) => (x.length > a.length ? x : a));",
          "longestItem('this', 'is', 'a', 'testcase'); // 'testcase'\nlongestItem(...['a', 'ab', 'abc']); // 'abc'\nlongestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'\nlongestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]\nlongestItem([1, 2, 3], 'foobar'); // 'foobar'"
        ],
        tags: ["array", "string", "utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "cb9de7acf3a94ee67a24d7d5926944124ad0bd3459126c2f740f868fbffc655b"
      }
    },
    {
      id: "lowercaseKeys",
      type: "snippet",
      attributes: {
        fileName: "lowercaseKeys.md",
        text:
          "Creates a new object from the specified object, where all the keys are in lowercase.\n\nUse `Object.keys()` and `Array.reduce()` to create a new object from the specified object.\nConvert each key in the original object to lowercase, using `String.toLowerCase()`.",
        codeBlocks: [
          "const lowercaseKeys = obj =>\n  Object.keys(obj).reduce((acc, key) => {\n    acc[key.toLowerCase()] = obj[key];\n    return acc;\n  }, {});",
          "const myObj = { Name: 'Adam', sUrnAME: 'Smith' };\nconst myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};"
        ],
        tags: ["object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "683925a82b5ff50494e589d9e1aa6ac66696263718613bf29ab03203c1247bdb"
      }
    },
    {
      id: "luhnCheck",
      type: "snippet",
      attributes: {
        fileName: "luhnCheck.md",
        text:
          "Implementation of the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.\n\nUse `String.split('')`, `Array.reverse()` and `Array.map()` in combination with `parseInt()` to obtain an array of digits.\nUse `Array.splice(0,1)` to obtain the last digit.\nUse `Array.reduce()` to implement the Luhn Algorithm.\nReturn `true` if `sum` is divisible by `10`, `false` otherwise.",
        codeBlocks: [
          "const luhnCheck = num => {\n  let arr = (num + '')\n    .split('')\n    .reverse()\n    .map(x => parseInt(x));\n  let lastDigit = arr.splice(0, 1)[0];\n  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);\n  sum += lastDigit;\n  return sum % 10 === 0;\n};",
          "luhnCheck('4485275742308327'); // true\nluhnCheck(6011329933655299); //  false\nluhnCheck(123456789); // false"
        ],
        tags: ["math", "utility", "advanced"]
      },
      meta: {
        archived: false,
        hash: "874ac349f65a3787c4579dfe94efc068441b1b4cd38892a35352d43ece8e7ca4"
      }
    },
    {
      id: "mapKeys",
      type: "snippet",
      attributes: {
        fileName: "mapKeys.md",
        text:
          "Creates an object with keys generated by running the provided function for each key and the same values as the provided object.\n\nUse `Object.keys(obj)` to iterate over the object's keys.\nUse `Array.reduce()` to create a new object with the same values and mapped keys using `fn`.",
        codeBlocks: [
          "const mapKeys = (obj, fn) =>\n  Object.keys(obj).reduce((acc, k) => {\n    acc[fn(obj[k], k, obj)] = obj[k];\n    return acc;\n  }, {});",
          "mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }"
        ],
        tags: ["object", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "a0d5ec06ceb092d7473d95ce8f4124edcdf7d3659969f2f1e7d21834fc682ee6"
      }
    },
    {
      id: "mapObject",
      type: "snippet",
      attributes: {
        fileName: "mapObject.md",
        text:
          "Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the mapped value.\n\nUse an anonymous inner function scope to declare an undefined memory space, using closures to store a return value. Use a new `Array` to store the array with a map of the function over its data set and a comma operator to return a second step, without needing to move from one context to another (due to closures and order of operations).",
        codeBlocks: [
          "const mapObject = (arr, fn) =>\n  (a => (\n    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})\n  ))();",
          "const squareIt = arr => mapObject(arr, a => a * a);\nsquareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }"
        ],
        tags: ["array", "object", "advanced"]
      },
      meta: {
        archived: false,
        hash: "c7f0f9b6b22590a17c41057c56ea5cf14e74dfbbd4fb7e4bc5c08db3760ef76d"
      }
    },
    {
      id: "mapString",
      type: "snippet",
      attributes: {
        fileName: "mapString.md",
        text:
          "Creates a new string with the results of calling a provided function on every character in the calling string.\n\nUse `String.split('')` and `Array.map()` to call the provided function, `fn`, for each character in `str`.\nUse `Array.join('')` to recombine the array of characters into a string.\nThe callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).",
        codeBlocks: [
          "const mapString = (str, fn) =>\n  str\n    .split('')\n    .map((c, i) => fn(c, i, str))\n    .join('');",
          "mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'"
        ],
        tags: ["string", "array", "function", "utility", "beginner"]
      },
      meta: {
        archived: false,
        hash: "828991c05b86fc84f46155e1452cada09bd3cb64f734533af7bf4cabe3077aab"
      }
    },
    {
      id: "mapValues",
      type: "snippet",
      attributes: {
        fileName: "mapValues.md",
        text:
          "Creates an object with the same keys as the provided object and values generated by running the provided function for each value.\n\nUse `Object.keys(obj)` to iterate over the object's keys.\nUse `Array.reduce()` to create a new object with the same keys and mapped values using `fn`.",
        codeBlocks: [
          "const mapValues = (obj, fn) =>\n  Object.keys(obj).reduce((acc, k) => {\n    acc[k] = fn(obj[k], k, obj);\n    return acc;\n  }, {});",
          "const users = {\n  fred: { user: 'fred', age: 40 },\n  pebbles: { user: 'pebbles', age: 1 }\n};\nmapValues(users, u => u.age); // { fred: 40, pebbles: 1 }"
        ],
        tags: ["object", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "c98a3dde46797b4d6c38d7bac7689bbfbcf24892a62de06f4aaeb665f1e9607c"
      }
    },
    {
      id: "mask",
      type: "snippet",
      attributes: {
        fileName: "mask.md",
        text:
          "Replaces all but the last `num` of characters with the specified mask character.\n\nUse `String.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.\nOmit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.\nOmit the third argument, `mask`, to use a default character of `'*'` for the mask.",
        codeBlocks: [
          "const mask = (cc, num = 4, mask = '*') => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);",
          "mask(1234567890); // '******7890'\nmask(1234567890, 3); // '*******890'\nmask(1234567890, -4, '$'); // '$$$$567890'"
        ],
        tags: ["string", "utility", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "b5217d2c91e86fb37ea02b5339140bba05f8d88d43a42dd3abcb9acf0c1d1ddf"
      }
    },
    {
      id: "matches",
      type: "snippet",
      attributes: {
        fileName: "matches.md",
        text:
          "Compares two objects to determine if the first one contains equivalent property values to the second one.\n\nUse `Object.keys(source)` to get all the keys of the second object, then `Array.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.",
        codeBlocks: [
          "const matches = (obj, source) =>\n  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);",
          "matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true\nmatches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false"
        ],
        tags: ["object", "type", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "b8b36705d0f588dca63c57c248d0683852d6f14aab68831595be5f2f1568c9df"
      }
    },
    {
      id: "matchesWith",
      type: "snippet",
      attributes: {
        fileName: "matchesWith.md",
        text:
          "Compares two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.\n\nUse `Object.keys(source)` to get all the keys of the second object, then `Array.every()`, `Object.hasOwnProperty()` and the provided function to determine if all keys exist in the first object and have equivalent values.\nIf no function is provided, the values will be compared using the equality operator.",
        codeBlocks: [
          "const matchesWith = (obj, source, fn) =>\n  Object.keys(source).every(\n    key =>\n      obj.hasOwnProperty(key) && fn\n        ? fn(obj[key], source[key], key, obj, source)\n        : obj[key] == source[key]\n  );",
          "const isGreeting = val => /^h(?:i|ello)$/.test(val);\nmatchesWith(\n  { greeting: 'hello' },\n  { greeting: 'hi' },\n  (oV, sV) => isGreeting(oV) && isGreeting(sV)\n); // true"
        ],
        tags: ["object", "type", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "c1fd11b1c4376ec9a31d3e1ed3f9910e97ffa20db06ce2ecf3a3afc1d25daff9"
      }
    },
    {
      id: "maxBy",
      type: "snippet",
      attributes: {
        fileName: "maxBy.md",
        text:
          "Returns the maximum value of an array, after mapping each element to a value using the provided function.\n\nUse `Array.map()` to map each element to the value returned by `fn`, `Math.max()` to get the maximum value.",
        codeBlocks: [
          "const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));",
          "maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 8\nmaxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8"
        ],
        tags: ["math", "array", "function", "beginner"]
      },
      meta: {
        archived: false,
        hash: "1e428e3359905eca8f86da81afcbcca3b93c44ac7500c1736ca9c83f9c66a135"
      }
    },
    {
      id: "maxN",
      type: "snippet",
      attributes: {
        fileName: "maxN.md",
        text:
          "Returns the `n` maximum elements from the provided array. If `n` is greater than or equal to the provided array's length, then return the original array(sorted in descending order).\n\nUse `Array.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.\nUse `Array.slice()` to get the specified number of elements.\nOmit the second argument, `n`, to get a one-element array.",
        codeBlocks: [
          "const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);",
          "maxN([1, 2, 3]); // [3]\nmaxN([1, 2, 3], 2); // [3,2]"
        ],
        tags: ["array", "math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "a6b2f1c58b863814ad76a4b98a3ed995d17ce7b19ee01fe4d7455ef5d35b704c"
      }
    },
    {
      id: "median",
      type: "snippet",
      attributes: {
        fileName: "median.md",
        text:
          "Returns the median of an array of numbers.\n\nFind the middle of the array, use `Array.sort()` to sort the values.\nReturn the number at the midpoint if `length` is odd, otherwise the average of the two middle numbers.",
        codeBlocks: [
          "const median = arr => {\n  const mid = Math.floor(arr.length / 2),\n    nums = [...arr].sort((a, b) => a - b);\n  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;\n};",
          "median([5, 6, 50, 1, -5]); // 5"
        ],
        tags: ["math", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "a6b933371f622f4dde77359e73c6d12ba14b3c21171a86830e59c4e620be8cb1"
      }
    },
    {
      id: "memoize",
      type: "snippet",
      attributes: {
        fileName: "memoize.md",
        text:
          "Returns the memoized (cached) function.\n\nCreate an empty cache by instantiating a new `Map` object.\nReturn a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.\nAllow access to the `cache` by setting it as a property on the returned function.",
        codeBlocks: [
          "const memoize = fn => {\n  const cache = new Map();\n  const cached = function(val) {\n    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);\n  };\n  cached.cache = cache;\n  return cached;\n};",
          "// See the `anagrams` snippet.\nconst anagramsCached = memoize(anagrams);\nanagramsCached('javascript'); // takes a long time\nanagramsCached('javascript'); // returns virtually instantly since it's now cached\nconsole.log(anagramsCached.cache); // The cached anagrams map"
        ],
        tags: ["function", "advanced"]
      },
      meta: {
        archived: false,
        hash: "b0de7050159a7c0fab5a089e2118d3e20d48d96a4aae6a0ddb98f489882bb80f"
      }
    },
    {
      id: "merge",
      type: "snippet",
      attributes: {
        fileName: "merge.md",
        text:
          "Creates a new object from the combination of two or more objects.\n\nUse `Array.reduce()` combined with `Object.keys(obj)` to iterate over all objects and keys.\nUse `hasOwnProperty()` and `Array.concat()` to append values for keys existing in multiple objects.",
        codeBlocks: [
          "const merge = (...objs) =>\n  [...objs].reduce(\n    (acc, obj) =>\n      Object.keys(obj).reduce((a, k) => {\n        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];\n        return acc;\n      }, {}),\n    {}\n  );",
          "const object = {\n  a: [{ x: 2 }, { y: 4 }],\n  b: 1\n};\nconst other = {\n  a: { z: 3 },\n  b: [2, 3],\n  c: 'foo'\n};\nmerge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }"
        ],
        tags: ["object", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "6ed1518bf260b792cb9e06eec51cc88ad4d81aca1ec59c2bf5d0bf9bb57d47fa"
      }
    },
    {
      id: "minBy",
      type: "snippet",
      attributes: {
        fileName: "minBy.md",
        text:
          "Returns the minimum value of an array, after mapping each element to a value using the provided function.\n\nUse `Array.map()` to map each element to the value returned by `fn`, `Math.min()` to get the maximum value.",
        codeBlocks: [
          "const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));",
          "minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 2\nminBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 2"
        ],
        tags: ["math", "array", "function", "beginner"]
      },
      meta: {
        archived: false,
        hash: "b6ccebafe03f65d47a1e6036043ea279a540e7056a5cc4a0917e007bc2a0e460"
      }
    },
    {
      id: "minN",
      type: "snippet",
      attributes: {
        fileName: "minN.md",
        text:
          "Returns the `n` minimum elements from the provided array. If `n` is greater than or equal to the provided array's length, then return the original array(sorted in ascending order).\n\nUse `Array.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in ascending order.\nUse `Array.slice()` to get the specified number of elements.\nOmit the second argument, `n`, to get a one-element array.",
        codeBlocks: [
          "const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);",
          "minN([1, 2, 3]); // [1]\nminN([1, 2, 3], 2); // [1,2]"
        ],
        tags: ["array", "math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "f780a2df19c5fc40d2663314d2a7a7244971aa76f0efb6d73b64fab055fafdb7"
      }
    },
    {
      id: "mostPerformant",
      type: "snippet",
      attributes: {
        fileName: "mostPerformant.md",
        text:
          "Returns the index of the function in an array of functions which executed the fastest.\n\nUse `Array.map()` to generate an array where each value is the total time taken to execute the function after `iterations` times. Use the difference in `performance.now()` values before and after to get the total time in milliseconds to a high degree of accuracy.\nUse `Math.min()` to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function. \nOmit the second argument, `iterations`, to use a default of 10,000 iterations. The more iterations, the more reliable the result but the longer it will take.",
        codeBlocks: [
          "const mostPerformant = (fns, iterations = 10000) => {\n  const times = fns.map(fn => {\n    const before = performance.now();\n    for (let i = 0; i < iterations; i++) fn();\n    return performance.now() - before;\n  });\n  return times.indexOf(Math.min(...times));\n};",
          "mostPerformant([\n  () => {\n    // Loops through the entire array before returning `false`\n    [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');\n  },\n  () => {\n    // Only needs to reach index `1` before returning false\n    [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');\n  }\n]); // 1"
        ],
        tags: ["utility", "function"]
      },
      meta: {
        archived: false,
        hash: "741dc61327ac90180fbc751011539c34c25e8ed70740cf4033a3acddee573530"
      }
    },
    {
      id: "negate",
      type: "snippet",
      attributes: {
        fileName: "negate.md",
        text:
          "Negates a predicate function.\n\nTake a predicate function and apply the not operator (`!`) to it with its arguments.",
        codeBlocks: [
          "const negate = func => (...args) => !func(...args);",
          "[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]"
        ],
        tags: ["function", "beginner"]
      },
      meta: {
        archived: false,
        hash: "7cc8011d1cb158b7371144dff98b6243752e862d9dc3786caac77e50539060ed"
      }
    },
    {
      id: "nest",
      type: "snippet",
      attributes: {
        fileName: "nest.md",
        text:
          "Given a flat array of objects linked to one another, it will nest them recursively.\nUseful for nesting comments, such as the ones on reddit.com.\n\nUse recursion. \nUse `Array.filter()` to filter the items where the `id` matches the `link`, then `Array.map()` to map each one to a new object that has a `children` property which recursively nests the items based on which ones are children of the current item. \nOmit the second argument, `id`, to default to `null` which indicates the object is not linked to another one (i.e. it is a top level object). \nOmit the third argument, `link`, to use `'parent_id'` as the default property which links the object to another one by its `id`.",
        codeBlocks: [
          "const nest = (items, id = null, link = 'parent_id') =>\n  items\n    .filter(item => item[link] === id)\n    .map(item => ({ ...item, children: nest(items, item.id) }));",
          "// One top level comment\nconst comments = [\n  { id: 1, parent_id: null },\n  { id: 2, parent_id: 1 },\n  { id: 3, parent_id: 1 },\n  { id: 4, parent_id: 2 },\n  { id: 5, parent_id: 4 }\n];\nconst nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]"
        ],
        tags: ["object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "923043e5861c743a77b182f90ad810f57b866d14470ac0337435287768ee2919"
      }
    },
    {
      id: "nodeListToArray",
      type: "snippet",
      attributes: {
        fileName: "nodeListToArray.md",
        text:
          "Converts a `NodeList` to an array.\n\nUse spread operator inside new array to convert a `NodeList` to an array.",
        codeBlocks: [
          "const nodeListToArray = nodeList => [...nodeList];",
          "nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]"
        ],
        tags: ["browser", "array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "50e0b97be1cc2256f34991c379bae0bba8c99db160dcd5842112752074de92ec"
      }
    },
    {
      id: "none",
      type: "snippet",
      attributes: {
        fileName: "none.md",
        text:
          "Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.\n\nUse `Array.some()` to test if any elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default.",
        codeBlocks: [
          "const none = (arr, fn = Boolean) => !arr.some(fn);",
          "none([0, 1, 3, 0], x => x == 2); // true\nnone([0, 0, 0]); // true"
        ],
        tags: ["array", "function", "beginner"]
      },
      meta: {
        archived: false,
        hash: "84dab3ab837bb27a0470097336a8f0c843052e722dbb7af86895dc5e588d2137"
      }
    },
    {
      id: "nthArg",
      type: "snippet",
      attributes: {
        fileName: "nthArg.md",
        text:
          "Creates a function that gets the argument at index `n`. If `n` is negative, the nth argument from the end is returned.\n\nUse `Array.slice()` to get the desired argument at index `n`.",
        codeBlocks: [
          "const nthArg = n => (...args) => args.slice(n)[0];",
          "const third = nthArg(2);\nthird(1, 2, 3); // 3\nthird(1, 2); // undefined\nconst last = nthArg(-1);\nlast(1, 2, 3, 4, 5); // 5"
        ],
        tags: ["utility", "function", "beginner"]
      },
      meta: {
        archived: false,
        hash: "3cf559381bdbb30631347fa1e02c5552c47963737da6737455992f6fb39652af"
      }
    },
    {
      id: "nthElement",
      type: "snippet",
      attributes: {
        fileName: "nthElement.md",
        text:
          "Returns the nth element of an array.\n\nUse `Array.slice()` to get an array containing the nth element at the first place.\nIf the index is out of bounds, return `undefined`.\nOmit the second argument, `n`, to get the first element of the array.",
        codeBlocks: [
          "const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];",
          "nthElement(['a', 'b', 'c'], 1); // 'b'\nnthElement(['a', 'b', 'b'], -3); // 'a'"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "94f23b748d064fc620e820b9f858e0b191c68be84c9af6d8740fe48618005870"
      }
    },
    {
      id: "objectFromPairs",
      type: "snippet",
      attributes: {
        fileName: "objectFromPairs.md",
        text:
          "Creates an object from the given key-value pairs.\n\nUse `Array.reduce()` to create and combine key-value pairs.",
        codeBlocks: [
          "const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});",
          "objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}"
        ],
        tags: ["object", "array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "5dac82c5ca1e0d36ddc13bd1d3e643676c271f86eebf8aa4fb1afb382e07e771"
      }
    },
    {
      id: "objectToPairs",
      type: "snippet",
      attributes: {
        fileName: "objectToPairs.md",
        text:
          "Creates an array of key-value pair arrays from an object.\n\nUse `Object.keys()` and `Array.map()` to iterate over the object's keys and produce an array with key-value pairs.",
        codeBlocks: [
          "const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);",
          "objectToPairs({ a: 1, b: 2 }); // [['a',1],['b',2]]"
        ],
        tags: ["object", "array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "9d0834d532c92f02e06428a693600b65c293803175398d0d2549bf965dbc3b0a"
      }
    },
    {
      id: "observeMutations",
      type: "snippet",
      attributes: {
        fileName: "observeMutations.md",
        text:
          "Returns a new MutationObserver and runs the provided callback for each mutation on the specified element.\n\nUse a [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to observe mutations on the given element.\nUse `Array.forEach()` to run the callback for each mutation that is observed.\nOmit the third argument, `options`, to use the default [options](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit) (all `true`).",
        codeBlocks: [
          "const observeMutations = (element, callback, options) => {\n  const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));\n  observer.observe(\n    element,\n    Object.assign(\n      {\n        childList: true,\n        attributes: true,\n        attributeOldValue: true,\n        characterData: true,\n        characterDataOldValue: true,\n        subtree: true\n      },\n      options\n    )\n  );\n  return observer;\n};",
          "const obs = observeMutations(document, console.log); // Logs all mutations that happen on the page\nobs.disconnect(); // Disconnects the observer and stops logging mutations on the page"
        ],
        tags: ["browser", "event", "advanced"]
      },
      meta: {
        archived: false,
        hash: "184249efedeae899be6f64b8a514f5ecdede5caa73add1973172351e9b129c6b"
      }
    },
    {
      id: "off",
      type: "snippet",
      attributes: {
        fileName: "off.md",
        text:
          "Removes an event listener from an element.\n\nUse `Eventtarget.removeEventListener()` to remove an event listener from an element. \nOmit the fourth argument `opts` to use `false` or specify it based on the options used when the event listener was added.",
        codeBlocks: [
          "const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);",
          "const fn = () => console.log('!');\ndocument.body.addEventListener('click', fn);\noff(document.body, 'click', fn); // no longer logs '!' upon clicking on the page"
        ],
        tags: ["browser", "event", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "875854e1205203c8e8bff08adbf474ff88cbca4d33d49cb68417a72620096171"
      }
    },
    {
      id: "offset",
      type: "snippet",
      attributes: {
        fileName: "offset.md",
        text:
          "Moves the specified amount of elements to the end of the array.\n\nUse `Array.slice()` twice to get the elements after the specified index and the elements before that.\nUse the spread operator(`...`) to combine the two into one array.\nIf `offset` is negative, the elements will be moved from end to start.",
        codeBlocks: [
          "const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];",
          "offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]\noffset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "ac3331392815f5a6496304df0d9b25aca464dd3b1cb5d01396c233b5f179f722"
      }
    },
    {
      id: "omit",
      type: "snippet",
      attributes: {
        fileName: "omit.md",
        text:
          "Omits the key-value pairs corresponding to the given keys from an object.\n\nUse `Object.keys(obj)`, `Array.filter()` and `Array.includes()` to remove the provided keys.\nUse `Array.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.",
        codeBlocks: [
          "const omit = (obj, arr) =>\n  Object.keys(obj)\n    .filter(k => !arr.includes(k))\n    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});",
          "omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }"
        ],
        tags: ["object", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "047964b4409ac519c62909c0ca6f50b4db18bdf3cfb9bfc645d43e6438858b99"
      }
    },
    {
      id: "omitBy",
      type: "snippet",
      attributes: {
        fileName: "omitBy.md",
        text:
          "Creates an object composed of the properties the given function returns falsey for. The function is invoked with two arguments: (value, key).\n\nUse `Object.keys(obj)` and `Array.filter()`to remove the keys for which `fn` returns a truthy value.\nUse `Array.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.",
        codeBlocks: [
          "const omitBy = (obj, fn) =>\n  Object.keys(obj)\n    .filter(k => !fn(obj[k], k))\n    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});",
          "omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }"
        ],
        tags: ["object", "array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "c9087e8945c10e2e0cc951fc9e2bcd62316347aebb0e127bc7f6c6dbf52cd11c"
      }
    },
    {
      id: "on",
      type: "snippet",
      attributes: {
        fileName: "on.md",
        text:
          "Adds an event listener to an element with the ability to use event delegation.\n\nUse `Eventtarget.addEventListener()` to add an event listener to an element. If there is a `target` property supplied to the options object, ensure the event target matches the target specified and then invoke the callback by supplying the correct `this` context.\nReturns a reference to the custom delegator function, in order to be possible to use with [`off`](#off).\nOmit `opts` to default to non-delegation behavior and event bubbling.",
        codeBlocks: [
          "const on = (el, evt, fn, opts = {}) => {\n  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);\n  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);\n  if (opts.target) return delegatorFn;\n};",
          "const fn = () => console.log('!');\non(document.body, 'click', fn); // logs '!' upon clicking the body\non(document.body, 'click', fn, { target: 'p' }); // logs '!' upon clicking a `p` element child of the body\non(document.body, 'click', fn, { options: true }); // use capturing instead of bubbling"
        ],
        tags: ["browser", "event", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "9baea961cebb81bcaec83515bc98ca1e77affc03b2550c88e5d559973025d3d7"
      }
    },
    {
      id: "once",
      type: "snippet",
      attributes: {
        fileName: "once.md",
        text:
          "Ensures a function is called only once.\n\nUtilizing a closure, use a flag, `called`, and set it to `true` once the function is called for the first time, preventing it from being called again. In order to allow the function to have its `this` context changed (such as in an event listener), the `function` keyword must be used, and the supplied function must have the context applied.\nAllow the function to be supplied with an arbitrary number of arguments using the rest/spread (`...`) operator.",
        codeBlocks: [
          "const once = fn => {\n  let called = false;\n  return function(...args) {\n    if (called) return;\n    called = true;\n    return fn.apply(this, args);\n  };\n};",
          "const startApp = function(event) {\n  console.log(this, event); // document.body, MouseEvent\n};\ndocument.body.addEventListener('click', once(startApp)); // only runs `startApp` once upon click"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "66051661cb13aa6295a539dda924cb6d55964fc0a438448414decaadbcc64637"
      }
    },
    {
      id: "onUserInputChange",
      type: "snippet",
      attributes: {
        fileName: "onUserInputChange.md",
        text:
          "Run the callback whenever the user input type changes (`mouse` or `touch`). Useful for enabling/disabling code depending on the input device. This process is dynamic and works with hybrid devices (e.g. touchscreen laptops).\n\nUse two event listeners. Assume `mouse` input initially and bind a `touchstart` event listener to the document. \nOn `touchstart`, add a `mousemove` event listener to listen for two consecutive `mousemove` events firing within 20ms, using `performance.now()`.\nRun the callback with the input type as an argument in either of these situations.",
        codeBlocks: [
          "const onUserInputChange = callback => {\n  let type = 'mouse',\n    lastTime = 0;\n  const mousemoveHandler = () => {\n    const now = performance.now();\n    if (now - lastTime < 20)\n      (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);\n    lastTime = now;\n  };\n  document.addEventListener('touchstart', () => {\n    if (type === 'touch') return;\n    (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);\n  });\n};",
          "onUserInputChange(type => {\n  console.log('The user is now using', type, 'as an input method.');\n});"
        ],
        tags: ["browser", "event", "advanced"]
      },
      meta: {
        archived: false,
        hash: "f42b7a49b6b92be7da1537a058588818c05d1110150fcad063c4325665a4d4e3"
      }
    },
    {
      id: "orderBy",
      type: "snippet",
      attributes: {
        fileName: "orderBy.md",
        text:
          "Returns a sorted array of objects ordered by properties and orders.\n\nUses `Array.sort()`, `Array.reduce()` on the `props` array with a default value of `0`, use array destructuring to swap the properties position depending on the order passed.\nIf no `orders` array is passed it sort by `'asc'` by default.",
        codeBlocks: [
          "const orderBy = (arr, props, orders) =>\n  [...arr].sort((a, b) =>\n    props.reduce((acc, prop, i) => {\n      if (acc === 0) {\n        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];\n        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;\n      }\n      return acc;\n    }, 0)\n  );",
          "const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];\norderBy(users, ['name', 'age'], ['asc', 'desc']); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]\norderBy(users, ['name', 'age']); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]"
        ],
        tags: ["object", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "22503211c50141af520926b607fb38527e2667ce22de64f07942db9ef2de3ff1"
      }
    },
    {
      id: "over",
      type: "snippet",
      attributes: {
        fileName: "over.md",
        text:
          "Creates a function that invokes each provided function with the arguments it receives and returns the results.\n\nUse `Array.map()` and `Function.apply()` to apply each function to the given arguments.",
        codeBlocks: [
          "const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));",
          "const minMax = over(Math.min, Math.max);\nminMax(1, 2, 3, 4, 5); // [1,5]"
        ],
        tags: ["adapter", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "247a0bbb83498d826178298d52a73ee8720e958e1f8afea599a3727217a45ed6"
      }
    },
    {
      id: "overArgs",
      type: "snippet",
      attributes: {
        fileName: "overArgs.md",
        text:
          "Creates a function that invokes the provided function with its arguments transformed.\n\nUse `Array.map()` to apply `transforms` to `args` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.",
        codeBlocks: [
          "const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));",
          "const square = n => n * n;\nconst double = n => n * 2;\nconst fn = overArgs((x, y) => [x, y], [square, double]);\nfn(9, 3); // [81, 6]"
        ],
        tags: ["adapter", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "af95e891903e7ee7aff4f5cf8254b2ad904086938ae1058482fd599b08824deb"
      }
    },
    {
      id: "pad",
      type: "snippet",
      attributes: {
        fileName: "pad.md",
        text:
          "Pads a string on both sides with the specified character, if it's shorter than the specified length.\n\nUse `String.padStart()` and `String.padEnd()` to pad both sides of the given string.\nOmit the third argument, `char`, to use the whitespace character as the default padding character.",
        codeBlocks: [
          "const pad = (str, length, char = ' ') =>\n  str.padStart((str.length + length) / 2, char).padEnd(length, char);",
          "pad('cat', 8); // '  cat   '\npad(String(42), 6, '0'); // '004200'\npad('foobar', 3); // 'foobar'"
        ],
        tags: ["string", "beginner"]
      },
      meta: {
        archived: false,
        hash: "9a7c678e67831c68d0589a63a2928d4b68e4defa7a015d598dda253710401902"
      }
    },
    {
      id: "palindrome",
      type: "snippet",
      attributes: {
        fileName: "palindrome.md",
        text:
          "Returns `true` if the given string is a palindrome, `false` otherwise.\n\nConvert string `String.toLowerCase()` and use `String.replace()` to remove non-alphanumeric characters from it.\nThen, use the spread operator (`...`) to split string into individual characters, `Array.reverse()`, `String.join('')` and compare to the original, unreversed string, after converting it `String.tolowerCase()`.",
        codeBlocks: [
          "const palindrome = str => {\n  const s = str.toLowerCase().replace(/[\\W_]/g, '');\n  return s === [...s].reverse().join('');\n};",
          "palindrome('taco cat'); // true"
        ],
        tags: ["string", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "f57075c283729a7585935df63d6e7a24c25b16865a28058e0973d42a314dadd9"
      }
    },
    {
      id: "parseCookie",
      type: "snippet",
      attributes: {
        fileName: "parseCookie.md",
        text:
          "Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.\n\nUse `String.split(';')` to separate key-value pairs from each other.\nUse `Array.map()` and `String.split('=')` to separate keys from values in each pair.\nUse `Array.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs.",
        codeBlocks: [
          "const parseCookie = str =>\n  str\n    .split(';')\n    .map(v => v.split('='))\n    .reduce((acc, v) => {\n      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());\n      return acc;\n    }, {});",
          "parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }"
        ],
        tags: ["utility", "string", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "73024d687cf93478ce209b0f0ccc81f5841ca785effdd664d07a31fade8340b3"
      }
    },
    {
      id: "partial",
      type: "snippet",
      attributes: {
        fileName: "partial.md",
        text:
          "Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.\n\nUse the spread operator (`...`) to prepend `partials` to the list of arguments of `fn`.",
        codeBlocks: [
          "const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);",
          "const greet = (greeting, name) => greeting + ' ' + name + '!';\nconst greetHello = partial(greet, 'Hello');\ngreetHello('John'); // 'Hello John!'"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "b57e228d9f4be72f0b54e613db0d03f8f580c79e48cd7ba43673eaac874fd057"
      }
    },
    {
      id: "partialRight",
      type: "snippet",
      attributes: {
        fileName: "partialRight.md",
        text:
          "Creates a function that invokes `fn` with `partials` appended to the arguments it receives.\n\nUse the spread operator (`...`) to append `partials` to the list of arguments of `fn`.",
        codeBlocks: [
          "const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);",
          "const greet = (greeting, name) => greeting + ' ' + name + '!';\nconst greetJohn = partialRight(greet, 'John');\ngreetJohn('Hello'); // 'Hello John!'"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "907872c83c8820b239838c65f4d5174783e372275e85fd96050d9218932325b4"
      }
    },
    {
      id: "partition",
      type: "snippet",
      attributes: {
        fileName: "partition.md",
        text:
          "Groups the elements into two arrays, depending on the provided function's truthiness for each element.\n\nUse `Array.reduce()` to create an array of two arrays.\nUse `Array.push()` to add elements for which `fn` returns `true` to the first array and elements for which `fn` returns `false` to the second one.",
        codeBlocks: [
          "const partition = (arr, fn) =>\n  arr.reduce(\n    (acc, val, i, arr) => {\n      acc[fn(val, i, arr) ? 0 : 1].push(val);\n      return acc;\n    },\n    [[], []]\n  );",
          "const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];\npartition(users, o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]"
        ],
        tags: ["array", "object", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "34b5219f73fd8ec4733a6fe59b9995782c4788b2a33f09acc21c7b925e837c6a"
      }
    },
    {
      id: "percentile",
      type: "snippet",
      attributes: {
        fileName: "percentile.md",
        text:
          "Uses the percentile formula to calculate how many numbers in the given array are less or equal to the given value.\n\nUse `Array.reduce()` to calculate how many numbers are below the value and how many are the same value and apply the percentile formula.",
        codeBlocks: [
          "const percentile = (arr, val) =>\n  (100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;",
          "percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55"
        ],
        tags: ["math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "5d181e4f610b1dd80004f022c7db0162c77fb8be96a7b250f4b9bbbc58287ec3"
      }
    },
    {
      id: "permutations",
      type: "snippet",
      attributes: {
        fileName: "permutations.md",
        text:
          "⚠️ **WARNING**: This function's execution time increases exponentially with each array element. Anything more than 8 to 10 entries will cause your browser to hang as it tries to solve all the different combinations.\n\nGenerates all permutations of an array's elements (contains duplicates).\n\nUse recursion.\nFor each element in the given array, create all the partial permutations for the rest of its elements.\nUse `Array.map()` to combine the element with each partial permutation, then `Array.reduce()` to combine all permutations in one array.\nBase cases are for array `length` equal to `2` or `1`.",
        codeBlocks: [
          "const permutations = arr => {\n  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;\n  return arr.reduce(\n    (acc, item, i) =>\n      acc.concat(\n        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])\n      ),\n    []\n  );\n};",
          "permutations([1, 33, 5]); // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 1, 5 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]"
        ],
        tags: ["array", "recursion", "advanced"]
      },
      meta: {
        archived: false,
        hash: "81aa651d55dd837cf9e2f39185fd5b1594c180eb80a6dd4fbab884e393fb3b6b"
      }
    },
    {
      id: "pick",
      type: "snippet",
      attributes: {
        fileName: "pick.md",
        text:
          "Picks the key-value pairs corresponding to the given keys from an object.\n\nUse `Array.reduce()` to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.",
        codeBlocks: [
          "const pick = (obj, arr) =>\n  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});",
          "pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }"
        ],
        tags: ["object", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "6d0f02cf40092134297d3ffc37a91bacc72f320b17740aed41b53241c5f7eace"
      }
    },
    {
      id: "pickBy",
      type: "snippet",
      attributes: {
        fileName: "pickBy.md",
        text:
          "Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).\n\nUse `Object.keys(obj)` and `Array.filter()`to remove the keys for which `fn` returns a falsey value.\nUse `Array.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.",
        codeBlocks: [
          "const pickBy = (obj, fn) =>\n  Object.keys(obj)\n    .filter(k => fn(obj[k], k))\n    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});",
          "pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { 'a': 1, 'c': 3 }"
        ],
        tags: ["object", "array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "a40f7c3f340322bd9d951d6ceb90984c279854a728417857c4c0fbb0098c96b3"
      }
    },
    {
      id: "pipeAsyncFunctions",
      type: "snippet",
      attributes: {
        fileName: "pipeAsyncFunctions.md",
        text:
          "Performs left-to-right function composition for asynchronous functions.\n\nUse `Array.reduce()` with the spread operator (`...`) to perform left-to-right function composition using `Promise.then()`.\nThe functions can return a combination of: simple values, `Promise`'s, or they can be defined as `async` ones returning through `await`.\nAll functions must be unary.",
        codeBlocks: [
          "const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));",
          "const sum = pipeAsyncFunctions(\n  x => x + 1,\n  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),\n  x => x + 3,\n  async x => (await x) + 4\n);\n(async () => {\n  console.log(await sum(5)); // 15 (after one second)\n})();"
        ],
        tags: ["adapter", "function", "promise", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "23257e36931b9d7dea6102e9cc92c4735be4dd5725d8bfa55200b84aeb08c134"
      }
    },
    {
      id: "pipeFunctions",
      type: "snippet",
      attributes: {
        fileName: "pipeFunctions.md",
        text:
          "Performs left-to-right function composition.\n\nUse `Array.reduce()` with the spread operator (`...`) to perform left-to-right function composition.\nThe first (leftmost) function can accept one or more arguments; the remaining functions must be unary.",
        codeBlocks: [
          "const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));",
          "const add5 = x => x + 5;\nconst multiply = (x, y) => x * y;\nconst multiplyAndAdd5 = pipeFunctions(multiply, add5);\nmultiplyAndAdd5(5, 2); // 15"
        ],
        tags: ["adapter", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "ab0f2bb919fa16a54af9bbef603aafb02415db196df198f50d4f2b02b627600f"
      }
    },
    {
      id: "pluralize",
      type: "snippet",
      attributes: {
        fileName: "pluralize.md",
        text:
          "Returns the singular or plural form of the word based on the input number. If the first argument is an `object`, it will use a closure by returning a function that can auto-pluralize words that don't simply end in `s` if the supplied dictionary contains the word.\n\nIf `num` is either `-1` or `1`, return the singular form of the word. If `num` is any other number, return the plural form. Omit the third argument to use the default of the singular word + `s`, or supply a custom pluralized word when necessary. If the first argument is an `object`, utilize a closure by returning a function which can use the supplied dictionary to resolve the correct plural form of the word.",
        codeBlocks: [
          "const pluralize = (val, word, plural = word + 's') => {\n  const _pluralize = (num, word, plural = word + 's') =>\n    [1, -1].includes(Number(num)) ? word : plural;\n  if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);\n  return _pluralize(val, word, plural);\n};",
          "pluralize(0, 'apple'); // 'apples'\npluralize(1, 'apple'); // 'apple'\npluralize(2, 'apple'); // 'apples'\npluralize(2, 'person', 'people'); // 'people'\n\nconst PLURALS = {\n  person: 'people',\n  radius: 'radii'\n};\nconst autoPluralize = pluralize(PLURALS);\nautoPluralize(2, 'person'); // 'people'"
        ],
        tags: ["string", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "9270afe4dfddee1974a2535ea2625e6130c41cbb890784ca837dd34df4efd030"
      }
    },
    {
      id: "powerset",
      type: "snippet",
      attributes: {
        fileName: "powerset.md",
        text:
          "Returns the powerset of a given array of numbers.\n\nUse `Array.reduce()` combined with `Array.map()` to iterate over elements and combine into an array containing all combinations.",
        codeBlocks: [
          "const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);",
          "powerset([1, 2]); // [[], [1], [2], [2,1]]"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "17fa313ab2e105ddcf0ca9b557534a5f84ce79187f33ae1aadb7ce4bf2f1e606"
      }
    },
    {
      id: "prefix",
      type: "snippet",
      attributes: {
        fileName: "prefix.md",
        text:
          "Returns the prefixed version (if necessary) of a CSS property that the browser supports.\n\nUse `Array.findIndex()` on an array of vendor prefix strings to test if `document.body` has one of them defined in its `CSSStyleDeclaration` object, otherwise return `null`. \nUse `String.charAt()` and `String.toUpperCase()` to capitalize the property, which will be appended to the vendor prefix string.",
        codeBlocks: [
          "const prefix = prop => {\n  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);\n  const prefixes = ['', 'webkit', 'moz', 'ms', 'o'];\n  const i = prefixes.findIndex(\n    prefix => typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !== 'undefined'\n  );\n  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;\n};",
          "prefix('appearance'); // 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'"
        ],
        tags: ["browser", "utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "a529eb02a24025131ea7efa345a07d66186a8bddc0b94e298031631144a651e8"
      }
    },
    {
      id: "prettyBytes",
      type: "snippet",
      attributes: {
        fileName: "prettyBytes.md",
        text:
          "Converts a number in bytes to a human-readable string.\n\nUse an array dictionary of units to be accessed based on the exponent.\nUse `Number.toPrecision()` to truncate the number to a certain number of digits.\nReturn the prettified string by building it up, taking into account the supplied options and whether it is negative or not.\nOmit the second argument, `precision`, to use a default precision of `3` digits.\nOmit the third argument, `addSpace`, to add space between the number and unit by default.",
        codeBlocks: [
          "const prettyBytes = (num, precision = 3, addSpace = true) => {\n  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];\n  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);\n  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));\n  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];\n};",
          'prettyBytes(1000); // "1 KB"\nprettyBytes(-27145424323.5821, 5); // "-27.145 GB"\nprettyBytes(123456789, 3, false); // "123MB"'
        ],
        tags: ["utility", "string", "math", "advanced"]
      },
      meta: {
        archived: false,
        hash: "5f269ecc2da6d263be94fb94725167f0a2002e1eeb3fd2123ffc9403a2ef2933"
      }
    },
    {
      id: "primes",
      type: "snippet",
      attributes: {
        fileName: "primes.md",
        text:
          "Generates primes up to a given number, using the Sieve of Eratosthenes.\n\nGenerate an array from `2` to the given number. Use `Array.filter()` to filter out the values divisible by any number from `2` to the square root of the provided number.",
        codeBlocks: [
          "const primes = num => {\n  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),\n    sqroot = Math.floor(Math.sqrt(num)),\n    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);\n  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));\n  return arr;\n};",
          "primes(10); // [2,3,5,7]"
        ],
        tags: ["math", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "c330b6020332343dab6980f9a42a85f7871e60da28ddb23b26dd7a60e143519a"
      }
    },
    {
      id: "promisify",
      type: "snippet",
      attributes: {
        fileName: "promisify.md",
        text:
          "Converts an asynchronous function to return a promise.\n\nUse currying to return a function returning a `Promise` that calls the original function.\nUse the `...rest` operator to pass in all the parameters.\n\n*In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)*",
        codeBlocks: [
          "const promisify = func => (...args) =>\n  new Promise((resolve, reject) =>\n    func(...args, (err, result) => (err ? reject(err) : resolve(result)))\n  );",
          "const delay = promisify((d, cb) => setTimeout(cb, d));\ndelay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s"
        ],
        tags: ["adapter", "function", "promise", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "d269b5a8124cd646189075c2679331bbadbb3cd535a1e3135d12f7de46836dda"
      }
    },
    {
      id: "pull",
      type: "snippet",
      attributes: {
        fileName: "pull.md",
        text:
          "Mutates the original array to filter out the values specified.\n\nUse `Array.filter()` and `Array.includes()` to pull out the values that are not needed.\nUse `Array.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.push()` to re-populate it with only the pulled values.\n\n_(For a snippet that does not mutate the original array see [`without`](#without))_",
        codeBlocks: [
          "const pull = (arr, ...args) => {\n  let argState = Array.isArray(args[0]) ? args[0] : args;\n  let pulled = arr.filter((v, i) => !argState.includes(v));\n  arr.length = 0;\n  pulled.forEach(v => arr.push(v));\n};",
          "let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];\npull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "3169f10481f6c589961d19d4c23ba0fc25f104a2cbe299bc9a94e5ab6fd2b384"
      }
    },
    {
      id: "pullAtIndex",
      type: "snippet",
      attributes: {
        fileName: "pullAtIndex.md",
        text:
          "Mutates the original array to filter out the values at the specified indexes.\n\nUse `Array.filter()` and `Array.includes()` to pull out the values that are not needed.\nUse `Array.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.push()` to re-populate it with only the pulled values.\nUse `Array.push()` to keep track of pulled values",
        codeBlocks: [
          "const pullAtIndex = (arr, pullArr) => {\n  let removed = [];\n  let pulled = arr\n    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))\n    .filter((v, i) => !pullArr.includes(i));\n  arr.length = 0;\n  pulled.forEach(v => arr.push(v));\n  return removed;\n};",
          "let myArray = ['a', 'b', 'c', 'd'];\nlet pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]"
        ],
        tags: ["array", "advanced"]
      },
      meta: {
        archived: false,
        hash: "e2aa1ead7e75caf768128d168ec9ebc1972c2f13fd89d28ea74ff3f4c6db31f9"
      }
    },
    {
      id: "pullAtValue",
      type: "snippet",
      attributes: {
        fileName: "pullAtValue.md",
        text:
          "Mutates the original array to filter out the values specified. Returns the removed elements.\n\nUse `Array.filter()` and `Array.includes()` to pull out the values that are not needed.\nUse `Array.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.push()` to re-populate it with only the pulled values.\nUse `Array.push()` to keep track of pulled values",
        codeBlocks: [
          "const pullAtValue = (arr, pullArr) => {\n  let removed = [],\n    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),\n    mutateTo = arr.filter((v, i) => !pullArr.includes(v));\n  arr.length = 0;\n  mutateTo.forEach(v => arr.push(v));\n  return removed;\n};",
          "let myArray = ['a', 'b', 'c', 'd'];\nlet pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]"
        ],
        tags: ["array", "advanced"]
      },
      meta: {
        archived: false,
        hash: "c6826dfdd96e9325603138fa82cf71bb80766a058a163eccb009827d1ef51cb8"
      }
    },
    {
      id: "pullBy",
      type: "snippet",
      attributes: {
        fileName: "pullBy.md",
        text:
          "Mutates the original array to filter out the values specified, based on a given iterator function.\n\nCheck if the last argument provided in a function.\nUse `Array.map()` to apply the iterator function `fn` to all array elements.\nUse `Array.filter()` and `Array.includes()` to pull out the values that are not needed.\nUse `Array.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.push()` to re-populate it with only the pulled values.",
        codeBlocks: [
          "const pullBy = (arr, ...args) => {\n  const length = args.length;\n  let fn = length > 1 ? args[length - 1] : undefined;\n  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;\n  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));\n  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));\n  arr.length = 0;\n  pulled.forEach(v => arr.push(v));\n};",
          "var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];\npullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]"
        ],
        tags: ["array", "function", "advanced"]
      },
      meta: {
        archived: false,
        hash: "b47f00777e924d7f7afa8c879bdf1e84ff74f8b67aca91ade9b86444b658a336"
      }
    },
    {
      id: "radsToDegrees",
      type: "snippet",
      attributes: {
        fileName: "radsToDegrees.md",
        text:
          "Converts an angle from radians to degrees.\n\nUse `Math.PI` and the radian to degree formula to convert the angle from radians to degrees.",
        codeBlocks: [
          "const radsToDegrees = rad => (rad * 180.0) / Math.PI;",
          "radsToDegrees(Math.PI / 2); // 90"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "b749df623cb50779135ffb38d968cc58d9a8d5d1eadeacfa1d9eec43641c8e9e"
      }
    },
    {
      id: "randomHexColorCode",
      type: "snippet",
      attributes: {
        fileName: "randomHexColorCode.md",
        text:
          "Generates a random hexadecimal color code.\n\nUse `Math.random` to generate a random 24-bit(6x4bits) hexadecimal number. Use bit shifting and then convert it to an hexadecimal String using `toString(16)`.",
        codeBlocks: [
          "const randomHexColorCode = () => {\n  let n = (Math.random() * 0xfffff * 1000000).toString(16);\n  return '#' + n.slice(0, 6);\n};",
          'randomHexColorCode(); // "#e34155"'
        ],
        tags: ["utility", "random", "beginner"]
      },
      meta: {
        archived: false,
        hash: "038ef05a24294c7bb16d04d465628066418099465e99c020a21d073372ebe0cc"
      }
    },
    {
      id: "randomIntArrayInRange",
      type: "snippet",
      attributes: {
        fileName: "randomIntArrayInRange.md",
        text:
          "Returns an array of n random integers in the specified range.\n\nUse `Array.from()` to create an empty array of the specific length, `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.",
        codeBlocks: [
          "const randomIntArrayInRange = (min, max, n = 1) =>\n  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);",
          "randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]"
        ],
        tags: ["math", "utility", "random", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "f5c5c857e9d57ef7c22734163098e058d050ad0a9e3f28c57b307695ee982514"
      }
    },
    {
      id: "randomIntegerInRange",
      type: "snippet",
      attributes: {
        fileName: "randomIntegerInRange.md",
        text:
          "Returns a random integer in the specified range.\n\nUse `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.",
        codeBlocks: [
          "const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;",
          "randomIntegerInRange(0, 5); // 2"
        ],
        tags: ["math", "utility", "random", "beginner"]
      },
      meta: {
        archived: false,
        hash: "791ff20ffbb7736f586cafa1106f6e77e8e89d497bc8a479c0a0cd708fb907ce"
      }
    },
    {
      id: "randomNumberInRange",
      type: "snippet",
      attributes: {
        fileName: "randomNumberInRange.md",
        text:
          "Returns a random number in the specified range.\n\nUse `Math.random()` to generate a random value, map it to the desired range using multiplication.",
        codeBlocks: [
          "const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;",
          "randomNumberInRange(2, 10); // 6.0211363285087005"
        ],
        tags: ["math", "utility", "random", "beginner"]
      },
      meta: {
        archived: false,
        hash: "0ebc2c972fac7d4a8438188025158e0f75456b3787ecf2faae9d3db8d12ee677"
      }
    },
    {
      id: "readFileLines",
      type: "snippet",
      attributes: {
        fileName: "readFileLines.md",
        text:
          "Returns an array of lines from the specified file.\n\nUse `readFileSync` function in `fs` node package to create a `Buffer` from a file.\nconvert buffer to string using `toString(encoding)` function.\ncreating an array from contents of file by `split`ing file content line by line (each `\\n`).",
        codeBlocks: [
          "const fs = require('fs');\nconst readFileLines = filename =>\n  fs\n    .readFileSync(filename)\n    .toString('UTF8')\n    .split('\\n');",
          "/*\ncontents of test.txt :\n  line1\n  line2\n  line3\n  ___________________________\n*/\nlet arr = readFileLines('test.txt');\nconsole.log(arr); // ['line1', 'line2', 'line3']"
        ],
        tags: ["node", "array", "string", "beginner"]
      },
      meta: {
        archived: false,
        hash: "8463ee2c8b3e9165b105ee90b59e143a4f1c8b60f8080770d94ec0bbcb455bb6"
      }
    },
    {
      id: "rearg",
      type: "snippet",
      attributes: {
        fileName: "rearg.md",
        text:
          "Creates a function that invokes the provided function with its arguments arranged according to the specified indexes.\n\nUse `Array.map()` to reorder arguments based on `indexes` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.",
        codeBlocks: [
          "const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));",
          "var rearged = rearg(\n  function(a, b, c) {\n    return [a, b, c];\n  },\n  [2, 0, 1]\n);\nrearged('b', 'c', 'a'); // ['a', 'b', 'c']"
        ],
        tags: ["adapter", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "ed859f031cdc8a778bcec23817f79dab36f7607424fedda33d8d997172404de1"
      }
    },
    {
      id: "recordAnimationFrames",
      type: "snippet",
      attributes: {
        fileName: "recordAnimationFrames.md",
        text:
          "Invokes the provided callback on each animation frame.\n\nUse recursion. \nProvided that `running` is `true`, continue invoking `window.requestAnimationFrame()` which invokes the provided callback. \nReturn an object with two methods `start` and `stop` to allow manual control of the recording. \nOmit the second argument, `autoStart`, to implicitly call `start` when the function is invoked.",
        codeBlocks: [
          "const recordAnimationFrames = (callback, autoStart = true) => {\n  let running = true,\n    raf;\n  const stop = () => {\n    running = false;\n    cancelAnimationFrame(raf);\n  };\n  const start = () => {\n    running = true;\n    run();\n  };\n  const run = () => {\n    raf = requestAnimationFrame(() => {\n      callback();\n      if (running) run();\n    });\n  };\n  if (autoStart) start();\n  return { start, stop };\n};",
          "const cb = () => console.log('Animation frame fired');\nconst recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame\nrecorder.stop(); // stops logging\nrecorder.start(); // starts again\nconst recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames"
        ],
        tags: ["browser", "utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "461445d77d76f9f3bc05c2bc534cfb551689a99b1b73995ba7f4066a38c60fc7"
      }
    },
    {
      id: "redirect",
      type: "snippet",
      attributes: {
        fileName: "redirect.md",
        text:
          "Redirects to a specified URL.\n\nUse `window.location.href` or `window.location.replace()` to redirect to `url`.\nPass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).",
        codeBlocks: [
          "const redirect = (url, asLink = true) =>\n  asLink ? (window.location.href = url) : window.location.replace(url);",
          "redirect('https://google.com');"
        ],
        tags: ["browser", "url", "beginner"]
      },
      meta: {
        archived: false,
        hash: "dba349eee909dff1e13e6708ac067e1e7e776ff5862e79097aca630548846ed6"
      }
    },
    {
      id: "reducedFilter",
      type: "snippet",
      attributes: {
        fileName: "reducedFilter.md",
        text:
          "Filter an array of objects based on a condition while also filtering out unspecified keys.\n\nUse `Array.filter()` to filter the array based on the predicate `fn` so that it returns the objects for which the condition returned a truthy value. \nOn the filtered array, use `Array.map()` to return the new object using `Array.reduce()` to filter out the keys which were not supplied as the `keys` argument.",
        codeBlocks: [
          "const reducedFilter = (data, keys, fn) =>\n  data.filter(fn).map(el =>\n    keys.reduce((acc, key) => {\n      acc[key] = el[key];\n      return acc;\n    }, {})\n  );",
          "const data = [\n  {\n    id: 1,\n    name: 'john',\n    age: 24\n  },\n  {\n    id: 2,\n    name: 'mike',\n    age: 50\n  }\n];\n\nreducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "1ff03e381cda89ab13128f4df776de43967f09470520ad8e850cea8d7284dafc"
      }
    },
    {
      id: "reduceSuccessive",
      type: "snippet",
      attributes: {
        fileName: "reduceSuccessive.md",
        text:
          "Applies a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.\n\nUse `Array.reduce()` to apply the given function to the given array, storing each new result.",
        codeBlocks: [
          "const reduceSuccessive = (arr, fn, acc) =>\n  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);",
          "reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0); // [0, 1, 3, 6, 10, 15, 21]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "1953f4b4dd3e22e6c17c40dd0f34269662b10bd8610f19b0bc5b428d810c42a6"
      }
    },
    {
      id: "reduceWhich",
      type: "snippet",
      attributes: {
        fileName: "reduceWhich.md",
        text:
          "Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.\n\nUse `Array.reduce()` in combination with the `comparator` function to get the appropriate element in the array.\nYou can omit the second parameter, `comparator`, to use the default one that returns the minimum element in the array.",
        codeBlocks: [
          "const reduceWhich = (arr, comparator = (a, b) => a - b) =>\n  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));",
          "reduceWhich([1, 3, 2]); // 1\nreduceWhich([1, 3, 2], (a, b) => b - a); // 3\nreduceWhich(\n  [{ name: 'Tom', age: 12 }, { name: 'Jack', age: 18 }, { name: 'Lucy', age: 9 }],\n  (a, b) => a.age - b.age\n); // {name: \"Lucy\", age: 9}"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "1f27b4d91e5f0141d4c2c712ac04d7633f759426e2703eba5627782e563b300d"
      }
    },
    {
      id: "reject",
      type: "snippet",
      attributes: {
        fileName: "reject.md",
        text:
          "Takes a predicate and array, like `Array.filter()`, but only keeps `x` if `pred(x) === false`.",
        codeBlocks: [
          "const reject = (pred, array) => array.filter((...args) => !pred(...args));",
          "reject(x => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]\nreject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']); // ['Pear', 'Kiwi']"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "34e33d53f3671741d428581c1915599dca98524ee5dee0d45567e8b817ca28f4"
      }
    },
    {
      id: "remove",
      type: "snippet",
      attributes: {
        fileName: "remove.md",
        text:
          "Removes elements from an array for which the given function returns `false`.\n\nUse `Array.filter()` to find array elements that return truthy values and `Array.reduce()` to remove elements using `Array.splice()`.\nThe `func` is invoked with three arguments (`value, index, array`).",
        codeBlocks: [
          "const remove = (arr, func) =>\n  Array.isArray(arr)\n    ? arr.filter(func).reduce((acc, val) => {\n        arr.splice(arr.indexOf(val), 1);\n        return acc.concat(val);\n      }, [])\n    : [];",
          "remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "baf94ec265ffb8bd14950cb76022a483f6d6a0a1f840fea7774ac40db1fb237e"
      }
    },
    {
      id: "removeNonASCII",
      type: "snippet",
      attributes: {
        fileName: "removeNonASCII.md",
        text:
          "Removes non-printable ASCII characters.\n\nUse a regular expression to remove non-printable ASCII characters.",
        codeBlocks: [
          "const removeNonASCII = str => str.replace(/[^\\x20-\\x7E]/g, '');",
          "removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'"
        ],
        tags: ["string", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "00483703389f0ba2b0ed4bdb8ef9f68e4de1a19b209655d85e4fcef0a16a660c"
      }
    },
    {
      id: "renameKeys",
      type: "snippet",
      attributes: {
        fileName: "renameKeys.md",
        text:
          "Replaces the names of multiple object keys with the values provided.\n\nUse `Object.keys()` in combination with `Array.reduce()` and the spread operator (`...`) to get the object's keys and rename them according to `keysMap`.",
        codeBlocks: [
          "const renameKeys = (keysMap, obj) =>\n  Object.keys(obj).reduce(\n    (acc, key) => ({\n      ...acc,\n      ...{ [keysMap[key] || key]: obj[key] }\n    }),\n    {}\n  );",
          "const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };\nrenameKeys({ name: 'firstName', job: 'passion' }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }"
        ],
        tags: ["object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "082d9c8f508ca5870d652e905bf9556d2ffa6681f5342edd807a596393ed6a3a"
      }
    },
    {
      id: "reverseString",
      type: "snippet",
      attributes: {
        fileName: "reverseString.md",
        text:
          "Reverses a string.\n\nUse the spread operator (`...`) and `Array.reverse()` to reverse the order of the characters in the string.\nCombine characters to get a string using `String.join('')`.",
        codeBlocks: [
          "const reverseString = str => [...str].reverse().join('');",
          "reverseString('foobar'); // 'raboof'"
        ],
        tags: ["string", "array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "7f3ec1d135d7ab73d9f83d89e03945302dc08746037d132f7ce753f923c7e242"
      }
    },
    {
      id: "RGBToHex",
      type: "snippet",
      attributes: {
        fileName: "RGBToHex.md",
        text:
          "Converts the values of RGB components to a color code.\n\nConvert given RGB parameters to hexadecimal string using bitwise left-shift operator (`<<`) and `toString(16)`, then `String.padStart(6,'0')` to get a 6-digit hexadecimal value.",
        codeBlocks: [
          "const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');",
          "RGBToHex(255, 165, 1); // 'ffa501'"
        ],
        tags: ["utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "92e4282492b80dbbd7efa34ae308bcda2c8c6865615e64049bf34dd8eb3f4810"
      }
    },
    {
      id: "round",
      type: "snippet",
      attributes: {
        fileName: "round.md",
        text:
          "Rounds a number to a specified amount of digits.\n\nUse `Math.round()` and template literals to round the number to the specified number of digits.\nOmit the second argument, `decimals` to round to an integer.",
        codeBlocks: [
          "const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);",
          "round(1.005, 2); // 1.01"
        ],
        tags: ["math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "6170ee4eec91a2bf73961a9cc15ce90c48fbf15caf11363c12b3d6478efa48ea"
      }
    },
    {
      id: "runAsync",
      type: "snippet",
      attributes: {
        fileName: "runAsync.md",
        text:
          "Runs a function in a separate thread by using a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), allowing long running functions to not block the UI.\n\nCreate a new `Worker` using a `Blob` object URL, the contents of which should be the stringified version of the supplied function.\nImmediately post the return value of calling the function back.\nReturn a promise, listening for `onmessage` and `onerror` events and resolving the data posted back from the worker, or throwing an error.",
        codeBlocks: [
          "const runAsync = fn => {\n  const worker = new Worker(\n    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {\n      type: 'application/javascript; charset=utf-8'\n    })\n  );\n  return new Promise((res, rej) => {\n    worker.onmessage = ({ data }) => {\n      res(data), worker.terminate();\n    };\n    worker.onerror = err => {\n      rej(err), worker.terminate();\n    };\n  });\n};",
          "const longRunningFunction = () => {\n  let result = 0;\n  for (let i = 0; i < 1000; i++) {\n    for (let j = 0; j < 700; j++) {\n      for (let k = 0; k < 300; k++) {\n        result = result + i + j + k;\n      }\n    }\n  }\n  return result;\n};\n/*\n  NOTE: Since the function is running in a different context, closures are not supported.\n  The function supplied to `runAsync` gets stringified, so everything becomes literal.\n  All variables and functions must be defined inside.\n*/\nrunAsync(longRunningFunction).then(console.log); // 209685000000\nrunAsync(() => 10 ** 3).then(console.log); // 1000\nlet outsideVariable = 50;\nrunAsync(() => typeof outsideVariable).then(console.log); // 'undefined'"
        ],
        tags: ["browser", "function", "advanced", "promise", "url"]
      },
      meta: {
        archived: false,
        hash: "bc05700c2010133ef91894f88b2cfa3bb71fce55d1a54626e262b522d64821dc"
      }
    },
    {
      id: "runPromisesInSeries",
      type: "snippet",
      attributes: {
        fileName: "runPromisesInSeries.md",
        text:
          "Runs an array of promises in series.\n\nUse `Array.reduce()` to create a promise chain, where each promise returns the next promise when resolved.",
        codeBlocks: [
          "const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());",
          "const delay = d => new Promise(r => setTimeout(r, d));\nrunPromisesInSeries([() => delay(1000), () => delay(2000)]); // Executes each promise sequentially, taking a total of 3 seconds to complete"
        ],
        tags: ["function", "promise", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "93cd98db49ec69efe8565f94e1305b4ff7724eaccd9fa58a88ac6474c4f2e74e"
      }
    },
    {
      id: "sample",
      type: "snippet",
      attributes: {
        fileName: "sample.md",
        text:
          "Returns a random element from an array.\n\nUse `Math.random()` to generate a random number, multiply it by `length` and round it of to the nearest whole number using `Math.floor()`.\nThis method also works with strings.",
        codeBlocks: [
          "const sample = arr => arr[Math.floor(Math.random() * arr.length)];",
          "sample([3, 7, 9, 11]); // 9"
        ],
        tags: ["array", "random", "beginner"]
      },
      meta: {
        archived: false,
        hash: "675b72d4bac05f71773ba4d1c1e95e085fed9f7020e2e8edd0e418fb06501d96"
      }
    },
    {
      id: "sampleSize",
      type: "snippet",
      attributes: {
        fileName: "sampleSize.md",
        text:
          "Gets `n` random elements at unique keys from `array` up to the size of `array`.\n\nShuffle the array using the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle).\nUse `Array.slice()` to get the first `n` elements.\nOmit the second argument, `n` to get only one element at random from the array.",
        codeBlocks: [
          "const sampleSize = ([...arr], n = 1) => {\n  let m = arr.length;\n  while (m) {\n    const i = Math.floor(Math.random() * m--);\n    [arr[m], arr[i]] = [arr[i], arr[m]];\n  }\n  return arr.slice(0, n);\n};",
          "sampleSize([1, 2, 3], 2); // [3,1]\nsampleSize([1, 2, 3], 4); // [2,3,1]"
        ],
        tags: ["array", "random", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "b05cc00e600b631b56453969afe18d84e0ee7e27c523f22e00c7c81f5e9b6e84"
      }
    },
    {
      id: "scrollToTop",
      type: "snippet",
      attributes: {
        fileName: "scrollToTop.md",
        text:
          "Smooth-scrolls to the top of the page.\n\nGet distance from top using `document.documentElement.scrollTop` or `document.body.scrollTop`.\nScroll by a fraction of the distance from the top. Use `window.requestAnimationFrame()` to animate the scrolling.",
        codeBlocks: [
          "const scrollToTop = () => {\n  const c = document.documentElement.scrollTop || document.body.scrollTop;\n  if (c > 0) {\n    window.requestAnimationFrame(scrollToTop);\n    window.scrollTo(0, c - c / 8);\n  }\n};",
          "scrollToTop();"
        ],
        tags: ["browser", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "9d097840156322f4316042fe727f6887b9cef948a92ffdbda4c92e0161f3389d"
      }
    },
    {
      id: "sdbm",
      type: "snippet",
      attributes: {
        fileName: "sdbm.md",
        text:
          "Hashes the input string into a whole number.\n\nUse `String.split('')` and `Array.reduce()` to create a hash of the input string, utilizing bit shifting.",
        codeBlocks: [
          "const sdbm = str => {\n  let arr = str.split('');\n  return arr.reduce(\n    (hashCode, currentVal) =>\n      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),\n    0\n  );\n};",
          "sdbm('name'); // -3521204949"
        ],
        tags: ["math", "utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "acbcb526b3937b1d17e6736f361d8ed444311882f47b0895f3e966695bdde67a"
      }
    },
    {
      id: "serializeCookie",
      type: "snippet",
      attributes: {
        fileName: "serializeCookie.md",
        text:
          "Serialize a cookie name-value pair into a Set-Cookie header string.\n\nUse template literals and `encodeURIComponent()` to create the appropriate string.",
        codeBlocks: [
          "const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;",
          "serializeCookie('foo', 'bar'); // 'foo=bar'"
        ],
        tags: ["utility", "string", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "a69e2913ccc5c7ca2100de571087a44c14b7ca475154740bace342852357b379"
      }
    },
    {
      id: "setStyle",
      type: "snippet",
      attributes: {
        fileName: "setStyle.md",
        text:
          "Sets the value of a CSS rule for the specified element.\n\nUse `element.style` to set the value of the CSS rule for the specified element to `val`.",
        codeBlocks: [
          "const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);",
          "setStyle(document.querySelector('p'), 'font-size', '20px'); // The first <p> element on the page will have a font-size of 20px"
        ],
        tags: ["browser", "beginner"]
      },
      meta: {
        archived: false,
        hash: "12eb5e821413b38e0e5d19ed1c12b7dcdf47071d1e795e9e72ffb71e693e922b"
      }
    },
    {
      id: "shallowClone",
      type: "snippet",
      attributes: {
        fileName: "shallowClone.md",
        text:
          "Creates a shallow clone of an object.\n\nUse `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.",
        codeBlocks: [
          "const shallowClone = obj => Object.assign({}, obj);",
          "const a = { x: true, y: 1 };\nconst b = shallowClone(a); // a !== b"
        ],
        tags: ["object", "beginner"]
      },
      meta: {
        archived: false,
        hash: "a5a49641c0de1a0a80f192c5be195c448ab0fe0856bba4e1f246fe70af7b5431"
      }
    },
    {
      id: "shank",
      type: "snippet",
      attributes: {
        fileName: "shank.md",
        text:
          "Duplicates Array.prototype.splice, except it returns a new array rather than mutating the original array in place.",
        tags: ["array"]
      }
    },
    {
      id: "show",
      type: "snippet",
      attributes: {
        fileName: "show.md",
        text:
          "Shows all the elements specified.\n\nUse the spread operator (`...`) and `Array.forEach()` to clear the `display` property for each element specified.",
        codeBlocks: [
          "const show = (...el) => [...el].forEach(e => (e.style.display = ''));",
          "show(...document.querySelectorAll('img')); // Shows all <img> elements on the page"
        ],
        tags: ["browser", "css", "beginner"]
      },
      meta: {
        archived: false,
        hash: "c2a9e0ec75d7c2268bf40bd02f7542d294fc2b273ac156e49968f6e77e6b3491"
      }
    },
    {
      id: "shuffle",
      type: "snippet",
      attributes: {
        fileName: "shuffle.md",
        text:
          "Randomizes the order of the values of an array, returning a new array.\n\nUses the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle) to reorder the elements of the array.",
        codeBlocks: [
          "const shuffle = ([...arr]) => {\n  let m = arr.length;\n  while (m) {\n    const i = Math.floor(Math.random() * m--);\n    [arr[m], arr[i]] = [arr[i], arr[m]];\n  }\n  return arr;\n};",
          "const foo = [1, 2, 3];\nshuffle(foo); // [2,3,1], foo = [1,2,3]"
        ],
        tags: ["array", "random", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "0edbf4eb8433058722c7b8ff2aef2a088be5d9e9688fd997617355141a418161"
      }
    },
    {
      id: "similarity",
      type: "snippet",
      attributes: {
        fileName: "similarity.md",
        text:
          "Returns an array of elements that appear in both arrays.\n\nUse `Array.filter()` to remove values that are not part of `values`, determined using `Array.includes()`.",
        codeBlocks: [
          "const similarity = (arr, values) => arr.filter(v => values.includes(v));",
          "similarity([1, 2, 3], [1, 2, 4]); // [1,2]"
        ],
        tags: ["array", "math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "e1b495505ee844027b53e2537560373d9c341bccf6743beb3129e82fe7408131"
      }
    },
    {
      id: "size",
      type: "snippet",
      attributes: {
        fileName: "size.md",
        text:
          "Get size of arrays, objects or strings.\n\nGet type of `val` (`array`, `object` or `string`). \nUse `length` property for arrays.\nUse `length` or `size` value if available or number of keys for objects.\nUse `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.\n\nSplit strings into array of characters with `split('')` and return its length.",
        codeBlocks: [
          "const size = val =>\n  Array.isArray(val)\n    ? val.length\n    : val && typeof val === 'object'\n      ? val.size || val.length || Object.keys(val).length\n      : typeof val === 'string'\n        ? new Blob([val]).size\n        : 0;",
          "size([1, 2, 3, 4, 5]); // 5\nsize('size'); // 4\nsize({ one: 1, two: 2, three: 3 }); // 3"
        ],
        tags: ["object", "array", "string", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "ac93ebf2905bbaeec36266cb011753e11c3895f78771e332c6694e05c62a3535"
      }
    },
    {
      id: "sleep",
      type: "snippet",
      attributes: {
        fileName: "sleep.md",
        text:
          "Delays the execution of an asynchronous function.\n\nDelay executing part of an `async` function, by putting it to sleep, returning a `Promise`.",
        codeBlocks: [
          "const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));",
          "async function sleepyWork() {\n  console.log(\"I'm going to sleep for 1 second.\");\n  await sleep(1000);\n  console.log('I woke up after 1 second.');\n}"
        ],
        tags: ["function", "promise", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "cf97f402b25ec7ffd2b670d4b541093b567334595439167c0c7a5534962ad2a1"
      }
    },
    {
      id: "smoothScroll",
      type: "snippet",
      attributes: {
        fileName: "smoothScroll.md",
        text:
          "Smoothly scrolls the element on which it's called into the visible area of the browser window.\n\nUse `.scrollIntoView` method to scroll the element. \nPass `{ behavior: 'smooth' }` to `.scrollIntoView` so it scrolls smoothly.",
        codeBlocks: [
          "const smoothScroll = element =>\n  document.querySelector(element).scrollIntoView({\n    behavior: 'smooth'\n  });",
          "smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar\nsmoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar"
        ],
        tags: ["browser", "css", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "160e603850eac9489b210f1a3de5486944e23c0f799eb06936c6524af117fd06"
      }
    },
    {
      id: "sortCharactersInString",
      type: "snippet",
      attributes: {
        fileName: "sortCharactersInString.md",
        text:
          "Alphabetically sorts the characters in a string.\n\nUse the spread operator (`...`), `Array.sort()` and  `String.localeCompare()` to sort the characters in `str`, recombine using `String.join('')`.",
        codeBlocks: [
          "const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');",
          "sortCharactersInString('cabbage'); // 'aabbceg'"
        ],
        tags: ["string", "beginner"]
      },
      meta: {
        archived: false,
        hash: "48dcaf1f31d3e112630071392fcb9a8736f3bf198ac28c0683887ba1955d05cd"
      }
    },
    {
      id: "sortedIndex",
      type: "snippet",
      attributes: {
        fileName: "sortedIndex.md",
        text:
          "Returns the lowest index at which value should be inserted into array in order to maintain its sort order.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.findIndex()` to find the appropriate index where the element should be inserted.",
        codeBlocks: [
          "const sortedIndex = (arr, n) => {\n  const isDescending = arr[0] > arr[arr.length - 1];\n  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));\n  return index === -1 ? arr.length : index;\n};",
          "sortedIndex([5, 3, 2, 1], 4); // 1\nsortedIndex([30, 50], 40); // 1"
        ],
        tags: ["array", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "63136a5f7c3ae51bea360baa0b2177f7c8cd5e83eabe48be531507e94ba6ac2a"
      }
    },
    {
      id: "sortedIndexBy",
      type: "snippet",
      attributes: {
        fileName: "sortedIndexBy.md",
        text:
          "Returns the lowest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.findIndex()` to find the appropriate index where the element should be inserted, based on the iterator function `fn`.",
        codeBlocks: [
          "const sortedIndexBy = (arr, n, fn) => {\n  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);\n  const val = fn(n);\n  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));\n  return index === -1 ? arr.length : index;\n};",
          "sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 0"
        ],
        tags: ["array", "math", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "36e338d577b307113b69192c9ee3a64a1fd50967270810dc5eb9f0710cfbbe29"
      }
    },
    {
      id: "sortedLastIndex",
      type: "snippet",
      attributes: {
        fileName: "sortedLastIndex.md",
        text:
          "Returns the highest index at which value should be inserted into array in order to maintain its sort order.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.reverse()` and `Array.findIndex()` to find the appropriate last index where the element should be inserted.",
        codeBlocks: [
          "const sortedLastIndex = (arr, n) => {\n  const isDescending = arr[0] > arr[arr.length - 1];\n  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));\n  return index === -1 ? 0 : arr.length - index;\n};",
          "sortedLastIndex([10, 20, 30, 30, 40], 30); // 4"
        ],
        tags: ["array", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "3b00265cc1c52e964c97fa3b393ad3b4f9eb1c529839d77352582719a396d39c"
      }
    },
    {
      id: "sortedLastIndexBy",
      type: "snippet",
      attributes: {
        fileName: "sortedLastIndexBy.md",
        text:
          "Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.map()` to apply the iterator function to all elements of the array.\nUse `Array.reverse()` and `Array.findIndex()` to find the appropriate last index where the element should be inserted, based on the provided iterator function.",
        codeBlocks: [
          "const sortedLastIndexBy = (arr, n, fn) => {\n  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);\n  const val = fn(n);\n  const index = arr\n    .map(fn)\n    .reverse()\n    .findIndex(el => (isDescending ? val <= el : val >= el));\n  return index === -1 ? 0 : arr.length - index;\n};",
          "sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1"
        ],
        tags: ["array", "math", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "66a8b09b9f50d22778c339a3e71242f802d98bd8ec56bdc2c56e9213c49f9f2b"
      }
    },
    {
      id: "splitLines",
      type: "snippet",
      attributes: {
        fileName: "splitLines.md",
        text:
          "Splits a multiline string into an array of lines.\n\nUse `String.split()` and a regular expression to match line breaks and create an array.",
        codeBlocks: [
          "const splitLines = str => str.split(/\\r?\\n/);",
          "splitLines('This\\nis a\\nmultiline\\nstring.\\n'); // ['This', 'is a', 'multiline', 'string.' , '']"
        ],
        tags: ["string", "beginner"]
      },
      meta: {
        archived: false,
        hash: "fa5d75df025039e77d627019f675c6bb458d340716c44d9692298028750857be"
      }
    },
    {
      id: "spreadOver",
      type: "snippet",
      attributes: {
        fileName: "spreadOver.md",
        text:
          "Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.\r\n\r\nUse closures and the spread operator (`...`) to map the array of arguments to the inputs of the function.",
        codeBlocks: [
          "const spreadOver = fn => argsArr => fn(...argsArr);",
          "const arrayMax = spreadOver(Math.max);\narrayMax([1, 2, 3]); // 3"
        ],
        tags: ["adapter", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "9a79940f01badd37efb5156b8e3d220c85601c99a6908b79fe9508d0cd4d8ff5"
      }
    },
    {
      id: "stableSort",
      type: "snippet",
      attributes: {
        fileName: "stableSort.md",
        text:
          "Performs stable sorting of an array, preserving the initial indexes of items when their values are the same. \nDoes not mutate the original array, but returns a new array instead.\n\nUse `Array.map()` to pair each element of the input array with its corresponding index. \nUse `Array.sort()` and a `compare` function to sort the list, preserving their initial order if the items compared are equal.\nUse `Array.map()` to convert back to the initial array items.",
        codeBlocks: [
          "const stableSort = (arr, compare) =>\n  arr\n    .map((item, index) => ({ item, index }))\n    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)\n    .map(({ item }) => item);",
          "const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst stable = stableSort(arr, () => 0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        ],
        tags: ["array", "sort", "advanced", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "517ae5281131d9360320c187499754b5e45a7251865cce556a7aa614671cd251"
      }
    },
    {
      id: "standardDeviation",
      type: "snippet",
      attributes: {
        fileName: "standardDeviation.md",
        text:
          "Returns the standard deviation of an array of numbers.\n\nUse `Array.reduce()` to calculate the mean, variance and the sum of the variance of the values, the variance of the values, then\ndetermine the standard deviation.\nYou can omit the second argument to get the sample standard deviation or set it to `true` to get the population standard deviation.",
        codeBlocks: [
          "const standardDeviation = (arr, usePopulation = false) => {\n  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;\n  return Math.sqrt(\n    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /\n      (arr.length - (usePopulation ? 0 : 1))\n  );\n};",
          "standardDeviation([10, 2, 38, 23, 38, 23, 21]); // 13.284434142114991 (sample)\nstandardDeviation([10, 2, 38, 23, 38, 23, 21], true); // 12.29899614287479 (population)"
        ],
        tags: ["math", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "610461bbbe050f9ce1bbfbf58f4553bb465b1fd6a14059d9fa266492bb451eda"
      }
    },
    {
      id: "stringPermutations",
      type: "snippet",
      attributes: {
        fileName: "stringPermutations.md",
        text:
          "⚠️ **WARNING**: This function's execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your browser to hang as it tries to solve all the different combinations.\n\nGenerates all permutations of a string (contains duplicates).\n\nUse recursion.\nFor each letter in the given string, create all the partial permutations for the rest of its letters.\nUse `Array.map()` to combine the letter with each partial permutation, then `Array.reduce()` to combine all permutations in one array.\nBase cases are for string `length` equal to `2` or `1`.",
        codeBlocks: [
          "const stringPermutations = str => {\n  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];\n  return str\n    .split('')\n    .reduce(\n      (acc, letter, i) =>\n        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),\n      []\n    );\n};",
          "stringPermutations('abc'); // ['abc','acb','bac','bca','cab','cba']"
        ],
        tags: ["string", "recursion", "advanced"]
      },
      meta: {
        archived: false,
        hash: "46ef6d1d747d34b10276f4ac721c56b1fe9176d69da6437b942d3f2035a473b0"
      }
    },
    {
      id: "stripHTMLTags",
      type: "snippet",
      attributes: {
        fileName: "stripHTMLTags.md",
        text:
          "Removes HTML/XML tags from string.\n\nUse a regular expression to remove HTML/XML tags from a string.",
        codeBlocks: [
          "const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');",
          "stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'"
        ],
        tags: ["string", "utility", "regexp", "beginner"]
      },
      meta: {
        archived: false,
        hash: "a46d835b66eead91516d7c00db7e80bd396a7d410ee8dddb1a79a0aad8666036"
      }
    },
    {
      id: "sum",
      type: "snippet",
      attributes: {
        fileName: "sum.md",
        text:
          "Returns the sum of two or more numbers/arrays.\n\nUse `Array.reduce()` to add each value to an accumulator, initialized with a value of `0`.",
        codeBlocks: [
          "const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);",
          "sum(...[1, 2, 3, 4]); // 10"
        ],
        tags: ["math", "array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "1f18c078a7be8d03ea320ae44b5216206c6fd59b0bd4606368c4752c38d4a09a"
      }
    },
    {
      id: "sumBy",
      type: "snippet",
      attributes: {
        fileName: "sumBy.md",
        text:
          "Returns the sum of an array, after mapping each element to a value using the provided function.\n\nUse `Array.map()` to map each element to the value returned by `fn`, `Array.reduce()` to add each value to an accumulator, initialized with a value of `0`.",
        codeBlocks: [
          "const sumBy = (arr, fn) =>\n  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);",
          "sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 20\nsumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20"
        ],
        tags: ["math", "array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "0ce76ed4d6b2e6da5027e3ae193467472d70c74c1399fcc48c53632cc61e3a29"
      }
    },
    {
      id: "sumPower",
      type: "snippet",
      attributes: {
        fileName: "sumPower.md",
        text:
          "Returns the sum of the powers of all the numbers from `start` to `end` (both inclusive).\n\nUse `Array.fill()` to create an array of all the numbers in the target range, `Array.map()` and the exponent operator (`**`) to raise them to `power` and `Array.reduce()` to add them together.\nOmit the second argument, `power`, to use a default power of `2`.\nOmit the third argument, `start`, to use a default starting value of `1`.",
        codeBlocks: [
          "const sumPower = (end, power = 2, start = 1) =>\n  Array(end + 1 - start)\n    .fill(0)\n    .map((x, i) => (i + start) ** power)\n    .reduce((a, b) => a + b, 0);",
          "sumPower(10); // 385\nsumPower(10, 3); //3025\nsumPower(10, 3, 5); //2925"
        ],
        tags: ["math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "7eb9a2618de13c069bfecdd0a575a8fc2371bc82c416128e119f8d6c262e154d"
      }
    },
    {
      id: "symmetricDifference",
      type: "snippet",
      attributes: {
        fileName: "symmetricDifference.md",
        text:
          "Returns the symmetric difference between two arrays, without filtering out duplicate values.\n\nCreate a `Set` from each array, then use `Array.filter()` on each of them to only keep values not contained in the other.",
        codeBlocks: [
          "const symmetricDifference = (a, b) => {\n  const sA = new Set(a),\n    sB = new Set(b);\n  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];\n};",
          "symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]\nsymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]"
        ],
        tags: ["array", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "476d7ee29bd0750a4c0f428c7e17a612ea50ee002eb865733f8d312b79a0c5a3"
      }
    },
    {
      id: "symmetricDifferenceBy",
      type: "snippet",
      attributes: {
        fileName: "symmetricDifferenceBy.md",
        text:
          "Returns the symmetric difference between two arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to each array's elements, then use `Array.filter()` on each of them to only keep values not contained in the other.",
        codeBlocks: [
          "const symmetricDifferenceBy = (a, b, fn) => {\n  const sA = new Set(a.map(v => fn(v))),\n    sB = new Set(b.map(v => fn(v)));\n  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];\n};",
          "symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "f96bf0b07e98ad829a138e224fad50ceff771b4dd9beac6e10a553805fb33ead"
      }
    },
    {
      id: "symmetricDifferenceWith",
      type: "snippet",
      attributes: {
        fileName: "symmetricDifferenceWith.md",
        text:
          "Returns the symmetric difference between two arrays, using a provided function as a comparator.\n\nUse `Array.filter()` and `Array.findIndex()` to find the appropriate values.",
        codeBlocks: [
          "const symmetricDifferenceWith = (arr, val, comp) => [\n  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),\n  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)\n];",
          "symmetricDifferenceWith(\n  [1, 1.2, 1.5, 3, 0],\n  [1.9, 3, 0, 3.9],\n  (a, b) => Math.round(a) === Math.round(b)\n); // [1, 1.2, 3.9]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "7242f560cae759c6f157a3619ff7333f666bc3fbccf1d538aa2e3c39c5abc671"
      }
    },
    {
      id: "tail",
      type: "snippet",
      attributes: {
        fileName: "tail.md",
        text:
          "Returns all elements in an array except for the first one.\n\nReturn `Array.slice(1)` if the array's `length` is more than `1`, otherwise, return the whole array.",
        codeBlocks: [
          "const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);",
          "tail([1, 2, 3]); // [2,3]\ntail([1]); // [1]"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "d51becdc0cd038245800933f698c5555bcef7660de1805231411a75883289f43"
      }
    },
    {
      id: "take",
      type: "snippet",
      attributes: {
        fileName: "take.md",
        text:
          "Returns an array with n elements removed from the beginning.\n\nUse `Array.slice()` to create a slice of the array with `n` elements taken from the beginning.",
        codeBlocks: [
          "const take = (arr, n = 1) => arr.slice(0, n);",
          "take([1, 2, 3], 5); // [1, 2, 3]\ntake([1, 2, 3], 0); // []"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "6400f64dd09e23349b302091c0bf6e01f8fe052e5c3d4bacf005c2ccfbb5184b"
      }
    },
    {
      id: "takeRight",
      type: "snippet",
      attributes: {
        fileName: "takeRight.md",
        text:
          "Returns an array with n elements removed from the end.\n\nUse `Array.slice()` to create a slice of the array with `n` elements taken from the end.",
        codeBlocks: [
          "const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);",
          "takeRight([1, 2, 3], 2); // [ 2, 3 ]\ntakeRight([1, 2, 3]); // [3]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "7c1d00488af4859ff33f72472699f083036f936a84240cded84e3f18f2ff0916"
      }
    },
    {
      id: "takeRightWhile",
      type: "snippet",
      attributes: {
        fileName: "takeRightWhile.md",
        text:
          "Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.\n\nLoop through the array, using a `for...of` loop over `Array.keys()` until the returned value from the function is `true`.\nReturn the removed elements, using `Array.reverse()` and `Array.slice()`.",
        codeBlocks: [
          "const takeRightWhile = (arr, func) => {\n  for (let i of arr.reverse().keys())\n    if (func(arr[i])) return arr.reverse().slice(arr.length - i, arr.length);\n  return arr;\n};",
          "takeRightWhile([1, 2, 3, 4], n => n < 3); // [3, 4]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "2abf3aa16fb21b9694ef54dbece79ab9c49e8e5292f6eac7d3815c1afd21e3b1"
      }
    },
    {
      id: "takeWhile",
      type: "snippet",
      attributes: {
        fileName: "takeWhile.md",
        text:
          "Removes elements in an array until the passed function returns `true`. Returns the removed elements.\n\nLoop through the array, using a `for...of` loop over `Array.entries()` until the returned value from the function is `true`.\nReturn the removed elements, using `Array.slice()`.",
        codeBlocks: [
          "const takeWhile = (arr, func) => {\n  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);\n  return arr;\n};",
          "takeWhile([1, 2, 3, 4], n => n >= 3); // [1, 2]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "9983a71a3b6930d02ef5508d3f0cce2107fc19ec4a16b10d68ef0ae634a932cc"
      }
    },
    {
      id: "throttle",
      type: "snippet",
      attributes: {
        fileName: "throttle.md",
        text:
          "Creates a throttled function that only invokes the provided function at most once per every `wait` milliseconds\n\nUse `setTimeout()` and `clearTimeout()` to throttle the given method, `fn`.\nUse `Function.apply()` to apply the `this` context to the function and provide the necessary `arguments`.\nUse `Date.now()` to keep track of the last time the throttled function was invoked.\nOmit the second argument, `wait`, to set the timeout at a default of 0 ms.",
        codeBlocks: [
          "const throttle = (fn, wait) => {\n  let inThrottle, lastFn, lastTime;\n  return function() {\n    const context = this,\n      args = arguments;\n    if (!inThrottle) {\n      fn.apply(context, args);\n      lastTime = Date.now();\n      inThrottle = true;\n    } else {\n      clearTimeout(lastFn);\n      lastFn = setTimeout(function() {\n        if (Date.now() - lastTime >= wait) {\n          fn.apply(context, args);\n          lastTime = Date.now();\n        }\n      }, wait - (Date.now() - lastTime));\n    }\n  };\n};",
          "window.addEventListener(\n  'resize',\n  throttle(function(evt) {\n    console.log(window.innerWidth);\n    console.log(window.innerHeight);\n  }, 250)\n); // Will log the window dimensions at most every 250ms"
        ],
        tags: ["function", "advanced"]
      },
      meta: {
        archived: false,
        hash: "87909289c906a7a48b2d2b11eb976c501ed903080b7a2a1d473d852d8dbc53ad"
      }
    },
    {
      id: "times",
      type: "snippet",
      attributes: {
        fileName: "times.md",
        text:
          "Iterates over a callback `n` times\n\nUse `Function.call()` to call `fn` `n` times or until it returns `false`.\nOmit the last argument, `context`, to use an `undefined` object (or the global object in non-strict mode).",
        codeBlocks: [
          "const times = (n, fn, context = undefined) => {\n  let i = 0;\n  while (fn.call(context, i) !== false && ++i < n) {}\n};",
          "var output = '';\ntimes(5, i => (output += i));\nconsole.log(output); // 01234"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "90ab922b56f62b3eafff4a31b2a1f1345d2126e712f02360cb8a6e8b31adee96"
      }
    },
    {
      id: "timeTaken",
      type: "snippet",
      attributes: {
        fileName: "timeTaken.md",
        text:
          "Measures the time taken by a function to execute.\n\nUse `console.time()` and `console.timeEnd()` to measure the difference between the start and end times to determine how long the callback took to execute.",
        codeBlocks: [
          "const timeTaken = callback => {\n  console.time('timeTaken');\n  const r = callback();\n  console.timeEnd('timeTaken');\n  return r;\n};",
          "timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms"
        ],
        tags: ["utility", "beginner"]
      },
      meta: {
        archived: false,
        hash: "48d1e866b152eacd9fa16d8bf5c3136d01072522a58ad005a13d9b1792a3c37f"
      }
    },
    {
      id: "toCamelCase",
      type: "snippet",
      attributes: {
        fileName: "toCamelCase.md",
        text:
          "Converts a string to camelcase.\n\nBreak the string into words and combine them capitalizing the first letter of each word, using a regexp.",
        codeBlocks: [
          "const toCamelCase = str => {\n  let s =\n    str &&\n    str\n      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)\n      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())\n      .join('');\n  return s.slice(0, 1).toLowerCase() + s.slice(1);\n};",
          "toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'\ntoCamelCase('Some label that needs to be camelized'); // 'someLabelThatNeedsToBeCamelized'\ntoCamelCase('some-javascript-property'); // 'someJavascriptProperty'\ntoCamelCase('some-mixed_string with spaces_underscores-and-hyphens'); // 'someMixedStringWithSpacesUnderscoresAndHyphens'"
        ],
        tags: ["string", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "870a6ab0b2c7a69e26af06ce5f1cb2bd1706ae678139d2c2c3f59ce277c0cea3"
      }
    },
    {
      id: "toCurrency",
      type: "snippet",
      attributes: {
        fileName: "toCurrency.md",
        text:
          "Take a number and return specified currency formatting.\n\nUse `Intl.NumberFormat` to enable country / currency sensitive formatting.",
        codeBlocks: [
          "const toCurrency = (n, curr, LanguageFormat = undefined) =>\n  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);",
          "toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local\ntoCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)\ntoCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi\ntoCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local\ntoCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish"
        ],
        tags: ["utility", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "85a601168285577950b9fd0f28fa0d0283261dda12a2cb0e1a0e1cc78a6e81ae"
      }
    },
    {
      id: "toDecimalMark",
      type: "snippet",
      attributes: {
        fileName: "toDecimalMark.md",
        text:
          "Use `toLocaleString()` to convert a float-point arithmetic to the [Decimal mark](https://en.wikipedia.org/wiki/Decimal_mark) form. It makes a comma separated string from a number.",
        codeBlocks: [
          "const toDecimalMark = num => num.toLocaleString('en-US');",
          'toDecimalMark(12305030388.9087); // "12,305,030,388.909"'
        ],
        tags: ["utility", "math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "37225304d6109741f6ccb03fc845b2dbe84e0e2142861dfc73f5d3b5d770bde7"
      }
    },
    {
      id: "toggleClass",
      type: "snippet",
      attributes: {
        fileName: "toggleClass.md",
        text:
          "Toggle a class for an element.\n\nUse `element.classList.toggle()` to toggle the specified class for the element.",
        codeBlocks: [
          "const toggleClass = (el, className) => el.classList.toggle(className);",
          "toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore"
        ],
        tags: ["browser", "beginner"]
      },
      meta: {
        archived: false,
        hash: "c1fec7508780ad0ceacbf58c049668201e9f88eee043234394e11666530cfb21"
      }
    },
    {
      id: "toHash",
      type: "snippet",
      attributes: {
        fileName: "toHash.md",
        text:
          "Reduces a given Array-like into a value hash (keyed data store).\n\nGiven an Iterable or Array-like structure, call `Array.prototype.reduce.call()` on the provided object to step over it and return an Object, keyed by the reference value.",
        codeBlocks: [
          "const toHash = (object, key) =>\n  Array.prototype.reduce.call(\n    object,\n    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),\n    {}\n  );",
          "toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 1: 1 }\ntoHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }\n// A more in depth example:\nlet users = [{ id: 1, first: 'Jon' }, { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' }];\nlet managers = [{ manager: 1, employees: [2, 3] }];\n// We use function here because we want a bindable reference, but a closure referencing the hash would work, too.\nmanagers.forEach(\n  manager =>\n    (manager.employees = manager.employees.map(function(id) {\n      return this[id];\n    }, toHash(users, 'id')))\n);\nmanagers; // [ { manager:1, employees: [ { id: 2, first: \"Joe\" }, { id: 3, first: \"Moe\" } ] } ]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "c7a62b55b5a90661bf3f9c956f075906439a50151a3aee4023ad8fe878cae2e6"
      }
    },
    {
      id: "toKebabCase",
      type: "snippet",
      attributes: {
        fileName: "toKebabCase.md",
        text:
          "Converts a string to kebab case.\n\nBreak the string into words and combine them adding `-` as a separator, using a regexp.",
        codeBlocks: [
          "const toKebabCase = str =>\n  str &&\n  str\n    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)\n    .map(x => x.toLowerCase())\n    .join('-');",
          "toKebabCase('camelCase'); // 'camel-case'\ntoKebabCase('some text'); // 'some-text'\ntoKebabCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some-mixed-string-with-spaces-underscores-and-hyphens'\ntoKebabCase('AllThe-small Things'); // \"all-the-small-things\"\ntoKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // \"i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-xml-and-html\""
        ],
        tags: ["string", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "40bb52f6eb89e1b796af964316c93bee286e44952d8d2e410ac7f8124b6cd8ac"
      }
    },
    {
      id: "tomorrow",
      type: "snippet",
      attributes: {
        fileName: "tomorrow.md",
        text:
          "Results in a string representation of tomorrow's date.\nUse `new Date()` to get today's date, adding one day using `Date.getDate()` and `Date.setDate()`, and converting the Date object to a string.",
        codeBlocks: [
          "const tomorrow = (long = false) => {\n  let t = new Date();\n  t.setDate(t.getDate() + 1);\n  const ret = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(\n    t.getDate()\n  ).padStart(2, '0')}`;\n  return !long ? ret : `${ret}T00:00:00`;\n};",
          "tomorrow(); // 2017-12-27 (if current date is 2017-12-26)\ntomorrow(true); // 2017-12-27T00:00:00 (if current date is 2017-12-26)"
        ],
        tags: ["date", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "55531d99aa0019593ea79a1bf0a3383857d88f6c7fdb33399a7812c0d184eb72"
      }
    },
    {
      id: "toOrdinalSuffix",
      type: "snippet",
      attributes: {
        fileName: "toOrdinalSuffix.md",
        text:
          "Adds an ordinal suffix to a number.\n\nUse the modulo operator (`%`) to find values of single and tens digits.\nFind which ordinal pattern digits match.\nIf digit is found in teens pattern, use teens ordinal.",
        codeBlocks: [
          "const toOrdinalSuffix = num => {\n  const int = parseInt(num),\n    digits = [int % 10, int % 100],\n    ordinals = ['st', 'nd', 'rd', 'th'],\n    oPattern = [1, 2, 3, 4],\n    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];\n  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])\n    ? int + ordinals[digits[0] - 1]\n    : int + ordinals[3];\n};",
          "toOrdinalSuffix('123'); // \"123rd\""
        ],
        tags: ["utility", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "9e162528df1b8dd803a71a770f3c5e1555ca5995005e26e416f5652024b3fd1e"
      }
    },
    {
      id: "toSafeInteger",
      type: "snippet",
      attributes: {
        fileName: "toSafeInteger.md",
        text:
          "Converts a value to a safe integer.\n\nUse `Math.max()` and `Math.min()` to find the closest safe value.\nUse `Math.round()` to convert to an integer.",
        codeBlocks: [
          "const toSafeInteger = num =>\n  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));",
          "toSafeInteger('3.2'); // 3\ntoSafeInteger(Infinity); // 9007199254740991"
        ],
        tags: ["math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "9f1ec1d236c7cd6787078f8eb21ac9076a2049b9e63b99bb67017be40a0f833b"
      }
    },
    {
      id: "toSnakeCase",
      type: "snippet",
      attributes: {
        fileName: "toSnakeCase.md",
        text:
          "Converts a string to snake case.\n\nBreak the string into words and combine them adding `_` as a separator, using a regexp.",
        codeBlocks: [
          "const toSnakeCase = str =>\n  str &&\n  str\n    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)\n    .map(x => x.toLowerCase())\n    .join('_');",
          "toSnakeCase('camelCase'); // 'camel_case'\ntoSnakeCase('some text'); // 'some_text'\ntoSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some_mixed_string_with_spaces_underscores_and_hyphens'\ntoSnakeCase('AllThe-small Things'); // \"all_the_smal_things\"\ntoSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // \"i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html\""
        ],
        tags: ["string", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "07be50b2d41b64458085b8f48a361023061fff8cc6db5813ce56cb3e5d22ccfa"
      }
    },
    {
      id: "transform",
      type: "snippet",
      attributes: {
        fileName: "transform.md",
        text:
          "Applies a function against an accumulator and each key in the object (from left to right).\n\nUse `Object.keys(obj)` to iterate over each key in the object, `Array.reduce()` to call the apply the specified function against the given accumulator.",
        codeBlocks: [
          "const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);",
          "transform(\n  { a: 1, b: 2, c: 1 },\n  (r, v, k) => {\n    (r[v] || (r[v] = [])).push(k);\n    return r;\n  },\n  {}\n); // { '1': ['a', 'c'], '2': ['b'] }"
        ],
        tags: ["object", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "8f844b53d1104ae0169235916fe2f1bcce82e4f2503b4009e842078e8611405c"
      }
    },
    {
      id: "triggerEvent",
      type: "snippet",
      attributes: {
        fileName: "triggerEvent.md",
        text:
          "Triggers a specific event on a given element, optionally passing custom data.\n\nUse `new CustomEvent()` to create an event from the specified `eventType` and details.\nUse `el.dispatchEvent()` to trigger the newly created event on the given element.\nOmit the third argument, `detail`, if you do not want to pass custom data to the triggered event.",
        codeBlocks: [
          "const triggerEvent = (el, eventType, detail = undefined) =>\n  el.dispatchEvent(new CustomEvent(eventType, { detail: detail }));",
          "triggerEvent(document.getElementById('myId'), 'click');\ntriggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });"
        ],
        tags: ["browser", "event", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "0089f0db0ccfaae631ff2935a1eb7b5ff38d789255777a8f05188552a527520c"
      }
    },
    {
      id: "truncateString",
      type: "snippet",
      attributes: {
        fileName: "truncateString.md",
        text:
          "Truncates a string up to a specified length.\n\nDetermine if the string's `length` is greater than `num`.\nReturn the string truncated to the desired length, with `'...'` appended to the end or the original string.",
        codeBlocks: [
          "const truncateString = (str, num) =>\n  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;",
          "truncateString('boomerang', 7); // 'boom...'"
        ],
        tags: ["string", "beginner"]
      },
      meta: {
        archived: false,
        hash: "656e754cd1a8ef1a738557d1453b8f6c65e5f0f67e829179c88f3d9b6d3c4ee7"
      }
    },
    {
      id: "truthCheckCollection",
      type: "snippet",
      attributes: {
        fileName: "truthCheckCollection.md",
        text:
          "Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).\n\nUse `Array.every()` to check if each passed object has the specified property and if it returns a truthy value.",
        codeBlocks: [
          "const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre]);",
          "truthCheckCollection([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex'); // true"
        ],
        tags: ["object", "logic", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "680b063587a145c90b3072bc7e775ebe93b5527ad3f91bba5e5b575811895b9c"
      }
    },
    {
      id: "unary",
      type: "snippet",
      attributes: {
        fileName: "unary.md",
        text:
          "Creates a function that accepts up to one argument, ignoring any additional arguments.\n\nCall the provided function, `fn`, with just the first argument given.",
        codeBlocks: [
          "const unary = fn => val => fn(val);",
          "['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]"
        ],
        tags: ["adapter", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "522df418a2b451115c7514afc7480a2f5a0f813dd320faf6e577c9eff71d379b"
      }
    },
    {
      id: "uncurry",
      type: "snippet",
      attributes: {
        fileName: "uncurry.md",
        text:
          "Uncurries a function up to depth `n`.\n\nReturn a variadic function.\nUse `Array.reduce()` on the provided arguments to call each subsequent curry level of the function.\nIf the `length` of the provided arguments is less than `n` throw an error.\nOtherwise, call `fn` with the proper amount of arguments, using `Array.slice(0, n)`.\nOmit the second argument, `n`, to uncurry up to depth `1`.",
        codeBlocks: [
          "const uncurry = (fn, n = 1) => (...args) => {\n  const next = acc => args => args.reduce((x, y) => x(y), acc);\n  if (n > args.length) throw new RangeError('Arguments too few!');\n  return next(fn)(args.slice(0, n));\n};",
          "const add = x => y => z => x + y + z;\nconst uncurriedAdd = uncurry(add, 3);\nuncurriedAdd(1, 2, 3); // 6"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "7f7774fd60e664bf1d12c9ae36f498cf22d303ef72f51f8b8e2e2d7630bc4c61"
      }
    },
    {
      id: "unescapeHTML",
      type: "snippet",
      attributes: {
        fileName: "unescapeHTML.md",
        text:
          "Unescapes escaped HTML characters.\n\nUse `String.replace()` with a regex that matches the characters that need to be unescaped, using a callback function to replace each escaped character instance with its associated unescaped character using a dictionary (object).",
        codeBlocks: [
          "const unescapeHTML = str =>\n  str.replace(\n    /&amp;|&lt;|&gt;|&#39;|&quot;/g,\n    tag =>\n      ({\n        '&amp;': '&',\n        '&lt;': '<',\n        '&gt;': '>',\n        '&#39;': \"'\",\n        '&quot;': '\"'\n      }[tag] || tag)\n  );",
          "unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'); // '<a href=\"#\">Me & you</a>'"
        ],
        tags: ["string", "browser", "beginner"]
      },
      meta: {
        archived: false,
        hash: "15f1da1fe7a39443d4a3a09f7d43e3fb253f9b3dd9cea31d71599ce9a8609f8d"
      }
    },
    {
      id: "unflattenObject",
      type: "snippet",
      attributes: {
        fileName: "unflattenObject.md",
        text:
          "Unflatten an object with the paths for keys.\n\nUse `Object.keys(obj)` combined with `Array.reduce()` to convert flattened path node to a leaf node.\nIf the value of a key contains a dot delimiter (`.`), use `Array.split('.')`, string transformations and `JSON.parse()` to create an object, then `Object.assign()` to create the leaf node.\nOtherwise, add the appropriate key-value pair to the accumulator object.",
        codeBlocks: [
          "const unflattenObject = obj =>\n  Object.keys(obj).reduce((acc, k) => {\n    if (k.indexOf('.') !== -1) {\n      const keys = k.split('.');\n      Object.assign(\n        acc,\n        JSON.parse(\n          '{' +\n            keys.map((v, i) => (i !== keys.length - 1 ? `\"${v}\":{` : `\"${v}\":`)).join('') +\n            obj[k] +\n            '}'.repeat(keys.length)\n        )\n      );\n    } else acc[k] = obj[k];\n    return acc;\n  }, {});",
          "unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }"
        ],
        tags: ["object", "advanced"]
      },
      meta: {
        archived: false,
        hash: "aee8b10b831e676337688628f9204cea2019a008c30005f0760432d86498fc3f"
      }
    },
    {
      id: "unfold",
      type: "snippet",
      attributes: {
        fileName: "unfold.md",
        text:
          "Builds an array, using an iterator function and an initial seed value.\n\nUse a `while` loop and `Array.push()` to call the function repeatedly until it returns `false`.\nThe iterator function accepts one argument (`seed`) and must always return an array with two elements ([`value`, `nextSeed`]) or `false` to terminate.",
        codeBlocks: [
          "const unfold = (fn, seed) => {\n  let result = [],\n    val = [null, seed];\n  while ((val = fn(val[1]))) result.push(val[0]);\n  return result;\n};",
          "var f = n => (n > 50 ? false : [-n, n + 10]);\nunfold(f, 10); // [-10, -20, -30, -40, -50]"
        ],
        tags: ["function", "array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "ccc6b2e5db6224ca96a835f8242e6a5934b99b011b62b69e7e10f7cb494c5593"
      }
    },
    {
      id: "union",
      type: "snippet",
      attributes: {
        fileName: "union.md",
        text:
          "Returns every element that exists in any of the two arrays once.\n\nCreate a `Set` with all values of `a` and `b` and convert to an array.",
        codeBlocks: [
          "const union = (a, b) => Array.from(new Set([...a, ...b]));",
          "union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]"
        ],
        tags: ["array", "math", "beginner"]
      },
      meta: {
        archived: false,
        hash: "89bdbb02f2dd1c5bc9d1272ff3f2d5249af763115b596e9f8bc801d0f2256ac3"
      }
    },
    {
      id: "unionBy",
      type: "snippet",
      attributes: {
        fileName: "unionBy.md",
        text:
          "Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying all `fn` to all values of `a`.\nCreate a `Set` from `a` and all elements in `b` whose value, after applying `fn` does not match a value in the previously created set.\nReturn the last set converted to an array.",
        codeBlocks: [
          "const unionBy = (a, b, fn) => {\n  const s = new Set(a.map(v => fn(v)));\n  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));\n};",
          "unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "e77db9a39dfcae80c2a0d79dee802a05de9811c28f35e732300ce5144c61be00"
      }
    },
    {
      id: "unionWith",
      type: "snippet",
      attributes: {
        fileName: "unionWith.md",
        text:
          "Returns every element that exists in any of the two arrays once, using a provided comparator function.\n\nCreate a `Set` with all values of `a` and values in `b` for which the comparator finds no matches in `a`, using `Array.findIndex()`.",
        codeBlocks: [
          "const unionWith = (a, b, comp) =>\n  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));",
          "unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2, 1.5, 3, 0, 3.9]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "8fae842111490c84497f36491833532e4b03e838b79e08f01d1aa72d15c36d99"
      }
    },
    {
      id: "uniqueElements",
      type: "snippet",
      attributes: {
        fileName: "uniqueElements.md",
        text:
          "Returns all unique values of an array.\n\nUse ES6 `Set` and the `...rest` operator to discard all duplicated values.",
        codeBlocks: [
          "const uniqueElements = arr => [...new Set(arr)];",
          "uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1,2,3,4,5]"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "e45f1af52564b0b1d91ce8bce53fe98ce888f3c943e1c1828682893393540256"
      }
    },
    {
      id: "uniqueElementsBy",
      type: "snippet",
      attributes: {
        fileName: "uniqueElementsBy.md",
        text:
          "Returns all unique values of an array, based on a provided comparator function.\n\nUse `Array.reduce()` and `Array.some()` for an array containing only the first unique occurence of each value, based on the comparator function, `fn`.\nThe comparator function takes two arguments: the values of the two elements being compared.",
        codeBlocks: [
          "const uniqueElementsBy = (arr, fn) =>\n  arr.reduce((acc, v) => {\n    if (!acc.some(x => fn(v, x))) acc.push(v);\n    return acc;\n  }, []);",
          "uniqueElementsBy(\n  [\n    { id: 0, value: 'a' },\n    { id: 1, value: 'b' },\n    { id: 2, value: 'c' },\n    { id: 1, value: 'd' },\n    { id: 0, value: 'e' }\n  ],\n  (a, b) => a.id == b.id\n); // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "8640aeb79ced5defcc89555176a88acd66bca74f4359dc41388b5687f2050015"
      }
    },
    {
      id: "uniqueElementsByRight",
      type: "snippet",
      attributes: {
        fileName: "uniqueElementsByRight.md",
        text:
          "Returns all unique values of an array, based on a provided comparator function.\n\nUse `Array.reduce()` and `Array.some()` for an array containing only the last unique occurence of each value, based on the comparator function, `fn`.\nThe comparator function takes two arguments: the values of the two elements being compared.",
        codeBlocks: [
          "const uniqueElementsByRight = (arr, fn) =>\n  arr.reduceRight((acc, v) => {\n    if (!acc.some(x => fn(v, x))) acc.push(v);\n    return acc;\n  }, []);",
          "uniqueElementsByRight(\n  [\n    { id: 0, value: 'a' },\n    { id: 1, value: 'b' },\n    { id: 2, value: 'c' },\n    { id: 1, value: 'd' },\n    { id: 0, value: 'e' }\n  ],\n  (a, b) => a.id == b.id\n); // [ { id: 0, value: 'e' }, { id: 1, value: 'd' }, { id: 2, value: 'c' } ]"
        ],
        tags: ["array", "function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "853887ad00b7c39a719c5b7e16dd3464a85f08da43d9d1bd1e7b7ebeaa897c95"
      }
    },
    {
      id: "uniqueSymmetricDifference",
      type: "snippet",
      attributes: {
        fileName: "uniqueSymmetricDifference.md",
        text:
          "Returns the unique symmetric difference between two arrays, not containing duplicate values from either array.\n\nUse `Array.filter()` and `Array.includes()` on each array to remove values contained in the other, then create a `Set` from the results, removing duplicate values.",
        codeBlocks: [
          "const uniqueSymmetricDifference = (a, b) => [\n  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])\n];",
          "uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]\nuniqueSymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 3]"
        ],
        tags: ["array", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "58712a3aee2c952a18d9f0d2f21d0002ac720d0d0f8fe082d02f891e3912bf1d"
      }
    },
    {
      id: "untildify",
      type: "snippet",
      attributes: {
        fileName: "untildify.md",
        text:
          "Converts a tilde path to an absolute path.\n\nUse `String.replace()` with a regular expression and `OS.homedir()` to replace the `~` in the start of the path with the home directory.",
        codeBlocks: [
          "const untildify = str => str.replace(/^~($|\\/|\\\\)/, `${require('os').homedir()}$1`);",
          "untildify('~/node'); // '/Users/aUser/node'"
        ],
        tags: ["node", "string", "beginner"]
      },
      meta: {
        archived: false,
        hash: "152bde711895999ed98d4ee19cf6564b1a70a2ea358060ebdd3c1f8fbcfbf5d8"
      }
    },
    {
      id: "unzip",
      type: "snippet",
      attributes: {
        fileName: "unzip.md",
        text:
          "Creates an array of arrays, ungrouping the elements in an array produced by [zip](#zip).\n\nUse `Math.max.apply()` to get the longest subarray in the array, `Array.map()` to make each element an array.\nUse `Array.reduce()` and `Array.forEach()` to map grouped values to individual arrays.",
        codeBlocks: [
          "const unzip = arr =>\n  arr.reduce(\n    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),\n    Array.from({\n      length: Math.max(...arr.map(x => x.length))\n    }).map(x => [])\n  );",
          "unzip([['a', 1, true], ['b', 2, false]]); //[['a', 'b'], [1, 2], [true, false]]\nunzip([['a', 1, true], ['b', 2]]); //[['a', 'b'], [1, 2], [true]]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "941c783ce75bd3bf53b13a5641d26f275c16dbbf87170ddea41d5b4570d4bf31"
      }
    },
    {
      id: "unzipWith",
      type: "snippet",
      attributes: {
        fileName: "unzipWith.md",
        text:
          "Creates an array of elements, ungrouping the elements in an array produced by [zip](#zip) and applying the provided function.\n\nUse `Math.max.apply()` to get the longest subarray in the array, `Array.map()` to make each element an array.\nUse `Array.reduce()` and `Array.forEach()` to map grouped values to individual arrays.\nUse `Array.map()` and the spread operator (`...`) to apply `fn` to each individual group of elements.",
        codeBlocks: [
          "const unzipWith = (arr, fn) =>\n  arr\n    .reduce(\n      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),\n      Array.from({\n        length: Math.max(...arr.map(x => x.length))\n      }).map(x => [])\n    )\n    .map(val => fn(...val));",
          "unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)); // [3, 30, 300]"
        ],
        tags: ["array", "function", "advanced"]
      },
      meta: {
        archived: false,
        hash: "90e4fd44654dd3cc7ad2a78fc0aa28bbb57d4215f5b984a4265c12a47dfe1f81"
      }
    },
    {
      id: "URLJoin",
      type: "snippet",
      attributes: {
        fileName: "URLJoin.md",
        text:
          "Joins all given URL segments together, then normalizes the resulting URL.\n\nUse `String.join('/')` to combine URL segments, then a series of `String.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter).",
        codeBlocks: [
          "const URLJoin = (...args) =>\n  args\n    .join('/')\n    .replace(/[\\/]+/g, '/')\n    .replace(/^(.+):\\//, '$1://')\n    .replace(/^file:/, 'file:/')\n    .replace(/\\/(\\?|&|#[^!])/g, '$1')\n    .replace(/\\?/g, '&')\n    .replace('&', '?');",
          "URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'); // 'http://www.google.com/a/b/cd?foo=123&bar=foo'"
        ],
        tags: ["string", "utility", "regexp", "advanced"]
      },
      meta: {
        archived: false,
        hash: "c1f6ed028c9da75a21b93485f56d04cf2f10a512998ebeaa44f33377ab42139b"
      }
    },
    {
      id: "UUIDGeneratorBrowser",
      type: "snippet",
      attributes: {
        fileName: "UUIDGeneratorBrowser.md",
        text:
          "Generates a UUID in a browser.\n\nUse `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.",
        codeBlocks: [
          "const UUIDGeneratorBrowser = () =>\n  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>\n    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)\n  );",
          "UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'"
        ],
        tags: ["browser", "utility", "random", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "f43ad3f7f82d15a02cacb2b93c6324c64b55de1c630398ae501ff9b65bd9cb35"
      }
    },
    {
      id: "UUIDGeneratorNode",
      type: "snippet",
      attributes: {
        fileName: "UUIDGeneratorNode.md",
        text:
          "Generates a UUID in Node.JS.\n\nUse `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.",
        codeBlocks: [
          "const crypto = require('crypto');\nconst UUIDGeneratorNode = () =>\n  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>\n    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)\n  );",
          "UUIDGeneratorNode(); // '79c7c136-60ee-40a2-beb2-856f1feabefc'"
        ],
        tags: ["node", "utility", "random", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "119c813d32e4aa4faed7a497cbf1806e98da0f7c9090656ae02297fe9224b6a1"
      }
    },
    {
      id: "validateNumber",
      type: "snippet",
      attributes: {
        fileName: "validateNumber.md",
        text:
          "Returns `true` if the given value is a number, `false` otherwise.\n\nUse `!isNaN()` in combination with `parseFloat()` to check if the argument is a number.\nUse `isFinite()` to check if the number is finite.\nUse `Number()` to check if the coercion holds.",
        codeBlocks: [
          "const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;",
          "validateNumber('10'); // true"
        ],
        tags: ["utility", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "8fb993b0cf78fa83a170aca132bf5eb13430e2cef5ae06f85b9763f286bb792c"
      }
    },
    {
      id: "when",
      type: "snippet",
      attributes: {
        fileName: "when.md",
        text:
          "Tests a value, `x`, against a predicate function. If `true`, return `fn(x)`. Else, return `x`. \n\nReturn a function expecting a single value, `x`, that returns the appropriate value based on `pred`.",
        codeBlocks: [
          "const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);",
          "const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);\ndoubleEvenNumbers(2); // 4\ndoubleEvenNumbers(1); // 1"
        ],
        tags: ["function", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "4c3fb917581972b732dbf8a998c377df247721790afa904956420d0e75b3b40a"
      }
    },
    {
      id: "without",
      type: "snippet",
      attributes: {
        fileName: "without.md",
        text:
          "Filters out the elements of an array, that have one of the specified values.\n\nUse `Array.filter()` to create an array excluding(using `!Array.includes()`) all given values.\n\n_(For a snippet that mutates the original array see [`pull`](#pull))_",
        codeBlocks: [
          "const without = (arr, ...args) => arr.filter(v => !args.includes(v));",
          "without([2, 1, 2, 3], 1, 2); // [3]"
        ],
        tags: ["array", "beginner"]
      },
      meta: {
        archived: false,
        hash: "0f0a7a5960cb9b6523950d582434f55f63bc3cf4802d60aaf22a29f563d00549"
      }
    },
    {
      id: "words",
      type: "snippet",
      attributes: {
        fileName: "words.md",
        text:
          "Converts a given string into an array of words.\n\nUse `String.split()` with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings. Use `Array.filter()` to remove any empty strings.\nOmit the second argument to use the default regexp.",
        codeBlocks: [
          "const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);",
          'words(\'I love javaScript!!\'); // ["I", "love", "javaScript"]\nwords(\'python, javaScript & coffee\'); // ["python", "javaScript", "coffee"]'
        ],
        tags: ["string", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "e89bcf45e8a87a5e69462152727960e050cc3236f6e30cb26dc2a5bbb35cf32c"
      }
    },
    {
      id: "xProd",
      type: "snippet",
      attributes: {
        fileName: "xProd.md",
        text:
          "Creates a new array out of the two supplied by creating each possible pair from the arrays.\n\nUse `Array.reduce()`, `Array.map()` and `Array.concat()` to produce every possible pair from the elements of the two arrays and save them in an array.",
        codeBlocks: [
          "const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);",
          "xProd([1, 2], ['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]"
        ],
        tags: ["array", "math", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "1261dc9be854efaec6064c397b19fe09ec65f04002b63e057f25bf7afc33c398"
      }
    },
    {
      id: "yesNo",
      type: "snippet",
      attributes: {
        fileName: "yesNo.md",
        text:
          "Returns `true` if the string is `y`/`yes` or `false` if the string is `n`/`no`.\n\nUse `RegExp.test()` to check if the string evaluates to `y/yes` or `n/no`.\nOmit the second argument, `def` to set the default answer as `no`.",
        codeBlocks: [
          "const yesNo = (val, def = false) =>\n  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;",
          "yesNo('Y'); // true\nyesNo('yes'); // true\nyesNo('No'); // false\nyesNo('Foo', true); // true"
        ],
        tags: ["utility", "regexp", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "86e7f2674d08de8520abe029aa6be760449367102a6578bb8efd9703508c63a2"
      }
    },
    {
      id: "zip",
      type: "snippet",
      attributes: {
        fileName: "zip.md",
        text:
          "Creates an array of elements, grouped based on the position in the original arrays.\n\nUse `Math.max.apply()` to get the longest array in the arguments.\nCreates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, `undefined` is used where no value could be found.",
        codeBlocks: [
          "const zip = (...arrays) => {\n  const maxLength = Math.max(...arrays.map(x => x.length));\n  return Array.from({ length: maxLength }).map((_, i) => {\n    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);\n  });\n};",
          "zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]\nzip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]"
        ],
        tags: ["array", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "66cedb84131bd3704fc8dc3f9a8692d7a08a990ae749ff8cff688ced18239126"
      }
    },
    {
      id: "zipObject",
      type: "snippet",
      attributes: {
        fileName: "zipObject.md",
        text:
          "Given an array of valid property identifiers and an array of values, return an object associating the properties to the values.\n\nSince an object can have undefined values but not undefined property pointers, the array of properties is used to decide the structure of the resulting object using `Array.reduce()`.",
        codeBlocks: [
          "const zipObject = (props, values) =>\n  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});",
          "zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}\nzipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}"
        ],
        tags: ["array", "object", "intermediate"]
      },
      meta: {
        archived: false,
        hash: "3d01158c9146610c3ae1661b0681fb46db677426e7d614cb7b8f295c8defbdfd"
      }
    },
    {
      id: "zipWith",
      type: "snippet",
      attributes: {
        fileName: "zipWith.md",
        text:
          "Creates an array of elements, grouped based on the position in the original arrays and using function as the last value to specify how grouped values should be combined.\n\nCheck if the last argument provided is a function.\nUse `Math.max()` to get the longest array in the arguments.\nCreates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, `undefined` is used where no value could be found.\nThe function is invoked with the elements of each group `(...group)`.",
        codeBlocks: [
          "const zipWith = (...array) => {\n  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;\n  return Array.from(\n    { length: Math.max(...array.map(a => a.length)) },\n    (_, i) => (fn ? fn(...array.map(a => a[i])) : array.map(a => a[i]))\n  );\n};",
          "zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c); // [111,222]\nzipWith(\n  [1, 2, 3],\n  [10, 20],\n  [100, 200],\n  (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')\n); // [111, 222, '3bc']"
        ],
        tags: ["array", "function", "advanced"]
      },
      meta: {
        archived: false,
        hash: "c30a9938878dbc4f535c16d16c59e0a7c09643164332f7790345f95557b44303"
      }
    }
  ],
  meta: {
    specification: "http://jsonapi.org/format/"
  }
};
