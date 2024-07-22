import { VueWrapper, mount, flushPromises } from '@vue/test-utils';
import { describe, expect, it, SpyInstance, vi } from 'vitest';
import { BannerResult } from '../models/BannerResult';
import { BannerService } from '../services/BannerService';
import BannerAlert from './BannerAlert.vue';

let mock: SpyInstance;
let wrapper: VueWrapper;
let testResult: BannerResult;

describe('Banner', () => {
  it('does not display when disabled', async () => {
    mock = vi.spyOn(BannerService.prototype, 'result');
    testResult = new BannerResult('', false, 'info', false, false);
    mock.mockResolvedValue(testResult);
    wrapper = mount(BannerAlert, {
      props: {
        resultsPromise: new BannerService().result()
      }
    });

    await flushPromises();
    expect(wrapper.find('div.lux-alert').exists()).toBe(false);
  });

  it('does display when enabled', async () => {
    mock = vi.spyOn(BannerService.prototype, 'result');
    testResult = new BannerResult('This is a test', true, 'info', true, false);
    mock.mockResolvedValue(testResult);
    wrapper = mount(BannerAlert, {
      props: {
        resultsPromise: new BannerService().result()
      }
    });

    await flushPromises();
    expect(wrapper.find('div.lux-alert').exists()).toBe(true);
    expect(wrapper.find('div.lux-alert').find('span').text()).toEqual(
      'This is a test'
    );
    expect(wrapper.find('div.lux-alert.lux-alert-info').exists()).toBe(true);
  });

  it('has the correct alert type', async () => {
    mock = vi.spyOn(BannerService.prototype, 'result');
    testResult = new BannerResult(
      'This is an error',
      true,
      'error',
      true,
      false
    );
    mock.mockResolvedValue(testResult);
    wrapper = mount(BannerAlert, {
      props: {
        resultsPromise: new BannerService().result()
      }
    });

    await flushPromises();
    expect(wrapper.find('div.lux-alert').exists()).toBe(true);
    expect(wrapper.find('div.lux-alert-error').exists()).toBe(true);
  });

  it('sets the dismissible property', async () => {
    mock = vi.spyOn(BannerService.prototype, 'result');
    testResult = new BannerResult('This is an error', true, 'info', true, true);
    mock.mockResolvedValue(testResult);
    wrapper = mount(BannerAlert, {
      props: {
        resultsPromise: new BannerService().result()
      }
    });

    await flushPromises();
    expect(wrapper.find('div.lux-alert').exists()).toBe(true);
    expect(wrapper.find('div.lux-alert-info').exists()).toBe(true);
    expect(wrapper.find('div.lux-alert-dismissible').exists()).toBe(true);
  });
});
