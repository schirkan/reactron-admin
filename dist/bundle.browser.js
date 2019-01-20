System.register(['@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome', 'react', 'react-router-dom', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-regular-svg-icons', 'moment', 'moment-timezone'], function (exports, module) {
    'use strict';
    var faSpinner, faPlus, faTimes, faCheck, faQuestion, faStarOfLife, faCube, faCog, faDownload, faTrashAlt, faCubes, faSyncAlt, faList, faArrowDown, faArrowRight, faUndo, faSave, faCogs, faSignOutAlt, faRedo, faPowerOff, faExclamationTriangle, faHome, FontAwesomeIcon, createContext, Component, createElement, Fragment, NavLink, Link, Switch, Route, Redirect, faGithub, faCss3, faTrashAlt$1, faArrowAltCircleUp, faArrowAltCircleDown, faEyeSlash, faEye, faFile, faArrowAltCircleRight, faEdit, moment, momentTimezone;
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
            Component = module.Component;
            createElement = module.createElement;
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

            const AdminPageContext = createContext({});

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

            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
                    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }

            class ApiRoute {
                constructor(path, method) {
                    this.path = path;
                    this.method = method;
                }
            }
            const routes = {
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
                getLogEntries: new ApiRoute('/log/:source', 'get'),
            };

            class ApiClient {
                constructor() {
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
                    this.getLogEntries = apiCall(routes.getLogEntries);
                }
                clearCache() {
                    Object.keys(this).forEach(key => {
                        if (this[key] && this[key].clearCache) {
                            this[key].clearCache();
                        }
                    });
                }
            }
            const apiCall = (route, cacheResponse = false) => {
                let cache;
                const method = route.method.toLocaleLowerCase();
                const call = (params, data) => {
                    if (cacheResponse && cache) {
                        return Promise.resolve(cache);
                    }
                    let path = route.path;
                    // replace params in path
                    if (params) {
                        Object.keys(params).forEach(key => {
                            path = path.replace(':' + key, params[key]);
                        });
                    }
                    return fetch('/api/modules/reactron' + path, {
                        method,
                        body: data && JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                        }
                    })
                        .then((response) => __awaiter(undefined, void 0, void 0, function* () {
                        const text = yield response.text();
                        if (response.status.toString().startsWith('2')) {
                            if (!text) {
                                return undefined;
                            }
                            return JSON.parse(text);
                        }
                        console.log(text);
                        throw Error(text);
                    }))
                        .then(response => {
                        if (cacheResponse) {
                            cache = response;
                        }
                        return response;
                    });
                };
                call.clearCache = () => {
                    cache = undefined;
                };
                return call;
            };
            const apiClient = new ApiClient();

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

            class Loading extends Component {
                render() {
                    return (createElement("section", { className: classnames('Loading', { 'center': this.props.center }) },
                        createElement(FontAwesomeIcon, { icon: faSpinner, size: this.props.iconSize, spin: true }),
                        this.props.text && (createElement("div", { className: "text" }, this.props.text))));
                }
            }
            Loading.defaultProps = {
                iconSize: "4x"
            };

            var css$1 = ".UiFlowLayout {\n  padding: 10px;\n  -webkit-column-count: 4;\n          column-count: 4;\n  -webkit-column-gap: 0;\n          column-gap: 0; }\n  .UiFlowLayout > * {\n    width: calc(100% - 20px);\n    padding: 10px;\n    -webkit-column-break-inside: avoid;\n            break-inside: avoid; }\n  .UiFlowLayout + .UiFlowLayout {\n    padding-top: 0px;\n    margin-top: -10px; }\n\n@media screen and (max-width: 1500px) {\n  .UiFlowLayout {\n    -webkit-column-count: 3;\n            column-count: 3; } }\n\n@media screen and (max-width: 1100px) {\n  .UiFlowLayout {\n    -webkit-column-count: 2;\n            column-count: 2; } }\n\n@media screen and (max-width: 700px) {\n  .UiFlowLayout {\n    -webkit-column-count: 1;\n            column-count: 1; } }\n";
            styleInject(css$1);

            class UiFlowLayout extends Component {
                renderChildren() {
                    if (Array.isArray(this.props.children)) {
                        return this.props.children.map((child, index) => createElement("div", { key: index }, child));
                    }
                    else {
                        return createElement("div", null, this.props.children);
                    }
                }
                render() {
                    return (createElement("section", { className: classnames('UiFlowLayout', this.props.className), style: this.props.style }, this.renderChildren()));
                }
            }

            var css$2 = ".UiCard {\n  overflow: auto;\n  width: 100%;\n  border: 1px solid #ddd;\n  border-radius: 2px;\n  background: white;\n  color: #222;\n  box-sizing: border-box;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; }\n  .UiCard a {\n    color: #222; }\n";
            styleInject(css$2);

            class UiCard extends Component {
                render() {
                    return (createElement("section", { className: classnames('UiCard', this.props.className), style: this.props.style }, this.props.children));
                }
            }

            var css$3 = ".UiCardContent {\n  position: relative;\n  padding: 6px; }\n  .UiCardContent + * {\n    border-top: 1px solid #ddd; }\n";
            styleInject(css$3);

            class UiCardContent extends Component {
                render() {
                    return (createElement("div", { className: classnames('UiCardContent', this.props.className), style: this.props.style }, this.props.children));
                }
            }

            var css$4 = ".UiCardTitle {\n  position: relative;\n  padding: 6px;\n  padding-left: 10px;\n  font-size: 16px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  background: white;\n  border-bottom: 1px solid #ddd; }\n  .UiCardTitle > .svg-inline--fa {\n    margin-right: 4px; }\n";
            styleInject(css$4);

            class UiCardTitle extends Component {
                render() {
                    return (createElement("div", { className: classnames('UiCardTitle', this.props.className), style: this.props.style }, this.props.children));
                }
            }

            var css$5 = "";
            styleInject(css$5);

            class UiLoadingCard extends Component {
                render() {
                    return (createElement(UiCard, { className: "UiLoadingCard" },
                        createElement(UiCardTitle, null, "Loading..."),
                        createElement(UiCardContent, null,
                            createElement(Loading, null))));
                }
            }

            class OverlayManager {
                constructor() {
                    this.items = [];
                }
                add(instance) {
                    if (this.items.length > 0) {
                        const lastItem = this.items[this.items.length - 1];
                        lastItem.hide();
                    }
                    this.items.push(instance);
                }
                remove(instance) {
                    const index = this.items.indexOf(instance);
                    if (index >= 0) {
                        this.items.splice(index);
                        if (this.items.length > 0) {
                            const lastItem = this.items[this.items.length - 1];
                            lastItem.show();
                        }
                    }
                }
            }
            const overlayManager = new OverlayManager();

            var css$6 = ".UiOverlay {\n  position: fixed;\n  z-index: 1;\n  background: rgba(99, 99, 99, 0.47);\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n  padding: 0; }\n  .UiOverlay > .Loading {\n    color: white; }\n  .UiOverlay > .UiCard {\n    position: absolute;\n    margin: 20px;\n    top: 118px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: auto;\n    max-height: -webkit-fit-content;\n    max-height: -moz-fit-content;\n    max-height: fit-content; }\n    .UiOverlay > .UiCard .UiCardTitle {\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n      z-index: 1; }\n    .UiOverlay > .UiCard .UiCardButtonRow {\n      position: -webkit-sticky;\n      position: sticky;\n      bottom: 0; }\n\n@media screen and (min-width: 601px) {\n  .UiOverlay > .UiCard {\n    position: absolute;\n    margin: 20px 0;\n    top: 118px;\n    bottom: 0;\n    left: 50%;\n    right: auto;\n    width: 560px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); } }\n";
            styleInject(css$6);

            class UiOverlay extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        visible: true
                    };
                }
                componentDidMount() {
                    overlayManager.add(this);
                }
                componentWillUnmount() {
                    overlayManager.remove(this);
                }
                show() {
                    this.setState({ visible: true });
                }
                hide() {
                    this.setState({ visible: false });
                }
                render() {
                    return (createElement("div", { hidden: !this.state.visible, className: classnames('UiOverlay', this.props.className), style: this.props.style }, this.props.children));
                }
            }

            class UiTab extends Component {
                render() {
                    return (createElement("div", { className: classnames('UiTab', this.props.className), style: this.props.style }, this.props.children));
                }
            }

            var css$7 = ".UiButton {\n  padding: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n";
            styleInject(css$7);

            class UiButton extends Component {
                constructor(props) {
                    super(props);
                    this.disposed = false;
                    this.state = { running: false };
                    this.onClick = this.onClick.bind(this);
                }
                onClick(e) {
                    if (!this.props.onClick || this.props.disabled || this.state.running) {
                        return;
                    }
                    e.preventDefault();
                    e.bubbles = false;
                    e.stopPropagation();
                    this.setState({ running: true }, () => {
                        Promise.resolve(this.props.onClick && this.props.onClick(e))
                            .catch()
                            .then(() => {
                            if (!this.disposed) {
                                this.setState({ running: false });
                            }
                        });
                    });
                }
                componentWillUnmount() {
                    this.disposed = true;
                }
                render() {
                    const className = classnames('UiButton', 'clickable', this.props.className, { 'disabled': this.props.disabled || this.state.running });
                    return (createElement("div", { className: className, onClick: this.onClick, style: this.props.style }, this.props.children));
                }
            }

            var css$8 = ".UiTabs header {\n  margin-left: 20px;\n  margin-right: 20px; }\n  .UiTabs header .UiTabHeader {\n    display: inline-block;\n    margin: 8px;\n    margin-bottom: 0;\n    border-bottom: 1px solid #ddd;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n    .UiTabs header .UiTabHeader.selected {\n      border-bottom-color: #888; }\n";
            styleInject(css$8);

            class UiTabs extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        selectedTabIndex: 0
                    };
                }
                renderTabHeader(tab, index) {
                    if (!tab || !tab.props || !tab.props.title) {
                        return null;
                    }
                    const toggleSelectedTab = () => this.setState({ selectedTabIndex: index });
                    const className = classnames('UiTabHeader', { 'selected': this.state.selectedTabIndex === index });
                    return (createElement(UiButton, { key: index, className: className, onClick: toggleSelectedTab }, tab.props.title));
                }
                renderTabHeaders() {
                    if (!this.props.children) {
                        return null;
                    }
                    const tabs = this.props.children;
                    return (createElement("header", null, tabs.map((tab, index) => this.renderTabHeader(tab, index))));
                }
                renderTabContents() {
                    if (!this.props.children) {
                        return null;
                    }
                    return this.props.children[this.state.selectedTabIndex];
                }
                render() {
                    return (createElement("section", { className: classnames('UiTabs', this.props.className), style: this.props.style },
                        this.renderTabHeaders(),
                        this.renderTabContents()));
                }
            }

            var css$9 = "section.AddModuleCard {\n  display: -webkit-inline-box;\n  display: inline-flex; }\n  section.AddModuleCard input {\n    padding-left: 6px;\n    border: none;\n    width: 100%; }\n  section.AddModuleCard .addButton {\n    border-left: 1px solid #ddd;\n    overflow: visible; }\n";
            styleInject(css$9);

            class AddModuleCard extends Component {
                render() {
                    let input;
                    const onAdd = () => this.props.onAdd(input && input.value);
                    return (createElement(UiCard, { className: "AddModuleCard" },
                        createElement("input", { ref: el => input = el, placeholder: "GitHub Repository URL" }),
                        createElement(UiButton, { className: "addButton", onClick: onAdd },
                            createElement(FontAwesomeIcon, { icon: faPlus }),
                            " Add")));
                }
            }

            var css$a = "section.CommandResult .UiCardTitle {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\nsection.CommandResult .UiButton {\n  position: absolute;\n  top: 0;\n  right: 0; }\n\nsection.CommandResult .UiCardContent .result {\n  word-wrap: break-word;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #ddd; }\n  section.CommandResult .UiCardContent .result:last-of-type {\n    padding-bottom: 0;\n    border-bottom: none; }\n";
            styleInject(css$a);

            class CommandResult extends Component {
                constructor(props) {
                    super(props);
                }
                renderCommandResult(result, key) {
                    const icon = result.success === false ?
                        createElement(FontAwesomeIcon, { icon: faTimes }) :
                        result.success === true ?
                            createElement(FontAwesomeIcon, { icon: faCheck }) :
                            createElement(FontAwesomeIcon, { icon: faQuestion });
                    let log;
                    if (result.log && result.log.length) {
                        log = (createElement("ul", { className: "log" }, result.log.map((item, i) => createElement("li", { key: i }, item))));
                    }
                    let title = result.command || '';
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
                        result.children && result.children.map((child, index) => this.renderCommandResult(child, key + '.' + index))));
                }
                render() {
                    return (createElement(UiCard, { className: "CommandResult" },
                        createElement(UiCardTitle, null,
                            "Result",
                            createElement(UiButton, { onClick: this.props.onClose },
                                createElement(FontAwesomeIcon, { icon: faTimes }))),
                        createElement(UiCardContent, null, this.props.results.map((item, index) => this.renderCommandResult(item, index.toString())))));
                }
            }

            var css$b = ".UiCardButtonRow {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));\n  width: 100%;\n  background: #fafafa;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0; }\n  .UiCardButtonRow + * {\n    border-top: 1px solid #ddd; }\n  .UiCardButtonRow > * {\n    text-align: center;\n    padding: 6px;\n    position: relative; }\n  .UiCardButtonRow.UiCardButtonRowDividerFull > *:not(:first-child) {\n    border-left: 1px solid #ddd; }\n  .UiCardButtonRow.UiCardButtonRowDividerHalf > *:not(:first-child)::before {\n    border-left: 1px solid #ddd;\n    content: \" \";\n    position: absolute;\n    top: 6px;\n    bottom: 6px;\n    left: 0; }\n";
            styleInject(css$b);

            class UiCardButtonRow extends Component {
                render() {
                    const className = classnames('UiCardButtonRow', this.props.className, {
                        'UiCardButtonRowDividerFull': this.props.divider === 'full',
                        'UiCardButtonRowDividerHalf': this.props.divider === 'half',
                    });
                    return (createElement("div", { className: className, style: this.props.style }, this.props.children));
                }
            }

            var css$c = ".ModuleCard {\n  overflow: hidden; }\n  .ModuleCard .UiCardTitle .hasUpdate {\n    margin-left: 6px;\n    font-size: 10px;\n    color: #59aaff;\n    vertical-align: text-top; }\n  .ModuleCard .UiCardButtonRow {\n    -webkit-transition: 0.5s ease-in-out;\n    transition: 0.5s ease-in-out;\n    margin: 0; }\n    .ModuleCard .UiCardButtonRow.default.hide {\n      margin-left: -100%; }\n    .ModuleCard .UiCardButtonRow.actions {\n      margin-top: -34px; }\n      .ModuleCard .UiCardButtonRow.actions.hide {\n        margin-left: 100%; }\n    .ModuleCard .UiCardButtonRow a {\n      text-decoration: none; }\n";
            styleInject(css$c);

            class ModuleCard extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        showActions: false
                    };
                    this.showActions = this.showActions.bind(this);
                    this.hideActions = this.hideActions.bind(this);
                    this.onUpdate = this.onUpdate.bind(this);
                    this.onRebuild = this.onRebuild.bind(this);
                    this.onRemove = this.onRemove.bind(this);
                }
                showActions() {
                    this.setState({ showActions: true });
                }
                hideActions() {
                    this.setState({ showActions: false });
                }
                onUpdate() {
                    this.hideActions();
                    this.props.onUpdate(this.props.module);
                }
                onRebuild() {
                    this.hideActions();
                    this.props.onRebuild(this.props.module);
                }
                onRemove() {
                    if (window.confirm('Remove?')) {
                        this.hideActions();
                        this.props.onRemove(this.props.module);
                    }
                }
                renderTitle() {
                    let updateIcon;
                    if (this.props.module.hasUpdate) {
                        updateIcon = createElement("span", { className: "hasUpdate" },
                            createElement(FontAwesomeIcon, { icon: faStarOfLife }));
                    }
                    return (createElement(UiCardTitle, null,
                        createElement(FontAwesomeIcon, { icon: faCube }),
                        " ",
                        this.props.module.name,
                        updateIcon));
                }
                renderDescription() {
                    return (createElement(UiCardContent, { className: "description" }, this.props.module.description || 'no description'));
                }
                renderAuthor() {
                    let authorName = 'unknown';
                    let authorMail;
                    if (typeof this.props.module.author === 'string') {
                        authorName = this.props.module.author;
                    }
                    else if (typeof this.props.module.author === 'object') {
                        authorName = this.props.module.author.name || this.props.module.author.email;
                        authorMail = this.props.module.author.email;
                    }
                    const author = (authorMail) ? (createElement("a", { href: 'mailto://' + authorMail }, authorName)) : authorName;
                    return (createElement(UiCardContent, { className: "author" },
                        "by ",
                        author));
                }
                renderFooter() {
                    let repoLink = createElement("div", null);
                    if (this.props.module.repository) {
                        repoLink = (createElement("a", { className: "clickable", href: this.props.module.repository, target: "_blank" },
                            createElement(FontAwesomeIcon, { icon: faGithub }),
                            " GitHub"));
                    }
                    const className = classnames('footer', 'default', { 'hide': this.state.showActions });
                    return (createElement(UiCardButtonRow, { className: className, divider: "half" },
                        createElement("div", { className: "version" }, this.props.module.version),
                        repoLink,
                        createElement(UiButton, { onClick: this.showActions },
                            createElement(FontAwesomeIcon, { icon: faCog }),
                            " Modify")));
                }
                renderActions() {
                    const className = classnames('footer', 'actions', { 'hide': !this.state.showActions });
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
                }
                render() {
                    return (createElement(UiCard, { className: "ModuleCard" },
                        this.renderTitle(),
                        this.renderDescription(),
                        this.renderAuthor(),
                        this.renderFooter(),
                        this.renderActions()));
                }
            }

            var css$d = ".ModuleCatalog .ModuleCatalogItem {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  margin-left: 8px; }\n  .ModuleCatalog .ModuleCatalogItem a {\n    padding: 6px;\n    text-decoration: none; }\n  .ModuleCatalog .ModuleCatalogItem ~ .ModuleCatalogItem {\n    border-top: 1px solid #ddd; }\n";
            styleInject(css$d);

            // TODO load from url
            const catalog = [{
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
            class ModuleCatalog extends Component {
                constructor(props) {
                    super(props);
                }
                renderCatalogItems() {
                    const items = catalog.map(item => {
                        const installed = this.props.modules.some(x => x.name === item.name);
                        const install = () => this.props.onAdd(item.url);
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
                }
                render() {
                    return (createElement(UiCard, { className: "ModuleCatalog" },
                        createElement(UiCardTitle, null,
                            createElement(FontAwesomeIcon, { icon: faCubes }),
                            " Module Catalog"),
                        this.renderCatalogItems()));
                }
            }

            var css$e = "section.UpdateModulesCard .UiCardButtonRow {\n  background: transparent; }\n";
            styleInject(css$e);

            class UpdateModulesCard extends Component {
                render() {
                    const modulesWithUpdates = this.props.modules.filter(x => x.hasUpdate);
                    const isChecked = this.props.modules.some(x => x.hasUpdate !== undefined);
                    const updatesTitle = isChecked ? modulesWithUpdates.length : '-';
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
                }
            }

            var css$f = "";
            styleInject(css$f);

            class ModuleManagerPage extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        loading: false,
                        checkingUpdates: false,
                        showResult: false,
                        results: [],
                        modules: []
                    };
                    this.loadModules = this.loadModules.bind(this);
                    this.checkUpdates = this.checkUpdates.bind(this);
                    this.updateAll = this.updateAll.bind(this);
                    this.updateModule = this.updateModule.bind(this);
                    this.removeModule = this.removeModule.bind(this);
                    this.rebuildModule = this.rebuildModule.bind(this);
                    this.addModule = this.addModule.bind(this);
                    this.hideResult = this.hideResult.bind(this);
                }
                componentDidMount() {
                    this.loadModules();
                }
                loadModules() {
                    return apiClient.getModules()
                        .then(modules => this.setState({ modules }))
                        .catch(); // TODO
                }
                checkUpdates() {
                    return __awaiter(this, void 0, void 0, function* () {
                        this.setState({ checkingUpdates: true });
                        yield apiClient.checkUpdates();
                        this.setState({ checkingUpdates: false });
                        apiClient.getModules.clearCache();
                        yield this.loadModules();
                    });
                }
                updateAll() {
                    return __awaiter(this, void 0, void 0, function* () {
                        const modulesWithUpdates = this.state.modules.filter(x => x.hasUpdate);
                        if (!modulesWithUpdates.length) {
                            return;
                        }
                        const results = [];
                        this.setState({ loading: true });
                        try {
                            for (const module of modulesWithUpdates) {
                                const result = yield apiClient.updateModule({ moduleName: module.name });
                                results.push(...result);
                            }
                            this.showResult(results);
                        }
                        catch (error) {
                            this.showError(error);
                        }
                        apiClient.getModules.clearCache();
                        yield this.loadModules();
                    });
                }
                updateModule(module) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (!module.hasUpdate) {
                            return;
                        }
                        this.setState({ loading: true });
                        try {
                            const result = yield apiClient.updateModule({ moduleName: module.name });
                            this.showResult(result);
                        }
                        catch (error) {
                            this.showError(error);
                        }
                        apiClient.getModules.clearCache();
                        yield this.loadModules();
                    });
                }
                rebuildModule(module) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (!module.canBuild) {
                            return;
                        }
                        this.setState({ loading: true });
                        try {
                            const result = yield apiClient.rebuildModule({ moduleName: module.name });
                            this.showResult(result);
                        }
                        catch (error) {
                            this.showError(error);
                        }
                        apiClient.getModules.clearCache();
                        yield this.loadModules();
                    });
                }
                removeModule(module) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (!module.canRemove) {
                            return;
                        }
                        this.setState({ loading: true });
                        try {
                            const result = yield apiClient.deleteModule({ moduleName: module.name });
                            this.showResult(result);
                        }
                        catch (error) {
                            this.showError(error);
                        }
                        apiClient.getModules.clearCache();
                        yield this.loadModules();
                    });
                }
                addModule(repository) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (!repository || !repository.trim()) {
                            return;
                        }
                        this.setState({ loading: true });
                        try {
                            const result = yield apiClient.addModule(undefined, { repository });
                            this.showResult(result);
                        }
                        catch (error) {
                            this.showError(error);
                        }
                        apiClient.getModules.clearCache();
                        yield this.loadModules();
                    });
                }
                showError(err) {
                    const message = err && err.message || JSON.stringify(err);
                    const result = { command: 'Error', success: false, log: [message] };
                    this.setState({ loading: false, showResult: true, results: [result] });
                }
                showResult(results) {
                    this.setState({ loading: false, showResult: true, results });
                }
                hideResult() {
                    this.setState({ showResult: false });
                }
                render() {
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
                                createElement(UiFlowLayout, null, this.state.modules.map(item => createElement(ModuleCard, { key: item.name, module: item, onRemove: this.removeModule, onRebuild: this.rebuildModule, onUpdate: this.updateModule })))),
                            createElement(UiTab, { title: "Add New" },
                                createElement(UiFlowLayout, null,
                                    createElement(AddModuleCard, { onAdd: this.addModule })),
                                createElement(UiFlowLayout, null,
                                    createElement(ModuleCatalog, { onAdd: this.addModule, modules: this.state.modules }))))));
                }
            }

            var css$g = "section.Navigation {\n  background: #456;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr)); }\n  section.Navigation a {\n    padding-bottom: 8px;\n    padding-top: 11px;\n    color: #ddd;\n    text-decoration: none;\n    border-bottom: 3px solid transparent;\n    text-align: center;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n    section.Navigation a:hover, section.Navigation a:active, section.Navigation a.active {\n      background: transparent;\n      color: white; }\n    section.Navigation a:nth-child(1).active {\n      background: #4a8599; }\n    section.Navigation a:nth-child(1).active, section.Navigation a:nth-child(1):hover {\n      border-bottom: 3px solid #42e1f7; }\n    section.Navigation a:nth-child(2).active {\n      background: #69006f; }\n    section.Navigation a:nth-child(2).active, section.Navigation a:nth-child(2):hover {\n      border-bottom: 3px solid #f000ff; }\n    section.Navigation a:nth-child(3).active {\n      background: #5f5600; }\n    section.Navigation a:nth-child(3).active, section.Navigation a:nth-child(3):hover {\n      border-bottom: 3px solid #ffe700; }\n    section.Navigation a:nth-child(4).active {\n      background: #2f6108; }\n    section.Navigation a:nth-child(4).active, section.Navigation a:nth-child(4):hover {\n      border-bottom: 3px solid #74ee15; }\n    section.Navigation a:nth-child(5).active {\n      background: #001086; }\n    section.Navigation a:nth-child(5).active, section.Navigation a:nth-child(5):hover {\n      border-bottom: 3px solid #001eff; }\n";
            styleInject(css$g);

            class Navigation extends Component {
                render() {
                    return (createElement("section", { className: "Navigation" },
                        createElement(NavLink, { activeClassName: "active", to: "/admin/ModuleManager", role: "button" }, "Modules"),
                        createElement(NavLink, { activeClassName: "active", to: "/admin/ServiceManager", role: "button" }, "Services"),
                        createElement(NavLink, { activeClassName: "active", to: "/admin/Pages", role: "button" }, "Pages"),
                        createElement(NavLink, { activeClassName: "active", to: "/admin/Settings", role: "button" }, "Settings"),
                        createElement(NavLink, { activeClassName: "active", to: "/admin/System", role: "button" }, "System")));
                }
            }

            const confirm = (callback, text) => {
                return (args) => {
                    if (window.confirm(text)) {
                        return callback(args);
                    }
                };
            };

            const getDefaultFieldValue = (field) => {
                const defaultValue = field.defaultValue;
                if (field.isArray) {
                    if (defaultValue && Array.isArray(defaultValue)) {
                        return defaultValue;
                    }
                    return [];
                }
                switch (field.valueType) {
                    case 'object':
                        let result = defaultValue;
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
            const getDefaultObjectValue = (fields) => {
                const result = {};
                if (fields) {
                    fields.forEach(f => {
                        result[f.name] = getDefaultFieldValue(f);
                    });
                }
                return result;
            };

            class ErrorBoundary extends Component {
                constructor(props) {
                    super(props);
                    this.state = { error: null };
                }
                componentDidCatch(error, info) {
                    console.log(error);
                    console.log(info);
                    this.setState({ error });
                }
                render() {
                    if (this.state.error) {
                        return createElement("h1", null, "Something went wrong.");
                    }
                    return this.props.children;
                }
            }

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

            class ArrayForm extends Component {
                constructor(props) {
                    super(props);
                    this.arrayKeys = [];
                    this.arrayItemAdd = this.arrayItemAdd.bind(this);
                    this.arrayItemRemove = this.arrayItemRemove.bind(this);
                    this.arrayItemMoveUp = this.arrayItemMoveUp.bind(this);
                    this.arrayItemMoveDown = this.arrayItemMoveDown.bind(this);
                }
                arrayItemChange(index, definition, newValue) {
                    let array = this.props.value || [];
                    array = array.slice();
                    array[index] = newValue;
                    this.props.valueChange(this.props.definition, array);
                }
                arrayItemRemove(index) {
                    let array = this.props.value || [];
                    array = array.slice();
                    array.splice(index, 1);
                    this.arrayKeys.splice(index, 1);
                    this.props.valueChange(this.props.definition, array);
                }
                arrayItemMoveUp(index) {
                    const array = this.props.value || [];
                    if (index === 0) {
                        return;
                    }
                    const item = array.splice(index, 1)[0];
                    array.splice(index - 1, 0, item);
                    const keyItem = this.arrayKeys.splice(index, 1)[0];
                    this.arrayKeys.splice(index - 1, 0, keyItem);
                    this.props.valueChange(this.props.definition, array);
                }
                arrayItemMoveDown(index) {
                    const array = this.props.value || [];
                    if (index === array.length - 1) {
                        return;
                    }
                    const item = array.splice(index, 1)[0];
                    array.splice(index + 1, 0, item);
                    const keyItem = this.arrayKeys.splice(index, 1)[0];
                    this.arrayKeys.splice(index + 1, 0, keyItem);
                    this.props.valueChange(this.props.definition, array);
                }
                arrayItemAdd() {
                    const arrayItemDefinition = Object.assign({}, this.props.definition);
                    arrayItemDefinition.isArray = false;
                    const newItem = getDefaultFieldValue(arrayItemDefinition);
                    if (typeof newItem === 'object') {
                        newItem.__new = true;
                    }
                    let array = this.props.value || [];
                    array = array.slice(); // copy
                    array.push(newItem); // add item
                    this.props.valueChange(this.props.definition, array);
                }
                renderArrayItem(value, index) {
                    const arrayItemDefinition = Object.assign({}, this.props.definition);
                    arrayItemDefinition.isArray = false;
                    arrayItemDefinition.displayName = 'Item ' + (index + 1);
                    let key = this.arrayKeys[index];
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
                }
                render() {
                    const array = this.props.value || [];
                    return (createElement(Fragment, null,
                        array.map((value, index) => this.renderArrayItem(value, index)),
                        createElement(UiButton, { className: "add-array-item", onClick: this.arrayItemAdd },
                            createElement(FontAwesomeIcon, { icon: faPlus }),
                            " Add item")));
                }
            }

            class ArrayControlsProvider {
                match(definition) {
                    return !!definition.isArray;
                }
                get() {
                    return {
                        icon: faList,
                        detailsControl: ArrayForm,
                        inputControl: (props) => {
                            const array = props && props.value || [];
                            return '(' + array.length + ' items)';
                        }
                    };
                }
            }

            var css$i = ".BooleanInputControl {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 17px;\n  margin-top: auto;\n  margin-bottom: auto; }\n  .BooleanInputControl input {\n    opacity: 0;\n    width: 0;\n    height: 0; }\n    .BooleanInputControl input:checked + .slider {\n      background-color: #2196F3; }\n    .BooleanInputControl input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3; }\n    .BooleanInputControl input:checked + .slider:before {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%); }\n  .BooleanInputControl .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n    border-radius: 17px; }\n    .BooleanInputControl .slider:before {\n      position: absolute;\n      content: \"\";\n      height: 13px;\n      width: 13px;\n      left: 2px;\n      bottom: 2px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n      border-radius: 50%; }\n";
            styleInject(css$i);

            class BooleanInputControl extends Component {
                constructor(props) {
                    super(props);
                    this.onCheckboxChange = this.onCheckboxChange.bind(this);
                }
                onCheckboxChange(e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.checked);
                }
                render() {
                    if (this.props.value) ;
                    return (createElement("label", { className: "BooleanInputControl" },
                        createElement("input", { type: "checkbox", id: this.props.uniqueId, checked: this.props.value, onChange: this.onCheckboxChange }),
                        createElement("span", { className: "slider" })));
                }
            }

            class BooleanControlsProvider {
                match(definition) {
                    return definition.valueType === 'boolean';
                }
                get() {
                    return {
                        inputControl: BooleanInputControl
                    };
                }
            }

            class NumberInputControl extends Component {
                constructor(props) {
                    super(props);
                    this.onInputChange = this.onInputChange.bind(this);
                }
                onInputChange(e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                }
                render() {
                    const click = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    };
                    return (createElement("input", { style: { width: '100%' }, type: "number", onClick: click, id: this.props.uniqueId, value: this.props.value, onChange: this.onInputChange, step: this.props.definition.stepSize, min: this.props.definition.minValue, max: this.props.definition.maxValue }));
                }
            }

            class RangeInputControl extends Component {
                constructor(props) {
                    super(props);
                    this.onInputChange = this.onInputChange.bind(this);
                }
                onInputChange(e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                }
                render() {
                    return (createElement("input", { style: { width: '100%' }, type: "range", id: this.props.uniqueId, value: this.props.value, onChange: this.onInputChange, step: this.props.definition.stepSize, min: this.props.definition.minValue, max: this.props.definition.maxValue }));
                }
            }

            class NumberControlsProvider {
                match(definition) {
                    return definition.valueType === 'number';
                }
                get(definition) {
                    if (definition.minValue !== undefined && definition.maxValue !== undefined && definition.stepSize !== undefined) {
                        return {
                            inputControl: NumberInputControl,
                            detailsControl: RangeInputControl
                        };
                    }
                    return {
                        inputControl: NumberInputControl
                    };
                }
            }

            class ObjectInputControl extends Component {
                constructor(props) {
                    super(props);
                    this.triggerValueChange = this.triggerValueChange.bind(this);
                }
                triggerValueChange(newValue) {
                    this.props.valueChange(this.props.definition, newValue);
                }
                render() {
                    return createElement(OptionList, { fields: this.props.definition.fields, value: this.props.value, valueChange: this.triggerValueChange });
                }
            }

            class ObjectControlsProvider {
                match(definition) {
                    return definition.valueType === 'object';
                }
                get() {
                    return {
                        detailsControl: ObjectInputControl,
                    };
                }
            }

            class PasswordInputControl extends Component {
                constructor(props) {
                    super(props);
                    this.state = { show: false };
                    this.onInputChange = this.onInputChange.bind(this);
                    this.toggleText = this.toggleText.bind(this);
                }
                onInputChange(e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                }
                toggleText() {
                    this.setState(state => ({ show: !state.show }));
                }
                render() {
                    return (createElement("div", { style: { display: 'flex' } },
                        createElement("input", { style: { width: '100%' }, type: this.state.show ? 'text' : 'password', id: this.props.uniqueId, value: this.props.value, onChange: this.onInputChange }),
                        createElement(UiButton, { onClick: this.toggleText },
                            createElement(FontAwesomeIcon, { icon: this.state.show ? faEyeSlash : faEye }))));
                }
            }

            class PasswordControlsProvider {
                match(definition) {
                    return definition.valueType === 'password';
                }
                get() {
                    return {
                        inputControl: PasswordInputControl
                    };
                }
            }

            var css$j = ".StyleForm .OptionItem + .newPropertyRow {\n  border-top: 1px solid #eee; }\n\n.StyleForm .newPropertyRow {\n  display: -webkit-box;\n  display: flex; }\n  .StyleForm .newPropertyRow select {\n    width: 100%; }\n  .StyleForm .newPropertyRow .UiButton {\n    overflow: initial; }\n";
            styleInject(css$j);

            const styleProperties = ['background', 'backgroundAttachment', 'backgroundColor', 'backgroundImage',
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
            class StyleForm extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        fields: this.getFields(this.props.value)
                    };
                    this.addField = this.addField.bind(this);
                    this.valueChange = this.valueChange.bind(this);
                }
                componentDidUpdate(prevProps) {
                    if (prevProps !== this.props) {
                        this.setState({ fields: this.getFields(this.props.value) });
                    }
                }
                getFields(obj) {
                    const fields = [];
                    if (obj) {
                        Object.keys(obj).forEach(name => {
                            const field = {
                                name,
                                displayName: name,
                                valueType: 'string',
                            };
                            fields.push(field);
                        });
                    }
                    return fields;
                }
                valueChange(field, value) {
                    const newValue = Object.assign({}, this.props.value);
                    newValue[field.name] = value;
                    this.props.valueChange(this.props.definition, newValue);
                }
                removeField(fieldName) {
                    const newValue = Object.assign({}, this.props.value);
                    delete (newValue[fieldName]);
                    this.props.valueChange(this.props.definition, newValue);
                }
                addField() {
                    if (!this.newPropertySelect) {
                        return;
                    }
                    const fieldName = this.newPropertySelect.value;
                    if (!fieldName || this.props.value && this.props.value.hasOwnProperty(fieldName)) {
                        return;
                    }
                    const newValue = Object.assign({}, this.props.value);
                    newValue[fieldName] = '';
                    this.props.valueChange(this.props.definition, newValue);
                }
                render() {
                    return (createElement("div", { className: "StyleForm" },
                        this.state.fields.map(field => {
                            const value = this.props.value && this.props.value[field.name];
                            return (createElement(OptionItem, { key: field.name, definition: field, value: value, valueChange: this.valueChange },
                                createElement(UiButton, { onClick: this.removeField.bind(this, field.name) },
                                    createElement(FontAwesomeIcon, { icon: faTrashAlt$1 }))));
                        }),
                        createElement("div", { className: "newPropertyRow" },
                            createElement("select", { ref: el => this.newPropertySelect = el }, styleProperties.map(property => createElement("option", { key: property, value: property }, property))),
                            createElement(UiButton, { onClick: this.addField },
                                createElement(FontAwesomeIcon, { icon: faPlus }),
                                " Add"))));
                }
            }

            class StyleControlsProvider {
                match(definition) {
                    return definition.valueType === 'style';
                }
                get() {
                    return {
                        icon: faCss3,
                        detailsControl: StyleForm,
                        inputControl: (props) => {
                            const text = JSON.stringify(props && props.value) || '';
                            return text === '{}' ? '' : text;
                        }
                    };
                }
            }

            class TextAreaInputControl extends Component {
                constructor(props) {
                    super(props);
                    this.onTextareaChange = this.onTextareaChange.bind(this);
                }
                onTextareaChange(e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                }
                render() {
                    return createElement("textarea", { id: this.props.uniqueId, value: this.props.value, onChange: this.onTextareaChange, rows: this.props.definition.textRows });
                }
            }

            class TextBoxInputControl extends Component {
                constructor(props) {
                    super(props);
                    this.onInputChange = this.onInputChange.bind(this);
                }
                onInputChange(e) {
                    this.props.valueChange(this.props.definition, e.currentTarget.value);
                }
                render() {
                    return createElement("input", { type: "text", id: this.props.uniqueId, value: this.props.value, onChange: this.onInputChange });
                }
            }

            class TextControlsProvider {
                match(definition) {
                    return definition.valueType === 'string';
                }
                get(definition) {
                    if (definition.textRows !== undefined && definition.textRows > 1) {
                        return {
                            detailsControl: TextAreaInputControl,
                            inputControl: (props) => props && props.value
                        };
                    }
                    return {
                        inputControl: TextBoxInputControl
                    };
                }
            }

            class ValuesInputControl extends Component {
                constructor(props) {
                    super(props);
                    this.onSelectValueChange = (e) => {
                        this.props.valueChange(this.props.definition, e.currentTarget.value);
                    };
                    this.onSelectValueChange = this.onSelectValueChange.bind(this);
                }
                render() {
                    const values = this.props.definition.values || [];
                    const options = values.map((item, index) => createElement("option", { key: index, value: item.value }, item.text));
                    return (createElement("select", { id: this.props.uniqueId, value: this.props.value, onChange: this.onSelectValueChange },
                        createElement("option", null, "Select item..."),
                        options));
                }
            }

            class ValuesControlsProvider {
                match(definition) {
                    return !!(definition.values && definition.values.length);
                }
                get() {
                    return {
                        inputControl: ValuesInputControl
                    };
                }
            }

            class SimpleEvent {
                constructor() {
                    this.subscriptions = [];
                }
                subscribe(callback) {
                    this.subscriptions.push(callback);
                }
                unsubscribe(callback) {
                    const index = this.subscriptions.indexOf(callback);
                    if (index >= 0) {
                        this.subscriptions.splice(index);
                    }
                }
                publish(data) {
                    return __awaiter(this, void 0, void 0, function* () {
                        for (const sub of this.subscriptions) {
                            yield Promise.resolve(sub(data));
                        }
                    });
                }
            }

            class OptionsCardContextData {
                constructor() {
                    this.onSave = new SimpleEvent();
                    // public onValidate = new SimpleEvent();
                    this.removedWebComponents = [];
                    this.changedWebComponents = [];
                    this.createdWebComponents = [];
                    this.saveWebComponents = this.saveWebComponents.bind(this);
                    this.onSave.subscribe(this.saveWebComponents);
                }
                saveWebComponents() {
                    return __awaiter(this, void 0, void 0, function* () {
                        console.log('removedWebComponents', this.removedWebComponents);
                        console.log('createdWebComponents', this.createdWebComponents);
                        console.log('changedWebComponents', this.changedWebComponents);
                        // delete webComponents
                        for (const item of this.removedWebComponents) {
                            yield apiClient.deleteWebComponentOptions(item);
                        }
                        // add webComponents
                        for (const item of this.createdWebComponents) {
                            yield apiClient.setWebComponentOptions(undefined, item);
                        }
                        // change webComponents
                        for (const item of this.changedWebComponents) {
                            yield apiClient.setWebComponentOptions(undefined, item);
                        }
                        // reset context
                        this.removedWebComponents = [];
                        this.changedWebComponents = [];
                        this.createdWebComponents = [];
                        // clear cache
                        apiClient.getWebComponentOptions.clearCache();
                    });
                }
                webComponentRemoved(item) {
                    console.log('webComponentRemoved', item);
                    // check if previously created
                    const createdItemIndex = this.createdWebComponents.findIndex(x => x.id === item.id);
                    if (createdItemIndex >= 0) {
                        // remove from createdWebComponents
                        this.createdWebComponents.splice(createdItemIndex, 1);
                    }
                    else {
                        // add to removedWebComponents
                        this.removedWebComponents.push(item);
                    }
                }
                webComponentChanged(item) {
                    console.log('webComponentChanged', item);
                    // check if previously created
                    const createdItemIndex = this.createdWebComponents.findIndex(x => x.id === item.id);
                    if (createdItemIndex >= 0) {
                        // remove old item from createdWebComponents
                        this.createdWebComponents.splice(createdItemIndex, 1);
                        // and add new item to createdWebComponents
                        this.changedWebComponents.push(item);
                    }
                    else {
                        // remove previously changed items
                        this.changedWebComponents = this.changedWebComponents.filter(x => x.id !== item.id);
                        // add to changedWebComponents
                        this.changedWebComponents.push(item);
                    }
                }
                webComponentCreated(item) {
                    console.log('webComponentCreated', item);
                    // add to createdWebComponents
                    this.createdWebComponents.push(item);
                }
            }
            const OptionCardContext = createContext(new OptionsCardContextData());

            class WebComponentFormContextData {
            }
            const WebComponentFormContext = createContext(new WebComponentFormContextData());

            var css$k = ".WebComponentForm .componentTitle {\n  display: grid;\n  grid-template-columns: 33px auto 33px;\n  border-bottom: 1px solid #eee; }\n\n.WebComponentForm .componentSelect {\n  display: grid;\n  grid-template-columns: 33px -webkit-min-content auto;\n  grid-template-columns: 33px min-content auto; }\n  .WebComponentForm .componentSelect select {\n    width: 100%; }\n\n.OptionItem[data-valuetype=webComponent] > .item-header {\n  display: none; }\n\n.OptionItem[data-valuetype=webComponent][data-isarray=true] > .item-header,\n.OptionItem[data-valuetype=webComponent][data-isarray=true] > .item-details > .OptionItem > .item-header {\n  display: grid; }\n";
            styleInject(css$k);

            class WebComponentForm extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        loadingWebComponents: true,
                        loadingComponentDefinitions: true,
                        webComponents: [],
                        componentDefinitions: []
                    };
                    this.initCurrentComponent = this.initCurrentComponent.bind(this);
                    this.onOptionsChange = this.onOptionsChange.bind(this);
                    this.removeWebComponent = this.removeWebComponent.bind(this);
                    this.onSelectedComponentDefinitionChange = this.onSelectedComponentDefinitionChange.bind(this);
                }
                get formEvents() {
                    return this.context;
                }
                componentDidMount() {
                    this.loadComponentDefinitions();
                    this.loadWebComponents();
                }
                // public componentDidUpdate(prevProps: IInputComponentProps) {
                //   if (prevProps.value !== this.props.value) {
                //     this.initCurrentComponent();
                //   }
                // }
                componentWillUnmount() {
                    if (this.state.selectedWebComponentOptions) {
                        this.formEvents.webComponentRemoved(this.state.selectedWebComponentOptions);
                    }
                }
                loadComponentDefinitions() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const result = yield this.adminPageContext.componentLoader.getAllComponents();
                            const componentDefinitions = [];
                            Object.keys(result).forEach(moduleName => {
                                const components = result[moduleName];
                                components.forEach(definition => {
                                    const key = moduleName + '.' + definition.name;
                                    componentDefinitions.push({ moduleName, definition, key });
                                });
                            });
                            this.setState({ componentDefinitions, loadingComponentDefinitions: false }, this.initCurrentComponent);
                        }
                        catch (err) {
                            return console.log(err);
                        } // TODO
                    });
                }
                loadWebComponents() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const webComponents = yield apiClient.getWebComponentOptions();
                            this.setState({ webComponents, loadingWebComponents: false }, this.initCurrentComponent);
                        }
                        catch (err) {
                            return console.log(err);
                        } // TODO
                    });
                }
                initCurrentComponent() {
                    if (this.state.loadingWebComponents || this.state.loadingComponentDefinitions) {
                        return;
                    }
                    if (this.props.value) {
                        const selectedWebComponentOptions = this.state.webComponents.find(x => x.id === this.props.value);
                        if (selectedWebComponentOptions) {
                            const key = selectedWebComponentOptions.moduleName + '.' + selectedWebComponentOptions.componentName;
                            const selectedComponentDefinition = this.state.componentDefinitions.find(x => x.key === key);
                            if (selectedComponentDefinition) {
                                this.setState({ selectedComponentDefinition, selectedWebComponentOptions });
                            }
                        }
                    }
                }
                onSelectedComponentDefinitionChange(e) {
                    const newKey = e.currentTarget.value;
                    const selectedComponentDefinition = this.state.componentDefinitions.find(x => x.key === newKey);
                    const currentWebComponentOptions = this.state.selectedWebComponentOptions;
                    let newWebComponentOptions;
                    if (selectedComponentDefinition) {
                        const id = currentWebComponentOptions && currentWebComponentOptions.id ||
                            selectedComponentDefinition.definition.name + '_' + guid_1.raw();
                        newWebComponentOptions = {
                            id,
                            parentId: this.optionItemContext.parentComponent && this.optionItemContext.parentComponent.id,
                            moduleName: selectedComponentDefinition.moduleName,
                            componentName: selectedComponentDefinition.definition.name,
                            options: getDefaultObjectValue(selectedComponentDefinition.definition.fields)
                        };
                    }
                    // trigger id change
                    const newId = newWebComponentOptions && newWebComponentOptions.id;
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
                    this.setState({ selectedWebComponentOptions: newWebComponentOptions, selectedComponentDefinition });
                }
                removeWebComponent() {
                    if (this.state.selectedWebComponentOptions) {
                        // notify component remove
                        this.formEvents.webComponentRemoved(this.state.selectedWebComponentOptions);
                        this.props.valueChange(this.props.definition, undefined);
                        this.setState({ selectedWebComponentOptions: undefined, selectedComponentDefinition: undefined });
                    }
                }
                onOptionsChange(newOptions) {
                    if (!this.state.selectedWebComponentOptions) {
                        return;
                    }
                    const newWebComponentOptions = Object.assign({}, this.state.selectedWebComponentOptions);
                    newWebComponentOptions.options = newOptions;
                    this.setState({ selectedWebComponentOptions: newWebComponentOptions });
                    // notify component changed
                    this.formEvents.webComponentChanged(newWebComponentOptions);
                }
                renderComponentSelection() {
                    if (this.state.loadingWebComponents || this.state.loadingComponentDefinitions) {
                        return null;
                    }
                    const selectedComponentKey = this.state.selectedComponentDefinition && this.state.selectedComponentDefinition.key || '';
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
                    let types = this.state.componentDefinitions.map(x => x.definition.type);
                    types = types.filter((v, i, a) => a.indexOf(v) === i);
                    const optionGroups = {};
                    this.state.componentDefinitions
                        .filter(x => x.definition.type !== 'admin-input' && x.definition.type !== 'internal')
                        .forEach(item => {
                        const type = item.definition.type || 'content';
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
                            Object.keys(optionGroups).map(type => createElement("optgroup", { key: type, label: type }, optionGroups[type].map(item => createElement("option", { key: item.key, value: item.key },
                                item.definition.displayName,
                                " (",
                                item.moduleName,
                                ")")))))));
                }
                renderComponentForm() {
                    if (!this.state.selectedWebComponentOptions || !this.state.selectedComponentDefinition) {
                        return null;
                    }
                    return (createElement(WebComponentFormContext.Provider, { value: { parentComponent: this.state.selectedWebComponentOptions } },
                        createElement(OptionList, { value: this.state.selectedWebComponentOptions.options, fields: this.state.selectedComponentDefinition.definition.fields, valueChange: this.onOptionsChange })));
                }
                render() {
                    return (createElement("div", { className: "WebComponentForm" },
                        createElement(AdminPageContext.Consumer, null, value => (this.adminPageContext = value) && null),
                        createElement(WebComponentFormContext.Consumer, null, value => (this.optionItemContext = value) && null),
                        this.renderComponentSelection(),
                        this.renderComponentForm()));
                }
            }
            WebComponentForm.contextType = OptionCardContext;

            class WebComponentControlsProvider {
                match(definition) {
                    return definition.valueType === 'webComponent';
                }
                get() {
                    return {
                        icon: faCube,
                        detailsControl: WebComponentForm,
                        inputControl: (props) => {
                            return props && props.value || 'none';
                        }
                    };
                }
            }

            const providers = [
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
            const getInputControls = (definition, context) => {
                const provider = providers.find(x => x.match(definition));
                const result = provider && provider.get(definition) || {};
                if (!definition.isArray) {
                    if (definition.inputControl) {
                        if (typeof definition.inputControl === 'function') {
                            result.inputControl = definition.inputControl;
                        }
                        else if (definition.inputControl.module && definition.inputControl.component) {
                            const moduleName = definition.inputControl.module;
                            const componentName = definition.inputControl.component;
                            result.inputControl = (props) => context.renderComponent({ moduleName, componentName, options: props });
                        }
                    }
                    if (definition.inputForm) {
                        if (typeof definition.inputForm === 'function') {
                            result.detailsControl = definition.inputForm;
                        }
                        else if (definition.inputForm.module && definition.inputForm.component) {
                            const moduleName = definition.inputForm.module;
                            const componentName = definition.inputForm.component;
                            result.detailsControl = (props) => context.renderComponent({ moduleName, componentName, options: props });
                        }
                    }
                }
                return result;
            };

            var css$l = ".OptionItem {\n  margin-left: 6px;\n  line-height: 32px;\n  border-top: 1px solid transparent; }\n  .OptionItem + .OptionItem {\n    border-color: #eee; }\n  .OptionItem[data-hasdetails='false'] {\n    display: grid;\n    grid-template-columns: 50% 50%; }\n  .OptionItem[data-detailsvisible='false'] + .add-array-item {\n    border-top: 1px solid #eee; }\n  .OptionItem[data-detailsvisible='true'] {\n    padding-left: 3px;\n    margin-left: 0px;\n    border-left-width: 3px;\n    border-top-width: 1px;\n    border-bottom-width: 1px;\n    border-bottom-color: #eee;\n    border-right-width: 0;\n    border-style: solid;\n    border-left-color: #68a; }\n    .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] {\n      border-left-color: #964; }\n      .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n        border-left-color: #6a9; }\n        .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n          border-left-color: #649; }\n          .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n            border-left-color: #496; }\n            .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n              border-left-color: #946; }\n              .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n                border-left-color: #649; }\n                .OptionItem[data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] [data-detailsvisible='true'] {\n                  border-left-color: #68a; }\n    .OptionItem[data-detailsvisible='true'] > .item-header {\n      border-bottom: 1px solid #eee; }\n    .OptionItem[data-detailsvisible='true'] + [data-detailsvisible='true'] {\n      margin-top: 6px; }\n    .OptionItem[data-detailsvisible='true'] + [data-detailsvisible='false'] {\n      border-top-width: 0; }\n    .OptionItem[data-detailsvisible='true'] :last-child {\n      border-bottom-width: 0; }\n  .OptionItem label,\n  .OptionItem .header-text,\n  .OptionItem .sub-header-text {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .OptionItem label {\n    display: -webkit-box;\n    display: flex; }\n    .OptionItem label :first-child.header-text {\n      padding-left: 4px; }\n  .OptionItem input,\n  .OptionItem select {\n    height: 32px;\n    border: none;\n    padding-left: 6px;\n    background: white;\n    box-sizing: border-box;\n    margin: 0; }\n    .OptionItem input[type='range'],\n    .OptionItem select[type='range'] {\n      padding-left: 0; }\n  .OptionItem textarea {\n    border: none;\n    width: 100%;\n    padding: 6px;\n    display: -webkit-box;\n    display: flex;\n    box-sizing: border-box; }\n  .OptionItem .item-header {\n    display: grid;\n    grid-template-columns: 50% auto 33px;\n    padding: 0 !important; }\n  .OptionItem .UiButton {\n    padding-top: 0;\n    padding-bottom: 0; }\n";
            styleInject(css$l);

            let counter = 0;
            class OptionItem extends Component {
                constructor(props) {
                    super(props);
                    // let detailsVisible = (props.definition.valueType === 'webComponent' && !props.definition.isArray) || undefined;
                    this.state = {
                        uniqueId: 'ID' + (counter++),
                        detailsVisible: props.detailsVisible
                    };
                    this.toggleItemDetails = this.toggleItemDetails.bind(this);
                }
                componentDidMount() {
                    const inputControls = getInputControls(this.props.definition, this.context);
                    const isNewArrayItem = this.props.value && this.props.value.__new;
                    // auto open new array items
                    if (isNewArrayItem) {
                        inputControls.detailsVisible = true;
                    }
                    this.setState(inputControls, () => {
                        if (isNewArrayItem) {
                            delete (this.props.value.__new);
                            this.props.valueChange(this.props.definition, this.props.value);
                        }
                    });
                }
                toggleItemDetails() {
                    this.setState(state => ({ detailsVisible: !state.detailsVisible }));
                }
                renderInputRow() {
                    const label = (createElement("label", { htmlFor: this.state.uniqueId },
                        this.props.children,
                        this.state.icon && (createElement(UiButton, null,
                            createElement(FontAwesomeIcon, { icon: this.state.icon }))),
                        createElement("span", { className: "header-text" }, this.props.definition.displayName)));
                    let input = '';
                    if (this.state.inputControl) {
                        input = createElement(ErrorBoundary, null,
                            createElement(this.state.inputControl, Object.assign({}, this.props, { uniqueId: this.state.uniqueId })));
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
                }
                renderDetailsForm() {
                    if (!this.state.detailsControl) {
                        return null;
                    }
                    return (createElement("div", { className: "item-details", hidden: !this.state.detailsVisible },
                        createElement(ErrorBoundary, null,
                            createElement(this.state.detailsControl, Object.assign({}, this.props, { uniqueId: this.state.uniqueId })))));
                }
                render() {
                    return (createElement("div", { className: "OptionItem", "data-hasdetails": this.state.detailsControl ? 'true' : 'false', "data-detailsvisible": this.state.detailsVisible ? 'true' : 'false', "data-isarray": this.props.definition.isArray ? 'true' : 'false', "data-valuetype": this.props.definition.valueType },
                        this.renderInputRow(),
                        this.renderDetailsForm()));
                }
            }
            OptionItem.contextType = AdminPageContext;

            var css$m = ".OptionList {\n  background: white; }\n";
            styleInject(css$m);

            class OptionList extends Component {
                constructor(props) {
                    super(props);
                    this.valueChange = this.valueChange.bind(this);
                }
                valueChange(field, value) {
                    const newValue = this.props.value ? Object.assign({}, this.props.value) : {};
                    newValue[field.name] = value;
                    this.props.valueChange(newValue);
                }
                renderDebug() {
                    return (createElement(UiCardContent, { className: "debug" }, JSON.stringify(this.props.value, undefined, 2)));
                }
                render() {
                    if (!this.props.fields || !this.props.fields.length) {
                        return null;
                        // return <span>No options / fields defined</span>;
                    }
                    return (createElement("div", { className: "OptionList" },
                        this.renderDebug(),
                        this.props.fields.map(field => {
                            const value = this.props.value && this.props.value[field.name];
                            const detailsVisible = (field.valueType === 'webComponent' && !field.isArray) || undefined;
                            return createElement(OptionItem, { key: field.name, detailsVisible: detailsVisible, definition: field, value: value, valueChange: this.valueChange });
                        })));
                }
            }

            var css$n = ".OptionCard > .UiCardTitle .buttons {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: -webkit-box;\n  display: flex; }\n  .OptionCard > .UiCardTitle .buttons svg {\n    margin-left: 3px; }\n\n.OptionCard > .OptionList {\n  position: relative;\n  overflow-x: hidden; }\n  .OptionCard > .OptionList > :last-child {\n    border-bottom: none; }\n\n.OptionCard > .UiCardButtonRow {\n  border-top: 1px solid #ddd; }\n\n.OptionCard .debug {\n  white-space: pre;\n  line-height: 16px; }\n";
            styleInject(css$n);

            class OptionCard extends Component {
                constructor(props) {
                    super(props);
                    const newOptions = this.setDefaultValues(props.options || {});
                    this.state = {
                        newOptions,
                        formContext: new OptionsCardContextData(),
                        showDebug: false,
                        showExpertOptions: false,
                    };
                    this.cancel = this.cancel.bind(this);
                    this.save = this.save.bind(this);
                    this.reset = this.reset.bind(this);
                    this.optionsChange = this.optionsChange.bind(this);
                    this.toggleStyleOptions = this.toggleStyleOptions.bind(this);
                    this.toggleDebug = this.toggleDebug.bind(this);
                }
                // init fields
                setDefaultValues(options) {
                    this.props.fields.forEach(field => {
                        let value = options[field.name];
                        if (value === undefined) {
                            value = getDefaultFieldValue(field);
                            if (value !== undefined) {
                                options[field.name] = value;
                            }
                        }
                    });
                    return options;
                }
                reset() {
                    const newOptions = this.setDefaultValues(this.props.options || {});
                    this.setState({ newOptions });
                }
                save() {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield this.state.formContext.onSave.publish();
                        return this.props.onSave(this.state.newOptions);
                    });
                }
                cancel() {
                    return this.props.onCancel && this.props.onCancel();
                }
                optionsChange(newValue) {
                    this.setState({ newOptions: newValue });
                }
                toggleStyleOptions() {
                    this.setState(prevState => ({ showExpertOptions: !prevState.showExpertOptions }));
                }
                toggleDebug() {
                    this.setState(prevState => ({ showDebug: !prevState.showDebug }));
                }
                renderTitle() {
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
                }
                renderContent() {
                    return (createElement(OptionCardContext.Provider, { value: this.state.formContext },
                        createElement(OptionList, { fields: this.props.fields, value: this.state.newOptions, valueChange: this.optionsChange })));
                }
                renderStyleOptionsStyle() {
                    if (this.state.showExpertOptions) {
                        return null;
                    }
                    return createElement("style", null, '[data-valuetype="style"] { display: none; }');
                }
                renderDebugStyle() {
                    if (this.state.showDebug) {
                        return null;
                    }
                    return createElement("style", null, '.debug { display: none; }');
                }
                renderFooter() {
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
                }
                render() {
                    const className = 'OptionCard ' + this.props.className;
                    return (createElement(UiCard, { className: className },
                        this.renderTitle(),
                        this.renderContent(),
                        this.renderFooter(),
                        this.renderStyleOptionsStyle(),
                        this.renderDebugStyle()));
                }
            }

            var css$o = "";
            styleInject(css$o);

            class PageCard extends Component {
                constructor(props) {
                    super(props);
                    this.onEdit = this.onEdit.bind(this);
                    this.onDelete = this.onDelete.bind(this);
                }
                onEdit() {
                    return this.props.onEdit(this.props.page);
                }
                onDelete() {
                    return this.props.onDelete(this.props.page);
                }
                renderTitle() {
                    return (createElement(UiCardTitle, null,
                        createElement(FontAwesomeIcon, { icon: faFile }),
                        " ",
                        this.props.page.title,
                        " (",
                        this.props.page.path,
                        ")"));
                }
                renderPath() {
                    return (createElement(UiCardContent, { className: "path" }, this.props.page.path));
                }
                renderFooter() {
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
                }
                render() {
                    return (createElement(UiCard, { className: "PageCard" },
                        this.renderTitle(),
                        this.renderFooter()));
                }
            }

            const pageOptionsFields = [{
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

            class PageManagerPage extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        loading: true,
                        pages: [],
                        showPageDetailsDialog: false
                    };
                    this.loadPages = this.loadPages.bind(this);
                    this.savePage = this.savePage.bind(this);
                    this.deletePage = this.deletePage.bind(this);
                    this.hidePageDetailsDialog = this.hidePageDetailsDialog.bind(this);
                    this.showPageDetailsDialog = this.showPageDetailsDialog.bind(this);
                }
                componentDidMount() {
                    this.loadPages();
                }
                loadPages() {
                    this.setState({ loading: true });
                    return apiClient.getWebPages()
                        .then(pages => this.setState({ pages, loading: false }))
                        .catch(err => this.setState({ loading: false })); // TODO
                }
                savePage(page) {
                    return apiClient.setWebPage(undefined, page)
                        .then(this.hidePageDetailsDialog)
                        .then(apiClient.getWebPages.clearCache)
                        .then(this.loadPages)
                        .catch(err => console.log(err)); // TODO
                }
                deletePage(page) {
                    return apiClient.deleteWebPage(page)
                        .then(this.hidePageDetailsDialog)
                        .then(apiClient.getWebPages.clearCache)
                        .then(this.loadPages)
                        .catch(err => console.log(err)); // TODO
                }
                showPageDetailsDialog(page) {
                    this.setState({ showPageDetailsDialog: true, selectedPage: page });
                }
                hidePageDetailsDialog() {
                    this.setState({ showPageDetailsDialog: false, selectedPage: undefined });
                }
                renderPageCards() {
                    if (this.state.loading) {
                        return createElement(UiFlowLayout, null,
                            createElement(UiLoadingCard, null));
                    }
                    return (createElement(UiFlowLayout, null, this.state.pages.map((item, index) => createElement(PageCard, { key: index, page: item, onEdit: this.showPageDetailsDialog, onDelete: confirm(this.deletePage, 'Delete?') }))));
                }
                renderPageAddCard() {
                    return (createElement(UiFlowLayout, null,
                        createElement(UiCard, { className: "AddPageCard" },
                            createElement(UiButton, { className: "addButton", onClick: this.showPageDetailsDialog },
                                createElement(FontAwesomeIcon, { icon: faPlus }),
                                " Add Page"))));
                }
                renderPageDetailsDialog() {
                    if (!this.state.showPageDetailsDialog) {
                        return null;
                    }
                    const page = this.state.selectedPage;
                    const title = page ? 'Edit Page' : 'Add Page';
                    return (createElement(UiOverlay, null,
                        createElement(OptionCard, { icon: faFile, showToggleStyleOptions: true, title: title, fields: pageOptionsFields, onSave: this.savePage, onCancel: this.hidePageDetailsDialog, options: page || {} })));
                }
                render() {
                    return (createElement("section", { className: "PageManagerPage" },
                        this.renderPageAddCard(),
                        this.renderPageCards(),
                        this.renderPageDetailsDialog()));
                }
            }

            var css$q = "a.RoundButton {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  color: white;\n  border: 3px solid white;\n  border-radius: 18px;\n  padding: 8px;\n  text-decoration: none;\n  font-weight: bold;\n  min-width: 80px;\n  text-align: center; }\n  a.RoundButton:hover {\n    background: rgba(255, 255, 255, 0.178); }\n  a.RoundButton + a.RoundButton {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    margin-right: 10px; }\n  a.RoundButton svg {\n    margin-right: 6px; }\n";
            styleInject(css$q);

            class RoundButton extends Component {
                render() {
                    return createElement(Link, { className: "RoundButton", to: this.props.to, role: "button" }, this.props.children);
                }
            }

            var css$r = ".ServiceListItem > :last-child {\n  position: absolute;\n  right: 0;\n  top: 0; }\n";
            styleInject(css$r);

            class ServiceListItem extends Component {
                constructor(props) {
                    super(props);
                    this.showDetails = this.showDetails.bind(this);
                }
                showDetails() {
                    return this.props.onShowDetails(this.props.service);
                }
                render() {
                    return (createElement(UiButton, { className: "ServiceListItem UiCardContent", onClick: this.showDetails },
                        createElement(FontAwesomeIcon, { icon: faCogs }),
                        " ",
                        this.props.service.displayName,
                        createElement(UiButton, null,
                            createElement(FontAwesomeIcon, { icon: faArrowRight }))));
                }
            }

            var css$s = "";
            styleInject(css$s);

            class ServiceGroupCard extends Component {
                render() {
                    return (createElement(UiCard, { className: "ServiceGroupCard" },
                        createElement(UiCardTitle, null,
                            createElement(FontAwesomeIcon, { icon: faCube }),
                            " ",
                            this.props.moduleName),
                        this.props.services.map(item => createElement(ServiceListItem, { key: item.name, service: item, onShowDetails: this.props.onShowDetails }))));
                }
            }

            var css$t = ".ServiceManagerPage {\n  min-height: 100px; }\n";
            styleInject(css$t);

            var css$u = ".ServiceLogCard .log-item {\n  padding: 0 3px 0 3px;\n  border: 1px solid #ddd;\n  border-left-width: 4px;\n  border-radius: 4px; }\n  .ServiceLogCard .log-item:hover {\n    border-color: #bbb;\n    background-color: #fefefe; }\n  .ServiceLogCard .log-item[data-severity='error'] {\n    border-left-color: red; }\n  .ServiceLogCard .log-item[data-severity='warning'] {\n    border-left-color: #fb3; }\n  .ServiceLogCard .log-item[data-severity='information'] {\n    border-left-color: #4B4; }\n  .ServiceLogCard .log-item[data-severity='debug'] {\n    border-left-color: #888; }\n  .ServiceLogCard .log-item .timestamp {\n    float: right;\n    line-height: 21px;\n    font-size: 11px;\n    color: #555; }\n  .ServiceLogCard .log-item .data {\n    font-family: monospace;\n    font-size: 12px;\n    word-break: break-word; }\n  .ServiceLogCard .log-item ~ .log-item {\n    margin-top: 3px; }\n";
            styleInject(css$u);

            class ServiceLogCard extends Component {
                constructor(props) {
                    super(props);
                    this.state = { log: [] };
                    this.close = this.close.bind(this);
                    this.loadLog = this.loadLog.bind(this);
                }
                close() {
                    this.props.onClose();
                }
                componentDidMount() {
                    this.loadLog();
                }
                // public componentDidUpdate(prevProps: IServiceLogCardProps) {
                //   if (prevProps.service !== this.props.service) {
                //     this.setState({ log: [] }, this.loadLog);
                //   }
                // }
                loadLog() {
                    const source = this.props.service.moduleName + '.' + this.props.service.name;
                    apiClient.getLogEntries({ source }).then(log => {
                        this.setState({ log });
                    });
                }
                render() {
                    return (createElement(UiCard, { className: "ServiceLogCard" },
                        createElement(UiCardTitle, null,
                            createElement(FontAwesomeIcon, { icon: faFile }),
                            " Log for ",
                            this.props.service.displayName),
                        createElement(UiCardContent, null, this.state.log.map(entry => (createElement("div", { className: "log-item", "data-severity": entry.severity },
                            createElement("div", { className: "timestamp" }, moment(entry.timestamp).toISOString()),
                            createElement("div", { className: "message" }, entry.message),
                            entry.data && (createElement("div", { className: "data" }, JSON.stringify(entry.data))))))),
                        createElement(UiCardButtonRow, null,
                            createElement(UiButton, { onClick: this.close },
                                createElement(FontAwesomeIcon, { icon: faTimes }),
                                " Close"))));
                }
            }

            class ServiceManagerPage extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        loadingServices: true,
                        loadingServiceOptions: false,
                        services: [],
                        showOptions: false,
                        showLog: false,
                        showDetails: false,
                        selectedService: undefined,
                        selectedServiceOptions: undefined
                    };
                    this.showDetails = this.showDetails.bind(this);
                    this.closeDetails = this.closeDetails.bind(this);
                    this.showLog = this.showLog.bind(this);
                    this.closeLog = this.closeLog.bind(this);
                    this.showOptions = this.showOptions.bind(this);
                    this.closeOptions = this.closeOptions.bind(this);
                    this.loadOptions = this.loadOptions.bind(this);
                    this.saveOptions = this.saveOptions.bind(this);
                    this.optionsChange = this.optionsChange.bind(this);
                }
                componentDidMount() {
                    this.loadServices();
                }
                loadServices() {
                    return apiClient.getAllServices()
                        .then(services => this.setState({ services, loadingServices: false }))
                        .catch(err => this.setState({ loadingServices: false })); // TODO
                }
                showDetails(service) {
                    this.setState({ showDetails: true, selectedService: service });
                }
                showLog() {
                    this.setState({ showLog: true });
                }
                showOptions() {
                    this.setState({ showOptions: true, selectedServiceOptions: undefined }, this.loadOptions);
                }
                closeDetails() {
                    this.setState({ showDetails: false, selectedService: undefined });
                }
                closeOptions() {
                    this.setState({ showOptions: false, showDetails: true });
                }
                closeLog() {
                    this.setState({ showLog: false, showDetails: true });
                }
                loadOptions() {
                    if (!this.state.selectedService) {
                        return;
                    }
                    this.setState({ loadingServiceOptions: true });
                    apiClient.getServiceOptions({
                        moduleName: this.state.selectedService.moduleName,
                        serviceName: this.state.selectedService.name
                    })
                        .then(options => {
                        this.setState({ selectedServiceOptions: options, loadingServiceOptions: false });
                    });
                }
                optionsChange(newOptions) {
                    this.setState({ selectedServiceOptions: newOptions });
                }
                saveOptions(newOptions) {
                    if (!this.state.selectedService) {
                        return;
                    }
                    apiClient.setServiceOptions({
                        moduleName: this.state.selectedService.moduleName,
                        serviceName: this.state.selectedService.name
                    }, newOptions);
                    this.closeOptions();
                }
                renderServiceOptionsDialog() {
                    if (!this.state.showOptions || !this.state.selectedService) {
                        return null;
                    }
                    if (this.state.loadingServiceOptions) {
                        return createElement(UiOverlay, null,
                            createElement(UiLoadingCard, null));
                    }
                    const title = 'Options for ' + this.state.selectedService.displayName;
                    return (createElement(UiOverlay, null,
                        createElement(OptionCard, { icon: faCog, showReset: true, title: title, fields: this.state.selectedService.fields || [], options: this.state.selectedServiceOptions, onSave: this.saveOptions, onCancel: this.closeOptions })));
                }
                renderServiceLogDialog() {
                    if (!this.state.showLog || !this.state.selectedService) {
                        return null;
                    }
                    return (createElement(UiOverlay, null,
                        createElement(ServiceLogCard, { service: this.state.selectedService, onClose: this.closeLog })));
                }
                renderServiceDetailsDialog() {
                    if (!this.state.showDetails || !this.state.selectedService) {
                        return null;
                    }
                    const hasOptions = this.state.selectedService.fields && this.state.selectedService.fields.length;
                    return (createElement(UiOverlay, null,
                        createElement(UiCard, { className: "ServiceDetailsCard" },
                            createElement(UiCardTitle, null,
                                createElement(FontAwesomeIcon, { icon: faCogs }),
                                " ",
                                this.state.selectedService.displayName),
                            createElement(UiCardContent, null, this.state.selectedService.description),
                            createElement(UiCardButtonRow, { divider: "half" },
                                createElement(UiButton, { onClick: this.closeDetails },
                                    createElement(FontAwesomeIcon, { icon: faTimes }),
                                    " Close"),
                                createElement(UiButton, { onClick: this.showLog },
                                    createElement(FontAwesomeIcon, { icon: faFile }),
                                    " Log"),
                                createElement(UiButton, { onClick: this.showOptions, disabled: !hasOptions },
                                    createElement(FontAwesomeIcon, { icon: faCog }),
                                    " Options")))));
                }
                renderServiceGroups() {
                    if (this.state.loadingServices) {
                        return createElement(Loading, { center: true });
                    }
                    const groups = this.state.services.map(x => x.moduleName).filter(onlyUnique);
                    const groupCards = groups.map(moduleName => {
                        const services = this.state.services.filter(x => x.moduleName === moduleName); // TODO: .sort((a, b) => a.displayName > b.displayName)
                        return (createElement(ServiceGroupCard, { key: moduleName, moduleName: moduleName, services: services, onShowDetails: this.showDetails }));
                    });
                    return createElement(UiFlowLayout, null, groupCards);
                }
                render() {
                    return (createElement("section", { className: "ServiceManagerPage" },
                        this.renderServiceGroups(),
                        this.renderServiceOptionsDialog(),
                        this.renderServiceLogDialog(),
                        this.renderServiceDetailsDialog()));
                }
            }
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }

            class PageInputControl extends Component {
                constructor(props) {
                    super(props);
                    this.onSelectValueChange = (e) => {
                        this.props.valueChange(this.props.definition, e.currentTarget.value);
                    };
                    this.state = {
                        pages: []
                    };
                    this.onSelectValueChange = this.onSelectValueChange.bind(this);
                }
                componentDidMount() {
                    apiClient.getWebPages().then(pages => this.setState({ pages }));
                }
                render() {
                    const options = this.state.pages.map(page => createElement("option", { key: page.id, value: page.path },
                        page.title,
                        " (",
                        page.path,
                        ")"));
                    return (createElement("select", { id: this.props.uniqueId, value: this.props.value, onChange: this.onSelectValueChange },
                        createElement("option", null, "Select page..."),
                        options));
                }
            }

            const timezoneNames = momentTimezone.tz.names();
            const timezones = [];
            timezoneNames.forEach(timezone => {
                timezones.push({
                    text: "(GMT" + moment.tz(timezone).format('Z') + ") " + timezone.replace('_', ' '),
                    value: timezone
                });
            });
            timezones.sort((a, b) => a.text.localeCompare(b.text));
            const renderFormattedTime = (value) => {
                value = value || 0;
                let hour = Math.floor(value / 60);
                let minutes = value % 60;
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
            const systemSettingsFields = [{
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
                    values: [...timezones]
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
                            inputControl: props => renderFormattedTime(props.value)
                        }, {
                            description: 'To',
                            displayName: 'To',
                            name: 'to',
                            valueType: 'number',
                            minValue: 0,
                            maxValue: 1440,
                            stepSize: 15,
                            defaultValue: 600,
                            inputControl: props => renderFormattedTime(props.value)
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
                    inputControl: (props) => {
                        const options = props.value;
                        return createElement("span", null,
                            renderFormattedTime(options.from),
                            " - ",
                            renderFormattedTime(options.to),
                            " every ",
                            options.interval,
                            " min");
                    }
                }];

            var css$v = "";
            styleInject(css$v);

            class SettingsManagerPage extends Component {
                constructor(props) {
                    super(props);
                    this.state = { loading: true };
                    this.loadSettings = this.loadSettings.bind(this);
                    this.saveSettings = this.saveSettings.bind(this);
                }
                componentDidMount() {
                    this.loadSettings();
                }
                loadSettings() {
                    return apiClient.getSettings()
                        .then(settings => this.setState({ settings, loading: false }))
                        .catch(); // TODO
                }
                saveSettings(newSettings) {
                    return apiClient.setSettings(undefined, newSettings)
                        .then(apiClient.getSettings.clearCache)
                        .catch(); // TODO
                }
                render() {
                    return (createElement("section", { className: "SettingsManagerPage" },
                        this.state.loading && (createElement(UiFlowLayout, null,
                            createElement(UiLoadingCard, null))),
                        this.state.settings && (createElement(UiFlowLayout, null,
                            createElement(OptionCard, { options: this.state.settings, onSave: this.saveSettings, fields: systemSettingsFields, icon: faCogs, title: "Settings", showReset: true })))));
                }
            }

            var css$w = "section.SystemPage .danger {\n  border: 1px solid red; }\n  section.SystemPage .danger .UiCardTitle {\n    color: red; }\n\nsection.SystemPage .infoRow {\n  display: grid;\n  grid-template-columns: 100px auto; }\n\nsection.SystemPage .loadingDots {\n  position: absolute;\n  -webkit-transform: translateY(-54%);\n          transform: translateY(-54%); }\n  section.SystemPage .loadingDots:after {\n    font-size: 3em;\n    font-family: Impact;\n    content: ' .';\n    -webkit-animation: dots 1.5s steps(10, end) infinite;\n            animation: dots 1.5s steps(10, end) infinite; }\n\n@-webkit-keyframes dots {\n  0%,\n  10%,\n  90%,\n  100% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  20% {\n    color: #888;\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  30% {\n    color: #888;\n    text-shadow: 0.25em 0 0 #888, 0.5em 0 0 rgba(0, 0, 0, 0); }\n  40%,\n  60% {\n    color: #888;\n    text-shadow: .25em 0 0 #888, .5em 0 0 #888; }\n  70% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: .25em 0 0 #888, .5em 0 0 #888; }\n  80% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 #888; } }\n\n@keyframes dots {\n  0%,\n  10%,\n  90%,\n  100% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  20% {\n    color: #888;\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0); }\n  30% {\n    color: #888;\n    text-shadow: 0.25em 0 0 #888, 0.5em 0 0 rgba(0, 0, 0, 0); }\n  40%,\n  60% {\n    color: #888;\n    text-shadow: .25em 0 0 #888, .5em 0 0 #888; }\n  70% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: .25em 0 0 #888, .5em 0 0 #888; }\n  80% {\n    color: rgba(0, 0, 0, 0);\n    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 #888; } }\n";
            styleInject(css$w);

            class SystemPage extends Component {
                constructor(props) {
                    super(props);
                    this.state = {};
                    this.exitApplication = this.exitApplication.bind(this);
                    this.restartApplication = this.restartApplication.bind(this);
                    this.shutdownSystem = this.shutdownSystem.bind(this);
                    this.rebootSystem = this.rebootSystem.bind(this);
                    this.resetApplication = this.resetApplication.bind(this);
                }
                componentDidMount() {
                    apiClient.getServerInfo().then(info => this.setState({ info }));
                }
                // TODO: confirm dialog
                exitApplication() {
                    return apiClient.exitApplication();
                }
                restartApplication() {
                    return apiClient.restartApplication();
                }
                shutdownSystem() {
                    return apiClient.shutdownSystem();
                }
                rebootSystem() {
                    return apiClient.rebootSystem();
                }
                resetApplication() {
                    return apiClient.resetApplication();
                }
                renderLoadingDots() {
                    return createElement("span", { className: "loadingDots" });
                }
                renderApplicationCard() {
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
                }
                renderSystemCard() {
                    const free = this.state.info ? Math.round(this.state.info.memory.free / 1024 / 1024) : 0;
                    const total = this.state.info ? Math.round(this.state.info.memory.total / 1024 / 1024) : 0;
                    const memInfo = this.state.info ? (free + 'MB / ' + total + 'MB') : '';
                    const cpuInfo = this.state.info ? (this.state.info.cpu.count + 'x' + this.state.info.cpu.speed + 'MHz') : '';
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
                }
                renderDangerCard() {
                    return (createElement(UiCard, { className: "danger" },
                        createElement(UiCardTitle, null, "Danger Zone"),
                        createElement(UiCardButtonRow, null,
                            createElement(UiButton, { onClick: confirm(this.resetApplication, 'Reset?') },
                                createElement(FontAwesomeIcon, { icon: faExclamationTriangle }),
                                " Reset Application"))));
                }
                render() {
                    return (createElement("section", { className: "SystemPage" },
                        createElement(UiFlowLayout, null,
                            this.renderApplicationCard(),
                            this.renderSystemCard(),
                            this.renderDangerCard())));
                }
            }

            var css$x = "section.Admin {\n  height: 100%;\n  overflow: auto;\n  background: #fdfdfd; }\n  section.Admin > header {\n    background-color: #456;\n    color: white;\n    position: relative;\n    z-index: 2; }\n    section.Admin > header .title {\n      display: inline-block;\n      font-size: 1.5em;\n      margin: 25px;\n      text-align: center; }\n  section.Admin > .content {\n    position: relative;\n    font-size: 14px;\n    line-height: 1.5; }\n  section.Admin section.Navigation {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); }\n  section.Admin a {\n    text-decoration: none; }\n  section.Admin a,\n  section.Admin label,\n  section.Admin .clickable {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    white-space: nowrap; }\n    section.Admin a svg,\n    section.Admin label svg,\n    section.Admin .clickable svg {\n      margin-right: 3px; }\n  section.Admin label {\n    cursor: unset; }\n  section.Admin .clickable {\n    padding-left: 8px;\n    padding-right: 8px; }\n    section.Admin .clickable.disabled {\n      cursor: default;\n      color: #bbb; }\n    section.Admin .clickable:not(.disabled) {\n      cursor: pointer; }\n      section.Admin .clickable:not(.disabled):active {\n        background: #ddd; }\n  section.Admin select,\n  section.Admin textarea,\n  section.Admin input {\n    background: white;\n    font-size: 16px;\n    text-overflow: ellipsis; }\n  section.Admin input[type=range] {\n    display: block; }\n  section.Admin svg {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n";
            styleInject(css$x);

            class Admin extends Component {
                render() {
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
                }
            }

            const components = exports('components', [{
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
