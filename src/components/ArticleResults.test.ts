import { describe, test, expect, beforeEach, vi } from "vitest";
import ArticleResults from "./ArticleResults.vue";
import { flushPromises, mount } from "@vue/test-utils";
import { SearchService } from "../services/SearchService";

describe('ArticleResults component', () => {
    beforeEach(() => {
        const mock = vi.spyOn(SearchService.prototype, 'results');
        mock.mockResolvedValue(
            {
                number: 1_000,
                more: 'https://example.com/articles',
                results: [{
                    title: 'Study on potatoes',
                    creator: 'Dr. Potato',
                    type: 'Metaanalysis',
                    url: 'http://article.com',
                    id: '123',
                    other_fields: {
                        "publication_title": "Combustion and flame",
                        "volume": "193",
                        "isxn": "0010-2180",
                        "abstract": "This article is cool",
                        "fulltext_available": "Full-text available",
                        "start_page": "520",
                        "end_page": "537",
                        "publication_date": "July 2018",
                        "publication_year": "2018"
                    }
                }, {
                    "title": "Rocket Science at the Nanoscale",
                    "creator": "Li, Jinxing",
                    "publisher": "American Chemical Society",
                    "id": "10.1021/acsnano.6b02518",
                    "type": "Journal Article",
                    "description": ".... In particular, micro- and <h>nanoscale rockets</h> (MNRs) offer impressive capabilities, including remarkable speeds, large cargo-towing forces, precise motion controls, and dynamic self-assembly, which have paved the way for designing multifunctional...",
                    "url": "http://princeton.summon.serialssolutions.com/2.0.0/link/0/eLvHCXMwjV3dS8MwED_8eFAfxC90fowKIr5kW9O1TWEMZGyIqA9TQZ9Kkl7YYHTDdq_-7V7WbupkIHkNR_PL5e53ufILQG0pHsjRqNg1JidDRpzHvr7jMpfOSqPJ7NX-Y3T_4Pff_Pfut2z0ci-fu3Wps1Sm41qgLDEW67BptVesYP7TZ20efq0HBkUrmUpl4hMLPZ8_BmxC0tnvhLSCZc6yTW8Pdkua6NwW-7oPa5gewM4P8cBDuG4N2n2KZpg75QF1ZO4Qn3MoYo4zwh5b9UH7CF573ZfOHStfPWDSC_ycecKXgSZgoyRRygi0RY00CmmtrkZtEpP4rm4YGlTPIaUXgSY0qInpqabnnYCTaONFWgUYWXl4gSLkzTCIuEh0QxpUFbiilcelu2bxrBPN3bgEKC4BqsDNHJp4UohfrJ56OYcuJge1XQeZ4nhKtoUNFERMwgocF5gujHGqP6mg4af_-54z2Ca-Etg_tbg4h438Y4oXsGVvQDUSVa4SM-48V2f-8AU4P7bP",
                    "other_fields": {
                      "publication_date": "2016-06-28",
                      "publication_year": "2016",
                      "start_page": "5619",
                      "end_page": "5634",
                      "fulltext_available": "Full-text available",
                      "abstract": "Autonomous propulsion at the nanoscale represents one of the most challenging and demanding goals in nanotechnology. Over the past decade, numerous important advances in nanotechnology and material science have contributed to the creation of powerful self-propelled micro/nanomotors. In particular, micro- and nanoscale rockets (MNRs) offer impressive capabilities, including remarkable speeds, large cargo-towing forces, precise motion controls, and dynamic self-assembly, which have paved the way for designing multifunctional and intelligent nanoscale machines. These multipurpose nanoscale shuttles can propel and function in complex real-life media, actively transporting and releasing therapeutic payloads and remediation agents for diverse biomedical and environmental applications. This review discusses the challenges of designing efficient MNRs and presents an overview of their propulsion behavior, fabrication methods, potential rocket fuels, navigation strategies, practical applications, and the future prospects of rocket science and technology at the nanoscale.",
                      "publication_title": "ACS nano",
                      "volume": "10",
                      "issue": "6",
                      "isxn": "1936-0851"
                    }
                }]
            }
        );
    });
    test('it has a heading', () => {
        const wrapper = mount(ArticleResults);
        expect(wrapper.find('h2').text()).toEqual("Articles+");
    });
    test('heading has an articles icon', () => {
        const wrapper = mount(ArticleResults);
        expect(wrapper.find('h2 span.icon.icon-text').exists()).toBe(true);
    });
    test('it contains a link to more results', async () => {
        const wrapper = mount(ArticleResults);
        await flushPromises();
        const link = wrapper.find('a[href="https://example.com/articles"]');
        expect(link.text()).toEqual('View and refine 1,000 results');
    });
    test('the title is in an h3', async () => {
        const wrapper = mount(ArticleResults);
        await flushPromises();
        const titles = wrapper.findAll('h3');
        expect(titles[0].text()).toEqual('Study on potatoes');
    });
    test('it shows the author if it exists', async () => {
        const wrapper = mount(ArticleResults);
        await flushPromises();
        const results = wrapper.findAll('li.document');
        expect(results[0].text()).toContain('Dr. Potato');
    });
    test('it shows the article icon for each format', async () => {
        const wrapper = mount(ArticleResults);
        await flushPromises();
        expect(wrapper.find('span.icon.icon-text[aria-hidden="true"]').exists()).toBe(true);
    });
    test('it shows the journal title if available', async () => {
        const wrapper = mount(ArticleResults);
        await flushPromises();
        expect(wrapper.find('em').text()).toEqual('Contained in: Combustion and flame');
    });
    test('it shows the journal citation information if available', async () => {
        const wrapper = mount(ArticleResults);
        await flushPromises();
        const results = wrapper.findAll('li.document');
        expect(results[1].text().replace(/\s+/g, ' ')).toContain('Vol. 10, No. 6, 2016, pp. 5619-5634');
    });
});
