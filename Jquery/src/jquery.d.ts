interface jqueryInstance {
  html: (html: string) => jqueryInstance
}


// 函数重载
declare var $ : (param: () => void) => void;

declare function $(param: () => void):void;

declare function $(param:string):jqueryInstance;

declare namespace $ {
  namespace fn {
    class init {}
  }
}


// 使用interface语法实现函数重载
// interface Jquery {
//   (readyFunc : () => void):void;
//   (selector: string): jqueryInstance
// }

// declare var $:Jquery