import { describe, test, expect } from "vitest";
import TrayTitle from "./TrayTitle.vue";
import { mount } from "@vue/test-utils";

describe("TrayTitle component", () => {
  test("it has a heading", () => {
    const wrapper = mount(TrayTitle, {
      props: {
        heading: "Articles+",
        icon: "text",
      },
    });
    expect(wrapper.find("h2").text()).toEqual("Articles+");
  });
  test("heading has an icon", () => {
    const wrapper = mount(TrayTitle, {
      props: {
        heading: "Articles+",
        icon: "text",
      },
    });
    expect(wrapper.find("h2 span.icon.icon-text").exists()).toBe(true);
  });
  test("heading does not attempt to display an icon when prop is not supplied", () => {
    const wrapper = mount(TrayTitle, {
      props: {
        heading: "Articles+",
      },
    });
    expect(wrapper.find("h2 span.icon").exists()).toBe(false);
  });
  test("when a description is provided, it adds it", () => {
    const wrapper = mount(TrayTitle, {
      props: {
        description: "The best place to search",
      },
    });
    expect(wrapper.find('div[class="description"]').text()).toEqual(
      "The best place to search",
    );
  });
});
