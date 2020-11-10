import { mount } from '@vue/test-utils'
import Hero from '@/components/Hero.vue'

describe('Hero', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Hero)
    expect(wrapper.vm).toBeTruthy()
  })
})
