(function(){this.JST||(this.JST={}),this.JST["locastyle/templates/_popover"]=function(e){e||(e={});var n,s=[],t=function(e){return e&&e.ecoSafe?e:"undefined"!=typeof e&&null!=e?p(e):""},l=e.safe,p=e.escape;return n=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var n=new String(e);return n.ecoSafe=!0,n},p||(p=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){s.push('<div id="ls-popover-'),s.push(t(this.index)),s.push('" class="ls-popover ls-popover-'),s.push(t(this.placement||"top")),s.push(" "),s.push(t(this.customClasses)),s.push('">\n  '),this.title&&(s.push('\n  <div class="ls-popover-header">\n    <h3 class="title-3"> '),s.push(t(this.title)),s.push(" </h3>\n  </div>\n  ")),s.push("\n  "),this.content&&s.push("\n  "),s.push('\n  <div class="ls-popover-content"> '),s.push(this.content),s.push(" </div>\n</div>\n")}).call(this)}.call(e),e.safe=l,e.escape=p,s.join("")}}).call(this),function(){this.JST||(this.JST={}),this.JST["locastyle/templates/_dropdown"]=function(e){e||(e={});var n,s=[],t=e.safe,l=e.escape;return n=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var n=new String(e);return n.ecoSafe=!0,n},l||(l=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){var e,n,t,l;for(s.push('<div data-ls-module="dropdown" class="ls-dropdown">\n  <a href="#" class="ls-btn"></a>\n  <ul class="ls-dropdown-nav">\n    '),l=this.elements,n=0,t=l.length;t>n;n++)e=l[n],s.push("\n      "),""!==e.text&&(s.push("\n        <li>"),s.push(e.outerHTML),s.push("</li>\n      ")),s.push("\n    ");s.push("\n  </ul>\n</div>\n")}).call(this)}.call(e),e.safe=t,e.escape=l,s.join("")}}.call(this);