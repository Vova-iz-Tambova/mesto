(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var r,n;return r=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"setNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"delMyCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setMyLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"clearMyLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t,r,n){var o=n.handleCardClick,i=n.delMyCard,u=n.setMyLikeCard,a=n.templateSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userId=t,this._card=r,this._name=r.name,this._link=r.link,this._cardId=r._id,this._likes=r.likes,this._ownerCardId=r.owner._id,this._handleCardClick=o,this._delMyCard=i,this._setMyLikeCard=u,this._templateSelector=a}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._likeButtonCardElement=this._element.querySelector(".elements__like"),this._likeCounterCardElement=this._element.querySelector(".elements__likecount"),this._fullscreenImageElement=this._element.querySelector(".elements__photo"),this._fullscreenTagElement=this._element.querySelector(".elements__tag"),(this.hasMyLike=this._likes.some((function(t){return t._id===e._userId})))&&this._likeButtonCardElement.classList.add("elements__like_active"),this._ownerCardId!=this._userId?this._element.querySelector(".elements__delete-button").remove():this._lsnDeleteCardOnList(),this._fullscreenImageElement.src=this._link,this._fullscreenImageElement.alt=this._name,this._fullscreenTagElement.textContent=this._name,this._likeCounterCardElement.textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"checkMyLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"refreshLikeCounter",value:function(e){this._likes=e.likes,this._likeCounterCardElement.textContent=this._likes.length,this._likeButtonCardElement.classList.toggle("elements__like_active")}},{key:"_lsnToggleFavoriteCard",value:function(){var e=this;this._likeButtonCardElement.addEventListener("click",(function(){e._setMyLikeCard(e._element)}))}},{key:"_lsnDeleteCardOnList",value:function(){var e=this;this._element.querySelector(".elements__delete-button").addEventListener("click",(function(){e._delMyCard()}))}},{key:"_lsnFullscreenCardImage",value:function(){var e=this;this._element.querySelector(".elements__photo").addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})}))}},{key:"_setEventListeners",value:function(){this._lsnToggleFavoriteCard(),this._lsnFullscreenCardImage()}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function l(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}var s=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_checkValidity",(function(e){n._currentInputErrorContainer=document.querySelector("#".concat(e.id,"-error")),e.validity.valid?(n._currentInputErrorContainer.textContent="",n._currentInputErrorContainer.classList.remove(n._params._errorClass)):(n._currentInputErrorContainer.textContent=e.validationMessage,n._currentInputErrorContainer.classList.add(n._params._errorClass))})),l(this,"_setFormEventListeners",(function(){n._inputs.forEach((function(e){e.addEventListener("input",(function(){n._checkValidity(e),n._hasInvalidInput()?n.disableButton():n._enableButton()}))}))})),l(this,"_hasInvalidInput",(function(e){return Array.from(n._inputs).some((function(e){return!e.validity.valid}))})),l(this,"disableButton",(function(){n._button.classList.add(n._params.inactiveButtonClass),n._button.setAttribute("disabled",!0)})),l(this,"_enableButton",(function(){n._button.classList.remove(n._params.inactiveButtonClass),n._button.removeAttribute("disabled")})),l(this,"enableValidation",(function(){n._setFormEventListeners()})),this._params=t,this._formElement=document.querySelector(r),this._inputs=this._formElement.querySelectorAll(this._params.inputSelector),this._button=this._formElement.querySelector(this._params.submitButtonSelector)}var t,r;return t=e,(r=[{key:"resetValidation",value:function(){var e=this;this.disableButton(),this._inputs.forEach((function(t){e._checkValidity(t)}))}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var y=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._container.append(t._renderer(e))}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.currentTarget===t.target&&e.close()}))}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},_.apply(this,arguments)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(n);if(o){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._fullScreenPhotoImage=t._popup.querySelector(".popup__fullscreen-photo"),t._fullScreenPhotoTitle=t._popup.querySelector(".popup__fullscreen-title"),t}return t=u,(r=[{key:"open",value:function(e){_(g(u.prototype),"open",this).call(this),this._fullScreenPhotoImage.src=e.link,this._fullScreenPhotoImage.alt=e.name,this._fullScreenPhotoTitle.textContent=e.name}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},C.apply(this,arguments)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(o){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.popupSelector,n=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._form=t._popup.querySelector(".popup__form"),t._handleFormSubmit=n,t._inputs=Array.from(t._form.querySelectorAll(".popup__input")),t._submitBtn=t._form.querySelector(".popup__submit"),t._submitBtnText=t._submitBtn.textContent,t}return t=u,r=[{key:"setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;C(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitBtn.textContent=e?t:this._submitBtnText}},{key:"close",value:function(){C(j(u.prototype),"close",this).call(this),this._form.reset()}}],r&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},T.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(n);if(o){var r=q(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(r=[{key:"submitCallback",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;T(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}var x=function(){function e(t){var r=t.profileName,n=t.profileStatus,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(r),this._profileStatus=document.querySelector(n),this._profileAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{profileName:this._profileName.textContent,profileStatus:this._profileStatus.textContent,profileAvatar:this._profileAvatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.about,n=e.avatar;this._profileName.textContent=t,this._profileStatus.textContent=r,this._profileAvatar.src=n}}])&&A(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",errorClass:"popup__error"};function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F,N=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"64dc9e34-29d7-4ec8-8000-7ce1c4906d48","Content-Type":"application/json"}});Promise.all([N.getUserInfo(),N.getInitialCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];F=o._id,D.setUserInfo(o),W.renderItems(i)})).catch(console.error);var D=new x({profileName:".profile__name",profileStatus:".profile__status",profileAvatar:".profile__avatar"}),J=new P({popupSelector:".edit-profile",handleFormSubmit:function(e){var t={name:e.profileName,about:e.profileStatus};J.renderLoading(!0),N.setUserInfo(t).then((function(e){D.setUserInfo(e),J.close()})).catch(console.error).finally((function(){J.renderLoading(!1)}))}});J.setEventListeners();var H=new P({popupSelector:".avatar-change",handleFormSubmit:function(e){var t={avatar:e.profileAvatar};H.renderLoading(!0),N.setUserAvatar(t).then((function(e){D.setUserInfo(e),H.close()})).catch(console.error).finally((function(){H.renderLoading(!1)}))}});H.setEventListeners();var z=new s(M,".edit-profile");z.enableValidation();var $=new s(M,".avatar-change");$.enableValidation(),document.querySelector(".profile__edit-button").addEventListener("click",(function(){J.setInputValues(D.getUserInfo()),z.resetValidation(),J.open()})),document.querySelector(".profile__avatar-button").addEventListener("click",(function(){$.resetValidation(),H.open()}));var G=new k({popupSelector:".fullscreen"});G.setEventListeners();var K=new B(".confirm-delete");function Q(e){var t=new i(F,e,{handleCardClick:function(){G.open(e)},delMyCard:function(){K.open(),K.submitCallback((function(){N.delMyCard(e._id).then((function(e){t.deleteCard(e),K.close()})).catch(console.error)}))},setMyLikeCard:function(){t.checkMyLike()?N.clearMyLike(e._id).then((function(e){t.refreshLikeCounter(e)})).catch(console.error):N.setMyLike(e._id).then((function(e){t.refreshLikeCounter(e)})).catch(console.error)},templateSelector:".card"});return t.generateCard()}K.setEventListeners();var W=new y({renderer:function(e){return Q(e)}},".elements"),X=new P({popupSelector:".new-card",handleFormSubmit:function(e){var t={name:e.name,link:e.link};X.renderLoading(!0),N.setNewCard(t).then((function(e){W.addItem(Q(e)),X.close()})).catch(console.error).finally((function(){X.renderLoading(!1)}))}});document.querySelector(".profile__add-button").addEventListener("click",(function(){Y.resetValidation(),X.open()})),X.setEventListeners();var Y=new s(M,".new-card");Y.enableValidation()})();