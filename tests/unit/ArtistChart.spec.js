import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import store from '@/store';
import ArtistChart from '@/views/ArtistChart.vue';

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('ArtistChart', () => {
  it('renders', () => {
    const wrapper = shallowMount(ArtistChart, { store, localVue });
    const artistChart = wrapper.findComponent({ name: 'ArtistChart' })
    expect(artistChart.exists()).toBe(true);
  });
});
