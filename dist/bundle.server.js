'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var os = require('os');

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

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

var registerRoute = function (router, route, handler) {
    console.log('Register route: ' + route.method + ' ' + route.path);
    var method = router[route.method.toLowerCase()].bind(router);
    method(route.path, handler);
};

// tslint:disable-next-line:no-var-requires
var osCommand = require('electron-shutdown-command');
var getIPAddress = function () {
    var list = [];
    var interfaces = os.networkInterfaces();
    var devices = Object.keys(interfaces);
    for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
        var devName = devices_1[_i];
        var iface = interfaces[devName];
        for (var _a = 0, iface_1 = iface; _a < iface_1.length; _a++) {
            var alias = iface_1[_a];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                list.push(alias.address);
            }
        }
    }
    if (list.length > 1) {
        var lanIp = list.find(function (x) { return x.startsWith('192.168.'); });
        if (lanIp) {
            return lanIp;
        }
    }
    else if (list.length === 1) {
        return list[0];
    }
    return '0.0.0.0';
};
var getCpuInfo = function () {
    var cpus = os.cpus();
    return { count: cpus.length, speed: cpus[0].speed };
};
var getMemoryInfo = function () {
    return { free: os.freemem(), total: os.totalmem() };
};
var AppController = /** @class */ (function () {
    function AppController() {
    }
    AppController.prototype.start = function (context) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('AppController.start');
                registerRoute(context.moduleApiRouter, routes.getServerInfo, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var moduleInfo, result;
                    return __generator(this, function (_a) {
                        console.log('AppController.getServerInfo');
                        moduleInfo = context.backendService.moduleRepository.get('@schirkan/reactron');
                        result = {
                            hostname: os.hostname(),
                            ip: getIPAddress(),
                            cpu: getCpuInfo(),
                            memory: getMemoryInfo(),
                            version: moduleInfo && moduleInfo.version || ''
                        };
                        res.send(result);
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.exitApplication, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.exitApplication');
                        res.sendStatus(204);
                        context.backendService.exit();
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.restartApplication, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.restartApplication');
                        res.sendStatus(204);
                        context.backendService.restart();
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.shutdownSystem, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.shutdownSystem');
                        res.sendStatus(204);
                        osCommand.shutdown();
                        context.backendService.exit();
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.rebootSystem, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.rebootSystem');
                        res.sendStatus(204);
                        osCommand.reboot();
                        context.backendService.exit();
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.resetApplication, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('AppController.resetApplication');
                        res.sendStatus(204);
                        context.backendService.reset();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return AppController;
}());

var ModuleController = /** @class */ (function () {
    function ModuleController() {
    }
    ModuleController.prototype.start = function (context) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('ModuleController.start');
                registerRoute(context.moduleApiRouter, routes.getModules, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var modules;
                    return __generator(this, function (_a) {
                        console.log('ModuleController.getAll');
                        modules = context.backendService.moduleManager.getAll();
                        res.send(modules);
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.checkUpdates, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var resultCheckUpdates;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('ModuleController.checkUpdates');
                                return [4 /*yield*/, context.backendService.moduleManager.checkUpdates()];
                            case 1:
                                resultCheckUpdates = _a.sent();
                                res.send([resultCheckUpdates]);
                                return [2 /*return*/];
                        }
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.addModule, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var results, resultAdd, moduleRepositoryItem, resultInstall, resultBuild;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('ModuleController.add');
                                results = [];
                                return [4 /*yield*/, context.backendService.moduleManager.add(req.body.repository)];
                            case 1:
                                resultAdd = _a.sent();
                                results.push(resultAdd);
                                if (!(resultAdd.success && resultAdd.data)) return [3 /*break*/, 4];
                                moduleRepositoryItem = resultAdd.data;
                                return [4 /*yield*/, context.backendService.moduleManager.install(moduleRepositoryItem)];
                            case 2:
                                resultInstall = _a.sent();
                                results.push(resultInstall);
                                if (!!resultAdd.data.isBuilded) return [3 /*break*/, 4];
                                return [4 /*yield*/, context.backendService.moduleManager.build(moduleRepositoryItem)];
                            case 3:
                                resultBuild = _a.sent();
                                results.push(resultBuild);
                                _a.label = 4;
                            case 4:
                                res.send(results);
                                return [2 /*return*/];
                        }
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.deleteModule, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var moduleRepositoryItem, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('ModuleController.remove');
                                moduleRepositoryItem = context.backendService.moduleManager.get(req.params.moduleName);
                                if (!moduleRepositoryItem) return [3 /*break*/, 2];
                                return [4 /*yield*/, context.backendService.moduleManager.remove(moduleRepositoryItem)];
                            case 1:
                                result = _a.sent();
                                res.send([result]);
                                return [3 /*break*/, 3];
                            case 2:
                                res.sendStatus(404);
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.rebuildModule, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var moduleRepositoryItem, resultInstall, resultBuild;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('ModuleController.rebuild');
                                moduleRepositoryItem = context.backendService.moduleManager.get(req.params.moduleName);
                                if (!moduleRepositoryItem) return [3 /*break*/, 3];
                                return [4 /*yield*/, context.backendService.moduleManager.install(moduleRepositoryItem)];
                            case 1:
                                resultInstall = _a.sent();
                                return [4 /*yield*/, context.backendService.moduleManager.build(moduleRepositoryItem)];
                            case 2:
                                resultBuild = _a.sent();
                                res.send([resultInstall, resultBuild]);
                                return [3 /*break*/, 4];
                            case 3:
                                res.sendStatus(404);
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.updateModule, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var moduleRepositoryItem, results, resultUpdate, resultInstall, resultBuild;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('ModuleController.update');
                                moduleRepositoryItem = context.backendService.moduleManager.get(req.params.moduleName);
                                if (!moduleRepositoryItem) return [3 /*break*/, 5];
                                results = [];
                                if (!moduleRepositoryItem.hasUpdate) return [3 /*break*/, 4];
                                return [4 /*yield*/, context.backendService.moduleManager.update(moduleRepositoryItem)];
                            case 1:
                                resultUpdate = _a.sent();
                                results.push(resultUpdate);
                                return [4 /*yield*/, context.backendService.moduleManager.install(moduleRepositoryItem)];
                            case 2:
                                resultInstall = _a.sent();
                                results.push(resultInstall);
                                return [4 /*yield*/, context.backendService.moduleManager.build(moduleRepositoryItem)];
                            case 3:
                                resultBuild = _a.sent();
                                results.push(resultBuild);
                                _a.label = 4;
                            case 4:
                                res.send(results);
                                return [3 /*break*/, 6];
                            case 5:
                                res.sendStatus(404);
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return ModuleController;
}());

var ServiceController = /** @class */ (function () {
    function ServiceController() {
    }
    ServiceController.prototype.start = function (context) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('ServiceController.start');
                registerRoute(context.moduleApiRouter, routes.getServices, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var result, serviceInfos;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('ServiceController.getAll');
                                return [4 /*yield*/, context.backendService.serviceRepository.getAll()];
                            case 1:
                                result = _a.sent();
                                serviceInfos = result.map(function (item) {
                                    var instance = item.instance, service = item.service, serviceInfo = __rest(item, ["instance", "service"]);
                                    return serviceInfo;
                                });
                                res.send(serviceInfos);
                                return [2 /*return*/];
                        }
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.getServiceOptions, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        console.log('ServiceController.getServiceOptions');
                        result = context.backendService.serviceManager.getOptions(req.params.moduleName, req.params.serviceName);
                        res.send(result);
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.setServiceOptions, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('ServiceController.setServiceOptions');
                                return [4 /*yield*/, context.backendService.serviceManager.setOptions(req.params.moduleName, req.params.serviceName, req.body)];
                            case 1:
                                _a.sent();
                                res.sendStatus(204);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return ServiceController;
}());

var SettingsController = /** @class */ (function () {
    function SettingsController() {
    }
    SettingsController.prototype.start = function (context) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('SettingsController.start');
                registerRoute(context.moduleApiRouter, routes.getSettings, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('SettingsController.get');
                                return [4 /*yield*/, context.backendService.settings.get()];
                            case 1:
                                result = _a.sent();
                                res.send(result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.setSettings, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('SettingsController.set');
                        context.backendService.settings.set(req.body);
                        res.sendStatus(204);
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return SettingsController;
}());

var WebComponentController = /** @class */ (function () {
    function WebComponentController() {
    }
    WebComponentController.prototype.start = function (context) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('WebComponentController.start');
                registerRoute(context.moduleApiRouter, routes.getWebComponentOptions, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        console.log('WebComponentController.getAll');
                        result = context.backendService.webComponentsManager.getAll();
                        res.send(result);
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.setWebComponentOptions, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var item;
                    return __generator(this, function (_a) {
                        console.log('WebComponentController.createOrUpdate');
                        item = context.backendService.webComponentsManager.createOrUpdate(req.body);
                        res.send(item);
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.deleteWebComponentOptions, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('WebComponentController.remove');
                        context.backendService.webComponentsManager.remove(req.params.id);
                        res.sendStatus(204);
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return WebComponentController;
}());

var WebPageController = /** @class */ (function () {
    function WebPageController() {
    }
    WebPageController.prototype.start = function (context) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('WebPageController.start');
                registerRoute(context.moduleApiRouter, routes.getWebPages, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        console.log('WebPageController.getAll');
                        result = context.backendService.webPageManager.getAll();
                        res.send(result);
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.setWebPage, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    var item;
                    return __generator(this, function (_a) {
                        console.log('WebPageController.createOrUpdate');
                        item = context.backendService.webPageManager.createOrUpdate(req.body);
                        res.send(item);
                        return [2 /*return*/];
                    });
                }); });
                registerRoute(context.moduleApiRouter, routes.deleteWebPage, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('WebPageController.remove');
                        context.backendService.webPageManager.remove(req.params.id);
                        res.sendStatus(204);
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return WebPageController;
}());

var services = [{
        name: 'ModuleController',
        displayName: 'Modules API',
        description: 'API Controller for Modules',
        service: ModuleController
    }, {
        name: 'ServiceController',
        displayName: 'Service API',
        description: 'API Controller for Services',
        service: ServiceController
    }, {
        name: 'WebPageController',
        displayName: 'WebPages API',
        description: 'API Controller for WebPages',
        service: WebPageController
    }, {
        name: 'WebComponentController',
        displayName: 'WebComponents API',
        description: 'API Controller for WebComponents',
        service: WebComponentController
    }, {
        name: 'SettingsController',
        displayName: 'SystemSettings API',
        description: 'API Controller for SystemSettings',
        service: SettingsController
    }, {
        name: 'AppController',
        displayName: 'Application API',
        description: 'API Controller for Application',
        service: AppController
    }];

exports.services = services;
//# sourceMappingURL=bundle.server.js.map
