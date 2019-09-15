webpackJsonp([2],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("69a55f17", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8dc7cce2\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8dc7cce2\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.container[data-v-8dc7cce2] {\n  min-width: 1000px;\n  background: #eee;\n  text-align: center;\n  vertical-align: center;\n  min-height: 100vh;\n  padding-bottom: 20px;\n}\n.container .header[data-v-8dc7cce2] {\n  border-bottom: 1px solid red;\n  padding: 20px 0;\n  box-shadow: -3px 9px 3px -3px rgba(210, 91, 91, 0.75);\n  margin-bottom: 20px;\n  overflow: hidden;\n  height: 80px;\n}\n.container .header h1[data-v-8dc7cce2] {\n  text-align: left;\n  width: 300px;\n  margin: 0 auto;\n}\n.container .header h1 .boomtext[data-v-8dc7cce2] {\n  display: none;\n  display: inline-block;\n}\n.container .button[data-v-8dc7cce2] {\n  display: inline-block;\n  font-size: 20px;\n  margin: 10px;\n  background: #69cc69;\n  color: #fff;\n  padding: 10px 20px;\n  margin: 10px 60px;\n  border-radius: 30px;\n  width: 200px;\n  box-shadow: 0px 0px 3px 5px rgba(222, 204, 204, 0.75);\n}\n.container .button[data-v-8dc7cce2]:hover {\n  background: #9add43;\n}\n.container .img[data-v-8dc7cce2] {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  border-radius: 20px;\n  box-shadow: 3px 3px 11px 1px rgba(155, 215, 150, 0.75);\n  overflow: hidden;\n}\n.container .img .img-cotainer[data-v-8dc7cce2] {\n  width: 200%;\n  height: 100%;\n  transition: all 0.5s;\n  transform: translateX(0);\n}\n.container .img .img-cotainer img[data-v-8dc7cce2] {\n  width: 497px;\n  height: 100%;\n}\n.container .img.xxx .img-cotainer[data-v-8dc7cce2] {\n  transform: translateX(-50%);\n}\n", ""]);

// exports


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "header" }, [
        _c(
          "h1",
          _vm._l(_vm.title, function(item) {
            return _c(
              "span",
              { key: item, staticClass: "boomtext rollIn animated" },
              [_vm._v(_vm._s(item))]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "button",
          attrs: { href: "#/card" },
          on: {
            mouseenter: function($event) {
              _vm.xxx = false
            }
          }
        },
        [_vm._v("蜘蛛纸牌")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "button",
          attrs: { href: "#/mine" },
          on: {
            mouseenter: function($event) {
              _vm.xxx = true
            }
          }
        },
        [_vm._v("扫雷")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "img", class: { xxx: _vm.xxx } }, [_vm._m(0)])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "img-cotainer" }, [
      _c("a", { attrs: { href: "#/card" } }, [
        _c("img", {
          attrs: { src: __webpack_require__(134), alt: "" }
        })
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "#/mine" } }, [
        _c("img", {
          attrs: { src: __webpack_require__(135), alt: "" }
        })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8dc7cce2", esExports)
  }
}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2a3061fd-card.jpg";

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "980243bb-mine.jpg";

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dc7cce2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8dc7cce2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dc7cce2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8dc7cce2", Component.options)
  } else {
    hotAPI.reload("data-v-8dc7cce2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(8);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.fn.boomText = function (type) {
  type = type || "rollIn";
  /*得到this中的内容*/
  this.html(function () {
    var arr = (0, _jquery2.default)(this).text().split("").map(function (word) {
      return "<span class='boomtext'>" + word + "</span>";
    });
    return arr.join("");
  });
  var index = 0;
  var $boomTexts = (0, _jquery2.default)(this).find("span");
  var clock = setInterval(function () {
    $boomTexts.eq(index).addClass("animated " + type);
    index++;
    if (index >= $boomTexts.length) {
      clearInterval(clock);
    }
  }, 300);
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      xxx: true,
      show: ["请", "选", "择", "你", "想", "玩", "的", "游", "戏"],
      title: [' ']
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.show) {
      setInterval(function () {
        _this.title.push(_this.show.shift());
      }, 300);
    }
    // $('p').boomText()
  }
};

/***/ })

});