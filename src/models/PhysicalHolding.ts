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
  statusLabel() {
    switch (this.status) {
      case 'Available':
        return 'AVAILABLE AT';
      case 'Loading...':
        return 'Loading...';
      default:
        return 'REQUEST';
    }
  }
  statusColor(): string {
    switch (this.status) {
      case 'Available':
        return 'green';
      case 'Loading...':
        return 'gray';
      default:
        return 'yellow';
    }
  }
}
