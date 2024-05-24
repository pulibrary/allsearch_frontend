import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppHeader from './AppHeader.vue';

const wrapper = mount(AppHeader);

describe('AppHeader component', () => {
  test('it has a link to Accounts', () => {
    const accountsLink = wrapper.get(
      'a[href="https://library.psb-prod.princeton.edu/accounts"]'
    );
    expect(accountsLink.text()).toEqual('Accounts');
  });
  test('it has a link to Hours', () => {
    const hoursLink = wrapper.get(
      'a[href="https://library.psb-prod.princeton.edu/hours"]'
    );
    expect(hoursLink.text()).toEqual('Hours');
  });
  test('it has a Schedule a Consultation link under Help', () => {
    const helpButton = wrapper
      .findAll('button')
      .find(button => button.text() === 'Help');
    helpButton?.trigger('click');

    const consultationLink = wrapper.get(
      'a[href="https://library.psb-prod.princeton.edu/help/schedule-consultation"]'
    );
    expect(consultationLink.text()).toEqual('Schedule a Consultation');
  });
  test('it has several links under For You', () => {
    const forYouButton = wrapper
      .findAll('button')
      .find(button => button.text() === 'Help');
    forYouButton?.trigger('click');

    const facultyLink = wrapper.get(
      'a[href="https://library.psb-prod.princeton.edu/you/faculty"]'
    );
    expect(facultyLink.text()).toEqual('Faculty');

    const gradLink = wrapper.get(
      'a[href="https://library.psb-prod.princeton.edu/you/graduate-students"]'
    );
    expect(gradLink.text()).toEqual('Graduate Students');

    const undergradLink = wrapper.get(
      'a[href="https://library.psb-prod.princeton.edu/you/undergraduate-students"]'
    );
    expect(undergradLink.text()).toEqual('Undergraduate Students');

    const visitLink = wrapper.get(
      'a[href="https://library.psb-prod.princeton.edu/you/visitors"]'
    );
    expect(visitLink.text()).toEqual('Visitors');
  });
});
