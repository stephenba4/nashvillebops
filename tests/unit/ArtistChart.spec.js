import { shallowMount } from '@vue/test-utils';
import ArtistChart from '@/views/ArtistChart.vue';

describe('ArtistChart.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ArtistChart, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
