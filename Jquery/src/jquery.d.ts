// Es6 模块化

declare module 'jquery' {
  interface jqueryInstance {
    html: (html: string) => jqueryInstance;
  }

  function $(readyFunc: () => void):void;
  function $(selector: string): jqueryInstance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }

  export = $;
}