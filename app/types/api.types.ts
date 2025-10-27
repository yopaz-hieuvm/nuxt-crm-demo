export type ResponseToken = {
  access_token: string;
  refresh_token: string;
};
export type HttpMethod =
  | "OPTIONS"
  | "GET"
  | "HEAD"
  | "PATCH"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "TRACE"
  | "options"
  | "get"
  | "head"
  | "patch"
  | "post"
  | "put"
  | "delete"
  | "connect"
  | "trace";
