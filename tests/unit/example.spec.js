import { shallowMount } from '@vue/test-utils';
import ArtistTable from '@/components/ArtistTable.vue';

describe('ArtistTable.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ArtistTable, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
