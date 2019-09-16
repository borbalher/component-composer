describe('Stack', () =>
{
  const
  expect    = require('chai').expect,
  path      = require('path'),
  requirejs = require('requirejs')

  requirejs.config({
    'baseUrl' : path.resolve(__dirname,  '../src/lib'),
    'paths'   :
    {
      'core' : path.resolve(__dirname,  '../src/lib/superhero/core')
    }
  })

  let
  core,
  factory

  before((done) =>
  {
    requirejs(['superhero/core/factory'], (CoreFactory) =>
    {
      const coreFactory = new CoreFactory()

      core = coreFactory.create()

      core.add('core/data-structure')

      core.load().then(() =>
      {
        core.locate('core/bootstrap').bootstrap().then(() =>
        {
          factory = core.locate('data-structure/stack/factory')
          done()
        })
      })
    })
  })

  it('Can create a stack', () =>
  {
    expect(() =>
    {
      factory.create()
    }).to.not.throw()
  })

  it('Can get toStringTag of a stack', () =>
  {
    const
    stack = factory.create(),
    tag = Object.prototype.toString.call(stack)

    expect(tag).to.deep.equal('[object Stack]')
  })


  it('Can stack an element', () =>
  {
    const stack = factory.create()

    stack.stack(1)

    expect(stack.items).to.deep.equal([1])
  })

  it('Can reset a stack', () =>
  {
    const stack = factory.create()

    stack.stack(1)

    stack.reset()

    expect(stack.items).to.deep.equal([])
  })

  it('Can check if stack is empty', () =>
  {
    const stack = factory.create()

    let isEmpty = stack.isEmpty()
    expect(isEmpty).to.be.equal(true)

    stack.stack(1)

    isEmpty = stack.isEmpty()
    expect(isEmpty).to.be.equal(false)
  })

  it('Can pop an element', () =>
  {
    const stack = factory.create()

    stack.stack(1)
    stack.stack(2)
    stack.stack(3)

    expect(stack.items.length).to.be.equal(3)

    const element = stack.pop()

    expect(element).to.be.equal(3)

    expect(stack.items.length).to.be.equal(2)
  })

  it('If stack is empty, pop returns undefined', () =>
  {
    const
    stack   = factory.create(),
    element = stack.pop()

    expect(stack.items.length).to.be.equal(0)
    expect(element).to.be.equal(undefined)
  })

  it('Can get the last element without modifiying the stack', () =>
  {
    const stack = factory.create()

    stack.stack(1)
    stack.stack(2)
    stack.stack(3)

    const element = stack.peek()

    expect(stack.items.length).to.be.equal(3)
    expect(element).to.be.equal(3)
    expect(stack.items.length).to.be.equal(3)
  })

  it('If stack is empty, peek() returns undefined', () =>
  {
    const
    stack   = factory.create(),
    element = stack.peek()

    expect(stack.items.length).to.be.equal(0)
    expect(element).to.be.equal(undefined)
  })
})
