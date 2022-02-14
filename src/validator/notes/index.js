const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validatinResult = NotePayloadSchema.validate(payload);
    if (validatinResult.error) {
      throw new InvariantError(validatinResult.error.message);
    }
  },
};

module.exports = NotesValidator;
