export class IdService {
  // Takes a string as input, and makes it suitable for use as an id.
  // Only ASCII letters, digits, '_', and '-' should be used in an id, per
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id

  static createDomId(originalString: string) {
    return originalString
      .toLowerCase()
      .replace(/[^\w\d\s-_]/g, '')
      .trim()
      .replace(/\s/g, '-');
  }
}
