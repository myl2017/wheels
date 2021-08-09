const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })

    it('子元素只能是 tabs-head 和 tabs-body', () => {

    })

})
