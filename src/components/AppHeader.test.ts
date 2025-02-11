import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import AppHeader from './AppHeader.vue';

const wrapper = mount(AppHeader);

describe('AppHeader component', () => {
  test('it has a link to Accounts', () => {
    const accountsLink = wrapper.get(
      'a[href="https://library.princeton.edu/services/accounts"]'
    );
    expect(accountsLink.text()).toEqual('Accounts');
  });
  test('it has a link to Hours', () => {
    const hoursLink = wrapper.get(
      'a[href="https://library.princeton.edu/hours"]'
    );
    expect(hoursLink.text()).toEqual('Hours');
  });
  test('it has a link to Hours', () => {
    const helpLink = wrapper.get(
      'a[href="https://library.princeton.edu/hours"]'
    );
    expect(helpLink.text()).toEqual('Hours');
  });
  test('it has several links under Search Tools', () => {
    const searchToolsButton = wrapper
      .findAll('button')
      .find(button => button.text() === 'Search Tools');
    searchToolsButton?.trigger('click');

    const libraryCatalogLink = wrapper.get(
      'a[href="https://catalog.princeton.edu/"]'
    );
    expect(libraryCatalogLink.text()).toEqual('Library Catalog');

    const articlesLink = wrapper.get(
      'a[href="https://princeton.summon.serialssolutions.com/"]'
    );
    expect(articlesLink.text()).toEqual('Articles+');

    const databasesLink = wrapper.get(
      'a[href="https://libguides.princeton.edu/az/databases"]'
    );
    expect(databasesLink.text()).toEqual('Databases');

    const findingAidsLink = wrapper.get(
      'a[href="https://findingaids.princeton.edu/"]'
    );
    expect(findingAidsLink.text()).toEqual('Finding Aids');

    const digitalLibraryLink = wrapper.get(
      'a[href="https://dpul.princeton.edu/"]'
    );
    expect(digitalLibraryLink.text()).toEqual('Digital Library (DPUL)');

    const allSearchToolsLink = wrapper.get(
      'a[href="https://library.princeton.edu/services?type=1551"]'
    );
    expect(allSearchToolsLink.text()).toEqual('All Search Tools');
  });
  describe('Appearance menu', () => {
    test('it saves the selected color mode in local storage', () => {
      const setItem = vi.spyOn(window.localStorage, 'setItem');

      const appearanceButton = wrapper
        .findAll('button')
        .find(button => button.text() === 'Appearance');
      appearanceButton?.trigger('click');
      const libraryCatalogLink = wrapper
        .findAll('button')
        .find(button => button.text() === 'Dark mode');
      libraryCatalogLink?.trigger('click');

      expect(setItem).toHaveBeenCalledWith('mode', 'dark');
    });
  });
});
