export interface Result {
  title: string;
  url: string;
  id: string;
  creator?: string;
  description?: string;
  type?: string;
  publisher?: string;
  other_fields?: { [key: string]: string };
}
