/*
 * Copyright 2020 wdgt  <dev@justiva.ru>
 */

/*
 * Compile translations:
 * Input:
 * { foo: { bar: 'baz' } }
 * Output:
 * { 'foo.bar': 'baz' }
 */
function compileMessages(prefix, messages) {
  const result = {};
  Object.keys(messages).forEach((key) => {
    const value = messages[key];
    const id = prefix + '.' + key;
    if (typeof value === 'object') {
      Object.assign(result, compileMessages(id, value));
    } else {
      result[id] = value;
    }
  });

  return result;
}

// we using commonjs export due this function used by node script
module.exports = compileMessages;
