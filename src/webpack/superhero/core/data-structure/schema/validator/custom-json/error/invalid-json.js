/* eslint-disable no-undef */
define(function()
{
  /**
   * @memberof Domain
   * @extends {Error}
   */
  class InvalidJSONError extends Error
  {
    constructor(...args)
    {
      super(...args)
      this.code = 'E_INVALID_JSON'
    }
  }

  return InvalidJSONError
})
