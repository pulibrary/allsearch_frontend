import { VueWrapper, mount, flushPromises } from '@vue/test-utils';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  SpyInstance,
  vi
} from 'vitest';
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

  describe('when the result is dismissible', () => {
    beforeEach(() => {
      mock = vi.spyOn(BannerService.prototype, 'result');
      testResult = new BannerResult(
        'This is an error',
        true,
        'info',
        true,
        true
      );
      mock.mockResolvedValue(testResult);
      vi.useFakeTimers();
    });
    afterEach(() => {
      vi.useRealTimers();
    });
    it('sets the dismissible property', async () => {
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
    it('records the banner text and date in localStorage when user dismisses it', async () => {
      wrapper = mount(BannerAlert, {
        props: {
          resultsPromise: new BannerService().result()
        }
      });
      await flushPromises();
      const setItem = vi.spyOn(window.localStorage, 'setItem');
      vi.setSystemTime(new Date(2030, 0, 1)); // January 1, 2030
      wrapper.get('button.lux-close').trigger('click');

      expect(setItem).toHaveBeenCalledWith(
        'allsearch-banner-dismissed',
        '{"date":"2030-01-01","text":"This is an error"}'
      );
    });

    it('does not display the banner if it has been dismissed in the past week', async () => {
      const getItem = vi.spyOn(window.localStorage, 'getItem');
      getItem.mockReturnValue(
        '{"date":"2030-01-01","text":"This is an error"}'
      );
      vi.setSystemTime(new Date(2030, 0, 5)); // January 5, 2030

      wrapper = mount(BannerAlert, {
        props: {
          resultsPromise: new BannerService().result()
        }
      });
      await flushPromises();

      expect(wrapper.find('div.lux-alert').exists()).toBe(false);
    });

    it('does display the banner if it was been dismissed a long time ago', async () => {
      const getItem = vi.spyOn(window.localStorage, 'getItem');
      getItem.mockReturnValue(
        '{"date":"2030-01-01","text":"This is an error"}'
      );
      vi.setSystemTime(new Date(2035, 6, 20)); // July 20, 2035

      wrapper = mount(BannerAlert, {
        props: {
          resultsPromise: new BannerService().result()
        }
      });
      await flushPromises();

      expect(wrapper.find('div.lux-alert').exists()).toBe(true);
    });

    it('does display the banner if the text is different than what was previously dismissed', async () => {
      const getItem = vi.spyOn(window.localStorage, 'getItem');
      getItem.mockReturnValue(
        '{"date":"2030-01-01","text":"This text is outdated"}'
      );
      vi.setSystemTime(new Date(2030, 0, 5)); // January 5, 2030

      wrapper = mount(BannerAlert, {
        props: {
          resultsPromise: new BannerService().result()
        }
      });
      await flushPromises();

      expect(wrapper.find('div.lux-alert').exists()).toBe(true);
    });
  });
});
