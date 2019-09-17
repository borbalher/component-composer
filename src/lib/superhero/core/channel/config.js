/* eslint-disable no-undef */
define(function()
{
  return {
    'core' :
    {
      // 'factories' :
      // {
      //   'core/channel' : {
      //     'composer' : 'core/schema/composer'
      //   }
      // },
      'schema' :
      {
        'composer' :
        {
          'core/channel/event-meta' : 'superhero/core/channel/schema/dto/event-meta',
          'core/channel/event'      : 'superhero/core/channel/schema/dto/event'
        }
      },
      'locator' :
      {
        // 'core/channel' : 'superhero/core/channel'
        'core/channel/factory' : 'superhero/core/channel/factory'
      }
    }
  }
})
