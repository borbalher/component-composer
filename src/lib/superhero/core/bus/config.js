/* eslint-disable no-undef */
define(function()
{
  return {
    'core' :
    {
      'bootstrap' :
      {
        'bus' : 'superhero/core/bus/bootstrap'
      },
      'locator' :
      {
        'core/bus'           : 'superhero/core/bus/',
        'core/bus/bootstrap' : 'superhero/core/bus/bootstrap'
      },
      'bus' :
      {
        'options'   : {},
        'observers' : {}
      }
    }
  }
})
