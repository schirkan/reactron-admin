System.register(['@fortawesome/free-brands-svg-icons', 'react-router-dom', '@fortawesome/free-regular-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome', 'react'], function (exports, module) {
    'use strict';
    var faGithub, faCss3, NavLink, Link, Redirect, Route, Switch, faFile, faEdit, faTrashAlt, faArrowAltCircleUp, faArrowAltCircleDown, faHome, faPlus, faCogs, faTimes, faSignOutAlt, faRedo, faPowerOff, faExclamationTriangle, faSpinner, faCheck, faQuestion, faStarOfLife, faCube, faCog, faSyncAlt, faDownload, faUndo, faSave, faArrowDown, faArrowRight, faList, faCaretDown, faCaretRight, FontAwesomeIcon, createElement, Component, createContext, Fragment;
    return {
        setters: [function (module) {
            faGithub = module.faGithub;
            faCss3 = module.faCss3;
        }, function (module) {
            NavLink = module.NavLink;
            Link = module.Link;
            Redirect = module.Redirect;
            Route = module.Route;
            Switch = module.Switch;
        }, function (module) {
            faFile = module.faFile;
            faEdit = module.faEdit;
            faTrashAlt = module.faTrashAlt;
            faArrowAltCircleUp = module.faArrowAltCircleUp;
            faArrowAltCircleDown = module.faArrowAltCircleDown;
        }, function (module) {
            faHome = module.faHome;
            faPlus = module.faPlus;
            faCogs = module.faCogs;
            faTimes = module.faTimes;
            faSignOutAlt = module.faSignOutAlt;
            faRedo = module.faRedo;
            faPowerOff = module.faPowerOff;
            faExclamationTriangle = module.faExclamationTriangle;
            faSpinner = module.faSpinner;
            faCheck = module.faCheck;
            faQuestion = module.faQuestion;
            faStarOfLife = module.faStarOfLife;
            faCube = module.faCube;
            faCog = module.faCog;
            faSyncAlt = module.faSyncAlt;
            faDownload = module.faDownload;
            faUndo = module.faUndo;
            faSave = module.faSave;
            faArrowDown = module.faArrowDown;
            faArrowRight = module.faArrowRight;
            faList = module.faList;
            faCaretDown = module.faCaretDown;
            faCaretRight = module.faCaretRight;
        }, function (module) {
            FontAwesomeIcon = module.FontAwesomeIcon;
        }, function (module) {
            createElement = module.createElement;
            Component = module.Component;
            createContext = module.createContext;
            Fragment = module.Fragment;
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

            var css = "section.Loading {\r\n  text-align: center; }\r\n  section.Loading.center {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-50%); }\r\n  section.Loading .text {\r\n    margin-top: 10px; }\r\n";
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

            var css$1 = ".UiFlowLayout {\r\n  padding: 10px;\r\n  column-count: 4;\r\n  column-gap: 0; }\r\n  .UiFlowLayout > * {\r\n    width: calc(100% - 20px);\r\n    padding: 10px;\r\n    break-inside: avoid; }\r\n  .UiFlowLayout + .UiFlowLayout {\r\n    padding-top: 0px;\r\n    margin-top: -10px; }\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .UiFlowLayout {\r\n    column-count: 3; } }\r\n\r\n@media screen and (max-width: 900px) {\r\n  .UiFlowLayout {\r\n    column-count: 2; } }\r\n\r\n@media screen and (max-width: 600px) {\r\n  .UiFlowLayout {\r\n    column-count: 1; } }\r\n";
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

            var css$2 = ".UiCard {\r\n  overflow: auto;\r\n  width: 100%;\r\n  border: 1px solid #ddd;\r\n  border-radius: 2px;\r\n  background: white;\r\n  color: #222;\r\n  box-sizing: border-box;\r\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; }\r\n  .UiCard a {\r\n    color: #555; }\r\n";
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

            var css$3 = ".UiCardContent {\r\n  padding: 6px; }\r\n  .UiCardContent + * {\r\n    border-top: 1px solid #ddd; }\r\n";
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

            var css$4 = ".UiCardTitle {\r\n  padding: 6px;\r\n  padding-left: 10px;\r\n  font-size: 16px;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  background: white;\r\n  border-bottom: 1px solid #ddd; }\r\n";
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

            var css$6 = ".UiOverlay {\r\n  position: fixed;\r\n  z-index: 1;\r\n  background: rgba(99, 99, 99, 0.47);\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  padding: 0; }\r\n  .UiOverlay > .Loading {\r\n    color: white; }\r\n  .UiOverlay > .UiCard {\r\n    position: absolute;\r\n    margin: 20px;\r\n    top: 118px;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    width: auto;\r\n    max-height: fit-content; }\r\n    .UiOverlay > .UiCard .UiCardTitle {\r\n      position: sticky;\r\n      top: 0;\r\n      z-index: 1; }\r\n    .UiOverlay > .UiCard .UiCardButtonRow {\r\n      position: sticky;\r\n      bottom: 0; }\r\n\r\n@media screen and (min-width: 601px) {\r\n  .UiOverlay > .UiCard {\r\n    position: absolute;\r\n    margin: 20px 0;\r\n    top: 118px;\r\n    bottom: 0;\r\n    left: 50%;\r\n    right: auto;\r\n    width: 560px;\r\n    transform: translateX(-50%); } }\r\n";
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

            var css$7 = ".UiButton {\r\n  padding: 6px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis; }\r\n";
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
                        Promise.resolve(_this.props.onClick && _this.props.onClick())
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

            var css$8 = "section.AddModuleCard {\r\n  display: inline-flex; }\r\n  section.AddModuleCard input {\r\n    padding-left: 6px;\r\n    border: none;\r\n    width: 100%; }\r\n  section.AddModuleCard .addButton {\r\n    border-left: 1px solid #ddd;\r\n    overflow: visible; }\r\n";
            styleInject(css$8);

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

            var css$9 = "section.CommandResult .title {\r\n  padding: 6px;\r\n  padding-left: 10px;\r\n  border-bottom: 1px solid #ddd;\r\n  font-size: 16px; }\r\n\r\nsection.CommandResult .close {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  padding: 6px;\r\n  width: 18px;\r\n  min-width: 18px;\r\n  text-align: center; }\r\n\r\nsection.CommandResult .results {\r\n  overflow: auto;\r\n  position: absolute;\r\n  top: 37px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  word-wrap: break-word; }\r\n  section.CommandResult .results .result {\r\n    padding: 6px;\r\n    border-bottom: 1px solid #ddd; }\r\n";
            styleInject(css$9);

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
                        createElement("div", { className: "title" }, "Result"),
                        createElement("div", { className: "close clickable", onClick: this.props.onClose },
                            createElement(FontAwesomeIcon, { icon: faTimes })),
                        createElement("div", { className: "results" }, this.props.results.map(function (item, index) { return _this.renderCommandResult(item, index.toString()); }))));
                };
                return CommandResult;
            }(Component));

            var css$a = ".UiCardButtonRow {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));\r\n  width: 100%;\r\n  background: #fafafa;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0; }\r\n  .UiCardButtonRow + * {\r\n    border-top: 1px solid #ddd; }\r\n  .UiCardButtonRow > * {\r\n    text-align: center;\r\n    padding: 6px;\r\n    position: relative; }\r\n  .UiCardButtonRow.UiCardButtonRowDividerFull > *:not(:first-child) {\r\n    border-left: 1px solid #ddd; }\r\n  .UiCardButtonRow.UiCardButtonRowDividerHalf > *:not(:first-child)::before {\r\n    border-left: 1px solid #ddd;\r\n    content: \" \";\r\n    position: absolute;\r\n    top: 6px;\r\n    bottom: 6px;\r\n    left: 0; }\r\n";
            styleInject(css$a);

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

            var css$b = ".ModuleCard {\r\n  overflow: hidden; }\r\n  .ModuleCard .UiCardTitle .hasUpdate {\r\n    margin-left: 6px;\r\n    font-size: 10px;\r\n    color: #59aaff;\r\n    vertical-align: text-top; }\r\n  .ModuleCard .UiCardButtonRow {\r\n    transition: 0.5s ease-in-out;\r\n    margin: 0; }\r\n    .ModuleCard .UiCardButtonRow.default.hide {\r\n      margin-left: -100%; }\r\n    .ModuleCard .UiCardButtonRow.actions {\r\n      margin-top: -34px; }\r\n      .ModuleCard .UiCardButtonRow.actions.hide {\r\n        margin-left: 100%; }\r\n    .ModuleCard .UiCardButtonRow a {\r\n      color: #222;\r\n      text-decoration: none; }\r\n";
            styleInject(css$b);

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
                    this.hideActions();
                    this.props.onRemove(this.props.module);
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
                        createElement(UiButton, { disabled: !this.props.module.hasUpdate, onClick: this.onUpdate }, "Update"),
                        createElement(UiButton, { disabled: !this.props.module.canBuild, onClick: this.onRebuild }, "Rebuild"),
                        createElement(UiButton, { disabled: !this.props.module.canRemove, onClick: this.onRemove }, "Remove"),
                        createElement(UiButton, { onClick: this.hideActions },
                            createElement(FontAwesomeIcon, { icon: faTimes }))));
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

            var css$c = "section.UpdateModulesCard .UiCardButtonRow {\r\n  background: transparent; }\r\n";
            styleInject(css$c);

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

            var css$d = "";
            styleInject(css$d);

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
                        createElement(UiFlowLayout, null,
                            createElement(AddModuleCard, { onAdd: this.addModule }),
                            createElement(UpdateModulesCard, { checkingUpdates: this.state.checkingUpdates, modules: this.state.modules, onCheckUpdates: this.checkUpdates, onUpdateAll: this.updateAll, onUpdateModule: this.updateModule })),
                        !this.state.modules.length && (createElement(UiFlowLayout, null,
                            createElement(UiLoadingCard, null))),
                        createElement(UiFlowLayout, null, this.state.modules.map(function (item) {
                            return createElement(ModuleCard, { key: item.name, module: item, onRemove: _this.removeModule, onRebuild: _this.rebuildModule, onUpdate: _this.updateModule });
                        }))));
                };
                return ModuleManagerPage;
            }(Component));

            var css$e = "section.Navigation {\r\n  background: #456;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr)); }\r\n  section.Navigation a {\r\n    padding-bottom: 8px;\r\n    padding-top: 11px;\r\n    color: #ddd;\r\n    text-decoration: none;\r\n    border-bottom: 3px solid transparent;\r\n    text-align: center;\r\n    transition: 0.5s; }\r\n    section.Navigation a:hover, section.Navigation a:active, section.Navigation a.active {\r\n      background: transparent;\r\n      color: white; }\r\n    section.Navigation a:nth-child(1).active {\r\n      background: #4a8599; }\r\n    section.Navigation a:nth-child(1).active, section.Navigation a:nth-child(1):hover {\r\n      border-bottom: 3px solid #42e1f7; }\r\n    section.Navigation a:nth-child(2).active {\r\n      background: #69006f; }\r\n    section.Navigation a:nth-child(2).active, section.Navigation a:nth-child(2):hover {\r\n      border-bottom: 3px solid #f000ff; }\r\n    section.Navigation a:nth-child(3).active {\r\n      background: #5f5600; }\r\n    section.Navigation a:nth-child(3).active, section.Navigation a:nth-child(3):hover {\r\n      border-bottom: 3px solid #ffe700; }\r\n    section.Navigation a:nth-child(4).active {\r\n      background: #2f6108; }\r\n    section.Navigation a:nth-child(4).active, section.Navigation a:nth-child(4):hover {\r\n      border-bottom: 3px solid #74ee15; }\r\n    section.Navigation a:nth-child(5).active {\r\n      background: #001086; }\r\n    section.Navigation a:nth-child(5).active, section.Navigation a:nth-child(5):hover {\r\n      border-bottom: 3px solid #001eff; }\r\n";
            styleInject(css$e);

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

            var css$f = ".ArrayForm .OptionItem[data-detailsvisible='false'] + .add-array-item {\r\n  border-top: 1px solid #eee; }\r\n";
            styleInject(css$f);

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
                    var array = this.props.value || [];
                    array = array.slice();
                    array.push(getDefaultFieldValue(arrayItemDefinition));
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
                                createElement(FontAwesomeIcon, { icon: faTrashAlt })),
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

            var css$g = ".StyleForm .newPropertyRow {\r\n  display: flex; }\r\n  .StyleForm .newPropertyRow select {\r\n    width: 100%; }\r\n  .StyleForm .newPropertyRow .UiButton {\r\n    overflow: initial; }\r\n";
            styleInject(css$g);

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
                                    createElement(FontAwesomeIcon, { icon: faTrashAlt }))));
                        }),
                        createElement("div", { className: "newPropertyRow" },
                            createElement("select", { ref: function (el) { return _this.newPropertySelect = el; } }, styleProperties.map(function (property) { return createElement("option", { key: property, value: property }, property); })),
                            createElement(UiButton, { onClick: this.addField },
                                createElement(FontAwesomeIcon, { icon: faPlus }),
                                " Add"))));
                };
                return StyleForm;
            }(Component));

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

            var css$h = ".WebComponentForm .componentTitle {\r\n  display: grid;\r\n  grid-template-columns: 33px auto 33px;\r\n  border-bottom: 1px solid #eee; }\r\n\r\n.WebComponentForm .componentSelect {\r\n  width: 100%; }\r\n\r\n.WebComponentForm :last-child {\r\n  border-bottom: none; }\r\n";
            styleInject(css$h);

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
                WebComponentForm.prototype.componentWillUnmount = function () {
                    if (this.state.selectedWebComponentOptions) {
                        this.formEvents.webComponentRemoved(this.state.selectedWebComponentOptions);
                    }
                };
                WebComponentForm.prototype.loadComponentDefinitions = function () {
                    var _this = this;
                    return this.adminPageContext.componentLoader.getAllComponents()
                        .then(function (result) {
                        var componentDefinitions = [];
                        Object.keys(result).forEach(function (moduleName) {
                            var components = result[moduleName];
                            components.forEach(function (definition) {
                                var key = moduleName + '.' + definition.name;
                                componentDefinitions.push({ moduleName: moduleName, definition: definition, key: key });
                            });
                        });
                        _this.setState({ componentDefinitions: componentDefinitions, loadingComponentDefinitions: false }, _this.initCurrentComponent);
                    })
                        .catch(function (err) { return console.log(err); }); // TODO
                };
                WebComponentForm.prototype.loadWebComponents = function () {
                    var _this = this;
                    return apiClient.getWebComponentOptions()
                        .then(function (webComponents) {
                        _this.setState({ webComponents: webComponents, loadingWebComponents: false }, _this.initCurrentComponent);
                    })
                        .catch(function (err) { return console.log(err); }); // TODO
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
                                this.state.selectedComponentDefinition.definition.displayName,
                                " (",
                                this.state.selectedComponentDefinition.moduleName,
                                ")"),
                            createElement(UiButton, { onClick: this.removeWebComponent },
                                createElement(FontAwesomeIcon, { icon: faTrashAlt }))));
                    }
                    return (createElement("select", { className: "componentSelect", value: selectedComponentKey, onChange: this.onSelectedComponentDefinitionChange },
                        createElement("option", { key: "_", value: "" }, "Select Component..."),
                        this.state.componentDefinitions.map(function (item) {
                            return createElement("option", { key: item.key, value: item.key },
                                item.definition.displayName,
                                " (",
                                item.moduleName,
                                ")");
                        })));
                };
                WebComponentForm.prototype.render = function () {
                    var _this = this;
                    return (createElement("div", { className: "WebComponentForm" },
                        createElement(AdminPageContext.Consumer, null, function (value) { return (_this.adminPageContext = value) && null; }),
                        this.renderComponentSelection(),
                        this.state.selectedWebComponentOptions &&
                            this.state.selectedComponentDefinition && (createElement(OptionList, { value: this.state.selectedWebComponentOptions.options, fields: this.state.selectedComponentDefinition.definition.fields, valueChange: this.onOptionsChange }))));
                };
                WebComponentForm.contextType = OptionCardContext;
                return WebComponentForm;
            }(Component));

            var css$i = ".OptionItem {\r\n  margin-left: 6px;\r\n  line-height: 32px;\r\n  border-top: 1px solid transparent; }\r\n  .OptionItem + .OptionItem {\r\n    border-color: #eee; }\r\n  .OptionItem[data-hasdetails='false'] {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%; }\r\n  .OptionItem[data-detailsvisible='false'] + .add-array-item {\r\n    border-top: 1px solid #eee; }\r\n  .OptionItem[data-detailsvisible='true'] {\r\n    padding-left: 3px;\r\n    margin-left: 0px;\r\n    border-left-width: 3px;\r\n    border-top-width: 1px;\r\n    border-bottom-width: 1px;\r\n    border-bottom-color: #eee;\r\n    border-right-width: 0;\r\n    border-style: solid;\r\n    border-left-color: #68a; }\r\n    .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] {\r\n      border-left-color: #964; }\r\n      .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\r\n        border-left-color: #6a9; }\r\n        .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\r\n          border-left-color: #649; }\r\n          .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\r\n            border-left-color: #496; }\r\n            .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\r\n              border-left-color: #946; }\r\n              .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\r\n                border-left-color: #649; }\r\n                .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\r\n                  border-left-color: #68a; }\r\n    .OptionItem[data-detailsvisible='true'] > .item-header {\r\n      border-bottom: 1px solid #eee; }\r\n    .OptionItem[data-detailsvisible='true'] + [data-detailsvisible='true'] {\r\n      margin-top: 6px; }\r\n    .OptionItem[data-detailsvisible='true'] + [data-detailsvisible='false'] {\r\n      border-top-width: 0; }\r\n    .OptionItem[data-detailsvisible='true'] :last-child {\r\n      border-bottom-width: 0; }\r\n  .OptionItem label,\r\n  .OptionItem .header-text,\r\n  .OptionItem .sub-header-text {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis; }\r\n  .OptionItem label {\r\n    display: flex; }\r\n    .OptionItem label :first-child.header-text {\r\n      padding-left: 4px; }\r\n  .OptionItem input,\r\n  .OptionItem select {\r\n    height: 32px;\r\n    border: none;\r\n    padding-left: 6px;\r\n    background: white;\r\n    box-sizing: border-box;\r\n    margin: 0; }\r\n    .OptionItem input[type='range'],\r\n    .OptionItem select[type='range'] {\r\n      padding-left: 0; }\r\n  .OptionItem textarea {\r\n    border: none;\r\n    width: 100%;\r\n    padding: 6px;\r\n    display: flex;\r\n    box-sizing: border-box; }\r\n  .OptionItem .item-header {\r\n    display: grid;\r\n    grid-template-columns: 50% auto 33px;\r\n    padding: 0 !important; }\r\n  .OptionItem .UiButton {\r\n    padding-top: 0;\r\n    padding-bottom: 0; }\r\n";
            styleInject(css$i);

            var counter = 0;
            var OptionItem = /** @class */ (function (_super) {
                __extends(OptionItem, _super);
                function OptionItem(props) {
                    var _this = _super.call(this, props) || this;
                    var hasDetails = !!props.definition.isArray || (props.definition.textRows !== undefined && props.definition.textRows > 1);
                    switch (props.definition.valueType) {
                        case 'object':
                        case 'style':
                        case 'webComponent':
                            hasDetails = true;
                            break;
                    }
                    _this.state = {
                        uniqueId: 'ID' + (counter++),
                        hasDetails: hasDetails,
                    };
                    _this.triggerValueChange = _this.triggerValueChange.bind(_this);
                    _this.onInputChange = _this.onInputChange.bind(_this);
                    _this.onTextareaChange = _this.onTextareaChange.bind(_this);
                    _this.onCheckboxChange = _this.onCheckboxChange.bind(_this);
                    _this.onSelectValueChange = _this.onSelectValueChange.bind(_this);
                    _this.toggleItemDetails = _this.toggleItemDetails.bind(_this);
                    return _this;
                }
                OptionItem.prototype.triggerValueChange = function (newValue) {
                    this.props.valueChange(this.props.definition, newValue);
                };
                OptionItem.prototype.renderArray = function () {
                    return (createElement(ArrayForm, __assign({}, this.props)));
                };
                OptionItem.prototype.renderObject = function () {
                    return (createElement(OptionList, { fields: this.props.definition.fields, value: this.props.value, valueChange: this.triggerValueChange }));
                };
                OptionItem.prototype.onTextareaChange = function (e) {
                    this.triggerValueChange(e.currentTarget.value);
                };
                OptionItem.prototype.onInputChange = function (e) {
                    this.triggerValueChange(e.currentTarget.value);
                };
                OptionItem.prototype.onSelectValueChange = function (e) {
                    this.triggerValueChange(e.currentTarget.value);
                };
                OptionItem.prototype.onCheckboxChange = function (e) {
                    this.triggerValueChange(e.currentTarget.checked);
                };
                OptionItem.prototype.renderDropDown = function () {
                    var values = this.props.definition.values || [];
                    var options = values.map(function (item, index) {
                        return createElement("option", { key: index, value: item.value }, item.text);
                    });
                    return (createElement("select", { id: this.state.uniqueId, value: this.props.value, onChange: this.onSelectValueChange }, options));
                };
                OptionItem.prototype.renderTextInput = function () {
                    if (this.props.definition.textRows !== undefined && this.props.definition.textRows > 1) {
                        return (createElement("textarea", { id: this.state.uniqueId, value: this.props.value, onChange: this.onTextareaChange, rows: this.props.definition.textRows }));
                    }
                    return (createElement("input", { type: "text", id: this.state.uniqueId, value: this.props.value, onChange: this.onInputChange }));
                };
                OptionItem.prototype.renderNumberInput = function () {
                    var inputType = 'number';
                    if (this.props.definition.minValue !== undefined &&
                        this.props.definition.maxValue !== undefined) {
                        inputType = 'range';
                    }
                    return (createElement("input", { type: inputType, id: this.state.uniqueId, value: this.props.value, onChange: this.onInputChange, step: this.props.definition.stepSize, min: this.props.definition.minValue, max: this.props.definition.maxValue }));
                };
                OptionItem.prototype.renderBooleanInput = function () {
                    return (createElement("input", { type: "checkbox", id: this.state.uniqueId, value: this.props.value, onChange: this.onCheckboxChange }));
                };
                OptionItem.prototype.renderStyleInput = function () {
                    return (createElement(StyleForm, __assign({}, this.props)));
                };
                OptionItem.prototype.renderWebComponentInput = function () {
                    return (createElement(WebComponentForm, __assign({}, this.props)));
                };
                OptionItem.prototype.toggleItemDetails = function () {
                    this.setState(function (state) { return ({ detailsVisible: !state.detailsVisible }); });
                };
                OptionItem.prototype.renderItemHeader = function () {
                    var subHeaderText = null;
                    var icon = null;
                    if (this.props.definition.isArray) {
                        var array = this.props.value || [];
                        subHeaderText = '(' + array.length + ' items)';
                        icon = faList;
                    }
                    else if (this.props.definition.valueType === 'string') {
                        subHeaderText = this.props.value;
                    }
                    else if (this.props.definition.valueType === 'style') {
                        subHeaderText = JSON.stringify(this.props.value);
                        if (subHeaderText === '{}') {
                            subHeaderText = '';
                        }
                        icon = faCss3;
                    }
                    else if (this.props.definition.valueType === 'webComponent') {
                        subHeaderText = this.props.value || 'Component';
                        icon = faFile;
                    }
                    return (createElement(UiButton, { className: "item-header", onClick: this.toggleItemDetails },
                        createElement("label", null,
                            this.props.children,
                            icon && (createElement(UiButton, null,
                                createElement(FontAwesomeIcon, { icon: icon }))),
                            createElement("span", { className: "header-text" }, this.props.definition.displayName)),
                        createElement("span", { className: "sub-header-text" }, subHeaderText),
                        createElement(UiButton, null,
                            createElement(FontAwesomeIcon, { icon: this.state.detailsVisible ? faCaretDown : faCaretRight }))));
                };
                OptionItem.prototype.renderLabel = function () {
                    if (this.state.hasDetails) {
                        return this.renderItemHeader();
                    }
                    return (createElement("label", { htmlFor: this.state.uniqueId },
                        this.props.children,
                        createElement("span", { className: "header-text" }, this.props.definition.displayName)));
                };
                OptionItem.prototype.renderInput = function () {
                    if (this.state.hasDetails) {
                        return (createElement("div", { className: "item-details", hidden: !this.state.detailsVisible, "data-isarray": this.props.definition.isArray ? 'true' : 'false' }, this.renderInputControl()));
                    }
                    return this.renderInputControl();
                };
                OptionItem.prototype.renderInputControl = function () {
                    if (this.props.definition.isArray) {
                        return this.renderArray();
                    }
                    if (this.props.definition.values && this.props.definition.values.length) {
                        return this.renderDropDown();
                    }
                    switch (this.props.definition.valueType) {
                        case 'number':
                            return this.renderNumberInput();
                        case 'boolean':
                            return this.renderBooleanInput();
                        case 'string':
                            return this.renderTextInput();
                        case 'object':
                            return this.renderObject();
                        case 'style':
                            return this.renderStyleInput();
                        case 'webComponent':
                            return this.renderWebComponentInput();
                    }
                    return null;
                };
                OptionItem.prototype.render = function () {
                    return (createElement("div", { className: "OptionItem", "data-hasdetails": this.state.hasDetails ? 'true' : 'false', "data-detailsvisible": this.state.detailsVisible ? 'true' : 'false', "data-valuetype": this.props.definition.valueType },
                        this.renderLabel(),
                        this.renderInput()));
                };
                return OptionItem;
            }(Component));

            var css$j = ".OptionList {\r\n  background: white; }\r\n";
            styleInject(css$j);

            var OptionList = /** @class */ (function (_super) {
                __extends(OptionList, _super);
                function OptionList(props) {
                    var _this = _super.call(this, props) || this;
                    _this.valueChange = _this.valueChange.bind(_this);
                    return _this;
                }
                OptionList.prototype.valueChange = function (field, value) {
                    var newValue = __assign({}, this.props.value);
                    newValue[field.name] = value;
                    this.props.valueChange(newValue);
                };
                OptionList.prototype.render = function () {
                    var _this = this;
                    if (!this.props.fields || !this.props.fields.length) {
                        return null;
                        // return <span>No options / fields defined</span>;
                    }
                    return (createElement("div", { className: "OptionList" }, this.props.fields.map(function (field) {
                        var value = _this.props.value && _this.props.value[field.name];
                        return createElement(OptionItem, { key: field.name, definition: field, value: value, valueChange: _this.valueChange });
                    })));
                };
                return OptionList;
            }(Component));

            var css$k = ".OptionCard > .OptionList {\r\n  position: relative;\r\n  overflow-x: hidden; }\r\n  .OptionCard > .OptionList :last-child {\r\n    border-bottom: none; }\r\n\r\n.OptionCard .debug {\r\n  display: none; }\r\n";
            styleInject(css$k);

            var OptionCard = /** @class */ (function (_super) {
                __extends(OptionCard, _super);
                function OptionCard(props) {
                    var _this = _super.call(this, props) || this;
                    var newOptions = _this.setDefaultValues(props.options || {});
                    _this.state = {
                        newOptions: newOptions,
                        formContext: new OptionsCardContextData()
                    };
                    _this.cancel = _this.cancel.bind(_this);
                    _this.save = _this.save.bind(_this);
                    _this.reset = _this.reset.bind(_this);
                    _this.optionsChange = _this.optionsChange.bind(_this);
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
                OptionCard.prototype.renderTitle = function () {
                    return (createElement(UiCardTitle, null,
                        createElement(FontAwesomeIcon, { icon: this.props.icon }),
                        " ",
                        this.props.title));
                };
                OptionCard.prototype.renderContent = function () {
                    return (createElement(OptionCardContext.Provider, { value: this.state.formContext },
                        createElement(OptionList, { fields: this.props.fields, value: this.state.newOptions, valueChange: this.optionsChange })));
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
                        createElement(UiCardContent, { className: "debug", style: { whiteSpace: 'pre' } }, JSON.stringify(this.state.newOptions, undefined, 2)),
                        this.renderFooter()));
                };
                return OptionCard;
            }(Component));

            var css$l = "";
            styleInject(css$l);

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
                        createElement(UiButton, { onClick: this.onEdit },
                            createElement(FontAwesomeIcon, { icon: faEdit }),
                            " Edit"),
                        createElement(UiButton, { onClick: this.onDelete },
                            createElement(FontAwesomeIcon, { icon: faTrashAlt }),
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
                    description: 'Style',
                    displayName: 'Style',
                    name: 'style',
                    valueType: 'style'
                }];

            var css$m = "";
            styleInject(css$m);

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
                    _this.hidePageDetailsDialog = _this.hidePageDetailsDialog.bind(_this);
                    _this.showPageDetailsDialog = _this.showPageDetailsDialog.bind(_this);
                    _this.confirmPageDeletion = _this.confirmPageDeletion.bind(_this);
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
                PageManagerPage.prototype.confirmPageDeletion = function (page) {
                    if (window.confirm("Delete?")) {
                        this.deletePage(page);
                    }
                };
                PageManagerPage.prototype.renderPageCards = function () {
                    var _this = this;
                    if (this.state.loading) {
                        return createElement(UiFlowLayout, null,
                            createElement(UiLoadingCard, null));
                    }
                    return (createElement(UiFlowLayout, null, this.state.pages.map(function (item, index) {
                        return createElement(PageCard, { key: index, page: item, onEdit: _this.showPageDetailsDialog, onDelete: _this.confirmPageDeletion });
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
                        createElement(OptionCard, { icon: faFile, title: title, fields: pageOptionsFields, onSave: this.savePage, onCancel: this.hidePageDetailsDialog, options: page || {} })));
                };
                PageManagerPage.prototype.render = function () {
                    return (createElement("section", { className: "PageManagerPage" },
                        this.renderPageAddCard(),
                        this.renderPageCards(),
                        this.renderPageDetailsDialog()));
                };
                return PageManagerPage;
            }(Component));

            var css$n = "a.RoundButton {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  color: white;\r\n  border: 3px solid white;\r\n  border-radius: 18px;\r\n  padding: 8px;\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  min-width: 80px;\r\n  text-align: center; }\r\n  a.RoundButton:hover {\r\n    background: rgba(255, 255, 255, 0.178); }\r\n  a.RoundButton + a.RoundButton {\r\n    transform: translateX(-100%);\r\n    margin-right: 10px; }\r\n  a.RoundButton svg {\r\n    margin-right: 6px; }\r\n";
            styleInject(css$n);

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

            var css$o = "";
            styleInject(css$o);

            var ServiceCard = /** @class */ (function (_super) {
                __extends(ServiceCard, _super);
                function ServiceCard(props) {
                    var _this = _super.call(this, props) || this;
                    _this.showOptions = _this.showOptions.bind(_this);
                    _this.showLog = _this.showLog.bind(_this);
                    return _this;
                }
                ServiceCard.prototype.showOptions = function () {
                    return this.props.onShowOptions(this.props.service);
                };
                ServiceCard.prototype.showLog = function () {
                    return this.props.onShowLog(this.props.service);
                };
                ServiceCard.prototype.renderTitle = function () {
                    return (createElement(UiCardTitle, null,
                        createElement(FontAwesomeIcon, { icon: faCogs }),
                        " ",
                        this.props.service.name));
                };
                ServiceCard.prototype.renderDescription = function () {
                    return (createElement(UiCardContent, { className: "description" }, this.props.service.description || 'no description'));
                };
                ServiceCard.prototype.renderFooter = function () {
                    return (createElement(UiCardButtonRow, { divider: "half" },
                        createElement(UiButton, { onClick: this.showLog },
                            createElement(FontAwesomeIcon, { icon: faFile }),
                            " Log"),
                        createElement(UiButton, { onClick: this.showOptions },
                            createElement(FontAwesomeIcon, { icon: faCog }),
                            " Options")));
                };
                ServiceCard.prototype.render = function () {
                    return (createElement(UiCard, { className: "ServiceCard" },
                        this.renderTitle(),
                        this.renderDescription(),
                        this.renderFooter()));
                };
                return ServiceCard;
            }(Component));

            var css$p = ".ServiceGroup .group-header {\r\n  margin-top: 10px;\r\n  padding-left: 20px !important;\r\n  padding-right: 36px !important;\r\n  font-size: 16px;\r\n  line-height: 20px; }\r\n  .ServiceGroup .group-header > :last-child {\r\n    position: absolute;\r\n    right: 20px; }\r\n";
            styleInject(css$p);

            var ServiceGroup = /** @class */ (function (_super) {
                __extends(ServiceGroup, _super);
                function ServiceGroup(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        groupOpen: false
                    };
                    _this.toggleGroup = _this.toggleGroup.bind(_this);
                    return _this;
                }
                ServiceGroup.prototype.toggleGroup = function () {
                    this.setState(function (state) { return ({ groupOpen: !state.groupOpen }); });
                };
                ServiceGroup.prototype.render = function () {
                    var _this = this;
                    return (createElement("section", { className: "ServiceGroup" },
                        createElement(UiButton, { className: "group-header", onClick: this.toggleGroup },
                            createElement(FontAwesomeIcon, { icon: faCube }),
                            " ",
                            this.props.moduleName,
                            " (",
                            this.props.services.length,
                            ")",
                            createElement(FontAwesomeIcon, { icon: this.state.groupOpen ? faArrowDown : faArrowRight })),
                        this.state.groupOpen && (createElement(UiFlowLayout, null, this.props.services.map(function (item) {
                            return createElement(ServiceCard, { key: item.name, service: item, onShowLog: _this.props.onShowServiceLog, onShowOptions: _this.props.onShowServiceOptions });
                        })))));
                };
                return ServiceGroup;
            }(Component));

            var css$q = ".ServiceManagerPage {\r\n  min-height: 100px; }\r\n";
            styleInject(css$q);

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
                    return groups.map(function (moduleName) {
                        var services = _this.state.services.filter(function (x) { return x.moduleName === moduleName; }); // TODO: .sort((a, b) => a.displayName > b.displayName)
                        return (createElement(ServiceGroup, { key: moduleName, moduleName: moduleName, services: services, onShowServiceLog: _this.showLog, onShowServiceOptions: _this.showOptions }));
                    });
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

            var systemSettingsFields = [{
                    description: 'Language',
                    displayName: 'Language',
                    name: 'lang',
                    valueType: 'string',
                    values: [
                        { value: 'de-DE', text: 'German' },
                        { value: 'en-GB', text: 'English' },
                        { value: 'fr-FR', text: 'French' },
                    ]
                }, {
                    description: 'Location',
                    displayName: 'Location',
                    name: 'location',
                    valueType: 'string'
                }, {
                    description: 'Timezone',
                    displayName: 'Timezone',
                    name: 'timezone',
                    valueType: 'string',
                    values: [
                        { value: 'Europe/Berlin', text: 'Europe/Berlin' },
                        { value: 'Europe/London', text: 'Europe/London' },
                        { value: 'Asia/Tokyo', text: 'Asia/Tokyo' },
                        { value: 'America/New_York', text: 'America/New York' },
                    ]
                }, {
                    description: 'Path of page to show on startup',
                    displayName: 'Startup Path',
                    name: 'startupPath',
                    valueType: 'string'
                }];

            var css$r = "";
            styleInject(css$r);

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

            var css$s = "section.SystemPage .danger {\r\n  border: 1px solid red; }\r\n  section.SystemPage .danger .UiCardTitle {\r\n    color: red; }\r\n\r\nsection.SystemPage .information {\r\n  height: 156px; }\r\n  section.SystemPage .information section.Loading {\r\n    margin-top: 20px; }\r\n  section.SystemPage .information ul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0; }\r\n    section.SystemPage .information ul span:first-child {\r\n      width: 100px;\r\n      display: inline-block; }\r\n";
            styleInject(css$s);

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
                SystemPage.prototype.renderInformationCard = function () {
                    var content;
                    if (!this.state.info) {
                        content = createElement(Loading, null);
                    }
                    else {
                        var free = Math.round(this.state.info.memory.free / 1024 / 1024);
                        var total = Math.round(this.state.info.memory.total / 1024 / 1024);
                        content = (createElement("ul", null,
                            createElement("li", null,
                                createElement("span", null, "Version"),
                                createElement("span", null, this.state.info.version)),
                            createElement("li", null,
                                createElement("span", null, "CPU"),
                                createElement("span", null,
                                    this.state.info.cpu.count,
                                    " x ",
                                    this.state.info.cpu.speed,
                                    " MHz")),
                            createElement("li", null,
                                createElement("span", null, "Memory"),
                                createElement("span", null,
                                    free,
                                    " MB / ",
                                    total,
                                    " MB")),
                            createElement("li", null,
                                createElement("span", null, "IP"),
                                createElement("span", null, this.state.info.ip)),
                            createElement("li", null,
                                createElement("span", null, "Hostname"),
                                createElement("span", null, this.state.info.hostname))));
                    }
                    return (createElement(UiCard, { className: "information" },
                        createElement(UiCardTitle, null, "Information"),
                        createElement(UiCardContent, null, content)));
                };
                SystemPage.prototype.renderApplicationCard = function () {
                    return (createElement(UiCard, null,
                        createElement(UiCardTitle, null, "Application"),
                        createElement(UiCardButtonRow, { divider: "half" },
                            createElement(UiButton, { onClick: this.exitApplication },
                                createElement(FontAwesomeIcon, { icon: faSignOutAlt }),
                                " Exit"),
                            createElement(UiButton, { onClick: this.restartApplication },
                                createElement(FontAwesomeIcon, { icon: faRedo }),
                                " Restart"))));
                };
                SystemPage.prototype.renderSystemCard = function () {
                    return (createElement(UiCard, null,
                        createElement(UiCardTitle, null, "System"),
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
                            createElement(UiButton, { onClick: this.resetApplication },
                                createElement(FontAwesomeIcon, { icon: faExclamationTriangle }),
                                " Reset Application"))));
                };
                SystemPage.prototype.render = function () {
                    return (createElement("section", { className: "SystemPage" },
                        createElement(UiFlowLayout, null,
                            this.renderInformationCard(),
                            this.renderApplicationCard(),
                            this.renderSystemCard(),
                            this.renderDangerCard())));
                };
                return SystemPage;
            }(Component));

            var css$t = "section.Admin {\r\n  height: 100%;\r\n  overflow: auto;\r\n  background: #fdfdfd; }\r\n  section.Admin > header {\r\n    background-color: #456;\r\n    color: white;\r\n    position: relative;\r\n    z-index: 2; }\r\n    section.Admin > header .title {\r\n      display: inline-block;\r\n      font-size: 1.5em;\r\n      margin: 25px;\r\n      text-align: center; }\r\n  section.Admin > .content {\r\n    position: relative;\r\n    font-size: 14px;\r\n    line-height: 1.5; }\r\n  section.Admin section.Navigation {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 2;\r\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); }\r\n  section.Admin a,\r\n  section.Admin label,\r\n  section.Admin .clickable {\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n    user-select: none;\r\n    white-space: nowrap; }\r\n    section.Admin a svg,\r\n    section.Admin label svg,\r\n    section.Admin .clickable svg {\r\n      margin-right: 3px; }\r\n  section.Admin label {\r\n    cursor: unset; }\r\n  section.Admin .clickable {\r\n    padding-left: 8px;\r\n    padding-right: 8px; }\r\n    section.Admin .clickable.disabled {\r\n      cursor: default;\r\n      background: #eee;\r\n      color: #bbb; }\r\n    section.Admin .clickable:not(.disabled) {\r\n      cursor: pointer; }\r\n      section.Admin .clickable:not(.disabled):active {\r\n        background: #ddd; }\r\n  section.Admin select,\r\n  section.Admin textarea,\r\n  section.Admin input {\r\n    font-size: 16px;\r\n    background: white; }\r\n  section.Admin svg {\r\n    backface-visibility: hidden; }\r\n";
            styleInject(css$t);

            var Admin = /** @class */ (function (_super) {
                __extends(Admin, _super);
                function Admin() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Admin.prototype.render = function () {
                    return (createElement(AdminPageContext.Provider, { value: this.context },
                        createElement("section", { className: "Admin" },
                            createElement("header", null,
                                createElement(RoundButton, { to: "/" },
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
