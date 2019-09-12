/* eslint-disable no-undef */
define(function()
{
  /**
   * @extends {Error}
   */
  class InvalidCsvError extends Error
  {
    constructor(...a)
    {
      super(...a)
      this.code = 'E_INVALID_CSV'
    }
  }

  return InvalidCsvError
})
