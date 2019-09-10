/* eslint-disable no-undef */
define([
  'superhero/core/index',
  'superhero/core/configuration/index',
  'superhero/core/deepclone/index',
  'superhero/core/deepfind/index',
  'superhero/core/deepfreeze/index',
  'superhero/core/deepmerge/index',
  'superhero/core/deepassign/index',
  'superhero/core/locator/index'
], function(
  Core,
  Configuration,
  Deepclone,
  Deepfind,
  Deepfreeze,
  Deepmerge,
  DeepAssign,
  Locator
)
{
  class CoreFactory
  {
    create()
    {
      const
      locator = this.createLocator(),
      core    = new Core(locator)

      core.add('core/bootstrap')
      core.add('core/schema')
      core.add('core')

      return core
    }

    createLocator()
    {
      const
      locator       = new Locator(),
      deepclone     = new Deepclone(),
      deepfreeze    = new Deepfreeze(),
      deepmerge     = new Deepmerge(),
      deepfind      = new Deepfind(),
      deepassign    = new DeepAssign(),
      configuration = new Configuration(deepclone, deepmerge, deepfind)

      locator.set('core/deepclone', deepclone)
      locator.set('core/deepfreeze', deepfreeze)
      locator.set('core/deepmerge', deepmerge)
      locator.set('core/deepfind', deepfind)
      locator.set('core/deepassign', deepassign)
      locator.set('core/configuration', configuration)

      return locator
    }
  }

  return CoreFactory
})
