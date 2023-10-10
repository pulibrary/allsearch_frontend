import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import OnlineContent from './OnlineContent.vue';

describe('OnlineContent component', () => {
    test('it has a link that opens in new tab', async () => {
        const wrapper = mount(OnlineContent, {
            props: {
                url: 'https://na05.alma.exlibrisgroup.com/view/uresolver/01PRI_INST/openurl?u.ignore_date_coverage=true&portfolio_pid=53763462940006421&Force_direct=true'
            }
        });
        const link = wrapper.find('a');
        expect(link.text()).toEqual('Online content');
        expect(link.attributes('href')).toEqual('https://na05.alma.exlibrisgroup.com/view/uresolver/01PRI_INST/openurl?u.ignore_date_coverage=true&portfolio_pid=53763462940006421&Force_direct=true');
        const ariaDescribedById = link.attributes('aria-describedby');
        console.log(ariaDescribedById)
        const linkDescription = wrapper.find('#' + ariaDescribedById);
        expect(linkDescription.text()).toEqual('Opens in new tab');
    });
});
