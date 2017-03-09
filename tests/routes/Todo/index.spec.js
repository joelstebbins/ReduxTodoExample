import TodoRoute from 'routes/Todo'

describe('(Route) Todo', () => {
  let _component

  beforeEach(() => {
    _component = TodoRoute.component()
  })

  it('Should return a route configuration object', () => {
    expect(typeof TodoRoute).to.equal('object')
  })

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div')
  })
})
