import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PhysicalHoldings from './PhysicalHoldings.vue'

describe('PhysicalHoldings component', () => {
  test('it shows the library and call number', async () => {
    const wrapper = mount(PhysicalHoldings, {
      props: {
        document: {
          title: '',
          url: '',
          id: '',
          other_fields: {
            library: 'ReCAP',
            call_number: 'DU110 .G738 1947'
          }
        }
      }
    })
    expect(wrapper.text()).toEqual('Location:  ReCAP » DU110 .G738 1947')
  })
  test('it shows only the library if no call number is available', async () => {
    const wrapper = mount(PhysicalHoldings, {
      props: {
        document: {
          title: '',
          url: '',
          id: '',
          other_fields: {
            library: 'ReCAP'
          }
        }
      }
    })
    expect(wrapper.text()).toEqual('Location:  ReCAP')
  })
  test('it shows nothing if the library is not available', async () => {
    const wrapper = mount(PhysicalHoldings, {
      props: {
        document: {
          title: '',
          url: '',
          id: '',
          other_fields: {
            call_number: 'DU110 .G738 1947'
          }
        }
      }
    })
    expect(wrapper.text()).toEqual('')
  })
})
