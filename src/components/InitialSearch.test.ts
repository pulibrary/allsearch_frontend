import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InitialSearch from './InitialSearch.vue'

describe('FormatWithIcon component', () => {
  test('it includes an h1', async () => {
    const wrapper = mount(InitialSearch)
    expect(wrapper.find('h1').text()).toEqual(
      'Search Princeton University Library Resources'
    )
  })
})
