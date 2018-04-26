// Copyright (C) 2018 Amal Hussein. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-atomics.wake
description: >
  Throws a TypeError if typedArray.buffer is not a SharedArrayBuffer
info: |
  Atomics.wake( typedArray, index, count )

  1.Let buffer be ? ValidateSharedIntegerTypedArray(typedArray, true).
    ...
      9.If IsSharedArrayBuffer(buffer) is false, throw a TypeError exception.
        ...
          4.If bufferData is a Data Block, return false.
features: [ArrayBuffer, Atomics, BigInt, TypedArray]
---*/

var i64a = new BigInt64Array(new ArrayBuffer(4));
var poisoned = {
  valueOf: function() {
    throw new Test262Error("should not evaluate this code");
  }
};

assert.throws(TypeError, function() {
  Atomics.wake(i64a, 0, 0);
});

assert.throws(TypeError, function() {
  Atomics.wake(i64a, poisoned, poisoned);
});
