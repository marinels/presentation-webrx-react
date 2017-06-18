declare module 'spectacle/lib/themes/default' {
  interface Theme {
    screen: any;
    print: any;
  }

  export default function createTheme(colors: any, fonts: any): Theme;
}

declare module 'spectacle/lib/utils/preloader' {
  export default function preloader(imageCollection: any): void;
}
