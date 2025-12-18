import { Banner } from '../interfaces/Banner';

export class BannerResult implements Banner {
  text: string;
  display_banner: boolean;
  alert_status: string;
  dismissible: boolean;
  autoclear: boolean;

  constructor(
    banner_text: string,
    display_banner: boolean,
    alert_status: string,
    dismissible: boolean,
    autoclear: boolean
  ) {
    this.text = banner_text;
    this.display_banner = display_banner;
    this.alert_status = alert_status;
    this.dismissible = dismissible;
    this.autoclear = autoclear;
  }

  static fromObject(object: Banner) {
    return new BannerResult(
      object.text,
      object.display_banner,
      object.alert_status,
      object.dismissible,
      object.autoclear
    );
  }
}
