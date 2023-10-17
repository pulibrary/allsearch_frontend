import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ArticleCitation from "./ArticleCitation.vue";

describe("ArticleHoldings component", () => {
  test("it shows the journal title if available", () => {
    const wrapper = mount(ArticleCitation, {
      props: {
        fields: {
          publication_title: "Journal of Advanced Cats",
        },
      },
    });
    expect(wrapper.find("em").text()).toEqual(
      "Contained in: Journal of Advanced Cats",
    );
  });
  test("it shows a full chronology if all metadata is available", () => {
    const wrapper = mount(ArticleCitation, {
      props: {
        fields: {
          publication_date: "2016-06-28",
          publication_year: "2016",
          start_page: "5619",
          end_page: "5634",
          fulltext_available: "Full-text available",
          abstract:
            "Autonomous propulsion at the nanoscale represents one of the most challenging and demanding goals in nanotechnology. Over the past decade, numerous important advances in nanotechnology and material science have contributed to the creation of powerful self-propelled micro/nanomotors. In particular, micro- and nanoscale rockets (MNRs) offer impressive capabilities, including remarkable speeds, large cargo-towing forces, precise motion controls, and dynamic self-assembly, which have paved the way for designing multifunctional and intelligent nanoscale machines. These multipurpose nanoscale shuttles can propel and function in complex real-life media, actively transporting and releasing therapeutic payloads and remediation agents for diverse biomedical and environmental applications. This review discusses the challenges of designing efficient MNRs and presents an overview of their propulsion behavior, fabrication methods, potential rocket fuels, navigation strategies, practical applications, and the future prospects of rocket science and technology at the nanoscale.",
          volume: "10",
          issue: "6",
          isxn: "1936-0851",
        },
      },
    });
    expect(wrapper.text()).toEqual("Vol. 10, No. 6, 2016, pp. 5619-5634");
  });
});
