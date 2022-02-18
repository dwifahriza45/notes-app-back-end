const InvariantError = require('../../exceptions/InvariantError');
const { UserPayloadSchema } = require('./schema');

const UsersValidator = {
  validateUserPayload: (payload) => {
    const validatinResult = UserPayloadSchema.validate(payload);
    if (validatinResult.error) {
      throw new InvariantError(validatinResult.error.message);
    }
  },
};

module.exports = UsersValidator;
