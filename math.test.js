// math.test.js
const test = require('node:test');
const assert = require('node:assert');

test('Cek fungsi penjumlahan dasar', () => {
  const hasil = 2 + 3;
  assert.strictEqual(hasil, 5); // Expected: 5
});

test('Cek verifikasi status QA', () => {
  const isBugFound = false;
  assert.strictEqual(isBugFound, false);
});