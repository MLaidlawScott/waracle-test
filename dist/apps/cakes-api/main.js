(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/cakes-api/src/app/app.controller.ts":
/*!**************************************************!*\
  !*** ./apps/cakes-api/src/app/app.controller.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppController = class AppController {
    healthCheck() {
        return 'OK!';
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "healthCheck", null);
AppController = tslib_1.__decorate([
    common_1.Controller()
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/cakes-api/src/app/app.module.ts":
/*!**********************************************!*\
  !*** ./apps/cakes-api/src/app/app.module.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_client_1 = __webpack_require__(/*! @waracle-test/prisma-client */ "./libs/prisma-client/src/index.ts");
const serve_static_1 = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static"); // <- INSERT LINE
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/cakes-api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/cakes-api/src/app/app.service.ts");
const cakes_module_1 = __webpack_require__(/*! ../modules/cakes/cakes.module */ "./apps/cakes-api/src/modules/cakes/cakes.module.ts");
const path_1 = __webpack_require__(/*! path */ "path");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'cakes-web'),
                exclude: ['/api'],
            }),
            cakes_module_1.CakesModule,
            prisma_client_1.PrismaClientModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/cakes-api/src/app/app.service.ts":
/*!***********************************************!*\
  !*** ./apps/cakes-api/src/app/app.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to cakes-api!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/cakes-api/src/main.ts":
/*!************************************!*\
  !*** ./apps/cakes-api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/cakes-api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./apps/cakes-api/src/modules/cakes/cakes.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/cakes-api/src/modules/cakes/cakes.controller.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakesController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const models_1 = __webpack_require__(/*! @waracle-test/models */ "./libs/models/src/index.ts");
const cakes_service_1 = __webpack_require__(/*! ./cakes.service */ "./apps/cakes-api/src/modules/cakes/cakes.service.ts");
let CakesController = class CakesController {
    constructor(cakesService) {
        this.cakesService = cakesService;
    }
    create(createCakeDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.cakesService.create(createCakeDto);
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.cakesService.findAll();
        });
    }
    remove(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.cakesService.delete(id);
        });
    }
};
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof models_1.Cake !== "undefined" && models_1.Cake) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CakesController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CakesController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CakesController.prototype, "remove", null);
CakesController = tslib_1.__decorate([
    common_1.Controller('cakes'),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof cakes_service_1.CakesService !== "undefined" && cakes_service_1.CakesService) === "function" ? _b : Object])
], CakesController);
exports.CakesController = CakesController;


/***/ }),

/***/ "./apps/cakes-api/src/modules/cakes/cakes.module.ts":
/*!**********************************************************!*\
  !*** ./apps/cakes-api/src/modules/cakes/cakes.module.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CakesModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cakes_controller_1 = __webpack_require__(/*! ./cakes.controller */ "./apps/cakes-api/src/modules/cakes/cakes.controller.ts");
const cakes_service_1 = __webpack_require__(/*! ./cakes.service */ "./apps/cakes-api/src/modules/cakes/cakes.service.ts");
let CakesModule = class CakesModule {
};
CakesModule = tslib_1.__decorate([
    common_1.Module({
        imports: [],
        controllers: [cakes_controller_1.CakesController],
        providers: [cakes_service_1.CakesService],
    })
], CakesModule);
exports.CakesModule = CakesModule;


/***/ }),

/***/ "./apps/cakes-api/src/modules/cakes/cakes.service.ts":
/*!***********************************************************!*\
  !*** ./apps/cakes-api/src/modules/cakes/cakes.service.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakesService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_client_1 = __webpack_require__(/*! @waracle-test/prisma-client */ "./libs/prisma-client/src/index.ts");
let CakesService = class CakesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.cake.findMany();
        });
    }
    create(cake) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.cake.create({
                data: Object.assign(Object.assign({}, cake), { yumFactor: Number(cake.yumFactor) }),
            });
        });
    }
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.cake.delete({
                where: {
                    id: Number(id),
                },
            });
        });
    }
};
CakesService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_client_1.PrismaClientService !== "undefined" && prisma_client_1.PrismaClientService) === "function" ? _a : Object])
], CakesService);
exports.CakesService = CakesService;


/***/ }),

/***/ "./libs/models/src/index.ts":
/*!**********************************!*\
  !*** ./libs/models/src/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/cake */ "./libs/models/src/lib/cake.ts"), exports);


/***/ }),

/***/ "./libs/models/src/lib/cake.ts":
/*!*************************************!*\
  !*** ./libs/models/src/lib/cake.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./libs/prisma-client/src/index.ts":
/*!*****************************************!*\
  !*** ./libs/prisma-client/src/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/prisma-client.module */ "./libs/prisma-client/src/lib/prisma-client.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/prisma-client.service */ "./libs/prisma-client/src/lib/prisma-client.service.ts"), exports);


/***/ }),

/***/ "./libs/prisma-client/src/lib/prisma-client.module.ts":
/*!************************************************************!*\
  !*** ./libs/prisma-client/src/lib/prisma-client.module.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_client_service_1 = __webpack_require__(/*! ./prisma-client.service */ "./libs/prisma-client/src/lib/prisma-client.service.ts");
let PrismaClientModule = class PrismaClientModule {
};
PrismaClientModule = tslib_1.__decorate([
    common_1.Global(),
    common_1.Module({
        providers: [prisma_client_service_1.PrismaClientService],
        exports: [prisma_client_service_1.PrismaClientService],
    })
], PrismaClientModule);
exports.PrismaClientModule = PrismaClientModule;


/***/ }),

/***/ "./libs/prisma-client/src/lib/prisma-client.service.ts":
/*!*************************************************************!*\
  !*** ./libs/prisma-client/src/lib/prisma-client.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaClientService = class PrismaClientService extends client_1.PrismaClient {
    onModuleInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.$connect();
        });
    }
    onModuleDestroy() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.$disconnect();
        });
    }
    enableShutdownHooks(app) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.$on('beforeExit', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield app.close();
            }));
        });
    }
};
PrismaClientService = tslib_1.__decorate([
    common_1.Injectable()
], PrismaClientService);
exports.PrismaClientService = PrismaClientService;


/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./apps/cakes-api/src/main.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Michael\Documents\Developement\waracle-test\apps\cakes-api\src\main.ts */"./apps/cakes-api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map