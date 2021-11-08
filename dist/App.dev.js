"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

var _LoginScreen = _interopRequireDefault(require("./screens/LoginScreen"));

var _ChatScreen = _interopRequireDefault(require("./screens/ChatScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AppNavigator = (0, _reactNavigationStack.createStackNavigator)({
  Login: _LoginScreen["default"],
  Chat: _ChatScreen["default"]
}, {
  headerMode: "none"
});

var _default = (0, _reactNavigation.createAppContainer)(AppNavigator);

exports["default"] = _default;
//# sourceMappingURL=App.dev.js.map
