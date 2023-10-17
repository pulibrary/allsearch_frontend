import { describe, test, expect, beforeEach, vi } from "vitest";
import ArticleResults from "./ArticleResults.vue";
import { flushPromises, mount } from "@vue/test-utils";
import { SearchService } from "../services/SearchService";
import { SearchResults } from "../models/SearchResults";
import ArticleResultsFixture from "../fixtures/ArticleResultsFixtures";

describe("ArticleResults component", () => {
  const testResults = new SearchResults(1_000, "https://example.com/articles", [
    ArticleResultsFixture.testResult1,
    ArticleResultsFixture.testResult2,
  ]);

  beforeEach(() => {
    const mock = vi.spyOn(SearchService.prototype, "results");
    mock.mockResolvedValue(testResults);
  });
  test("it has a heading", () => {
    const wrapper = mount(ArticleResults);
    expect(wrapper.find("h2").text()).toEqual("Articles+");
  });
  test("heading has an articles icon", () => {
    const wrapper = mount(ArticleResults);
    expect(wrapper.find("h2 span.icon.icon-text").exists()).toBe(true);
  });
  test("it contains a link to more results", async () => {
    const wrapper = mount(ArticleResults);
    await flushPromises();
    const link = wrapper.find('a[href="https://example.com/articles"]');
    expect(link.text()).toEqual("View and refine 1,000 results");
  });
  test("the title is in an h3", async () => {
    const wrapper = mount(ArticleResults);
    await flushPromises();
    const titles = wrapper.findAll("h3");
    expect(titles[0].text()).toEqual("Study on potatoes");
  });
  test("it shows the author if it exists", async () => {
    const wrapper = mount(ArticleResults);
    await flushPromises();
    const results = wrapper.findAll("li.document");
    expect(results[0].text()).toContain("Dr. Potato");
  });
  test("it shows the article icon for each format", async () => {
    const wrapper = mount(ArticleResults);
    await flushPromises();
    expect(
      wrapper.find('span.icon.icon-text[aria-hidden="true"]').exists(),
    ).toBe(true);
  });
  test("it shows the journal title if available", async () => {
    const wrapper = mount(ArticleResults);
    await flushPromises();
    expect(wrapper.find("em").text()).toEqual(
      "Contained in: Combustion and flame",
    );
  });
  test("it shows the journal citation information if available", async () => {
    const wrapper = mount(ArticleResults);
    await flushPromises();
    const results = wrapper.findAll("li.document");
    expect(results[1].text()).toContain("Vol. 10, No. 6, 2016, pp. 5619-5634");
  });
});
