const
ServiceUnmetDependencyError = require('../error/service-unmet-dependency'),
ServiceLocatorNotFoundError = require('../error/service-locator-not-found')

class NodeServiceLoader
{
  constructor(locator)
  {
    this.locator = locator
  }

  async loadService(name)
  {
    return new Promise((resolve, reject) =>
    {
      const
      configuration = this.locator.locate('core/configuration'),
      path          = this.locator.locate('core/path'),
      locatorPath   = `${configuration.find('core.locator')[name]}/locator`

      if(path.isResolvable(locatorPath))
      {
        const
        Locator = require(locatorPath),
        locator = new Locator(this.locator)

        try
        {
          const service = locator.locate()
          this.locator.set(name, service)
          resolve()
        }
        catch(error)
        {
          switch(error.code)
          {
          case 'E_SERVICE_UNDEFINED':
          {
            reject(new ServiceUnmetDependencyError(`An unmet dependency was found for service "${name}", error: ${error.message}`))
            break
          }
          default:
            reject(error)
          }
        }
      }
      else
      {
        reject(new ServiceLocatorNotFoundError(`locator could not be found for ${name}`))
      }
    })
  }
}

module.exports = NodeServiceLoader
