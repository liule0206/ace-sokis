import Vue from 'vue'
import vDetail from './routes/Detail/components/DetailView'

describe('(Detail) view', () => {
 
  let el
  beforeEach(() => {
    el = document.createElement('div')
    document.body.appendChild(el)
  })

  afterEach(() => {
    document.body.removeChild(el)
  })

  it('Test  detail.', () => {
    const vm = new Vue({
      el,
      replace: false,
      template: '<v-detail></v-detail>',
      components: {
        vDetail
      }
    })
    expect(vm.$children.length).to.equal(1)
  })
})