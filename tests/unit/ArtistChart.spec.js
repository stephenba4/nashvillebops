import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import store from '@/store';
import Home from '@/views/Home.vue';

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('Home', () => {
  it('renders', () => {
    const wrapper = shallowMount(Home, { store, localVue });
    const findHome = wrapper.findComponent({ name: 'Home' })
    expect(findHome.exists()).toBe(true);
  });
});
