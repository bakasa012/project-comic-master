import { assert } from 'chai';
import { DecodeJsonWebToken2 } from '../../middleware/verifyToken';

describe('test', () => {
  it('test 1', () => {
    const decode = DecodeJsonWebToken2(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYzLCJlbXBsb3llZU51bWJlciI6IjIwMDU3MjEiLCJwb3NpdGlvbklkIjoiIiwiZGVwYXJ0bWVudElkIjoiMTY3MzgiLCJyb2xlIjoidXNlciIsImlhdCI6MTY2NzkwMjIyMiwiZXhwIjoxNjcwNDk0MjIyfQ.jDxJhcu-dGQXOSyhJiNn6e-VHPT9eokdsVSfCKqo4NA',
    );
    console.log(decode);

    assert.equal(decode.employeeNumber, '2005721111');
  });
});
