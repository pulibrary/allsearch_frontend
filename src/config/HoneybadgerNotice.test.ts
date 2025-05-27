import { describe, expect, it } from 'vitest';
import { processException } from './HoneybadgerNotice';
import { Types as HoneyBadger } from '@honeybadger-io/core';

describe('processException()', () => {
  it('rejects exceptions that originate from safari bug https://bugs.webkit.org/show_bug.cgi?id=279356', () => {
    const exception = {
      backtrace: [
        {
          file: 'https://allsearch.princeton.edu/',
          method: 'extractFilteredSchemaValuesFromMicroData',
          number: 3,
          column: 4413
        },
        {
          file: 'https://allsearch.princeton.edu/',
          method: 'extractSchemaValuesFromSchemaOrg',
          number: 3,
          column: 6537
        },
        {
          file: 'https://allsearch.princeton.edu/',
          method: 'global code',
          number: 3,
          column: 6960
        }
      ],
      message: 'Attempted to assign to readonly property.'
    } as HoneyBadger.Notice;
    // If the handler returns false, we do not send the exception to honeybadger
    expect(processException(exception)).toEqual(false);
  });

  it('does not reject exceptions that originate from safari bug https://bugs.webkit.org/show_bug.cgi?id=279356', () => {
    const exception = {
      backtrace: [
        {
          file: 'https://allsearch.princeton.edu/assets/index-DEd7mAaR.js',
          method: '_',
          number: 48,
          column: 354
        }
      ],
      message: 'UnhandledPromiseRejectionWarning: Unspecified reason'
    } as HoneyBadger.Notice;
    // If the handler returns anything other than false, we can send the exception to honeybadger
    expect(processException(exception)).not.toEqual(false);
  });
});
