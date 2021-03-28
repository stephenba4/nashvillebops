import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import store from '@/store';
import PlaylistsAndCharts from '@/views/PlaylistsAndCharts.vue';

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('PlaylistsAndCharts', () => {
  it('renders', () => {
    const wrapper = shallowMount(PlaylistsAndCharts, { store, localVue });
    const findPlaylistsAndCharts = wrapper.findComponent({ name: 'PlaylistsAndCharts' })
    expect(findPlaylistsAndCharts.exists()).toBe(true);
  });
});
