export class PhysicalHolding {
  library: string;
  call_number?: string;
  status?: string;
  barcode?: string;

  constructor(
    library: string,
    call_number?: string,
    status?: string,
    barcode?: string
  ) {
    this.library = library;
    this.call_number = call_number;
    this.status = status;
    this.barcode = barcode;
  }
  label() {
    if (this.library && this.call_number) {
      return `${this.library} » ${this.call_number}`;
    } else if (this.library) {
      return this.library;
    }
  }
  statusColor(): string {
    switch (this.status) {
      case 'Available':
        return 'green';
      case 'Unavailable':
        return 'red';
      default:
        return 'gray';
    }
  }
}
