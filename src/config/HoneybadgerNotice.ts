import { Types as HoneyBadger } from '@honeybadger-io/core';

export function processException(
  exception: HoneyBadger.Notice | undefined
): boolean | void {
  if (exception && isSafariBug(exception)) {
    // Returning false means that we do _not_ send the message to honeybadger
    return false;
  }
}

// Does the honeybadger exception come from Safari bug https://bugs.webkit.org/show_bug.cgi?id=279356 ?
function isSafariBug(exception: HoneyBadger.Notice): boolean {
  return (
    exception.message === 'Attempted to assign to readonly property.' &&
    exception.backtrace.some(
      (frame: HoneyBadger.BacktraceFrame) =>
        frame.method === 'extractFilteredSchemaValuesFromMicroData'
    )
  );
}
