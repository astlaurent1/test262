// Copyright (C) 2019 Alex St Laurent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `Promise.allSettled` invoked on a constructor value that throws an error
esid: #sec-promise.allSettled
info: |
    Analogous to test/built-ins/Promise/all/ctx-ctor-throws.js
---*/

const CustomPromise = function() {
  throw new Test262Error();
};

assert.throws(Test262Error, function() {
  // Promise.allSettled.call(CustomPromise);     // fails on promise.allsettled shim
  Promise.allSettled.call(CustomPromise, []); // shim tries to iterate before running C
});
