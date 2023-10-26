export class StringService {
  static truncate(stringToTruncate: string, characters = 150): string {
    if (stringToTruncate.length > characters) {
      const nextReasonableBreakpoint =
        stringToTruncate.slice(characters - 1).search(/[\s,!\-.$]/) +
        (characters - 1);
      const truncated = stringToTruncate
        .slice(0, nextReasonableBreakpoint)
        .trimEnd()
        .replace(/[\s,!\-.]+$/, '');
      return truncated + '…';
    } else {
      return stringToTruncate;
    }
  }
}
