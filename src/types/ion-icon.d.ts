// Ion Icon Type Declaration
/* eslint-disable no-unused-vars */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': {
        name: string;
        'aria-hidden'?: boolean;
        class?: string;
        size?: string;
      };
    }
  }
}

export {};
