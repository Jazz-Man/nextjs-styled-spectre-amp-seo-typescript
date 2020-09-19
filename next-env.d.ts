/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.scss" {
  const content: string;
  export default content;
}
// Any element you create will be accepted
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
