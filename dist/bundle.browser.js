System.register(['@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome', 'react', 'react-router-dom', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-regular-svg-icons', 'moment', 'moment-timezone'], function (exports, module) {
    'use strict';
    var faSpinner, faPlus, faTimes, faCheck, faQuestion, faStarOfLife, faCube, faCog, faDownload, faTrashAlt, faCubes, faSyncAlt, faList, faArrowDown, faArrowRight, faUndo, faSave, faCogs, faSignOutAlt, faRedo, faPowerOff, faExclamationTriangle, faHome, FontAwesomeIcon, createContext, createElement, Component, Fragment, NavLink, Link, Switch, Route, Redirect, faGithub, faCss3, faTrashAlt$1, faArrowAltCircleUp, faArrowAltCircleDown, faEyeSlash, faEye, faFile, faArrowAltCircleRight, faEdit, moment, momentTimezone;
    return {
        setters: [function (module) {
            faSpinner = module.faSpinner;
            faPlus = module.faPlus;
            faTimes = module.faTimes;
            faCheck = module.faCheck;
            faQuestion = module.faQuestion;
            faStarOfLife = module.faStarOfLife;
            faCube = module.faCube;
            faCog = module.faCog;
            faDownload = module.faDownload;
            faTrashAlt = module.faTrashAlt;
            faCubes = module.faCubes;
            faSyncAlt = module.faSyncAlt;
            faList = module.faList;
            faArrowDown = module.faArrowDown;
            faArrowRight = module.faArrowRight;
            faUndo = module.faUndo;
            faSave = module.faSave;
            faCogs = module.faCogs;
            faSignOutAlt = module.faSignOutAlt;
            faRedo = module.faRedo;
            faPowerOff = module.faPowerOff;
            faExclamationTriangle = module.faExclamationTriangle;
            faHome = module.faHome;
        }, function (module) {
            FontAwesomeIcon = module.FontAwesomeIcon;
        }, function (module) {
            createContext = module.createContext;
            createElement = module.createElement;
            Component = module.Component;
            Fragment = module.Fragment;
        }, function (module) {
            NavLink = module.NavLink;
            Link = module.Link;
            Switch = module.Switch;
            Route = module.Route;
            Redirect = module.Redirect;
        }, function (module) {
            faGithub = module.faGithub;
            faCss3 = module.faCss3;
        }, function (module) {
            faTrashAlt$1 = module.faTrashAlt;
            faArrowAltCircleUp = module.faArrowAltCircleUp;
            faArrowAltCircleDown = module.faArrowAltCircleDown;
            faEyeSlash = module.faEyeSlash;
            faEye = module.faEye;
            faFile = module.faFile;
            faArrowAltCircleRight = module.faArrowAltCircleRight;
            faEdit = module.faEdit;
        }, function (module) {
            moment = module.default;
        }, function (module) {
            momentTimezone = module.default;
        }],
        execute: function () {

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */

            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };

            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }

            var __assign = function() {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };

            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }

            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0: case 1: t = op; break;
                            case 4: _.label++; return { value: op[1], done: false };
                            case 5: _.label++; y = op[1]; op = [0]; continue;
                            case 7: op = _.ops.pop(); _.trys.pop(); continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                                if (t[2]) _.ops.pop();
                                _.trys.pop(); continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
                    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
                }
            }

            var AdminPageContext = createContext({});

            var ApiRoute = /** @class */ (function () {
                function ApiRoute(path, method) {
                    this.path = path;
                    this.method = method;
                }
                return ApiRoute;
            }());
            var routes = {
                getServices: new ApiRoute('/service/', 'get'),
                getServiceOptions: new ApiRoute('/service/:moduleName/:serviceName', 'get'),
                setServiceOptions: new ApiRoute('/service/:moduleName/:serviceName', 'post'),
                getModules: new ApiRoute('/modules/', 'get'),
                addModule: new ApiRoute('/modules/', 'post'),
                deleteModule: new ApiRoute('/modules/:moduleName', 'delete'),
                rebuildModule: new ApiRoute('/modules/:moduleName/rebuild', 'post'),
                updateModule: new ApiRoute('/modules/:moduleName/update', 'post'),
                checkUpdates: new ApiRoute('/modules/checkUpdates/update', 'get'),
                getWebPages: new ApiRoute('/pages/', 'get'),
                setWebPage: new ApiRoute('/pages/', 'post'),
                deleteWebPage: new ApiRoute('/pages/:id', 'delete'),
                getServerInfo: new ApiRoute('/app/', 'get'),
                exitApplication: new ApiRoute('/app/exitApplication', 'post'),
                restartApplication: new ApiRoute('/app/restartApplication', 'post'),
                shutdownSystem: new ApiRoute('/app/shutdownSystem', 'post'),
                rebootSystem: new ApiRoute('/app/restartSystem', 'post'),
                resetApplication: new ApiRoute('/app/resetApplication', 'post'),
                getSettings: new ApiRoute('/settings/', 'get'),
                setSettings: new ApiRoute('/settings/', 'post'),
                getWebComponentOptions: new ApiRoute('/components/', 'get'),
                setWebComponentOptions: new ApiRoute('/components/', 'post'),
                deleteWebComponentOptions: new ApiRoute('/components/:id', 'delete'),
            };

            var _this = undefined;
            var ApiClient = /** @class */ (function () {
                function ApiClient() {
                    this.getAllServices = apiCall(routes.getServices, true);
                    this.getServiceOptions = apiCall(routes.getServiceOptions);
                    this.setServiceOptions = apiCall(routes.setServiceOptions);
                    this.getModules = apiCall(routes.getModules, true);
                    this.addModule = apiCall(routes.addModule);
                    this.checkUpdates = apiCall(routes.checkUpdates);
                    this.deleteModule = apiCall(routes.deleteModule);
                    this.rebuildModule = apiCall(routes.rebuildModule);
                    this.updateModule = apiCall(routes.updateModule);
                    this.getWebPages = apiCall(routes.getWebPages, true);
                    this.setWebPage = apiCall(routes.setWebPage);
                    this.deleteWebPage = apiCall(routes.deleteWebPage);
                    this.getServerInfo = apiCall(routes.getServerInfo);
                    this.exitApplication = apiCall(routes.exitApplication);
                    this.restartApplication = apiCall(routes.restartApplication);
                    this.shutdownSystem = apiCall(routes.shutdownSystem);
                    this.rebootSystem = apiCall(routes.rebootSystem);
                    this.resetApplication = apiCall(routes.resetApplication);
                    this.getSettings = apiCall(routes.getSettings, true);
                    this.setSettings = apiCall(routes.setSettings);
                    this.getWebComponentOptions = apiCall(routes.getWebComponentOptions, true);
                    this.setWebComponentOptions = apiCall(routes.setWebComponentOptions);
                    this.deleteWebComponentOptions = apiCall(routes.deleteWebComponentOptions);
                }
                ApiClient.prototype.clearCache = function () {
                    var _this = this;
                    Object.keys(this).forEach(function (key) {
                        if (_this[key] && _this[key].clearCache) {
                            _this[key].clearCache();
                        }
                    });
                };
                return ApiClient;
            }());
            var apiCall = function (route, cacheResponse) {
                if (cacheResponse === void 0) { cacheResponse = false; }
                var cache;
                var method = route.method.toLocaleLowerCase();
                var call = function (params, data) {
                    if (cacheResponse && cache) {
                        return Promise.resolve(cache);
                    }
                    var path = route.path;
                    // replace params in path
                    if (params) {
                        Object.keys(params).forEach(function (key) {
                            path = path.replace(':' + key, params[key]);
                        });
                    }
                    return fetch('/api/modules/reactron' + path, {
                        method: method,
                        body: data && JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                        }
                    })
                        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var text;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, response.text()];
                                case 1:
                                    text = _a.sent();
                                    if (response.status.toString().startsWith('2')) {
                                        if (!text) {
                                            return [2 /*return*/, undefined];
                                        }
                                        return [2 /*return*/, JSON.parse(text)];
                                    }
                                    console.log(text);
                                    throw Error(text);
                            }
                        });
                    }); })
                        .then(function (response) {
                        if (cacheResponse) {
                            cache = response;
                        }
                        return response;
                    });
                };
                call.clearCache = function () {
                    cache = undefined;
                };
                return call;
            };
            var apiClient = new ApiClient();

            function unwrapExports (x) {
            	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
            }

            function createCommonjsModule(fn, module) {
            	return module = { exports: {} }, fn(module, module.exports), module.exports;
            }

            var classnames = createCommonjsModule(function (module) {
            /*!
              Copyright (c) 2017 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
            /* global define */

            (function () {

            	var hasOwn = {}.hasOwnProperty;

            	function classNames () {
            		var classes = [];

            		for (var i = 0; i < arguments.length; i++) {
            			var arg = arguments[i];
            			if (!arg) continue;

            			var argType = typeof arg;

            			if (argType === 'string' || argType === 'number') {
            				classes.push(arg);
            			} else if (Array.isArray(arg) && arg.length) {
            				var inner = classNames.apply(null, arg);
            				if (inner) {
            					classes.push(inner);
            				}
            			} else if (argType === 'object') {
            				for (var key in arg) {
            					if (hasOwn.call(arg, key) && arg[key]) {
            						classes.push(key);
            					}
            				}
            			}
            		}

            		return classes.join(' ');
            	}

            	if (module.exports) {
            		classNames.default = classNames;
            		module.exports = classNames;
            	} else {
            		window.classNames = classNames;
            	}
            }());
            });

            function styleInject(css, ref) {
              if ( ref === void 0 ) ref = {};
              var insertAt = ref.insertAt;

              if (!css || typeof document === 'undefined') { return; }

              var head = document.head || document.getElementsByTagName('head')[0];
              var style = document.createElement('style');
              style.type = 'text/css';

              if (insertAt === 'top') {
                if (head.firstChild) {
                  head.insertBefore(style, head.firstChild);
                } else {
                  head.appendChild(style);
                }
              } else {
                head.appendChild(style);
              }

              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              } else {
                style.appendChild(document.createTextNode(css));
              }
            }

            var css = "section.Loading {\n  text-align: center; }\n  section.Loading.center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%); }\n  section.Loading .text {\n    margin-top: 10px; }\n";
            styleInject(css);

            var Loading = /** @class */ (function (_super) {
                __extends(Loading, _super);
                function Loading() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Loading.prototype.render = function () {
                    return (createElement("section", { className: classnames('Loading', { 'center': this.props.center }) },
                        createElement(FontAwesomeIcon, { icon: faSpinner, size: this.props.iconSize, spin: true }),
                        this.props.text && (createElement("div", { className: "text" }, this.props.text))));
                };
                Loading.defaultProps = {
                    iconSize: "4x"
                };
                return Loading;
            }(Component));

            var css$1 = ".UiFlowLayout {\n  padding: 10px;\n  -webkit-column-count: 4;\n          column-count: 4;\n  -webkit-column-gap: 0;\n          column-gap: 0; }\n  .UiFlowLayout > * {\n    width: calc(100% - 20px);\n    padding: 10px;\n    -webkit-column-break-inside: avoid;\n            break-inside: avoid; }\n  .UiFlowLayout + .UiFlowLayout {\n    padding-top: 0px;\n    margin-top: -10px; }\n\n@media screen and (max-width: 1500px) {\n  .UiFlowLayout {\n    -webkit-column-count: 3;\n            column-count: 3; } }\n\n@media screen and (max-width: 1100px) {\n  .UiFlowLayout {\n    -webkit-column-count: 2;\n            column-count: 2; } }\n\n@media screen and (max-width: 700px) {\n  .UiFlowLayout {\n    -webkit-column-count: 1;\n            column-count: 1; } }\n";
            styleInject(css$1);

            var UiFlowLayout = /** @class */ (function (_super) {
                __extends(UiFlowLayout, _super);
                function UiFlowLayout() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                UiFlowLayout.prototype.renderChildren = function () {
                    if (Array.isArray(this.props.children)) {
                        return this.props.children.map(function (child, index) { return createElement("div", { key: index }, child); });
                    }
                    else {
                        return createElement("div", null, this.props.children);
                    }
                };
                UiFlowLayout.prototype.render = function () {
                    return (createElement("section", { className: classnames('UiFlowLayout', this.props.className), style: this.props.style }, this.renderChildren()));
                };
                return UiFlowLayout;
            }(Component));

            var css$2 = ".UiCard {\n  overflow: auto;\n  width: 100%;\n  border: 1px solid #ddd;\n  border-radius: 2px;\n  background: white;\n  color: #222;\n  box-sizing: border-box;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; }\n  .UiCard a {\n    color: #222; }\n";
            styleInject(css$2);

            var UiCard = /** @class */ (function (_super) {
                __extends(UiCard, _super);
                function UiCard() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                UiCard.prototype.render = function () {
                    return (createElement("section", { className: classnames('UiCard', this.props.className), style: this.props.style }, this.props.children));
                };
                return UiCard;
            }(Component));

            var css$3 = ".UiCardContent {\n  padding: 6px; }\n  .UiCardContent + * {\n    border-top: 1px solid #ddd; }\n";
            styleInject(css$3);

            var UiCardContent = /** @class */ (function (_super) {
                __extends(UiCardContent, _super);
                function UiCardContent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                UiCardContent.prototype.render = function () {
                    return (createElement("div", { className: classnames('UiCardContent', this.props.className), style: this.props.style }, this.props.children));
                };
                return UiCardContent;
            }(Component));

            var css$4 = ".UiCardTitle {\n  position: relative;\n  padding: 6px;\n  padding-left: 10px;\n  font-size: 16px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  background: white;\n  border-bottom: 1px solid #ddd; }\n  .UiCardTitle > .svg-inline--fa {\n    margin-right: 4px; }\n";
            styleInject(css$4);

            var UiCardTitle = /** @class */ (function (_super) {
                __extends(UiCardTitle, _super);
                function UiCardTitle() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                UiCardTitle.prototype.render = function () {
                    return (createElement("div", { className: classnames('UiCardTitle', this.props.className), style: this.props.style }, this.props.children));
                };
                return UiCardTitle;
            }(Component));

            var css$5 = "";
            styleInject(css$5);

            var UiLoadingCard = /** @class */ (function (_super) {
                __extends(UiLoadingCard, _super);
                function UiLoadingCard() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                UiLoadingCard.prototype.render = function () {
                    return (createElement(UiCard, { className: "UiLoadingCard" },
                        createElement(UiCardTitle, null, "Loading..."),
                        createElement(UiCardContent, null,
                            createElement(Loading, null))));
                };
                return UiLoadingCard;
            }(Component));

            var OverlayManager = /** @class */ (function () {
                function OverlayManager() {
                    this.items = [];
                }
                OverlayManager.prototype.add = function (instance) {
                    if (this.items.length > 0) {
                        var lastItem = this.items[this.items.length - 1];
                        lastItem.hide();
                    }
                    this.items.push(instance);
                };
                OverlayManager.prototype.remove = function (instance) {
                    var index = this.items.indexOf(instance);
                    if (index >= 0) {
                        this.items.splice(index);
                        if (this.items.length > 0) {
                            var lastItem = this.items[this.items.length - 1];
                            lastItem.show();
                        }
                    }
                };
                return OverlayManager;
            }());
            var overlayManager = new OverlayManager();

            var css$6 = ".UiOverlay {\n  position: fixed;\n  z-index: 1;\n  background: rgba(99, 99, 99, 0.47);\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n  padding: 0; }\n  .UiOverlay > .Loading {\n    color: white; }\n  .UiOverlay > .UiCard {\n    position: absolute;\n    margin: 20px;\n    top: 118px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: auto;\n    max-height: -webkit-fit-content;\n    max-height: -moz-fit-content;\n    max-height: fit-content; }\n    .UiOverlay > .UiCard .UiCardTitle {\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n      z-index: 1; }\n    .UiOverlay > .UiCard .UiCardButtonRow {\n      position: -webkit-sticky;\n      position: sticky;\n      bottom: 0; }\n\n@media screen and (min-width: 601px) {\n  .UiOverlay > .UiCard {\n    position: absolute;\n    margin: 20px 0;\n    top: 118px;\n    bottom: 0;\n    left: 50%;\n    right: auto;\n    width: 560px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); } }\n";
            styleInject(css$6);

            var UiOverlay = /** @class */ (function (_super) {
                __extends(UiOverlay, _super);
                function UiOverlay(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        visible: true
                    };
                    return _this;
                }
                UiOverlay.prototype.componentDidMount = function () {
                    overlayManager.add(this);
                };
                UiOverlay.prototype.componentWillUnmount = function () {
                    overlayManager.remove(this);
                };
                UiOverlay.prototype.show = function () {
                    this.setState({ visible: true });
                };
                UiOverlay.prototype.hide = function () {
                    this.setState({ visible: false });
                };
                UiOverlay.prototype.render = function () {
                    return (createElement("div", { hidden: !this.state.visible, className: classnames('UiOverlay', this.props.className), style: this.props.style }, this.props.children));
                };
                return UiOverlay;
            }(Component));

            var UiTab = /** @class */ (function (_super) {
                __extends(UiTab, _super);
                function UiTab() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                UiTab.prototype.render = function () {
                    return (createElement("div", { className: classnames('UiTab', this.props.className), style: this.props.style }, this.props.children));
                };
                return UiTab;
            }(Component));

            var css$7 = ".UiButton {\n  padding: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n";
            styleInject(css$7);

            var UiButton = /** @class */ (function (_super) {
                __extends(UiButton, _super);
                function UiButton(props) {
                    var _this = _super.call(this, props) || this;
                    _this.disposed = false;
                    _this.state = { running: false };
                    _this.onClick = _this.onClick.bind(_this);
                    return _this;
                }
                UiButton.prototype.onClick = function (e) {
                    var _this = this;
                    if (!this.props.onClick || this.props.disabled || this.state.running) {
                        return;
                    }
                    e.preventDefault();
                    e.bubbles = false;
                    e.stopPropagation();
                    this.setState({ running: true }, function () {
                        Promise.resolve(_this.props.onClick && _this.props.onClick(e))
                            .catch()
                            .then(function () {
                            if (!_this.disposed) {
                                _this.setState({ running: false });
                            }
                        });
                    });
                };
                UiButton.prototype.componentWillUnmount = function () {
                    this.disposed = true;
                };
                UiButton.prototype.render = function () {
                    var className = classnames('UiButton', 'clickable', this.props.className, { 'disabled': this.props.disabled || this.state.running });
                    return (createElement("div", { className: className, onClick: this.onClick, style: this.props.style }, this.props.children));
                };
                return UiButton;
            }(Component));

            var css$8 = ".UiTabs header {\n  margin-left: 20px;\n  margin-right: 20px; }\n  .UiTabs header .UiTabHeader {\n    display: inline-block;\n    margin: 8px;\n    margin-bottom: 0;\n    border-bottom: 1px solid #ddd;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n    .UiTabs header .UiTabHeader.selected {\n      border-bottom-color: #888; }\n";
            styleInject(css$8);

            var UiTabs = /** @class */ (function (_super) {
                __extends(UiTabs, _super);
                function UiTabs(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        selectedTabIndex: 0
                    };
                    return _this;
                }
                UiTabs.prototype.renderTabHeader = function (tab, index) {
                    var _this = this;
                    if (!tab || !tab.props || !tab.props.title) {
                        return null;
                    }
                    var toggleSelectedTab = function () { return _this.setState({ selectedTabIndex: index }); };
                    var className = classnames('UiTabHeader', { 'selected': this.state.selectedTabIndex === index });
                    return (createElement(UiButton, { key: index, className: className, onClick: toggleSelectedTab }, tab.props.title));
                };
                UiTabs.prototype.renderTabHeaders = function () {
                    var _this = this;
                    if (!this.props.children) {
                        return null;
                    }
                    var tabs = this.props.children;
                    return (createElement("header", null, tabs.map(function (tab, index) { return _this.renderTabHeader(tab, index); })));
                };
                UiTabs.prototype.renderTabContents = function () {
                    if (!this.props.children) {
                        return null;
                    }
                    return this.props.children[this.state.selectedTabIndex];
                };
                UiTabs.prototype.render = function () {
                    return (createElement("section", { className: classnames('UiTabs', this.props.className), style: this.props.style },
                        this.renderTabHeaders(),
                        this.renderTabContents()));
                };
                return UiTabs;
            }(Component));

            var css$9 = "section.AddModuleCard {\n  display: -webkit-inline-box;\n  display: inline-flex; }\n  section.AddModuleCard input {\n    padding-left: 6px;\n    border: none;\n    width: 100%; }\n  section.AddModuleCard .addButton {\n    border-left: 1px solid #ddd;\n    overflow: visible; }\n";
            styleInject(css$9);

            var AddModuleCard = /** @class */ (function (_super) {
                __extends(AddModuleCard, _super);
                function AddModuleCard() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                AddModuleCard.prototype.render = function () {
                    var _this = this;
                    var input;
                    var onAdd = function () { return _this.props.onAdd(input && input.value); };
                    return (createElement(UiCard, { className: "AddModuleCard" },
                        createElement("input", { ref: function (el) { return input = el; }, placeholder: "GitHub Repository URL" }),
                        createElement(UiButton, { className: "addButton", onClick: onAdd },
                            createElement(FontAwesomeIcon, { icon: faPlus }),
                            " Add")));
                };
                return AddModuleCard;
            }(Component));

            var css$a = "section.CommandResult .UiCardTitle {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\nsection.CommandResult .UiButton {\n  position: absolute;\n  top: 0;\n  right: 0; }\n\nsection.CommandResult .UiCardContent .result {\n  word-wrap: break-word;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #ddd; }\n  section.CommandResult .UiCardContent .result:last-of-type {\n    padding-bottom: 0;\n    border-bottom: none; }\n";
            styleInject(css$a);

            var CommandResult = /** @class */ (function (_super) {
                __extends(CommandResult, _super);
                function CommandResult(props) {
                    return _super.call(this, props) || this;
                }
                CommandResult.prototype.renderCommandResult = function (result, key) {
                    var _this = this;
                    var icon = result.success === false ?
                        createElement(FontAwesomeIcon, { icon: faTimes }) :
                        result.success === true ?
                            createElement(FontAwesomeIcon, { icon: faCheck }) :
                            createElement(FontAwesomeIcon, { icon: faQuestion });
                    var log;
                    if (result.log && result.log.length) {
                        log = (createElement("ul", { className: "log" }, result.log.map(function (item, i) { return createElement("li", { key: i }, item); })));
                    }
                    var title = result.command || '';
                    if (result.args) {
                        title += ' | args: ' + result.args;
                    }
                    return (createElement(Fragment, { key: key },
                        createElement("div", { className: "result" },
                            createElement("div", { className: "commandTitle" },
                                icon,
                                " ",
                                title),
                            log),
                        result.children && result.children.map(function (child, index) {
                            return _this.renderCommandResult(child, key + '.' + index);
                        })));
                };
                CommandResult.prototype.render = function () {
                    var _this = this;
                    return (createElement(UiCard, { className: "CommandResult" },
                        createElement(UiCardTitle, null,
                            "Result",
                            createElement(UiButton, { onClick: this.props.onClose },
                                createElement(FontAwesomeIcon, { icon: faTimes }))),
                        createElement(UiCardContent, null, this.props.results.map(function (item, index) { return _this.renderCommandResult(item, index.toString()); }))));
                };
                return CommandResult;
            }(Component));

            var css$b = ".UiCardButtonRow {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));\n  width: 100%;\n  background: #fafafa;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0; }\n  .UiCardButtonRow + * {\n    border-top: 1px solid #ddd; }\n  .UiCardButtonRow > * {\n    text-align: center;\n    padding: 6px;\n    position: relative; }\n  .UiCardButtonRow.UiCardButtonRowDividerFull > *:not(:first-child) {\n    border-left: 1px solid #ddd; }\n  .UiCardButtonRow.UiCardButtonRowDividerHalf > *:not(:first-child)::before {\n    border-left: 1px solid #ddd;\n    content: \" \";\n    position: absolute;\n    top: 6px;\n    bottom: 6px;\n    left: 0; }\n";
            styleInject(css$b);

            var UiCardButtonRow = /** @class */ (function (_super) {
                __extends(UiCardButtonRow, _super);
                function UiCardButtonRow() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                UiCardButtonRow.prototype.render = function () {
                    var className = classnames('UiCardButtonRow', this.props.className, {
                        'UiCardButtonRowDividerFull': this.props.divider === 'full',
                        'UiCardButtonRowDividerHalf': this.props.divider === 'half',
                    });
                    return (createElement("div", { className: className, style: this.props.style }, this.props.children));
                };
                return UiCardButtonRow;
            }(Component));

            var css$c = ".ModuleCard {\n  overflow: hidden; }\n  .ModuleCard .UiCardTitle .hasUpdate {\n    margin-left: 6px;\n    font-size: 10px;\n    color: #59aaff;\n    vertical-align: text-top; }\n  .ModuleCard .UiCardButtonRow {\n    -webkit-transition: 0.5s ease-in-out;\n    transition: 0.5s ease-in-out;\n    margin: 0; }\n    .ModuleCard .UiCardButtonRow.default.hide {\n      margin-left: -100%; }\n    .ModuleCard .UiCardButtonRow.actions {\n      margin-top: -34px; }\n      .ModuleCard .UiCardButtonRow.actions.hide {\n        margin-left: 100%; }\n    .ModuleCard .UiCardButtonRow a {\n      text-decoration: none; }\n";
            styleInject(css$c);

            var ModuleCard = /** @class */ (function (_super) {
                __extends(ModuleCard, _super);
                function ModuleCard(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        showActions: false
                    };
                    _this.showActions = _this.showActions.bind(_this);
                    _this.hideActions = _this.hideActions.bind(_this);
                    _this.onUpdate = _this.onUpdate.bind(_this);
                    _this.onRebuild = _this.onRebuild.bind(_this);
                    _this.onRemove = _this.onRemove.bind(_this);
                    return _this;
                }
                ModuleCard.prototype.showActions = function () {
                    this.setState({ showActions: true });
                };
                ModuleCard.prototype.hideActions = function () {
                    this.setState({ showActions: false });
                };
                ModuleCard.prototype.onUpdate = function () {
                    this.hideActions();
                    this.props.onUpdate(this.props.module);
                };
                ModuleCard.prototype.onRebuild = function () {
                    this.hideActions();
                    this.props.onRebuild(this.props.module);
                };
                ModuleCard.prototype.onRemove = function () {
                    if (window.confirm('Remove?')) {
                        this.hideActions();
                        this.props.onRemove(this.props.module);
                    }
                };
                ModuleCard.prototype.renderTitle = function () {
                    var updateIcon;
                    if (this.props.module.hasUpdate) {
                        updateIcon = createElement("span", { className: "hasUpdate" },
                            createElement(FontAwesomeIcon, { icon: faStarOfLife }));
                    }
                    return (createElement(UiCardTitle, null,
                        createElement(FontAwesomeIcon, { icon: faCube }),
                        " ",
                        this.props.module.name,
                        updateIcon));
                };
                ModuleCard.prototype.renderDescription = function () {
                    return (createElement(UiCardContent, { className: "description" }, this.props.module.description || 'no description'));
                };
                ModuleCard.prototype.renderAuthor = function () {
                    var authorName = 'unknown';
                    var authorMail;
                    if (typeof this.props.module.author === 'string') {
                        authorName = this.props.module.author;
                    }
                    else if (typeof this.props.module.author === 'object') {
                        authorName = this.props.module.author.name || this.props.module.author.email;
                        authorMail = this.props.module.author.email;
                    }
                    var author = (authorMail) ? (createElement("a", { href: 'mailto://' + authorMail }, authorName)) : authorName;
                    return (createElement(UiCardContent, { className: "author" },
                        "by ",
                        author));
                };
                ModuleCard.prototype.renderFooter = function () {
                    var repoLink = createElement("div", null);
                    if (this.props.module.repository) {
                        repoLink = (createElement("a", { className: "clickable", href: this.props.module.repository, target: "_blank" },
                            createElement(FontAwesomeIcon, { icon: faGithub }),
                            " GitHub"));
                    }
                    var className = classnames('footer', 'default', { 'hide': this.state.showActions });
                    return (createElement(UiCardButtonRow, { className: className, divider: "half" },
                        createElement("div", { className: "version" }, this.props.module.version),
                        repoLink,
                        createElement(UiButton, { onClick: this.showActions },
                            createElement(FontAwesomeIcon, { icon: faCog }),
                            " Modify")));
                };
                ModuleCard.prototype.renderActions = function () {
                    var className = classnames('footer', 'actions', { 'hide': !this.state.showActions });
                    return (createElement(UiCardButtonRow, { className: className, divider: "full" },
                        createElement(UiButton, { disabled: !this.props.module.hasUpdate, onClick: this.onUpdate },
                            createElement(FontAwesomeIcon, { icon: faDownload }),
                            " Update"),
                        createElement(UiButton, { disabled: !this.props.module.canRemove, onClick: this.onRemove },
                            createElement(FontAwesomeIcon, { icon: faTrashAlt }),
                            " Remove"),
                        createElement(UiButton, { onClick: this.hideActions },
                            createElement(FontAwesomeIcon, { icon: faTimes }),
                            " Close")));
                };
                ModuleCard.prototype.render = function () {
                    return (createElement(UiCard, { className: "ModuleCard" },
                        this.renderTitle(),
                        this.renderDescription(),
                        this.renderAuthor(),
                        this.renderFooter(),
                        this.renderActions()));
                };
                return ModuleCard;
            }(Component));

            var css$d = ".ModuleCatalog .ModuleCatalogItem {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  margin-left: 8px; }\n  .ModuleCatalog .ModuleCatalogItem a {\n    padding: 6px;\n    text-decoration: none; }\n  .ModuleCatalog .ModuleCatalogItem ~ .ModuleCatalogItem {\n    border-top: 1px solid #ddd; }\n";
            styleInject(css$d);

            // TODO load from url
            var catalog = [{
                    name: 'reactron-openweathermap',
                    url: 'https://github.com/schirkan/reactron-openweathermap'
                }, {
                    name: 'reactron-analog-clock',
                    url: 'https://github.com/schirkan/reactron-analog-clock'
                }, {
                    name: 'reactron-scifi-dashboard',
                    url: 'https://github.com/schirkan/reactron-scifi-dashboard'
                }, {
                    name: 'reactron-bring-shopping-list',
                    url: 'https://github.com/schirkan/reactron-bring-shopping-list'
                }];
            var ModuleCatalog = /** @class */ (function (_super) {
                __extends(ModuleCatalog, _super);
                function ModuleCatalog(props) {
                    return _super.call(this, props) || this;
                }
                ModuleCatalog.prototype.renderCatalogItems = function () {
                    var _this = this;
                    var items = catalog.map(function (item) {
                        var installed = _this.props.modules.some(function (x) { return x.name === item.name; });
                        var install = function () { return _this.props.onAdd(item.url); };
                        return (createElement("div", { className: "ModuleCatalogItem", key: item.name },
                            createElement("a", { className: "clickable", href: item.url, target: "_blank" },
                                createElement(FontAwesomeIcon, { icon: faGithub }),
                                " ",
                                item.name),
                            createElement(UiButton, { disabled: installed, onClick: install },
                                createElement(FontAwesomeIcon, { icon: faDownload }),
                                " Add")));
                    });
                    return items;
                };
                ModuleCatalog.prototype.render = function () {
                    return (createElement(UiCard, { className: "ModuleCatalog" },
                        createElement(UiCardTitle, null,
                            createElement(FontAwesomeIcon, { icon: faCubes }),
                            " Module Catalog"),
                        this.renderCatalogItems()));
                };
                return ModuleCatalog;
            }(Component));

            var css$e = "section.UpdateModulesCard .UiCardButtonRow {\n  background: transparent; }\n";
            styleInject(css$e);

            var UpdateModulesCard = /** @class */ (function (_super) {
                __extends(UpdateModulesCard, _super);
                function UpdateModulesCard() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                UpdateModulesCard.prototype.render = function () {
                    var modulesWithUpdates = this.props.modules.filter(function (x) { return x.hasUpdate; });
                    var isChecked = this.props.modules.some(function (x) { return x.hasUpdate !== undefined; });
                    var updatesTitle = isChecked ? modulesWithUpdates.length : '-';
                    return (createElement(UiCard, { className: "UpdateModulesCard" },
                        createElement(UiCardButtonRow, { divider: "full" },
                            createElement("div", null,
                                "Updates: ",
                                updatesTitle),
                            createElement(UiButton, { className: "checkUpdatesButton", onClick: this.props.onCheckUpdates, disabled: this.props.checkingUpdates },
                                createElement(FontAwesomeIcon, { icon: faSyncAlt, spin: this.props.checkingUpdates }),
                                " Check"),
                            createElement(UiButton, { className: "updateAllButton", onClick: this.props.onUpdateAll, disabled: !modulesWithUpdates.length },
                                createElement(FontAwesomeIcon, { icon: faDownload }),
                                " Update All"))));
                };
                return UpdateModulesCard;
            }(Component));

            var css$f = "";
            styleInject(css$f);

            var ModuleManagerPage = /** @class */ (function (_super) {
                __extends(ModuleManagerPage, _super);
                function ModuleManagerPage(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        loading: false,
                        checkingUpdates: false,
                        showResult: false,
                        results: [],
                        modules: []
                    };
                    _this.loadModules = _this.loadModules.bind(_this);
                    _this.checkUpdates = _this.checkUpdates.bind(_this);
                    _this.updateAll = _this.updateAll.bind(_this);
                    _this.updateModule = _this.updateModule.bind(_this);
                    _this.removeModule = _this.removeModule.bind(_this);
                    _this.rebuildModule = _this.rebuildModule.bind(_this);
                    _this.addModule = _this.addModule.bind(_this);
                    _this.hideResult = _this.hideResult.bind(_this);
                    return _this;
                }
                ModuleManagerPage.prototype.componentDidMount = function () {
                    this.loadModules();
                };
                ModuleManagerPage.prototype.loadModules = function () {
                    var _this = this;
                    return apiClient.getModules()
                        .then(function (modules) { return _this.setState({ modules: modules }); })
                        .catch(); // TODO
                };
                ModuleManagerPage.prototype.checkUpdates = function () {
                    return __awaiter(this, void 0, Promise, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.setState({ checkingUpdates: true });
                                    return [4 /*yield*/, apiClient.checkUpdates()];
                                case 1:
                                    _a.sent();
                                    this.setState({ checkingUpdates: false });
                                    apiClient.getModules.clearCache();
                                    return [4 /*yield*/, this.loadModules()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ModuleManagerPage.prototype.updateAll = function () {
                    return __awaiter(this, void 0, Promise, function () {
                        var modulesWithUpdates, results, _i, modulesWithUpdates_1, module, result, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    modulesWithUpdates = this.state.modules.filter(function (x) { return x.hasUpdate; });
                                    if (!modulesWithUpdates.length) {
                                        return [2 /*return*/];
                                    }
                                    results = [];
                                    this.setState({ loading: true });
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 6, , 7]);
                                    _i = 0, modulesWithUpdates_1 = modulesWithUpdates;
                                    _a.label = 2;
                                case 2:
                                    if (!(_i < modulesWithUpdates_1.length)) return [3 /*break*/, 5];
                                    module = modulesWithUpdates_1[_i];
                                    return [4 /*yield*/, apiClient.updateModule({ moduleName: module.name })];
                                case 3:
                                    result = _a.sent();
                                    results.push.apply(results, result);
                                    _a.label = 4;
                                case 4:
                                    _i++;
                                    return [3 /*break*/, 2];
                                case 5:
                                    this.showResult(results);
                                    return [3 /*break*/, 7];
                                case 6:
                                    error_1 = _a.sent();
                                    this.showError(error_1);
                                    return [3 /*break*/, 7];
                                case 7:
                                    apiClient.getModules.clearCache();
                                    return [4 /*yield*/, this.loadModules()];
                                case 8:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ModuleManagerPage.prototype.updateModule = function (module) {
                    return __awaiter(this, void 0, Promise, function () {
                        var result, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!module.hasUpdate) {
                                        return [2 /*return*/];
                                    }
                                    this.setState({ loading: true });
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, apiClient.updateModule({ moduleName: module.name })];
                                case 2:
                                    result = _a.sent();
                                    this.showResult(result);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_2 = _a.sent();
                                    this.showError(error_2);
                                    return [3 /*break*/, 4];
                                case 4:
                                    apiClient.getModules.clearCache();
                                    return [4 /*yield*/, this.loadModules()];
                                case 5:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ModuleManagerPage.prototype.rebuildModule = function (module) {
                    return __awaiter(this, void 0, Promise, function () {
                        var result, error_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!module.canBuild) {
                                        return [2 /*return*/];
                                    }
                                    this.setState({ loading: true });
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, apiClient.rebuildModule({ moduleName: module.name })];
                                case 2:
                                    result = _a.sent();
                                    this.showResult(result);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_3 = _a.sent();
                                    this.showError(error_3);
                                    return [3 /*break*/, 4];
                                case 4:
                                    apiClient.getModules.clearCache();
                                    return [4 /*yield*/, this.loadModules()];
                                case 5:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ModuleManagerPage.prototype.removeModule = function (module) {
                    return __awaiter(this, void 0, Promise, function () {
                        var result, error_4;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!module.canRemove) {
                                        return [2 /*return*/];
                                    }
                                    this.setState({ loading: true });
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, apiClient.deleteModule({ moduleName: module.name })];
                                case 2:
                                    result = _a.sent();
                                    this.showResult(result);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_4 = _a.sent();
                                    this.showError(error_4);
                                    return [3 /*break*/, 4];
                                case 4:
                                    apiClient.getModules.clearCache();
                                    return [4 /*yield*/, this.loadModules()];
                                case 5:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ModuleManagerPage.prototype.addModule = function (repository) {
                    return __awaiter(this, void 0, Promise, function () {
                        var result, error_5;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!repository || !repository.trim()) {
                                        return [2 /*return*/];
                                    }
                                    this.setState({ loading: true });
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, apiClient.addModule(undefined, { repository: repository })];
                                case 2:
                                    result = _a.sent();
                                    this.showResult(result);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_5 = _a.sent();
                                    this.showError(error_5);
                                    return [3 /*break*/, 4];
                                case 4:
                                    apiClient.getModules.clearCache();
                                    return [4 /*yield*/, this.loadModules()];
                                case 5:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ModuleManagerPage.prototype.showError = function (err) {
                    var message = err && err.message || JSON.stringify(err);
                    var result = { command: 'Error', success: false, log: [message] };
                    this.setState({ loading: false, showResult: true, results: [result] });
                };
                ModuleManagerPage.prototype.showResult = function (results) {
                    this.setState({ loading: false, showResult: true, results: results });
                };
                ModuleManagerPage.prototype.hideResult = function () {
                    this.setState({ showResult: false });
                };
                ModuleManagerPage.prototype.render = function () {
                    var _this = this;
                    return (createElement("section", { className: "ModuleManagerPage" },
                        this.state.loading && (createElement(UiOverlay, null,
                            createElement(Loading, { center: true }))),
                        this.state.showResult && (createElement(UiOverlay, null,
                            createElement(CommandResult, { results: this.state.results, onClose: this.hideResult }))),
                        createElement(UiTabs, null,
                            createElement(UiTab, { title: "Installed" },
                                createElement(UiFlowLayout, null,
                                    createElement(UpdateModulesCard, { checkingUpdates: this.state.checkingUpdates, modules: this.state.modules, onCheckUpdates: this.checkUpdates, onUpdateAll: this.updateAll, onUpdateModule: this.updateModule })),
                                !this.state.modules.length && (createElement(UiFlowLayout, null,
                                    createElement(UiLoadingCard, null))),
                                createElement(UiFlowLayout, null, this.state.modules.map(function (item) {
                                    return createElement(ModuleCard, { key: item.name, module: item, onRemove: _this.removeModule, onRebuild: _this.rebuildModule, onUpdate: _this.updateModule });
                                }))),
                            createElement(UiTab, { title: "Add New" },
                                createElement(UiFlowLayout, null,
                                    createElement(AddModuleCard, { onAdd: this.addModule })),
                                createElement(UiFlowLayout, null,
                                    createElement(ModuleCatalog, { onAdd: this.addModule, modules: this.state.modules }))))));
                };
                return ModuleManagerPage;
            }(Component));

            var css$g = "section.Navigation {\n  background: #456;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr)); }\n  section.Navigation a {\n    padding-bottom: 8px;\n    padding-top: 11px;\n    color: #ddd;\n    text-decoration: none;\n    border-bottom: 3px solid transparent;\n    text-align: center;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n    section.Navigation a:hover, section.Navigation a:active, section.Navigation a.active {\n      background: transparent;\n      color: white; }\n    section.Navigation a:nth-child(1).active {\n      background: #4a8599; }\n    section.Navigation a:nth-child(1).active, section.Navigation a:nth-child(1):hover {\n      border-bottom: 3px solid #42e1f7; }\n    section.Navigation a:nth-child(2).active {\n      background: #69006f; }\n    section.Navigation a:nth-child(2).active, section.Navigation a:nth-child(2):hover {\n      border-bottom: 3px solid #f000ff; }\n    section.Navigation a:nth-child(3).active {\n      background: #5f5600; }\n    section.Navigation a:nth-child(3).active, section.Navigation a:nth-child(3):hover {\n      border-bottom: 3px solid #ffe700; }\n    section.Navigation a:nth-child(4).active {\n      background: #2f6108; }\n    section.Navigation a:nth-child(4).active, section.Navigation a:nth-child(4):hover {\n      border-bottom: 3px solid #74ee15; }\n    section.Navigation a:nth-child(5).active {\n      background: #001086; }\n    section.Navigation a:nth-child(5).active, section.Navigation a:nth-child(5):hover {\n      border-bottom: 3px solid #001eff; }\n";
            styleInject(css$g);

            var Navigation = /** @class */ (function (_super) {
                __extends(Navigation, _super);
                function Navigation() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Navigation.prototype.render = function () {
                    return (createElement("section", { className: "Navigation" },
                        createElement(NavLink, { activeClassName: "active", to: "/admin/ModuleManager", role: "button" }, "Modules"),
                        createElement(NavLink, { activeClassName: "active", to: "/admin/ServiceManager", role: "button" }, "Services"),
                        createElement(NavLink, { activeClassName: "active", to: "/admin/Pages", role: "button" }, "Pages"),
                        createElement(NavLink, { activeClassName: "active", to: "/admin/Settings", role: "button" }, "Settings"),
                        createElement(NavLink, { activeClassName: "active", to: "/admin/System", role: "button" }, "System")));
                };
                return Navigation;
            }(Component));

            var confirm = function (callback, text) {
                return function (args) {
                    if (window.confirm(text)) {
                        return callback(args);
                    }
                };
            };

            var getDefaultFieldValue = function (field) {
                var defaultValue = field.defaultValue;
                if (field.isArray) {
                    if (defaultValue && Array.isArray(defaultValue)) {
                        return defaultValue;
                    }
                    return [];
                }
                switch (field.valueType) {
                    case 'object':
                        var result = defaultValue;
                        if (result === undefined) {
                            result = getDefaultObjectValue(field.fields);
                        }
                        return result;
                    case 'number':
                        return defaultValue || 0;
                    case 'boolean':
                        return defaultValue || false;
                    case 'string':
                        return defaultValue || '';
                    case 'style':
                        return defaultValue || {};
                    case 'webComponent':
                        return undefined;
                }
                return undefined;
            };
            var getDefaultObjectValue = function (fields) {
                var result = {};
                if (fields) {
                    fields.forEach(function (f) {
                        result[f.name] = getDefaultFieldValue(f);
                    });
                }
                return result;
            };

            var ErrorBoundary = /** @class */ (function (_super) {
                __extends(ErrorBoundary, _super);
                function ErrorBoundary(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = { error: null };
                    return _this;
                }
                ErrorBoundary.prototype.componentDidCatch = function (error, info) {
                    console.log(error);
                    console.log(info);
                    this.setState({ error: error });
                };
                ErrorBoundary.prototype.render = function () {
                    if (this.state.error) {
                        return createElement("h1", null, "Something went wrong.");
                    }
                    return this.props.children;
                };
                return ErrorBoundary;
            }(Component));

            var guid = createCommonjsModule(function (module, exports) {
            exports.__esModule = true;
            var Guid = /** @class */ (function () {
                function Guid(guid) {
                    if (!guid) {
                        throw new TypeError("Invalid argument; `value` has no value.");
                    }
                    this.value = Guid.EMPTY;
                    if (guid && Guid.isGuid(guid)) {
                        this.value = guid;
                    }
                }
                Guid.isGuid = function (guid) {
                    var value = guid.toString();
                    return guid && (guid instanceof Guid || Guid.validator.test(value));
                };
                Guid.create = function () {
                    return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-"));
                };
                Guid.createEmpty = function () {
                    return new Guid("emptyguid");
                };
                Guid.parse = function (guid) {
                    return new Guid(guid);
                };
                Guid.raw = function () {
                    return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
                };
                Guid.gen = function (count) {
                    var out = "";
                    for (var i = 0; i < count; i++) {
                        // tslint:disable-next-line:no-bitwise
                        out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                    }
                    return out;
                };
                Guid.prototype.equals = function (other) {
                    // Comparing string `value` against provided `guid` will auto-call
                    // toString on `guid` for comparison
                    return Guid.isGuid(other) && this.value === other.toString();
                };
                Guid.prototype.isEmpty = function () {
                    return this.value === Guid.EMPTY;
                };
                Guid.prototype.toString = function () {
                    return this.value;
                };
                Guid.prototype.toJSON = function () {
                    return {
                        value: this.value
                    };
                };
                Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
                Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
                return Guid;
            }());
            exports.Guid = Guid;
            });

            unwrapExports(guid);
            var guid_1 = guid.Guid;

            var css$h = ".ArrayForm .OptionItem[data-detailsvisible='false'] + .add-array-item {\n  border-top: 1px solid #eee; }\n";
            styleInject(css$h);

            var ArrayForm = /** @class */ (function (_super) {
                __extends(ArrayForm, _super);
                function ArrayForm(props) {
                    var _this = _super.call(this, props) || this;
                    _this.arrayKeys = [];
                    _this.arrayItemAdd = _this.arrayItemAdd.bind(_this);
                    _this.arrayItemRemove = _this.arrayItemRemove.bind(_this);
                    _this.arrayItemMoveUp = _this.arrayItemMoveUp.bind(_this);
                    _this.arrayItemMoveDown = _this.arrayItemMoveDown.bind(_this);
                    return _this;
                }
                ArrayForm.prototype.arrayItemChange = function (index, definition, newValue) {
                    var array = this.props.value || [];
                    array = array.slice();
                    array[index] = newValue;
                    this.props.valueChange(this.props.definition, array);
                };
                ArrayForm.prototype.arrayItemRemove = function (index) {
                    var array = this.props.value || [];
                    array = array.slice();
                    array.splice(index, 1);
                    this.arrayKeys.splice(index, 1);
                    this.props.valueChange(this.props.definition, array);
                };
                ArrayForm.prototype.arrayItemMoveUp = function (index) {
                    var array = this.props.value || [];
                    if (index === 0) {
                        return;
                    }
                    var item = array.splice(index, 1)[0];
                    array.splice(index - 1, 0, item);
                    var keyItem = this.arrayKeys.splice(index, 1)[0];
                    this.arrayKeys.splice(index - 1, 0, keyItem);
                    this.props.valueChange(this.props.definition, array);
                };
                ArrayForm.prototype.arrayItemMoveDown = function (index) {
                    var array = this.props.value || [];
                    if (index === array.length - 1) {
                        return;
                    }
                    var item = array.splice(index, 1)[0];
                    array.splice(index + 1, 0, item);
                    var keyItem = this.arrayKeys.splice(index, 1)[0];
                    this.arrayKeys.splice(index + 1, 0, keyItem);
                    this.props.valueChange(this.props.definition, array);
                };
                ArrayForm.prototype.arrayItemAdd = function () {
                    var arrayItemDefinition = __assign({}, this.props.definition);
                    arrayItemDefinition.isArray = false;
                    var newItem = getDefaultFieldValue(arrayItemDefinition);
                    if (typeof newItem === 'object') {
                        newItem.__new = true;
                    }
                    var array = this.props.value || [];
                    array = array.slice(); // copy
                    array.push(newItem); // add item
                    this.props.valueChange(this.props.definition, array);
                };
                ArrayForm.prototype.renderArrayItem = function (value, index) {
                    var arrayItemDefinition = __assign({}, this.props.definition);
                    arrayItemDefinition.isArray = false;
                    arrayItemDefinition.displayName = 'Item ' + (index + 1);
                    var key = this.arrayKeys[index];
                    if (!key) {
                        key = this.arrayKeys[index] = guid_1.raw();
                    }
                    return (createElement(Fragment, { key: key },
                        createElement(OptionItem, { definition: arrayItemDefinition, value: value, valueChange: this.arrayItemChange.bind(this, index) },
                            createElement(UiButton, { onClick: this.arrayItemRemove.bind(this, index) },
                                createElement(FontAwesomeIcon, { icon: faTrashAlt$1 })),
                            createElement(UiButton, { onClick: this.arrayItemMoveUp.bind(this, index) },
                                createElement(FontAwesomeIcon, { icon: faArrowAltCircleUp })),
                            createElement(UiButton, { onClick: this.arrayItemMoveDown.bind(this, index) },
                                createElement(FontAwesomeIcon, { icon: faArrowAltCircleDown })))));
                };
                ArrayForm.prototype.render = function () {
                    var _this = this;
                    var array = this.props.value || [];
                    return (createElement(Fragment, null,
                        array.map(function (value, index) { return _this.renderArrayItem(value, index); }),
                        createElement(UiButton, { className: "add-array-item", onClick: this.arrayItemAdd },
                            createElement(FontAwesomeIcon, { icon: faPlus }),
                            " Add item")));
                };
                return ArrayForm;
            }(Component));

            var ArrayControlsProvider = /** @class */ (function () {
                function ArrayControlsProvider() {
                }
                ArrayControlsProvider.prototype.match = function (definition) {
                    return !!definition.isArray;
                };
                ArrayControlsProvider.prototype.get = function () {
                    return {
                        icon: faList,
                        detailsControl: ArrayForm,
                        inputControl: function (props) {
                            var array = props && props.value || [];
                            return '(' + array.length + ' items)';
                        }
                    };
                };
                return ArrayControlsProvider;
            }());

            var css$i = ".BooleanInputControl {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 17px;\n  margin-top: auto;\n  margin-bottom: auto; }\n  .BooleanInputControl input {\n    opacity: 0;\n    width: 0;\n    height: 0; }\n    .BooleanInputControl input:checked + .slider {\n      background-color: #2196F3; }\n    .BooleanInputControl input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3; }\n    .BooleanInputControl input:checked + .slider:before {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); }\n  .BooleanInputControl .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n    border-radius: 17px; }\n    .BooleanInputControl .slider:before {\n      position: absolute;\n      content: \"\";\n      height: 13px;\n      width: 13px;\n      left: 2px;\n      bottom: 2px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n      border-radius: 50%; }\n";
            styleInject(css$i);

            var BooleanInputControl = /** @class */ (function (_super) {
                __extends(BooleanInputControl, _super);
                function BooleanInputControl(props) {
                    var _this = _super.call(this, props) || this;
                    _this.onCheckboxChange = _this.onCheckboxChange.bind(_this);
                    return _this;
                }
                BooleanInputControl.prototype.onCheckboxChange = function (e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.checked);
                };
                BooleanInputControl.prototype.render = function () {
                    if (this.props.value) ;
                    return (createElement("label", { className: "BooleanInputControl" },
                        createElement("input", { type: "checkbox", id: this.props.uniqueId, checked: this.props.value, onChange: this.onCheckboxChange }),
                        createElement("span", { className: "slider" })));
                };
                return BooleanInputControl;
            }(Component));

            var BooleanControlsProvider = /** @class */ (function () {
                function BooleanControlsProvider() {
                }
                BooleanControlsProvider.prototype.match = function (definition) {
                    return definition.valueType === 'boolean';
                };
                BooleanControlsProvider.prototype.get = function () {
                    return {
                        inputControl: BooleanInputControl
                    };
                };
                return BooleanControlsProvider;
            }());

            var NumberInputControl = /** @class */ (function (_super) {
                __extends(NumberInputControl, _super);
                function NumberInputControl(props) {
                    var _this = _super.call(this, props) || this;
                    _this.onInputChange = _this.onInputChange.bind(_this);
                    return _this;
                }
                NumberInputControl.prototype.onInputChange = function (e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                };
                NumberInputControl.prototype.render = function () {
                    var click = function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    };
                    return (createElement("input", { style: { width: '100%' }, type: "number", onClick: click, id: this.props.uniqueId, value: this.props.value, onChange: this.onInputChange, step: this.props.definition.stepSize, min: this.props.definition.minValue, max: this.props.definition.maxValue }));
                };
                return NumberInputControl;
            }(Component));

            var RangeInputControl = /** @class */ (function (_super) {
                __extends(RangeInputControl, _super);
                function RangeInputControl(props) {
                    var _this = _super.call(this, props) || this;
                    _this.onInputChange = _this.onInputChange.bind(_this);
                    return _this;
                }
                RangeInputControl.prototype.onInputChange = function (e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                };
                RangeInputControl.prototype.render = function () {
                    return (createElement("input", { style: { width: '100%' }, type: "range", id: this.props.uniqueId, value: this.props.value, onChange: this.onInputChange, step: this.props.definition.stepSize, min: this.props.definition.minValue, max: this.props.definition.maxValue }));
                };
                return RangeInputControl;
            }(Component));

            var NumberControlsProvider = /** @class */ (function () {
                function NumberControlsProvider() {
                }
                NumberControlsProvider.prototype.match = function (definition) {
                    return definition.valueType === 'number';
                };
                NumberControlsProvider.prototype.get = function (definition) {
                    if (definition.minValue !== undefined && definition.maxValue !== undefined && definition.stepSize !== undefined) {
                        return {
                            inputControl: NumberInputControl,
                            detailsControl: RangeInputControl
                        };
                    }
                    return {
                        inputControl: NumberInputControl
                    };
                };
                return NumberControlsProvider;
            }());

            var ObjectInputControl = /** @class */ (function (_super) {
                __extends(ObjectInputControl, _super);
                function ObjectInputControl(props) {
                    var _this = _super.call(this, props) || this;
                    _this.triggerValueChange = _this.triggerValueChange.bind(_this);
                    return _this;
                }
                ObjectInputControl.prototype.triggerValueChange = function (newValue) {
                    this.props.valueChange(this.props.definition, newValue);
                };
                ObjectInputControl.prototype.render = function () {
                    return createElement(OptionList, { fields: this.props.definition.fields, value: this.props.value, valueChange: this.triggerValueChange });
                };
                return ObjectInputControl;
            }(Component));

            var ObjectControlsProvider = /** @class */ (function () {
                function ObjectControlsProvider() {
                }
                ObjectControlsProvider.prototype.match = function (definition) {
                    return definition.valueType === 'object';
                };
                ObjectControlsProvider.prototype.get = function () {
                    return {
                        detailsControl: ObjectInputControl,
                    };
                };
                return ObjectControlsProvider;
            }());

            var PasswordInputControl = /** @class */ (function (_super) {
                __extends(PasswordInputControl, _super);
                function PasswordInputControl(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = { show: false };
                    _this.onInputChange = _this.onInputChange.bind(_this);
                    _this.toggleText = _this.toggleText.bind(_this);
                    return _this;
                }
                PasswordInputControl.prototype.onInputChange = function (e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                };
                PasswordInputControl.prototype.toggleText = function () {
                    this.setState(function (state) { return ({ show: !state.show }); });
                };
                PasswordInputControl.prototype.render = function () {
                    return (createElement("div", { style: { display: 'flex' } },
                        createElement("input", { style: { width: '100%' }, type: this.state.show ? 'text' : 'password', id: this.props.uniqueId, value: this.props.value, onChange: this.onInputChange }),
                        createElement(UiButton, { onClick: this.toggleText },
                            createElement(FontAwesomeIcon, { icon: this.state.show ? faEyeSlash : faEye }))));
                };
                return PasswordInputControl;
            }(Component));

            var PasswordControlsProvider = /** @class */ (function () {
                function PasswordControlsProvider() {
                }
                PasswordControlsProvider.prototype.match = function (definition) {
                    return definition.valueType === 'password';
                };
                PasswordControlsProvider.prototype.get = function () {
                    return {
                        inputControl: PasswordInputControl
                    };
                };
                return PasswordControlsProvider;
            }());

            var css$j = ".StyleForm .OptionItem + .newPropertyRow {\n  border-top: 1px solid #eee; }\n\n.StyleForm .newPropertyRow {\n  display: -webkit-box;\n  display: flex; }\n  .StyleForm .newPropertyRow select {\n    width: 100%; }\n  .StyleForm .newPropertyRow .UiButton {\n    overflow: initial; }\n";
            styleInject(css$j);

            var styleProperties = ['background', 'backgroundAttachment', 'backgroundColor', 'backgroundImage',
                'backgroundPosition', 'backgroundRepeat', 'border', 'borderBottom',
                'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor',
                'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth',
                'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth',
                'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle',
                'borderTopWidth', 'borderWidth', 'clear', 'clip',
                'color', 'cursor', 'display', 'filter',
                'cssFloat', 'font', 'fontFamily', 'fontSize',
                'fontVariant', 'fontWeight', 'height', 'left',
                'letterSpacing', 'lineHeight', 'listStyle', 'listStyleImage',
                'listStylePosition', 'listStyleType', 'margin', 'marginBottom',
                'marginLeft', 'marginRight', 'marginTop', 'overflow',
                'padding', 'paddingBottom', 'paddingLeft', 'paddingRight',
                'paddingTop', 'pageBreakAfter', 'pageBreakBefore', 'position',
                'strokeDasharray', 'strokeDashoffset', 'strokeWidth', 'textAlign',
                'textDecoration', 'textIndent', 'textTransform', 'top',
                'verticalAlign', 'visibility', 'width', 'zIndex'];
            var StyleForm = /** @class */ (function (_super) {
                __extends(StyleForm, _super);
                function StyleForm(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        fields: _this.getFields(_this.props.value)
                    };
                    _this.addField = _this.addField.bind(_this);
                    _this.valueChange = _this.valueChange.bind(_this);
                    return _this;
                }
                StyleForm.prototype.componentDidUpdate = function (prevProps) {
                    if (prevProps !== this.props) {
                        this.setState({ fields: this.getFields(this.props.value) });
                    }
                };
                StyleForm.prototype.getFields = function (obj) {
                    var fields = [];
                    if (obj) {
                        Object.keys(obj).forEach(function (name) {
                            var field = {
                                name: name,
                                displayName: name,
                                valueType: 'string',
                            };
                            fields.push(field);
                        });
                    }
                    return fields;
                };
                StyleForm.prototype.valueChange = function (field, value) {
                    var newValue = __assign({}, this.props.value);
                    newValue[field.name] = value;
                    this.props.valueChange(this.props.definition, newValue);
                };
                StyleForm.prototype.removeField = function (fieldName) {
                    var newValue = __assign({}, this.props.value);
                    delete (newValue[fieldName]);
                    this.props.valueChange(this.props.definition, newValue);
                };
                StyleForm.prototype.addField = function () {
                    if (!this.newPropertySelect) {
                        return;
                    }
                    var fieldName = this.newPropertySelect.value;
                    if (!fieldName || this.props.value && this.props.value.hasOwnProperty(fieldName)) {
                        return;
                    }
                    var newValue = __assign({}, this.props.value);
                    newValue[fieldName] = '';
                    this.props.valueChange(this.props.definition, newValue);
                };
                StyleForm.prototype.render = function () {
                    var _this = this;
                    return (createElement("div", { className: "StyleForm" },
                        this.state.fields.map(function (field) {
                            var value = _this.props.value && _this.props.value[field.name];
                            return (createElement(OptionItem, { key: field.name, definition: field, value: value, valueChange: _this.valueChange },
                                createElement(UiButton, { onClick: _this.removeField.bind(_this, field.name) },
                                    createElement(FontAwesomeIcon, { icon: faTrashAlt$1 }))));
                        }),
                        createElement("div", { className: "newPropertyRow" },
                            createElement("select", { ref: function (el) { return _this.newPropertySelect = el; } }, styleProperties.map(function (property) { return createElement("option", { key: property, value: property }, property); })),
                            createElement(UiButton, { onClick: this.addField },
                                createElement(FontAwesomeIcon, { icon: faPlus }),
                                " Add"))));
                };
                return StyleForm;
            }(Component));

            var StyleControlsProvider = /** @class */ (function () {
                function StyleControlsProvider() {
                }
                StyleControlsProvider.prototype.match = function (definition) {
                    return definition.valueType === 'style';
                };
                StyleControlsProvider.prototype.get = function () {
                    return {
                        icon: faCss3,
                        detailsControl: StyleForm,
                        inputControl: function (props) {
                            var text = JSON.stringify(props && props.value) || '';
                            return text === '{}' ? '' : text;
                        }
                    };
                };
                return StyleControlsProvider;
            }());

            var TextAreaInputControl = /** @class */ (function (_super) {
                __extends(TextAreaInputControl, _super);
                function TextAreaInputControl(props) {
                    var _this = _super.call(this, props) || this;
                    _this.onTextareaChange = _this.onTextareaChange.bind(_this);
                    return _this;
                }
                TextAreaInputControl.prototype.onTextareaChange = function (e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                };
                TextAreaInputControl.prototype.render = function () {
                    return createElement("textarea", { id: this.props.uniqueId, value: this.props.value, onChange: this.onTextareaChange, rows: this.props.definition.textRows });
                };
                return TextAreaInputControl;
            }(Component));

            var TextBoxInputControl = /** @class */ (function (_super) {
                __extends(TextBoxInputControl, _super);
                function TextBoxInputControl(props) {
                    var _this = _super.call(this, props) || this;
                    _this.onInputChange = _this.onInputChange.bind(_this);
                    return _this;
                }
                TextBoxInputControl.prototype.onInputChange = function (e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                };
                TextBoxInputControl.prototype.render = function () {
                    return createElement("input", { type: "text", id: this.props.uniqueId, value: this.props.value, onChange: this.onInputChange });
                };
                return TextBoxInputControl;
            }(Component));

            var TextControlsProvider = /** @class */ (function () {
                function TextControlsProvider() {
                }
                TextControlsProvider.prototype.match = function (definition) {
                    return definition.valueType === 'string';
                };
                TextControlsProvider.prototype.get = function (definition) {
                    if (definition.textRows !== undefined && definition.textRows > 1) {
                        return {
                            detailsControl: TextAreaInputControl,
                            inputControl: function (props) { return props && props.value; }
                        };
                    }
                    return {
                        inputControl: TextBoxInputControl
                    };
                };
                return TextControlsProvider;
            }());

            var ValuesInputControl = /** @class */ (function (_super) {
                __extends(ValuesInputControl, _super);
                function ValuesInputControl(props) {
                    var _this = _super.call(this, props) || this;
                    _this.onSelectValueChange = function (e) {
                        _this.props.valueChange(_this.props.definition, e.currentTarget.value);
                    };
                    _this.onSelectValueChange = _this.onSelectValueChange.bind(_this);
                    return _this;
                }
                ValuesInputControl.prototype.render = function () {
                    var values = this.props.definition.values || [];
                    var options = values.map(function (item, index) { return createElement("option", { key: index, value: item.value }, item.text); });
                    return (createElement("select", { id: this.props.uniqueId, value: this.props.value, onChange: this.onSelectValueChange },
                        createElement("option", null, "Select item..."),
                        options));
                };
                return ValuesInputControl;
            }(Component));

            var ValuesControlsProvider = /** @class */ (function () {
                function ValuesControlsProvider() {
                }
                ValuesControlsProvider.prototype.match = function (definition) {
                    return !!(definition.values && definition.values.length);
                };
                ValuesControlsProvider.prototype.get = function () {
                    return {
                        inputControl: ValuesInputControl
                    };
                };
                return ValuesControlsProvider;
            }());

            var SimpleEvent = /** @class */ (function () {
                function SimpleEvent() {
                    this.subscriptions = [];
                }
                SimpleEvent.prototype.subscribe = function (callback) {
                    this.subscriptions.push(callback);
                };
                SimpleEvent.prototype.unsubscribe = function (callback) {
                    var index = this.subscriptions.indexOf(callback);
                    if (index >= 0) {
                        this.subscriptions.splice(index);
                    }
                };
                SimpleEvent.prototype.publish = function (data) {
                    return __awaiter(this, void 0, Promise, function () {
                        var _i, _a, sub;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _i = 0, _a = this.subscriptions;
                                    _b.label = 1;
                                case 1:
                                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                                    sub = _a[_i];
                                    return [4 /*yield*/, Promise.resolve(sub(data))];
                                case 2:
                                    _b.sent();
                                    _b.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                };
                return SimpleEvent;
            }());

            var OptionsCardContextData = /** @class */ (function () {
                function OptionsCardContextData() {
                    this.onSave = new SimpleEvent();
                    // public onValidate = new SimpleEvent();
                    this.removedWebComponents = [];
                    this.changedWebComponents = [];
                    this.createdWebComponents = [];
                    this.saveWebComponents = this.saveWebComponents.bind(this);
                    this.onSave.subscribe(this.saveWebComponents);
                }
                OptionsCardContextData.prototype.saveWebComponents = function () {
                    return __awaiter(this, void 0, Promise, function () {
                        var _i, _a, item, _b, _c, item, _d, _e, item;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    console.log('removedWebComponents', this.removedWebComponents);
                                    console.log('createdWebComponents', this.createdWebComponents);
                                    console.log('changedWebComponents', this.changedWebComponents);
                                    _i = 0, _a = this.removedWebComponents;
                                    _f.label = 1;
                                case 1:
                                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                                    item = _a[_i];
                                    return [4 /*yield*/, apiClient.deleteWebComponentOptions(item)];
                                case 2:
                                    _f.sent();
                                    _f.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4:
                                    _b = 0, _c = this.createdWebComponents;
                                    _f.label = 5;
                                case 5:
                                    if (!(_b < _c.length)) return [3 /*break*/, 8];
                                    item = _c[_b];
                                    return [4 /*yield*/, apiClient.setWebComponentOptions(undefined, item)];
                                case 6:
                                    _f.sent();
                                    _f.label = 7;
                                case 7:
                                    _b++;
                                    return [3 /*break*/, 5];
                                case 8:
                                    _d = 0, _e = this.changedWebComponents;
                                    _f.label = 9;
                                case 9:
                                    if (!(_d < _e.length)) return [3 /*break*/, 12];
                                    item = _e[_d];
                                    return [4 /*yield*/, apiClient.setWebComponentOptions(undefined, item)];
                                case 10:
                                    _f.sent();
                                    _f.label = 11;
                                case 11:
                                    _d++;
                                    return [3 /*break*/, 9];
                                case 12:
                                    // reset context
                                    this.removedWebComponents = [];
                                    this.changedWebComponents = [];
                                    this.createdWebComponents = [];
                                    // clear cache
                                    apiClient.getWebComponentOptions.clearCache();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                OptionsCardContextData.prototype.webComponentRemoved = function (item) {
                    console.log('webComponentRemoved', item);
                    // check if previously created
                    var createdItemIndex = this.createdWebComponents.findIndex(function (x) { return x.id === item.id; });
                    if (createdItemIndex >= 0) {
                        // remove from createdWebComponents
                        this.createdWebComponents.splice(createdItemIndex, 1);
                    }
                    else {
                        // add to removedWebComponents
                        this.removedWebComponents.push(item);
                    }
                };
                OptionsCardContextData.prototype.webComponentChanged = function (item) {
                    console.log('webComponentChanged', item);
                    // check if previously created
                    var createdItemIndex = this.createdWebComponents.findIndex(function (x) { return x.id === item.id; });
                    if (createdItemIndex >= 0) {
                        // remove old item from createdWebComponents
                        this.createdWebComponents.splice(createdItemIndex, 1);
                        // and add new item to createdWebComponents
                        this.changedWebComponents.push(item);
                    }
                    else {
                        // remove previously changed items
                        this.changedWebComponents = this.changedWebComponents.filter(function (x) { return x.id !== item.id; });
                        // add to changedWebComponents
                        this.changedWebComponents.push(item);
                    }
                };
                OptionsCardContextData.prototype.webComponentCreated = function (item) {
                    console.log('webComponentCreated', item);
                    // add to createdWebComponents
                    this.createdWebComponents.push(item);
                };
                return OptionsCardContextData;
            }());
            var OptionCardContext = createContext(new OptionsCardContextData());

            var WebComponentFormContextData = /** @class */ (function () {
                function WebComponentFormContextData() {
                }
                return WebComponentFormContextData;
            }());
            var WebComponentFormContext = createContext(new WebComponentFormContextData());

            var css$k = ".WebComponentForm .componentTitle {\n  display: grid;\n  grid-template-columns: 33px auto 33px;\n  border-bottom: 1px solid #eee; }\n\n.WebComponentForm .componentSelect {\n  display: grid;\n  grid-template-columns: 33px -webkit-min-content auto;\n  grid-template-columns: 33px min-content auto; }\n  .WebComponentForm .componentSelect select {\n    width: 100%; }\n\n.OptionItem[data-valuetype=webComponent] > .item-header {\n  display: none; }\n\n.item-details[data-isarray=true] > .OptionItem[data-valuetype=webComponent] > .item-header {\n  display: grid; }\n";
            styleInject(css$k);

            var WebComponentForm = /** @class */ (function (_super) {
                __extends(WebComponentForm, _super);
                function WebComponentForm(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        loadingWebComponents: true,
                        loadingComponentDefinitions: true,
                        webComponents: [],
                        componentDefinitions: []
                    };
                    _this.initCurrentComponent = _this.initCurrentComponent.bind(_this);
                    _this.onOptionsChange = _this.onOptionsChange.bind(_this);
                    _this.removeWebComponent = _this.removeWebComponent.bind(_this);
                    _this.onSelectedComponentDefinitionChange = _this.onSelectedComponentDefinitionChange.bind(_this);
                    return _this;
                }
                Object.defineProperty(WebComponentForm.prototype, "formEvents", {
                    get: function () {
                        return this.context;
                    },
                    enumerable: true,
                    configurable: true
                });
                WebComponentForm.prototype.componentDidMount = function () {
                    this.loadComponentDefinitions();
                    this.loadWebComponents();
                };
                // public componentDidUpdate(prevProps: IInputComponentProps) {
                //   if (prevProps.value !== this.props.value) {
                //     this.initCurrentComponent();
                //   }
                // }
                WebComponentForm.prototype.componentWillUnmount = function () {
                    if (this.state.selectedWebComponentOptions) {
                        this.formEvents.webComponentRemoved(this.state.selectedWebComponentOptions);
                    }
                };
                WebComponentForm.prototype.loadComponentDefinitions = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var result_1, componentDefinitions_1, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.adminPageContext.componentLoader.getAllComponents()];
                                case 1:
                                    result_1 = _a.sent();
                                    componentDefinitions_1 = [];
                                    Object.keys(result_1).forEach(function (moduleName) {
                                        var components = result_1[moduleName];
                                        components.forEach(function (definition) {
                                            var key = moduleName + '.' + definition.name;
                                            componentDefinitions_1.push({ moduleName: moduleName, definition: definition, key: key });
                                        });
                                    });
                                    this.setState({ componentDefinitions: componentDefinitions_1, loadingComponentDefinitions: false }, this.initCurrentComponent);
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    return [2 /*return*/, console.log(err_1)];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                WebComponentForm.prototype.loadWebComponents = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var webComponents, err_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, apiClient.getWebComponentOptions()];
                                case 1:
                                    webComponents = _a.sent();
                                    this.setState({ webComponents: webComponents, loadingWebComponents: false }, this.initCurrentComponent);
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_2 = _a.sent();
                                    return [2 /*return*/, console.log(err_2)];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                WebComponentForm.prototype.initCurrentComponent = function () {
                    var _this = this;
                    if (this.state.loadingWebComponents || this.state.loadingComponentDefinitions) {
                        return;
                    }
                    if (this.props.value) {
                        var selectedWebComponentOptions = this.state.webComponents.find(function (x) { return x.id === _this.props.value; });
                        if (selectedWebComponentOptions) {
                            var key_1 = selectedWebComponentOptions.moduleName + '.' + selectedWebComponentOptions.componentName;
                            var selectedComponentDefinition = this.state.componentDefinitions.find(function (x) { return x.key === key_1; });
                            if (selectedComponentDefinition) {
                                this.setState({ selectedComponentDefinition: selectedComponentDefinition, selectedWebComponentOptions: selectedWebComponentOptions });
                            }
                        }
                    }
                };
                WebComponentForm.prototype.onSelectedComponentDefinitionChange = function (e) {
                    var newKey = e.currentTarget.value;
                    var selectedComponentDefinition = this.state.componentDefinitions.find(function (x) { return x.key === newKey; });
                    var currentWebComponentOptions = this.state.selectedWebComponentOptions;
                    var newWebComponentOptions;
                    if (selectedComponentDefinition) {
                        var id = currentWebComponentOptions && currentWebComponentOptions.id ||
                            selectedComponentDefinition.definition.name + '_' + guid_1.raw();
                        newWebComponentOptions = {
                            id: id,
                            parentId: this.optionItemContext.parentComponent && this.optionItemContext.parentComponent.id,
                            moduleName: selectedComponentDefinition.moduleName,
                            componentName: selectedComponentDefinition.definition.name,
                            options: getDefaultObjectValue(selectedComponentDefinition.definition.fields)
                        };
                    }
                    // trigger id change
                    var newId = newWebComponentOptions && newWebComponentOptions.id;
                    if (this.props.value !== newId) {
                        this.props.valueChange(this.props.definition, newId);
                        if (newWebComponentOptions) {
                            // notify component created
                            this.formEvents.webComponentCreated(newWebComponentOptions);
                        }
                        else if (currentWebComponentOptions) {
                            // notify component remove
                            this.formEvents.webComponentRemoved(currentWebComponentOptions);
                        }
                    }
                    this.setState({ selectedWebComponentOptions: newWebComponentOptions, selectedComponentDefinition: selectedComponentDefinition });
                };
                WebComponentForm.prototype.removeWebComponent = function () {
                    if (this.state.selectedWebComponentOptions) {
                        // notify component remove
                        this.formEvents.webComponentRemoved(this.state.selectedWebComponentOptions);
                        this.props.valueChange(this.props.definition, undefined);
                        this.setState({ selectedWebComponentOptions: undefined, selectedComponentDefinition: undefined });
                    }
                };
                WebComponentForm.prototype.onOptionsChange = function (newOptions) {
                    if (!this.state.selectedWebComponentOptions) {
                        return;
                    }
                    var newWebComponentOptions = __assign({}, this.state.selectedWebComponentOptions);
                    newWebComponentOptions.options = newOptions;
                    this.setState({ selectedWebComponentOptions: newWebComponentOptions });
                    // notify component changed
                    this.formEvents.webComponentChanged(newWebComponentOptions);
                };
                WebComponentForm.prototype.renderComponentSelection = function () {
                    if (this.state.loadingWebComponents || this.state.loadingComponentDefinitions) {
                        return null;
                    }
                    var selectedComponentKey = this.state.selectedComponentDefinition && this.state.selectedComponentDefinition.key || '';
                    if (this.state.selectedComponentDefinition) {
                        return (createElement("div", { className: "componentTitle" },
                            createElement(UiButton, null,
                                createElement(FontAwesomeIcon, { icon: faCube })),
                            createElement("label", null,
                                this.props.definition.displayName,
                                ": ",
                                this.state.selectedComponentDefinition.definition.displayName,
                                " (",
                                this.state.selectedComponentDefinition.moduleName,
                                ")"),
                            createElement(UiButton, { onClick: this.removeWebComponent },
                                createElement(FontAwesomeIcon, { icon: faTrashAlt$1 }))));
                    }
                    var types = this.state.componentDefinitions.map(function (x) { return x.definition.type; });
                    types = types.filter(function (v, i, a) { return a.indexOf(v) === i; });
                    var optionGroups = {};
                    this.state.componentDefinitions
                        .filter(function (x) { return x.definition.type !== 'admin-input' && x.definition.type !== 'internal'; })
                        .forEach(function (item) {
                        var type = item.definition.type || 'content';
                        if (!optionGroups[type]) {
                            optionGroups[type] = [];
                        }
                        optionGroups[type].push(item);
                    });
                    return (createElement("div", { className: "componentSelect" },
                        createElement(UiButton, null,
                            createElement(FontAwesomeIcon, { icon: faCube })),
                        createElement("label", { htmlFor: this.props.uniqueId }, this.props.definition.displayName),
                        createElement("select", { className: "componentSelect", id: this.props.uniqueId, value: selectedComponentKey, onChange: this.onSelectedComponentDefinitionChange },
                            createElement("option", { key: "_", value: "" }, "Select Component..."),
                            Object.keys(optionGroups).map(function (type) {
                                return createElement("optgroup", { key: type, label: type }, optionGroups[type].map(function (item) {
                                    return createElement("option", { key: item.key, value: item.key },
                                        item.definition.displayName,
                                        " (",
                                        item.moduleName,
                                        ")");
                                }));
                            }))));
                };
                WebComponentForm.prototype.renderComponentForm = function () {
                    if (!this.state.selectedWebComponentOptions || !this.state.selectedComponentDefinition) {
                        return null;
                    }
                    return (createElement(WebComponentFormContext.Provider, { value: { parentComponent: this.state.selectedWebComponentOptions } },
                        createElement(OptionList, { value: this.state.selectedWebComponentOptions.options, fields: this.state.selectedComponentDefinition.definition.fields, valueChange: this.onOptionsChange })));
                };
                WebComponentForm.prototype.render = function () {
                    var _this = this;
                    return (createElement("div", { className: "WebComponentForm" },
                        createElement(AdminPageContext.Consumer, null, function (value) { return (_this.adminPageContext = value) && null; }),
                        createElement(WebComponentFormContext.Consumer, null, function (value) { return (_this.optionItemContext = value) && null; }),
                        this.renderComponentSelection(),
                        this.renderComponentForm()));
                };
                WebComponentForm.contextType = OptionCardContext;
                return WebComponentForm;
            }(Component));

            var WebComponentControlsProvider = /** @class */ (function () {
                function WebComponentControlsProvider() {
                }
                WebComponentControlsProvider.prototype.match = function (definition) {
                    return definition.valueType === 'webComponent';
                };
                WebComponentControlsProvider.prototype.get = function () {
                    return {
                        icon: faCube,
                        detailsControl: WebComponentForm,
                        inputControl: function (props) {
                            return props && props.value || 'none';
                        }
                    };
                };
                return WebComponentControlsProvider;
            }());

            var providers = [
                new ArrayControlsProvider(),
                new ValuesControlsProvider(),
                new ObjectControlsProvider(),
                new StyleControlsProvider(),
                new WebComponentControlsProvider(),
                new BooleanControlsProvider(),
                new TextControlsProvider(),
                new NumberControlsProvider(),
                new PasswordControlsProvider(),
            ];
            var getInputControls = function (definition, context) {
                var provider = providers.find(function (x) { return x.match(definition); });
                var result = provider && provider.get(definition) || {};
                if (!definition.isArray) {
                    if (definition.inputControl) {
                        if (typeof definition.inputControl === 'function') {
                            result.inputControl = definition.inputControl;
                        }
                        else if (definition.inputControl.module && definition.inputControl.component) {
                            var moduleName_1 = definition.inputControl.module;
                            var componentName_1 = definition.inputControl.component;
                            result.inputControl = function (props) { return context.renderComponent({ moduleName: moduleName_1, componentName: componentName_1, options: props }); };
                        }
                    }
                    if (definition.inputForm) {
                        if (typeof definition.inputForm === 'function') {
                            result.detailsControl = definition.inputForm;
                        }
                        else if (definition.inputForm.module && definition.inputForm.component) {
                            var moduleName_2 = definition.inputForm.module;
                            var componentName_2 = definition.inputForm.component;
                            result.detailsControl = function (props) { return context.renderComponent({ moduleName: moduleName_2, componentName: componentName_2, options: props }); };
                        }
                    }
                }
                return result;
            };

            var css$l = ".OptionItem {\n  margin-left: 6px;\n  line-height: 32px;\n  border-top: 1px solid transparent; }\n  .OptionItem + .OptionItem {\n    border-color: #eee; }\n  .OptionItem[data-hasdetails='false'] {\n    display: grid;\n    grid-template-columns: 50% 50%; }\n  .OptionItem[data-detailsvisible='false'] + .add-array-item {\n    border-top: 1px solid #eee; }\n  .OptionItem[data-detailsvisible='true'] {\n    padding-left: 3px;\n    margin-left: 0px;\n    border-left-width: 3px;\n    border-top-width: 1px;\n    border-bottom-width: 1px;\n    border-bottom-color: #eee;\n    border-right-width: 0;\n    border-style: solid;\n    border-left-color: #68a; }\n    .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] {\n      border-left-color: #964; }\n      .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n        border-left-color: #6a9; }\n        .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n          border-left-color: #649; }\n          .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n            border-left-color: #496; }\n            .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n              border-left-color: #946; }\n              .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n                border-left-color: #649; }\n                .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n                  border-left-color: #68a; }\n    .OptionItem[data-detailsvisible='true'] > .item-header {\n      border-bottom: 1px solid #eee; }\n    .OptionItem[data-detailsvisible='true'] + [data-detailsvisible='true'] {\n      margin-top: 6px; }\n    .OptionItem[data-detailsvisible='true'] + [data-detailsvisible='false'] {\n      border-top-width: 0; }\n    .OptionItem[data-detailsvisible='true'] :last-child {\n      border-bottom-width: 0; }\n  .OptionItem label,\n  .OptionItem .header-text,\n  .OptionItem .sub-header-text {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .OptionItem label {\n    display: -webkit-box;\n    display: flex; }\n    .OptionItem label :first-child.header-text {\n      padding-left: 4px; }\n  .OptionItem input,\n  .OptionItem select {\n    height: 32px;\n    border: none;\n    padding-left: 6px;\n    background: white;\n    box-sizing: border-box;\n    margin: 0; }\n    .OptionItem input[type='range'],\n    .OptionItem select[type='range'] {\n      padding-left: 0; }\n  .OptionItem textarea {\n    border: none;\n    width: 100%;\n    padding: 6px;\n    display: -webkit-box;\n    display: flex;\n    box-sizing: border-box; }\n  .OptionItem .item-header {\n    display: grid;\n    grid-template-columns: 50% auto 33px;\n    padding: 0 !important; }\n  .OptionItem .UiButton {\n    padding-top: 0;\n    padding-bottom: 0; }\n";
            styleInject(css$l);

            var counter = 0;
            var OptionItem = /** @class */ (function (_super) {
                __extends(OptionItem, _super);
                function OptionItem(props) {
                    var _this = _super.call(this, props) || this;
                    var detailsVisible = (props.definition.valueType === 'webComponent' && !props.definition.isArray) || undefined;
                    _this.state = {
                        uniqueId: 'ID' + (counter++),
                        detailsVisible: detailsVisible
                    };
                    _this.toggleItemDetails = _this.toggleItemDetails.bind(_this);
                    return _this;
                }
                OptionItem.prototype.componentDidMount = function () {
                    var _this = this;
                    var inputControls = getInputControls(this.props.definition, this.context);
                    var isNewArrayItem = this.props.value && this.props.value.__new;
                    // auto open new array items
                    if (isNewArrayItem) {
                        inputControls.detailsVisible = true;
                    }
                    this.setState(inputControls, function () {
                        if (isNewArrayItem) {
                            delete (_this.props.value.__new);
                            _this.props.valueChange(_this.props.definition, _this.props.value);
                        }
                    });
                };
                OptionItem.prototype.toggleItemDetails = function () {
                    this.setState(function (state) { return ({ detailsVisible: !state.detailsVisible }); });
                };
                OptionItem.prototype.renderInputRow = function () {
                    var label = (createElement("label", { htmlFor: this.state.uniqueId },
                        this.props.children,
                        this.state.icon && (createElement(UiButton, null,
                            createElement(FontAwesomeIcon, { icon: this.state.icon }))),
                        createElement("span", { className: "header-text" }, this.props.definition.displayName)));
                    var input = '';
                    if (this.state.inputControl) {
                        input = createElement(ErrorBoundary, null,
                            createElement(this.state.inputControl, __assign({}, this.props, { uniqueId: this.state.uniqueId })));
                    }
                    if (this.state.detailsControl) {
                        return (createElement(UiButton, { className: "item-header", onClick: this.toggleItemDetails },
                            label,
                            createElement("div", { className: "sub-header-text" }, input),
                            createElement(UiButton, null,
                                createElement(FontAwesomeIcon, { icon: this.state.detailsVisible ? faArrowDown : faArrowRight }))));
                    }
                    return (createElement(Fragment, null,
                        label,
                        input));
                };
                OptionItem.prototype.renderDetailsForm = function () {
                    if (!this.state.detailsControl) {
                        return null;
                    }
                    return (createElement("div", { className: "item-details", hidden: !this.state.detailsVisible, "data-isarray": this.props.definition.isArray ? 'true' : 'false' },
                        createElement(ErrorBoundary, null,
                            createElement(this.state.detailsControl, __assign({}, this.props, { uniqueId: this.state.uniqueId })))));
                };
                OptionItem.prototype.render = function () {
                    return (createElement("div", { className: "OptionItem", "data-hasdetails": this.state.detailsControl ? 'true' : 'false', "data-detailsvisible": this.state.detailsVisible ? 'true' : 'false', "data-valuetype": this.props.definition.valueType },
                        this.renderInputRow(),
                        this.renderDetailsForm()));
                };
                OptionItem.contextType = AdminPageContext;
                return OptionItem;
            }(Component));

            var css$m = ".OptionList {\n  background: white; }\n";
            styleInject(css$m);

            var OptionList = /** @class */ (function (_super) {
                __extends(OptionList, _super);
                function OptionList(props) {
                    var _this = _super.call(this, props) || this;
                    _this.valueChange = _this.valueChange.bind(_this);
                    return _this;
                }
                OptionList.prototype.valueChange = function (field, value) {
                    var newValue = this.props.value ? __assign({}, this.props.value) : {};
                    newValue[field.name] = value;
                    this.props.valueChange(newValue);
                };
                OptionList.prototype.renderDebug = function () {
                    return (createElement(UiCardContent, { className: "debug" }, JSON.stringify(this.props.value, undefined, 2)));
                };
                OptionList.prototype.render = function () {
                    var _this = this;
                    if (!this.props.fields || !this.props.fields.length) {
                        return null;
                        // return <span>No options / fields defined</span>;
                    }
                    return (createElement("div", { className: "OptionList" },
                        this.renderDebug(),
                        this.props.fields.map(function (field) {
                            var value = _this.props.value && _this.props.value[field.name];
                            return createElement(OptionItem, { key: field.name, definition: field, value: value, valueChange: _this.valueChange });
                        })));
                };
                return OptionList;
            }(Component));

            var css$n = ".OptionCard > .UiCardTitle .buttons {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: -webkit-box;\n  display: flex; }\n  .OptionCard > .UiCardTitle .buttons svg {\n    margin-left: 3px; }\n\n.OptionCard > .OptionList {\n  position: relative;\n  overflow-x: hidden; }\n  .OptionCard > .OptionList > :last-child {\n    border-bottom: none; }\n\n.OptionCard > .UiCardButtonRow {\n  border-top: 1px solid #ddd; }\n\n.OptionCard .debug {\n  white-space: pre;\n  line-height: 16px; }\n";
            styleInject(css$n);

            var OptionCard = /** @class */ (function (_super) {
                __extends(OptionCard, _super);
                function OptionCard(props) {
                    var _this = _super.call(this, props) || this;
                    var newOptions = _this.setDefaultValues(props.options || {});
                    _this.state = {
                        newOptions: newOptions,
                        formContext: new OptionsCardContextData(),
                        showDebug: false,
                        showExpertOptions: false,
                    };
                    _this.cancel = _this.cancel.bind(_this);
                    _this.save = _this.save.bind(_this);
                    _this.reset = _this.reset.bind(_this);
                    _this.optionsChange = _this.optionsChange.bind(_this);
                    _this.toggleStyleOptions = _this.toggleStyleOptions.bind(_this);
                    _this.toggleDebug = _this.toggleDebug.bind(_this);
                    return _this;
                }
                // init fields
                OptionCard.prototype.setDefaultValues = function (options) {
                    this.props.fields.forEach(function (field) {
                        var value = options[field.name];
                        if (value === undefined) {
                            value = getDefaultFieldValue(field);
                            if (value !== undefined) {
                                options[field.name] = value;
                            }
                        }
                    });
                    return options;
                };
                OptionCard.prototype.reset = function () {
                    var newOptions = this.setDefaultValues(this.props.options || {});
                    this.setState({ newOptions: newOptions });
                };
                OptionCard.prototype.save = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.state.formContext.onSave.publish()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, this.props.onSave(this.state.newOptions)];
                            }
                        });
                    });
                };
                OptionCard.prototype.cancel = function () {
                    return this.props.onCancel && this.props.onCancel();
                };
                OptionCard.prototype.optionsChange = function (newValue) {
                    this.setState({ newOptions: newValue });
                };
                OptionCard.prototype.toggleStyleOptions = function () {
                    this.setState(function (prevState) { return ({ showExpertOptions: !prevState.showExpertOptions }); });
                };
                OptionCard.prototype.toggleDebug = function () {
                    this.setState(function (prevState) { return ({ showDebug: !prevState.showDebug }); });
                };
                OptionCard.prototype.renderTitle = function () {
                    return (createElement(UiCardTitle, null,
                        createElement(FontAwesomeIcon, { icon: this.props.icon }),
                        " ",
                        this.props.title,
                        createElement("div", { className: "buttons" },
                            this.props.showToggleStyleOptions && (createElement(UiButton, { onClick: this.toggleStyleOptions },
                                "Style options ",
                                createElement(FontAwesomeIcon, { icon: this.state.showExpertOptions ? faEye : faEyeSlash }))),
                            createElement(UiButton, { onClick: this.toggleDebug },
                                "Debug ",
                                createElement(FontAwesomeIcon, { icon: this.state.showDebug ? faEye : faEyeSlash })))));
                };
                OptionCard.prototype.renderContent = function () {
                    return (createElement(OptionCardContext.Provider, { value: this.state.formContext },
                        createElement(OptionList, { fields: this.props.fields, value: this.state.newOptions, valueChange: this.optionsChange })));
                };
                OptionCard.prototype.renderStyleOptionsStyle = function () {
                    if (this.state.showExpertOptions) {
                        return null;
                    }
                    return createElement("style", null, '[data-valuetype="style"] { display: none; }');
                };
                OptionCard.prototype.renderDebugStyle = function () {
                    if (this.state.showDebug) {
                        return null;
                    }
                    return createElement("style", null, '.debug { display: none; }');
                };
                OptionCard.prototype.renderFooter = function () {
                    return (createElement(UiCardButtonRow, { divider: "half" },
                        this.props.onCancel && (createElement(UiButton, { onClick: this.cancel },
                            createElement(FontAwesomeIcon, { icon: faTimes }),
                            " Cancel")),
                        this.props.showReset && (createElement(UiButton, { onClick: this.reset },
                            createElement(FontAwesomeIcon, { icon: faUndo }),
                            " Reset")),
                        createElement(UiButton, { onClick: this.save },
                            createElement(FontAwesomeIcon, { icon: faSave }),
                            " Save")));
                };
                OptionCard.prototype.render = function () {
                    var className = 'OptionCard ' + this.props.className;
                    return (createElement(UiCard, { className: className },
                        this.renderTitle(),
                        this.renderContent(),
                        this.renderFooter(),
                        this.renderStyleOptionsStyle(),
                        this.renderDebugStyle()));
                };
                return OptionCard;
            }(Component));

            var css$o = "";
            styleInject(css$o);

            var PageCard = /** @class */ (function (_super) {
                __extends(PageCard, _super);
                function PageCard(props) {
                    var _this = _super.call(this, props) || this;
                    _this.onEdit = _this.onEdit.bind(_this);
                    _this.onDelete = _this.onDelete.bind(_this);
                    return _this;
                }
                PageCard.prototype.onEdit = function () {
                    return this.props.onEdit(this.props.page);
                };
                PageCard.prototype.onDelete = function () {
                    return this.props.onDelete(this.props.page);
                };
                PageCard.prototype.renderTitle = function () {
                    return (createElement(UiCardTitle, null,
                        createElement(FontAwesomeIcon, { icon: faFile }),
                        " ",
                        this.props.page.title,
                        " (",
                        this.props.page.path,
                        ")"));
                };
                PageCard.prototype.renderPath = function () {
                    return (createElement(UiCardContent, { className: "path" }, this.props.page.path));
                };
                PageCard.prototype.renderFooter = function () {
                    return (createElement(UiCardButtonRow, { divider: "half" },
                        createElement(Link, { to: this.props.page.path },
                            createElement(FontAwesomeIcon, { icon: faArrowAltCircleRight }),
                            " View"),
                        createElement(UiButton, { onClick: this.onEdit },
                            createElement(FontAwesomeIcon, { icon: faEdit }),
                            " Edit"),
                        createElement(UiButton, { onClick: this.onDelete },
                            createElement(FontAwesomeIcon, { icon: faTrashAlt$1 }),
                            " Delete")));
                };
                PageCard.prototype.render = function () {
                    return (createElement(UiCard, { className: "PageCard" },
                        this.renderTitle(),
                        this.renderFooter()));
                };
                return PageCard;
            }(Component));

            var pageOptionsFields = [{
                    description: 'Path',
                    defaultValue: '/',
                    displayName: 'Path',
                    name: 'path',
                    valueType: 'string'
                }, {
                    description: 'Title',
                    defaultValue: 'New Page',
                    displayName: 'Title',
                    name: 'title',
                    valueType: 'string'
                }, {
                    description: 'Content',
                    displayName: 'Content',
                    name: 'webComponentId',
                    valueType: 'webComponent'
                }, {
                    description: 'Page Style',
                    displayName: 'Page Style',
                    name: 'style',
                    valueType: 'style'
                }];

            var css$p = "";
            styleInject(css$p);

            var PageManagerPage = /** @class */ (function (_super) {
                __extends(PageManagerPage, _super);
                function PageManagerPage(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        loading: true,
                        pages: [],
                        showPageDetailsDialog: false
                    };
                    _this.loadPages = _this.loadPages.bind(_this);
                    _this.savePage = _this.savePage.bind(_this);
                    _this.deletePage = _this.deletePage.bind(_this);
                    _this.hidePageDetailsDialog = _this.hidePageDetailsDialog.bind(_this);
                    _this.showPageDetailsDialog = _this.showPageDetailsDialog.bind(_this);
                    return _this;
                }
                PageManagerPage.prototype.componentDidMount = function () {
                    this.loadPages();
                };
                PageManagerPage.prototype.loadPages = function () {
                    var _this = this;
                    this.setState({ loading: true });
                    return apiClient.getWebPages()
                        .then(function (pages) { return _this.setState({ pages: pages, loading: false }); })
                        .catch(function (err) { return _this.setState({ loading: false }); }); // TODO
                };
                PageManagerPage.prototype.savePage = function (page) {
                    return apiClient.setWebPage(undefined, page)
                        .then(this.hidePageDetailsDialog)
                        .then(apiClient.getWebPages.clearCache)
                        .then(this.loadPages)
                        .catch(function (err) { return console.log(err); }); // TODO
                };
                PageManagerPage.prototype.deletePage = function (page) {
                    return apiClient.deleteWebPage(page)
                        .then(this.hidePageDetailsDialog)
                        .then(apiClient.getWebPages.clearCache)
                        .then(this.loadPages)
                        .catch(function (err) { return console.log(err); }); // TODO
                };
                PageManagerPage.prototype.showPageDetailsDialog = function (page) {
                    this.setState({ showPageDetailsDialog: true, selectedPage: page });
                };
                PageManagerPage.prototype.hidePageDetailsDialog = function () {
                    this.setState({ showPageDetailsDialog: false, selectedPage: undefined });
                };
                PageManagerPage.prototype.renderPageCards = function () {
                    var _this = this;
                    if (this.state.loading) {
                        return createElement(UiFlowLayout, null,
                            createElement(UiLoadingCard, null));
                    }
                    return (createElement(UiFlowLayout, null, this.state.pages.map(function (item, index) {
                        return createElement(PageCard, { key: index, page: item, onEdit: _this.showPageDetailsDialog, onDelete: confirm(_this.deletePage, 'Delete?') });
                    })));
                };
                PageManagerPage.prototype.renderPageAddCard = function () {
                    return (createElement(UiFlowLayout, null,
                        createElement(UiCard, { className: "AddPageCard" },
                            createElement(UiButton, { className: "addButton", onClick: this.showPageDetailsDialog },
                                createElement(FontAwesomeIcon, { icon: faPlus }),
                                " Add Page"))));
                };
                PageManagerPage.prototype.renderPageDetailsDialog = function () {
                    if (!this.state.showPageDetailsDialog) {
                        return null;
                    }
                    var page = this.state.selectedPage;
                    var title = page ? 'Edit Page' : 'Add Page';
                    return (createElement(UiOverlay, null,
                        createElement(OptionCard, { icon: faFile, showToggleStyleOptions: true, title: title, fields: pageOptionsFields, onSave: this.savePage, onCancel: this.hidePageDetailsDialog, options: page || {} })));
                };
                PageManagerPage.prototype.render = function () {
                    return (createElement("section", { className: "PageManagerPage" },
                        this.renderPageAddCard(),
                        this.renderPageCards(),
                        this.renderPageDetailsDialog()));
                };
                return PageManagerPage;
            }(Component));

            var css$q = "a.RoundButton {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  color: white;\n  border: 3px solid white;\n  border-radius: 18px;\n  padding: 8px;\n  text-decoration: none;\n  font-weight: bold;\n  min-width: 80px;\n  text-align: center; }\n  a.RoundButton:hover {\n    background: rgba(255, 255, 255, 0.178); }\n  a.RoundButton + a.RoundButton {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    margin-right: 10px; }\n  a.RoundButton svg {\n    margin-right: 6px; }\n";
            styleInject(css$q);

            var RoundButton = /** @class */ (function (_super) {
                __extends(RoundButton, _super);
                function RoundButton() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                RoundButton.prototype.render = function () {
                    return createElement(Link, { className: "RoundButton", to: this.props.to, role: "button" }, this.props.children);
                };
                return RoundButton;
            }(Component));

            var css$r = ".ServiceListItem :last-child {\n  float: right;\n  margin-top: 3px; }\n";
            styleInject(css$r);

            var ServiceListItem = /** @class */ (function (_super) {
                __extends(ServiceListItem, _super);
                function ServiceListItem(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        isOpen: false
                    };
                    _this.showOptions = _this.showOptions.bind(_this);
                    _this.showLog = _this.showLog.bind(_this);
                    _this.toggleOpen = _this.toggleOpen.bind(_this);
                    return _this;
                }
                ServiceListItem.prototype.toggleOpen = function () {
                    this.setState(function (state) { return ({ isOpen: !state.isOpen }); });
                };
                ServiceListItem.prototype.showOptions = function () {
                    return this.props.onShowOptions(this.props.service);
                };
                ServiceListItem.prototype.showLog = function () {
                    return this.props.onShowLog(this.props.service);
                };
                ServiceListItem.prototype.renderButtonRow = function () {
                    var hasLog = this.props.service.log && this.props.service.log.length > 0;
                    var hasOptions = this.props.service.fields && this.props.service.fields.length > 0;
                    if (!hasLog && !hasOptions) {
                        return null;
                    }
                    return (createElement(UiCardButtonRow, { divider: "half" },
                        hasLog && (createElement(UiButton, { onClick: this.showLog },
                            createElement(FontAwesomeIcon, { icon: faFile }),
                            " Log")),
                        hasOptions && (createElement(UiButton, { onClick: this.showOptions },
                            createElement(FontAwesomeIcon, { icon: faCog }),
                            " Options"))));
                };
                ServiceListItem.prototype.rendeDetails = function () {
                    if (!this.state.isOpen) {
                        return null;
                    }
                    return (createElement(Fragment, null,
                        this.props.service.description && (createElement(UiCardContent, null, this.props.service.description)),
                        this.renderButtonRow()));
                };
                ServiceListItem.prototype.render = function () {
                    return (createElement(Fragment, { key: this.props.service.name },
                        createElement(UiButton, { className: "ServiceListItem UiCardContent", onClick: this.toggleOpen },
                            createElement(FontAwesomeIcon, { icon: faCogs }),
                            " ",
                            this.props.service.displayName,
                            createElement(FontAwesomeIcon, { icon: this.state.isOpen ? faArrowDown : faArrowRight })),
                        this.rendeDetails()));
                };
                return ServiceListItem;
            }(Component));

            var css$s = "";
            styleInject(css$s);

            var ServiceGroupCard = /** @class */ (function (_super) {
                __extends(ServiceGroupCard, _super);
                function ServiceGroupCard(props) {
                    return _super.call(this, props) || this;
                }
                ServiceGroupCard.prototype.render = function () {
                    var _this = this;
                    return (createElement(UiCard, { className: "ServiceGroupCard" },
                        createElement(UiCardTitle, { className: "group-header" },
                            createElement(FontAwesomeIcon, { icon: faCube }),
                            " ",
                            this.props.moduleName),
                        this.props.services.map(function (item) {
                            return createElement(ServiceListItem, { key: item.name, service: item, onShowLog: _this.props.onShowServiceLog, onShowOptions: _this.props.onShowServiceOptions });
                        })));
                };
                return ServiceGroupCard;
            }(Component));

            var css$t = ".ServiceManagerPage {\n  min-height: 100px; }\n";
            styleInject(css$t);

            var ServiceManagerPage = /** @class */ (function (_super) {
                __extends(ServiceManagerPage, _super);
                function ServiceManagerPage(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        loadingServices: true,
                        loadingServiceOptions: false,
                        services: [],
                        showOptions: false,
                        showLog: false,
                        selectedService: undefined,
                        selectedServiceOptions: undefined
                    };
                    _this.showLog = _this.showLog.bind(_this);
                    _this.closeLog = _this.closeLog.bind(_this);
                    _this.showOptions = _this.showOptions.bind(_this);
                    _this.closeOptions = _this.closeOptions.bind(_this);
                    _this.loadOptions = _this.loadOptions.bind(_this);
                    _this.saveOptions = _this.saveOptions.bind(_this);
                    _this.optionsChange = _this.optionsChange.bind(_this);
                    return _this;
                }
                ServiceManagerPage.prototype.componentDidMount = function () {
                    this.loadServices();
                };
                ServiceManagerPage.prototype.loadServices = function () {
                    var _this = this;
                    return apiClient.getAllServices()
                        .then(function (services) { return _this.setState({ services: services, loadingServices: false }); })
                        .catch(function (err) { return _this.setState({ loadingServices: false }); }); // TODO
                };
                ServiceManagerPage.prototype.showLog = function (service) {
                    this.setState({ showLog: true, selectedService: service });
                };
                ServiceManagerPage.prototype.showOptions = function (service) {
                    this.setState({
                        showOptions: true,
                        selectedService: service,
                        selectedServiceOptions: undefined
                    }, this.loadOptions);
                };
                ServiceManagerPage.prototype.closeOptions = function () {
                    this.setState({ showOptions: false, selectedService: undefined });
                };
                ServiceManagerPage.prototype.closeLog = function () {
                    this.setState({ showLog: false, selectedService: undefined });
                };
                ServiceManagerPage.prototype.loadOptions = function () {
                    var _this = this;
                    if (!this.state.selectedService) {
                        return;
                    }
                    this.setState({ loadingServiceOptions: true });
                    apiClient.getServiceOptions({
                        moduleName: this.state.selectedService.moduleName,
                        serviceName: this.state.selectedService.name
                    })
                        .then(function (options) {
                        _this.setState({ selectedServiceOptions: options, loadingServiceOptions: false });
                    });
                };
                ServiceManagerPage.prototype.optionsChange = function (newOptions) {
                    this.setState({ selectedServiceOptions: newOptions });
                };
                ServiceManagerPage.prototype.saveOptions = function (newOptions) {
                    if (!this.state.selectedService) {
                        return;
                    }
                    apiClient.setServiceOptions({
                        moduleName: this.state.selectedService.moduleName,
                        serviceName: this.state.selectedService.name
                    }, newOptions);
                    this.closeOptions();
                };
                ServiceManagerPage.prototype.renderServiceOptionsDialog = function () {
                    if (!this.state.showOptions || !this.state.selectedService) {
                        return null;
                    }
                    if (this.state.loadingServiceOptions) {
                        return createElement(UiOverlay, null,
                            createElement(UiLoadingCard, null));
                    }
                    var title = 'Options for ' + this.state.selectedService.displayName;
                    return (createElement(UiOverlay, null,
                        createElement(OptionCard, { icon: faCogs, showReset: true, title: title, fields: this.state.selectedService.fields || [], options: this.state.selectedServiceOptions, onSave: this.saveOptions, onCancel: this.closeOptions })));
                };
                ServiceManagerPage.prototype.renderServiceLogDialog = function () {
                    if (!this.state.showLog || !this.state.selectedService) {
                        return null;
                    }
                    return (createElement(UiOverlay, null,
                        createElement(UiCard, { className: "ServiceLogCard" },
                            createElement(UiCardTitle, null,
                                createElement(FontAwesomeIcon, { icon: faFile }),
                                " Log for ",
                                this.state.selectedService.displayName),
                            createElement(UiCardContent, null,
                                createElement("ul", null, this.state.selectedService.log.map(function (item) { return (createElement("li", null, item)); }))),
                            createElement(UiCardButtonRow, { divider: "full" },
                                createElement(UiButton, { onClick: this.closeLog },
                                    createElement(FontAwesomeIcon, { icon: faTimes }),
                                    " Close")))));
                };
                ServiceManagerPage.prototype.renderServiceGroups = function () {
                    var _this = this;
                    if (this.state.loadingServices) {
                        return createElement(Loading, { center: true });
                    }
                    var groups = this.state.services.map(function (x) { return x.moduleName; }).filter(onlyUnique);
                    var groupCards = groups.map(function (moduleName) {
                        var services = _this.state.services.filter(function (x) { return x.moduleName === moduleName; }); // TODO: .sort((a, b) => a.displayName > b.displayName)
                        return (
                        // <ServiceGroup key={moduleName} moduleName={moduleName} services={services}
                        //   onShowServiceLog={this.showLog} onShowServiceOptions={this.showOptions} />
                        createElement(ServiceGroupCard, { key: moduleName, moduleName: moduleName, services: services, onShowServiceLog: _this.showLog, onShowServiceOptions: _this.showOptions }));
                    });
                    return createElement(UiFlowLayout, null, groupCards);
                };
                ServiceManagerPage.prototype.render = function () {
                    return (createElement("section", { className: "ServiceManagerPage" },
                        this.renderServiceGroups(),
                        this.renderServiceOptionsDialog(),
                        this.renderServiceLogDialog()));
                };
                return ServiceManagerPage;
            }(Component));
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }

            var PageInputControl = /** @class */ (function (_super) {
                __extends(PageInputControl, _super);
                function PageInputControl(props) {
                    var _this = _super.call(this, props) || this;
                    _this.onSelectValueChange = function (e) {
                        _this.props.valueChange(_this.props.definition, e.currentTarget.value);
                    };
                    _this.state = {
                        pages: []
                    };
                    _this.onSelectValueChange = _this.onSelectValueChange.bind(_this);
                    return _this;
                }
                PageInputControl.prototype.componentDidMount = function () {
                    var _this = this;
                    apiClient.getWebPages().then(function (pages) { return _this.setState({ pages: pages }); });
                };
                PageInputControl.prototype.render = function () {
                    var options = this.state.pages.map(function (page) { return createElement("option", { key: page.id, value: page.path },
                        page.title,
                        " (",
                        page.path,
                        ")"); });
                    return (createElement("select", { id: this.props.uniqueId, value: this.props.value, onChange: this.onSelectValueChange },
                        createElement("option", null, "Select page..."),
                        options));
                };
                return PageInputControl;
            }(Component));

            var timezoneNames = momentTimezone.tz.names();
            var timezones = [];
            timezoneNames.forEach(function (timezone) {
                timezones.push({
                    text: "(GMT" + moment.tz(timezone).format('Z') + ") " + timezone.replace('_', ' '),
                    value: timezone
                });
            });
            timezones.sort(function (a, b) { return a.text.localeCompare(b.text); });
            var renderFormattedTime = function (value) {
                value = value || 0;
                var hour = Math.floor(value / 60);
                var minutes = value % 60;
                if (hour < 10) {
                    hour = '0' + hour;
                }
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                return createElement("span", null,
                    hour,
                    ":",
                    minutes);
            };
            var systemSettingsFields = [{
                    description: 'Localized text, time format and number format',
                    displayName: 'Language',
                    name: 'lang',
                    valueType: 'string',
                    values: [
                        { value: 'de', text: 'German' },
                        { value: 'en', text: 'English' },
                        { value: 'fr', text: 'French' },
                        { value: 'es', text: 'Spanish' },
                        { value: 'it', text: 'Italian' },
                        { value: 'ru', text: 'Russian' },
                    ]
                    // }, {
                    //   description: 'Location',
                    //   displayName: 'Location',
                    //   name: 'location',
                    //   valueType: 'string'
                }, {
                    description: 'Timezone',
                    displayName: 'Timezone',
                    name: 'timezone',
                    valueType: 'string',
                    values: timezones.slice()
                }, {
                    description: 'Page to show on startup',
                    displayName: 'Startup page',
                    name: 'startupPath',
                    valueType: 'string',
                    inputControl: PageInputControl
                }, {
                    description: 'Autorefresh',
                    displayName: 'Autorefresh',
                    name: 'autorefresh',
                    isArray: true,
                    valueType: 'object',
                    fields: [{
                            description: 'From',
                            displayName: 'From',
                            name: 'from',
                            valueType: 'number',
                            minValue: 0,
                            maxValue: 1440,
                            stepSize: 15,
                            defaultValue: 480,
                            inputControl: function (props) { return renderFormattedTime(props.value); }
                        }, {
                            description: 'To',
                            displayName: 'To',
                            name: 'to',
                            valueType: 'number',
                            minValue: 0,
                            maxValue: 1440,
                            stepSize: 15,
                            defaultValue: 600,
                            inputControl: function (props) { return renderFormattedTime(props.value); }
                        }, {
                            description: 'Interval in min',
                            displayName: 'Interval in min',
                            name: 'interval',
                            valueType: 'number',
                            minValue: 1,
                            maxValue: 120,
                            stepSize: 1,
                            defaultValue: 10
                        }],
                    inputControl: function (props) {
                        var options = props.value;
                        return createElement("span", null,
                            renderFormattedTime(options.from),
                            " - ",
                            renderFormattedTime(options.to),
                            " every ",
                            options.interval,
                            " min");
                    }
                }];

            var css$u = "";
            styleInject(css$u);

            var SettingsManagerPage = /** @class */ (function (_super) {
                __extends(SettingsManagerPage, _super);
                function SettingsManagerPage(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = { loading: true };
                    _this.loadSettings = _this.loadSettings.bind(_this);
                    _this.saveSettings = _this.saveSettings.bind(_this);
                    return _this;
                }
                SettingsManagerPage.prototype.componentDidMount = function () {
                    this.loadSettings();
                };
                SettingsManagerPage.prototype.loadSettings = function () {
                    var _this = this;
                    return apiClient.getSettings()
                        .then(function (settings) { return _this.setState({ settings: settings, loading: false }); })
                        .catch(); // TODO
                };
                SettingsManagerPage.prototype.saveSettings = function (newSettings) {
                    return apiClient.setSettings(undefined, newSettings)
                        .then(apiClient.getSettings.clearCache)
                        .catch(); // TODO
                };
                SettingsManagerPage.prototype.render = function () {
                    return (createElement("section", { className: "SettingsManagerPage" },
                        this.state.loading && (createElement(UiFlowLayout, null,
                            createElement(UiLoadingCard, null))),
                        this.state.settings && (createElement(UiFlowLayout, null,
                            createElement(OptionCard, { options: this.state.settings, onSave: this.saveSettings, fields: systemSettingsFields, icon: faCogs, title: "Settings", showReset: true })))));
                };
                return SettingsManagerPage;
            }(Component));

            var css$v = "section.SystemPage .danger {\n  border: 1px solid red; }\n  section.SystemPage .danger .UiCardTitle {\n    color: red; }\n\nsection.SystemPage .infoRow {\n  display: grid;\n  grid-template-columns: 100px auto; }\n\nsection.SystemPage .loadingDots {\n  position: absolute;\n  -webkit-transform: translateY(-54%);\n          transform: translateY(-54%); }\n  section.SystemPage .loadingDots:after {\n    font-size: 3em;\n    font-family: Impact;\n    content: ' .';\n    -webkit-animation: dots 1.5s steps(10, end) infinite;\n            animation: dots 1.5s steps(10, end) infinite; }\n\n@-webkit-keyframes dots {\n  0%,\n  10%,\n  90%,\n  100% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  20% {\n    color: #888;\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  30% {\n    color: #888;\n    text-shadow: 0.25em 0 0 #888, 0.5em 0 0 rgba(0, 0, 0, 0); }\n  40%,\n  60% {\n    color: #888;\n    text-shadow: .25em 0 0 #888, .5em 0 0 #888; }\n  70% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: .25em 0 0 #888, .5em 0 0 #888; }\n  80% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 #888; } }\n\n@keyframes dots {\n  0%,\n  10%,\n  90%,\n  100% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  20% {\n    color: #888;\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  30% {\n    color: #888;\n    text-shadow: 0.25em 0 0 #888, 0.5em 0 0 rgba(0, 0, 0, 0); }\n  40%,\n  60% {\n    color: #888;\n    text-shadow: .25em 0 0 #888, .5em 0 0 #888; }\n  70% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: .25em 0 0 #888, .5em 0 0 #888; }\n  80% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 #888; } }\n";
            styleInject(css$v);

            var SystemPage = /** @class */ (function (_super) {
                __extends(SystemPage, _super);
                function SystemPage(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {};
                    _this.exitApplication = _this.exitApplication.bind(_this);
                    _this.restartApplication = _this.restartApplication.bind(_this);
                    _this.shutdownSystem = _this.shutdownSystem.bind(_this);
                    _this.rebootSystem = _this.rebootSystem.bind(_this);
                    _this.resetApplication = _this.resetApplication.bind(_this);
                    return _this;
                }
                SystemPage.prototype.componentDidMount = function () {
                    var _this = this;
                    apiClient.getServerInfo().then(function (info) { return _this.setState({ info: info }); });
                };
                // TODO: confirm dialog
                SystemPage.prototype.exitApplication = function () {
                    return apiClient.exitApplication();
                };
                SystemPage.prototype.restartApplication = function () {
                    return apiClient.restartApplication();
                };
                SystemPage.prototype.shutdownSystem = function () {
                    return apiClient.shutdownSystem();
                };
                SystemPage.prototype.rebootSystem = function () {
                    return apiClient.rebootSystem();
                };
                SystemPage.prototype.resetApplication = function () {
                    return apiClient.resetApplication();
                };
                SystemPage.prototype.renderLoadingDots = function () {
                    return createElement("span", { className: "loadingDots" });
                };
                SystemPage.prototype.renderApplicationCard = function () {
                    return (createElement(UiCard, null,
                        createElement(UiCardTitle, null, "Application"),
                        createElement(UiCardContent, null,
                            createElement("div", { className: "infoRow" },
                                createElement("span", null, "Version"),
                                createElement("span", null, this.state.info ? this.state.info.version : this.renderLoadingDots()))),
                        createElement(UiCardButtonRow, { divider: "half" },
                            createElement(UiButton, { onClick: this.exitApplication },
                                createElement(FontAwesomeIcon, { icon: faSignOutAlt }),
                                " Exit"),
                            createElement(UiButton, { onClick: this.restartApplication },
                                createElement(FontAwesomeIcon, { icon: faRedo }),
                                " Restart"))));
                };
                SystemPage.prototype.renderSystemCard = function () {
                    var free = this.state.info ? Math.round(this.state.info.memory.free / 1024 / 1024) : 0;
                    var total = this.state.info ? Math.round(this.state.info.memory.total / 1024 / 1024) : 0;
                    var memInfo = this.state.info ? (free + 'MB / ' + total + 'MB') : '';
                    var cpuInfo = this.state.info ? (this.state.info.cpu.count + 'x' + this.state.info.cpu.speed + 'MHz') : '';
                    return (createElement(UiCard, null,
                        createElement(UiCardTitle, null, "System"),
                        createElement(UiCardContent, null,
                            createElement("div", { className: "infoRow" },
                                createElement("span", null, "CPU"),
                                createElement("span", null, this.state.info ? cpuInfo : this.renderLoadingDots())),
                            createElement("div", { className: "infoRow" },
                                createElement("span", null, "Memory"),
                                createElement("span", null, this.state.info ? memInfo : this.renderLoadingDots())),
                            createElement("div", { className: "infoRow" },
                                createElement("span", null, "IP"),
                                createElement("span", null, this.state.info ? this.state.info.ip : this.renderLoadingDots())),
                            createElement("div", { className: "infoRow" },
                                createElement("span", null, "Hostname"),
                                createElement("span", null, this.state.info ? this.state.info.hostname : this.renderLoadingDots()))),
                        createElement(UiCardButtonRow, { divider: "half" },
                            createElement(UiButton, { onClick: this.shutdownSystem },
                                createElement(FontAwesomeIcon, { icon: faPowerOff }),
                                " Shutdown"),
                            createElement(UiButton, { onClick: this.rebootSystem },
                                createElement(FontAwesomeIcon, { icon: faRedo }),
                                " Reboot"))));
                };
                SystemPage.prototype.renderDangerCard = function () {
                    return (createElement(UiCard, { className: "danger" },
                        createElement(UiCardTitle, null, "Danger Zone"),
                        createElement(UiCardButtonRow, null,
                            createElement(UiButton, { onClick: confirm(this.resetApplication, 'Reset?') },
                                createElement(FontAwesomeIcon, { icon: faExclamationTriangle }),
                                " Reset Application"))));
                };
                SystemPage.prototype.render = function () {
                    return (createElement("section", { className: "SystemPage" },
                        createElement(UiFlowLayout, null,
                            this.renderApplicationCard(),
                            this.renderSystemCard(),
                            this.renderDangerCard())));
                };
                return SystemPage;
            }(Component));

            var css$w = "section.Admin {\n  height: 100%;\n  overflow: auto;\n  background: #fdfdfd; }\n  section.Admin > header {\n    background-color: #456;\n    color: white;\n    position: relative;\n    z-index: 2; }\n    section.Admin > header .title {\n      display: inline-block;\n      font-size: 1.5em;\n      margin: 25px;\n      text-align: center; }\n  section.Admin > .content {\n    position: relative;\n    font-size: 14px;\n    line-height: 1.5; }\n  section.Admin section.Navigation {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); }\n  section.Admin a {\n    text-decoration: none; }\n  section.Admin a,\n  section.Admin label,\n  section.Admin .clickable {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    white-space: nowrap; }\n    section.Admin a svg,\n    section.Admin label svg,\n    section.Admin .clickable svg {\n      margin-right: 3px; }\n  section.Admin label {\n    cursor: unset; }\n  section.Admin .clickable {\n    padding-left: 8px;\n    padding-right: 8px; }\n    section.Admin .clickable.disabled {\n      cursor: default;\n      color: #bbb; }\n    section.Admin .clickable:not(.disabled) {\n      cursor: pointer; }\n      section.Admin .clickable:not(.disabled):active {\n        background: #ddd; }\n  section.Admin select,\n  section.Admin textarea,\n  section.Admin input {\n    background: white;\n    font-size: 16px;\n    text-overflow: ellipsis; }\n  section.Admin input[type=range] {\n    display: block; }\n  section.Admin svg {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n";
            styleInject(css$w);

            var Admin = /** @class */ (function (_super) {
                __extends(Admin, _super);
                function Admin() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Admin.prototype.render = function () {
                    return (createElement(AdminPageContext.Provider, { value: this.context },
                        createElement("section", { className: "Admin" },
                            createElement("header", null,
                                createElement(RoundButton, { to: this.context.settings.startupPath },
                                    createElement(FontAwesomeIcon, { icon: faHome }),
                                    " Home"),
                                createElement("div", { className: "title" }, "Reactron Admin")),
                            createElement(Navigation, null),
                            createElement("div", { className: "content" },
                                createElement(Switch, null,
                                    createElement(Route, { path: "/admin/ModuleManager", component: ModuleManagerPage }),
                                    createElement(Route, { path: "/admin/ServiceManager", component: ServiceManagerPage }),
                                    createElement(Route, { path: "/admin/Pages", component: PageManagerPage }),
                                    createElement(Route, { path: "/admin/Settings", component: SettingsManagerPage }),
                                    createElement(Route, { path: "/admin/System", component: SystemPage }),
                                    createElement(Redirect, { to: "/admin/ModuleManager" }))))));
                };
                return Admin;
            }(Component));

            var components = exports('components', [{
                    component: Admin,
                    description: 'Admin Front End',
                    displayName: 'Reactron Admin',
                    name: 'Admin',
                    fields: []
                }]);

        }
    };
});
//# sourceMappingURL=bundle.browser.js.map
