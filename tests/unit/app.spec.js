import { mount  } from '@vue/test-utils'
import Heroicons from '@/components/Heroicons.vue'

describe('Heroicons.vue', () => {
  it('renders svg tag', () => {
    const wrapper = mount(Heroicons)
    const icon = wrapper.get('svg')

    expect(icon.isVisible()).toBeTruthy()
  })

  it('set props.type to "medium" by default', () => {
    const wrapper = mount(Heroicons)
    expect(wrapper.props('type')).toMatch('medium')
  })

  it('renders props.type when passed', () => {
    const type = 'small'
    const wrapper = mount(Heroicons, {
      props: { type }
    })
    expect(wrapper.props('type')).toMatch(type)
  })

  it('renders props.icon when passed', () => {
    const icon = 'academic-cap'
    const wrapper = mount(Heroicons, {
      props: { icon }
    })
    expect(wrapper.props('icon')).toMatch(icon)
  })

  it('return svg path when passed by correct icon name', () => {
    const icon = 'academic-cap'
    const wrapper = mount(Heroicons, {
      props: { icon }
    })
    wrapper.get('svg')
    expect(wrapper.find('path').exists()).toBeTruthy()
  })

  it('return nothing when incorrect icon name passed', () => {
    const icon = 'nonexistent-icon-name'
    const wrapper = mount(Heroicons, {
      props: { icon }
    })
    wrapper.get('svg')
    expect(wrapper.find('path').exists()).toBeFalsy()
  })
})
