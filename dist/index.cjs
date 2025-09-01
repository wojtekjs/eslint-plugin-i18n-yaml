"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs
var require_eslint_visitor_keys = __commonJS({
  "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var KEYS = {
      ArrayExpression: [
        "elements"
      ],
      ArrayPattern: [
        "elements"
      ],
      ArrowFunctionExpression: [
        "params",
        "body"
      ],
      AssignmentExpression: [
        "left",
        "right"
      ],
      AssignmentPattern: [
        "left",
        "right"
      ],
      AwaitExpression: [
        "argument"
      ],
      BinaryExpression: [
        "left",
        "right"
      ],
      BlockStatement: [
        "body"
      ],
      BreakStatement: [
        "label"
      ],
      CallExpression: [
        "callee",
        "arguments"
      ],
      CatchClause: [
        "param",
        "body"
      ],
      ChainExpression: [
        "expression"
      ],
      ClassBody: [
        "body"
      ],
      ClassDeclaration: [
        "id",
        "superClass",
        "body"
      ],
      ClassExpression: [
        "id",
        "superClass",
        "body"
      ],
      ConditionalExpression: [
        "test",
        "consequent",
        "alternate"
      ],
      ContinueStatement: [
        "label"
      ],
      DebuggerStatement: [],
      DoWhileStatement: [
        "body",
        "test"
      ],
      EmptyStatement: [],
      ExperimentalRestProperty: [
        "argument"
      ],
      ExperimentalSpreadProperty: [
        "argument"
      ],
      ExportAllDeclaration: [
        "exported",
        "source"
      ],
      ExportDefaultDeclaration: [
        "declaration"
      ],
      ExportNamedDeclaration: [
        "declaration",
        "specifiers",
        "source"
      ],
      ExportSpecifier: [
        "exported",
        "local"
      ],
      ExpressionStatement: [
        "expression"
      ],
      ForInStatement: [
        "left",
        "right",
        "body"
      ],
      ForOfStatement: [
        "left",
        "right",
        "body"
      ],
      ForStatement: [
        "init",
        "test",
        "update",
        "body"
      ],
      FunctionDeclaration: [
        "id",
        "params",
        "body"
      ],
      FunctionExpression: [
        "id",
        "params",
        "body"
      ],
      Identifier: [],
      IfStatement: [
        "test",
        "consequent",
        "alternate"
      ],
      ImportDeclaration: [
        "specifiers",
        "source"
      ],
      ImportDefaultSpecifier: [
        "local"
      ],
      ImportExpression: [
        "source"
      ],
      ImportNamespaceSpecifier: [
        "local"
      ],
      ImportSpecifier: [
        "imported",
        "local"
      ],
      JSXAttribute: [
        "name",
        "value"
      ],
      JSXClosingElement: [
        "name"
      ],
      JSXClosingFragment: [],
      JSXElement: [
        "openingElement",
        "children",
        "closingElement"
      ],
      JSXEmptyExpression: [],
      JSXExpressionContainer: [
        "expression"
      ],
      JSXFragment: [
        "openingFragment",
        "children",
        "closingFragment"
      ],
      JSXIdentifier: [],
      JSXMemberExpression: [
        "object",
        "property"
      ],
      JSXNamespacedName: [
        "namespace",
        "name"
      ],
      JSXOpeningElement: [
        "name",
        "attributes"
      ],
      JSXOpeningFragment: [],
      JSXSpreadAttribute: [
        "argument"
      ],
      JSXSpreadChild: [
        "expression"
      ],
      JSXText: [],
      LabeledStatement: [
        "label",
        "body"
      ],
      Literal: [],
      LogicalExpression: [
        "left",
        "right"
      ],
      MemberExpression: [
        "object",
        "property"
      ],
      MetaProperty: [
        "meta",
        "property"
      ],
      MethodDefinition: [
        "key",
        "value"
      ],
      NewExpression: [
        "callee",
        "arguments"
      ],
      ObjectExpression: [
        "properties"
      ],
      ObjectPattern: [
        "properties"
      ],
      PrivateIdentifier: [],
      Program: [
        "body"
      ],
      Property: [
        "key",
        "value"
      ],
      PropertyDefinition: [
        "key",
        "value"
      ],
      RestElement: [
        "argument"
      ],
      ReturnStatement: [
        "argument"
      ],
      SequenceExpression: [
        "expressions"
      ],
      SpreadElement: [
        "argument"
      ],
      StaticBlock: [
        "body"
      ],
      Super: [],
      SwitchCase: [
        "test",
        "consequent"
      ],
      SwitchStatement: [
        "discriminant",
        "cases"
      ],
      TaggedTemplateExpression: [
        "tag",
        "quasi"
      ],
      TemplateElement: [],
      TemplateLiteral: [
        "quasis",
        "expressions"
      ],
      ThisExpression: [],
      ThrowStatement: [
        "argument"
      ],
      TryStatement: [
        "block",
        "handler",
        "finalizer"
      ],
      UnaryExpression: [
        "argument"
      ],
      UpdateExpression: [
        "argument"
      ],
      VariableDeclaration: [
        "declarations"
      ],
      VariableDeclarator: [
        "id",
        "init"
      ],
      WhileStatement: [
        "test",
        "body"
      ],
      WithStatement: [
        "object",
        "body"
      ],
      YieldExpression: [
        "argument"
      ]
    };
    var NODE_TYPES = Object.keys(KEYS);
    for (const type of NODE_TYPES) {
      Object.freeze(KEYS[type]);
    }
    Object.freeze(KEYS);
    var KEY_BLACKLIST = /* @__PURE__ */ new Set([
      "parent",
      "leadingComments",
      "trailingComments"
    ]);
    function filterKey(key) {
      return !KEY_BLACKLIST.has(key) && key[0] !== "_";
    }
    function getKeys(node) {
      return Object.keys(node).filter(filterKey);
    }
    function unionWith(additionalKeys) {
      const retv = (
        /** @type {{
            [type: string]: ReadonlyArray<string>
        }} */
        Object.assign({}, KEYS)
      );
      for (const type of Object.keys(additionalKeys)) {
        if (Object.prototype.hasOwnProperty.call(retv, type)) {
          const keys = new Set(additionalKeys[type]);
          for (const key of retv[type]) {
            keys.add(key);
          }
          retv[type] = Object.freeze(Array.from(keys));
        } else {
          retv[type] = Object.freeze(Array.from(additionalKeys[type]));
        }
      }
      return Object.freeze(retv);
    }
    exports2.KEYS = KEYS;
    exports2.getKeys = getKeys;
    exports2.unionWith = unionWith;
  }
});

// node_modules/@eslint-community/eslint-utils/index.js
var require_eslint_utils = __commonJS({
  "node_modules/@eslint-community/eslint-utils/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var eslintVisitorKeys = require_eslint_visitor_keys();
    function getInnermostScope(initialScope, node) {
      const location = (
        /** @type {[number, number]} */
        node.range[0]
      );
      let scope = initialScope;
      let found = false;
      do {
        found = false;
        for (const childScope of scope.childScopes) {
          const range = (
            /** @type {[number, number]} */
            childScope.block.range
          );
          if (range[0] <= location && location < range[1]) {
            scope = childScope;
            found = true;
            break;
          }
        }
      } while (found);
      return scope;
    }
    function findVariable(initialScope, nameOrNode) {
      let name = "";
      let scope = initialScope;
      if (typeof nameOrNode === "string") {
        name = nameOrNode;
      } else {
        name = nameOrNode.name;
        scope = getInnermostScope(scope, nameOrNode);
      }
      while (scope != null) {
        const variable = scope.set.get(name);
        if (variable != null) {
          return variable;
        }
        scope = scope.upper;
      }
      return null;
    }
    function negate(f) {
      return (token) => !f(token);
    }
    function isPunctuatorTokenWithValue(token, value) {
      return token.type === "Punctuator" && token.value === value;
    }
    function isArrowToken(token) {
      return isPunctuatorTokenWithValue(token, "=>");
    }
    function isCommaToken(token) {
      return isPunctuatorTokenWithValue(token, ",");
    }
    function isSemicolonToken(token) {
      return isPunctuatorTokenWithValue(token, ";");
    }
    function isColonToken(token) {
      return isPunctuatorTokenWithValue(token, ":");
    }
    function isOpeningParenToken(token) {
      return isPunctuatorTokenWithValue(token, "(");
    }
    function isClosingParenToken(token) {
      return isPunctuatorTokenWithValue(token, ")");
    }
    function isOpeningBracketToken(token) {
      return isPunctuatorTokenWithValue(token, "[");
    }
    function isClosingBracketToken(token) {
      return isPunctuatorTokenWithValue(token, "]");
    }
    function isOpeningBraceToken(token) {
      return isPunctuatorTokenWithValue(token, "{");
    }
    function isClosingBraceToken(token) {
      return isPunctuatorTokenWithValue(token, "}");
    }
    function isCommentToken(token) {
      return ["Block", "Line", "Shebang"].includes(token.type);
    }
    var isNotArrowToken = negate(isArrowToken);
    var isNotCommaToken = negate(isCommaToken);
    var isNotSemicolonToken = negate(isSemicolonToken);
    var isNotColonToken = negate(isColonToken);
    var isNotOpeningParenToken = negate(isOpeningParenToken);
    var isNotClosingParenToken = negate(isClosingParenToken);
    var isNotOpeningBracketToken = negate(isOpeningBracketToken);
    var isNotClosingBracketToken = negate(isClosingBracketToken);
    var isNotOpeningBraceToken = negate(isOpeningBraceToken);
    var isNotClosingBraceToken = negate(isClosingBraceToken);
    var isNotCommentToken = negate(isCommentToken);
    function getOpeningParenOfParams(node, sourceCode) {
      return node.id ? (
        /** @type {Token} */
        sourceCode.getTokenAfter(node.id, isOpeningParenToken)
      ) : (
        /** @type {Token} */
        sourceCode.getFirstToken(node, isOpeningParenToken)
      );
    }
    function getFunctionHeadLocation(node, sourceCode) {
      const parent = (
        /** @type {RuleNode} */
        node.parent
      );
      let start = null;
      let end = null;
      if (node.type === "ArrowFunctionExpression") {
        const arrowToken = (
          /** @type {Token} */
          sourceCode.getTokenBefore(node.body, isArrowToken)
        );
        start = arrowToken.loc.start;
        end = arrowToken.loc.end;
      } else if (parent.type === "Property" || parent.type === "MethodDefinition" || parent.type === "PropertyDefinition") {
        start = /** @type {SourceLocation} */
        parent.loc.start;
        end = getOpeningParenOfParams(node, sourceCode).loc.start;
      } else {
        start = /** @type {SourceLocation} */
        node.loc.start;
        end = getOpeningParenOfParams(node, sourceCode).loc.start;
      }
      return {
        start: { ...start },
        end: { ...end }
      };
    }
    var globalObject = typeof globalThis !== "undefined" ? globalThis : (
      // @ts-ignore
      typeof self !== "undefined" ? (
        // @ts-ignore
        self
      ) : (
        // @ts-ignore
        typeof window !== "undefined" ? (
          // @ts-ignore
          window
        ) : typeof global !== "undefined" ? global : {}
      )
    );
    var builtinNames = Object.freeze(
      /* @__PURE__ */ new Set([
        "Array",
        "ArrayBuffer",
        "BigInt",
        "BigInt64Array",
        "BigUint64Array",
        "Boolean",
        "DataView",
        "Date",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "Float32Array",
        "Float64Array",
        "Function",
        "Infinity",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "isFinite",
        "isNaN",
        "isPrototypeOf",
        "JSON",
        "Map",
        "Math",
        "NaN",
        "Number",
        "Object",
        "parseFloat",
        "parseInt",
        "Promise",
        "Proxy",
        "Reflect",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "undefined",
        "unescape",
        "WeakMap",
        "WeakSet"
      ])
    );
    var callAllowed = new Set(
      [
        Array.isArray,
        Array.of,
        Array.prototype.at,
        Array.prototype.concat,
        Array.prototype.entries,
        Array.prototype.every,
        Array.prototype.filter,
        Array.prototype.find,
        Array.prototype.findIndex,
        Array.prototype.flat,
        Array.prototype.includes,
        Array.prototype.indexOf,
        Array.prototype.join,
        Array.prototype.keys,
        Array.prototype.lastIndexOf,
        Array.prototype.slice,
        Array.prototype.some,
        Array.prototype.toString,
        Array.prototype.values,
        typeof BigInt === "function" ? BigInt : void 0,
        Boolean,
        Date,
        Date.parse,
        decodeURI,
        decodeURIComponent,
        encodeURI,
        encodeURIComponent,
        escape,
        isFinite,
        isNaN,
        // @ts-ignore
        isPrototypeOf,
        Map,
        Map.prototype.entries,
        Map.prototype.get,
        Map.prototype.has,
        Map.prototype.keys,
        Map.prototype.values,
        .../** @type {(keyof typeof Math)[]} */
        Object.getOwnPropertyNames(Math).filter((k) => k !== "random").map((k) => Math[k]).filter((f) => typeof f === "function"),
        Number,
        Number.isFinite,
        Number.isNaN,
        Number.parseFloat,
        Number.parseInt,
        Number.prototype.toExponential,
        Number.prototype.toFixed,
        Number.prototype.toPrecision,
        Number.prototype.toString,
        Object,
        Object.entries,
        Object.is,
        Object.isExtensible,
        Object.isFrozen,
        Object.isSealed,
        Object.keys,
        Object.values,
        parseFloat,
        parseInt,
        RegExp,
        Set,
        Set.prototype.entries,
        Set.prototype.has,
        Set.prototype.keys,
        Set.prototype.values,
        String,
        String.fromCharCode,
        String.fromCodePoint,
        String.raw,
        String.prototype.at,
        String.prototype.charAt,
        String.prototype.charCodeAt,
        String.prototype.codePointAt,
        String.prototype.concat,
        String.prototype.endsWith,
        String.prototype.includes,
        String.prototype.indexOf,
        String.prototype.lastIndexOf,
        String.prototype.normalize,
        String.prototype.padEnd,
        String.prototype.padStart,
        String.prototype.slice,
        String.prototype.startsWith,
        String.prototype.substr,
        String.prototype.substring,
        String.prototype.toLowerCase,
        String.prototype.toString,
        String.prototype.toUpperCase,
        String.prototype.trim,
        String.prototype.trimEnd,
        String.prototype.trimLeft,
        String.prototype.trimRight,
        String.prototype.trimStart,
        Symbol.for,
        Symbol.keyFor,
        unescape
      ].filter((f) => typeof f === "function")
    );
    var callPassThrough = /* @__PURE__ */ new Set([
      Object.freeze,
      Object.preventExtensions,
      Object.seal
    ]);
    var getterAllowed = [
      [Map, /* @__PURE__ */ new Set(["size"])],
      [
        RegExp,
        /* @__PURE__ */ new Set([
          "dotAll",
          "flags",
          "global",
          "hasIndices",
          "ignoreCase",
          "multiline",
          "source",
          "sticky",
          "unicode"
        ])
      ],
      [Set, /* @__PURE__ */ new Set(["size"])]
    ];
    function getPropertyDescriptor(object, name) {
      let x = object;
      while ((typeof x === "object" || typeof x === "function") && x !== null) {
        const d = Object.getOwnPropertyDescriptor(x, name);
        if (d) {
          return d;
        }
        x = Object.getPrototypeOf(x);
      }
      return null;
    }
    function isGetter(object, name) {
      const d = getPropertyDescriptor(object, name);
      return d != null && d.get != null;
    }
    function getElementValues(nodeList, initialScope) {
      const valueList = [];
      for (let i = 0; i < nodeList.length; ++i) {
        const elementNode = nodeList[i];
        if (elementNode == null) {
          valueList.length = i + 1;
        } else if (elementNode.type === "SpreadElement") {
          const argument = getStaticValueR(elementNode.argument, initialScope);
          if (argument == null) {
            return null;
          }
          valueList.push(.../** @type {Iterable<any>} */
          argument.value);
        } else {
          const element = getStaticValueR(elementNode, initialScope);
          if (element == null) {
            return null;
          }
          valueList.push(element.value);
        }
      }
      return valueList;
    }
    function isEffectivelyConst(variable) {
      const refs = variable.references;
      const inits = refs.filter((r) => r.init).length;
      const reads = refs.filter((r) => r.isReadOnly()).length;
      if (inits === 1 && reads + inits === refs.length) {
        return true;
      }
      return false;
    }
    var operations = Object.freeze({
      ArrayExpression(node, initialScope) {
        const elements = getElementValues(node.elements, initialScope);
        return elements != null ? { value: elements } : null;
      },
      AssignmentExpression(node, initialScope) {
        if (node.operator === "=") {
          return getStaticValueR(node.right, initialScope);
        }
        return null;
      },
      //eslint-disable-next-line complexity
      BinaryExpression(node, initialScope) {
        if (node.operator === "in" || node.operator === "instanceof") {
          return null;
        }
        const left = getStaticValueR(node.left, initialScope);
        const right = getStaticValueR(node.right, initialScope);
        if (left != null && right != null) {
          switch (node.operator) {
            case "==":
              return { value: left.value == right.value };
            //eslint-disable-line eqeqeq
            case "!=":
              return { value: left.value != right.value };
            //eslint-disable-line eqeqeq
            case "===":
              return { value: left.value === right.value };
            case "!==":
              return { value: left.value !== right.value };
            case "<":
              return {
                value: (
                  /** @type {any} */
                  left.value < /** @type {any} */
                  right.value
                )
              };
            case "<=":
              return {
                value: (
                  /** @type {any} */
                  left.value <= /** @type {any} */
                  right.value
                )
              };
            case ">":
              return {
                value: (
                  /** @type {any} */
                  left.value > /** @type {any} */
                  right.value
                )
              };
            case ">=":
              return {
                value: (
                  /** @type {any} */
                  left.value >= /** @type {any} */
                  right.value
                )
              };
            case "<<":
              return {
                value: (
                  /** @type {any} */
                  left.value << /** @type {any} */
                  right.value
                )
              };
            case ">>":
              return {
                value: (
                  /** @type {any} */
                  left.value >> /** @type {any} */
                  right.value
                )
              };
            case ">>>":
              return {
                value: (
                  /** @type {any} */
                  left.value >>> /** @type {any} */
                  right.value
                )
              };
            case "+":
              return {
                value: (
                  /** @type {any} */
                  left.value + /** @type {any} */
                  right.value
                )
              };
            case "-":
              return {
                value: (
                  /** @type {any} */
                  left.value - /** @type {any} */
                  right.value
                )
              };
            case "*":
              return {
                value: (
                  /** @type {any} */
                  left.value * /** @type {any} */
                  right.value
                )
              };
            case "/":
              return {
                value: (
                  /** @type {any} */
                  left.value / /** @type {any} */
                  right.value
                )
              };
            case "%":
              return {
                value: (
                  /** @type {any} */
                  left.value % /** @type {any} */
                  right.value
                )
              };
            case "**":
              return {
                value: (
                  /** @type {any} */
                  left.value ** /** @type {any} */
                  right.value
                )
              };
            case "|":
              return {
                value: (
                  /** @type {any} */
                  left.value | /** @type {any} */
                  right.value
                )
              };
            case "^":
              return {
                value: (
                  /** @type {any} */
                  left.value ^ /** @type {any} */
                  right.value
                )
              };
            case "&":
              return {
                value: (
                  /** @type {any} */
                  left.value & /** @type {any} */
                  right.value
                )
              };
          }
        }
        return null;
      },
      CallExpression(node, initialScope) {
        const calleeNode = node.callee;
        const args = getElementValues(node.arguments, initialScope);
        if (args != null) {
          if (calleeNode.type === "MemberExpression") {
            if (calleeNode.property.type === "PrivateIdentifier") {
              return null;
            }
            const object = getStaticValueR(calleeNode.object, initialScope);
            if (object != null) {
              if (object.value == null && (object.optional || node.optional)) {
                return { value: void 0, optional: true };
              }
              const property = getStaticPropertyNameValue(
                calleeNode,
                initialScope
              );
              if (property != null) {
                const receiver = (
                  /** @type {Record<PropertyKey, (...args: any[]) => any>} */
                  object.value
                );
                const methodName = (
                  /** @type {PropertyKey} */
                  property.value
                );
                if (callAllowed.has(receiver[methodName])) {
                  return {
                    value: receiver[methodName](...args)
                  };
                }
                if (callPassThrough.has(receiver[methodName])) {
                  return { value: args[0] };
                }
              }
            }
          } else {
            const callee = getStaticValueR(calleeNode, initialScope);
            if (callee != null) {
              if (callee.value == null && node.optional) {
                return { value: void 0, optional: true };
              }
              const func = (
                /** @type {(...args: any[]) => any} */
                callee.value
              );
              if (callAllowed.has(func)) {
                return { value: func(...args) };
              }
              if (callPassThrough.has(func)) {
                return { value: args[0] };
              }
            }
          }
        }
        return null;
      },
      ConditionalExpression(node, initialScope) {
        const test = getStaticValueR(node.test, initialScope);
        if (test != null) {
          return test.value ? getStaticValueR(node.consequent, initialScope) : getStaticValueR(node.alternate, initialScope);
        }
        return null;
      },
      ExpressionStatement(node, initialScope) {
        return getStaticValueR(node.expression, initialScope);
      },
      Identifier(node, initialScope) {
        if (initialScope != null) {
          const variable = findVariable(initialScope, node);
          if (variable != null && variable.defs.length === 0 && builtinNames.has(variable.name) && variable.name in globalObject) {
            return { value: globalObject[variable.name] };
          }
          if (variable != null && variable.defs.length === 1) {
            const def = variable.defs[0];
            if (def.parent && def.type === "Variable" && (def.parent.kind === "const" || isEffectivelyConst(variable)) && // TODO(mysticatea): don't support destructuring here.
            def.node.id.type === "Identifier") {
              return getStaticValueR(def.node.init, initialScope);
            }
          }
        }
        return null;
      },
      Literal(node) {
        const literal = (
          /** @type {Partial<Literal> & Partial<RegExpLiteral> & Partial<BigIntLiteral>} */
          node
        );
        if ((literal.regex != null || literal.bigint != null) && literal.value == null) {
          return null;
        }
        return { value: literal.value };
      },
      LogicalExpression(node, initialScope) {
        const left = getStaticValueR(node.left, initialScope);
        if (left != null) {
          if (node.operator === "||" && Boolean(left.value) === true || node.operator === "&&" && Boolean(left.value) === false || node.operator === "??" && left.value != null) {
            return left;
          }
          const right = getStaticValueR(node.right, initialScope);
          if (right != null) {
            return right;
          }
        }
        return null;
      },
      MemberExpression(node, initialScope) {
        if (node.property.type === "PrivateIdentifier") {
          return null;
        }
        const object = getStaticValueR(node.object, initialScope);
        if (object != null) {
          if (object.value == null && (object.optional || node.optional)) {
            return { value: void 0, optional: true };
          }
          const property = getStaticPropertyNameValue(node, initialScope);
          if (property != null) {
            if (!isGetter(
              /** @type {object} */
              object.value,
              /** @type {PropertyKey} */
              property.value
            )) {
              return {
                value: (
                  /** @type {Record<PropertyKey, unknown>} */
                  object.value[
                    /** @type {PropertyKey} */
                    property.value
                  ]
                )
              };
            }
            for (const [classFn, allowed] of getterAllowed) {
              if (object.value instanceof classFn && allowed.has(
                /** @type {string} */
                property.value
              )) {
                return {
                  value: (
                    /** @type {Record<PropertyKey, unknown>} */
                    object.value[
                      /** @type {PropertyKey} */
                      property.value
                    ]
                  )
                };
              }
            }
          }
        }
        return null;
      },
      ChainExpression(node, initialScope) {
        const expression = getStaticValueR(node.expression, initialScope);
        if (expression != null) {
          return { value: expression.value };
        }
        return null;
      },
      NewExpression(node, initialScope) {
        const callee = getStaticValueR(node.callee, initialScope);
        const args = getElementValues(node.arguments, initialScope);
        if (callee != null && args != null) {
          const Func = (
            /** @type {new (...args: any[]) => any} */
            callee.value
          );
          if (callAllowed.has(Func)) {
            return { value: new Func(...args) };
          }
        }
        return null;
      },
      ObjectExpression(node, initialScope) {
        const object = {};
        for (const propertyNode of node.properties) {
          if (propertyNode.type === "Property") {
            if (propertyNode.kind !== "init") {
              return null;
            }
            const key = getStaticPropertyNameValue(
              propertyNode,
              initialScope
            );
            const value = getStaticValueR(propertyNode.value, initialScope);
            if (key == null || value == null) {
              return null;
            }
            object[
              /** @type {PropertyKey} */
              key.value
            ] = value.value;
          } else if (propertyNode.type === "SpreadElement" || // @ts-expect-error -- Backward compatibility
          propertyNode.type === "ExperimentalSpreadProperty") {
            const argument = getStaticValueR(
              propertyNode.argument,
              initialScope
            );
            if (argument == null) {
              return null;
            }
            Object.assign(object, argument.value);
          } else {
            return null;
          }
        }
        return { value: object };
      },
      SequenceExpression(node, initialScope) {
        const last = node.expressions[node.expressions.length - 1];
        return getStaticValueR(last, initialScope);
      },
      TaggedTemplateExpression(node, initialScope) {
        const tag = getStaticValueR(node.tag, initialScope);
        const expressions = getElementValues(
          node.quasi.expressions,
          initialScope
        );
        if (tag != null && expressions != null) {
          const func = (
            /** @type {(...args: any[]) => any} */
            tag.value
          );
          const strings = node.quasi.quasis.map((q) => q.value.cooked);
          strings.raw = node.quasi.quasis.map((q) => q.value.raw);
          if (func === String.raw) {
            return { value: func(strings, ...expressions) };
          }
        }
        return null;
      },
      TemplateLiteral(node, initialScope) {
        const expressions = getElementValues(node.expressions, initialScope);
        if (expressions != null) {
          let value = node.quasis[0].value.cooked;
          for (let i = 0; i < expressions.length; ++i) {
            value += expressions[i];
            value += /** @type {string} */
            node.quasis[i + 1].value.cooked;
          }
          return { value };
        }
        return null;
      },
      UnaryExpression(node, initialScope) {
        if (node.operator === "delete") {
          return null;
        }
        if (node.operator === "void") {
          return { value: void 0 };
        }
        const arg = getStaticValueR(node.argument, initialScope);
        if (arg != null) {
          switch (node.operator) {
            case "-":
              return { value: -/** @type {any} */
              arg.value };
            case "+":
              return { value: +/** @type {any} */
              arg.value };
            //eslint-disable-line no-implicit-coercion
            case "!":
              return { value: !arg.value };
            case "~":
              return { value: ~/** @type {any} */
              arg.value };
            case "typeof":
              return { value: typeof arg.value };
          }
        }
        return null;
      },
      TSAsExpression(node, initialScope) {
        return getStaticValueR(node.expression, initialScope);
      },
      TSSatisfiesExpression(node, initialScope) {
        return getStaticValueR(node.expression, initialScope);
      },
      TSTypeAssertion(node, initialScope) {
        return getStaticValueR(node.expression, initialScope);
      },
      TSNonNullExpression(node, initialScope) {
        return getStaticValueR(node.expression, initialScope);
      },
      TSInstantiationExpression(node, initialScope) {
        return getStaticValueR(node.expression, initialScope);
      }
    });
    function getStaticValueR(node, initialScope) {
      if (node != null && Object.hasOwnProperty.call(operations, node.type)) {
        return (
          /** @type {VisitorCallback<any>} */
          operations[node.type](
            /** @type {TSESTreeNode} */
            node,
            initialScope
          )
        );
      }
      return null;
    }
    function getStaticPropertyNameValue(node, initialScope) {
      const nameNode = node.type === "Property" ? node.key : node.property;
      if (node.computed) {
        return getStaticValueR(nameNode, initialScope);
      }
      if (nameNode.type === "Identifier") {
        return { value: nameNode.name };
      }
      if (nameNode.type === "Literal") {
        if (
          /** @type {Partial<BigIntLiteral>} */
          nameNode.bigint
        ) {
          return { value: (
            /** @type {BigIntLiteral} */
            nameNode.bigint
          ) };
        }
        return { value: String(nameNode.value) };
      }
      return null;
    }
    function getStaticValue(node, initialScope = null) {
      try {
        return getStaticValueR(node, initialScope);
      } catch (_error) {
        return null;
      }
    }
    function getStringIfConstant(node, initialScope = null) {
      if (node && node.type === "Literal" && node.value === null) {
        const literal = (
          /** @type {Partial<SimpleLiteral> & Partial<RegExpLiteral> & Partial<BigIntLiteral>} */
          node
        );
        if (literal.regex) {
          return `/${literal.regex.pattern}/${literal.regex.flags}`;
        }
        if (literal.bigint) {
          return literal.bigint;
        }
      }
      const evaluated = getStaticValue(node, initialScope);
      if (evaluated) {
        try {
          return String(evaluated.value);
        } catch {
        }
      }
      return null;
    }
    function getPropertyName(node, initialScope) {
      switch (node.type) {
        case "MemberExpression":
          if (node.computed) {
            return getStringIfConstant(node.property, initialScope);
          }
          if (node.property.type === "PrivateIdentifier") {
            return null;
          }
          return (
            /** @type {Partial<Identifier>} */
            node.property.name
          );
        case "Property":
        case "MethodDefinition":
        case "PropertyDefinition":
          if (node.computed) {
            return getStringIfConstant(node.key, initialScope);
          }
          if (node.key.type === "Literal") {
            return String(node.key.value);
          }
          if (node.key.type === "PrivateIdentifier") {
            return null;
          }
          return (
            /** @type {Partial<Identifier>} */
            node.key.name
          );
      }
      return null;
    }
    function getFunctionNameWithKind(node, sourceCode) {
      const parent = (
        /** @type {RuleNode} */
        node.parent
      );
      const tokens = [];
      const isObjectMethod = parent.type === "Property" && parent.value === node;
      const isClassMethod = parent.type === "MethodDefinition" && parent.value === node;
      const isClassFieldMethod = parent.type === "PropertyDefinition" && parent.value === node;
      if (isClassMethod || isClassFieldMethod) {
        if (parent.static) {
          tokens.push("static");
        }
        if (parent.key.type === "PrivateIdentifier") {
          tokens.push("private");
        }
      }
      if (node.async) {
        tokens.push("async");
      }
      if (node.generator) {
        tokens.push("generator");
      }
      if (isObjectMethod || isClassMethod) {
        if (parent.kind === "constructor") {
          return "constructor";
        }
        if (parent.kind === "get") {
          tokens.push("getter");
        } else if (parent.kind === "set") {
          tokens.push("setter");
        } else {
          tokens.push("method");
        }
      } else if (isClassFieldMethod) {
        tokens.push("method");
      } else {
        if (node.type === "ArrowFunctionExpression") {
          tokens.push("arrow");
        }
        tokens.push("function");
      }
      if (isObjectMethod || isClassMethod || isClassFieldMethod) {
        if (parent.key.type === "PrivateIdentifier") {
          tokens.push(`#${parent.key.name}`);
        } else {
          const name = getPropertyName(parent);
          if (name) {
            tokens.push(`'${name}'`);
          } else if (sourceCode) {
            const keyText = sourceCode.getText(parent.key);
            if (!keyText.includes("\n")) {
              tokens.push(`[${keyText}]`);
            }
          }
        }
      } else if (hasId(node)) {
        tokens.push(`'${node.id.name}'`);
      } else if (parent.type === "VariableDeclarator" && parent.id && parent.id.type === "Identifier") {
        tokens.push(`'${parent.id.name}'`);
      } else if ((parent.type === "AssignmentExpression" || parent.type === "AssignmentPattern") && parent.left && parent.left.type === "Identifier") {
        tokens.push(`'${parent.left.name}'`);
      } else if (parent.type === "ExportDefaultDeclaration" && parent.declaration === node) {
        tokens.push("'default'");
      }
      return tokens.join(" ");
    }
    function hasId(node) {
      return Boolean(
        /** @type {Partial<FunctionDeclaration | FunctionExpression>} */
        node.id
      );
    }
    var typeConversionBinaryOps = Object.freeze(
      /* @__PURE__ */ new Set([
        "==",
        "!=",
        "<",
        "<=",
        ">",
        ">=",
        "<<",
        ">>",
        ">>>",
        "+",
        "-",
        "*",
        "/",
        "%",
        "|",
        "^",
        "&",
        "in"
      ])
    );
    var typeConversionUnaryOps = Object.freeze(/* @__PURE__ */ new Set(["-", "+", "!", "~"]));
    function isNode(x) {
      return x !== null && typeof x === "object" && typeof x.type === "string";
    }
    var visitor = Object.freeze(
      Object.assign(/* @__PURE__ */ Object.create(null), {
        /**
         * @param {Node} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        $visit(node, options, visitorKeys) {
          const { type } = node;
          if (typeof /** @type {any} */
          this[type] === "function") {
            return (
              /** @type {any} */
              this[type](
                node,
                options,
                visitorKeys
              )
            );
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        /**
         * @param {Node} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        $visitChildren(node, options, visitorKeys) {
          const { type } = node;
          for (
            const key of
            /** @type {(keyof Node)[]} */
            visitorKeys[type] || eslintVisitorKeys.getKeys(node)
          ) {
            const value = node[key];
            if (Array.isArray(value)) {
              for (const element of value) {
                if (isNode(element) && this.$visit(element, options, visitorKeys)) {
                  return true;
                }
              }
            } else if (isNode(value) && this.$visit(value, options, visitorKeys)) {
              return true;
            }
          }
          return false;
        },
        ArrowFunctionExpression() {
          return false;
        },
        AssignmentExpression() {
          return true;
        },
        AwaitExpression() {
          return true;
        },
        /**
         * @param {BinaryExpression} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        BinaryExpression(node, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && typeConversionBinaryOps.has(node.operator) && (node.left.type !== "Literal" || node.right.type !== "Literal")) {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        CallExpression() {
          return true;
        },
        FunctionExpression() {
          return false;
        },
        ImportExpression() {
          return true;
        },
        /**
         * @param {MemberExpression} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        MemberExpression(node, options, visitorKeys) {
          if (options.considerGetters) {
            return true;
          }
          if (options.considerImplicitTypeConversion && node.computed && node.property.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        /**
         * @param {MethodDefinition} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        MethodDefinition(node, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node.computed && node.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        NewExpression() {
          return true;
        },
        /**
         * @param {Property} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        Property(node, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node.computed && node.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        /**
         * @param {PropertyDefinition} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        PropertyDefinition(node, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node.computed && node.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        /**
         * @param {UnaryExpression} node
         * @param {HasSideEffectOptions} options
         * @param {Record<string, string[]>} visitorKeys
         */
        UnaryExpression(node, options, visitorKeys) {
          if (node.operator === "delete") {
            return true;
          }
          if (options.considerImplicitTypeConversion && typeConversionUnaryOps.has(node.operator) && node.argument.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        UpdateExpression() {
          return true;
        },
        YieldExpression() {
          return true;
        }
      })
    );
    function hasSideEffect(node, sourceCode, options = {}) {
      const { considerGetters = false, considerImplicitTypeConversion = false } = options;
      return visitor.$visit(
        node,
        { considerGetters, considerImplicitTypeConversion },
        sourceCode.visitorKeys || eslintVisitorKeys.KEYS
      );
    }
    function getParentSyntaxParen(node, sourceCode) {
      const parent = (
        /** @type {RuleNode} */
        node.parent
      );
      switch (parent.type) {
        case "CallExpression":
        case "NewExpression":
          if (parent.arguments.length === 1 && parent.arguments[0] === node) {
            return sourceCode.getTokenAfter(
              parent.callee,
              isOpeningParenToken
            );
          }
          return null;
        case "DoWhileStatement":
          if (parent.test === node) {
            return sourceCode.getTokenAfter(
              parent.body,
              isOpeningParenToken
            );
          }
          return null;
        case "IfStatement":
        case "WhileStatement":
          if (parent.test === node) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "ImportExpression":
          if (parent.source === node) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "SwitchStatement":
          if (parent.discriminant === node) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "WithStatement":
          if (parent.object === node) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        default:
          return null;
      }
    }
    function isParenthesized(timesOrNode, nodeOrSourceCode, optionalSourceCode) {
      let times, node, sourceCode, maybeLeftParen, maybeRightParen;
      if (typeof timesOrNode === "number") {
        times = timesOrNode | 0;
        node = /** @type {RuleNode} */
        nodeOrSourceCode;
        sourceCode = /** @type {SourceCode} */
        optionalSourceCode;
        if (!(times >= 1)) {
          throw new TypeError("'times' should be a positive integer.");
        }
      } else {
        times = 1;
        node = /** @type {RuleNode} */
        timesOrNode;
        sourceCode = /** @type {SourceCode} */
        nodeOrSourceCode;
      }
      if (node == null || // `Program` can't be parenthesized
      node.parent == null || // `CatchClause.param` can't be parenthesized, example `try {} catch (error) {}`
      node.parent.type === "CatchClause" && node.parent.param === node) {
        return false;
      }
      maybeLeftParen = maybeRightParen = node;
      do {
        maybeLeftParen = sourceCode.getTokenBefore(maybeLeftParen);
        maybeRightParen = sourceCode.getTokenAfter(maybeRightParen);
      } while (maybeLeftParen != null && maybeRightParen != null && isOpeningParenToken(maybeLeftParen) && isClosingParenToken(maybeRightParen) && // Avoid false positive such as `if (a) {}`
      maybeLeftParen !== getParentSyntaxParen(node, sourceCode) && --times > 0);
      return times === 0;
    }
    var placeholder = /\$(?:[$&`']|[1-9][0-9]?)/gu;
    var internal = /* @__PURE__ */ new WeakMap();
    function isEscaped(str, index2) {
      let escaped = false;
      for (let i = index2 - 1; i >= 0 && str.charCodeAt(i) === 92; --i) {
        escaped = !escaped;
      }
      return escaped;
    }
    function replaceS(matcher, str, replacement) {
      const chunks = [];
      let index2 = 0;
      function replacer(key, match) {
        switch (key) {
          case "$$":
            return "$";
          case "$&":
            return match[0];
          case "$`":
            return str.slice(0, match.index);
          case "$'":
            return str.slice(match.index + match[0].length);
          default: {
            const i = key.slice(1);
            if (i in match) {
              return match[
                /** @type {any} */
                i
              ];
            }
            return key;
          }
        }
      }
      for (const match of matcher.execAll(str)) {
        chunks.push(str.slice(index2, match.index));
        chunks.push(
          replacement.replace(placeholder, (key) => replacer(key, match))
        );
        index2 = match.index + match[0].length;
      }
      chunks.push(str.slice(index2));
      return chunks.join("");
    }
    function replaceF(matcher, str, replace) {
      const chunks = [];
      let index2 = 0;
      for (const match of matcher.execAll(str)) {
        chunks.push(str.slice(index2, match.index));
        chunks.push(
          String(
            replace(
              .../** @type {[string, ...string[]]} */
              /** @type {string[]} */
              match,
              match.index,
              match.input
            )
          )
        );
        index2 = match.index + match[0].length;
      }
      chunks.push(str.slice(index2));
      return chunks.join("");
    }
    var PatternMatcher = class {
      /**
       * Initialize this matcher.
       * @param {RegExp} pattern The pattern to match.
       * @param {{escaped?:boolean}} [options] The options.
       */
      constructor(pattern, options = {}) {
        const { escaped = false } = options;
        if (!(pattern instanceof RegExp)) {
          throw new TypeError("'pattern' should be a RegExp instance.");
        }
        if (!pattern.flags.includes("g")) {
          throw new Error("'pattern' should contains 'g' flag.");
        }
        internal.set(this, {
          pattern: new RegExp(pattern.source, pattern.flags),
          escaped: Boolean(escaped)
        });
      }
      /**
       * Find the pattern in a given string.
       * @param {string} str The string to find.
       * @returns {IterableIterator<RegExpExecArray>} The iterator which iterate the matched information.
       */
      *execAll(str) {
        const { pattern, escaped } = (
          /** @type {{pattern:RegExp,escaped:boolean}} */
          internal.get(this)
        );
        let match = null;
        let lastIndex = 0;
        pattern.lastIndex = 0;
        while ((match = pattern.exec(str)) != null) {
          if (escaped || !isEscaped(str, match.index)) {
            lastIndex = pattern.lastIndex;
            yield match;
            pattern.lastIndex = lastIndex;
          }
        }
      }
      /**
       * Check whether the pattern is found in a given string.
       * @param {string} str The string to check.
       * @returns {boolean} `true` if the pattern was found in the string.
       */
      test(str) {
        const it = this.execAll(str);
        const ret = it.next();
        return !ret.done;
      }
      /**
       * Replace a given string.
       * @param {string} str The string to be replaced.
       * @param {(string|((...strs:string[])=>string))} replacer The string or function to replace. This is the same as the 2nd argument of `String.prototype.replace`.
       * @returns {string} The replaced string.
       */
      [Symbol.replace](str, replacer) {
        return typeof replacer === "function" ? replaceF(this, String(str), replacer) : replaceS(this, String(str), String(replacer));
      }
    };
    var IMPORT_TYPE = /^(?:Import|Export(?:All|Default|Named))Declaration$/u;
    function isHasSource(node) {
      return IMPORT_TYPE.test(node.type) && /** @type {ImportDeclaration|ExportAllDeclaration|ExportNamedDeclaration} */
      node.source != null;
    }
    var has = (
      /** @type {<T>(traceMap: TraceMap<unknown>, v: T) => v is (string extends T ? string : T)} */
      Function.call.bind(Object.hasOwnProperty)
    );
    var READ = Symbol("read");
    var CALL = Symbol("call");
    var CONSTRUCT = Symbol("construct");
    var ESM = Symbol("esm");
    var requireCall = { require: { [CALL]: true } };
    function isModifiedGlobal(variable) {
      return variable == null || variable.defs.length !== 0 || variable.references.some((r) => r.isWrite());
    }
    function isPassThrough(node) {
      const parent = (
        /** @type {TSESTreeNode} */
        node.parent
      );
      if (parent) {
        switch (parent.type) {
          case "ConditionalExpression":
            return parent.consequent === node || parent.alternate === node;
          case "LogicalExpression":
            return true;
          case "SequenceExpression":
            return parent.expressions[parent.expressions.length - 1] === node;
          case "ChainExpression":
            return true;
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSTypeAssertion":
          case "TSNonNullExpression":
          case "TSInstantiationExpression":
            return true;
          default:
            return false;
        }
      }
      return false;
    }
    var ReferenceTracker = class {
      /**
       * Initialize this tracker.
       * @param {Scope} globalScope The global scope.
       * @param {object} [options] The options.
       * @param {"legacy"|"strict"} [options.mode="strict"] The mode to determine the ImportDeclaration's behavior for CJS modules.
       * @param {string[]} [options.globalObjectNames=["global","globalThis","self","window"]] The variable names for Global Object.
       */
      constructor(globalScope, options = {}) {
        const {
          mode = "strict",
          globalObjectNames = ["global", "globalThis", "self", "window"]
        } = options;
        this.variableStack = [];
        this.globalScope = globalScope;
        this.mode = mode;
        this.globalObjectNames = globalObjectNames.slice(0);
      }
      /**
       * Iterate the references of global variables.
       * @template T
       * @param {TraceMap<T>} traceMap The trace map.
       * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
       */
      *iterateGlobalReferences(traceMap) {
        for (const key of Object.keys(traceMap)) {
          const nextTraceMap = traceMap[key];
          const path = [key];
          const variable = this.globalScope.set.get(key);
          if (isModifiedGlobal(variable)) {
            continue;
          }
          yield* this._iterateVariableReferences(
            /** @type {Variable} */
            variable,
            path,
            nextTraceMap,
            true
          );
        }
        for (const key of this.globalObjectNames) {
          const path = [];
          const variable = this.globalScope.set.get(key);
          if (isModifiedGlobal(variable)) {
            continue;
          }
          yield* this._iterateVariableReferences(
            /** @type {Variable} */
            variable,
            path,
            traceMap,
            false
          );
        }
      }
      /**
       * Iterate the references of CommonJS modules.
       * @template T
       * @param {TraceMap<T>} traceMap The trace map.
       * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
       */
      *iterateCjsReferences(traceMap) {
        for (const { node } of this.iterateGlobalReferences(requireCall)) {
          const key = getStringIfConstant(
            /** @type {CallExpression} */
            node.arguments[0]
          );
          if (key == null || !has(traceMap, key)) {
            continue;
          }
          const nextTraceMap = traceMap[key];
          const path = [key];
          if (nextTraceMap[READ]) {
            yield {
              node,
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
          yield* this._iteratePropertyReferences(
            /** @type {CallExpression} */
            node,
            path,
            nextTraceMap
          );
        }
      }
      /**
       * Iterate the references of ES modules.
       * @template T
       * @param {TraceMap<T>} traceMap The trace map.
       * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
       */
      *iterateEsmReferences(traceMap) {
        const programNode = (
          /** @type {Program} */
          this.globalScope.block
        );
        for (const node of programNode.body) {
          if (!isHasSource(node)) {
            continue;
          }
          const moduleId = (
            /** @type {string} */
            node.source.value
          );
          if (!has(traceMap, moduleId)) {
            continue;
          }
          const nextTraceMap = traceMap[moduleId];
          const path = [moduleId];
          if (nextTraceMap[READ]) {
            yield {
              // eslint-disable-next-line object-shorthand -- apply type
              node: (
                /** @type {RuleNode} */
                node
              ),
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
          if (node.type === "ExportAllDeclaration") {
            for (const key of Object.keys(nextTraceMap)) {
              const exportTraceMap = nextTraceMap[key];
              if (exportTraceMap[READ]) {
                yield {
                  // eslint-disable-next-line object-shorthand -- apply type
                  node: (
                    /** @type {RuleNode} */
                    node
                  ),
                  path: path.concat(key),
                  type: READ,
                  info: exportTraceMap[READ]
                };
              }
            }
          } else {
            for (const specifier of node.specifiers) {
              const esm = has(nextTraceMap, ESM);
              const it = this._iterateImportReferences(
                specifier,
                path,
                esm ? nextTraceMap : this.mode === "legacy" ? { default: nextTraceMap, ...nextTraceMap } : { default: nextTraceMap }
              );
              if (esm) {
                yield* it;
              } else {
                for (const report of it) {
                  report.path = report.path.filter(exceptDefault);
                  if (report.path.length >= 2 || report.type !== READ) {
                    yield report;
                  }
                }
              }
            }
          }
        }
      }
      /**
       * Iterate the property references for a given expression AST node.
       * @template T
       * @param {Expression} node The expression AST node to iterate property references.
       * @param {TraceMap<T>} traceMap The trace map.
       * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate property references.
       */
      *iteratePropertyReferences(node, traceMap) {
        yield* this._iteratePropertyReferences(node, [], traceMap);
      }
      /**
       * Iterate the references for a given variable.
       * @private
       * @template T
       * @param {Variable} variable The variable to iterate that references.
       * @param {string[]} path The current path.
       * @param {TraceMapObject<T>} traceMap The trace map.
       * @param {boolean} shouldReport = The flag to report those references.
       * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
       */
      *_iterateVariableReferences(variable, path, traceMap, shouldReport) {
        if (this.variableStack.includes(variable)) {
          return;
        }
        this.variableStack.push(variable);
        try {
          for (const reference of variable.references) {
            if (!reference.isRead()) {
              continue;
            }
            const node = (
              /** @type {RuleNode & Identifier} */
              reference.identifier
            );
            if (shouldReport && traceMap[READ]) {
              yield { node, path, type: READ, info: traceMap[READ] };
            }
            yield* this._iteratePropertyReferences(node, path, traceMap);
          }
        } finally {
          this.variableStack.pop();
        }
      }
      /**
       * Iterate the references for a given AST node.
       * @private
       * @template T
       * @param {Expression} rootNode The AST node to iterate references.
       * @param {string[]} path The current path.
       * @param {TraceMapObject<T>} traceMap The trace map.
       * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
       */
      //eslint-disable-next-line complexity
      *_iteratePropertyReferences(rootNode, path, traceMap) {
        let node = rootNode;
        while (isPassThrough(node)) {
          node = node.parent;
        }
        const parent = (
          /** @type {RuleNode} */
          node.parent
        );
        if (parent.type === "MemberExpression") {
          if (parent.object === node) {
            const key = getPropertyName(parent);
            if (key == null || !has(traceMap, key)) {
              return;
            }
            path = path.concat(key);
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
              yield {
                node: parent,
                path,
                type: READ,
                info: nextTraceMap[READ]
              };
            }
            yield* this._iteratePropertyReferences(
              parent,
              path,
              nextTraceMap
            );
          }
          return;
        }
        if (parent.type === "CallExpression") {
          if (parent.callee === node && traceMap[CALL]) {
            yield { node: parent, path, type: CALL, info: traceMap[CALL] };
          }
          return;
        }
        if (parent.type === "NewExpression") {
          if (parent.callee === node && traceMap[CONSTRUCT]) {
            yield {
              node: parent,
              path,
              type: CONSTRUCT,
              info: traceMap[CONSTRUCT]
            };
          }
          return;
        }
        if (parent.type === "AssignmentExpression") {
          if (parent.right === node) {
            yield* this._iterateLhsReferences(parent.left, path, traceMap);
            yield* this._iteratePropertyReferences(parent, path, traceMap);
          }
          return;
        }
        if (parent.type === "AssignmentPattern") {
          if (parent.right === node) {
            yield* this._iterateLhsReferences(parent.left, path, traceMap);
          }
          return;
        }
        if (parent.type === "VariableDeclarator") {
          if (parent.init === node) {
            yield* this._iterateLhsReferences(parent.id, path, traceMap);
          }
        }
      }
      /**
       * Iterate the references for a given Pattern node.
       * @private
       * @template T
       * @param {Pattern} patternNode The Pattern node to iterate references.
       * @param {string[]} path The current path.
       * @param {TraceMapObject<T>} traceMap The trace map.
       * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
       */
      *_iterateLhsReferences(patternNode, path, traceMap) {
        if (patternNode.type === "Identifier") {
          const variable = findVariable(this.globalScope, patternNode);
          if (variable != null) {
            yield* this._iterateVariableReferences(
              variable,
              path,
              traceMap,
              false
            );
          }
          return;
        }
        if (patternNode.type === "ObjectPattern") {
          for (const property of patternNode.properties) {
            const key = getPropertyName(
              /** @type {AssignmentProperty} */
              property
            );
            if (key == null || !has(traceMap, key)) {
              continue;
            }
            const nextPath = path.concat(key);
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
              yield {
                node: (
                  /** @type {RuleNode} */
                  property
                ),
                path: nextPath,
                type: READ,
                info: nextTraceMap[READ]
              };
            }
            yield* this._iterateLhsReferences(
              /** @type {AssignmentProperty} */
              property.value,
              nextPath,
              nextTraceMap
            );
          }
          return;
        }
        if (patternNode.type === "AssignmentPattern") {
          yield* this._iterateLhsReferences(patternNode.left, path, traceMap);
        }
      }
      /**
       * Iterate the references for a given ModuleSpecifier node.
       * @private
       * @template T
       * @param {ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ExportSpecifier} specifierNode The ModuleSpecifier node to iterate references.
       * @param {string[]} path The current path.
       * @param {TraceMapObject<T>} traceMap The trace map.
       * @returns {IterableIterator<TrackedReferences<T>>} The iterator to iterate references.
       */
      *_iterateImportReferences(specifierNode, path, traceMap) {
        const type = specifierNode.type;
        if (type === "ImportSpecifier" || type === "ImportDefaultSpecifier") {
          const key = type === "ImportDefaultSpecifier" ? "default" : specifierNode.imported.type === "Identifier" ? specifierNode.imported.name : specifierNode.imported.value;
          if (!has(traceMap, key)) {
            return;
          }
          path = path.concat(key);
          const nextTraceMap = traceMap[key];
          if (nextTraceMap[READ]) {
            yield {
              node: (
                /** @type {RuleNode} */
                specifierNode
              ),
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
          yield* this._iterateVariableReferences(
            /** @type {Variable} */
            findVariable(this.globalScope, specifierNode.local),
            path,
            nextTraceMap,
            false
          );
          return;
        }
        if (type === "ImportNamespaceSpecifier") {
          yield* this._iterateVariableReferences(
            /** @type {Variable} */
            findVariable(this.globalScope, specifierNode.local),
            path,
            traceMap,
            false
          );
          return;
        }
        if (type === "ExportSpecifier") {
          const key = specifierNode.local.type === "Identifier" ? specifierNode.local.name : specifierNode.local.value;
          if (!has(traceMap, key)) {
            return;
          }
          path = path.concat(key);
          const nextTraceMap = traceMap[key];
          if (nextTraceMap[READ]) {
            yield {
              node: (
                /** @type {RuleNode} */
                specifierNode
              ),
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
        }
      }
    };
    ReferenceTracker.READ = READ;
    ReferenceTracker.CALL = CALL;
    ReferenceTracker.CONSTRUCT = CONSTRUCT;
    ReferenceTracker.ESM = ESM;
    function exceptDefault(name, index2) {
      return !(index2 === 1 && name === "default");
    }
    var index = {
      CALL,
      CONSTRUCT,
      ESM,
      findVariable,
      getFunctionHeadLocation,
      getFunctionNameWithKind,
      getInnermostScope,
      getPropertyName,
      getStaticValue,
      getStringIfConstant,
      hasSideEffect,
      isArrowToken,
      isClosingBraceToken,
      isClosingBracketToken,
      isClosingParenToken,
      isColonToken,
      isCommaToken,
      isCommentToken,
      isNotArrowToken,
      isNotClosingBraceToken,
      isNotClosingBracketToken,
      isNotClosingParenToken,
      isNotColonToken,
      isNotCommaToken,
      isNotCommentToken,
      isNotOpeningBraceToken,
      isNotOpeningBracketToken,
      isNotOpeningParenToken,
      isNotSemicolonToken,
      isOpeningBraceToken,
      isOpeningBracketToken,
      isOpeningParenToken,
      isParenthesized,
      isSemicolonToken,
      PatternMatcher,
      READ,
      ReferenceTracker
    };
    exports2.CALL = CALL;
    exports2.CONSTRUCT = CONSTRUCT;
    exports2.ESM = ESM;
    exports2.PatternMatcher = PatternMatcher;
    exports2.READ = READ;
    exports2.ReferenceTracker = ReferenceTracker;
    exports2["default"] = index;
    exports2.findVariable = findVariable;
    exports2.getFunctionHeadLocation = getFunctionHeadLocation;
    exports2.getFunctionNameWithKind = getFunctionNameWithKind;
    exports2.getInnermostScope = getInnermostScope;
    exports2.getPropertyName = getPropertyName;
    exports2.getStaticValue = getStaticValue;
    exports2.getStringIfConstant = getStringIfConstant;
    exports2.hasSideEffect = hasSideEffect;
    exports2.isArrowToken = isArrowToken;
    exports2.isClosingBraceToken = isClosingBraceToken;
    exports2.isClosingBracketToken = isClosingBracketToken;
    exports2.isClosingParenToken = isClosingParenToken;
    exports2.isColonToken = isColonToken;
    exports2.isCommaToken = isCommaToken;
    exports2.isCommentToken = isCommentToken;
    exports2.isNotArrowToken = isNotArrowToken;
    exports2.isNotClosingBraceToken = isNotClosingBraceToken;
    exports2.isNotClosingBracketToken = isNotClosingBracketToken;
    exports2.isNotClosingParenToken = isNotClosingParenToken;
    exports2.isNotColonToken = isNotColonToken;
    exports2.isNotCommaToken = isNotCommaToken;
    exports2.isNotCommentToken = isNotCommentToken;
    exports2.isNotOpeningBraceToken = isNotOpeningBraceToken;
    exports2.isNotOpeningBracketToken = isNotOpeningBracketToken;
    exports2.isNotOpeningParenToken = isNotOpeningParenToken;
    exports2.isNotSemicolonToken = isNotSemicolonToken;
    exports2.isOpeningBraceToken = isOpeningBraceToken;
    exports2.isOpeningBracketToken = isOpeningBracketToken;
    exports2.isOpeningParenToken = isOpeningParenToken;
    exports2.isParenthesized = isParenthesized;
    exports2.isSemicolonToken = isSemicolonToken;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/astUtilities.js
var require_astUtilities = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/astUtilities.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isParenthesized = exports2.hasSideEffect = exports2.getStringIfConstant = exports2.getStaticValue = exports2.getPropertyName = exports2.getFunctionNameWithKind = exports2.getFunctionHeadLocation = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    exports2.getFunctionHeadLocation = eslintUtils.getFunctionHeadLocation;
    exports2.getFunctionNameWithKind = eslintUtils.getFunctionNameWithKind;
    exports2.getPropertyName = eslintUtils.getPropertyName;
    exports2.getStaticValue = eslintUtils.getStaticValue;
    exports2.getStringIfConstant = eslintUtils.getStringIfConstant;
    exports2.hasSideEffect = eslintUtils.hasSideEffect;
    exports2.isParenthesized = eslintUtils.isParenthesized;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/PatternMatcher.js
var require_PatternMatcher = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/PatternMatcher.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PatternMatcher = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    exports2.PatternMatcher = eslintUtils.PatternMatcher;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/predicates.js
var require_predicates = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/predicates.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isNotSemicolonToken = exports2.isSemicolonToken = exports2.isNotOpeningParenToken = exports2.isOpeningParenToken = exports2.isNotOpeningBracketToken = exports2.isOpeningBracketToken = exports2.isNotOpeningBraceToken = exports2.isOpeningBraceToken = exports2.isNotCommentToken = exports2.isCommentToken = exports2.isNotCommaToken = exports2.isCommaToken = exports2.isNotColonToken = exports2.isColonToken = exports2.isNotClosingParenToken = exports2.isClosingParenToken = exports2.isNotClosingBracketToken = exports2.isClosingBracketToken = exports2.isNotClosingBraceToken = exports2.isClosingBraceToken = exports2.isNotArrowToken = exports2.isArrowToken = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    exports2.isArrowToken = eslintUtils.isArrowToken;
    exports2.isNotArrowToken = eslintUtils.isNotArrowToken;
    exports2.isClosingBraceToken = eslintUtils.isClosingBraceToken;
    exports2.isNotClosingBraceToken = eslintUtils.isNotClosingBraceToken;
    exports2.isClosingBracketToken = eslintUtils.isClosingBracketToken;
    exports2.isNotClosingBracketToken = eslintUtils.isNotClosingBracketToken;
    exports2.isClosingParenToken = eslintUtils.isClosingParenToken;
    exports2.isNotClosingParenToken = eslintUtils.isNotClosingParenToken;
    exports2.isColonToken = eslintUtils.isColonToken;
    exports2.isNotColonToken = eslintUtils.isNotColonToken;
    exports2.isCommaToken = eslintUtils.isCommaToken;
    exports2.isNotCommaToken = eslintUtils.isNotCommaToken;
    exports2.isCommentToken = eslintUtils.isCommentToken;
    exports2.isNotCommentToken = eslintUtils.isNotCommentToken;
    exports2.isOpeningBraceToken = eslintUtils.isOpeningBraceToken;
    exports2.isNotOpeningBraceToken = eslintUtils.isNotOpeningBraceToken;
    exports2.isOpeningBracketToken = eslintUtils.isOpeningBracketToken;
    exports2.isNotOpeningBracketToken = eslintUtils.isNotOpeningBracketToken;
    exports2.isOpeningParenToken = eslintUtils.isOpeningParenToken;
    exports2.isNotOpeningParenToken = eslintUtils.isNotOpeningParenToken;
    exports2.isSemicolonToken = eslintUtils.isSemicolonToken;
    exports2.isNotSemicolonToken = eslintUtils.isNotSemicolonToken;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/ReferenceTracker.js
var require_ReferenceTracker = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/ReferenceTracker.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReferenceTracker = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var ReferenceTrackerREAD = eslintUtils.ReferenceTracker.READ;
    var ReferenceTrackerCALL = eslintUtils.ReferenceTracker.CALL;
    var ReferenceTrackerCONSTRUCT = eslintUtils.ReferenceTracker.CONSTRUCT;
    var ReferenceTrackerESM = eslintUtils.ReferenceTracker.ESM;
    exports2.ReferenceTracker = eslintUtils.ReferenceTracker;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/scopeAnalysis.js
var require_scopeAnalysis = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/scopeAnalysis.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getInnermostScope = exports2.findVariable = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    exports2.findVariable = eslintUtils.findVariable;
    exports2.getInnermostScope = eslintUtils.getInnermostScope;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/index.js
var require_eslint_utils2 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_astUtilities(), exports2);
    __exportStar(require_PatternMatcher(), exports2);
    __exportStar(require_predicates(), exports2);
    __exportStar(require_ReferenceTracker(), exports2);
    __exportStar(require_scopeAnalysis(), exports2);
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/helpers.js
var require_helpers = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isNotTokenOfTypeWithConditions = exports2.isTokenOfTypeWithConditions = exports2.isNodeOfTypeWithConditions = exports2.isNodeOfTypes = exports2.isNodeOfType = void 0;
    var isNodeOfType = (nodeType) => (node) => node?.type === nodeType;
    exports2.isNodeOfType = isNodeOfType;
    var isNodeOfTypes = (nodeTypes) => (node) => !!node && nodeTypes.includes(node.type);
    exports2.isNodeOfTypes = isNodeOfTypes;
    var isNodeOfTypeWithConditions = (nodeType, conditions) => {
      const entries = Object.entries(conditions);
      return (node) => node?.type === nodeType && entries.every(([key, value]) => node[key] === value);
    };
    exports2.isNodeOfTypeWithConditions = isNodeOfTypeWithConditions;
    var isTokenOfTypeWithConditions = (tokenType, conditions) => {
      const entries = Object.entries(conditions);
      return (token) => token?.type === tokenType && entries.every(([key, value]) => token[key] === value);
    };
    exports2.isTokenOfTypeWithConditions = isTokenOfTypeWithConditions;
    var isNotTokenOfTypeWithConditions = (tokenType, conditions) => (token) => !(0, exports2.isTokenOfTypeWithConditions)(tokenType, conditions)(token);
    exports2.isNotTokenOfTypeWithConditions = isNotTokenOfTypeWithConditions;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/misc.js
var require_misc = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/misc.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LINEBREAK_MATCHER = void 0;
    exports2.isTokenOnSameLine = isTokenOnSameLine;
    exports2.LINEBREAK_MATCHER = /\r\n|[\r\n\u2028\u2029]/;
    function isTokenOnSameLine(left, right) {
      return left.loc.end.line === right.loc.start.line;
    }
  }
});

// node_modules/@typescript-eslint/types/dist/generated/ast-spec.js
var require_ast_spec = __commonJS({
  "node_modules/@typescript-eslint/types/dist/generated/ast-spec.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AST_TOKEN_TYPES = exports2.AST_NODE_TYPES = void 0;
    var AST_NODE_TYPES;
    (function(AST_NODE_TYPES2) {
      AST_NODE_TYPES2["AccessorProperty"] = "AccessorProperty";
      AST_NODE_TYPES2["ArrayExpression"] = "ArrayExpression";
      AST_NODE_TYPES2["ArrayPattern"] = "ArrayPattern";
      AST_NODE_TYPES2["ArrowFunctionExpression"] = "ArrowFunctionExpression";
      AST_NODE_TYPES2["AssignmentExpression"] = "AssignmentExpression";
      AST_NODE_TYPES2["AssignmentPattern"] = "AssignmentPattern";
      AST_NODE_TYPES2["AwaitExpression"] = "AwaitExpression";
      AST_NODE_TYPES2["BinaryExpression"] = "BinaryExpression";
      AST_NODE_TYPES2["BlockStatement"] = "BlockStatement";
      AST_NODE_TYPES2["BreakStatement"] = "BreakStatement";
      AST_NODE_TYPES2["CallExpression"] = "CallExpression";
      AST_NODE_TYPES2["CatchClause"] = "CatchClause";
      AST_NODE_TYPES2["ChainExpression"] = "ChainExpression";
      AST_NODE_TYPES2["ClassBody"] = "ClassBody";
      AST_NODE_TYPES2["ClassDeclaration"] = "ClassDeclaration";
      AST_NODE_TYPES2["ClassExpression"] = "ClassExpression";
      AST_NODE_TYPES2["ConditionalExpression"] = "ConditionalExpression";
      AST_NODE_TYPES2["ContinueStatement"] = "ContinueStatement";
      AST_NODE_TYPES2["DebuggerStatement"] = "DebuggerStatement";
      AST_NODE_TYPES2["Decorator"] = "Decorator";
      AST_NODE_TYPES2["DoWhileStatement"] = "DoWhileStatement";
      AST_NODE_TYPES2["EmptyStatement"] = "EmptyStatement";
      AST_NODE_TYPES2["ExportAllDeclaration"] = "ExportAllDeclaration";
      AST_NODE_TYPES2["ExportDefaultDeclaration"] = "ExportDefaultDeclaration";
      AST_NODE_TYPES2["ExportNamedDeclaration"] = "ExportNamedDeclaration";
      AST_NODE_TYPES2["ExportSpecifier"] = "ExportSpecifier";
      AST_NODE_TYPES2["ExpressionStatement"] = "ExpressionStatement";
      AST_NODE_TYPES2["ForInStatement"] = "ForInStatement";
      AST_NODE_TYPES2["ForOfStatement"] = "ForOfStatement";
      AST_NODE_TYPES2["ForStatement"] = "ForStatement";
      AST_NODE_TYPES2["FunctionDeclaration"] = "FunctionDeclaration";
      AST_NODE_TYPES2["FunctionExpression"] = "FunctionExpression";
      AST_NODE_TYPES2["Identifier"] = "Identifier";
      AST_NODE_TYPES2["IfStatement"] = "IfStatement";
      AST_NODE_TYPES2["ImportAttribute"] = "ImportAttribute";
      AST_NODE_TYPES2["ImportDeclaration"] = "ImportDeclaration";
      AST_NODE_TYPES2["ImportDefaultSpecifier"] = "ImportDefaultSpecifier";
      AST_NODE_TYPES2["ImportExpression"] = "ImportExpression";
      AST_NODE_TYPES2["ImportNamespaceSpecifier"] = "ImportNamespaceSpecifier";
      AST_NODE_TYPES2["ImportSpecifier"] = "ImportSpecifier";
      AST_NODE_TYPES2["JSXAttribute"] = "JSXAttribute";
      AST_NODE_TYPES2["JSXClosingElement"] = "JSXClosingElement";
      AST_NODE_TYPES2["JSXClosingFragment"] = "JSXClosingFragment";
      AST_NODE_TYPES2["JSXElement"] = "JSXElement";
      AST_NODE_TYPES2["JSXEmptyExpression"] = "JSXEmptyExpression";
      AST_NODE_TYPES2["JSXExpressionContainer"] = "JSXExpressionContainer";
      AST_NODE_TYPES2["JSXFragment"] = "JSXFragment";
      AST_NODE_TYPES2["JSXIdentifier"] = "JSXIdentifier";
      AST_NODE_TYPES2["JSXMemberExpression"] = "JSXMemberExpression";
      AST_NODE_TYPES2["JSXNamespacedName"] = "JSXNamespacedName";
      AST_NODE_TYPES2["JSXOpeningElement"] = "JSXOpeningElement";
      AST_NODE_TYPES2["JSXOpeningFragment"] = "JSXOpeningFragment";
      AST_NODE_TYPES2["JSXSpreadAttribute"] = "JSXSpreadAttribute";
      AST_NODE_TYPES2["JSXSpreadChild"] = "JSXSpreadChild";
      AST_NODE_TYPES2["JSXText"] = "JSXText";
      AST_NODE_TYPES2["LabeledStatement"] = "LabeledStatement";
      AST_NODE_TYPES2["Literal"] = "Literal";
      AST_NODE_TYPES2["LogicalExpression"] = "LogicalExpression";
      AST_NODE_TYPES2["MemberExpression"] = "MemberExpression";
      AST_NODE_TYPES2["MetaProperty"] = "MetaProperty";
      AST_NODE_TYPES2["MethodDefinition"] = "MethodDefinition";
      AST_NODE_TYPES2["NewExpression"] = "NewExpression";
      AST_NODE_TYPES2["ObjectExpression"] = "ObjectExpression";
      AST_NODE_TYPES2["ObjectPattern"] = "ObjectPattern";
      AST_NODE_TYPES2["PrivateIdentifier"] = "PrivateIdentifier";
      AST_NODE_TYPES2["Program"] = "Program";
      AST_NODE_TYPES2["Property"] = "Property";
      AST_NODE_TYPES2["PropertyDefinition"] = "PropertyDefinition";
      AST_NODE_TYPES2["RestElement"] = "RestElement";
      AST_NODE_TYPES2["ReturnStatement"] = "ReturnStatement";
      AST_NODE_TYPES2["SequenceExpression"] = "SequenceExpression";
      AST_NODE_TYPES2["SpreadElement"] = "SpreadElement";
      AST_NODE_TYPES2["StaticBlock"] = "StaticBlock";
      AST_NODE_TYPES2["Super"] = "Super";
      AST_NODE_TYPES2["SwitchCase"] = "SwitchCase";
      AST_NODE_TYPES2["SwitchStatement"] = "SwitchStatement";
      AST_NODE_TYPES2["TaggedTemplateExpression"] = "TaggedTemplateExpression";
      AST_NODE_TYPES2["TemplateElement"] = "TemplateElement";
      AST_NODE_TYPES2["TemplateLiteral"] = "TemplateLiteral";
      AST_NODE_TYPES2["ThisExpression"] = "ThisExpression";
      AST_NODE_TYPES2["ThrowStatement"] = "ThrowStatement";
      AST_NODE_TYPES2["TryStatement"] = "TryStatement";
      AST_NODE_TYPES2["UnaryExpression"] = "UnaryExpression";
      AST_NODE_TYPES2["UpdateExpression"] = "UpdateExpression";
      AST_NODE_TYPES2["VariableDeclaration"] = "VariableDeclaration";
      AST_NODE_TYPES2["VariableDeclarator"] = "VariableDeclarator";
      AST_NODE_TYPES2["WhileStatement"] = "WhileStatement";
      AST_NODE_TYPES2["WithStatement"] = "WithStatement";
      AST_NODE_TYPES2["YieldExpression"] = "YieldExpression";
      AST_NODE_TYPES2["TSAbstractAccessorProperty"] = "TSAbstractAccessorProperty";
      AST_NODE_TYPES2["TSAbstractKeyword"] = "TSAbstractKeyword";
      AST_NODE_TYPES2["TSAbstractMethodDefinition"] = "TSAbstractMethodDefinition";
      AST_NODE_TYPES2["TSAbstractPropertyDefinition"] = "TSAbstractPropertyDefinition";
      AST_NODE_TYPES2["TSAnyKeyword"] = "TSAnyKeyword";
      AST_NODE_TYPES2["TSArrayType"] = "TSArrayType";
      AST_NODE_TYPES2["TSAsExpression"] = "TSAsExpression";
      AST_NODE_TYPES2["TSAsyncKeyword"] = "TSAsyncKeyword";
      AST_NODE_TYPES2["TSBigIntKeyword"] = "TSBigIntKeyword";
      AST_NODE_TYPES2["TSBooleanKeyword"] = "TSBooleanKeyword";
      AST_NODE_TYPES2["TSCallSignatureDeclaration"] = "TSCallSignatureDeclaration";
      AST_NODE_TYPES2["TSClassImplements"] = "TSClassImplements";
      AST_NODE_TYPES2["TSConditionalType"] = "TSConditionalType";
      AST_NODE_TYPES2["TSConstructorType"] = "TSConstructorType";
      AST_NODE_TYPES2["TSConstructSignatureDeclaration"] = "TSConstructSignatureDeclaration";
      AST_NODE_TYPES2["TSDeclareFunction"] = "TSDeclareFunction";
      AST_NODE_TYPES2["TSDeclareKeyword"] = "TSDeclareKeyword";
      AST_NODE_TYPES2["TSEmptyBodyFunctionExpression"] = "TSEmptyBodyFunctionExpression";
      AST_NODE_TYPES2["TSEnumBody"] = "TSEnumBody";
      AST_NODE_TYPES2["TSEnumDeclaration"] = "TSEnumDeclaration";
      AST_NODE_TYPES2["TSEnumMember"] = "TSEnumMember";
      AST_NODE_TYPES2["TSExportAssignment"] = "TSExportAssignment";
      AST_NODE_TYPES2["TSExportKeyword"] = "TSExportKeyword";
      AST_NODE_TYPES2["TSExternalModuleReference"] = "TSExternalModuleReference";
      AST_NODE_TYPES2["TSFunctionType"] = "TSFunctionType";
      AST_NODE_TYPES2["TSImportEqualsDeclaration"] = "TSImportEqualsDeclaration";
      AST_NODE_TYPES2["TSImportType"] = "TSImportType";
      AST_NODE_TYPES2["TSIndexedAccessType"] = "TSIndexedAccessType";
      AST_NODE_TYPES2["TSIndexSignature"] = "TSIndexSignature";
      AST_NODE_TYPES2["TSInferType"] = "TSInferType";
      AST_NODE_TYPES2["TSInstantiationExpression"] = "TSInstantiationExpression";
      AST_NODE_TYPES2["TSInterfaceBody"] = "TSInterfaceBody";
      AST_NODE_TYPES2["TSInterfaceDeclaration"] = "TSInterfaceDeclaration";
      AST_NODE_TYPES2["TSInterfaceHeritage"] = "TSInterfaceHeritage";
      AST_NODE_TYPES2["TSIntersectionType"] = "TSIntersectionType";
      AST_NODE_TYPES2["TSIntrinsicKeyword"] = "TSIntrinsicKeyword";
      AST_NODE_TYPES2["TSLiteralType"] = "TSLiteralType";
      AST_NODE_TYPES2["TSMappedType"] = "TSMappedType";
      AST_NODE_TYPES2["TSMethodSignature"] = "TSMethodSignature";
      AST_NODE_TYPES2["TSModuleBlock"] = "TSModuleBlock";
      AST_NODE_TYPES2["TSModuleDeclaration"] = "TSModuleDeclaration";
      AST_NODE_TYPES2["TSNamedTupleMember"] = "TSNamedTupleMember";
      AST_NODE_TYPES2["TSNamespaceExportDeclaration"] = "TSNamespaceExportDeclaration";
      AST_NODE_TYPES2["TSNeverKeyword"] = "TSNeverKeyword";
      AST_NODE_TYPES2["TSNonNullExpression"] = "TSNonNullExpression";
      AST_NODE_TYPES2["TSNullKeyword"] = "TSNullKeyword";
      AST_NODE_TYPES2["TSNumberKeyword"] = "TSNumberKeyword";
      AST_NODE_TYPES2["TSObjectKeyword"] = "TSObjectKeyword";
      AST_NODE_TYPES2["TSOptionalType"] = "TSOptionalType";
      AST_NODE_TYPES2["TSParameterProperty"] = "TSParameterProperty";
      AST_NODE_TYPES2["TSPrivateKeyword"] = "TSPrivateKeyword";
      AST_NODE_TYPES2["TSPropertySignature"] = "TSPropertySignature";
      AST_NODE_TYPES2["TSProtectedKeyword"] = "TSProtectedKeyword";
      AST_NODE_TYPES2["TSPublicKeyword"] = "TSPublicKeyword";
      AST_NODE_TYPES2["TSQualifiedName"] = "TSQualifiedName";
      AST_NODE_TYPES2["TSReadonlyKeyword"] = "TSReadonlyKeyword";
      AST_NODE_TYPES2["TSRestType"] = "TSRestType";
      AST_NODE_TYPES2["TSSatisfiesExpression"] = "TSSatisfiesExpression";
      AST_NODE_TYPES2["TSStaticKeyword"] = "TSStaticKeyword";
      AST_NODE_TYPES2["TSStringKeyword"] = "TSStringKeyword";
      AST_NODE_TYPES2["TSSymbolKeyword"] = "TSSymbolKeyword";
      AST_NODE_TYPES2["TSTemplateLiteralType"] = "TSTemplateLiteralType";
      AST_NODE_TYPES2["TSThisType"] = "TSThisType";
      AST_NODE_TYPES2["TSTupleType"] = "TSTupleType";
      AST_NODE_TYPES2["TSTypeAliasDeclaration"] = "TSTypeAliasDeclaration";
      AST_NODE_TYPES2["TSTypeAnnotation"] = "TSTypeAnnotation";
      AST_NODE_TYPES2["TSTypeAssertion"] = "TSTypeAssertion";
      AST_NODE_TYPES2["TSTypeLiteral"] = "TSTypeLiteral";
      AST_NODE_TYPES2["TSTypeOperator"] = "TSTypeOperator";
      AST_NODE_TYPES2["TSTypeParameter"] = "TSTypeParameter";
      AST_NODE_TYPES2["TSTypeParameterDeclaration"] = "TSTypeParameterDeclaration";
      AST_NODE_TYPES2["TSTypeParameterInstantiation"] = "TSTypeParameterInstantiation";
      AST_NODE_TYPES2["TSTypePredicate"] = "TSTypePredicate";
      AST_NODE_TYPES2["TSTypeQuery"] = "TSTypeQuery";
      AST_NODE_TYPES2["TSTypeReference"] = "TSTypeReference";
      AST_NODE_TYPES2["TSUndefinedKeyword"] = "TSUndefinedKeyword";
      AST_NODE_TYPES2["TSUnionType"] = "TSUnionType";
      AST_NODE_TYPES2["TSUnknownKeyword"] = "TSUnknownKeyword";
      AST_NODE_TYPES2["TSVoidKeyword"] = "TSVoidKeyword";
    })(AST_NODE_TYPES || (exports2.AST_NODE_TYPES = AST_NODE_TYPES = {}));
    var AST_TOKEN_TYPES;
    (function(AST_TOKEN_TYPES2) {
      AST_TOKEN_TYPES2["Boolean"] = "Boolean";
      AST_TOKEN_TYPES2["Identifier"] = "Identifier";
      AST_TOKEN_TYPES2["JSXIdentifier"] = "JSXIdentifier";
      AST_TOKEN_TYPES2["PrivateIdentifier"] = "PrivateIdentifier";
      AST_TOKEN_TYPES2["JSXText"] = "JSXText";
      AST_TOKEN_TYPES2["Keyword"] = "Keyword";
      AST_TOKEN_TYPES2["Null"] = "Null";
      AST_TOKEN_TYPES2["Numeric"] = "Numeric";
      AST_TOKEN_TYPES2["Punctuator"] = "Punctuator";
      AST_TOKEN_TYPES2["RegularExpression"] = "RegularExpression";
      AST_TOKEN_TYPES2["String"] = "String";
      AST_TOKEN_TYPES2["Template"] = "Template";
      AST_TOKEN_TYPES2["Block"] = "Block";
      AST_TOKEN_TYPES2["Line"] = "Line";
    })(AST_TOKEN_TYPES || (exports2.AST_TOKEN_TYPES = AST_TOKEN_TYPES = {}));
  }
});

// node_modules/@typescript-eslint/types/dist/lib.js
var require_lib = __commonJS({
  "node_modules/@typescript-eslint/types/dist/lib.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/types/dist/parser-options.js
var require_parser_options = __commonJS({
  "node_modules/@typescript-eslint/types/dist/parser-options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/types/dist/ts-estree.js
var require_ts_estree = __commonJS({
  "node_modules/@typescript-eslint/types/dist/ts-estree.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSESTree = void 0;
    exports2.TSESTree = __importStar(require_ast_spec());
  }
});

// node_modules/@typescript-eslint/types/dist/index.js
var require_dist = __commonJS({
  "node_modules/@typescript-eslint/types/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AST_TOKEN_TYPES = exports2.AST_NODE_TYPES = void 0;
    var ast_spec_1 = require_ast_spec();
    Object.defineProperty(exports2, "AST_NODE_TYPES", { enumerable: true, get: function() {
      return ast_spec_1.AST_NODE_TYPES;
    } });
    Object.defineProperty(exports2, "AST_TOKEN_TYPES", { enumerable: true, get: function() {
      return ast_spec_1.AST_TOKEN_TYPES;
    } });
    __exportStar(require_lib(), exports2);
    __exportStar(require_parser_options(), exports2);
    __exportStar(require_ts_estree(), exports2);
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-estree.js
var require_ts_estree2 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-estree.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSESTree = exports2.AST_TOKEN_TYPES = exports2.AST_NODE_TYPES = void 0;
    var types_1 = require_dist();
    Object.defineProperty(exports2, "AST_NODE_TYPES", { enumerable: true, get: function() {
      return types_1.AST_NODE_TYPES;
    } });
    Object.defineProperty(exports2, "AST_TOKEN_TYPES", { enumerable: true, get: function() {
      return types_1.AST_TOKEN_TYPES;
    } });
    Object.defineProperty(exports2, "TSESTree", { enumerable: true, get: function() {
      return types_1.TSESTree;
    } });
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/predicates.js
var require_predicates2 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/predicates.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isLoop = exports2.isImportKeyword = exports2.isTypeKeyword = exports2.isAwaitKeyword = exports2.isAwaitExpression = exports2.isIdentifier = exports2.isConstructor = exports2.isClassOrTypeElement = exports2.isTSConstructorType = exports2.isTSFunctionType = exports2.isFunctionOrFunctionType = exports2.isFunctionType = exports2.isFunction = exports2.isVariableDeclarator = exports2.isTypeAssertion = exports2.isLogicalOrOperator = exports2.isOptionalCallExpression = exports2.isNotNonNullAssertionPunctuator = exports2.isNonNullAssertionPunctuator = exports2.isNotOptionalChainPunctuator = exports2.isOptionalChainPunctuator = void 0;
    exports2.isSetter = isSetter;
    var ts_estree_1 = require_ts_estree2();
    var helpers_1 = require_helpers();
    exports2.isOptionalChainPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "?." });
    exports2.isNotOptionalChainPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "?." });
    exports2.isNonNullAssertionPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "!" });
    exports2.isNotNonNullAssertionPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "!" });
    exports2.isOptionalCallExpression = (0, helpers_1.isNodeOfTypeWithConditions)(
      ts_estree_1.AST_NODE_TYPES.CallExpression,
      // this flag means the call expression itself is option
      // i.e. it is foo.bar?.() and not foo?.bar()
      { optional: true }
    );
    exports2.isLogicalOrOperator = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.LogicalExpression, { operator: "||" });
    exports2.isTypeAssertion = (0, helpers_1.isNodeOfTypes)([
      ts_estree_1.AST_NODE_TYPES.TSAsExpression,
      ts_estree_1.AST_NODE_TYPES.TSTypeAssertion
    ]);
    exports2.isVariableDeclarator = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.VariableDeclarator);
    var functionTypes = [
      ts_estree_1.AST_NODE_TYPES.ArrowFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.FunctionDeclaration,
      ts_estree_1.AST_NODE_TYPES.FunctionExpression
    ];
    exports2.isFunction = (0, helpers_1.isNodeOfTypes)(functionTypes);
    var functionTypeTypes = [
      ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSConstructorType,
      ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSDeclareFunction,
      ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.TSFunctionType,
      ts_estree_1.AST_NODE_TYPES.TSMethodSignature
    ];
    exports2.isFunctionType = (0, helpers_1.isNodeOfTypes)(functionTypeTypes);
    exports2.isFunctionOrFunctionType = (0, helpers_1.isNodeOfTypes)([
      ...functionTypes,
      ...functionTypeTypes
    ]);
    exports2.isTSFunctionType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSFunctionType);
    exports2.isTSConstructorType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSConstructorType);
    exports2.isClassOrTypeElement = (0, helpers_1.isNodeOfTypes)([
      // ClassElement
      ts_estree_1.AST_NODE_TYPES.PropertyDefinition,
      ts_estree_1.AST_NODE_TYPES.FunctionExpression,
      ts_estree_1.AST_NODE_TYPES.MethodDefinition,
      ts_estree_1.AST_NODE_TYPES.TSAbstractPropertyDefinition,
      ts_estree_1.AST_NODE_TYPES.TSAbstractMethodDefinition,
      ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.TSIndexSignature,
      // TypeElement
      ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
      // AST_NODE_TYPES.TSIndexSignature,
      ts_estree_1.AST_NODE_TYPES.TSMethodSignature,
      ts_estree_1.AST_NODE_TYPES.TSPropertySignature
    ]);
    exports2.isConstructor = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.MethodDefinition, { kind: "constructor" });
    function isSetter(node) {
      return !!node && (node.type === ts_estree_1.AST_NODE_TYPES.MethodDefinition || node.type === ts_estree_1.AST_NODE_TYPES.Property) && node.kind === "set";
    }
    exports2.isIdentifier = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.Identifier);
    exports2.isAwaitExpression = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.AwaitExpression);
    exports2.isAwaitKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, { value: "await" });
    exports2.isTypeKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, { value: "type" });
    exports2.isImportKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Keyword, { value: "import" });
    exports2.isLoop = (0, helpers_1.isNodeOfTypes)([
      ts_estree_1.AST_NODE_TYPES.DoWhileStatement,
      ts_estree_1.AST_NODE_TYPES.ForStatement,
      ts_estree_1.AST_NODE_TYPES.ForInStatement,
      ts_estree_1.AST_NODE_TYPES.ForOfStatement,
      ts_estree_1.AST_NODE_TYPES.WhileStatement
    ]);
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/index.js
var require_ast_utils = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_eslint_utils2(), exports2);
    __exportStar(require_helpers(), exports2);
    __exportStar(require_misc(), exports2);
    __exportStar(require_predicates2(), exports2);
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/deepMerge.js
var require_deepMerge = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/deepMerge.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isObjectNotArray = isObjectNotArray;
    exports2.deepMerge = deepMerge;
    function isObjectNotArray(obj) {
      return typeof obj === "object" && obj != null && !Array.isArray(obj);
    }
    function deepMerge(first = {}, second = {}) {
      const keys = /* @__PURE__ */ new Set([...Object.keys(first), ...Object.keys(second)]);
      return Object.fromEntries([...keys].map((key) => {
        const firstHasKey = key in first;
        const secondHasKey = key in second;
        const firstValue = first[key];
        const secondValue = second[key];
        let value;
        if (firstHasKey && secondHasKey) {
          if (isObjectNotArray(firstValue) && isObjectNotArray(secondValue)) {
            value = deepMerge(firstValue, secondValue);
          } else {
            value = secondValue;
          }
        } else if (firstHasKey) {
          value = firstValue;
        } else {
          value = secondValue;
        }
        return [key, value];
      }));
    }
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/applyDefault.js
var require_applyDefault = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/applyDefault.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.applyDefault = applyDefault;
    var deepMerge_1 = require_deepMerge();
    function applyDefault(defaultOptions, userOptions) {
      const options = structuredClone(defaultOptions);
      if (userOptions == null) {
        return options;
      }
      options.forEach((opt, i) => {
        if (userOptions[i] !== void 0) {
          const userOpt = userOptions[i];
          if ((0, deepMerge_1.isObjectNotArray)(userOpt) && (0, deepMerge_1.isObjectNotArray)(opt)) {
            options[i] = (0, deepMerge_1.deepMerge)(opt, userOpt);
          } else {
            options[i] = userOpt;
          }
        }
      });
      return options;
    }
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/parserSeemsToBeTSESLint.js
var require_parserSeemsToBeTSESLint = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/parserSeemsToBeTSESLint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parserSeemsToBeTSESLint = parserSeemsToBeTSESLint;
    function parserSeemsToBeTSESLint(parser) {
      return !!parser && /(?:typescript-eslint|\.\.)[\w/\\]*parser/.test(parser);
    }
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js
var require_getParserServices = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getParserServices = getParserServices;
    var parserSeemsToBeTSESLint_1 = require_parserSeemsToBeTSESLint();
    var ERROR_MESSAGE_REQUIRES_PARSER_SERVICES = "You have used a rule which requires type information, but don't have parserOptions set to generate type information for this file. See https://typescript-eslint.io/getting-started/typed-linting for enabling linting with type information.";
    var ERROR_MESSAGE_UNKNOWN_PARSER = 'Note: detected a parser other than @typescript-eslint/parser. Make sure the parser is configured to forward "parserOptions.project" to @typescript-eslint/parser.';
    function getParserServices(context, allowWithoutFullTypeInformation = false) {
      const parser = context.parserPath || context.languageOptions.parser?.meta?.name;
      if (context.sourceCode.parserServices?.esTreeNodeToTSNodeMap == null || context.sourceCode.parserServices.tsNodeToESTreeNodeMap == null) {
        throwError(parser);
      }
      if (context.sourceCode.parserServices.program == null && !allowWithoutFullTypeInformation) {
        throwError(parser);
      }
      return context.sourceCode.parserServices;
    }
    function throwError(parser) {
      const messages = [
        ERROR_MESSAGE_REQUIRES_PARSER_SERVICES,
        `Parser: ${parser || "(unknown)"}`,
        !(0, parserSeemsToBeTSESLint_1.parserSeemsToBeTSESLint)(parser) && ERROR_MESSAGE_UNKNOWN_PARSER
      ].filter(Boolean);
      throw new Error(messages.join("\n"));
    }
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/InferTypesFromRule.js
var require_InferTypesFromRule = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/InferTypesFromRule.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/nullThrows.js
var require_nullThrows = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/nullThrows.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NullThrowsReasons = void 0;
    exports2.nullThrows = nullThrows;
    exports2.NullThrowsReasons = {
      MissingParent: "Expected node to have a parent.",
      MissingToken: (token, thing) => `Expected to find a ${token} for the ${thing}.`
    };
    function nullThrows(value, message) {
      if (value == null) {
        throw new Error(`Non-null Assertion Failed: ${message}`);
      }
      return value;
    }
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js
var require_RuleCreator = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RuleCreator = RuleCreator;
    var applyDefault_1 = require_applyDefault();
    function RuleCreator(urlCreator) {
      return function createNamedRule({ meta, name, ...rule }) {
        return createRule2({
          meta: {
            ...meta,
            docs: {
              ...meta.docs,
              url: urlCreator(name)
            }
          },
          ...rule
        });
      };
    }
    function createRule2({ create, defaultOptions, meta }) {
      return {
        create(context) {
          const optionsWithDefault = (0, applyDefault_1.applyDefault)(defaultOptions, context.options);
          return create(context, optionsWithDefault);
        },
        defaultOptions,
        meta
      };
    }
    RuleCreator.withoutDocs = function withoutDocs(args) {
      return createRule2(args);
    };
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/index.js
var require_eslint_utils3 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_applyDefault(), exports2);
    __exportStar(require_deepMerge(), exports2);
    __exportStar(require_getParserServices(), exports2);
    __exportStar(require_InferTypesFromRule(), exports2);
    __exportStar(require_nullThrows(), exports2);
    __exportStar(require_RuleCreator(), exports2);
  }
});

// node_modules/@typescript-eslint/utils/dist/json-schema.js
var require_json_schema = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/json-schema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/AST.js
var require_AST = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/AST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/Config.js
var require_Config = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/Config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint/FlatESLint.js
var require_FlatESLint = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint/FlatESLint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FlatESLint = void 0;
    var use_at_your_own_risk_1 = require("eslint/use-at-your-own-risk");
    var FlatESLint = class extends use_at_your_own_risk_1.FlatESLint {
    };
    exports2.FlatESLint = FlatESLint;
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint/LegacyESLint.js
var require_LegacyESLint = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/eslint/LegacyESLint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LegacyESLint = void 0;
    var use_at_your_own_risk_1 = require("eslint/use-at-your-own-risk");
    var LegacyESLint = class extends use_at_your_own_risk_1.LegacyESLint {
    };
    exports2.LegacyESLint = LegacyESLint;
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/ESLint.js
var require_ESLint = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/ESLint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LegacyESLint = exports2.ESLint = exports2.FlatESLint = void 0;
    var FlatESLint_1 = require_FlatESLint();
    Object.defineProperty(exports2, "FlatESLint", { enumerable: true, get: function() {
      return FlatESLint_1.FlatESLint;
    } });
    var FlatESLint_2 = require_FlatESLint();
    Object.defineProperty(exports2, "ESLint", { enumerable: true, get: function() {
      return FlatESLint_2.FlatESLint;
    } });
    var LegacyESLint_1 = require_LegacyESLint();
    Object.defineProperty(exports2, "LegacyESLint", { enumerable: true, get: function() {
      return LegacyESLint_1.LegacyESLint;
    } });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/Linter.js
var require_Linter = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/Linter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Linter = void 0;
    var eslint_1 = require("eslint");
    var Linter = class extends eslint_1.Linter {
    };
    exports2.Linter = Linter;
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/Parser.js
var require_Parser = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/Parser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/ParserOptions.js
var require_ParserOptions = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/ParserOptions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/Processor.js
var require_Processor = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/Processor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule.js
var require_Rule = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/RuleTester.js
var require_RuleTester = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/RuleTester.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RuleTester = void 0;
    var eslint_1 = require("eslint");
    var RuleTester = class extends eslint_1.RuleTester {
    };
    exports2.RuleTester = RuleTester;
  }
});

// node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs
var require_eslint_visitor_keys2 = __commonJS({
  "node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs"(exports2) {
    "use strict";
    var KEYS = {
      ArrayExpression: [
        "elements"
      ],
      ArrayPattern: [
        "elements"
      ],
      ArrowFunctionExpression: [
        "params",
        "body"
      ],
      AssignmentExpression: [
        "left",
        "right"
      ],
      AssignmentPattern: [
        "left",
        "right"
      ],
      AwaitExpression: [
        "argument"
      ],
      BinaryExpression: [
        "left",
        "right"
      ],
      BlockStatement: [
        "body"
      ],
      BreakStatement: [
        "label"
      ],
      CallExpression: [
        "callee",
        "arguments"
      ],
      CatchClause: [
        "param",
        "body"
      ],
      ChainExpression: [
        "expression"
      ],
      ClassBody: [
        "body"
      ],
      ClassDeclaration: [
        "id",
        "superClass",
        "body"
      ],
      ClassExpression: [
        "id",
        "superClass",
        "body"
      ],
      ConditionalExpression: [
        "test",
        "consequent",
        "alternate"
      ],
      ContinueStatement: [
        "label"
      ],
      DebuggerStatement: [],
      DoWhileStatement: [
        "body",
        "test"
      ],
      EmptyStatement: [],
      ExperimentalRestProperty: [
        "argument"
      ],
      ExperimentalSpreadProperty: [
        "argument"
      ],
      ExportAllDeclaration: [
        "exported",
        "source",
        "attributes"
      ],
      ExportDefaultDeclaration: [
        "declaration"
      ],
      ExportNamedDeclaration: [
        "declaration",
        "specifiers",
        "source",
        "attributes"
      ],
      ExportSpecifier: [
        "local",
        "exported"
      ],
      ExpressionStatement: [
        "expression"
      ],
      ForInStatement: [
        "left",
        "right",
        "body"
      ],
      ForOfStatement: [
        "left",
        "right",
        "body"
      ],
      ForStatement: [
        "init",
        "test",
        "update",
        "body"
      ],
      FunctionDeclaration: [
        "id",
        "params",
        "body"
      ],
      FunctionExpression: [
        "id",
        "params",
        "body"
      ],
      Identifier: [],
      IfStatement: [
        "test",
        "consequent",
        "alternate"
      ],
      ImportAttribute: [
        "key",
        "value"
      ],
      ImportDeclaration: [
        "specifiers",
        "source",
        "attributes"
      ],
      ImportDefaultSpecifier: [
        "local"
      ],
      ImportExpression: [
        "source",
        "options"
      ],
      ImportNamespaceSpecifier: [
        "local"
      ],
      ImportSpecifier: [
        "imported",
        "local"
      ],
      JSXAttribute: [
        "name",
        "value"
      ],
      JSXClosingElement: [
        "name"
      ],
      JSXClosingFragment: [],
      JSXElement: [
        "openingElement",
        "children",
        "closingElement"
      ],
      JSXEmptyExpression: [],
      JSXExpressionContainer: [
        "expression"
      ],
      JSXFragment: [
        "openingFragment",
        "children",
        "closingFragment"
      ],
      JSXIdentifier: [],
      JSXMemberExpression: [
        "object",
        "property"
      ],
      JSXNamespacedName: [
        "namespace",
        "name"
      ],
      JSXOpeningElement: [
        "name",
        "attributes"
      ],
      JSXOpeningFragment: [],
      JSXSpreadAttribute: [
        "argument"
      ],
      JSXSpreadChild: [
        "expression"
      ],
      JSXText: [],
      LabeledStatement: [
        "label",
        "body"
      ],
      Literal: [],
      LogicalExpression: [
        "left",
        "right"
      ],
      MemberExpression: [
        "object",
        "property"
      ],
      MetaProperty: [
        "meta",
        "property"
      ],
      MethodDefinition: [
        "key",
        "value"
      ],
      NewExpression: [
        "callee",
        "arguments"
      ],
      ObjectExpression: [
        "properties"
      ],
      ObjectPattern: [
        "properties"
      ],
      PrivateIdentifier: [],
      Program: [
        "body"
      ],
      Property: [
        "key",
        "value"
      ],
      PropertyDefinition: [
        "key",
        "value"
      ],
      RestElement: [
        "argument"
      ],
      ReturnStatement: [
        "argument"
      ],
      SequenceExpression: [
        "expressions"
      ],
      SpreadElement: [
        "argument"
      ],
      StaticBlock: [
        "body"
      ],
      Super: [],
      SwitchCase: [
        "test",
        "consequent"
      ],
      SwitchStatement: [
        "discriminant",
        "cases"
      ],
      TaggedTemplateExpression: [
        "tag",
        "quasi"
      ],
      TemplateElement: [],
      TemplateLiteral: [
        "quasis",
        "expressions"
      ],
      ThisExpression: [],
      ThrowStatement: [
        "argument"
      ],
      TryStatement: [
        "block",
        "handler",
        "finalizer"
      ],
      UnaryExpression: [
        "argument"
      ],
      UpdateExpression: [
        "argument"
      ],
      VariableDeclaration: [
        "declarations"
      ],
      VariableDeclarator: [
        "id",
        "init"
      ],
      WhileStatement: [
        "test",
        "body"
      ],
      WithStatement: [
        "object",
        "body"
      ],
      YieldExpression: [
        "argument"
      ]
    };
    var NODE_TYPES = Object.keys(KEYS);
    for (const type of NODE_TYPES) {
      Object.freeze(KEYS[type]);
    }
    Object.freeze(KEYS);
    var KEY_BLACKLIST = /* @__PURE__ */ new Set([
      "parent",
      "leadingComments",
      "trailingComments"
    ]);
    function filterKey(key) {
      return !KEY_BLACKLIST.has(key) && key[0] !== "_";
    }
    function getKeys(node) {
      return Object.keys(node).filter(filterKey);
    }
    function unionWith(additionalKeys) {
      const retv = (
        /** @type {{ [type: string]: ReadonlyArray<string> }} */
        Object.assign({}, KEYS)
      );
      for (const type of Object.keys(additionalKeys)) {
        if (Object.hasOwn(retv, type)) {
          const keys = new Set(additionalKeys[type]);
          for (const key of retv[type]) {
            keys.add(key);
          }
          retv[type] = Object.freeze(Array.from(keys));
        } else {
          retv[type] = Object.freeze(Array.from(additionalKeys[type]));
        }
      }
      return Object.freeze(retv);
    }
    exports2.KEYS = KEYS;
    exports2.getKeys = getKeys;
    exports2.unionWith = unionWith;
  }
});

// node_modules/@typescript-eslint/visitor-keys/dist/get-keys.js
var require_get_keys = __commonJS({
  "node_modules/@typescript-eslint/visitor-keys/dist/get-keys.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getKeys = void 0;
    var eslint_visitor_keys_1 = require_eslint_visitor_keys2();
    exports2.getKeys = eslint_visitor_keys_1.getKeys;
  }
});

// node_modules/@typescript-eslint/visitor-keys/dist/visitor-keys.js
var require_visitor_keys = __commonJS({
  "node_modules/@typescript-eslint/visitor-keys/dist/visitor-keys.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.visitorKeys = void 0;
    var eslintVisitorKeys = __importStar(require_eslint_visitor_keys2());
    var SharedVisitorKeys = (() => {
      const FunctionType = ["typeParameters", "params", "returnType"];
      const AnonymousFunction = [...FunctionType, "body"];
      const AbstractPropertyDefinition = [
        "decorators",
        "key",
        "typeAnnotation"
      ];
      return {
        AbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"],
        AnonymousFunction,
        AsExpression: ["expression", "typeAnnotation"],
        ClassDeclaration: [
          "decorators",
          "id",
          "typeParameters",
          "superClass",
          "superTypeArguments",
          "implements",
          "body"
        ],
        Function: ["id", ...AnonymousFunction],
        FunctionType,
        PropertyDefinition: [...AbstractPropertyDefinition, "value"]
      };
    })();
    var additionalKeys = {
      AccessorProperty: SharedVisitorKeys.PropertyDefinition,
      ArrayPattern: ["decorators", "elements", "typeAnnotation"],
      ArrowFunctionExpression: SharedVisitorKeys.AnonymousFunction,
      AssignmentPattern: ["decorators", "left", "right", "typeAnnotation"],
      CallExpression: ["callee", "typeArguments", "arguments"],
      ClassDeclaration: SharedVisitorKeys.ClassDeclaration,
      ClassExpression: SharedVisitorKeys.ClassDeclaration,
      Decorator: ["expression"],
      ExportAllDeclaration: ["exported", "source", "attributes"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"],
      FunctionDeclaration: SharedVisitorKeys.Function,
      FunctionExpression: SharedVisitorKeys.Function,
      Identifier: ["decorators", "typeAnnotation"],
      ImportAttribute: ["key", "value"],
      ImportDeclaration: ["specifiers", "source", "attributes"],
      ImportExpression: ["source", "options"],
      JSXClosingFragment: [],
      JSXOpeningElement: ["name", "typeArguments", "attributes"],
      JSXOpeningFragment: [],
      JSXSpreadChild: ["expression"],
      MethodDefinition: ["decorators", "key", "value"],
      NewExpression: ["callee", "typeArguments", "arguments"],
      ObjectPattern: ["decorators", "properties", "typeAnnotation"],
      PropertyDefinition: SharedVisitorKeys.PropertyDefinition,
      RestElement: ["decorators", "argument", "typeAnnotation"],
      StaticBlock: ["body"],
      TaggedTemplateExpression: ["tag", "typeArguments", "quasi"],
      TSAbstractAccessorProperty: SharedVisitorKeys.AbstractPropertyDefinition,
      TSAbstractKeyword: [],
      TSAbstractMethodDefinition: ["key", "value"],
      TSAbstractPropertyDefinition: SharedVisitorKeys.AbstractPropertyDefinition,
      TSAnyKeyword: [],
      TSArrayType: ["elementType"],
      TSAsExpression: SharedVisitorKeys.AsExpression,
      TSAsyncKeyword: [],
      TSBigIntKeyword: [],
      TSBooleanKeyword: [],
      TSCallSignatureDeclaration: SharedVisitorKeys.FunctionType,
      TSClassImplements: ["expression", "typeArguments"],
      TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"],
      TSConstructorType: SharedVisitorKeys.FunctionType,
      TSConstructSignatureDeclaration: SharedVisitorKeys.FunctionType,
      TSDeclareFunction: SharedVisitorKeys.Function,
      TSDeclareKeyword: [],
      TSEmptyBodyFunctionExpression: ["id", ...SharedVisitorKeys.FunctionType],
      TSEnumBody: ["members"],
      TSEnumDeclaration: ["id", "body"],
      TSEnumMember: ["id", "initializer"],
      TSExportAssignment: ["expression"],
      TSExportKeyword: [],
      TSExternalModuleReference: ["expression"],
      TSFunctionType: SharedVisitorKeys.FunctionType,
      TSImportEqualsDeclaration: ["id", "moduleReference"],
      TSImportType: ["argument", "options", "qualifier", "typeArguments"],
      TSIndexedAccessType: ["objectType", "indexType"],
      TSIndexSignature: ["parameters", "typeAnnotation"],
      TSInferType: ["typeParameter"],
      TSInstantiationExpression: ["expression", "typeArguments"],
      TSInterfaceBody: ["body"],
      TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
      TSInterfaceHeritage: ["expression", "typeArguments"],
      TSIntersectionType: ["types"],
      TSIntrinsicKeyword: [],
      TSLiteralType: ["literal"],
      TSMappedType: ["key", "constraint", "nameType", "typeAnnotation"],
      TSMethodSignature: ["key", "typeParameters", "params", "returnType"],
      TSModuleBlock: ["body"],
      TSModuleDeclaration: ["id", "body"],
      TSNamedTupleMember: ["label", "elementType"],
      TSNamespaceExportDeclaration: ["id"],
      TSNeverKeyword: [],
      TSNonNullExpression: ["expression"],
      TSNullKeyword: [],
      TSNumberKeyword: [],
      TSObjectKeyword: [],
      TSOptionalType: ["typeAnnotation"],
      TSParameterProperty: ["decorators", "parameter"],
      TSPrivateKeyword: [],
      TSPropertySignature: ["key", "typeAnnotation"],
      TSProtectedKeyword: [],
      TSPublicKeyword: [],
      TSQualifiedName: ["left", "right"],
      TSReadonlyKeyword: [],
      TSRestType: ["typeAnnotation"],
      TSSatisfiesExpression: SharedVisitorKeys.AsExpression,
      TSStaticKeyword: [],
      TSStringKeyword: [],
      TSSymbolKeyword: [],
      TSTemplateLiteralType: ["quasis", "types"],
      TSThisType: [],
      TSTupleType: ["elementTypes"],
      TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"],
      TSTypeAnnotation: ["typeAnnotation"],
      TSTypeAssertion: ["typeAnnotation", "expression"],
      TSTypeLiteral: ["members"],
      TSTypeOperator: ["typeAnnotation"],
      TSTypeParameter: ["name", "constraint", "default"],
      TSTypeParameterDeclaration: ["params"],
      TSTypeParameterInstantiation: ["params"],
      TSTypePredicate: ["parameterName", "typeAnnotation"],
      TSTypeQuery: ["exprName", "typeArguments"],
      TSTypeReference: ["typeName", "typeArguments"],
      TSUndefinedKeyword: [],
      TSUnionType: ["types"],
      TSUnknownKeyword: [],
      TSVoidKeyword: []
    };
    exports2.visitorKeys = eslintVisitorKeys.unionWith(additionalKeys);
  }
});

// node_modules/@typescript-eslint/visitor-keys/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@typescript-eslint/visitor-keys/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.visitorKeys = exports2.getKeys = void 0;
    var get_keys_1 = require_get_keys();
    Object.defineProperty(exports2, "getKeys", { enumerable: true, get: function() {
      return get_keys_1.getKeys;
    } });
    var visitor_keys_1 = require_visitor_keys();
    Object.defineProperty(exports2, "visitorKeys", { enumerable: true, get: function() {
      return visitor_keys_1.visitorKeys;
    } });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/assert.js
var require_assert = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/assert.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.assert = assert;
    function assert(value, message) {
      if (value == null) {
        throw new Error(message);
      }
    }
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/ID.js
var require_ID = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/ID.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createIdGenerator = createIdGenerator;
    exports2.resetIds = resetIds;
    var ID_CACHE = /* @__PURE__ */ new Map();
    var NEXT_KEY = 0;
    function createIdGenerator() {
      const key = NEXT_KEY += 1;
      ID_CACHE.set(key, 0);
      return () => {
        const current = ID_CACHE.get(key) ?? 0;
        const next = current + 1;
        ID_CACHE.set(key, next);
        return next;
      };
    }
    function resetIds() {
      ID_CACHE.clear();
    }
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionBase.js
var require_DefinitionBase = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionBase.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DefinitionBase = void 0;
    var ID_1 = require_ID();
    var generator = (0, ID_1.createIdGenerator)();
    var DefinitionBase = class {
      constructor(type, name, node, parent) {
        /**
         * A unique ID for this instance - primarily used to help debugging and testing
         */
        __publicField(this, "$id", generator());
        __publicField(this, "type");
        /**
         * The `Identifier` node of this definition
         * @public
         */
        __publicField(this, "name");
        /**
         * The enclosing node of the name.
         * @public
         */
        __publicField(this, "node");
        /**
         * the enclosing statement node of the identifier.
         * @public
         */
        __publicField(this, "parent");
        this.type = type;
        this.name = name;
        this.node = node;
        this.parent = parent;
      }
    };
    exports2.DefinitionBase = DefinitionBase;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionType.js
var require_DefinitionType = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DefinitionType = void 0;
    var DefinitionType;
    (function(DefinitionType2) {
      DefinitionType2["CatchClause"] = "CatchClause";
      DefinitionType2["ClassName"] = "ClassName";
      DefinitionType2["FunctionName"] = "FunctionName";
      DefinitionType2["ImplicitGlobalVariable"] = "ImplicitGlobalVariable";
      DefinitionType2["ImportBinding"] = "ImportBinding";
      DefinitionType2["Parameter"] = "Parameter";
      DefinitionType2["TSEnumName"] = "TSEnumName";
      DefinitionType2["TSEnumMember"] = "TSEnumMemberName";
      DefinitionType2["TSModuleName"] = "TSModuleName";
      DefinitionType2["Type"] = "Type";
      DefinitionType2["Variable"] = "Variable";
    })(DefinitionType || (exports2.DefinitionType = DefinitionType = {}));
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/CatchClauseDefinition.js
var require_CatchClauseDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/CatchClauseDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CatchClauseDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var CatchClauseDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.CatchClause, name, node, null);
        __publicField(this, "isTypeDefinition", false);
        __publicField(this, "isVariableDefinition", true);
      }
    };
    exports2.CatchClauseDefinition = CatchClauseDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/ClassNameDefinition.js
var require_ClassNameDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/ClassNameDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ClassNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.ClassName, name, node, null);
        __publicField(this, "isTypeDefinition", true);
        __publicField(this, "isVariableDefinition", true);
      }
    };
    exports2.ClassNameDefinition = ClassNameDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/Definition.js
var require_Definition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/Definition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/FunctionNameDefinition.js
var require_FunctionNameDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/FunctionNameDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FunctionNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var FunctionNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.FunctionName, name, node, null);
        __publicField(this, "isTypeDefinition", false);
        __publicField(this, "isVariableDefinition", true);
      }
    };
    exports2.FunctionNameDefinition = FunctionNameDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/ImplicitGlobalVariableDefinition.js
var require_ImplicitGlobalVariableDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/ImplicitGlobalVariableDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplicitGlobalVariableDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ImplicitGlobalVariableDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.ImplicitGlobalVariable, name, node, null);
        __publicField(this, "isTypeDefinition", false);
        __publicField(this, "isVariableDefinition", true);
      }
    };
    exports2.ImplicitGlobalVariableDefinition = ImplicitGlobalVariableDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/ImportBindingDefinition.js
var require_ImportBindingDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/ImportBindingDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImportBindingDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ImportBindingDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node, decl) {
        super(DefinitionType_1.DefinitionType.ImportBinding, name, node, decl);
        __publicField(this, "isTypeDefinition", true);
        __publicField(this, "isVariableDefinition", true);
      }
    };
    exports2.ImportBindingDefinition = ImportBindingDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/ParameterDefinition.js
var require_ParameterDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/ParameterDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ParameterDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ParameterDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node, rest) {
        super(DefinitionType_1.DefinitionType.Parameter, name, node, null);
        /**
         * Whether the parameter definition is a part of a rest parameter.
         */
        __publicField(this, "isTypeDefinition", false);
        __publicField(this, "isVariableDefinition", true);
        __publicField(this, "rest");
        this.rest = rest;
      }
    };
    exports2.ParameterDefinition = ParameterDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumMemberDefinition.js
var require_TSEnumMemberDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumMemberDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSEnumMemberDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSEnumMemberDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.TSEnumMember, name, node, null);
        __publicField(this, "isTypeDefinition", true);
        __publicField(this, "isVariableDefinition", true);
      }
    };
    exports2.TSEnumMemberDefinition = TSEnumMemberDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumNameDefinition.js
var require_TSEnumNameDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumNameDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSEnumNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSEnumNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.TSEnumName, name, node, null);
        __publicField(this, "isTypeDefinition", true);
        __publicField(this, "isVariableDefinition", true);
      }
    };
    exports2.TSEnumNameDefinition = TSEnumNameDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/TSModuleNameDefinition.js
var require_TSModuleNameDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/TSModuleNameDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSModuleNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSModuleNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.TSModuleName, name, node, null);
        __publicField(this, "isTypeDefinition", true);
        __publicField(this, "isVariableDefinition", true);
      }
    };
    exports2.TSModuleNameDefinition = TSModuleNameDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/TypeDefinition.js
var require_TypeDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/TypeDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TypeDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.Type, name, node, null);
        __publicField(this, "isTypeDefinition", true);
        __publicField(this, "isVariableDefinition", false);
      }
    };
    exports2.TypeDefinition = TypeDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/VariableDefinition.js
var require_VariableDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/VariableDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VariableDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var VariableDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node, decl) {
        super(DefinitionType_1.DefinitionType.Variable, name, node, decl);
        __publicField(this, "isTypeDefinition", false);
        __publicField(this, "isVariableDefinition", true);
      }
    };
    exports2.VariableDefinition = VariableDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/index.js
var require_definition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_CatchClauseDefinition(), exports2);
    __exportStar(require_ClassNameDefinition(), exports2);
    __exportStar(require_Definition(), exports2);
    __exportStar(require_DefinitionType(), exports2);
    __exportStar(require_FunctionNameDefinition(), exports2);
    __exportStar(require_ImplicitGlobalVariableDefinition(), exports2);
    __exportStar(require_ImportBindingDefinition(), exports2);
    __exportStar(require_ParameterDefinition(), exports2);
    __exportStar(require_TSEnumMemberDefinition(), exports2);
    __exportStar(require_TSEnumNameDefinition(), exports2);
    __exportStar(require_TSModuleNameDefinition(), exports2);
    __exportStar(require_TypeDefinition(), exports2);
    __exportStar(require_VariableDefinition(), exports2);
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/base-config.js
var require_base_config = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/base-config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TYPE_VALUE = exports2.VALUE = exports2.TYPE = void 0;
    exports2.TYPE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: true,
      isValueVariable: false
    });
    exports2.VALUE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: false,
      isValueVariable: true
    });
    exports2.TYPE_VALUE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: true,
      isValueVariable: true
    });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.js
var require_decorators = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decorators = void 0;
    var base_config_1 = require_base_config();
    exports2.decorators = {
      libs: [],
      variables: [
        ["ClassMemberDecoratorContext", base_config_1.TYPE],
        ["DecoratorContext", base_config_1.TYPE],
        ["DecoratorMetadataObject", base_config_1.TYPE],
        ["DecoratorMetadata", base_config_1.TYPE],
        ["ClassDecoratorContext", base_config_1.TYPE],
        ["ClassMethodDecoratorContext", base_config_1.TYPE],
        ["ClassGetterDecoratorContext", base_config_1.TYPE],
        ["ClassSetterDecoratorContext", base_config_1.TYPE],
        ["ClassAccessorDecoratorContext", base_config_1.TYPE],
        ["ClassAccessorDecoratorTarget", base_config_1.TYPE],
        ["ClassAccessorDecoratorResult", base_config_1.TYPE],
        ["ClassFieldDecoratorContext", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.legacy.js
var require_decorators_legacy = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.legacy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decorators_legacy = void 0;
    var base_config_1 = require_base_config();
    exports2.decorators_legacy = {
      libs: [],
      variables: [
        ["ClassDecorator", base_config_1.TYPE],
        ["PropertyDecorator", base_config_1.TYPE],
        ["MethodDecorator", base_config_1.TYPE],
        ["ParameterDecorator", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/dom.js
var require_dom = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/dom.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dom = void 0;
    var base_config_1 = require_base_config();
    exports2.dom = {
      libs: [],
      variables: [
        ["AddEventListenerOptions", base_config_1.TYPE],
        ["AddressErrors", base_config_1.TYPE],
        ["AesCbcParams", base_config_1.TYPE],
        ["AesCtrParams", base_config_1.TYPE],
        ["AesDerivedKeyParams", base_config_1.TYPE],
        ["AesGcmParams", base_config_1.TYPE],
        ["AesKeyAlgorithm", base_config_1.TYPE],
        ["AesKeyGenParams", base_config_1.TYPE],
        ["Algorithm", base_config_1.TYPE],
        ["AnalyserOptions", base_config_1.TYPE],
        ["AnimationEventInit", base_config_1.TYPE],
        ["AnimationPlaybackEventInit", base_config_1.TYPE],
        ["AssignedNodesOptions", base_config_1.TYPE],
        ["AudioBufferOptions", base_config_1.TYPE],
        ["AudioBufferSourceOptions", base_config_1.TYPE],
        ["AudioConfiguration", base_config_1.TYPE],
        ["AudioContextOptions", base_config_1.TYPE],
        ["AudioDataCopyToOptions", base_config_1.TYPE],
        ["AudioDataInit", base_config_1.TYPE],
        ["AudioDecoderConfig", base_config_1.TYPE],
        ["AudioDecoderInit", base_config_1.TYPE],
        ["AudioDecoderSupport", base_config_1.TYPE],
        ["AudioEncoderConfig", base_config_1.TYPE],
        ["AudioEncoderInit", base_config_1.TYPE],
        ["AudioEncoderSupport", base_config_1.TYPE],
        ["AudioNodeOptions", base_config_1.TYPE],
        ["AudioProcessingEventInit", base_config_1.TYPE],
        ["AudioTimestamp", base_config_1.TYPE],
        ["AudioWorkletNodeOptions", base_config_1.TYPE],
        ["AuthenticationExtensionsClientInputs", base_config_1.TYPE],
        ["AuthenticationExtensionsClientInputsJSON", base_config_1.TYPE],
        ["AuthenticationExtensionsClientOutputs", base_config_1.TYPE],
        ["AuthenticationExtensionsLargeBlobInputs", base_config_1.TYPE],
        ["AuthenticationExtensionsLargeBlobInputsJSON", base_config_1.TYPE],
        ["AuthenticationExtensionsLargeBlobOutputs", base_config_1.TYPE],
        ["AuthenticationExtensionsPRFInputs", base_config_1.TYPE],
        ["AuthenticationExtensionsPRFInputsJSON", base_config_1.TYPE],
        ["AuthenticationExtensionsPRFOutputs", base_config_1.TYPE],
        ["AuthenticationExtensionsPRFValues", base_config_1.TYPE],
        ["AuthenticationExtensionsPRFValuesJSON", base_config_1.TYPE],
        ["AuthenticatorSelectionCriteria", base_config_1.TYPE],
        ["AvcEncoderConfig", base_config_1.TYPE],
        ["BiquadFilterOptions", base_config_1.TYPE],
        ["BlobEventInit", base_config_1.TYPE],
        ["BlobPropertyBag", base_config_1.TYPE],
        ["CSSMatrixComponentOptions", base_config_1.TYPE],
        ["CSSNumericType", base_config_1.TYPE],
        ["CSSStyleSheetInit", base_config_1.TYPE],
        ["CacheQueryOptions", base_config_1.TYPE],
        ["CanvasRenderingContext2DSettings", base_config_1.TYPE],
        ["CaretPositionFromPointOptions", base_config_1.TYPE],
        ["ChannelMergerOptions", base_config_1.TYPE],
        ["ChannelSplitterOptions", base_config_1.TYPE],
        ["CheckVisibilityOptions", base_config_1.TYPE],
        ["ClientQueryOptions", base_config_1.TYPE],
        ["ClipboardEventInit", base_config_1.TYPE],
        ["ClipboardItemOptions", base_config_1.TYPE],
        ["CloseEventInit", base_config_1.TYPE],
        ["CompositionEventInit", base_config_1.TYPE],
        ["ComputedEffectTiming", base_config_1.TYPE],
        ["ComputedKeyframe", base_config_1.TYPE],
        ["ConstantSourceOptions", base_config_1.TYPE],
        ["ConstrainBooleanParameters", base_config_1.TYPE],
        ["ConstrainDOMStringParameters", base_config_1.TYPE],
        ["ConstrainDoubleRange", base_config_1.TYPE],
        ["ConstrainULongRange", base_config_1.TYPE],
        ["ContentVisibilityAutoStateChangeEventInit", base_config_1.TYPE],
        ["ConvolverOptions", base_config_1.TYPE],
        ["CookieChangeEventInit", base_config_1.TYPE],
        ["CookieInit", base_config_1.TYPE],
        ["CookieListItem", base_config_1.TYPE],
        ["CookieStoreDeleteOptions", base_config_1.TYPE],
        ["CookieStoreGetOptions", base_config_1.TYPE],
        ["CredentialCreationOptions", base_config_1.TYPE],
        ["CredentialPropertiesOutput", base_config_1.TYPE],
        ["CredentialRequestOptions", base_config_1.TYPE],
        ["CryptoKeyPair", base_config_1.TYPE],
        ["CustomEventInit", base_config_1.TYPE],
        ["DOMMatrix2DInit", base_config_1.TYPE],
        ["DOMMatrixInit", base_config_1.TYPE],
        ["DOMPointInit", base_config_1.TYPE],
        ["DOMQuadInit", base_config_1.TYPE],
        ["DOMRectInit", base_config_1.TYPE],
        ["DelayOptions", base_config_1.TYPE],
        ["DeviceMotionEventAccelerationInit", base_config_1.TYPE],
        ["DeviceMotionEventInit", base_config_1.TYPE],
        ["DeviceMotionEventRotationRateInit", base_config_1.TYPE],
        ["DeviceOrientationEventInit", base_config_1.TYPE],
        ["DisplayMediaStreamOptions", base_config_1.TYPE],
        ["DocumentTimelineOptions", base_config_1.TYPE],
        ["DoubleRange", base_config_1.TYPE],
        ["DragEventInit", base_config_1.TYPE],
        ["DynamicsCompressorOptions", base_config_1.TYPE],
        ["EcKeyAlgorithm", base_config_1.TYPE],
        ["EcKeyGenParams", base_config_1.TYPE],
        ["EcKeyImportParams", base_config_1.TYPE],
        ["EcdhKeyDeriveParams", base_config_1.TYPE],
        ["EcdsaParams", base_config_1.TYPE],
        ["EffectTiming", base_config_1.TYPE],
        ["ElementCreationOptions", base_config_1.TYPE],
        ["ElementDefinitionOptions", base_config_1.TYPE],
        ["EncodedAudioChunkInit", base_config_1.TYPE],
        ["EncodedAudioChunkMetadata", base_config_1.TYPE],
        ["EncodedVideoChunkInit", base_config_1.TYPE],
        ["EncodedVideoChunkMetadata", base_config_1.TYPE],
        ["ErrorEventInit", base_config_1.TYPE],
        ["EventInit", base_config_1.TYPE],
        ["EventListenerOptions", base_config_1.TYPE],
        ["EventModifierInit", base_config_1.TYPE],
        ["EventSourceInit", base_config_1.TYPE],
        ["FilePropertyBag", base_config_1.TYPE],
        ["FileSystemCreateWritableOptions", base_config_1.TYPE],
        ["FileSystemFlags", base_config_1.TYPE],
        ["FileSystemGetDirectoryOptions", base_config_1.TYPE],
        ["FileSystemGetFileOptions", base_config_1.TYPE],
        ["FileSystemRemoveOptions", base_config_1.TYPE],
        ["FocusEventInit", base_config_1.TYPE],
        ["FocusOptions", base_config_1.TYPE],
        ["FontFaceDescriptors", base_config_1.TYPE],
        ["FontFaceSetLoadEventInit", base_config_1.TYPE],
        ["FormDataEventInit", base_config_1.TYPE],
        ["FullscreenOptions", base_config_1.TYPE],
        ["GainOptions", base_config_1.TYPE],
        ["GamepadEffectParameters", base_config_1.TYPE],
        ["GamepadEventInit", base_config_1.TYPE],
        ["GetAnimationsOptions", base_config_1.TYPE],
        ["GetComposedRangesOptions", base_config_1.TYPE],
        ["GetHTMLOptions", base_config_1.TYPE],
        ["GetNotificationOptions", base_config_1.TYPE],
        ["GetRootNodeOptions", base_config_1.TYPE],
        ["HashChangeEventInit", base_config_1.TYPE],
        ["HkdfParams", base_config_1.TYPE],
        ["HmacImportParams", base_config_1.TYPE],
        ["HmacKeyAlgorithm", base_config_1.TYPE],
        ["HmacKeyGenParams", base_config_1.TYPE],
        ["IDBDatabaseInfo", base_config_1.TYPE],
        ["IDBIndexParameters", base_config_1.TYPE],
        ["IDBObjectStoreParameters", base_config_1.TYPE],
        ["IDBTransactionOptions", base_config_1.TYPE],
        ["IDBVersionChangeEventInit", base_config_1.TYPE],
        ["IIRFilterOptions", base_config_1.TYPE],
        ["IdleRequestOptions", base_config_1.TYPE],
        ["ImageBitmapOptions", base_config_1.TYPE],
        ["ImageBitmapRenderingContextSettings", base_config_1.TYPE],
        ["ImageDataSettings", base_config_1.TYPE],
        ["ImageDecodeOptions", base_config_1.TYPE],
        ["ImageDecodeResult", base_config_1.TYPE],
        ["ImageDecoderInit", base_config_1.TYPE],
        ["ImageEncodeOptions", base_config_1.TYPE],
        ["ImportNodeOptions", base_config_1.TYPE],
        ["InputEventInit", base_config_1.TYPE],
        ["IntersectionObserverInit", base_config_1.TYPE],
        ["JsonWebKey", base_config_1.TYPE],
        ["KeyAlgorithm", base_config_1.TYPE],
        ["KeySystemTrackConfiguration", base_config_1.TYPE],
        ["KeyboardEventInit", base_config_1.TYPE],
        ["Keyframe", base_config_1.TYPE],
        ["KeyframeAnimationOptions", base_config_1.TYPE],
        ["KeyframeEffectOptions", base_config_1.TYPE],
        ["LockInfo", base_config_1.TYPE],
        ["LockManagerSnapshot", base_config_1.TYPE],
        ["LockOptions", base_config_1.TYPE],
        ["MIDIConnectionEventInit", base_config_1.TYPE],
        ["MIDIMessageEventInit", base_config_1.TYPE],
        ["MIDIOptions", base_config_1.TYPE],
        ["MediaCapabilitiesDecodingInfo", base_config_1.TYPE],
        ["MediaCapabilitiesEncodingInfo", base_config_1.TYPE],
        ["MediaCapabilitiesInfo", base_config_1.TYPE],
        ["MediaCapabilitiesKeySystemConfiguration", base_config_1.TYPE],
        ["MediaConfiguration", base_config_1.TYPE],
        ["MediaDecodingConfiguration", base_config_1.TYPE],
        ["MediaElementAudioSourceOptions", base_config_1.TYPE],
        ["MediaEncodingConfiguration", base_config_1.TYPE],
        ["MediaEncryptedEventInit", base_config_1.TYPE],
        ["MediaImage", base_config_1.TYPE],
        ["MediaKeyMessageEventInit", base_config_1.TYPE],
        ["MediaKeySystemConfiguration", base_config_1.TYPE],
        ["MediaKeySystemMediaCapability", base_config_1.TYPE],
        ["MediaKeysPolicy", base_config_1.TYPE],
        ["MediaMetadataInit", base_config_1.TYPE],
        ["MediaPositionState", base_config_1.TYPE],
        ["MediaQueryListEventInit", base_config_1.TYPE],
        ["MediaRecorderOptions", base_config_1.TYPE],
        ["MediaSessionActionDetails", base_config_1.TYPE],
        ["MediaSettingsRange", base_config_1.TYPE],
        ["MediaStreamAudioSourceOptions", base_config_1.TYPE],
        ["MediaStreamConstraints", base_config_1.TYPE],
        ["MediaStreamTrackEventInit", base_config_1.TYPE],
        ["MediaTrackCapabilities", base_config_1.TYPE],
        ["MediaTrackConstraintSet", base_config_1.TYPE],
        ["MediaTrackConstraints", base_config_1.TYPE],
        ["MediaTrackSettings", base_config_1.TYPE],
        ["MediaTrackSupportedConstraints", base_config_1.TYPE],
        ["MessageEventInit", base_config_1.TYPE],
        ["MouseEventInit", base_config_1.TYPE],
        ["MultiCacheQueryOptions", base_config_1.TYPE],
        ["MutationObserverInit", base_config_1.TYPE],
        ["NavigationPreloadState", base_config_1.TYPE],
        ["NotificationOptions", base_config_1.TYPE],
        ["OfflineAudioCompletionEventInit", base_config_1.TYPE],
        ["OfflineAudioContextOptions", base_config_1.TYPE],
        ["OptionalEffectTiming", base_config_1.TYPE],
        ["OpusEncoderConfig", base_config_1.TYPE],
        ["OscillatorOptions", base_config_1.TYPE],
        ["PageRevealEventInit", base_config_1.TYPE],
        ["PageSwapEventInit", base_config_1.TYPE],
        ["PageTransitionEventInit", base_config_1.TYPE],
        ["PannerOptions", base_config_1.TYPE],
        ["PayerErrors", base_config_1.TYPE],
        ["PaymentCurrencyAmount", base_config_1.TYPE],
        ["PaymentDetailsBase", base_config_1.TYPE],
        ["PaymentDetailsInit", base_config_1.TYPE],
        ["PaymentDetailsModifier", base_config_1.TYPE],
        ["PaymentDetailsUpdate", base_config_1.TYPE],
        ["PaymentItem", base_config_1.TYPE],
        ["PaymentMethodChangeEventInit", base_config_1.TYPE],
        ["PaymentMethodData", base_config_1.TYPE],
        ["PaymentOptions", base_config_1.TYPE],
        ["PaymentRequestUpdateEventInit", base_config_1.TYPE],
        ["PaymentShippingOption", base_config_1.TYPE],
        ["PaymentValidationErrors", base_config_1.TYPE],
        ["Pbkdf2Params", base_config_1.TYPE],
        ["PerformanceMarkOptions", base_config_1.TYPE],
        ["PerformanceMeasureOptions", base_config_1.TYPE],
        ["PerformanceObserverInit", base_config_1.TYPE],
        ["PeriodicWaveConstraints", base_config_1.TYPE],
        ["PeriodicWaveOptions", base_config_1.TYPE],
        ["PermissionDescriptor", base_config_1.TYPE],
        ["PhotoCapabilities", base_config_1.TYPE],
        ["PhotoSettings", base_config_1.TYPE],
        ["PictureInPictureEventInit", base_config_1.TYPE],
        ["PlaneLayout", base_config_1.TYPE],
        ["PointerEventInit", base_config_1.TYPE],
        ["PointerLockOptions", base_config_1.TYPE],
        ["PopStateEventInit", base_config_1.TYPE],
        ["PositionOptions", base_config_1.TYPE],
        ["ProgressEventInit", base_config_1.TYPE],
        ["PromiseRejectionEventInit", base_config_1.TYPE],
        ["PropertyDefinition", base_config_1.TYPE],
        ["PropertyIndexedKeyframes", base_config_1.TYPE],
        ["PublicKeyCredentialCreationOptions", base_config_1.TYPE],
        ["PublicKeyCredentialCreationOptionsJSON", base_config_1.TYPE],
        ["PublicKeyCredentialDescriptor", base_config_1.TYPE],
        ["PublicKeyCredentialDescriptorJSON", base_config_1.TYPE],
        ["PublicKeyCredentialEntity", base_config_1.TYPE],
        ["PublicKeyCredentialParameters", base_config_1.TYPE],
        ["PublicKeyCredentialRequestOptions", base_config_1.TYPE],
        ["PublicKeyCredentialRequestOptionsJSON", base_config_1.TYPE],
        ["PublicKeyCredentialRpEntity", base_config_1.TYPE],
        ["PublicKeyCredentialUserEntity", base_config_1.TYPE],
        ["PublicKeyCredentialUserEntityJSON", base_config_1.TYPE],
        ["PushSubscriptionJSON", base_config_1.TYPE],
        ["PushSubscriptionOptionsInit", base_config_1.TYPE],
        ["QueuingStrategy", base_config_1.TYPE],
        ["QueuingStrategyInit", base_config_1.TYPE],
        ["RTCAnswerOptions", base_config_1.TYPE],
        ["RTCCertificateExpiration", base_config_1.TYPE],
        ["RTCConfiguration", base_config_1.TYPE],
        ["RTCDTMFToneChangeEventInit", base_config_1.TYPE],
        ["RTCDataChannelEventInit", base_config_1.TYPE],
        ["RTCDataChannelInit", base_config_1.TYPE],
        ["RTCDtlsFingerprint", base_config_1.TYPE],
        ["RTCEncodedAudioFrameMetadata", base_config_1.TYPE],
        ["RTCEncodedFrameMetadata", base_config_1.TYPE],
        ["RTCEncodedVideoFrameMetadata", base_config_1.TYPE],
        ["RTCErrorEventInit", base_config_1.TYPE],
        ["RTCErrorInit", base_config_1.TYPE],
        ["RTCIceCandidateInit", base_config_1.TYPE],
        ["RTCIceCandidatePairStats", base_config_1.TYPE],
        ["RTCIceServer", base_config_1.TYPE],
        ["RTCInboundRtpStreamStats", base_config_1.TYPE],
        ["RTCLocalIceCandidateInit", base_config_1.TYPE],
        ["RTCLocalSessionDescriptionInit", base_config_1.TYPE],
        ["RTCOfferAnswerOptions", base_config_1.TYPE],
        ["RTCOfferOptions", base_config_1.TYPE],
        ["RTCOutboundRtpStreamStats", base_config_1.TYPE],
        ["RTCPeerConnectionIceErrorEventInit", base_config_1.TYPE],
        ["RTCPeerConnectionIceEventInit", base_config_1.TYPE],
        ["RTCReceivedRtpStreamStats", base_config_1.TYPE],
        ["RTCRtcpParameters", base_config_1.TYPE],
        ["RTCRtpCapabilities", base_config_1.TYPE],
        ["RTCRtpCodec", base_config_1.TYPE],
        ["RTCRtpCodecParameters", base_config_1.TYPE],
        ["RTCRtpCodingParameters", base_config_1.TYPE],
        ["RTCRtpContributingSource", base_config_1.TYPE],
        ["RTCRtpEncodingParameters", base_config_1.TYPE],
        ["RTCRtpHeaderExtensionCapability", base_config_1.TYPE],
        ["RTCRtpHeaderExtensionParameters", base_config_1.TYPE],
        ["RTCRtpParameters", base_config_1.TYPE],
        ["RTCRtpReceiveParameters", base_config_1.TYPE],
        ["RTCRtpSendParameters", base_config_1.TYPE],
        ["RTCRtpStreamStats", base_config_1.TYPE],
        ["RTCRtpSynchronizationSource", base_config_1.TYPE],
        ["RTCRtpTransceiverInit", base_config_1.TYPE],
        ["RTCSentRtpStreamStats", base_config_1.TYPE],
        ["RTCSessionDescriptionInit", base_config_1.TYPE],
        ["RTCSetParameterOptions", base_config_1.TYPE],
        ["RTCStats", base_config_1.TYPE],
        ["RTCTrackEventInit", base_config_1.TYPE],
        ["RTCTransportStats", base_config_1.TYPE],
        ["ReadableStreamGetReaderOptions", base_config_1.TYPE],
        ["ReadableStreamIteratorOptions", base_config_1.TYPE],
        ["ReadableStreamReadDoneResult", base_config_1.TYPE],
        ["ReadableStreamReadValueResult", base_config_1.TYPE],
        ["ReadableWritablePair", base_config_1.TYPE],
        ["RegistrationOptions", base_config_1.TYPE],
        ["ReportingObserverOptions", base_config_1.TYPE],
        ["RequestInit", base_config_1.TYPE],
        ["ResizeObserverOptions", base_config_1.TYPE],
        ["ResponseInit", base_config_1.TYPE],
        ["RsaHashedImportParams", base_config_1.TYPE],
        ["RsaHashedKeyAlgorithm", base_config_1.TYPE],
        ["RsaHashedKeyGenParams", base_config_1.TYPE],
        ["RsaKeyAlgorithm", base_config_1.TYPE],
        ["RsaKeyGenParams", base_config_1.TYPE],
        ["RsaOaepParams", base_config_1.TYPE],
        ["RsaOtherPrimesInfo", base_config_1.TYPE],
        ["RsaPssParams", base_config_1.TYPE],
        ["SVGBoundingBoxOptions", base_config_1.TYPE],
        ["ScrollIntoViewOptions", base_config_1.TYPE],
        ["ScrollOptions", base_config_1.TYPE],
        ["ScrollToOptions", base_config_1.TYPE],
        ["SecurityPolicyViolationEventInit", base_config_1.TYPE],
        ["ShadowRootInit", base_config_1.TYPE],
        ["ShareData", base_config_1.TYPE],
        ["SpeechSynthesisErrorEventInit", base_config_1.TYPE],
        ["SpeechSynthesisEventInit", base_config_1.TYPE],
        ["StartViewTransitionOptions", base_config_1.TYPE],
        ["StaticRangeInit", base_config_1.TYPE],
        ["StereoPannerOptions", base_config_1.TYPE],
        ["StorageEstimate", base_config_1.TYPE],
        ["StorageEventInit", base_config_1.TYPE],
        ["StreamPipeOptions", base_config_1.TYPE],
        ["StructuredSerializeOptions", base_config_1.TYPE],
        ["SubmitEventInit", base_config_1.TYPE],
        ["TextDecodeOptions", base_config_1.TYPE],
        ["TextDecoderOptions", base_config_1.TYPE],
        ["TextEncoderEncodeIntoResult", base_config_1.TYPE],
        ["ToggleEventInit", base_config_1.TYPE],
        ["TouchEventInit", base_config_1.TYPE],
        ["TouchInit", base_config_1.TYPE],
        ["TrackEventInit", base_config_1.TYPE],
        ["Transformer", base_config_1.TYPE],
        ["TransitionEventInit", base_config_1.TYPE],
        ["UIEventInit", base_config_1.TYPE],
        ["ULongRange", base_config_1.TYPE],
        ["UnderlyingByteSource", base_config_1.TYPE],
        ["UnderlyingDefaultSource", base_config_1.TYPE],
        ["UnderlyingSink", base_config_1.TYPE],
        ["UnderlyingSource", base_config_1.TYPE],
        ["ValidityStateFlags", base_config_1.TYPE],
        ["VideoColorSpaceInit", base_config_1.TYPE],
        ["VideoConfiguration", base_config_1.TYPE],
        ["VideoDecoderConfig", base_config_1.TYPE],
        ["VideoDecoderInit", base_config_1.TYPE],
        ["VideoDecoderSupport", base_config_1.TYPE],
        ["VideoEncoderConfig", base_config_1.TYPE],
        ["VideoEncoderEncodeOptions", base_config_1.TYPE],
        ["VideoEncoderEncodeOptionsForAvc", base_config_1.TYPE],
        ["VideoEncoderInit", base_config_1.TYPE],
        ["VideoEncoderSupport", base_config_1.TYPE],
        ["VideoFrameBufferInit", base_config_1.TYPE],
        ["VideoFrameCallbackMetadata", base_config_1.TYPE],
        ["VideoFrameCopyToOptions", base_config_1.TYPE],
        ["VideoFrameInit", base_config_1.TYPE],
        ["WaveShaperOptions", base_config_1.TYPE],
        ["WebGLContextAttributes", base_config_1.TYPE],
        ["WebGLContextEventInit", base_config_1.TYPE],
        ["WebTransportCloseInfo", base_config_1.TYPE],
        ["WebTransportErrorOptions", base_config_1.TYPE],
        ["WebTransportHash", base_config_1.TYPE],
        ["WebTransportOptions", base_config_1.TYPE],
        ["WebTransportSendOptions", base_config_1.TYPE],
        ["WebTransportSendStreamOptions", base_config_1.TYPE],
        ["WheelEventInit", base_config_1.TYPE],
        ["WindowPostMessageOptions", base_config_1.TYPE],
        ["WorkerOptions", base_config_1.TYPE],
        ["WorkletOptions", base_config_1.TYPE],
        ["WriteParams", base_config_1.TYPE],
        ["NodeFilter", base_config_1.TYPE_VALUE],
        ["XPathNSResolver", base_config_1.TYPE],
        ["ANGLE_instanced_arrays", base_config_1.TYPE],
        ["ARIAMixin", base_config_1.TYPE],
        ["AbortController", base_config_1.TYPE_VALUE],
        ["AbortSignalEventMap", base_config_1.TYPE],
        ["AbortSignal", base_config_1.TYPE_VALUE],
        ["AbstractRange", base_config_1.TYPE_VALUE],
        ["AbstractWorkerEventMap", base_config_1.TYPE],
        ["AbstractWorker", base_config_1.TYPE],
        ["AnalyserNode", base_config_1.TYPE_VALUE],
        ["Animatable", base_config_1.TYPE],
        ["AnimationEventMap", base_config_1.TYPE],
        ["Animation", base_config_1.TYPE_VALUE],
        ["AnimationEffect", base_config_1.TYPE_VALUE],
        ["AnimationEvent", base_config_1.TYPE_VALUE],
        ["AnimationFrameProvider", base_config_1.TYPE],
        ["AnimationPlaybackEvent", base_config_1.TYPE_VALUE],
        ["AnimationTimeline", base_config_1.TYPE_VALUE],
        ["Attr", base_config_1.TYPE_VALUE],
        ["AudioBuffer", base_config_1.TYPE_VALUE],
        ["AudioBufferSourceNode", base_config_1.TYPE_VALUE],
        ["AudioContext", base_config_1.TYPE_VALUE],
        ["AudioData", base_config_1.TYPE_VALUE],
        ["AudioDecoderEventMap", base_config_1.TYPE],
        ["AudioDecoder", base_config_1.TYPE_VALUE],
        ["AudioDestinationNode", base_config_1.TYPE_VALUE],
        ["AudioEncoderEventMap", base_config_1.TYPE],
        ["AudioEncoder", base_config_1.TYPE_VALUE],
        ["AudioListener", base_config_1.TYPE_VALUE],
        ["AudioNode", base_config_1.TYPE_VALUE],
        ["AudioParam", base_config_1.TYPE_VALUE],
        ["AudioParamMap", base_config_1.TYPE_VALUE],
        ["AudioProcessingEvent", base_config_1.TYPE_VALUE],
        ["AudioScheduledSourceNodeEventMap", base_config_1.TYPE],
        ["AudioScheduledSourceNode", base_config_1.TYPE_VALUE],
        ["AudioWorklet", base_config_1.TYPE_VALUE],
        ["AudioWorkletNodeEventMap", base_config_1.TYPE],
        ["AudioWorkletNode", base_config_1.TYPE_VALUE],
        ["AuthenticatorAssertionResponse", base_config_1.TYPE_VALUE],
        ["AuthenticatorAttestationResponse", base_config_1.TYPE_VALUE],
        ["AuthenticatorResponse", base_config_1.TYPE_VALUE],
        ["BarProp", base_config_1.TYPE_VALUE],
        ["BaseAudioContextEventMap", base_config_1.TYPE],
        ["BaseAudioContext", base_config_1.TYPE_VALUE],
        ["BeforeUnloadEvent", base_config_1.TYPE_VALUE],
        ["BiquadFilterNode", base_config_1.TYPE_VALUE],
        ["Blob", base_config_1.TYPE_VALUE],
        ["BlobEvent", base_config_1.TYPE_VALUE],
        ["Body", base_config_1.TYPE],
        ["BroadcastChannelEventMap", base_config_1.TYPE],
        ["BroadcastChannel", base_config_1.TYPE_VALUE],
        ["ByteLengthQueuingStrategy", base_config_1.TYPE_VALUE],
        ["CDATASection", base_config_1.TYPE_VALUE],
        ["CSPViolationReportBody", base_config_1.TYPE_VALUE],
        ["CSSAnimation", base_config_1.TYPE_VALUE],
        ["CSSConditionRule", base_config_1.TYPE_VALUE],
        ["CSSContainerRule", base_config_1.TYPE_VALUE],
        ["CSSCounterStyleRule", base_config_1.TYPE_VALUE],
        ["CSSFontFaceRule", base_config_1.TYPE_VALUE],
        ["CSSFontFeatureValuesRule", base_config_1.TYPE_VALUE],
        ["CSSFontPaletteValuesRule", base_config_1.TYPE_VALUE],
        ["CSSGroupingRule", base_config_1.TYPE_VALUE],
        ["CSSImageValue", base_config_1.TYPE_VALUE],
        ["CSSImportRule", base_config_1.TYPE_VALUE],
        ["CSSKeyframeRule", base_config_1.TYPE_VALUE],
        ["CSSKeyframesRule", base_config_1.TYPE_VALUE],
        ["CSSKeywordValue", base_config_1.TYPE_VALUE],
        ["CSSLayerBlockRule", base_config_1.TYPE_VALUE],
        ["CSSLayerStatementRule", base_config_1.TYPE_VALUE],
        ["CSSMathClamp", base_config_1.TYPE_VALUE],
        ["CSSMathInvert", base_config_1.TYPE_VALUE],
        ["CSSMathMax", base_config_1.TYPE_VALUE],
        ["CSSMathMin", base_config_1.TYPE_VALUE],
        ["CSSMathNegate", base_config_1.TYPE_VALUE],
        ["CSSMathProduct", base_config_1.TYPE_VALUE],
        ["CSSMathSum", base_config_1.TYPE_VALUE],
        ["CSSMathValue", base_config_1.TYPE_VALUE],
        ["CSSMatrixComponent", base_config_1.TYPE_VALUE],
        ["CSSMediaRule", base_config_1.TYPE_VALUE],
        ["CSSNamespaceRule", base_config_1.TYPE_VALUE],
        ["CSSNestedDeclarations", base_config_1.TYPE_VALUE],
        ["CSSNumericArray", base_config_1.TYPE_VALUE],
        ["CSSNumericValue", base_config_1.TYPE_VALUE],
        ["CSSPageRule", base_config_1.TYPE_VALUE],
        ["CSSPerspective", base_config_1.TYPE_VALUE],
        ["CSSPropertyRule", base_config_1.TYPE_VALUE],
        ["CSSRotate", base_config_1.TYPE_VALUE],
        ["CSSRule", base_config_1.TYPE_VALUE],
        ["CSSRuleList", base_config_1.TYPE_VALUE],
        ["CSSScale", base_config_1.TYPE_VALUE],
        ["CSSScopeRule", base_config_1.TYPE_VALUE],
        ["CSSSkew", base_config_1.TYPE_VALUE],
        ["CSSSkewX", base_config_1.TYPE_VALUE],
        ["CSSSkewY", base_config_1.TYPE_VALUE],
        ["CSSStartingStyleRule", base_config_1.TYPE_VALUE],
        ["CSSStyleDeclaration", base_config_1.TYPE_VALUE],
        ["CSSStyleRule", base_config_1.TYPE_VALUE],
        ["CSSStyleSheet", base_config_1.TYPE_VALUE],
        ["CSSStyleValue", base_config_1.TYPE_VALUE],
        ["CSSSupportsRule", base_config_1.TYPE_VALUE],
        ["CSSTransformComponent", base_config_1.TYPE_VALUE],
        ["CSSTransformValue", base_config_1.TYPE_VALUE],
        ["CSSTransition", base_config_1.TYPE_VALUE],
        ["CSSTranslate", base_config_1.TYPE_VALUE],
        ["CSSUnitValue", base_config_1.TYPE_VALUE],
        ["CSSUnparsedValue", base_config_1.TYPE_VALUE],
        ["CSSVariableReferenceValue", base_config_1.TYPE_VALUE],
        ["CSSViewTransitionRule", base_config_1.TYPE_VALUE],
        ["Cache", base_config_1.TYPE_VALUE],
        ["CacheStorage", base_config_1.TYPE_VALUE],
        ["CanvasCaptureMediaStreamTrack", base_config_1.TYPE_VALUE],
        ["CanvasCompositing", base_config_1.TYPE],
        ["CanvasDrawImage", base_config_1.TYPE],
        ["CanvasDrawPath", base_config_1.TYPE],
        ["CanvasFillStrokeStyles", base_config_1.TYPE],
        ["CanvasFilters", base_config_1.TYPE],
        ["CanvasGradient", base_config_1.TYPE_VALUE],
        ["CanvasImageData", base_config_1.TYPE],
        ["CanvasImageSmoothing", base_config_1.TYPE],
        ["CanvasPath", base_config_1.TYPE],
        ["CanvasPathDrawingStyles", base_config_1.TYPE],
        ["CanvasPattern", base_config_1.TYPE_VALUE],
        ["CanvasRect", base_config_1.TYPE],
        ["CanvasRenderingContext2D", base_config_1.TYPE_VALUE],
        ["CanvasSettings", base_config_1.TYPE],
        ["CanvasShadowStyles", base_config_1.TYPE],
        ["CanvasState", base_config_1.TYPE],
        ["CanvasText", base_config_1.TYPE],
        ["CanvasTextDrawingStyles", base_config_1.TYPE],
        ["CanvasTransform", base_config_1.TYPE],
        ["CanvasUserInterface", base_config_1.TYPE],
        ["CaretPosition", base_config_1.TYPE_VALUE],
        ["ChannelMergerNode", base_config_1.TYPE_VALUE],
        ["ChannelSplitterNode", base_config_1.TYPE_VALUE],
        ["CharacterData", base_config_1.TYPE_VALUE],
        ["ChildNode", base_config_1.TYPE],
        ["ClientRect", base_config_1.TYPE],
        ["Clipboard", base_config_1.TYPE_VALUE],
        ["ClipboardEvent", base_config_1.TYPE_VALUE],
        ["ClipboardItem", base_config_1.TYPE_VALUE],
        ["CloseEvent", base_config_1.TYPE_VALUE],
        ["Comment", base_config_1.TYPE_VALUE],
        ["CompositionEvent", base_config_1.TYPE_VALUE],
        ["CompressionStream", base_config_1.TYPE_VALUE],
        ["ConstantSourceNode", base_config_1.TYPE_VALUE],
        ["ContentVisibilityAutoStateChangeEvent", base_config_1.TYPE_VALUE],
        ["ConvolverNode", base_config_1.TYPE_VALUE],
        ["CookieChangeEvent", base_config_1.TYPE_VALUE],
        ["CookieStoreEventMap", base_config_1.TYPE],
        ["CookieStore", base_config_1.TYPE_VALUE],
        ["CookieStoreManager", base_config_1.TYPE_VALUE],
        ["CountQueuingStrategy", base_config_1.TYPE_VALUE],
        ["Credential", base_config_1.TYPE_VALUE],
        ["CredentialsContainer", base_config_1.TYPE_VALUE],
        ["Crypto", base_config_1.TYPE_VALUE],
        ["CryptoKey", base_config_1.TYPE_VALUE],
        ["CustomElementRegistry", base_config_1.TYPE_VALUE],
        ["CustomEvent", base_config_1.TYPE_VALUE],
        ["CustomStateSet", base_config_1.TYPE_VALUE],
        ["DOMException", base_config_1.TYPE_VALUE],
        ["DOMImplementation", base_config_1.TYPE_VALUE],
        ["DOMMatrix", base_config_1.TYPE_VALUE],
        ["SVGMatrix", base_config_1.TYPE_VALUE],
        ["WebKitCSSMatrix", base_config_1.TYPE_VALUE],
        ["DOMMatrixReadOnly", base_config_1.TYPE_VALUE],
        ["DOMParser", base_config_1.TYPE_VALUE],
        ["DOMPoint", base_config_1.TYPE_VALUE],
        ["SVGPoint", base_config_1.TYPE_VALUE],
        ["DOMPointReadOnly", base_config_1.TYPE_VALUE],
        ["DOMQuad", base_config_1.TYPE_VALUE],
        ["DOMRect", base_config_1.TYPE_VALUE],
        ["SVGRect", base_config_1.TYPE_VALUE],
        ["DOMRectList", base_config_1.TYPE_VALUE],
        ["DOMRectReadOnly", base_config_1.TYPE_VALUE],
        ["DOMStringList", base_config_1.TYPE_VALUE],
        ["DOMStringMap", base_config_1.TYPE_VALUE],
        ["DOMTokenList", base_config_1.TYPE_VALUE],
        ["DataTransfer", base_config_1.TYPE_VALUE],
        ["DataTransferItem", base_config_1.TYPE_VALUE],
        ["DataTransferItemList", base_config_1.TYPE_VALUE],
        ["DecompressionStream", base_config_1.TYPE_VALUE],
        ["DelayNode", base_config_1.TYPE_VALUE],
        ["DeviceMotionEvent", base_config_1.TYPE_VALUE],
        ["DeviceMotionEventAcceleration", base_config_1.TYPE],
        ["DeviceMotionEventRotationRate", base_config_1.TYPE],
        ["DeviceOrientationEvent", base_config_1.TYPE_VALUE],
        ["DocumentEventMap", base_config_1.TYPE],
        ["Document", base_config_1.TYPE_VALUE],
        ["DocumentFragment", base_config_1.TYPE_VALUE],
        ["DocumentOrShadowRoot", base_config_1.TYPE],
        ["DocumentTimeline", base_config_1.TYPE_VALUE],
        ["DocumentType", base_config_1.TYPE_VALUE],
        ["DragEvent", base_config_1.TYPE_VALUE],
        ["DynamicsCompressorNode", base_config_1.TYPE_VALUE],
        ["EXT_blend_minmax", base_config_1.TYPE],
        ["EXT_color_buffer_float", base_config_1.TYPE],
        ["EXT_color_buffer_half_float", base_config_1.TYPE],
        ["EXT_float_blend", base_config_1.TYPE],
        ["EXT_frag_depth", base_config_1.TYPE],
        ["EXT_sRGB", base_config_1.TYPE],
        ["EXT_shader_texture_lod", base_config_1.TYPE],
        ["EXT_texture_compression_bptc", base_config_1.TYPE],
        ["EXT_texture_compression_rgtc", base_config_1.TYPE],
        ["EXT_texture_filter_anisotropic", base_config_1.TYPE],
        ["EXT_texture_norm16", base_config_1.TYPE],
        ["ElementEventMap", base_config_1.TYPE],
        ["Element", base_config_1.TYPE_VALUE],
        ["ElementCSSInlineStyle", base_config_1.TYPE],
        ["ElementContentEditable", base_config_1.TYPE],
        ["ElementInternals", base_config_1.TYPE_VALUE],
        ["EncodedAudioChunk", base_config_1.TYPE_VALUE],
        ["EncodedVideoChunk", base_config_1.TYPE_VALUE],
        ["ErrorEvent", base_config_1.TYPE_VALUE],
        ["Event", base_config_1.TYPE_VALUE],
        ["EventCounts", base_config_1.TYPE_VALUE],
        ["EventListener", base_config_1.TYPE],
        ["EventListenerObject", base_config_1.TYPE],
        ["EventSourceEventMap", base_config_1.TYPE],
        ["EventSource", base_config_1.TYPE_VALUE],
        ["EventTarget", base_config_1.TYPE_VALUE],
        ["External", base_config_1.TYPE_VALUE],
        ["File", base_config_1.TYPE_VALUE],
        ["FileList", base_config_1.TYPE_VALUE],
        ["FileReaderEventMap", base_config_1.TYPE],
        ["FileReader", base_config_1.TYPE_VALUE],
        ["FileSystem", base_config_1.TYPE_VALUE],
        ["FileSystemDirectoryEntry", base_config_1.TYPE_VALUE],
        ["FileSystemDirectoryHandle", base_config_1.TYPE_VALUE],
        ["FileSystemDirectoryReader", base_config_1.TYPE_VALUE],
        ["FileSystemEntry", base_config_1.TYPE_VALUE],
        ["FileSystemFileEntry", base_config_1.TYPE_VALUE],
        ["FileSystemFileHandle", base_config_1.TYPE_VALUE],
        ["FileSystemHandle", base_config_1.TYPE_VALUE],
        ["FileSystemWritableFileStream", base_config_1.TYPE_VALUE],
        ["FocusEvent", base_config_1.TYPE_VALUE],
        ["FontFace", base_config_1.TYPE_VALUE],
        ["FontFaceSetEventMap", base_config_1.TYPE],
        ["FontFaceSet", base_config_1.TYPE_VALUE],
        ["FontFaceSetLoadEvent", base_config_1.TYPE_VALUE],
        ["FontFaceSource", base_config_1.TYPE],
        ["FormData", base_config_1.TYPE_VALUE],
        ["FormDataEvent", base_config_1.TYPE_VALUE],
        ["FragmentDirective", base_config_1.TYPE_VALUE],
        ["GPUError", base_config_1.TYPE],
        ["GainNode", base_config_1.TYPE_VALUE],
        ["Gamepad", base_config_1.TYPE_VALUE],
        ["GamepadButton", base_config_1.TYPE_VALUE],
        ["GamepadEvent", base_config_1.TYPE_VALUE],
        ["GamepadHapticActuator", base_config_1.TYPE_VALUE],
        ["GenericTransformStream", base_config_1.TYPE],
        ["Geolocation", base_config_1.TYPE_VALUE],
        ["GeolocationCoordinates", base_config_1.TYPE_VALUE],
        ["GeolocationPosition", base_config_1.TYPE_VALUE],
        ["GeolocationPositionError", base_config_1.TYPE_VALUE],
        ["GlobalEventHandlersEventMap", base_config_1.TYPE],
        ["GlobalEventHandlers", base_config_1.TYPE],
        ["HTMLAllCollection", base_config_1.TYPE_VALUE],
        ["HTMLAnchorElement", base_config_1.TYPE_VALUE],
        ["HTMLAreaElement", base_config_1.TYPE_VALUE],
        ["HTMLAudioElement", base_config_1.TYPE_VALUE],
        ["HTMLBRElement", base_config_1.TYPE_VALUE],
        ["HTMLBaseElement", base_config_1.TYPE_VALUE],
        ["HTMLBodyElementEventMap", base_config_1.TYPE],
        ["HTMLBodyElement", base_config_1.TYPE_VALUE],
        ["HTMLButtonElement", base_config_1.TYPE_VALUE],
        ["HTMLCanvasElement", base_config_1.TYPE_VALUE],
        ["HTMLCollectionBase", base_config_1.TYPE],
        ["HTMLCollection", base_config_1.TYPE_VALUE],
        ["HTMLCollectionOf", base_config_1.TYPE],
        ["HTMLDListElement", base_config_1.TYPE_VALUE],
        ["HTMLDataElement", base_config_1.TYPE_VALUE],
        ["HTMLDataListElement", base_config_1.TYPE_VALUE],
        ["HTMLDetailsElement", base_config_1.TYPE_VALUE],
        ["HTMLDialogElement", base_config_1.TYPE_VALUE],
        ["HTMLDirectoryElement", base_config_1.TYPE_VALUE],
        ["HTMLDivElement", base_config_1.TYPE_VALUE],
        ["HTMLDocument", base_config_1.TYPE_VALUE],
        ["HTMLElementEventMap", base_config_1.TYPE],
        ["HTMLElement", base_config_1.TYPE_VALUE],
        ["HTMLEmbedElement", base_config_1.TYPE_VALUE],
        ["HTMLFieldSetElement", base_config_1.TYPE_VALUE],
        ["HTMLFontElement", base_config_1.TYPE_VALUE],
        ["HTMLFormControlsCollection", base_config_1.TYPE_VALUE],
        ["HTMLFormElement", base_config_1.TYPE_VALUE],
        ["HTMLFrameElement", base_config_1.TYPE_VALUE],
        ["HTMLFrameSetElementEventMap", base_config_1.TYPE],
        ["HTMLFrameSetElement", base_config_1.TYPE_VALUE],
        ["HTMLHRElement", base_config_1.TYPE_VALUE],
        ["HTMLHeadElement", base_config_1.TYPE_VALUE],
        ["HTMLHeadingElement", base_config_1.TYPE_VALUE],
        ["HTMLHtmlElement", base_config_1.TYPE_VALUE],
        ["HTMLHyperlinkElementUtils", base_config_1.TYPE],
        ["HTMLIFrameElement", base_config_1.TYPE_VALUE],
        ["HTMLImageElement", base_config_1.TYPE_VALUE],
        ["HTMLInputElement", base_config_1.TYPE_VALUE],
        ["HTMLLIElement", base_config_1.TYPE_VALUE],
        ["HTMLLabelElement", base_config_1.TYPE_VALUE],
        ["HTMLLegendElement", base_config_1.TYPE_VALUE],
        ["HTMLLinkElement", base_config_1.TYPE_VALUE],
        ["HTMLMapElement", base_config_1.TYPE_VALUE],
        ["HTMLMarqueeElement", base_config_1.TYPE_VALUE],
        ["HTMLMediaElementEventMap", base_config_1.TYPE],
        ["HTMLMediaElement", base_config_1.TYPE_VALUE],
        ["HTMLMenuElement", base_config_1.TYPE_VALUE],
        ["HTMLMetaElement", base_config_1.TYPE_VALUE],
        ["HTMLMeterElement", base_config_1.TYPE_VALUE],
        ["HTMLModElement", base_config_1.TYPE_VALUE],
        ["HTMLOListElement", base_config_1.TYPE_VALUE],
        ["HTMLObjectElement", base_config_1.TYPE_VALUE],
        ["HTMLOptGroupElement", base_config_1.TYPE_VALUE],
        ["HTMLOptionElement", base_config_1.TYPE_VALUE],
        ["HTMLOptionsCollection", base_config_1.TYPE_VALUE],
        ["HTMLOrSVGElement", base_config_1.TYPE],
        ["HTMLOutputElement", base_config_1.TYPE_VALUE],
        ["HTMLParagraphElement", base_config_1.TYPE_VALUE],
        ["HTMLParamElement", base_config_1.TYPE_VALUE],
        ["HTMLPictureElement", base_config_1.TYPE_VALUE],
        ["HTMLPreElement", base_config_1.TYPE_VALUE],
        ["HTMLProgressElement", base_config_1.TYPE_VALUE],
        ["HTMLQuoteElement", base_config_1.TYPE_VALUE],
        ["HTMLScriptElement", base_config_1.TYPE_VALUE],
        ["HTMLSelectElement", base_config_1.TYPE_VALUE],
        ["HTMLSlotElement", base_config_1.TYPE_VALUE],
        ["HTMLSourceElement", base_config_1.TYPE_VALUE],
        ["HTMLSpanElement", base_config_1.TYPE_VALUE],
        ["HTMLStyleElement", base_config_1.TYPE_VALUE],
        ["HTMLTableCaptionElement", base_config_1.TYPE_VALUE],
        ["HTMLTableCellElement", base_config_1.TYPE_VALUE],
        ["HTMLTableColElement", base_config_1.TYPE_VALUE],
        ["HTMLTableDataCellElement", base_config_1.TYPE],
        ["HTMLTableElement", base_config_1.TYPE_VALUE],
        ["HTMLTableHeaderCellElement", base_config_1.TYPE],
        ["HTMLTableRowElement", base_config_1.TYPE_VALUE],
        ["HTMLTableSectionElement", base_config_1.TYPE_VALUE],
        ["HTMLTemplateElement", base_config_1.TYPE_VALUE],
        ["HTMLTextAreaElement", base_config_1.TYPE_VALUE],
        ["HTMLTimeElement", base_config_1.TYPE_VALUE],
        ["HTMLTitleElement", base_config_1.TYPE_VALUE],
        ["HTMLTrackElement", base_config_1.TYPE_VALUE],
        ["HTMLUListElement", base_config_1.TYPE_VALUE],
        ["HTMLUnknownElement", base_config_1.TYPE_VALUE],
        ["HTMLVideoElementEventMap", base_config_1.TYPE],
        ["HTMLVideoElement", base_config_1.TYPE_VALUE],
        ["HashChangeEvent", base_config_1.TYPE_VALUE],
        ["Headers", base_config_1.TYPE_VALUE],
        ["Highlight", base_config_1.TYPE_VALUE],
        ["HighlightRegistry", base_config_1.TYPE_VALUE],
        ["History", base_config_1.TYPE_VALUE],
        ["IDBCursor", base_config_1.TYPE_VALUE],
        ["IDBCursorWithValue", base_config_1.TYPE_VALUE],
        ["IDBDatabaseEventMap", base_config_1.TYPE],
        ["IDBDatabase", base_config_1.TYPE_VALUE],
        ["IDBFactory", base_config_1.TYPE_VALUE],
        ["IDBIndex", base_config_1.TYPE_VALUE],
        ["IDBKeyRange", base_config_1.TYPE_VALUE],
        ["IDBObjectStore", base_config_1.TYPE_VALUE],
        ["IDBOpenDBRequestEventMap", base_config_1.TYPE],
        ["IDBOpenDBRequest", base_config_1.TYPE_VALUE],
        ["IDBRequestEventMap", base_config_1.TYPE],
        ["IDBRequest", base_config_1.TYPE_VALUE],
        ["IDBTransactionEventMap", base_config_1.TYPE],
        ["IDBTransaction", base_config_1.TYPE_VALUE],
        ["IDBVersionChangeEvent", base_config_1.TYPE_VALUE],
        ["IIRFilterNode", base_config_1.TYPE_VALUE],
        ["IdleDeadline", base_config_1.TYPE_VALUE],
        ["ImageBitmap", base_config_1.TYPE_VALUE],
        ["ImageBitmapRenderingContext", base_config_1.TYPE_VALUE],
        ["ImageCapture", base_config_1.TYPE_VALUE],
        ["ImageData", base_config_1.TYPE_VALUE],
        ["ImageDecoder", base_config_1.TYPE_VALUE],
        ["ImageTrack", base_config_1.TYPE_VALUE],
        ["ImageTrackList", base_config_1.TYPE_VALUE],
        ["ImportMeta", base_config_1.TYPE],
        ["InputDeviceInfo", base_config_1.TYPE_VALUE],
        ["InputEvent", base_config_1.TYPE_VALUE],
        ["IntersectionObserver", base_config_1.TYPE_VALUE],
        ["IntersectionObserverEntry", base_config_1.TYPE_VALUE],
        ["KHR_parallel_shader_compile", base_config_1.TYPE],
        ["KeyboardEvent", base_config_1.TYPE_VALUE],
        ["KeyframeEffect", base_config_1.TYPE_VALUE],
        ["LargestContentfulPaint", base_config_1.TYPE_VALUE],
        ["LinkStyle", base_config_1.TYPE],
        ["Location", base_config_1.TYPE_VALUE],
        ["Lock", base_config_1.TYPE_VALUE],
        ["LockManager", base_config_1.TYPE_VALUE],
        ["MIDIAccessEventMap", base_config_1.TYPE],
        ["MIDIAccess", base_config_1.TYPE_VALUE],
        ["MIDIConnectionEvent", base_config_1.TYPE_VALUE],
        ["MIDIInputEventMap", base_config_1.TYPE],
        ["MIDIInput", base_config_1.TYPE_VALUE],
        ["MIDIInputMap", base_config_1.TYPE_VALUE],
        ["MIDIMessageEvent", base_config_1.TYPE_VALUE],
        ["MIDIOutput", base_config_1.TYPE_VALUE],
        ["MIDIOutputMap", base_config_1.TYPE_VALUE],
        ["MIDIPortEventMap", base_config_1.TYPE],
        ["MIDIPort", base_config_1.TYPE_VALUE],
        ["MathMLElementEventMap", base_config_1.TYPE],
        ["MathMLElement", base_config_1.TYPE_VALUE],
        ["MediaCapabilities", base_config_1.TYPE_VALUE],
        ["MediaDeviceInfo", base_config_1.TYPE_VALUE],
        ["MediaDevicesEventMap", base_config_1.TYPE],
        ["MediaDevices", base_config_1.TYPE_VALUE],
        ["MediaElementAudioSourceNode", base_config_1.TYPE_VALUE],
        ["MediaEncryptedEvent", base_config_1.TYPE_VALUE],
        ["MediaError", base_config_1.TYPE_VALUE],
        ["MediaKeyMessageEvent", base_config_1.TYPE_VALUE],
        ["MediaKeySessionEventMap", base_config_1.TYPE],
        ["MediaKeySession", base_config_1.TYPE_VALUE],
        ["MediaKeyStatusMap", base_config_1.TYPE_VALUE],
        ["MediaKeySystemAccess", base_config_1.TYPE_VALUE],
        ["MediaKeys", base_config_1.TYPE_VALUE],
        ["MediaList", base_config_1.TYPE_VALUE],
        ["MediaMetadata", base_config_1.TYPE_VALUE],
        ["MediaQueryListEventMap", base_config_1.TYPE],
        ["MediaQueryList", base_config_1.TYPE_VALUE],
        ["MediaQueryListEvent", base_config_1.TYPE_VALUE],
        ["MediaRecorderEventMap", base_config_1.TYPE],
        ["MediaRecorder", base_config_1.TYPE_VALUE],
        ["MediaSession", base_config_1.TYPE_VALUE],
        ["MediaSourceEventMap", base_config_1.TYPE],
        ["MediaSource", base_config_1.TYPE_VALUE],
        ["MediaSourceHandle", base_config_1.TYPE_VALUE],
        ["MediaStreamEventMap", base_config_1.TYPE],
        ["MediaStream", base_config_1.TYPE_VALUE],
        ["MediaStreamAudioDestinationNode", base_config_1.TYPE_VALUE],
        ["MediaStreamAudioSourceNode", base_config_1.TYPE_VALUE],
        ["MediaStreamTrackEventMap", base_config_1.TYPE],
        ["MediaStreamTrack", base_config_1.TYPE_VALUE],
        ["MediaStreamTrackEvent", base_config_1.TYPE_VALUE],
        ["MessageChannel", base_config_1.TYPE_VALUE],
        ["MessageEvent", base_config_1.TYPE_VALUE],
        ["MessageEventTargetEventMap", base_config_1.TYPE],
        ["MessageEventTarget", base_config_1.TYPE],
        ["MessagePortEventMap", base_config_1.TYPE],
        ["MessagePort", base_config_1.TYPE_VALUE],
        ["MimeType", base_config_1.TYPE_VALUE],
        ["MimeTypeArray", base_config_1.TYPE_VALUE],
        ["MouseEvent", base_config_1.TYPE_VALUE],
        ["MutationObserver", base_config_1.TYPE_VALUE],
        ["MutationRecord", base_config_1.TYPE_VALUE],
        ["NamedNodeMap", base_config_1.TYPE_VALUE],
        ["NavigationActivation", base_config_1.TYPE_VALUE],
        ["NavigationHistoryEntryEventMap", base_config_1.TYPE],
        ["NavigationHistoryEntry", base_config_1.TYPE_VALUE],
        ["NavigationPreloadManager", base_config_1.TYPE_VALUE],
        ["Navigator", base_config_1.TYPE_VALUE],
        ["NavigatorAutomationInformation", base_config_1.TYPE],
        ["NavigatorBadge", base_config_1.TYPE],
        ["NavigatorConcurrentHardware", base_config_1.TYPE],
        ["NavigatorContentUtils", base_config_1.TYPE],
        ["NavigatorCookies", base_config_1.TYPE],
        ["NavigatorID", base_config_1.TYPE],
        ["NavigatorLanguage", base_config_1.TYPE],
        ["NavigatorLocks", base_config_1.TYPE],
        ["NavigatorLogin", base_config_1.TYPE_VALUE],
        ["NavigatorOnLine", base_config_1.TYPE],
        ["NavigatorPlugins", base_config_1.TYPE],
        ["NavigatorStorage", base_config_1.TYPE],
        ["Node", base_config_1.TYPE_VALUE],
        ["NodeIterator", base_config_1.TYPE_VALUE],
        ["NodeList", base_config_1.TYPE_VALUE],
        ["NodeListOf", base_config_1.TYPE],
        ["NonDocumentTypeChildNode", base_config_1.TYPE],
        ["NonElementParentNode", base_config_1.TYPE],
        ["NotificationEventMap", base_config_1.TYPE],
        ["Notification", base_config_1.TYPE_VALUE],
        ["OES_draw_buffers_indexed", base_config_1.TYPE],
        ["OES_element_index_uint", base_config_1.TYPE],
        ["OES_fbo_render_mipmap", base_config_1.TYPE],
        ["OES_standard_derivatives", base_config_1.TYPE],
        ["OES_texture_float", base_config_1.TYPE],
        ["OES_texture_float_linear", base_config_1.TYPE],
        ["OES_texture_half_float", base_config_1.TYPE],
        ["OES_texture_half_float_linear", base_config_1.TYPE],
        ["OES_vertex_array_object", base_config_1.TYPE],
        ["OVR_multiview2", base_config_1.TYPE],
        ["OfflineAudioCompletionEvent", base_config_1.TYPE_VALUE],
        ["OfflineAudioContextEventMap", base_config_1.TYPE],
        ["OfflineAudioContext", base_config_1.TYPE_VALUE],
        ["OffscreenCanvasEventMap", base_config_1.TYPE],
        ["OffscreenCanvas", base_config_1.TYPE_VALUE],
        ["OffscreenCanvasRenderingContext2D", base_config_1.TYPE_VALUE],
        ["OscillatorNode", base_config_1.TYPE_VALUE],
        ["OverconstrainedError", base_config_1.TYPE_VALUE],
        ["PageRevealEvent", base_config_1.TYPE_VALUE],
        ["PageSwapEvent", base_config_1.TYPE_VALUE],
        ["PageTransitionEvent", base_config_1.TYPE_VALUE],
        ["PannerNode", base_config_1.TYPE_VALUE],
        ["ParentNode", base_config_1.TYPE],
        ["Path2D", base_config_1.TYPE_VALUE],
        ["PaymentAddress", base_config_1.TYPE_VALUE],
        ["PaymentMethodChangeEvent", base_config_1.TYPE_VALUE],
        ["PaymentRequestEventMap", base_config_1.TYPE],
        ["PaymentRequest", base_config_1.TYPE_VALUE],
        ["PaymentRequestUpdateEvent", base_config_1.TYPE_VALUE],
        ["PaymentResponseEventMap", base_config_1.TYPE],
        ["PaymentResponse", base_config_1.TYPE_VALUE],
        ["PerformanceEventMap", base_config_1.TYPE],
        ["Performance", base_config_1.TYPE_VALUE],
        ["PerformanceEntry", base_config_1.TYPE_VALUE],
        ["PerformanceEventTiming", base_config_1.TYPE_VALUE],
        ["PerformanceMark", base_config_1.TYPE_VALUE],
        ["PerformanceMeasure", base_config_1.TYPE_VALUE],
        ["PerformanceNavigation", base_config_1.TYPE_VALUE],
        ["PerformanceNavigationTiming", base_config_1.TYPE_VALUE],
        ["PerformanceObserver", base_config_1.TYPE_VALUE],
        ["PerformanceObserverEntryList", base_config_1.TYPE_VALUE],
        ["PerformancePaintTiming", base_config_1.TYPE_VALUE],
        ["PerformanceResourceTiming", base_config_1.TYPE_VALUE],
        ["PerformanceServerTiming", base_config_1.TYPE_VALUE],
        ["PerformanceTiming", base_config_1.TYPE_VALUE],
        ["PeriodicWave", base_config_1.TYPE_VALUE],
        ["PermissionStatusEventMap", base_config_1.TYPE],
        ["PermissionStatus", base_config_1.TYPE_VALUE],
        ["Permissions", base_config_1.TYPE_VALUE],
        ["PictureInPictureEvent", base_config_1.TYPE_VALUE],
        ["PictureInPictureWindowEventMap", base_config_1.TYPE],
        ["PictureInPictureWindow", base_config_1.TYPE_VALUE],
        ["Plugin", base_config_1.TYPE_VALUE],
        ["PluginArray", base_config_1.TYPE_VALUE],
        ["PointerEvent", base_config_1.TYPE_VALUE],
        ["PopStateEvent", base_config_1.TYPE_VALUE],
        ["PopoverInvokerElement", base_config_1.TYPE],
        ["ProcessingInstruction", base_config_1.TYPE_VALUE],
        ["ProgressEvent", base_config_1.TYPE_VALUE],
        ["PromiseRejectionEvent", base_config_1.TYPE_VALUE],
        ["PublicKeyCredential", base_config_1.TYPE_VALUE],
        ["PushManager", base_config_1.TYPE_VALUE],
        ["PushSubscription", base_config_1.TYPE_VALUE],
        ["PushSubscriptionOptions", base_config_1.TYPE_VALUE],
        ["RTCCertificate", base_config_1.TYPE_VALUE],
        ["RTCDTMFSenderEventMap", base_config_1.TYPE],
        ["RTCDTMFSender", base_config_1.TYPE_VALUE],
        ["RTCDTMFToneChangeEvent", base_config_1.TYPE_VALUE],
        ["RTCDataChannelEventMap", base_config_1.TYPE],
        ["RTCDataChannel", base_config_1.TYPE_VALUE],
        ["RTCDataChannelEvent", base_config_1.TYPE_VALUE],
        ["RTCDtlsTransportEventMap", base_config_1.TYPE],
        ["RTCDtlsTransport", base_config_1.TYPE_VALUE],
        ["RTCEncodedAudioFrame", base_config_1.TYPE_VALUE],
        ["RTCEncodedVideoFrame", base_config_1.TYPE_VALUE],
        ["RTCError", base_config_1.TYPE_VALUE],
        ["RTCErrorEvent", base_config_1.TYPE_VALUE],
        ["RTCIceCandidate", base_config_1.TYPE_VALUE],
        ["RTCIceCandidatePair", base_config_1.TYPE],
        ["RTCIceTransportEventMap", base_config_1.TYPE],
        ["RTCIceTransport", base_config_1.TYPE_VALUE],
        ["RTCPeerConnectionEventMap", base_config_1.TYPE],
        ["RTCPeerConnection", base_config_1.TYPE_VALUE],
        ["RTCPeerConnectionIceErrorEvent", base_config_1.TYPE_VALUE],
        ["RTCPeerConnectionIceEvent", base_config_1.TYPE_VALUE],
        ["RTCRtpReceiver", base_config_1.TYPE_VALUE],
        ["RTCRtpScriptTransform", base_config_1.TYPE_VALUE],
        ["RTCRtpSender", base_config_1.TYPE_VALUE],
        ["RTCRtpTransceiver", base_config_1.TYPE_VALUE],
        ["RTCSctpTransportEventMap", base_config_1.TYPE],
        ["RTCSctpTransport", base_config_1.TYPE_VALUE],
        ["RTCSessionDescription", base_config_1.TYPE_VALUE],
        ["RTCStatsReport", base_config_1.TYPE_VALUE],
        ["RTCTrackEvent", base_config_1.TYPE_VALUE],
        ["RadioNodeList", base_config_1.TYPE_VALUE],
        ["Range", base_config_1.TYPE_VALUE],
        ["ReadableByteStreamController", base_config_1.TYPE_VALUE],
        ["ReadableStream", base_config_1.TYPE_VALUE],
        ["ReadableStreamBYOBReader", base_config_1.TYPE_VALUE],
        ["ReadableStreamBYOBRequest", base_config_1.TYPE_VALUE],
        ["ReadableStreamDefaultController", base_config_1.TYPE_VALUE],
        ["ReadableStreamDefaultReader", base_config_1.TYPE_VALUE],
        ["ReadableStreamGenericReader", base_config_1.TYPE],
        ["RemotePlaybackEventMap", base_config_1.TYPE],
        ["RemotePlayback", base_config_1.TYPE_VALUE],
        ["Report", base_config_1.TYPE_VALUE],
        ["ReportBody", base_config_1.TYPE_VALUE],
        ["ReportingObserver", base_config_1.TYPE_VALUE],
        ["Request", base_config_1.TYPE_VALUE],
        ["ResizeObserver", base_config_1.TYPE_VALUE],
        ["ResizeObserverEntry", base_config_1.TYPE_VALUE],
        ["ResizeObserverSize", base_config_1.TYPE_VALUE],
        ["Response", base_config_1.TYPE_VALUE],
        ["SVGAElement", base_config_1.TYPE_VALUE],
        ["SVGAngle", base_config_1.TYPE_VALUE],
        ["SVGAnimateElement", base_config_1.TYPE_VALUE],
        ["SVGAnimateMotionElement", base_config_1.TYPE_VALUE],
        ["SVGAnimateTransformElement", base_config_1.TYPE_VALUE],
        ["SVGAnimatedAngle", base_config_1.TYPE_VALUE],
        ["SVGAnimatedBoolean", base_config_1.TYPE_VALUE],
        ["SVGAnimatedEnumeration", base_config_1.TYPE_VALUE],
        ["SVGAnimatedInteger", base_config_1.TYPE_VALUE],
        ["SVGAnimatedLength", base_config_1.TYPE_VALUE],
        ["SVGAnimatedLengthList", base_config_1.TYPE_VALUE],
        ["SVGAnimatedNumber", base_config_1.TYPE_VALUE],
        ["SVGAnimatedNumberList", base_config_1.TYPE_VALUE],
        ["SVGAnimatedPoints", base_config_1.TYPE],
        ["SVGAnimatedPreserveAspectRatio", base_config_1.TYPE_VALUE],
        ["SVGAnimatedRect", base_config_1.TYPE_VALUE],
        ["SVGAnimatedString", base_config_1.TYPE_VALUE],
        ["SVGAnimatedTransformList", base_config_1.TYPE_VALUE],
        ["SVGAnimationElement", base_config_1.TYPE_VALUE],
        ["SVGCircleElement", base_config_1.TYPE_VALUE],
        ["SVGClipPathElement", base_config_1.TYPE_VALUE],
        ["SVGComponentTransferFunctionElement", base_config_1.TYPE_VALUE],
        ["SVGDefsElement", base_config_1.TYPE_VALUE],
        ["SVGDescElement", base_config_1.TYPE_VALUE],
        ["SVGElementEventMap", base_config_1.TYPE],
        ["SVGElement", base_config_1.TYPE_VALUE],
        ["SVGEllipseElement", base_config_1.TYPE_VALUE],
        ["SVGFEBlendElement", base_config_1.TYPE_VALUE],
        ["SVGFEColorMatrixElement", base_config_1.TYPE_VALUE],
        ["SVGFEComponentTransferElement", base_config_1.TYPE_VALUE],
        ["SVGFECompositeElement", base_config_1.TYPE_VALUE],
        ["SVGFEConvolveMatrixElement", base_config_1.TYPE_VALUE],
        ["SVGFEDiffuseLightingElement", base_config_1.TYPE_VALUE],
        ["SVGFEDisplacementMapElement", base_config_1.TYPE_VALUE],
        ["SVGFEDistantLightElement", base_config_1.TYPE_VALUE],
        ["SVGFEDropShadowElement", base_config_1.TYPE_VALUE],
        ["SVGFEFloodElement", base_config_1.TYPE_VALUE],
        ["SVGFEFuncAElement", base_config_1.TYPE_VALUE],
        ["SVGFEFuncBElement", base_config_1.TYPE_VALUE],
        ["SVGFEFuncGElement", base_config_1.TYPE_VALUE],
        ["SVGFEFuncRElement", base_config_1.TYPE_VALUE],
        ["SVGFEGaussianBlurElement", base_config_1.TYPE_VALUE],
        ["SVGFEImageElement", base_config_1.TYPE_VALUE],
        ["SVGFEMergeElement", base_config_1.TYPE_VALUE],
        ["SVGFEMergeNodeElement", base_config_1.TYPE_VALUE],
        ["SVGFEMorphologyElement", base_config_1.TYPE_VALUE],
        ["SVGFEOffsetElement", base_config_1.TYPE_VALUE],
        ["SVGFEPointLightElement", base_config_1.TYPE_VALUE],
        ["SVGFESpecularLightingElement", base_config_1.TYPE_VALUE],
        ["SVGFESpotLightElement", base_config_1.TYPE_VALUE],
        ["SVGFETileElement", base_config_1.TYPE_VALUE],
        ["SVGFETurbulenceElement", base_config_1.TYPE_VALUE],
        ["SVGFilterElement", base_config_1.TYPE_VALUE],
        ["SVGFilterPrimitiveStandardAttributes", base_config_1.TYPE],
        ["SVGFitToViewBox", base_config_1.TYPE],
        ["SVGForeignObjectElement", base_config_1.TYPE_VALUE],
        ["SVGGElement", base_config_1.TYPE_VALUE],
        ["SVGGeometryElement", base_config_1.TYPE_VALUE],
        ["SVGGradientElement", base_config_1.TYPE_VALUE],
        ["SVGGraphicsElement", base_config_1.TYPE_VALUE],
        ["SVGImageElement", base_config_1.TYPE_VALUE],
        ["SVGLength", base_config_1.TYPE_VALUE],
        ["SVGLengthList", base_config_1.TYPE_VALUE],
        ["SVGLineElement", base_config_1.TYPE_VALUE],
        ["SVGLinearGradientElement", base_config_1.TYPE_VALUE],
        ["SVGMPathElement", base_config_1.TYPE_VALUE],
        ["SVGMarkerElement", base_config_1.TYPE_VALUE],
        ["SVGMaskElement", base_config_1.TYPE_VALUE],
        ["SVGMetadataElement", base_config_1.TYPE_VALUE],
        ["SVGNumber", base_config_1.TYPE_VALUE],
        ["SVGNumberList", base_config_1.TYPE_VALUE],
        ["SVGPathElement", base_config_1.TYPE_VALUE],
        ["SVGPatternElement", base_config_1.TYPE_VALUE],
        ["SVGPointList", base_config_1.TYPE_VALUE],
        ["SVGPolygonElement", base_config_1.TYPE_VALUE],
        ["SVGPolylineElement", base_config_1.TYPE_VALUE],
        ["SVGPreserveAspectRatio", base_config_1.TYPE_VALUE],
        ["SVGRadialGradientElement", base_config_1.TYPE_VALUE],
        ["SVGRectElement", base_config_1.TYPE_VALUE],
        ["SVGSVGElementEventMap", base_config_1.TYPE],
        ["SVGSVGElement", base_config_1.TYPE_VALUE],
        ["SVGScriptElement", base_config_1.TYPE_VALUE],
        ["SVGSetElement", base_config_1.TYPE_VALUE],
        ["SVGStopElement", base_config_1.TYPE_VALUE],
        ["SVGStringList", base_config_1.TYPE_VALUE],
        ["SVGStyleElement", base_config_1.TYPE_VALUE],
        ["SVGSwitchElement", base_config_1.TYPE_VALUE],
        ["SVGSymbolElement", base_config_1.TYPE_VALUE],
        ["SVGTSpanElement", base_config_1.TYPE_VALUE],
        ["SVGTests", base_config_1.TYPE],
        ["SVGTextContentElement", base_config_1.TYPE_VALUE],
        ["SVGTextElement", base_config_1.TYPE_VALUE],
        ["SVGTextPathElement", base_config_1.TYPE_VALUE],
        ["SVGTextPositioningElement", base_config_1.TYPE_VALUE],
        ["SVGTitleElement", base_config_1.TYPE_VALUE],
        ["SVGTransform", base_config_1.TYPE_VALUE],
        ["SVGTransformList", base_config_1.TYPE_VALUE],
        ["SVGURIReference", base_config_1.TYPE],
        ["SVGUnitTypes", base_config_1.TYPE_VALUE],
        ["SVGUseElement", base_config_1.TYPE_VALUE],
        ["SVGViewElement", base_config_1.TYPE_VALUE],
        ["Screen", base_config_1.TYPE_VALUE],
        ["ScreenOrientationEventMap", base_config_1.TYPE],
        ["ScreenOrientation", base_config_1.TYPE_VALUE],
        ["ScriptProcessorNodeEventMap", base_config_1.TYPE],
        ["ScriptProcessorNode", base_config_1.TYPE_VALUE],
        ["SecurityPolicyViolationEvent", base_config_1.TYPE_VALUE],
        ["Selection", base_config_1.TYPE_VALUE],
        ["ServiceWorkerEventMap", base_config_1.TYPE],
        ["ServiceWorker", base_config_1.TYPE_VALUE],
        ["ServiceWorkerContainerEventMap", base_config_1.TYPE],
        ["ServiceWorkerContainer", base_config_1.TYPE_VALUE],
        ["ServiceWorkerRegistrationEventMap", base_config_1.TYPE],
        ["ServiceWorkerRegistration", base_config_1.TYPE_VALUE],
        ["ShadowRootEventMap", base_config_1.TYPE],
        ["ShadowRoot", base_config_1.TYPE_VALUE],
        ["SharedWorker", base_config_1.TYPE_VALUE],
        ["Slottable", base_config_1.TYPE],
        ["SourceBufferEventMap", base_config_1.TYPE],
        ["SourceBuffer", base_config_1.TYPE_VALUE],
        ["SourceBufferListEventMap", base_config_1.TYPE],
        ["SourceBufferList", base_config_1.TYPE_VALUE],
        ["SpeechRecognitionAlternative", base_config_1.TYPE_VALUE],
        ["SpeechRecognitionResult", base_config_1.TYPE_VALUE],
        ["SpeechRecognitionResultList", base_config_1.TYPE_VALUE],
        ["SpeechSynthesisEventMap", base_config_1.TYPE],
        ["SpeechSynthesis", base_config_1.TYPE_VALUE],
        ["SpeechSynthesisErrorEvent", base_config_1.TYPE_VALUE],
        ["SpeechSynthesisEvent", base_config_1.TYPE_VALUE],
        ["SpeechSynthesisUtteranceEventMap", base_config_1.TYPE],
        ["SpeechSynthesisUtterance", base_config_1.TYPE_VALUE],
        ["SpeechSynthesisVoice", base_config_1.TYPE_VALUE],
        ["StaticRange", base_config_1.TYPE_VALUE],
        ["StereoPannerNode", base_config_1.TYPE_VALUE],
        ["Storage", base_config_1.TYPE_VALUE],
        ["StorageEvent", base_config_1.TYPE_VALUE],
        ["StorageManager", base_config_1.TYPE_VALUE],
        ["StyleMedia", base_config_1.TYPE],
        ["StylePropertyMap", base_config_1.TYPE_VALUE],
        ["StylePropertyMapReadOnly", base_config_1.TYPE_VALUE],
        ["StyleSheet", base_config_1.TYPE_VALUE],
        ["StyleSheetList", base_config_1.TYPE_VALUE],
        ["SubmitEvent", base_config_1.TYPE_VALUE],
        ["SubtleCrypto", base_config_1.TYPE_VALUE],
        ["Text", base_config_1.TYPE_VALUE],
        ["TextDecoder", base_config_1.TYPE_VALUE],
        ["TextDecoderCommon", base_config_1.TYPE],
        ["TextDecoderStream", base_config_1.TYPE_VALUE],
        ["TextEncoder", base_config_1.TYPE_VALUE],
        ["TextEncoderCommon", base_config_1.TYPE],
        ["TextEncoderStream", base_config_1.TYPE_VALUE],
        ["TextEvent", base_config_1.TYPE_VALUE],
        ["TextMetrics", base_config_1.TYPE_VALUE],
        ["TextTrackEventMap", base_config_1.TYPE],
        ["TextTrack", base_config_1.TYPE_VALUE],
        ["TextTrackCueEventMap", base_config_1.TYPE],
        ["TextTrackCue", base_config_1.TYPE_VALUE],
        ["TextTrackCueList", base_config_1.TYPE_VALUE],
        ["TextTrackListEventMap", base_config_1.TYPE],
        ["TextTrackList", base_config_1.TYPE_VALUE],
        ["TimeRanges", base_config_1.TYPE_VALUE],
        ["ToggleEvent", base_config_1.TYPE_VALUE],
        ["Touch", base_config_1.TYPE_VALUE],
        ["TouchEvent", base_config_1.TYPE_VALUE],
        ["TouchList", base_config_1.TYPE_VALUE],
        ["TrackEvent", base_config_1.TYPE_VALUE],
        ["TransformStream", base_config_1.TYPE_VALUE],
        ["TransformStreamDefaultController", base_config_1.TYPE_VALUE],
        ["TransitionEvent", base_config_1.TYPE_VALUE],
        ["TreeWalker", base_config_1.TYPE_VALUE],
        ["UIEvent", base_config_1.TYPE_VALUE],
        ["URL", base_config_1.TYPE_VALUE],
        ["webkitURL", base_config_1.TYPE_VALUE],
        ["URLSearchParams", base_config_1.TYPE_VALUE],
        ["UserActivation", base_config_1.TYPE_VALUE],
        ["VTTCue", base_config_1.TYPE_VALUE],
        ["VTTRegion", base_config_1.TYPE_VALUE],
        ["ValidityState", base_config_1.TYPE_VALUE],
        ["VideoColorSpace", base_config_1.TYPE_VALUE],
        ["VideoDecoderEventMap", base_config_1.TYPE],
        ["VideoDecoder", base_config_1.TYPE_VALUE],
        ["VideoEncoderEventMap", base_config_1.TYPE],
        ["VideoEncoder", base_config_1.TYPE_VALUE],
        ["VideoFrame", base_config_1.TYPE_VALUE],
        ["VideoPlaybackQuality", base_config_1.TYPE_VALUE],
        ["ViewTransition", base_config_1.TYPE_VALUE],
        ["ViewTransitionTypeSet", base_config_1.TYPE_VALUE],
        ["VisualViewportEventMap", base_config_1.TYPE],
        ["VisualViewport", base_config_1.TYPE_VALUE],
        ["WEBGL_color_buffer_float", base_config_1.TYPE],
        ["WEBGL_compressed_texture_astc", base_config_1.TYPE],
        ["WEBGL_compressed_texture_etc", base_config_1.TYPE],
        ["WEBGL_compressed_texture_etc1", base_config_1.TYPE],
        ["WEBGL_compressed_texture_pvrtc", base_config_1.TYPE],
        ["WEBGL_compressed_texture_s3tc", base_config_1.TYPE],
        ["WEBGL_compressed_texture_s3tc_srgb", base_config_1.TYPE],
        ["WEBGL_debug_renderer_info", base_config_1.TYPE],
        ["WEBGL_debug_shaders", base_config_1.TYPE],
        ["WEBGL_depth_texture", base_config_1.TYPE],
        ["WEBGL_draw_buffers", base_config_1.TYPE],
        ["WEBGL_lose_context", base_config_1.TYPE],
        ["WEBGL_multi_draw", base_config_1.TYPE],
        ["WakeLock", base_config_1.TYPE_VALUE],
        ["WakeLockSentinelEventMap", base_config_1.TYPE],
        ["WakeLockSentinel", base_config_1.TYPE_VALUE],
        ["WaveShaperNode", base_config_1.TYPE_VALUE],
        ["WebGL2RenderingContext", base_config_1.TYPE_VALUE],
        ["WebGL2RenderingContextBase", base_config_1.TYPE],
        ["WebGL2RenderingContextOverloads", base_config_1.TYPE],
        ["WebGLActiveInfo", base_config_1.TYPE_VALUE],
        ["WebGLBuffer", base_config_1.TYPE_VALUE],
        ["WebGLContextEvent", base_config_1.TYPE_VALUE],
        ["WebGLFramebuffer", base_config_1.TYPE_VALUE],
        ["WebGLProgram", base_config_1.TYPE_VALUE],
        ["WebGLQuery", base_config_1.TYPE_VALUE],
        ["WebGLRenderbuffer", base_config_1.TYPE_VALUE],
        ["WebGLRenderingContext", base_config_1.TYPE_VALUE],
        ["WebGLRenderingContextBase", base_config_1.TYPE],
        ["WebGLRenderingContextOverloads", base_config_1.TYPE],
        ["WebGLSampler", base_config_1.TYPE_VALUE],
        ["WebGLShader", base_config_1.TYPE_VALUE],
        ["WebGLShaderPrecisionFormat", base_config_1.TYPE_VALUE],
        ["WebGLSync", base_config_1.TYPE_VALUE],
        ["WebGLTexture", base_config_1.TYPE_VALUE],
        ["WebGLTransformFeedback", base_config_1.TYPE_VALUE],
        ["WebGLUniformLocation", base_config_1.TYPE_VALUE],
        ["WebGLVertexArrayObject", base_config_1.TYPE_VALUE],
        ["WebGLVertexArrayObjectOES", base_config_1.TYPE],
        ["WebSocketEventMap", base_config_1.TYPE],
        ["WebSocket", base_config_1.TYPE_VALUE],
        ["WebTransport", base_config_1.TYPE_VALUE],
        ["WebTransportBidirectionalStream", base_config_1.TYPE_VALUE],
        ["WebTransportDatagramDuplexStream", base_config_1.TYPE_VALUE],
        ["WebTransportError", base_config_1.TYPE_VALUE],
        ["WheelEvent", base_config_1.TYPE_VALUE],
        ["WindowEventMap", base_config_1.TYPE],
        ["Window", base_config_1.TYPE_VALUE],
        ["WindowEventHandlersEventMap", base_config_1.TYPE],
        ["WindowEventHandlers", base_config_1.TYPE],
        ["WindowLocalStorage", base_config_1.TYPE],
        ["WindowOrWorkerGlobalScope", base_config_1.TYPE],
        ["WindowSessionStorage", base_config_1.TYPE],
        ["WorkerEventMap", base_config_1.TYPE],
        ["Worker", base_config_1.TYPE_VALUE],
        ["Worklet", base_config_1.TYPE_VALUE],
        ["WritableStream", base_config_1.TYPE_VALUE],
        ["WritableStreamDefaultController", base_config_1.TYPE_VALUE],
        ["WritableStreamDefaultWriter", base_config_1.TYPE_VALUE],
        ["XMLDocument", base_config_1.TYPE_VALUE],
        ["XMLHttpRequestEventMap", base_config_1.TYPE],
        ["XMLHttpRequest", base_config_1.TYPE_VALUE],
        ["XMLHttpRequestEventTargetEventMap", base_config_1.TYPE],
        ["XMLHttpRequestEventTarget", base_config_1.TYPE_VALUE],
        ["XMLHttpRequestUpload", base_config_1.TYPE_VALUE],
        ["XMLSerializer", base_config_1.TYPE_VALUE],
        ["XPathEvaluator", base_config_1.TYPE_VALUE],
        ["XPathEvaluatorBase", base_config_1.TYPE],
        ["XPathExpression", base_config_1.TYPE_VALUE],
        ["XPathResult", base_config_1.TYPE_VALUE],
        ["XSLTProcessor", base_config_1.TYPE_VALUE],
        ["CSS", base_config_1.TYPE_VALUE],
        ["WebAssembly", base_config_1.TYPE_VALUE],
        ["Console", base_config_1.TYPE],
        ["AudioDataOutputCallback", base_config_1.TYPE],
        ["BlobCallback", base_config_1.TYPE],
        ["CustomElementConstructor", base_config_1.TYPE],
        ["DecodeErrorCallback", base_config_1.TYPE],
        ["DecodeSuccessCallback", base_config_1.TYPE],
        ["EncodedAudioChunkOutputCallback", base_config_1.TYPE],
        ["EncodedVideoChunkOutputCallback", base_config_1.TYPE],
        ["ErrorCallback", base_config_1.TYPE],
        ["FileCallback", base_config_1.TYPE],
        ["FileSystemEntriesCallback", base_config_1.TYPE],
        ["FileSystemEntryCallback", base_config_1.TYPE],
        ["FrameRequestCallback", base_config_1.TYPE],
        ["FunctionStringCallback", base_config_1.TYPE],
        ["IdleRequestCallback", base_config_1.TYPE],
        ["IntersectionObserverCallback", base_config_1.TYPE],
        ["LockGrantedCallback", base_config_1.TYPE],
        ["MediaSessionActionHandler", base_config_1.TYPE],
        ["MutationCallback", base_config_1.TYPE],
        ["NotificationPermissionCallback", base_config_1.TYPE],
        ["OnBeforeUnloadEventHandlerNonNull", base_config_1.TYPE],
        ["OnErrorEventHandlerNonNull", base_config_1.TYPE],
        ["PerformanceObserverCallback", base_config_1.TYPE],
        ["PositionCallback", base_config_1.TYPE],
        ["PositionErrorCallback", base_config_1.TYPE],
        ["QueuingStrategySize", base_config_1.TYPE],
        ["RTCPeerConnectionErrorCallback", base_config_1.TYPE],
        ["RTCSessionDescriptionCallback", base_config_1.TYPE],
        ["RemotePlaybackAvailabilityCallback", base_config_1.TYPE],
        ["ReportingObserverCallback", base_config_1.TYPE],
        ["ResizeObserverCallback", base_config_1.TYPE],
        ["TransformerFlushCallback", base_config_1.TYPE],
        ["TransformerStartCallback", base_config_1.TYPE],
        ["TransformerTransformCallback", base_config_1.TYPE],
        ["UnderlyingSinkAbortCallback", base_config_1.TYPE],
        ["UnderlyingSinkCloseCallback", base_config_1.TYPE],
        ["UnderlyingSinkStartCallback", base_config_1.TYPE],
        ["UnderlyingSinkWriteCallback", base_config_1.TYPE],
        ["UnderlyingSourceCancelCallback", base_config_1.TYPE],
        ["UnderlyingSourcePullCallback", base_config_1.TYPE],
        ["UnderlyingSourceStartCallback", base_config_1.TYPE],
        ["VideoFrameOutputCallback", base_config_1.TYPE],
        ["VideoFrameRequestCallback", base_config_1.TYPE],
        ["ViewTransitionUpdateCallback", base_config_1.TYPE],
        ["VoidFunction", base_config_1.TYPE],
        ["WebCodecsErrorCallback", base_config_1.TYPE],
        ["HTMLElementTagNameMap", base_config_1.TYPE],
        ["HTMLElementDeprecatedTagNameMap", base_config_1.TYPE],
        ["SVGElementTagNameMap", base_config_1.TYPE],
        ["MathMLElementTagNameMap", base_config_1.TYPE],
        ["ElementTagNameMap", base_config_1.TYPE],
        ["AlgorithmIdentifier", base_config_1.TYPE],
        ["AllowSharedBufferSource", base_config_1.TYPE],
        ["AutoFill", base_config_1.TYPE],
        ["AutoFillField", base_config_1.TYPE],
        ["AutoFillSection", base_config_1.TYPE],
        ["Base64URLString", base_config_1.TYPE],
        ["BigInteger", base_config_1.TYPE],
        ["BlobPart", base_config_1.TYPE],
        ["BodyInit", base_config_1.TYPE],
        ["BufferSource", base_config_1.TYPE],
        ["COSEAlgorithmIdentifier", base_config_1.TYPE],
        ["CSSKeywordish", base_config_1.TYPE],
        ["CSSNumberish", base_config_1.TYPE],
        ["CSSPerspectiveValue", base_config_1.TYPE],
        ["CSSUnparsedSegment", base_config_1.TYPE],
        ["CanvasImageSource", base_config_1.TYPE],
        ["ClipboardItemData", base_config_1.TYPE],
        ["ClipboardItems", base_config_1.TYPE],
        ["ConstrainBoolean", base_config_1.TYPE],
        ["ConstrainDOMString", base_config_1.TYPE],
        ["ConstrainDouble", base_config_1.TYPE],
        ["ConstrainULong", base_config_1.TYPE],
        ["CookieList", base_config_1.TYPE],
        ["DOMHighResTimeStamp", base_config_1.TYPE],
        ["EpochTimeStamp", base_config_1.TYPE],
        ["EventListenerOrEventListenerObject", base_config_1.TYPE],
        ["FileSystemWriteChunkType", base_config_1.TYPE],
        ["Float32List", base_config_1.TYPE],
        ["FormDataEntryValue", base_config_1.TYPE],
        ["GLbitfield", base_config_1.TYPE],
        ["GLboolean", base_config_1.TYPE],
        ["GLclampf", base_config_1.TYPE],
        ["GLenum", base_config_1.TYPE],
        ["GLfloat", base_config_1.TYPE],
        ["GLint", base_config_1.TYPE],
        ["GLint64", base_config_1.TYPE],
        ["GLintptr", base_config_1.TYPE],
        ["GLsizei", base_config_1.TYPE],
        ["GLsizeiptr", base_config_1.TYPE],
        ["GLuint", base_config_1.TYPE],
        ["GLuint64", base_config_1.TYPE],
        ["HTMLOrSVGImageElement", base_config_1.TYPE],
        ["HTMLOrSVGScriptElement", base_config_1.TYPE],
        ["HashAlgorithmIdentifier", base_config_1.TYPE],
        ["HeadersInit", base_config_1.TYPE],
        ["IDBValidKey", base_config_1.TYPE],
        ["ImageBitmapSource", base_config_1.TYPE],
        ["ImageBufferSource", base_config_1.TYPE],
        ["ImageDataArray", base_config_1.TYPE],
        ["Int32List", base_config_1.TYPE],
        ["LineAndPositionSetting", base_config_1.TYPE],
        ["MediaProvider", base_config_1.TYPE],
        ["MessageEventSource", base_config_1.TYPE],
        ["MutationRecordType", base_config_1.TYPE],
        ["NamedCurve", base_config_1.TYPE],
        ["OffscreenRenderingContext", base_config_1.TYPE],
        ["OnBeforeUnloadEventHandler", base_config_1.TYPE],
        ["OnErrorEventHandler", base_config_1.TYPE],
        ["OptionalPostfixToken", base_config_1.TYPE],
        ["OptionalPrefixToken", base_config_1.TYPE],
        ["PerformanceEntryList", base_config_1.TYPE],
        ["PublicKeyCredentialClientCapabilities", base_config_1.TYPE],
        ["PublicKeyCredentialJSON", base_config_1.TYPE],
        ["RTCRtpTransform", base_config_1.TYPE],
        ["ReadableStreamController", base_config_1.TYPE],
        ["ReadableStreamReadResult", base_config_1.TYPE],
        ["ReadableStreamReader", base_config_1.TYPE],
        ["RenderingContext", base_config_1.TYPE],
        ["ReportList", base_config_1.TYPE],
        ["RequestInfo", base_config_1.TYPE],
        ["TexImageSource", base_config_1.TYPE],
        ["TimerHandler", base_config_1.TYPE],
        ["Transferable", base_config_1.TYPE],
        ["Uint32List", base_config_1.TYPE],
        ["VibratePattern", base_config_1.TYPE],
        ["WindowProxy", base_config_1.TYPE],
        ["XMLHttpRequestBodyInit", base_config_1.TYPE],
        ["AlignSetting", base_config_1.TYPE],
        ["AlphaOption", base_config_1.TYPE],
        ["AnimationPlayState", base_config_1.TYPE],
        ["AnimationReplaceState", base_config_1.TYPE],
        ["AppendMode", base_config_1.TYPE],
        ["AttestationConveyancePreference", base_config_1.TYPE],
        ["AudioContextLatencyCategory", base_config_1.TYPE],
        ["AudioContextState", base_config_1.TYPE],
        ["AudioSampleFormat", base_config_1.TYPE],
        ["AuthenticatorAttachment", base_config_1.TYPE],
        ["AuthenticatorTransport", base_config_1.TYPE],
        ["AutoFillAddressKind", base_config_1.TYPE],
        ["AutoFillBase", base_config_1.TYPE],
        ["AutoFillContactField", base_config_1.TYPE],
        ["AutoFillContactKind", base_config_1.TYPE],
        ["AutoFillCredentialField", base_config_1.TYPE],
        ["AutoFillNormalField", base_config_1.TYPE],
        ["AutoKeyword", base_config_1.TYPE],
        ["AutomationRate", base_config_1.TYPE],
        ["AvcBitstreamFormat", base_config_1.TYPE],
        ["BinaryType", base_config_1.TYPE],
        ["BiquadFilterType", base_config_1.TYPE],
        ["BitrateMode", base_config_1.TYPE],
        ["CSSMathOperator", base_config_1.TYPE],
        ["CSSNumericBaseType", base_config_1.TYPE],
        ["CanPlayTypeResult", base_config_1.TYPE],
        ["CanvasDirection", base_config_1.TYPE],
        ["CanvasFillRule", base_config_1.TYPE],
        ["CanvasFontKerning", base_config_1.TYPE],
        ["CanvasFontStretch", base_config_1.TYPE],
        ["CanvasFontVariantCaps", base_config_1.TYPE],
        ["CanvasLineCap", base_config_1.TYPE],
        ["CanvasLineJoin", base_config_1.TYPE],
        ["CanvasTextAlign", base_config_1.TYPE],
        ["CanvasTextBaseline", base_config_1.TYPE],
        ["CanvasTextRendering", base_config_1.TYPE],
        ["ChannelCountMode", base_config_1.TYPE],
        ["ChannelInterpretation", base_config_1.TYPE],
        ["ClientTypes", base_config_1.TYPE],
        ["CodecState", base_config_1.TYPE],
        ["ColorGamut", base_config_1.TYPE],
        ["ColorSpaceConversion", base_config_1.TYPE],
        ["CompositeOperation", base_config_1.TYPE],
        ["CompositeOperationOrAuto", base_config_1.TYPE],
        ["CompressionFormat", base_config_1.TYPE],
        ["CookieSameSite", base_config_1.TYPE],
        ["CredentialMediationRequirement", base_config_1.TYPE],
        ["DOMParserSupportedType", base_config_1.TYPE],
        ["DirectionSetting", base_config_1.TYPE],
        ["DisplayCaptureSurfaceType", base_config_1.TYPE],
        ["DistanceModelType", base_config_1.TYPE],
        ["DocumentReadyState", base_config_1.TYPE],
        ["DocumentVisibilityState", base_config_1.TYPE],
        ["EncodedAudioChunkType", base_config_1.TYPE],
        ["EncodedVideoChunkType", base_config_1.TYPE],
        ["EndOfStreamError", base_config_1.TYPE],
        ["EndingType", base_config_1.TYPE],
        ["FileSystemHandleKind", base_config_1.TYPE],
        ["FillLightMode", base_config_1.TYPE],
        ["FillMode", base_config_1.TYPE],
        ["FontDisplay", base_config_1.TYPE],
        ["FontFaceLoadStatus", base_config_1.TYPE],
        ["FontFaceSetLoadStatus", base_config_1.TYPE],
        ["FullscreenNavigationUI", base_config_1.TYPE],
        ["GamepadHapticEffectType", base_config_1.TYPE],
        ["GamepadHapticsResult", base_config_1.TYPE],
        ["GamepadMappingType", base_config_1.TYPE],
        ["GlobalCompositeOperation", base_config_1.TYPE],
        ["HardwareAcceleration", base_config_1.TYPE],
        ["HdrMetadataType", base_config_1.TYPE],
        ["HighlightType", base_config_1.TYPE],
        ["IDBCursorDirection", base_config_1.TYPE],
        ["IDBRequestReadyState", base_config_1.TYPE],
        ["IDBTransactionDurability", base_config_1.TYPE],
        ["IDBTransactionMode", base_config_1.TYPE],
        ["ImageOrientation", base_config_1.TYPE],
        ["ImageSmoothingQuality", base_config_1.TYPE],
        ["InsertPosition", base_config_1.TYPE],
        ["IterationCompositeOperation", base_config_1.TYPE],
        ["KeyFormat", base_config_1.TYPE],
        ["KeyType", base_config_1.TYPE],
        ["KeyUsage", base_config_1.TYPE],
        ["LatencyMode", base_config_1.TYPE],
        ["LineAlignSetting", base_config_1.TYPE],
        ["LockMode", base_config_1.TYPE],
        ["LoginStatus", base_config_1.TYPE],
        ["MIDIPortConnectionState", base_config_1.TYPE],
        ["MIDIPortDeviceState", base_config_1.TYPE],
        ["MIDIPortType", base_config_1.TYPE],
        ["MediaDecodingType", base_config_1.TYPE],
        ["MediaDeviceKind", base_config_1.TYPE],
        ["MediaEncodingType", base_config_1.TYPE],
        ["MediaKeyMessageType", base_config_1.TYPE],
        ["MediaKeySessionClosedReason", base_config_1.TYPE],
        ["MediaKeySessionType", base_config_1.TYPE],
        ["MediaKeyStatus", base_config_1.TYPE],
        ["MediaKeysRequirement", base_config_1.TYPE],
        ["MediaSessionAction", base_config_1.TYPE],
        ["MediaSessionPlaybackState", base_config_1.TYPE],
        ["MediaStreamTrackState", base_config_1.TYPE],
        ["NavigationTimingType", base_config_1.TYPE],
        ["NavigationType", base_config_1.TYPE],
        ["NotificationDirection", base_config_1.TYPE],
        ["NotificationPermission", base_config_1.TYPE],
        ["OffscreenRenderingContextId", base_config_1.TYPE],
        ["OpusBitstreamFormat", base_config_1.TYPE],
        ["OrientationType", base_config_1.TYPE],
        ["OscillatorType", base_config_1.TYPE],
        ["OverSampleType", base_config_1.TYPE],
        ["PanningModelType", base_config_1.TYPE],
        ["PaymentComplete", base_config_1.TYPE],
        ["PaymentShippingType", base_config_1.TYPE],
        ["PermissionName", base_config_1.TYPE],
        ["PermissionState", base_config_1.TYPE],
        ["PlaybackDirection", base_config_1.TYPE],
        ["PositionAlignSetting", base_config_1.TYPE],
        ["PredefinedColorSpace", base_config_1.TYPE],
        ["PremultiplyAlpha", base_config_1.TYPE],
        ["PresentationStyle", base_config_1.TYPE],
        ["PublicKeyCredentialType", base_config_1.TYPE],
        ["PushEncryptionKeyName", base_config_1.TYPE],
        ["RTCBundlePolicy", base_config_1.TYPE],
        ["RTCDataChannelState", base_config_1.TYPE],
        ["RTCDegradationPreference", base_config_1.TYPE],
        ["RTCDtlsRole", base_config_1.TYPE],
        ["RTCDtlsTransportState", base_config_1.TYPE],
        ["RTCEncodedVideoFrameType", base_config_1.TYPE],
        ["RTCErrorDetailType", base_config_1.TYPE],
        ["RTCIceCandidateType", base_config_1.TYPE],
        ["RTCIceComponent", base_config_1.TYPE],
        ["RTCIceConnectionState", base_config_1.TYPE],
        ["RTCIceGathererState", base_config_1.TYPE],
        ["RTCIceGatheringState", base_config_1.TYPE],
        ["RTCIceProtocol", base_config_1.TYPE],
        ["RTCIceRole", base_config_1.TYPE],
        ["RTCIceTcpCandidateType", base_config_1.TYPE],
        ["RTCIceTransportPolicy", base_config_1.TYPE],
        ["RTCIceTransportState", base_config_1.TYPE],
        ["RTCPeerConnectionState", base_config_1.TYPE],
        ["RTCPriorityType", base_config_1.TYPE],
        ["RTCQualityLimitationReason", base_config_1.TYPE],
        ["RTCRtcpMuxPolicy", base_config_1.TYPE],
        ["RTCRtpTransceiverDirection", base_config_1.TYPE],
        ["RTCSctpTransportState", base_config_1.TYPE],
        ["RTCSdpType", base_config_1.TYPE],
        ["RTCSignalingState", base_config_1.TYPE],
        ["RTCStatsIceCandidatePairState", base_config_1.TYPE],
        ["RTCStatsType", base_config_1.TYPE],
        ["ReadableStreamReaderMode", base_config_1.TYPE],
        ["ReadableStreamType", base_config_1.TYPE],
        ["ReadyState", base_config_1.TYPE],
        ["RecordingState", base_config_1.TYPE],
        ["RedEyeReduction", base_config_1.TYPE],
        ["ReferrerPolicy", base_config_1.TYPE],
        ["RemotePlaybackState", base_config_1.TYPE],
        ["RequestCache", base_config_1.TYPE],
        ["RequestCredentials", base_config_1.TYPE],
        ["RequestDestination", base_config_1.TYPE],
        ["RequestMode", base_config_1.TYPE],
        ["RequestPriority", base_config_1.TYPE],
        ["RequestRedirect", base_config_1.TYPE],
        ["ResidentKeyRequirement", base_config_1.TYPE],
        ["ResizeObserverBoxOptions", base_config_1.TYPE],
        ["ResizeQuality", base_config_1.TYPE],
        ["ResponseType", base_config_1.TYPE],
        ["ScrollBehavior", base_config_1.TYPE],
        ["ScrollLogicalPosition", base_config_1.TYPE],
        ["ScrollRestoration", base_config_1.TYPE],
        ["ScrollSetting", base_config_1.TYPE],
        ["SecurityPolicyViolationEventDisposition", base_config_1.TYPE],
        ["SelectionMode", base_config_1.TYPE],
        ["ServiceWorkerState", base_config_1.TYPE],
        ["ServiceWorkerUpdateViaCache", base_config_1.TYPE],
        ["ShadowRootMode", base_config_1.TYPE],
        ["SlotAssignmentMode", base_config_1.TYPE],
        ["SpeechSynthesisErrorCode", base_config_1.TYPE],
        ["TextTrackKind", base_config_1.TYPE],
        ["TextTrackMode", base_config_1.TYPE],
        ["TouchType", base_config_1.TYPE],
        ["TransferFunction", base_config_1.TYPE],
        ["UserVerificationRequirement", base_config_1.TYPE],
        ["VideoColorPrimaries", base_config_1.TYPE],
        ["VideoEncoderBitrateMode", base_config_1.TYPE],
        ["VideoFacingModeEnum", base_config_1.TYPE],
        ["VideoMatrixCoefficients", base_config_1.TYPE],
        ["VideoPixelFormat", base_config_1.TYPE],
        ["VideoTransferCharacteristics", base_config_1.TYPE],
        ["WakeLockType", base_config_1.TYPE],
        ["WebGLPowerPreference", base_config_1.TYPE],
        ["WebTransportCongestionControl", base_config_1.TYPE],
        ["WebTransportErrorSource", base_config_1.TYPE],
        ["WorkerType", base_config_1.TYPE],
        ["WriteCommandType", base_config_1.TYPE],
        ["XMLHttpRequestResponseType", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/dom.asynciterable.js
var require_dom_asynciterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/dom.asynciterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dom_asynciterable = void 0;
    var base_config_1 = require_base_config();
    exports2.dom_asynciterable = {
      libs: [],
      variables: [
        ["FileSystemDirectoryHandleAsyncIterator", base_config_1.TYPE],
        ["FileSystemDirectoryHandle", base_config_1.TYPE],
        ["ReadableStreamAsyncIterator", base_config_1.TYPE],
        ["ReadableStream", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/dom.iterable.js
var require_dom_iterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/dom.iterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dom_iterable = void 0;
    var base_config_1 = require_base_config();
    exports2.dom_iterable = {
      libs: [],
      variables: [
        ["AudioParam", base_config_1.TYPE],
        ["AudioParamMap", base_config_1.TYPE],
        ["BaseAudioContext", base_config_1.TYPE],
        ["CSSKeyframesRule", base_config_1.TYPE],
        ["CSSNumericArray", base_config_1.TYPE],
        ["CSSRuleList", base_config_1.TYPE],
        ["CSSStyleDeclaration", base_config_1.TYPE],
        ["CSSTransformValue", base_config_1.TYPE],
        ["CSSUnparsedValue", base_config_1.TYPE],
        ["Cache", base_config_1.TYPE],
        ["CanvasPath", base_config_1.TYPE],
        ["CanvasPathDrawingStyles", base_config_1.TYPE],
        ["CookieStoreManager", base_config_1.TYPE],
        ["CustomStateSet", base_config_1.TYPE],
        ["DOMRectList", base_config_1.TYPE],
        ["DOMStringList", base_config_1.TYPE],
        ["DOMTokenList", base_config_1.TYPE],
        ["DataTransferItemList", base_config_1.TYPE],
        ["EventCounts", base_config_1.TYPE],
        ["FileList", base_config_1.TYPE],
        ["FontFaceSet", base_config_1.TYPE],
        ["FormDataIterator", base_config_1.TYPE],
        ["FormData", base_config_1.TYPE],
        ["HTMLAllCollection", base_config_1.TYPE],
        ["HTMLCollectionBase", base_config_1.TYPE],
        ["HTMLCollectionOf", base_config_1.TYPE],
        ["HTMLFormElement", base_config_1.TYPE],
        ["HTMLSelectElement", base_config_1.TYPE],
        ["HeadersIterator", base_config_1.TYPE],
        ["Headers", base_config_1.TYPE],
        ["Highlight", base_config_1.TYPE],
        ["HighlightRegistry", base_config_1.TYPE],
        ["IDBDatabase", base_config_1.TYPE],
        ["IDBObjectStore", base_config_1.TYPE],
        ["ImageTrackList", base_config_1.TYPE],
        ["MIDIInputMap", base_config_1.TYPE],
        ["MIDIOutput", base_config_1.TYPE],
        ["MIDIOutputMap", base_config_1.TYPE],
        ["MediaKeyStatusMapIterator", base_config_1.TYPE],
        ["MediaKeyStatusMap", base_config_1.TYPE],
        ["MediaList", base_config_1.TYPE],
        ["MessageEvent", base_config_1.TYPE],
        ["MimeTypeArray", base_config_1.TYPE],
        ["NamedNodeMap", base_config_1.TYPE],
        ["Navigator", base_config_1.TYPE],
        ["NodeList", base_config_1.TYPE],
        ["NodeListOf", base_config_1.TYPE],
        ["Plugin", base_config_1.TYPE],
        ["PluginArray", base_config_1.TYPE],
        ["RTCRtpTransceiver", base_config_1.TYPE],
        ["RTCStatsReport", base_config_1.TYPE],
        ["SVGLengthList", base_config_1.TYPE],
        ["SVGNumberList", base_config_1.TYPE],
        ["SVGPointList", base_config_1.TYPE],
        ["SVGStringList", base_config_1.TYPE],
        ["SVGTransformList", base_config_1.TYPE],
        ["SourceBufferList", base_config_1.TYPE],
        ["SpeechRecognitionResult", base_config_1.TYPE],
        ["SpeechRecognitionResultList", base_config_1.TYPE],
        ["StylePropertyMapReadOnlyIterator", base_config_1.TYPE],
        ["StylePropertyMapReadOnly", base_config_1.TYPE],
        ["StyleSheetList", base_config_1.TYPE],
        ["SubtleCrypto", base_config_1.TYPE],
        ["TextTrackCueList", base_config_1.TYPE],
        ["TextTrackList", base_config_1.TYPE],
        ["TouchList", base_config_1.TYPE],
        ["URLSearchParamsIterator", base_config_1.TYPE],
        ["URLSearchParams", base_config_1.TYPE],
        ["ViewTransitionTypeSet", base_config_1.TYPE],
        ["WEBGL_draw_buffers", base_config_1.TYPE],
        ["WEBGL_multi_draw", base_config_1.TYPE],
        ["WebGL2RenderingContextBase", base_config_1.TYPE],
        ["WebGL2RenderingContextOverloads", base_config_1.TYPE],
        ["WebGLRenderingContextBase", base_config_1.TYPE],
        ["WebGLRenderingContextOverloads", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es5.js
var require_es5 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es5.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es5 = void 0;
    var base_config_1 = require_base_config();
    var decorators_1 = require_decorators();
    var decorators_legacy_1 = require_decorators_legacy();
    exports2.es5 = {
      libs: [decorators_1.decorators, decorators_legacy_1.decorators_legacy],
      variables: [
        ["Symbol", base_config_1.TYPE],
        ["PropertyKey", base_config_1.TYPE],
        ["PropertyDescriptor", base_config_1.TYPE],
        ["PropertyDescriptorMap", base_config_1.TYPE],
        ["Object", base_config_1.TYPE_VALUE],
        ["ObjectConstructor", base_config_1.TYPE],
        ["Function", base_config_1.TYPE_VALUE],
        ["FunctionConstructor", base_config_1.TYPE],
        ["ThisParameterType", base_config_1.TYPE],
        ["OmitThisParameter", base_config_1.TYPE],
        ["CallableFunction", base_config_1.TYPE],
        ["NewableFunction", base_config_1.TYPE],
        ["IArguments", base_config_1.TYPE],
        ["String", base_config_1.TYPE_VALUE],
        ["StringConstructor", base_config_1.TYPE],
        ["Boolean", base_config_1.TYPE_VALUE],
        ["BooleanConstructor", base_config_1.TYPE],
        ["Number", base_config_1.TYPE_VALUE],
        ["NumberConstructor", base_config_1.TYPE],
        ["TemplateStringsArray", base_config_1.TYPE],
        ["ImportMeta", base_config_1.TYPE],
        ["ImportCallOptions", base_config_1.TYPE],
        ["ImportAssertions", base_config_1.TYPE],
        ["ImportAttributes", base_config_1.TYPE],
        ["Math", base_config_1.TYPE_VALUE],
        ["Date", base_config_1.TYPE_VALUE],
        ["DateConstructor", base_config_1.TYPE],
        ["RegExpMatchArray", base_config_1.TYPE],
        ["RegExpExecArray", base_config_1.TYPE],
        ["RegExp", base_config_1.TYPE_VALUE],
        ["RegExpConstructor", base_config_1.TYPE],
        ["Error", base_config_1.TYPE_VALUE],
        ["ErrorConstructor", base_config_1.TYPE],
        ["EvalError", base_config_1.TYPE_VALUE],
        ["EvalErrorConstructor", base_config_1.TYPE],
        ["RangeError", base_config_1.TYPE_VALUE],
        ["RangeErrorConstructor", base_config_1.TYPE],
        ["ReferenceError", base_config_1.TYPE_VALUE],
        ["ReferenceErrorConstructor", base_config_1.TYPE],
        ["SyntaxError", base_config_1.TYPE_VALUE],
        ["SyntaxErrorConstructor", base_config_1.TYPE],
        ["TypeError", base_config_1.TYPE_VALUE],
        ["TypeErrorConstructor", base_config_1.TYPE],
        ["URIError", base_config_1.TYPE_VALUE],
        ["URIErrorConstructor", base_config_1.TYPE],
        ["JSON", base_config_1.TYPE_VALUE],
        ["ReadonlyArray", base_config_1.TYPE],
        ["ConcatArray", base_config_1.TYPE],
        ["Array", base_config_1.TYPE_VALUE],
        ["ArrayConstructor", base_config_1.TYPE],
        ["TypedPropertyDescriptor", base_config_1.TYPE],
        ["PromiseConstructorLike", base_config_1.TYPE],
        ["PromiseLike", base_config_1.TYPE],
        ["Promise", base_config_1.TYPE],
        ["Awaited", base_config_1.TYPE],
        ["ArrayLike", base_config_1.TYPE],
        ["Partial", base_config_1.TYPE],
        ["Required", base_config_1.TYPE],
        ["Readonly", base_config_1.TYPE],
        ["Pick", base_config_1.TYPE],
        ["Record", base_config_1.TYPE],
        ["Exclude", base_config_1.TYPE],
        ["Extract", base_config_1.TYPE],
        ["Omit", base_config_1.TYPE],
        ["NonNullable", base_config_1.TYPE],
        ["Parameters", base_config_1.TYPE],
        ["ConstructorParameters", base_config_1.TYPE],
        ["ReturnType", base_config_1.TYPE],
        ["InstanceType", base_config_1.TYPE],
        ["Uppercase", base_config_1.TYPE],
        ["Lowercase", base_config_1.TYPE],
        ["Capitalize", base_config_1.TYPE],
        ["Uncapitalize", base_config_1.TYPE],
        ["NoInfer", base_config_1.TYPE],
        ["ThisType", base_config_1.TYPE],
        ["WeakKeyTypes", base_config_1.TYPE],
        ["WeakKey", base_config_1.TYPE],
        ["ArrayBuffer", base_config_1.TYPE_VALUE],
        ["ArrayBufferTypes", base_config_1.TYPE],
        ["ArrayBufferLike", base_config_1.TYPE],
        ["ArrayBufferConstructor", base_config_1.TYPE],
        ["ArrayBufferView", base_config_1.TYPE],
        ["DataView", base_config_1.TYPE_VALUE],
        ["DataViewConstructor", base_config_1.TYPE],
        ["Int8Array", base_config_1.TYPE_VALUE],
        ["Int8ArrayConstructor", base_config_1.TYPE],
        ["Uint8Array", base_config_1.TYPE_VALUE],
        ["Uint8ArrayConstructor", base_config_1.TYPE],
        ["Uint8ClampedArray", base_config_1.TYPE_VALUE],
        ["Uint8ClampedArrayConstructor", base_config_1.TYPE],
        ["Int16Array", base_config_1.TYPE_VALUE],
        ["Int16ArrayConstructor", base_config_1.TYPE],
        ["Uint16Array", base_config_1.TYPE_VALUE],
        ["Uint16ArrayConstructor", base_config_1.TYPE],
        ["Int32Array", base_config_1.TYPE_VALUE],
        ["Int32ArrayConstructor", base_config_1.TYPE],
        ["Uint32Array", base_config_1.TYPE_VALUE],
        ["Uint32ArrayConstructor", base_config_1.TYPE],
        ["Float32Array", base_config_1.TYPE_VALUE],
        ["Float32ArrayConstructor", base_config_1.TYPE],
        ["Float64Array", base_config_1.TYPE_VALUE],
        ["Float64ArrayConstructor", base_config_1.TYPE],
        ["Intl", base_config_1.TYPE_VALUE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.collection.js
var require_es2015_collection = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.collection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_collection = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_collection = {
      libs: [],
      variables: [
        ["Map", base_config_1.TYPE_VALUE],
        ["MapConstructor", base_config_1.TYPE],
        ["ReadonlyMap", base_config_1.TYPE],
        ["WeakMap", base_config_1.TYPE_VALUE],
        ["WeakMapConstructor", base_config_1.TYPE],
        ["Set", base_config_1.TYPE_VALUE],
        ["SetConstructor", base_config_1.TYPE],
        ["ReadonlySet", base_config_1.TYPE],
        ["WeakSet", base_config_1.TYPE_VALUE],
        ["WeakSetConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.core.js
var require_es2015_core = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.core.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_core = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_core = {
      libs: [],
      variables: [
        ["Array", base_config_1.TYPE],
        ["ArrayConstructor", base_config_1.TYPE],
        ["DateConstructor", base_config_1.TYPE],
        ["Function", base_config_1.TYPE],
        ["Math", base_config_1.TYPE],
        ["NumberConstructor", base_config_1.TYPE],
        ["ObjectConstructor", base_config_1.TYPE],
        ["ReadonlyArray", base_config_1.TYPE],
        ["RegExp", base_config_1.TYPE],
        ["RegExpConstructor", base_config_1.TYPE],
        ["String", base_config_1.TYPE],
        ["StringConstructor", base_config_1.TYPE],
        ["Int8Array", base_config_1.TYPE],
        ["Uint8Array", base_config_1.TYPE],
        ["Uint8ClampedArray", base_config_1.TYPE],
        ["Int16Array", base_config_1.TYPE],
        ["Uint16Array", base_config_1.TYPE],
        ["Int32Array", base_config_1.TYPE],
        ["Uint32Array", base_config_1.TYPE],
        ["Float32Array", base_config_1.TYPE],
        ["Float64Array", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.js
var require_es2015_symbol = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_symbol = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_symbol = {
      libs: [],
      variables: [["SymbolConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.iterable.js
var require_es2015_iterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.iterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_iterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.es2015_iterable = {
      libs: [es2015_symbol_1.es2015_symbol],
      variables: [
        ["SymbolConstructor", base_config_1.TYPE],
        ["IteratorYieldResult", base_config_1.TYPE],
        ["IteratorReturnResult", base_config_1.TYPE],
        ["IteratorResult", base_config_1.TYPE],
        ["Iterator", base_config_1.TYPE],
        ["Iterable", base_config_1.TYPE],
        ["IterableIterator", base_config_1.TYPE],
        ["IteratorObject", base_config_1.TYPE],
        ["BuiltinIteratorReturn", base_config_1.TYPE],
        ["ArrayIterator", base_config_1.TYPE],
        ["Array", base_config_1.TYPE],
        ["ArrayConstructor", base_config_1.TYPE],
        ["ReadonlyArray", base_config_1.TYPE],
        ["IArguments", base_config_1.TYPE],
        ["MapIterator", base_config_1.TYPE],
        ["Map", base_config_1.TYPE],
        ["ReadonlyMap", base_config_1.TYPE],
        ["MapConstructor", base_config_1.TYPE],
        ["WeakMap", base_config_1.TYPE],
        ["WeakMapConstructor", base_config_1.TYPE],
        ["SetIterator", base_config_1.TYPE],
        ["Set", base_config_1.TYPE],
        ["ReadonlySet", base_config_1.TYPE],
        ["SetConstructor", base_config_1.TYPE],
        ["WeakSet", base_config_1.TYPE],
        ["WeakSetConstructor", base_config_1.TYPE],
        ["Promise", base_config_1.TYPE],
        ["PromiseConstructor", base_config_1.TYPE],
        ["StringIterator", base_config_1.TYPE],
        ["String", base_config_1.TYPE],
        ["Int8Array", base_config_1.TYPE],
        ["Int8ArrayConstructor", base_config_1.TYPE],
        ["Uint8Array", base_config_1.TYPE],
        ["Uint8ArrayConstructor", base_config_1.TYPE],
        ["Uint8ClampedArray", base_config_1.TYPE],
        ["Uint8ClampedArrayConstructor", base_config_1.TYPE],
        ["Int16Array", base_config_1.TYPE],
        ["Int16ArrayConstructor", base_config_1.TYPE],
        ["Uint16Array", base_config_1.TYPE],
        ["Uint16ArrayConstructor", base_config_1.TYPE],
        ["Int32Array", base_config_1.TYPE],
        ["Int32ArrayConstructor", base_config_1.TYPE],
        ["Uint32Array", base_config_1.TYPE],
        ["Uint32ArrayConstructor", base_config_1.TYPE],
        ["Float32Array", base_config_1.TYPE],
        ["Float32ArrayConstructor", base_config_1.TYPE],
        ["Float64Array", base_config_1.TYPE],
        ["Float64ArrayConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.generator.js
var require_es2015_generator = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.generator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_generator = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports2.es2015_generator = {
      libs: [es2015_iterable_1.es2015_iterable],
      variables: [
        ["Generator", base_config_1.TYPE],
        ["GeneratorFunction", base_config_1.TYPE],
        ["GeneratorFunctionConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.promise.js
var require_es2015_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.promise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_promise = {
      libs: [],
      variables: [["PromiseConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.proxy.js
var require_es2015_proxy = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.proxy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_proxy = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_proxy = {
      libs: [],
      variables: [
        ["ProxyHandler", base_config_1.TYPE],
        ["ProxyConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.reflect.js
var require_es2015_reflect = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.reflect.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_reflect = void 0;
    var base_config_1 = require_base_config();
    exports2.es2015_reflect = {
      libs: [],
      variables: [["Reflect", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.wellknown.js
var require_es2015_symbol_wellknown = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.wellknown.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015_symbol_wellknown = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.es2015_symbol_wellknown = {
      libs: [es2015_symbol_1.es2015_symbol],
      variables: [
        ["SymbolConstructor", base_config_1.TYPE],
        ["Symbol", base_config_1.TYPE],
        ["Array", base_config_1.TYPE],
        ["ReadonlyArray", base_config_1.TYPE],
        ["Date", base_config_1.TYPE],
        ["Map", base_config_1.TYPE],
        ["WeakMap", base_config_1.TYPE],
        ["Set", base_config_1.TYPE],
        ["WeakSet", base_config_1.TYPE],
        ["JSON", base_config_1.TYPE],
        ["Function", base_config_1.TYPE],
        ["GeneratorFunction", base_config_1.TYPE],
        ["Math", base_config_1.TYPE],
        ["Promise", base_config_1.TYPE],
        ["PromiseConstructor", base_config_1.TYPE],
        ["RegExp", base_config_1.TYPE],
        ["RegExpConstructor", base_config_1.TYPE],
        ["String", base_config_1.TYPE],
        ["ArrayBuffer", base_config_1.TYPE],
        ["DataView", base_config_1.TYPE],
        ["Int8Array", base_config_1.TYPE],
        ["Uint8Array", base_config_1.TYPE],
        ["Uint8ClampedArray", base_config_1.TYPE],
        ["Int16Array", base_config_1.TYPE],
        ["Uint16Array", base_config_1.TYPE],
        ["Int32Array", base_config_1.TYPE],
        ["Uint32Array", base_config_1.TYPE],
        ["Float32Array", base_config_1.TYPE],
        ["Float64Array", base_config_1.TYPE],
        ["ArrayConstructor", base_config_1.TYPE],
        ["MapConstructor", base_config_1.TYPE],
        ["SetConstructor", base_config_1.TYPE],
        ["ArrayBufferConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es6.js
var require_es6 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es6.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es6 = void 0;
    var es5_1 = require_es5();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports2.es6 = {
      libs: [
        es5_1.es5,
        es2015_core_1.es2015_core,
        es2015_collection_1.es2015_collection,
        es2015_iterable_1.es2015_iterable,
        es2015_generator_1.es2015_generator,
        es2015_promise_1.es2015_promise,
        es2015_proxy_1.es2015_proxy,
        es2015_reflect_1.es2015_reflect,
        es2015_symbol_1.es2015_symbol,
        es2015_symbol_wellknown_1.es2015_symbol_wellknown
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.js
var require_es2015 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2015 = void 0;
    var es5_1 = require_es5();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports2.es2015 = {
      libs: [
        es5_1.es5,
        es2015_core_1.es2015_core,
        es2015_collection_1.es2015_collection,
        es2015_iterable_1.es2015_iterable,
        es2015_generator_1.es2015_generator,
        es2015_promise_1.es2015_promise,
        es2015_proxy_1.es2015_proxy,
        es2015_reflect_1.es2015_reflect,
        es2015_symbol_1.es2015_symbol,
        es2015_symbol_wellknown_1.es2015_symbol_wellknown
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.array.include.js
var require_es2016_array_include = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.array.include.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2016_array_include = void 0;
    var base_config_1 = require_base_config();
    exports2.es2016_array_include = {
      libs: [],
      variables: [
        ["Array", base_config_1.TYPE],
        ["ReadonlyArray", base_config_1.TYPE],
        ["Int8Array", base_config_1.TYPE],
        ["Uint8Array", base_config_1.TYPE],
        ["Uint8ClampedArray", base_config_1.TYPE],
        ["Int16Array", base_config_1.TYPE],
        ["Uint16Array", base_config_1.TYPE],
        ["Int32Array", base_config_1.TYPE],
        ["Uint32Array", base_config_1.TYPE],
        ["Float32Array", base_config_1.TYPE],
        ["Float64Array", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.intl.js
var require_es2016_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.intl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2016_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2016_intl = {
      libs: [],
      variables: [["Intl", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es7.js
var require_es7 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es7.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es7 = void 0;
    var es2015_1 = require_es2015();
    var es2016_array_include_1 = require_es2016_array_include();
    var es2016_intl_1 = require_es2016_intl();
    exports2.es7 = {
      libs: [es2015_1.es2015, es2016_array_include_1.es2016_array_include, es2016_intl_1.es2016_intl],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.js
var require_es2016 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2016 = void 0;
    var es2015_1 = require_es2015();
    var es2016_array_include_1 = require_es2016_array_include();
    var es2016_intl_1 = require_es2016_intl();
    exports2.es2016 = {
      libs: [es2015_1.es2015, es2016_array_include_1.es2016_array_include, es2016_intl_1.es2016_intl],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/scripthost.js
var require_scripthost = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/scripthost.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scripthost = void 0;
    var base_config_1 = require_base_config();
    exports2.scripthost = {
      libs: [],
      variables: [
        ["ActiveXObject", base_config_1.TYPE_VALUE],
        ["ITextWriter", base_config_1.TYPE],
        ["TextStreamBase", base_config_1.TYPE],
        ["TextStreamWriter", base_config_1.TYPE],
        ["TextStreamReader", base_config_1.TYPE],
        ["SafeArray", base_config_1.TYPE_VALUE],
        ["Enumerator", base_config_1.TYPE_VALUE],
        ["EnumeratorConstructor", base_config_1.TYPE],
        ["VBArray", base_config_1.TYPE_VALUE],
        ["VBArrayConstructor", base_config_1.TYPE],
        ["VarDate", base_config_1.TYPE_VALUE],
        ["DateConstructor", base_config_1.TYPE],
        ["Date", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.importscripts.js
var require_webworker_importscripts = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.importscripts.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.webworker_importscripts = void 0;
    exports2.webworker_importscripts = {
      libs: [],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.full.js
var require_es2016_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2016_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2016_1 = require_es2016();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2016_full = {
      libs: [es2016_1.es2016, dom_1.dom, webworker_importscripts_1.webworker_importscripts, scripthost_1.scripthost, dom_iterable_1.dom_iterable],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.arraybuffer.js
var require_es2017_arraybuffer = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.arraybuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_arraybuffer = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_arraybuffer = {
      libs: [],
      variables: [["ArrayBufferConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.date.js
var require_es2017_date = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.date.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_date = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_date = {
      libs: [],
      variables: [["DateConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.intl.js
var require_es2017_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.intl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_intl = {
      libs: [],
      variables: [["Intl", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.object.js
var require_es2017_object = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.object.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_object = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_object = {
      libs: [],
      variables: [["ObjectConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.sharedmemory.js
var require_es2017_sharedmemory = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.sharedmemory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports2.es2017_sharedmemory = {
      libs: [es2015_symbol_1.es2015_symbol, es2015_symbol_wellknown_1.es2015_symbol_wellknown],
      variables: [
        ["SharedArrayBuffer", base_config_1.TYPE_VALUE],
        ["SharedArrayBufferConstructor", base_config_1.TYPE],
        ["ArrayBufferTypes", base_config_1.TYPE],
        ["Atomics", base_config_1.TYPE_VALUE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.string.js
var require_es2017_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_string = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_string = {
      libs: [],
      variables: [["String", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.typedarrays.js
var require_es2017_typedarrays = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.typedarrays.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_typedarrays = void 0;
    var base_config_1 = require_base_config();
    exports2.es2017_typedarrays = {
      libs: [],
      variables: [
        ["Int8ArrayConstructor", base_config_1.TYPE],
        ["Uint8ArrayConstructor", base_config_1.TYPE],
        ["Uint8ClampedArrayConstructor", base_config_1.TYPE],
        ["Int16ArrayConstructor", base_config_1.TYPE],
        ["Uint16ArrayConstructor", base_config_1.TYPE],
        ["Int32ArrayConstructor", base_config_1.TYPE],
        ["Uint32ArrayConstructor", base_config_1.TYPE],
        ["Float32ArrayConstructor", base_config_1.TYPE],
        ["Float64ArrayConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.js
var require_es2017 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017 = void 0;
    var es2016_1 = require_es2016();
    var es2017_arraybuffer_1 = require_es2017_arraybuffer();
    var es2017_date_1 = require_es2017_date();
    var es2017_intl_1 = require_es2017_intl();
    var es2017_object_1 = require_es2017_object();
    var es2017_sharedmemory_1 = require_es2017_sharedmemory();
    var es2017_string_1 = require_es2017_string();
    var es2017_typedarrays_1 = require_es2017_typedarrays();
    exports2.es2017 = {
      libs: [
        es2016_1.es2016,
        es2017_arraybuffer_1.es2017_arraybuffer,
        es2017_date_1.es2017_date,
        es2017_intl_1.es2017_intl,
        es2017_object_1.es2017_object,
        es2017_sharedmemory_1.es2017_sharedmemory,
        es2017_string_1.es2017_string,
        es2017_typedarrays_1.es2017_typedarrays
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.full.js
var require_es2017_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2017_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2017_1 = require_es2017();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2017_full = {
      libs: [es2017_1.es2017, dom_1.dom, webworker_importscripts_1.webworker_importscripts, scripthost_1.scripthost, dom_iterable_1.dom_iterable],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asynciterable.js
var require_es2018_asynciterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asynciterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_asynciterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.es2018_asynciterable = {
      libs: [es2015_symbol_1.es2015_symbol, es2015_iterable_1.es2015_iterable],
      variables: [
        ["SymbolConstructor", base_config_1.TYPE],
        ["AsyncIterator", base_config_1.TYPE],
        ["AsyncIterable", base_config_1.TYPE],
        ["AsyncIterableIterator", base_config_1.TYPE],
        ["AsyncIteratorObject", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asyncgenerator.js
var require_es2018_asyncgenerator = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asyncgenerator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_asyncgenerator = void 0;
    var base_config_1 = require_base_config();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    exports2.es2018_asyncgenerator = {
      libs: [es2018_asynciterable_1.es2018_asynciterable],
      variables: [
        ["AsyncGenerator", base_config_1.TYPE],
        ["AsyncGeneratorFunction", base_config_1.TYPE],
        ["AsyncGeneratorFunctionConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.intl.js
var require_es2018_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.intl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2018_intl = {
      libs: [],
      variables: [["Intl", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.promise.js
var require_es2018_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.promise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.es2018_promise = {
      libs: [],
      variables: [["Promise", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.regexp.js
var require_es2018_regexp = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.regexp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_regexp = void 0;
    var base_config_1 = require_base_config();
    exports2.es2018_regexp = {
      libs: [],
      variables: [
        ["RegExpMatchArray", base_config_1.TYPE],
        ["RegExpExecArray", base_config_1.TYPE],
        ["RegExp", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.js
var require_es2018 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018 = void 0;
    var es2017_1 = require_es2017();
    var es2018_asyncgenerator_1 = require_es2018_asyncgenerator();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    var es2018_intl_1 = require_es2018_intl();
    var es2018_promise_1 = require_es2018_promise();
    var es2018_regexp_1 = require_es2018_regexp();
    exports2.es2018 = {
      libs: [
        es2017_1.es2017,
        es2018_asynciterable_1.es2018_asynciterable,
        es2018_asyncgenerator_1.es2018_asyncgenerator,
        es2018_promise_1.es2018_promise,
        es2018_regexp_1.es2018_regexp,
        es2018_intl_1.es2018_intl
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.full.js
var require_es2018_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2018_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2018_1 = require_es2018();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2018_full = {
      libs: [
        es2018_1.es2018,
        dom_1.dom,
        webworker_importscripts_1.webworker_importscripts,
        scripthost_1.scripthost,
        dom_iterable_1.dom_iterable,
        dom_asynciterable_1.dom_asynciterable
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.array.js
var require_es2019_array = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.array.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_array = void 0;
    var base_config_1 = require_base_config();
    exports2.es2019_array = {
      libs: [],
      variables: [
        ["FlatArray", base_config_1.TYPE],
        ["ReadonlyArray", base_config_1.TYPE],
        ["Array", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.intl.js
var require_es2019_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.intl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2019_intl = {
      libs: [],
      variables: [["Intl", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.object.js
var require_es2019_object = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.object.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_object = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports2.es2019_object = {
      libs: [es2015_iterable_1.es2015_iterable],
      variables: [["ObjectConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.string.js
var require_es2019_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_string = void 0;
    var base_config_1 = require_base_config();
    exports2.es2019_string = {
      libs: [],
      variables: [["String", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.symbol.js
var require_es2019_symbol = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.symbol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_symbol = void 0;
    var base_config_1 = require_base_config();
    exports2.es2019_symbol = {
      libs: [],
      variables: [["Symbol", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.js
var require_es2019 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019 = void 0;
    var es2018_1 = require_es2018();
    var es2019_array_1 = require_es2019_array();
    var es2019_intl_1 = require_es2019_intl();
    var es2019_object_1 = require_es2019_object();
    var es2019_string_1 = require_es2019_string();
    var es2019_symbol_1 = require_es2019_symbol();
    exports2.es2019 = {
      libs: [
        es2018_1.es2018,
        es2019_array_1.es2019_array,
        es2019_object_1.es2019_object,
        es2019_string_1.es2019_string,
        es2019_symbol_1.es2019_symbol,
        es2019_intl_1.es2019_intl
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.full.js
var require_es2019_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2019_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2019_1 = require_es2019();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2019_full = {
      libs: [
        es2019_1.es2019,
        dom_1.dom,
        webworker_importscripts_1.webworker_importscripts,
        scripthost_1.scripthost,
        dom_iterable_1.dom_iterable,
        dom_asynciterable_1.dom_asynciterable
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.intl.js
var require_es2020_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.intl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_intl = void 0;
    var base_config_1 = require_base_config();
    var es2018_intl_1 = require_es2018_intl();
    exports2.es2020_intl = {
      libs: [es2018_intl_1.es2018_intl],
      variables: [["Intl", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.bigint.js
var require_es2020_bigint = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.bigint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_bigint = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports2.es2020_bigint = {
      libs: [es2020_intl_1.es2020_intl],
      variables: [
        ["BigIntToLocaleStringOptions", base_config_1.TYPE],
        ["BigInt", base_config_1.TYPE_VALUE],
        ["BigIntConstructor", base_config_1.TYPE],
        ["BigInt64Array", base_config_1.TYPE_VALUE],
        ["BigInt64ArrayConstructor", base_config_1.TYPE],
        ["BigUint64Array", base_config_1.TYPE_VALUE],
        ["BigUint64ArrayConstructor", base_config_1.TYPE],
        ["DataView", base_config_1.TYPE],
        ["Intl", base_config_1.TYPE_VALUE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.date.js
var require_es2020_date = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.date.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_date = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports2.es2020_date = {
      libs: [es2020_intl_1.es2020_intl],
      variables: [["Date", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.number.js
var require_es2020_number = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.number.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_number = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports2.es2020_number = {
      libs: [es2020_intl_1.es2020_intl],
      variables: [["Number", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.promise.js
var require_es2020_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.promise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.es2020_promise = {
      libs: [],
      variables: [
        ["PromiseFulfilledResult", base_config_1.TYPE],
        ["PromiseRejectedResult", base_config_1.TYPE],
        ["PromiseSettledResult", base_config_1.TYPE],
        ["PromiseConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.sharedmemory.js
var require_es2020_sharedmemory = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.sharedmemory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    var es2020_bigint_1 = require_es2020_bigint();
    exports2.es2020_sharedmemory = {
      libs: [es2020_bigint_1.es2020_bigint],
      variables: [["Atomics", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.symbol.wellknown.js
var require_es2020_symbol_wellknown = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.symbol.wellknown.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_symbol_wellknown = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.es2020_symbol_wellknown = {
      libs: [es2015_iterable_1.es2015_iterable, es2015_symbol_1.es2015_symbol],
      variables: [
        ["SymbolConstructor", base_config_1.TYPE],
        ["RegExpStringIterator", base_config_1.TYPE],
        ["RegExp", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.string.js
var require_es2020_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_string = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2020_intl_1 = require_es2020_intl();
    var es2020_symbol_wellknown_1 = require_es2020_symbol_wellknown();
    exports2.es2020_string = {
      libs: [es2015_iterable_1.es2015_iterable, es2020_intl_1.es2020_intl, es2020_symbol_wellknown_1.es2020_symbol_wellknown],
      variables: [["String", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.js
var require_es2020 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020 = void 0;
    var es2019_1 = require_es2019();
    var es2020_bigint_1 = require_es2020_bigint();
    var es2020_date_1 = require_es2020_date();
    var es2020_intl_1 = require_es2020_intl();
    var es2020_number_1 = require_es2020_number();
    var es2020_promise_1 = require_es2020_promise();
    var es2020_sharedmemory_1 = require_es2020_sharedmemory();
    var es2020_string_1 = require_es2020_string();
    var es2020_symbol_wellknown_1 = require_es2020_symbol_wellknown();
    exports2.es2020 = {
      libs: [
        es2019_1.es2019,
        es2020_bigint_1.es2020_bigint,
        es2020_date_1.es2020_date,
        es2020_number_1.es2020_number,
        es2020_promise_1.es2020_promise,
        es2020_sharedmemory_1.es2020_sharedmemory,
        es2020_string_1.es2020_string,
        es2020_symbol_wellknown_1.es2020_symbol_wellknown,
        es2020_intl_1.es2020_intl
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.full.js
var require_es2020_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2020_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2020_1 = require_es2020();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2020_full = {
      libs: [
        es2020_1.es2020,
        dom_1.dom,
        webworker_importscripts_1.webworker_importscripts,
        scripthost_1.scripthost,
        dom_iterable_1.dom_iterable,
        dom_asynciterable_1.dom_asynciterable
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.intl.js
var require_es2021_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.intl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2021_intl = {
      libs: [],
      variables: [["Intl", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.promise.js
var require_es2021_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.promise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.es2021_promise = {
      libs: [],
      variables: [
        ["AggregateError", base_config_1.TYPE_VALUE],
        ["AggregateErrorConstructor", base_config_1.TYPE],
        ["PromiseConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.string.js
var require_es2021_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_string = void 0;
    var base_config_1 = require_base_config();
    exports2.es2021_string = {
      libs: [],
      variables: [["String", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.weakref.js
var require_es2021_weakref = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.weakref.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_weakref = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports2.es2021_weakref = {
      libs: [es2015_symbol_wellknown_1.es2015_symbol_wellknown],
      variables: [
        ["WeakRef", base_config_1.TYPE_VALUE],
        ["WeakRefConstructor", base_config_1.TYPE],
        ["FinalizationRegistry", base_config_1.TYPE_VALUE],
        ["FinalizationRegistryConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.js
var require_es2021 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021 = void 0;
    var es2020_1 = require_es2020();
    var es2021_intl_1 = require_es2021_intl();
    var es2021_promise_1 = require_es2021_promise();
    var es2021_string_1 = require_es2021_string();
    var es2021_weakref_1 = require_es2021_weakref();
    exports2.es2021 = {
      libs: [es2020_1.es2020, es2021_promise_1.es2021_promise, es2021_string_1.es2021_string, es2021_weakref_1.es2021_weakref, es2021_intl_1.es2021_intl],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.full.js
var require_es2021_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2021_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2021_1 = require_es2021();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2021_full = {
      libs: [
        es2021_1.es2021,
        dom_1.dom,
        webworker_importscripts_1.webworker_importscripts,
        scripthost_1.scripthost,
        dom_iterable_1.dom_iterable,
        dom_asynciterable_1.dom_asynciterable
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.array.js
var require_es2022_array = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.array.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_array = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_array = {
      libs: [],
      variables: [
        ["Array", base_config_1.TYPE],
        ["ReadonlyArray", base_config_1.TYPE],
        ["Int8Array", base_config_1.TYPE],
        ["Uint8Array", base_config_1.TYPE],
        ["Uint8ClampedArray", base_config_1.TYPE],
        ["Int16Array", base_config_1.TYPE],
        ["Uint16Array", base_config_1.TYPE],
        ["Int32Array", base_config_1.TYPE],
        ["Uint32Array", base_config_1.TYPE],
        ["Float32Array", base_config_1.TYPE],
        ["Float64Array", base_config_1.TYPE],
        ["BigInt64Array", base_config_1.TYPE],
        ["BigUint64Array", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.error.js
var require_es2022_error = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_error = void 0;
    var base_config_1 = require_base_config();
    var es2021_promise_1 = require_es2021_promise();
    exports2.es2022_error = {
      libs: [es2021_promise_1.es2021_promise],
      variables: [
        ["ErrorOptions", base_config_1.TYPE],
        ["Error", base_config_1.TYPE],
        ["ErrorConstructor", base_config_1.TYPE],
        ["EvalErrorConstructor", base_config_1.TYPE],
        ["RangeErrorConstructor", base_config_1.TYPE],
        ["ReferenceErrorConstructor", base_config_1.TYPE],
        ["SyntaxErrorConstructor", base_config_1.TYPE],
        ["TypeErrorConstructor", base_config_1.TYPE],
        ["URIErrorConstructor", base_config_1.TYPE],
        ["AggregateErrorConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.intl.js
var require_es2022_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.intl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_intl = {
      libs: [],
      variables: [["Intl", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.object.js
var require_es2022_object = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.object.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_object = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_object = {
      libs: [],
      variables: [["ObjectConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.regexp.js
var require_es2022_regexp = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.regexp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_regexp = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_regexp = {
      libs: [],
      variables: [
        ["RegExpMatchArray", base_config_1.TYPE],
        ["RegExpExecArray", base_config_1.TYPE],
        ["RegExpIndicesArray", base_config_1.TYPE],
        ["RegExp", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.string.js
var require_es2022_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_string = void 0;
    var base_config_1 = require_base_config();
    exports2.es2022_string = {
      libs: [],
      variables: [["String", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.js
var require_es2022 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022 = void 0;
    var es2021_1 = require_es2021();
    var es2022_array_1 = require_es2022_array();
    var es2022_error_1 = require_es2022_error();
    var es2022_intl_1 = require_es2022_intl();
    var es2022_object_1 = require_es2022_object();
    var es2022_regexp_1 = require_es2022_regexp();
    var es2022_string_1 = require_es2022_string();
    exports2.es2022 = {
      libs: [
        es2021_1.es2021,
        es2022_array_1.es2022_array,
        es2022_error_1.es2022_error,
        es2022_intl_1.es2022_intl,
        es2022_object_1.es2022_object,
        es2022_regexp_1.es2022_regexp,
        es2022_string_1.es2022_string
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.full.js
var require_es2022_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2022_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2022_1 = require_es2022();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2022_full = {
      libs: [
        es2022_1.es2022,
        dom_1.dom,
        webworker_importscripts_1.webworker_importscripts,
        scripthost_1.scripthost,
        dom_iterable_1.dom_iterable,
        dom_asynciterable_1.dom_asynciterable
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.array.js
var require_es2023_array = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.array.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2023_array = void 0;
    var base_config_1 = require_base_config();
    exports2.es2023_array = {
      libs: [],
      variables: [
        ["Array", base_config_1.TYPE],
        ["ReadonlyArray", base_config_1.TYPE],
        ["Int8Array", base_config_1.TYPE],
        ["Uint8Array", base_config_1.TYPE],
        ["Uint8ClampedArray", base_config_1.TYPE],
        ["Int16Array", base_config_1.TYPE],
        ["Uint16Array", base_config_1.TYPE],
        ["Int32Array", base_config_1.TYPE],
        ["Uint32Array", base_config_1.TYPE],
        ["Float32Array", base_config_1.TYPE],
        ["Float64Array", base_config_1.TYPE],
        ["BigInt64Array", base_config_1.TYPE],
        ["BigUint64Array", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.collection.js
var require_es2023_collection = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.collection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2023_collection = void 0;
    var base_config_1 = require_base_config();
    exports2.es2023_collection = {
      libs: [],
      variables: [["WeakKeyTypes", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.intl.js
var require_es2023_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.intl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2023_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.es2023_intl = {
      libs: [],
      variables: [["Intl", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.js
var require_es2023 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2023 = void 0;
    var es2022_1 = require_es2022();
    var es2023_array_1 = require_es2023_array();
    var es2023_collection_1 = require_es2023_collection();
    var es2023_intl_1 = require_es2023_intl();
    exports2.es2023 = {
      libs: [es2022_1.es2022, es2023_array_1.es2023_array, es2023_collection_1.es2023_collection, es2023_intl_1.es2023_intl],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.full.js
var require_es2023_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2023_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2023_1 = require_es2023();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2023_full = {
      libs: [
        es2023_1.es2023,
        dom_1.dom,
        webworker_importscripts_1.webworker_importscripts,
        scripthost_1.scripthost,
        dom_iterable_1.dom_iterable,
        dom_asynciterable_1.dom_asynciterable
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.arraybuffer.js
var require_es2024_arraybuffer = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.arraybuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2024_arraybuffer = void 0;
    var base_config_1 = require_base_config();
    exports2.es2024_arraybuffer = {
      libs: [],
      variables: [
        ["ArrayBuffer", base_config_1.TYPE],
        ["ArrayBufferConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.collection.js
var require_es2024_collection = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.collection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2024_collection = void 0;
    var base_config_1 = require_base_config();
    exports2.es2024_collection = {
      libs: [],
      variables: [["MapConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.object.js
var require_es2024_object = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.object.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2024_object = void 0;
    var base_config_1 = require_base_config();
    exports2.es2024_object = {
      libs: [],
      variables: [["ObjectConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.promise.js
var require_es2024_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.promise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2024_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.es2024_promise = {
      libs: [],
      variables: [
        ["PromiseWithResolvers", base_config_1.TYPE],
        ["PromiseConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.regexp.js
var require_es2024_regexp = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.regexp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2024_regexp = void 0;
    var base_config_1 = require_base_config();
    exports2.es2024_regexp = {
      libs: [],
      variables: [["RegExp", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.sharedmemory.js
var require_es2024_sharedmemory = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.sharedmemory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2024_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    var es2020_bigint_1 = require_es2020_bigint();
    exports2.es2024_sharedmemory = {
      libs: [es2020_bigint_1.es2020_bigint],
      variables: [
        ["Atomics", base_config_1.TYPE],
        ["SharedArrayBuffer", base_config_1.TYPE],
        ["SharedArrayBufferConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.string.js
var require_es2024_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2024_string = void 0;
    var base_config_1 = require_base_config();
    exports2.es2024_string = {
      libs: [],
      variables: [["String", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.js
var require_es2024 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2024 = void 0;
    var es2023_1 = require_es2023();
    var es2024_arraybuffer_1 = require_es2024_arraybuffer();
    var es2024_collection_1 = require_es2024_collection();
    var es2024_object_1 = require_es2024_object();
    var es2024_promise_1 = require_es2024_promise();
    var es2024_regexp_1 = require_es2024_regexp();
    var es2024_sharedmemory_1 = require_es2024_sharedmemory();
    var es2024_string_1 = require_es2024_string();
    exports2.es2024 = {
      libs: [
        es2023_1.es2023,
        es2024_arraybuffer_1.es2024_arraybuffer,
        es2024_collection_1.es2024_collection,
        es2024_object_1.es2024_object,
        es2024_promise_1.es2024_promise,
        es2024_regexp_1.es2024_regexp,
        es2024_sharedmemory_1.es2024_sharedmemory,
        es2024_string_1.es2024_string
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.full.js
var require_es2024_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2024.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.es2024_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es2024_1 = require_es2024();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.es2024_full = {
      libs: [
        es2024_1.es2024,
        dom_1.dom,
        webworker_importscripts_1.webworker_importscripts,
        scripthost_1.scripthost,
        dom_iterable_1.dom_iterable,
        dom_asynciterable_1.dom_asynciterable
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.array.js
var require_esnext_array = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.array.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_array = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_array = {
      libs: [],
      variables: [["ArrayConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.collection.js
var require_esnext_collection = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.collection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_collection = void 0;
    var base_config_1 = require_base_config();
    var es2024_collection_1 = require_es2024_collection();
    exports2.esnext_collection = {
      libs: [es2024_collection_1.es2024_collection],
      variables: [
        ["ReadonlySetLike", base_config_1.TYPE],
        ["Set", base_config_1.TYPE],
        ["ReadonlySet", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.decorators.js
var require_esnext_decorators = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.decorators.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_decorators = void 0;
    var base_config_1 = require_base_config();
    var decorators_1 = require_decorators();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.esnext_decorators = {
      libs: [es2015_symbol_1.es2015_symbol, decorators_1.decorators],
      variables: [
        ["SymbolConstructor", base_config_1.TYPE],
        ["Function", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.disposable.js
var require_esnext_disposable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_disposable = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    exports2.esnext_disposable = {
      libs: [es2015_symbol_1.es2015_symbol, es2015_iterable_1.es2015_iterable, es2018_asynciterable_1.es2018_asynciterable],
      variables: [
        ["SymbolConstructor", base_config_1.TYPE],
        ["Disposable", base_config_1.TYPE],
        ["AsyncDisposable", base_config_1.TYPE],
        ["SuppressedError", base_config_1.TYPE_VALUE],
        ["SuppressedErrorConstructor", base_config_1.TYPE],
        ["DisposableStack", base_config_1.TYPE_VALUE],
        ["DisposableStackConstructor", base_config_1.TYPE],
        ["AsyncDisposableStack", base_config_1.TYPE_VALUE],
        ["AsyncDisposableStackConstructor", base_config_1.TYPE],
        ["IteratorObject", base_config_1.TYPE],
        ["AsyncIteratorObject", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.error.js
var require_esnext_error = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_error = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_error = {
      libs: [],
      variables: [["ErrorConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.float16.js
var require_esnext_float16 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.float16.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_float16 = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.esnext_float16 = {
      libs: [es2015_symbol_1.es2015_symbol, es2015_iterable_1.es2015_iterable],
      variables: [
        ["Float16Array", base_config_1.TYPE_VALUE],
        ["Float16ArrayConstructor", base_config_1.TYPE],
        ["Math", base_config_1.TYPE],
        ["DataView", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.intl.js
var require_esnext_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.intl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_intl = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_intl = {
      libs: [],
      variables: [["Intl", base_config_1.TYPE_VALUE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.iterator.js
var require_esnext_iterator = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.iterator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_iterator = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports2.esnext_iterator = {
      libs: [es2015_iterable_1.es2015_iterable],
      variables: [
        ["Iterator", base_config_1.TYPE_VALUE],
        ["IteratorObjectConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.promise.js
var require_esnext_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.promise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_promise = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_promise = {
      libs: [],
      variables: [["PromiseConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.sharedmemory.js
var require_esnext_sharedmemory = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.sharedmemory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_sharedmemory = {
      libs: [],
      variables: [["Atomics", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.js
var require_esnext = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext = void 0;
    var es2024_1 = require_es2024();
    var esnext_array_1 = require_esnext_array();
    var esnext_collection_1 = require_esnext_collection();
    var esnext_decorators_1 = require_esnext_decorators();
    var esnext_disposable_1 = require_esnext_disposable();
    var esnext_error_1 = require_esnext_error();
    var esnext_float16_1 = require_esnext_float16();
    var esnext_intl_1 = require_esnext_intl();
    var esnext_iterator_1 = require_esnext_iterator();
    var esnext_promise_1 = require_esnext_promise();
    var esnext_sharedmemory_1 = require_esnext_sharedmemory();
    exports2.esnext = {
      libs: [
        es2024_1.es2024,
        esnext_intl_1.esnext_intl,
        esnext_decorators_1.esnext_decorators,
        esnext_disposable_1.esnext_disposable,
        esnext_collection_1.esnext_collection,
        esnext_array_1.esnext_array,
        esnext_iterator_1.esnext_iterator,
        esnext_promise_1.esnext_promise,
        esnext_float16_1.esnext_float16,
        esnext_error_1.esnext_error,
        esnext_sharedmemory_1.esnext_sharedmemory
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.asynciterable.js
var require_esnext_asynciterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.asynciterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_asynciterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports2.esnext_asynciterable = {
      libs: [es2015_symbol_1.es2015_symbol, es2015_iterable_1.es2015_iterable],
      variables: [
        ["SymbolConstructor", base_config_1.TYPE],
        ["AsyncIterator", base_config_1.TYPE],
        ["AsyncIterable", base_config_1.TYPE],
        ["AsyncIterableIterator", base_config_1.TYPE],
        ["AsyncIteratorObject", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.bigint.js
var require_esnext_bigint = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.bigint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_bigint = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports2.esnext_bigint = {
      libs: [es2020_intl_1.es2020_intl],
      variables: [
        ["BigIntToLocaleStringOptions", base_config_1.TYPE],
        ["BigInt", base_config_1.TYPE_VALUE],
        ["BigIntConstructor", base_config_1.TYPE],
        ["BigInt64Array", base_config_1.TYPE_VALUE],
        ["BigInt64ArrayConstructor", base_config_1.TYPE],
        ["BigUint64Array", base_config_1.TYPE_VALUE],
        ["BigUint64ArrayConstructor", base_config_1.TYPE],
        ["DataView", base_config_1.TYPE],
        ["Intl", base_config_1.TYPE_VALUE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.full.js
var require_esnext_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.full.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_full = void 0;
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var esnext_1 = require_esnext();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.esnext_full = {
      libs: [
        esnext_1.esnext,
        dom_1.dom,
        webworker_importscripts_1.webworker_importscripts,
        scripthost_1.scripthost,
        dom_iterable_1.dom_iterable,
        dom_asynciterable_1.dom_asynciterable
      ],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.object.js
var require_esnext_object = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.object.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_object = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_object = {
      libs: [],
      variables: [["ObjectConstructor", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.regexp.js
var require_esnext_regexp = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.regexp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_regexp = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_regexp = {
      libs: [],
      variables: [["RegExp", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.string.js
var require_esnext_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_string = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_string = {
      libs: [],
      variables: [["String", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.symbol.js
var require_esnext_symbol = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.symbol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_symbol = void 0;
    var base_config_1 = require_base_config();
    exports2.esnext_symbol = {
      libs: [],
      variables: [["Symbol", base_config_1.TYPE]]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.weakref.js
var require_esnext_weakref = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.weakref.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.esnext_weakref = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports2.esnext_weakref = {
      libs: [es2015_symbol_wellknown_1.es2015_symbol_wellknown],
      variables: [
        ["WeakRef", base_config_1.TYPE_VALUE],
        ["WeakRefConstructor", base_config_1.TYPE],
        ["FinalizationRegistry", base_config_1.TYPE_VALUE],
        ["FinalizationRegistryConstructor", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/lib.js
var require_lib2 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/lib.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.lib = void 0;
    var dom_1 = require_dom();
    var es5_1 = require_es5();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports2.lib = {
      libs: [es5_1.es5, dom_1.dom, webworker_importscripts_1.webworker_importscripts, scripthost_1.scripthost],
      variables: []
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.js
var require_webworker = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.webworker = void 0;
    var base_config_1 = require_base_config();
    exports2.webworker = {
      libs: [],
      variables: [
        ["AddEventListenerOptions", base_config_1.TYPE],
        ["AesCbcParams", base_config_1.TYPE],
        ["AesCtrParams", base_config_1.TYPE],
        ["AesDerivedKeyParams", base_config_1.TYPE],
        ["AesGcmParams", base_config_1.TYPE],
        ["AesKeyAlgorithm", base_config_1.TYPE],
        ["AesKeyGenParams", base_config_1.TYPE],
        ["Algorithm", base_config_1.TYPE],
        ["AudioConfiguration", base_config_1.TYPE],
        ["AudioDataCopyToOptions", base_config_1.TYPE],
        ["AudioDataInit", base_config_1.TYPE],
        ["AudioDecoderConfig", base_config_1.TYPE],
        ["AudioDecoderInit", base_config_1.TYPE],
        ["AudioDecoderSupport", base_config_1.TYPE],
        ["AudioEncoderConfig", base_config_1.TYPE],
        ["AudioEncoderInit", base_config_1.TYPE],
        ["AudioEncoderSupport", base_config_1.TYPE],
        ["AvcEncoderConfig", base_config_1.TYPE],
        ["BlobPropertyBag", base_config_1.TYPE],
        ["CSSMatrixComponentOptions", base_config_1.TYPE],
        ["CSSNumericType", base_config_1.TYPE],
        ["CacheQueryOptions", base_config_1.TYPE],
        ["ClientQueryOptions", base_config_1.TYPE],
        ["CloseEventInit", base_config_1.TYPE],
        ["CookieInit", base_config_1.TYPE],
        ["CookieListItem", base_config_1.TYPE],
        ["CookieStoreDeleteOptions", base_config_1.TYPE],
        ["CookieStoreGetOptions", base_config_1.TYPE],
        ["CryptoKeyPair", base_config_1.TYPE],
        ["CustomEventInit", base_config_1.TYPE],
        ["DOMMatrix2DInit", base_config_1.TYPE],
        ["DOMMatrixInit", base_config_1.TYPE],
        ["DOMPointInit", base_config_1.TYPE],
        ["DOMQuadInit", base_config_1.TYPE],
        ["DOMRectInit", base_config_1.TYPE],
        ["EcKeyGenParams", base_config_1.TYPE],
        ["EcKeyImportParams", base_config_1.TYPE],
        ["EcdhKeyDeriveParams", base_config_1.TYPE],
        ["EcdsaParams", base_config_1.TYPE],
        ["EncodedAudioChunkInit", base_config_1.TYPE],
        ["EncodedAudioChunkMetadata", base_config_1.TYPE],
        ["EncodedVideoChunkInit", base_config_1.TYPE],
        ["EncodedVideoChunkMetadata", base_config_1.TYPE],
        ["ErrorEventInit", base_config_1.TYPE],
        ["EventInit", base_config_1.TYPE],
        ["EventListenerOptions", base_config_1.TYPE],
        ["EventSourceInit", base_config_1.TYPE],
        ["ExtendableCookieChangeEventInit", base_config_1.TYPE],
        ["ExtendableEventInit", base_config_1.TYPE],
        ["ExtendableMessageEventInit", base_config_1.TYPE],
        ["FetchEventInit", base_config_1.TYPE],
        ["FilePropertyBag", base_config_1.TYPE],
        ["FileSystemCreateWritableOptions", base_config_1.TYPE],
        ["FileSystemGetDirectoryOptions", base_config_1.TYPE],
        ["FileSystemGetFileOptions", base_config_1.TYPE],
        ["FileSystemReadWriteOptions", base_config_1.TYPE],
        ["FileSystemRemoveOptions", base_config_1.TYPE],
        ["FontFaceDescriptors", base_config_1.TYPE],
        ["FontFaceSetLoadEventInit", base_config_1.TYPE],
        ["GetNotificationOptions", base_config_1.TYPE],
        ["HkdfParams", base_config_1.TYPE],
        ["HmacImportParams", base_config_1.TYPE],
        ["HmacKeyGenParams", base_config_1.TYPE],
        ["IDBDatabaseInfo", base_config_1.TYPE],
        ["IDBIndexParameters", base_config_1.TYPE],
        ["IDBObjectStoreParameters", base_config_1.TYPE],
        ["IDBTransactionOptions", base_config_1.TYPE],
        ["IDBVersionChangeEventInit", base_config_1.TYPE],
        ["ImageBitmapOptions", base_config_1.TYPE],
        ["ImageBitmapRenderingContextSettings", base_config_1.TYPE],
        ["ImageDataSettings", base_config_1.TYPE],
        ["ImageDecodeOptions", base_config_1.TYPE],
        ["ImageDecodeResult", base_config_1.TYPE],
        ["ImageDecoderInit", base_config_1.TYPE],
        ["ImageEncodeOptions", base_config_1.TYPE],
        ["JsonWebKey", base_config_1.TYPE],
        ["KeyAlgorithm", base_config_1.TYPE],
        ["KeySystemTrackConfiguration", base_config_1.TYPE],
        ["LockInfo", base_config_1.TYPE],
        ["LockManagerSnapshot", base_config_1.TYPE],
        ["LockOptions", base_config_1.TYPE],
        ["MediaCapabilitiesDecodingInfo", base_config_1.TYPE],
        ["MediaCapabilitiesEncodingInfo", base_config_1.TYPE],
        ["MediaCapabilitiesInfo", base_config_1.TYPE],
        ["MediaCapabilitiesKeySystemConfiguration", base_config_1.TYPE],
        ["MediaConfiguration", base_config_1.TYPE],
        ["MediaDecodingConfiguration", base_config_1.TYPE],
        ["MediaEncodingConfiguration", base_config_1.TYPE],
        ["MediaStreamTrackProcessorInit", base_config_1.TYPE],
        ["MessageEventInit", base_config_1.TYPE],
        ["MultiCacheQueryOptions", base_config_1.TYPE],
        ["NavigationPreloadState", base_config_1.TYPE],
        ["NotificationEventInit", base_config_1.TYPE],
        ["NotificationOptions", base_config_1.TYPE],
        ["OpusEncoderConfig", base_config_1.TYPE],
        ["Pbkdf2Params", base_config_1.TYPE],
        ["PerformanceMarkOptions", base_config_1.TYPE],
        ["PerformanceMeasureOptions", base_config_1.TYPE],
        ["PerformanceObserverInit", base_config_1.TYPE],
        ["PermissionDescriptor", base_config_1.TYPE],
        ["PlaneLayout", base_config_1.TYPE],
        ["ProgressEventInit", base_config_1.TYPE],
        ["PromiseRejectionEventInit", base_config_1.TYPE],
        ["PushEventInit", base_config_1.TYPE],
        ["PushSubscriptionChangeEventInit", base_config_1.TYPE],
        ["PushSubscriptionJSON", base_config_1.TYPE],
        ["PushSubscriptionOptionsInit", base_config_1.TYPE],
        ["QueuingStrategy", base_config_1.TYPE],
        ["QueuingStrategyInit", base_config_1.TYPE],
        ["RTCEncodedAudioFrameMetadata", base_config_1.TYPE],
        ["RTCEncodedFrameMetadata", base_config_1.TYPE],
        ["RTCEncodedVideoFrameMetadata", base_config_1.TYPE],
        ["ReadableStreamGetReaderOptions", base_config_1.TYPE],
        ["ReadableStreamIteratorOptions", base_config_1.TYPE],
        ["ReadableStreamReadDoneResult", base_config_1.TYPE],
        ["ReadableStreamReadValueResult", base_config_1.TYPE],
        ["ReadableWritablePair", base_config_1.TYPE],
        ["RegistrationOptions", base_config_1.TYPE],
        ["ReportingObserverOptions", base_config_1.TYPE],
        ["RequestInit", base_config_1.TYPE],
        ["ResponseInit", base_config_1.TYPE],
        ["RsaHashedImportParams", base_config_1.TYPE],
        ["RsaHashedKeyGenParams", base_config_1.TYPE],
        ["RsaKeyGenParams", base_config_1.TYPE],
        ["RsaOaepParams", base_config_1.TYPE],
        ["RsaOtherPrimesInfo", base_config_1.TYPE],
        ["RsaPssParams", base_config_1.TYPE],
        ["SecurityPolicyViolationEventInit", base_config_1.TYPE],
        ["StorageEstimate", base_config_1.TYPE],
        ["StreamPipeOptions", base_config_1.TYPE],
        ["StructuredSerializeOptions", base_config_1.TYPE],
        ["TextDecodeOptions", base_config_1.TYPE],
        ["TextDecoderOptions", base_config_1.TYPE],
        ["TextEncoderEncodeIntoResult", base_config_1.TYPE],
        ["Transformer", base_config_1.TYPE],
        ["UnderlyingByteSource", base_config_1.TYPE],
        ["UnderlyingDefaultSource", base_config_1.TYPE],
        ["UnderlyingSink", base_config_1.TYPE],
        ["UnderlyingSource", base_config_1.TYPE],
        ["VideoColorSpaceInit", base_config_1.TYPE],
        ["VideoConfiguration", base_config_1.TYPE],
        ["VideoDecoderConfig", base_config_1.TYPE],
        ["VideoDecoderInit", base_config_1.TYPE],
        ["VideoDecoderSupport", base_config_1.TYPE],
        ["VideoEncoderConfig", base_config_1.TYPE],
        ["VideoEncoderEncodeOptions", base_config_1.TYPE],
        ["VideoEncoderEncodeOptionsForAvc", base_config_1.TYPE],
        ["VideoEncoderInit", base_config_1.TYPE],
        ["VideoEncoderSupport", base_config_1.TYPE],
        ["VideoFrameBufferInit", base_config_1.TYPE],
        ["VideoFrameCopyToOptions", base_config_1.TYPE],
        ["VideoFrameInit", base_config_1.TYPE],
        ["WebGLContextAttributes", base_config_1.TYPE],
        ["WebGLContextEventInit", base_config_1.TYPE],
        ["WebTransportCloseInfo", base_config_1.TYPE],
        ["WebTransportErrorOptions", base_config_1.TYPE],
        ["WebTransportHash", base_config_1.TYPE],
        ["WebTransportOptions", base_config_1.TYPE],
        ["WebTransportSendOptions", base_config_1.TYPE],
        ["WebTransportSendStreamOptions", base_config_1.TYPE],
        ["WorkerOptions", base_config_1.TYPE],
        ["WriteParams", base_config_1.TYPE],
        ["ANGLE_instanced_arrays", base_config_1.TYPE],
        ["AbortController", base_config_1.TYPE_VALUE],
        ["AbortSignalEventMap", base_config_1.TYPE],
        ["AbortSignal", base_config_1.TYPE_VALUE],
        ["AbstractWorkerEventMap", base_config_1.TYPE],
        ["AbstractWorker", base_config_1.TYPE],
        ["AnimationFrameProvider", base_config_1.TYPE],
        ["AudioData", base_config_1.TYPE_VALUE],
        ["AudioDecoderEventMap", base_config_1.TYPE],
        ["AudioDecoder", base_config_1.TYPE_VALUE],
        ["AudioEncoderEventMap", base_config_1.TYPE],
        ["AudioEncoder", base_config_1.TYPE_VALUE],
        ["Blob", base_config_1.TYPE_VALUE],
        ["Body", base_config_1.TYPE],
        ["BroadcastChannelEventMap", base_config_1.TYPE],
        ["BroadcastChannel", base_config_1.TYPE_VALUE],
        ["ByteLengthQueuingStrategy", base_config_1.TYPE_VALUE],
        ["CSSImageValue", base_config_1.TYPE_VALUE],
        ["CSSKeywordValue", base_config_1.TYPE_VALUE],
        ["CSSMathClamp", base_config_1.TYPE_VALUE],
        ["CSSMathInvert", base_config_1.TYPE_VALUE],
        ["CSSMathMax", base_config_1.TYPE_VALUE],
        ["CSSMathMin", base_config_1.TYPE_VALUE],
        ["CSSMathNegate", base_config_1.TYPE_VALUE],
        ["CSSMathProduct", base_config_1.TYPE_VALUE],
        ["CSSMathSum", base_config_1.TYPE_VALUE],
        ["CSSMathValue", base_config_1.TYPE_VALUE],
        ["CSSMatrixComponent", base_config_1.TYPE_VALUE],
        ["CSSNumericArray", base_config_1.TYPE_VALUE],
        ["CSSNumericValue", base_config_1.TYPE_VALUE],
        ["CSSPerspective", base_config_1.TYPE_VALUE],
        ["CSSRotate", base_config_1.TYPE_VALUE],
        ["CSSScale", base_config_1.TYPE_VALUE],
        ["CSSSkew", base_config_1.TYPE_VALUE],
        ["CSSSkewX", base_config_1.TYPE_VALUE],
        ["CSSSkewY", base_config_1.TYPE_VALUE],
        ["CSSStyleValue", base_config_1.TYPE_VALUE],
        ["CSSTransformComponent", base_config_1.TYPE_VALUE],
        ["CSSTransformValue", base_config_1.TYPE_VALUE],
        ["CSSTranslate", base_config_1.TYPE_VALUE],
        ["CSSUnitValue", base_config_1.TYPE_VALUE],
        ["CSSUnparsedValue", base_config_1.TYPE_VALUE],
        ["CSSVariableReferenceValue", base_config_1.TYPE_VALUE],
        ["Cache", base_config_1.TYPE_VALUE],
        ["CacheStorage", base_config_1.TYPE_VALUE],
        ["CanvasCompositing", base_config_1.TYPE],
        ["CanvasDrawImage", base_config_1.TYPE],
        ["CanvasDrawPath", base_config_1.TYPE],
        ["CanvasFillStrokeStyles", base_config_1.TYPE],
        ["CanvasFilters", base_config_1.TYPE],
        ["CanvasGradient", base_config_1.TYPE_VALUE],
        ["CanvasImageData", base_config_1.TYPE],
        ["CanvasImageSmoothing", base_config_1.TYPE],
        ["CanvasPath", base_config_1.TYPE],
        ["CanvasPathDrawingStyles", base_config_1.TYPE],
        ["CanvasPattern", base_config_1.TYPE_VALUE],
        ["CanvasRect", base_config_1.TYPE],
        ["CanvasShadowStyles", base_config_1.TYPE],
        ["CanvasState", base_config_1.TYPE],
        ["CanvasText", base_config_1.TYPE],
        ["CanvasTextDrawingStyles", base_config_1.TYPE],
        ["CanvasTransform", base_config_1.TYPE],
        ["Client", base_config_1.TYPE_VALUE],
        ["Clients", base_config_1.TYPE_VALUE],
        ["CloseEvent", base_config_1.TYPE_VALUE],
        ["CompressionStream", base_config_1.TYPE_VALUE],
        ["CookieStore", base_config_1.TYPE_VALUE],
        ["CookieStoreManager", base_config_1.TYPE_VALUE],
        ["CountQueuingStrategy", base_config_1.TYPE_VALUE],
        ["Crypto", base_config_1.TYPE_VALUE],
        ["CryptoKey", base_config_1.TYPE_VALUE],
        ["CustomEvent", base_config_1.TYPE_VALUE],
        ["DOMException", base_config_1.TYPE_VALUE],
        ["DOMMatrix", base_config_1.TYPE_VALUE],
        ["DOMMatrixReadOnly", base_config_1.TYPE_VALUE],
        ["DOMPoint", base_config_1.TYPE_VALUE],
        ["DOMPointReadOnly", base_config_1.TYPE_VALUE],
        ["DOMQuad", base_config_1.TYPE_VALUE],
        ["DOMRect", base_config_1.TYPE_VALUE],
        ["DOMRectReadOnly", base_config_1.TYPE_VALUE],
        ["DOMStringList", base_config_1.TYPE_VALUE],
        ["DecompressionStream", base_config_1.TYPE_VALUE],
        ["DedicatedWorkerGlobalScopeEventMap", base_config_1.TYPE],
        ["DedicatedWorkerGlobalScope", base_config_1.TYPE_VALUE],
        ["EXT_blend_minmax", base_config_1.TYPE],
        ["EXT_color_buffer_float", base_config_1.TYPE],
        ["EXT_color_buffer_half_float", base_config_1.TYPE],
        ["EXT_float_blend", base_config_1.TYPE],
        ["EXT_frag_depth", base_config_1.TYPE],
        ["EXT_sRGB", base_config_1.TYPE],
        ["EXT_shader_texture_lod", base_config_1.TYPE],
        ["EXT_texture_compression_bptc", base_config_1.TYPE],
        ["EXT_texture_compression_rgtc", base_config_1.TYPE],
        ["EXT_texture_filter_anisotropic", base_config_1.TYPE],
        ["EXT_texture_norm16", base_config_1.TYPE],
        ["EncodedAudioChunk", base_config_1.TYPE_VALUE],
        ["EncodedVideoChunk", base_config_1.TYPE_VALUE],
        ["ErrorEvent", base_config_1.TYPE_VALUE],
        ["Event", base_config_1.TYPE_VALUE],
        ["EventListener", base_config_1.TYPE],
        ["EventListenerObject", base_config_1.TYPE],
        ["EventSourceEventMap", base_config_1.TYPE],
        ["EventSource", base_config_1.TYPE_VALUE],
        ["EventTarget", base_config_1.TYPE_VALUE],
        ["ExtendableCookieChangeEvent", base_config_1.TYPE_VALUE],
        ["ExtendableEvent", base_config_1.TYPE_VALUE],
        ["ExtendableMessageEvent", base_config_1.TYPE_VALUE],
        ["FetchEvent", base_config_1.TYPE_VALUE],
        ["File", base_config_1.TYPE_VALUE],
        ["FileList", base_config_1.TYPE_VALUE],
        ["FileReaderEventMap", base_config_1.TYPE],
        ["FileReader", base_config_1.TYPE_VALUE],
        ["FileReaderSync", base_config_1.TYPE_VALUE],
        ["FileSystemDirectoryHandle", base_config_1.TYPE_VALUE],
        ["FileSystemFileHandle", base_config_1.TYPE_VALUE],
        ["FileSystemHandle", base_config_1.TYPE_VALUE],
        ["FileSystemSyncAccessHandle", base_config_1.TYPE_VALUE],
        ["FileSystemWritableFileStream", base_config_1.TYPE_VALUE],
        ["FontFace", base_config_1.TYPE_VALUE],
        ["FontFaceSetEventMap", base_config_1.TYPE],
        ["FontFaceSet", base_config_1.TYPE_VALUE],
        ["FontFaceSetLoadEvent", base_config_1.TYPE_VALUE],
        ["FontFaceSource", base_config_1.TYPE],
        ["FormData", base_config_1.TYPE_VALUE],
        ["GPUError", base_config_1.TYPE],
        ["GenericTransformStream", base_config_1.TYPE],
        ["Headers", base_config_1.TYPE_VALUE],
        ["IDBCursor", base_config_1.TYPE_VALUE],
        ["IDBCursorWithValue", base_config_1.TYPE_VALUE],
        ["IDBDatabaseEventMap", base_config_1.TYPE],
        ["IDBDatabase", base_config_1.TYPE_VALUE],
        ["IDBFactory", base_config_1.TYPE_VALUE],
        ["IDBIndex", base_config_1.TYPE_VALUE],
        ["IDBKeyRange", base_config_1.TYPE_VALUE],
        ["IDBObjectStore", base_config_1.TYPE_VALUE],
        ["IDBOpenDBRequestEventMap", base_config_1.TYPE],
        ["IDBOpenDBRequest", base_config_1.TYPE_VALUE],
        ["IDBRequestEventMap", base_config_1.TYPE],
        ["IDBRequest", base_config_1.TYPE_VALUE],
        ["IDBTransactionEventMap", base_config_1.TYPE],
        ["IDBTransaction", base_config_1.TYPE_VALUE],
        ["IDBVersionChangeEvent", base_config_1.TYPE_VALUE],
        ["ImageBitmap", base_config_1.TYPE_VALUE],
        ["ImageBitmapRenderingContext", base_config_1.TYPE_VALUE],
        ["ImageData", base_config_1.TYPE_VALUE],
        ["ImageDecoder", base_config_1.TYPE_VALUE],
        ["ImageTrack", base_config_1.TYPE_VALUE],
        ["ImageTrackList", base_config_1.TYPE_VALUE],
        ["ImportMeta", base_config_1.TYPE],
        ["KHR_parallel_shader_compile", base_config_1.TYPE],
        ["Lock", base_config_1.TYPE_VALUE],
        ["LockManager", base_config_1.TYPE_VALUE],
        ["MediaCapabilities", base_config_1.TYPE_VALUE],
        ["MediaSourceHandle", base_config_1.TYPE_VALUE],
        ["MediaStreamTrackProcessor", base_config_1.TYPE_VALUE],
        ["MessageChannel", base_config_1.TYPE_VALUE],
        ["MessageEvent", base_config_1.TYPE_VALUE],
        ["MessageEventTargetEventMap", base_config_1.TYPE],
        ["MessageEventTarget", base_config_1.TYPE],
        ["MessagePortEventMap", base_config_1.TYPE],
        ["MessagePort", base_config_1.TYPE_VALUE],
        ["NavigationPreloadManager", base_config_1.TYPE_VALUE],
        ["NavigatorBadge", base_config_1.TYPE],
        ["NavigatorConcurrentHardware", base_config_1.TYPE],
        ["NavigatorID", base_config_1.TYPE],
        ["NavigatorLanguage", base_config_1.TYPE],
        ["NavigatorLocks", base_config_1.TYPE],
        ["NavigatorOnLine", base_config_1.TYPE],
        ["NavigatorStorage", base_config_1.TYPE],
        ["NotificationEventMap", base_config_1.TYPE],
        ["Notification", base_config_1.TYPE_VALUE],
        ["NotificationEvent", base_config_1.TYPE_VALUE],
        ["OES_draw_buffers_indexed", base_config_1.TYPE],
        ["OES_element_index_uint", base_config_1.TYPE],
        ["OES_fbo_render_mipmap", base_config_1.TYPE],
        ["OES_standard_derivatives", base_config_1.TYPE],
        ["OES_texture_float", base_config_1.TYPE],
        ["OES_texture_float_linear", base_config_1.TYPE],
        ["OES_texture_half_float", base_config_1.TYPE],
        ["OES_texture_half_float_linear", base_config_1.TYPE],
        ["OES_vertex_array_object", base_config_1.TYPE],
        ["OVR_multiview2", base_config_1.TYPE],
        ["OffscreenCanvasEventMap", base_config_1.TYPE],
        ["OffscreenCanvas", base_config_1.TYPE_VALUE],
        ["OffscreenCanvasRenderingContext2D", base_config_1.TYPE_VALUE],
        ["Path2D", base_config_1.TYPE_VALUE],
        ["PerformanceEventMap", base_config_1.TYPE],
        ["Performance", base_config_1.TYPE_VALUE],
        ["PerformanceEntry", base_config_1.TYPE_VALUE],
        ["PerformanceMark", base_config_1.TYPE_VALUE],
        ["PerformanceMeasure", base_config_1.TYPE_VALUE],
        ["PerformanceObserver", base_config_1.TYPE_VALUE],
        ["PerformanceObserverEntryList", base_config_1.TYPE_VALUE],
        ["PerformanceResourceTiming", base_config_1.TYPE_VALUE],
        ["PerformanceServerTiming", base_config_1.TYPE_VALUE],
        ["PermissionStatusEventMap", base_config_1.TYPE],
        ["PermissionStatus", base_config_1.TYPE_VALUE],
        ["Permissions", base_config_1.TYPE_VALUE],
        ["ProgressEvent", base_config_1.TYPE_VALUE],
        ["PromiseRejectionEvent", base_config_1.TYPE_VALUE],
        ["PushEvent", base_config_1.TYPE_VALUE],
        ["PushManager", base_config_1.TYPE_VALUE],
        ["PushMessageData", base_config_1.TYPE_VALUE],
        ["PushSubscription", base_config_1.TYPE_VALUE],
        ["PushSubscriptionChangeEvent", base_config_1.TYPE_VALUE],
        ["PushSubscriptionOptions", base_config_1.TYPE_VALUE],
        ["RTCDataChannelEventMap", base_config_1.TYPE],
        ["RTCDataChannel", base_config_1.TYPE_VALUE],
        ["RTCEncodedAudioFrame", base_config_1.TYPE_VALUE],
        ["RTCEncodedVideoFrame", base_config_1.TYPE_VALUE],
        ["RTCRtpScriptTransformer", base_config_1.TYPE_VALUE],
        ["RTCTransformEvent", base_config_1.TYPE_VALUE],
        ["ReadableByteStreamController", base_config_1.TYPE_VALUE],
        ["ReadableStream", base_config_1.TYPE_VALUE],
        ["ReadableStreamBYOBReader", base_config_1.TYPE_VALUE],
        ["ReadableStreamBYOBRequest", base_config_1.TYPE_VALUE],
        ["ReadableStreamDefaultController", base_config_1.TYPE_VALUE],
        ["ReadableStreamDefaultReader", base_config_1.TYPE_VALUE],
        ["ReadableStreamGenericReader", base_config_1.TYPE],
        ["Report", base_config_1.TYPE_VALUE],
        ["ReportBody", base_config_1.TYPE_VALUE],
        ["ReportingObserver", base_config_1.TYPE_VALUE],
        ["Request", base_config_1.TYPE_VALUE],
        ["Response", base_config_1.TYPE_VALUE],
        ["SecurityPolicyViolationEvent", base_config_1.TYPE_VALUE],
        ["ServiceWorkerEventMap", base_config_1.TYPE],
        ["ServiceWorker", base_config_1.TYPE_VALUE],
        ["ServiceWorkerContainerEventMap", base_config_1.TYPE],
        ["ServiceWorkerContainer", base_config_1.TYPE_VALUE],
        ["ServiceWorkerGlobalScopeEventMap", base_config_1.TYPE],
        ["ServiceWorkerGlobalScope", base_config_1.TYPE_VALUE],
        ["ServiceWorkerRegistrationEventMap", base_config_1.TYPE],
        ["ServiceWorkerRegistration", base_config_1.TYPE_VALUE],
        ["SharedWorkerGlobalScopeEventMap", base_config_1.TYPE],
        ["SharedWorkerGlobalScope", base_config_1.TYPE_VALUE],
        ["StorageManager", base_config_1.TYPE_VALUE],
        ["StylePropertyMapReadOnly", base_config_1.TYPE_VALUE],
        ["SubtleCrypto", base_config_1.TYPE_VALUE],
        ["TextDecoder", base_config_1.TYPE_VALUE],
        ["TextDecoderCommon", base_config_1.TYPE],
        ["TextDecoderStream", base_config_1.TYPE_VALUE],
        ["TextEncoder", base_config_1.TYPE_VALUE],
        ["TextEncoderCommon", base_config_1.TYPE],
        ["TextEncoderStream", base_config_1.TYPE_VALUE],
        ["TextMetrics", base_config_1.TYPE_VALUE],
        ["TransformStream", base_config_1.TYPE_VALUE],
        ["TransformStreamDefaultController", base_config_1.TYPE_VALUE],
        ["URL", base_config_1.TYPE_VALUE],
        ["URLSearchParams", base_config_1.TYPE_VALUE],
        ["VideoColorSpace", base_config_1.TYPE_VALUE],
        ["VideoDecoderEventMap", base_config_1.TYPE],
        ["VideoDecoder", base_config_1.TYPE_VALUE],
        ["VideoEncoderEventMap", base_config_1.TYPE],
        ["VideoEncoder", base_config_1.TYPE_VALUE],
        ["VideoFrame", base_config_1.TYPE_VALUE],
        ["WEBGL_color_buffer_float", base_config_1.TYPE],
        ["WEBGL_compressed_texture_astc", base_config_1.TYPE],
        ["WEBGL_compressed_texture_etc", base_config_1.TYPE],
        ["WEBGL_compressed_texture_etc1", base_config_1.TYPE],
        ["WEBGL_compressed_texture_pvrtc", base_config_1.TYPE],
        ["WEBGL_compressed_texture_s3tc", base_config_1.TYPE],
        ["WEBGL_compressed_texture_s3tc_srgb", base_config_1.TYPE],
        ["WEBGL_debug_renderer_info", base_config_1.TYPE],
        ["WEBGL_debug_shaders", base_config_1.TYPE],
        ["WEBGL_depth_texture", base_config_1.TYPE],
        ["WEBGL_draw_buffers", base_config_1.TYPE],
        ["WEBGL_lose_context", base_config_1.TYPE],
        ["WEBGL_multi_draw", base_config_1.TYPE],
        ["WebGL2RenderingContext", base_config_1.TYPE_VALUE],
        ["WebGL2RenderingContextBase", base_config_1.TYPE],
        ["WebGL2RenderingContextOverloads", base_config_1.TYPE],
        ["WebGLActiveInfo", base_config_1.TYPE_VALUE],
        ["WebGLBuffer", base_config_1.TYPE_VALUE],
        ["WebGLContextEvent", base_config_1.TYPE_VALUE],
        ["WebGLFramebuffer", base_config_1.TYPE_VALUE],
        ["WebGLProgram", base_config_1.TYPE_VALUE],
        ["WebGLQuery", base_config_1.TYPE_VALUE],
        ["WebGLRenderbuffer", base_config_1.TYPE_VALUE],
        ["WebGLRenderingContext", base_config_1.TYPE_VALUE],
        ["WebGLRenderingContextBase", base_config_1.TYPE],
        ["WebGLRenderingContextOverloads", base_config_1.TYPE],
        ["WebGLSampler", base_config_1.TYPE_VALUE],
        ["WebGLShader", base_config_1.TYPE_VALUE],
        ["WebGLShaderPrecisionFormat", base_config_1.TYPE_VALUE],
        ["WebGLSync", base_config_1.TYPE_VALUE],
        ["WebGLTexture", base_config_1.TYPE_VALUE],
        ["WebGLTransformFeedback", base_config_1.TYPE_VALUE],
        ["WebGLUniformLocation", base_config_1.TYPE_VALUE],
        ["WebGLVertexArrayObject", base_config_1.TYPE_VALUE],
        ["WebGLVertexArrayObjectOES", base_config_1.TYPE],
        ["WebSocketEventMap", base_config_1.TYPE],
        ["WebSocket", base_config_1.TYPE_VALUE],
        ["WebTransport", base_config_1.TYPE_VALUE],
        ["WebTransportBidirectionalStream", base_config_1.TYPE_VALUE],
        ["WebTransportDatagramDuplexStream", base_config_1.TYPE_VALUE],
        ["WebTransportError", base_config_1.TYPE_VALUE],
        ["WindowClient", base_config_1.TYPE_VALUE],
        ["WindowOrWorkerGlobalScope", base_config_1.TYPE],
        ["WorkerEventMap", base_config_1.TYPE],
        ["Worker", base_config_1.TYPE_VALUE],
        ["WorkerGlobalScopeEventMap", base_config_1.TYPE],
        ["WorkerGlobalScope", base_config_1.TYPE_VALUE],
        ["WorkerLocation", base_config_1.TYPE_VALUE],
        ["WorkerNavigator", base_config_1.TYPE_VALUE],
        ["WritableStream", base_config_1.TYPE_VALUE],
        ["WritableStreamDefaultController", base_config_1.TYPE_VALUE],
        ["WritableStreamDefaultWriter", base_config_1.TYPE_VALUE],
        ["XMLHttpRequestEventMap", base_config_1.TYPE],
        ["XMLHttpRequest", base_config_1.TYPE_VALUE],
        ["XMLHttpRequestEventTargetEventMap", base_config_1.TYPE],
        ["XMLHttpRequestEventTarget", base_config_1.TYPE_VALUE],
        ["XMLHttpRequestUpload", base_config_1.TYPE_VALUE],
        ["WebAssembly", base_config_1.TYPE_VALUE],
        ["Console", base_config_1.TYPE],
        ["AudioDataOutputCallback", base_config_1.TYPE],
        ["EncodedAudioChunkOutputCallback", base_config_1.TYPE],
        ["EncodedVideoChunkOutputCallback", base_config_1.TYPE],
        ["FrameRequestCallback", base_config_1.TYPE],
        ["LockGrantedCallback", base_config_1.TYPE],
        ["OnErrorEventHandlerNonNull", base_config_1.TYPE],
        ["PerformanceObserverCallback", base_config_1.TYPE],
        ["QueuingStrategySize", base_config_1.TYPE],
        ["ReportingObserverCallback", base_config_1.TYPE],
        ["TransformerFlushCallback", base_config_1.TYPE],
        ["TransformerStartCallback", base_config_1.TYPE],
        ["TransformerTransformCallback", base_config_1.TYPE],
        ["UnderlyingSinkAbortCallback", base_config_1.TYPE],
        ["UnderlyingSinkCloseCallback", base_config_1.TYPE],
        ["UnderlyingSinkStartCallback", base_config_1.TYPE],
        ["UnderlyingSinkWriteCallback", base_config_1.TYPE],
        ["UnderlyingSourceCancelCallback", base_config_1.TYPE],
        ["UnderlyingSourcePullCallback", base_config_1.TYPE],
        ["UnderlyingSourceStartCallback", base_config_1.TYPE],
        ["VideoFrameOutputCallback", base_config_1.TYPE],
        ["VoidFunction", base_config_1.TYPE],
        ["WebCodecsErrorCallback", base_config_1.TYPE],
        ["AlgorithmIdentifier", base_config_1.TYPE],
        ["AllowSharedBufferSource", base_config_1.TYPE],
        ["BigInteger", base_config_1.TYPE],
        ["BlobPart", base_config_1.TYPE],
        ["BodyInit", base_config_1.TYPE],
        ["BufferSource", base_config_1.TYPE],
        ["CSSKeywordish", base_config_1.TYPE],
        ["CSSNumberish", base_config_1.TYPE],
        ["CSSPerspectiveValue", base_config_1.TYPE],
        ["CSSUnparsedSegment", base_config_1.TYPE],
        ["CanvasImageSource", base_config_1.TYPE],
        ["CookieList", base_config_1.TYPE],
        ["DOMHighResTimeStamp", base_config_1.TYPE],
        ["EpochTimeStamp", base_config_1.TYPE],
        ["EventListenerOrEventListenerObject", base_config_1.TYPE],
        ["FileSystemWriteChunkType", base_config_1.TYPE],
        ["Float32List", base_config_1.TYPE],
        ["FormDataEntryValue", base_config_1.TYPE],
        ["GLbitfield", base_config_1.TYPE],
        ["GLboolean", base_config_1.TYPE],
        ["GLclampf", base_config_1.TYPE],
        ["GLenum", base_config_1.TYPE],
        ["GLfloat", base_config_1.TYPE],
        ["GLint", base_config_1.TYPE],
        ["GLint64", base_config_1.TYPE],
        ["GLintptr", base_config_1.TYPE],
        ["GLsizei", base_config_1.TYPE],
        ["GLsizeiptr", base_config_1.TYPE],
        ["GLuint", base_config_1.TYPE],
        ["GLuint64", base_config_1.TYPE],
        ["HashAlgorithmIdentifier", base_config_1.TYPE],
        ["HeadersInit", base_config_1.TYPE],
        ["IDBValidKey", base_config_1.TYPE],
        ["ImageBitmapSource", base_config_1.TYPE],
        ["ImageBufferSource", base_config_1.TYPE],
        ["ImageDataArray", base_config_1.TYPE],
        ["Int32List", base_config_1.TYPE],
        ["MessageEventSource", base_config_1.TYPE],
        ["NamedCurve", base_config_1.TYPE],
        ["OffscreenRenderingContext", base_config_1.TYPE],
        ["OnErrorEventHandler", base_config_1.TYPE],
        ["PerformanceEntryList", base_config_1.TYPE],
        ["PushMessageDataInit", base_config_1.TYPE],
        ["ReadableStreamController", base_config_1.TYPE],
        ["ReadableStreamReadResult", base_config_1.TYPE],
        ["ReadableStreamReader", base_config_1.TYPE],
        ["ReportList", base_config_1.TYPE],
        ["RequestInfo", base_config_1.TYPE],
        ["TexImageSource", base_config_1.TYPE],
        ["TimerHandler", base_config_1.TYPE],
        ["Transferable", base_config_1.TYPE],
        ["Uint32List", base_config_1.TYPE],
        ["XMLHttpRequestBodyInit", base_config_1.TYPE],
        ["AlphaOption", base_config_1.TYPE],
        ["AudioSampleFormat", base_config_1.TYPE],
        ["AvcBitstreamFormat", base_config_1.TYPE],
        ["BinaryType", base_config_1.TYPE],
        ["BitrateMode", base_config_1.TYPE],
        ["CSSMathOperator", base_config_1.TYPE],
        ["CSSNumericBaseType", base_config_1.TYPE],
        ["CanvasDirection", base_config_1.TYPE],
        ["CanvasFillRule", base_config_1.TYPE],
        ["CanvasFontKerning", base_config_1.TYPE],
        ["CanvasFontStretch", base_config_1.TYPE],
        ["CanvasFontVariantCaps", base_config_1.TYPE],
        ["CanvasLineCap", base_config_1.TYPE],
        ["CanvasLineJoin", base_config_1.TYPE],
        ["CanvasTextAlign", base_config_1.TYPE],
        ["CanvasTextBaseline", base_config_1.TYPE],
        ["CanvasTextRendering", base_config_1.TYPE],
        ["ClientTypes", base_config_1.TYPE],
        ["CodecState", base_config_1.TYPE],
        ["ColorGamut", base_config_1.TYPE],
        ["ColorSpaceConversion", base_config_1.TYPE],
        ["CompressionFormat", base_config_1.TYPE],
        ["CookieSameSite", base_config_1.TYPE],
        ["DocumentVisibilityState", base_config_1.TYPE],
        ["EncodedAudioChunkType", base_config_1.TYPE],
        ["EncodedVideoChunkType", base_config_1.TYPE],
        ["EndingType", base_config_1.TYPE],
        ["FileSystemHandleKind", base_config_1.TYPE],
        ["FontDisplay", base_config_1.TYPE],
        ["FontFaceLoadStatus", base_config_1.TYPE],
        ["FontFaceSetLoadStatus", base_config_1.TYPE],
        ["FrameType", base_config_1.TYPE],
        ["GlobalCompositeOperation", base_config_1.TYPE],
        ["HardwareAcceleration", base_config_1.TYPE],
        ["HdrMetadataType", base_config_1.TYPE],
        ["IDBCursorDirection", base_config_1.TYPE],
        ["IDBRequestReadyState", base_config_1.TYPE],
        ["IDBTransactionDurability", base_config_1.TYPE],
        ["IDBTransactionMode", base_config_1.TYPE],
        ["ImageOrientation", base_config_1.TYPE],
        ["ImageSmoothingQuality", base_config_1.TYPE],
        ["KeyFormat", base_config_1.TYPE],
        ["KeyType", base_config_1.TYPE],
        ["KeyUsage", base_config_1.TYPE],
        ["LatencyMode", base_config_1.TYPE],
        ["LockMode", base_config_1.TYPE],
        ["MediaDecodingType", base_config_1.TYPE],
        ["MediaEncodingType", base_config_1.TYPE],
        ["MediaKeysRequirement", base_config_1.TYPE],
        ["NotificationDirection", base_config_1.TYPE],
        ["NotificationPermission", base_config_1.TYPE],
        ["OffscreenRenderingContextId", base_config_1.TYPE],
        ["OpusBitstreamFormat", base_config_1.TYPE],
        ["PermissionName", base_config_1.TYPE],
        ["PermissionState", base_config_1.TYPE],
        ["PredefinedColorSpace", base_config_1.TYPE],
        ["PremultiplyAlpha", base_config_1.TYPE],
        ["PushEncryptionKeyName", base_config_1.TYPE],
        ["RTCDataChannelState", base_config_1.TYPE],
        ["RTCEncodedVideoFrameType", base_config_1.TYPE],
        ["ReadableStreamReaderMode", base_config_1.TYPE],
        ["ReadableStreamType", base_config_1.TYPE],
        ["ReferrerPolicy", base_config_1.TYPE],
        ["RequestCache", base_config_1.TYPE],
        ["RequestCredentials", base_config_1.TYPE],
        ["RequestDestination", base_config_1.TYPE],
        ["RequestMode", base_config_1.TYPE],
        ["RequestPriority", base_config_1.TYPE],
        ["RequestRedirect", base_config_1.TYPE],
        ["ResizeQuality", base_config_1.TYPE],
        ["ResponseType", base_config_1.TYPE],
        ["SecurityPolicyViolationEventDisposition", base_config_1.TYPE],
        ["ServiceWorkerState", base_config_1.TYPE],
        ["ServiceWorkerUpdateViaCache", base_config_1.TYPE],
        ["TransferFunction", base_config_1.TYPE],
        ["VideoColorPrimaries", base_config_1.TYPE],
        ["VideoEncoderBitrateMode", base_config_1.TYPE],
        ["VideoMatrixCoefficients", base_config_1.TYPE],
        ["VideoPixelFormat", base_config_1.TYPE],
        ["VideoTransferCharacteristics", base_config_1.TYPE],
        ["WebGLPowerPreference", base_config_1.TYPE],
        ["WebTransportCongestionControl", base_config_1.TYPE],
        ["WebTransportErrorSource", base_config_1.TYPE],
        ["WorkerType", base_config_1.TYPE],
        ["WriteCommandType", base_config_1.TYPE],
        ["XMLHttpRequestResponseType", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.asynciterable.js
var require_webworker_asynciterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.asynciterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.webworker_asynciterable = void 0;
    var base_config_1 = require_base_config();
    exports2.webworker_asynciterable = {
      libs: [],
      variables: [
        ["FileSystemDirectoryHandleAsyncIterator", base_config_1.TYPE],
        ["FileSystemDirectoryHandle", base_config_1.TYPE],
        ["ReadableStreamAsyncIterator", base_config_1.TYPE],
        ["ReadableStream", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.iterable.js
var require_webworker_iterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.iterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.webworker_iterable = void 0;
    var base_config_1 = require_base_config();
    exports2.webworker_iterable = {
      libs: [],
      variables: [
        ["CSSNumericArray", base_config_1.TYPE],
        ["CSSTransformValue", base_config_1.TYPE],
        ["CSSUnparsedValue", base_config_1.TYPE],
        ["Cache", base_config_1.TYPE],
        ["CanvasPath", base_config_1.TYPE],
        ["CanvasPathDrawingStyles", base_config_1.TYPE],
        ["CookieStoreManager", base_config_1.TYPE],
        ["DOMStringList", base_config_1.TYPE],
        ["FileList", base_config_1.TYPE],
        ["FontFaceSet", base_config_1.TYPE],
        ["FormDataIterator", base_config_1.TYPE],
        ["FormData", base_config_1.TYPE],
        ["HeadersIterator", base_config_1.TYPE],
        ["Headers", base_config_1.TYPE],
        ["IDBDatabase", base_config_1.TYPE],
        ["IDBObjectStore", base_config_1.TYPE],
        ["ImageTrackList", base_config_1.TYPE],
        ["MessageEvent", base_config_1.TYPE],
        ["StylePropertyMapReadOnlyIterator", base_config_1.TYPE],
        ["StylePropertyMapReadOnly", base_config_1.TYPE],
        ["SubtleCrypto", base_config_1.TYPE],
        ["URLSearchParamsIterator", base_config_1.TYPE],
        ["URLSearchParams", base_config_1.TYPE],
        ["WEBGL_draw_buffers", base_config_1.TYPE],
        ["WEBGL_multi_draw", base_config_1.TYPE],
        ["WebGL2RenderingContextBase", base_config_1.TYPE],
        ["WebGL2RenderingContextOverloads", base_config_1.TYPE],
        ["WebGLRenderingContextBase", base_config_1.TYPE],
        ["WebGLRenderingContextOverloads", base_config_1.TYPE]
      ]
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.lib = void 0;
    var decorators_1 = require_decorators();
    var decorators_legacy_1 = require_decorators_legacy();
    var dom_1 = require_dom();
    var dom_asynciterable_1 = require_dom_asynciterable();
    var dom_iterable_1 = require_dom_iterable();
    var es5_1 = require_es5();
    var es6_1 = require_es6();
    var es7_1 = require_es7();
    var es2015_1 = require_es2015();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    var es2016_1 = require_es2016();
    var es2016_array_include_1 = require_es2016_array_include();
    var es2016_full_1 = require_es2016_full();
    var es2016_intl_1 = require_es2016_intl();
    var es2017_1 = require_es2017();
    var es2017_arraybuffer_1 = require_es2017_arraybuffer();
    var es2017_date_1 = require_es2017_date();
    var es2017_full_1 = require_es2017_full();
    var es2017_intl_1 = require_es2017_intl();
    var es2017_object_1 = require_es2017_object();
    var es2017_sharedmemory_1 = require_es2017_sharedmemory();
    var es2017_string_1 = require_es2017_string();
    var es2017_typedarrays_1 = require_es2017_typedarrays();
    var es2018_1 = require_es2018();
    var es2018_asyncgenerator_1 = require_es2018_asyncgenerator();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    var es2018_full_1 = require_es2018_full();
    var es2018_intl_1 = require_es2018_intl();
    var es2018_promise_1 = require_es2018_promise();
    var es2018_regexp_1 = require_es2018_regexp();
    var es2019_1 = require_es2019();
    var es2019_array_1 = require_es2019_array();
    var es2019_full_1 = require_es2019_full();
    var es2019_intl_1 = require_es2019_intl();
    var es2019_object_1 = require_es2019_object();
    var es2019_string_1 = require_es2019_string();
    var es2019_symbol_1 = require_es2019_symbol();
    var es2020_1 = require_es2020();
    var es2020_bigint_1 = require_es2020_bigint();
    var es2020_date_1 = require_es2020_date();
    var es2020_full_1 = require_es2020_full();
    var es2020_intl_1 = require_es2020_intl();
    var es2020_number_1 = require_es2020_number();
    var es2020_promise_1 = require_es2020_promise();
    var es2020_sharedmemory_1 = require_es2020_sharedmemory();
    var es2020_string_1 = require_es2020_string();
    var es2020_symbol_wellknown_1 = require_es2020_symbol_wellknown();
    var es2021_1 = require_es2021();
    var es2021_full_1 = require_es2021_full();
    var es2021_intl_1 = require_es2021_intl();
    var es2021_promise_1 = require_es2021_promise();
    var es2021_string_1 = require_es2021_string();
    var es2021_weakref_1 = require_es2021_weakref();
    var es2022_1 = require_es2022();
    var es2022_array_1 = require_es2022_array();
    var es2022_error_1 = require_es2022_error();
    var es2022_full_1 = require_es2022_full();
    var es2022_intl_1 = require_es2022_intl();
    var es2022_object_1 = require_es2022_object();
    var es2022_regexp_1 = require_es2022_regexp();
    var es2022_string_1 = require_es2022_string();
    var es2023_1 = require_es2023();
    var es2023_array_1 = require_es2023_array();
    var es2023_collection_1 = require_es2023_collection();
    var es2023_full_1 = require_es2023_full();
    var es2023_intl_1 = require_es2023_intl();
    var es2024_1 = require_es2024();
    var es2024_arraybuffer_1 = require_es2024_arraybuffer();
    var es2024_collection_1 = require_es2024_collection();
    var es2024_full_1 = require_es2024_full();
    var es2024_object_1 = require_es2024_object();
    var es2024_promise_1 = require_es2024_promise();
    var es2024_regexp_1 = require_es2024_regexp();
    var es2024_sharedmemory_1 = require_es2024_sharedmemory();
    var es2024_string_1 = require_es2024_string();
    var esnext_1 = require_esnext();
    var esnext_array_1 = require_esnext_array();
    var esnext_asynciterable_1 = require_esnext_asynciterable();
    var esnext_bigint_1 = require_esnext_bigint();
    var esnext_collection_1 = require_esnext_collection();
    var esnext_decorators_1 = require_esnext_decorators();
    var esnext_disposable_1 = require_esnext_disposable();
    var esnext_error_1 = require_esnext_error();
    var esnext_float16_1 = require_esnext_float16();
    var esnext_full_1 = require_esnext_full();
    var esnext_intl_1 = require_esnext_intl();
    var esnext_iterator_1 = require_esnext_iterator();
    var esnext_object_1 = require_esnext_object();
    var esnext_promise_1 = require_esnext_promise();
    var esnext_regexp_1 = require_esnext_regexp();
    var esnext_sharedmemory_1 = require_esnext_sharedmemory();
    var esnext_string_1 = require_esnext_string();
    var esnext_symbol_1 = require_esnext_symbol();
    var esnext_weakref_1 = require_esnext_weakref();
    var lib_1 = require_lib2();
    var scripthost_1 = require_scripthost();
    var webworker_1 = require_webworker();
    var webworker_asynciterable_1 = require_webworker_asynciterable();
    var webworker_importscripts_1 = require_webworker_importscripts();
    var webworker_iterable_1 = require_webworker_iterable();
    exports2.lib = /* @__PURE__ */ new Map([
      ["es5", es5_1.es5],
      ["es6", es6_1.es6],
      ["es2015", es2015_1.es2015],
      ["es7", es7_1.es7],
      ["es2016", es2016_1.es2016],
      ["es2017", es2017_1.es2017],
      ["es2018", es2018_1.es2018],
      ["es2019", es2019_1.es2019],
      ["es2020", es2020_1.es2020],
      ["es2021", es2021_1.es2021],
      ["es2022", es2022_1.es2022],
      ["es2023", es2023_1.es2023],
      ["es2024", es2024_1.es2024],
      ["esnext", esnext_1.esnext],
      ["dom", dom_1.dom],
      ["dom.iterable", dom_iterable_1.dom_iterable],
      ["dom.asynciterable", dom_asynciterable_1.dom_asynciterable],
      ["webworker", webworker_1.webworker],
      ["webworker.importscripts", webworker_importscripts_1.webworker_importscripts],
      ["webworker.iterable", webworker_iterable_1.webworker_iterable],
      ["webworker.asynciterable", webworker_asynciterable_1.webworker_asynciterable],
      ["scripthost", scripthost_1.scripthost],
      ["es2015.core", es2015_core_1.es2015_core],
      ["es2015.collection", es2015_collection_1.es2015_collection],
      ["es2015.generator", es2015_generator_1.es2015_generator],
      ["es2015.iterable", es2015_iterable_1.es2015_iterable],
      ["es2015.promise", es2015_promise_1.es2015_promise],
      ["es2015.proxy", es2015_proxy_1.es2015_proxy],
      ["es2015.reflect", es2015_reflect_1.es2015_reflect],
      ["es2015.symbol", es2015_symbol_1.es2015_symbol],
      ["es2015.symbol.wellknown", es2015_symbol_wellknown_1.es2015_symbol_wellknown],
      ["es2016.array.include", es2016_array_include_1.es2016_array_include],
      ["es2016.intl", es2016_intl_1.es2016_intl],
      ["es2017.arraybuffer", es2017_arraybuffer_1.es2017_arraybuffer],
      ["es2017.date", es2017_date_1.es2017_date],
      ["es2017.object", es2017_object_1.es2017_object],
      ["es2017.sharedmemory", es2017_sharedmemory_1.es2017_sharedmemory],
      ["es2017.string", es2017_string_1.es2017_string],
      ["es2017.intl", es2017_intl_1.es2017_intl],
      ["es2017.typedarrays", es2017_typedarrays_1.es2017_typedarrays],
      ["es2018.asyncgenerator", es2018_asyncgenerator_1.es2018_asyncgenerator],
      ["es2018.asynciterable", es2018_asynciterable_1.es2018_asynciterable],
      ["es2018.intl", es2018_intl_1.es2018_intl],
      ["es2018.promise", es2018_promise_1.es2018_promise],
      ["es2018.regexp", es2018_regexp_1.es2018_regexp],
      ["es2019.array", es2019_array_1.es2019_array],
      ["es2019.object", es2019_object_1.es2019_object],
      ["es2019.string", es2019_string_1.es2019_string],
      ["es2019.symbol", es2019_symbol_1.es2019_symbol],
      ["es2019.intl", es2019_intl_1.es2019_intl],
      ["es2020.bigint", es2020_bigint_1.es2020_bigint],
      ["es2020.date", es2020_date_1.es2020_date],
      ["es2020.promise", es2020_promise_1.es2020_promise],
      ["es2020.sharedmemory", es2020_sharedmemory_1.es2020_sharedmemory],
      ["es2020.string", es2020_string_1.es2020_string],
      ["es2020.symbol.wellknown", es2020_symbol_wellknown_1.es2020_symbol_wellknown],
      ["es2020.intl", es2020_intl_1.es2020_intl],
      ["es2020.number", es2020_number_1.es2020_number],
      ["es2021.promise", es2021_promise_1.es2021_promise],
      ["es2021.string", es2021_string_1.es2021_string],
      ["es2021.weakref", es2021_weakref_1.es2021_weakref],
      ["es2021.intl", es2021_intl_1.es2021_intl],
      ["es2022.array", es2022_array_1.es2022_array],
      ["es2022.error", es2022_error_1.es2022_error],
      ["es2022.intl", es2022_intl_1.es2022_intl],
      ["es2022.object", es2022_object_1.es2022_object],
      ["es2022.string", es2022_string_1.es2022_string],
      ["es2022.regexp", es2022_regexp_1.es2022_regexp],
      ["es2023.array", es2023_array_1.es2023_array],
      ["es2023.collection", es2023_collection_1.es2023_collection],
      ["es2023.intl", es2023_intl_1.es2023_intl],
      ["es2024.arraybuffer", es2024_arraybuffer_1.es2024_arraybuffer],
      ["es2024.collection", es2024_collection_1.es2024_collection],
      ["es2024.object", es2024_object_1.es2024_object],
      ["es2024.promise", es2024_promise_1.es2024_promise],
      ["es2024.regexp", es2024_regexp_1.es2024_regexp],
      ["es2024.sharedmemory", es2024_sharedmemory_1.es2024_sharedmemory],
      ["es2024.string", es2024_string_1.es2024_string],
      ["esnext.array", esnext_array_1.esnext_array],
      ["esnext.collection", esnext_collection_1.esnext_collection],
      ["esnext.symbol", esnext_symbol_1.esnext_symbol],
      ["esnext.asynciterable", esnext_asynciterable_1.esnext_asynciterable],
      ["esnext.intl", esnext_intl_1.esnext_intl],
      ["esnext.disposable", esnext_disposable_1.esnext_disposable],
      ["esnext.bigint", esnext_bigint_1.esnext_bigint],
      ["esnext.string", esnext_string_1.esnext_string],
      ["esnext.promise", esnext_promise_1.esnext_promise],
      ["esnext.weakref", esnext_weakref_1.esnext_weakref],
      ["esnext.decorators", esnext_decorators_1.esnext_decorators],
      ["esnext.object", esnext_object_1.esnext_object],
      ["esnext.regexp", esnext_regexp_1.esnext_regexp],
      ["esnext.iterator", esnext_iterator_1.esnext_iterator],
      ["esnext.float16", esnext_float16_1.esnext_float16],
      ["esnext.error", esnext_error_1.esnext_error],
      ["esnext.sharedmemory", esnext_sharedmemory_1.esnext_sharedmemory],
      ["decorators", decorators_1.decorators],
      ["decorators.legacy", decorators_legacy_1.decorators_legacy],
      ["es2016.full", es2016_full_1.es2016_full],
      ["es2017.full", es2017_full_1.es2017_full],
      ["es2018.full", es2018_full_1.es2018_full],
      ["es2019.full", es2019_full_1.es2019_full],
      ["es2020.full", es2020_full_1.es2020_full],
      ["es2021.full", es2021_full_1.es2021_full],
      ["es2022.full", es2022_full_1.es2022_full],
      ["es2023.full", es2023_full_1.es2023_full],
      ["es2024.full", es2024_full_1.es2024_full],
      ["esnext.full", esnext_full_1.esnext_full],
      ["lib", lib_1.lib]
    ]);
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/Reference.js
var require_Reference = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/Reference.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Reference = exports2.ReferenceTypeFlag = exports2.ReferenceFlag = void 0;
    var ID_1 = require_ID();
    var ReferenceFlag;
    (function(ReferenceFlag2) {
      ReferenceFlag2[ReferenceFlag2["Read"] = 1] = "Read";
      ReferenceFlag2[ReferenceFlag2["Write"] = 2] = "Write";
      ReferenceFlag2[ReferenceFlag2["ReadWrite"] = 3] = "ReadWrite";
    })(ReferenceFlag || (exports2.ReferenceFlag = ReferenceFlag = {}));
    var generator = (0, ID_1.createIdGenerator)();
    var ReferenceTypeFlag;
    (function(ReferenceTypeFlag2) {
      ReferenceTypeFlag2[ReferenceTypeFlag2["Value"] = 1] = "Value";
      ReferenceTypeFlag2[ReferenceTypeFlag2["Type"] = 2] = "Type";
    })(ReferenceTypeFlag || (exports2.ReferenceTypeFlag = ReferenceTypeFlag = {}));
    var _flag, _referenceType;
    var Reference = class {
      constructor(identifier, scope, flag, writeExpr, maybeImplicitGlobal, init, referenceType = ReferenceTypeFlag.Value) {
        /**
         * A unique ID for this instance - primarily used to help debugging and testing
         */
        __publicField(this, "$id", generator());
        /**
         * The read-write mode of the reference.
         */
        __privateAdd(this, _flag);
        /**
         * Reference to the enclosing Scope.
         * @public
         */
        __publicField(this, "from");
        /**
         * Identifier syntax node.
         * @public
         */
        __publicField(this, "identifier");
        /**
         * `true` if this writing reference is a variable initializer or a default value.
         * @public
         */
        __publicField(this, "init");
        __publicField(this, "maybeImplicitGlobal");
        /**
         * The {@link Variable} object that this reference refers to. If such variable was not defined, this is `null`.
         * @public
         */
        __publicField(this, "resolved");
        /**
         * If reference is writeable, this is the node being written to it.
         * @public
         */
        __publicField(this, "writeExpr");
        /**
         * In some cases, a reference may be a type, value or both a type and value reference.
         */
        __privateAdd(this, _referenceType);
        this.identifier = identifier;
        this.from = scope;
        this.resolved = null;
        __privateSet(this, _flag, flag);
        if (this.isWrite()) {
          this.writeExpr = writeExpr;
          this.init = init;
        }
        this.maybeImplicitGlobal = maybeImplicitGlobal;
        __privateSet(this, _referenceType, referenceType);
      }
      /**
       * True if this reference can reference types
       */
      get isTypeReference() {
        return (__privateGet(this, _referenceType) & ReferenceTypeFlag.Type) !== 0;
      }
      /**
       * True if this reference can reference values
       */
      get isValueReference() {
        return (__privateGet(this, _referenceType) & ReferenceTypeFlag.Value) !== 0;
      }
      /**
       * Whether the reference is writeable.
       * @public
       */
      isWrite() {
        return !!(__privateGet(this, _flag) & ReferenceFlag.Write);
      }
      /**
       * Whether the reference is readable.
       * @public
       */
      isRead() {
        return !!(__privateGet(this, _flag) & ReferenceFlag.Read);
      }
      /**
       * Whether the reference is read-only.
       * @public
       */
      isReadOnly() {
        return __privateGet(this, _flag) === ReferenceFlag.Read;
      }
      /**
       * Whether the reference is write-only.
       * @public
       */
      isWriteOnly() {
        return __privateGet(this, _flag) === ReferenceFlag.Write;
      }
      /**
       * Whether the reference is read-write.
       * @public
       */
      isReadWrite() {
        return __privateGet(this, _flag) === ReferenceFlag.ReadWrite;
      }
    };
    _flag = new WeakMap();
    _referenceType = new WeakMap();
    exports2.Reference = Reference;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/VariableBase.js
var require_VariableBase = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/VariableBase.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VariableBase = void 0;
    var ID_1 = require_ID();
    var generator = (0, ID_1.createIdGenerator)();
    var VariableBase = class {
      constructor(name, scope) {
        /**
         * A unique ID for this instance - primarily used to help debugging and testing
         */
        __publicField(this, "$id", generator());
        /**
         * The array of the definitions of this variable.
         * @public
         */
        __publicField(this, "defs", []);
        /**
         * True if the variable is considered used for the purposes of `no-unused-vars`, false otherwise.
         * @public
         */
        __publicField(this, "eslintUsed", false);
        /**
         * The array of `Identifier` nodes which define this variable.
         * If this variable is redeclared, this array includes two or more nodes.
         * @public
         */
        __publicField(this, "identifiers", []);
        /**
         * The variable name, as given in the source code.
         * @public
         */
        __publicField(this, "name");
        /**
         * List of {@link Reference} of this variable (excluding parameter entries)  in its defining scope and all nested scopes.
         * For defining occurrences only see {@link Variable#defs}.
         * @public
         */
        __publicField(this, "references", []);
        /**
         * Reference to the enclosing Scope.
         */
        __publicField(this, "scope");
        this.name = name;
        this.scope = scope;
      }
    };
    exports2.VariableBase = VariableBase;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/ESLintScopeVariable.js
var require_ESLintScopeVariable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/ESLintScopeVariable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ESLintScopeVariable = void 0;
    var VariableBase_1 = require_VariableBase();
    var ESLintScopeVariable = class extends VariableBase_1.VariableBase {
      constructor() {
        super(...arguments);
        /**
         * Written to by ESLint.
         * If this key exists, this variable is a global variable added by ESLint.
         * If this is `true`, this variable can be assigned arbitrary values.
         * If this is `false`, this variable is readonly.
         */
        __publicField(this, "writeable");
        // note that this isn't a typo - ESlint uses this spelling here
        /**
         * Written to by ESLint.
         * This property is undefined if there are no globals comment directives.
         * The array of globals comment directives which defined this global variable in the source code file.
         */
        __publicField(this, "eslintExplicitGlobal");
        /**
         * Written to by ESLint.
         * The configured value in config files. This can be different from `variable.writeable` if there are globals comment directives.
         */
        __publicField(this, "eslintImplicitGlobalSetting");
        /**
         * Written to by ESLint.
         * If this key exists, it is a global variable added by ESLint.
         * If `true`, this global variable was defined by a globals comment directive in the source code file.
         */
        __publicField(this, "eslintExplicitGlobalComments");
      }
    };
    exports2.ESLintScopeVariable = ESLintScopeVariable;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/ImplicitLibVariable.js
var require_ImplicitLibVariable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/ImplicitLibVariable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplicitLibVariable = void 0;
    var ESLintScopeVariable_1 = require_ESLintScopeVariable();
    var ImplicitLibVariable = class extends ESLintScopeVariable_1.ESLintScopeVariable {
      constructor(scope, name, { eslintImplicitGlobalSetting, isTypeVariable, isValueVariable, writeable }) {
        super(name, scope);
        /**
         * `true` if the variable is valid in a type context, false otherwise
         */
        __publicField(this, "isTypeVariable");
        /**
         * `true` if the variable is valid in a value context, false otherwise
         */
        __publicField(this, "isValueVariable");
        this.isTypeVariable = isTypeVariable ?? false;
        this.isValueVariable = isValueVariable ?? false;
        this.writeable = writeable ?? false;
        this.eslintImplicitGlobalSetting = eslintImplicitGlobalSetting ?? "readonly";
      }
    };
    exports2.ImplicitLibVariable = ImplicitLibVariable;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/Variable.js
var require_Variable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/Variable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Variable = void 0;
    var VariableBase_1 = require_VariableBase();
    var Variable = class extends VariableBase_1.VariableBase {
      /**
       * `true` if the variable is valid in a type context, false otherwise
       * @public
       */
      get isTypeVariable() {
        if (this.defs.length === 0) {
          return true;
        }
        return this.defs.some((def) => def.isTypeDefinition);
      }
      /**
       * `true` if the variable is valid in a value context, false otherwise
       * @public
       */
      get isValueVariable() {
        if (this.defs.length === 0) {
          return true;
        }
        return this.defs.some((def) => def.isVariableDefinition);
      }
    };
    exports2.Variable = Variable;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/index.js
var require_variable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Variable = exports2.ImplicitLibVariable = exports2.ESLintScopeVariable = void 0;
    var ESLintScopeVariable_1 = require_ESLintScopeVariable();
    Object.defineProperty(exports2, "ESLintScopeVariable", { enumerable: true, get: function() {
      return ESLintScopeVariable_1.ESLintScopeVariable;
    } });
    var ImplicitLibVariable_1 = require_ImplicitLibVariable();
    Object.defineProperty(exports2, "ImplicitLibVariable", { enumerable: true, get: function() {
      return ImplicitLibVariable_1.ImplicitLibVariable;
    } });
    var Variable_1 = require_Variable();
    Object.defineProperty(exports2, "Variable", { enumerable: true, get: function() {
      return Variable_1.Variable;
    } });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeType.js
var require_ScopeType = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ScopeType = void 0;
    var ScopeType;
    (function(ScopeType2) {
      ScopeType2["block"] = "block";
      ScopeType2["catch"] = "catch";
      ScopeType2["class"] = "class";
      ScopeType2["classFieldInitializer"] = "class-field-initializer";
      ScopeType2["classStaticBlock"] = "class-static-block";
      ScopeType2["conditionalType"] = "conditionalType";
      ScopeType2["for"] = "for";
      ScopeType2["function"] = "function";
      ScopeType2["functionExpressionName"] = "function-expression-name";
      ScopeType2["functionType"] = "functionType";
      ScopeType2["global"] = "global";
      ScopeType2["mappedType"] = "mappedType";
      ScopeType2["module"] = "module";
      ScopeType2["switch"] = "switch";
      ScopeType2["tsEnum"] = "tsEnum";
      ScopeType2["tsModule"] = "tsModule";
      ScopeType2["type"] = "type";
      ScopeType2["with"] = "with";
    })(ScopeType || (exports2.ScopeType = ScopeType = {}));
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeBase.js
var require_ScopeBase = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeBase.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ScopeBase = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var definition_1 = require_definition();
    var ID_1 = require_ID();
    var Reference_1 = require_Reference();
    var variable_1 = require_variable();
    var ScopeType_1 = require_ScopeType();
    function isStrictScope(scope, block, isMethodDefinition) {
      let body;
      if (scope.upper?.isStrict) {
        return true;
      }
      if (isMethodDefinition) {
        return true;
      }
      if (scope.type === ScopeType_1.ScopeType.class || scope.type === ScopeType_1.ScopeType.conditionalType || scope.type === ScopeType_1.ScopeType.functionType || scope.type === ScopeType_1.ScopeType.mappedType || scope.type === ScopeType_1.ScopeType.module || scope.type === ScopeType_1.ScopeType.tsEnum || scope.type === ScopeType_1.ScopeType.tsModule || scope.type === ScopeType_1.ScopeType.type) {
        return true;
      }
      if (scope.type === ScopeType_1.ScopeType.block || scope.type === ScopeType_1.ScopeType.switch) {
        return false;
      }
      if (scope.type === ScopeType_1.ScopeType.function) {
        const functionBody = block;
        switch (functionBody.type) {
          case types_1.AST_NODE_TYPES.ArrowFunctionExpression:
            if (functionBody.body.type !== types_1.AST_NODE_TYPES.BlockStatement) {
              return false;
            }
            body = functionBody.body;
            break;
          case types_1.AST_NODE_TYPES.Program:
            body = functionBody;
            break;
          default:
            body = functionBody.body;
        }
        if (!body) {
          return false;
        }
      } else if (scope.type === ScopeType_1.ScopeType.global) {
        body = block;
      } else {
        return false;
      }
      for (const stmt of body.body) {
        if (stmt.type !== types_1.AST_NODE_TYPES.ExpressionStatement) {
          break;
        }
        if (stmt.directive === "use strict") {
          return true;
        }
        const expr = stmt.expression;
        if (expr.type !== types_1.AST_NODE_TYPES.Literal) {
          break;
        }
        if (expr.raw === '"use strict"' || expr.raw === "'use strict'") {
          return true;
        }
        if (expr.value === "use strict") {
          return true;
        }
      }
      return false;
    }
    function registerScope(scopeManager, scope) {
      scopeManager.scopes.push(scope);
      const scopes = scopeManager.nodeToScope.get(scope.block);
      if (scopes) {
        scopes.push(scope);
      } else {
        scopeManager.nodeToScope.set(scope.block, [scope]);
      }
    }
    var generator = (0, ID_1.createIdGenerator)();
    var VARIABLE_SCOPE_TYPES = /* @__PURE__ */ new Set([
      ScopeType_1.ScopeType.classFieldInitializer,
      ScopeType_1.ScopeType.classStaticBlock,
      ScopeType_1.ScopeType.function,
      ScopeType_1.ScopeType.global,
      ScopeType_1.ScopeType.module,
      ScopeType_1.ScopeType.tsModule
    ]);
    var _declaredVariables, _dynamic, _dynamicCloseRef, _globalCloseRef, _staticCloseRef;
    var ScopeBase = class {
      constructor(scopeManager, type, upperScope, block, isMethodDefinition) {
        /**
         * A unique ID for this instance - primarily used to help debugging and testing
         */
        __publicField(this, "$id", generator());
        /**
         * The AST node which created this scope.
         * @public
         */
        __publicField(this, "block");
        /**
         * The array of child scopes. This does not include grandchild scopes.
         * @public
         */
        __publicField(this, "childScopes", []);
        /**
         * A map of the variables for each node in this scope.
         * This is map is a pointer to the one in the parent ScopeManager instance
         */
        __privateAdd(this, _declaredVariables);
        /**
         * Generally, through the lexical scoping of JS you can always know which variable an identifier in the source code
         * refers to. There are a few exceptions to this rule. With `global` and `with` scopes you can only decide at runtime
         * which variable a reference refers to.
         * All those scopes are considered "dynamic".
         */
        __privateAdd(this, _dynamic);
        /**
         * Whether this scope is created by a FunctionExpression.
         * @public
         */
        __publicField(this, "functionExpressionScope", false);
        /**
         * Whether 'use strict' is in effect in this scope.
         * @public
         */
        __publicField(this, "isStrict");
        /**
         * List of {@link Reference}s that are left to be resolved (i.e. which
         * need to be linked to the variable they refer to).
         */
        __publicField(this, "leftToResolve", []);
        /**
         * Any variable {@link Reference} found in this scope.
         * This includes occurrences of local variables as well as variables from parent scopes (including the global scope).
         * For local variables this also includes defining occurrences (like in a 'var' statement).
         * In a 'function' scope this does not include the occurrences of the formal parameter in the parameter list.
         * @public
         */
        __publicField(this, "references", []);
        /**
         * The map from variable names to variable objects.
         * @public
         */
        __publicField(this, "set", /* @__PURE__ */ new Map());
        /**
         * The {@link Reference}s that are not resolved with this scope.
         * @public
         */
        __publicField(this, "through", []);
        __publicField(this, "type");
        /**
         * Reference to the parent {@link Scope}.
         * @public
         */
        __publicField(this, "upper");
        /**
         * The scoped {@link Variable}s of this scope.
         * In the case of a 'function' scope this includes the automatic argument `arguments` as its first element, as well
         * as all further formal arguments.
         * This does not include variables which are defined in child scopes.
         * @public
         */
        __publicField(this, "variables", []);
        /**
         * For scopes that can contain variable declarations, this is a self-reference.
         * For other scope types this is the *variableScope* value of the parent scope.
         * @public
         */
        __privateAdd(this, _dynamicCloseRef, (ref) => {
          let current = this;
          do {
            current.through.push(ref);
            current = current.upper;
          } while (current);
        });
        __privateAdd(this, _globalCloseRef, (ref, scopeManager) => {
          if (this.shouldStaticallyCloseForGlobal(ref, scopeManager)) {
            __privateGet(this, _staticCloseRef).call(this, ref);
          } else {
            __privateGet(this, _dynamicCloseRef).call(this, ref);
          }
        });
        __privateAdd(this, _staticCloseRef, (ref) => {
          const resolve = () => {
            const name = ref.identifier.name;
            const variable = this.set.get(name);
            if (!variable) {
              return false;
            }
            if (!this.isValidResolution(ref, variable)) {
              return false;
            }
            const isValidTypeReference = ref.isTypeReference && variable.isTypeVariable;
            const isValidValueReference = ref.isValueReference && variable.isValueVariable;
            if (!isValidTypeReference && !isValidValueReference) {
              return false;
            }
            variable.references.push(ref);
            ref.resolved = variable;
            return true;
          };
          if (!resolve()) {
            this.delegateToUpperScope(ref);
          }
        });
        __publicField(this, "variableScope");
        const upperScopeAsScopeBase = upperScope;
        this.type = type;
        __privateSet(this, _dynamic, this.type === ScopeType_1.ScopeType.global || this.type === ScopeType_1.ScopeType.with);
        this.block = block;
        this.variableScope = this.isVariableScope() ? this : (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          upperScopeAsScopeBase.variableScope
        );
        this.upper = upperScope;
        this.isStrict = isStrictScope(this, block, isMethodDefinition);
        upperScopeAsScopeBase?.childScopes.push(this);
        __privateSet(this, _declaredVariables, scopeManager.declaredVariables);
        registerScope(scopeManager, this);
      }
      isVariableScope() {
        return VARIABLE_SCOPE_TYPES.has(this.type);
      }
      shouldStaticallyCloseForGlobal(ref, scopeManager) {
        const name = ref.identifier.name;
        const variable = this.set.get(name);
        if (!variable) {
          return false;
        }
        if (scopeManager.isModule()) {
          return true;
        }
        const defs = variable.defs;
        return defs.length > 0 && defs.every((def) => {
          if (def.type === definition_1.DefinitionType.Variable && def.parent.kind === "var") {
            return false;
          }
          return true;
        });
      }
      close(scopeManager) {
        let closeRef;
        if (this.shouldStaticallyClose()) {
          closeRef = __privateGet(this, _staticCloseRef);
        } else if (this.type !== "global") {
          closeRef = __privateGet(this, _dynamicCloseRef);
        } else {
          closeRef = __privateGet(this, _globalCloseRef);
        }
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach((ref) => closeRef(ref, scopeManager));
        this.leftToResolve = null;
        return this.upper;
      }
      shouldStaticallyClose() {
        return !__privateGet(this, _dynamic);
      }
      /**
       * To override by function scopes.
       * References in default parameters isn't resolved to variables which are in their function body.
       */
      defineVariable(nameOrVariable, set, variables, node, def) {
        const name = typeof nameOrVariable === "string" ? nameOrVariable : nameOrVariable.name;
        let variable = set.get(name);
        if (!variable) {
          variable = typeof nameOrVariable === "string" ? new variable_1.Variable(name, this) : nameOrVariable;
          set.set(name, variable);
          variables.push(variable);
        }
        if (def) {
          variable.defs.push(def);
          this.addDeclaredVariablesOfNode(variable, def.node);
          this.addDeclaredVariablesOfNode(variable, def.parent);
        }
        if (node) {
          variable.identifiers.push(node);
        }
      }
      delegateToUpperScope(ref) {
        this.upper?.leftToResolve?.push(ref);
        this.through.push(ref);
      }
      isValidResolution(_ref, _variable) {
        return true;
      }
      addDeclaredVariablesOfNode(variable, node) {
        if (node == null) {
          return;
        }
        let variables = __privateGet(this, _declaredVariables).get(node);
        if (variables == null) {
          variables = [];
          __privateGet(this, _declaredVariables).set(node, variables);
        }
        if (!variables.includes(variable)) {
          variables.push(variable);
        }
      }
      defineIdentifier(node, def) {
        this.defineVariable(node.name, this.set, this.variables, node, def);
      }
      defineLiteralIdentifier(node, def) {
        this.defineVariable(node.value, this.set, this.variables, null, def);
      }
      referenceDualValueType(node) {
        const ref = new Reference_1.Reference(node, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type | Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
      }
      referenceType(node) {
        const ref = new Reference_1.Reference(node, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
      }
      referenceValue(node, assign = Reference_1.ReferenceFlag.Read, writeExpr, maybeImplicitGlobal, init = false) {
        const ref = new Reference_1.Reference(node, this, assign, writeExpr, maybeImplicitGlobal, init, Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
      }
    };
    _declaredVariables = new WeakMap();
    _dynamic = new WeakMap();
    _dynamicCloseRef = new WeakMap();
    _globalCloseRef = new WeakMap();
    _staticCloseRef = new WeakMap();
    exports2.ScopeBase = ScopeBase;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/BlockScope.js
var require_BlockScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/BlockScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BlockScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var BlockScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.block, upperScope, block, false);
      }
    };
    exports2.BlockScope = BlockScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/CatchScope.js
var require_CatchScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/CatchScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CatchScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var CatchScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.catch, upperScope, block, false);
      }
    };
    exports2.CatchScope = CatchScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ClassFieldInitializerScope.js
var require_ClassFieldInitializerScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ClassFieldInitializerScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassFieldInitializerScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassFieldInitializerScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.classFieldInitializer, upperScope, block, false);
      }
    };
    exports2.ClassFieldInitializerScope = ClassFieldInitializerScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ClassScope.js
var require_ClassScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ClassScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.class, upperScope, block, false);
      }
    };
    exports2.ClassScope = ClassScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ConditionalTypeScope.js
var require_ConditionalTypeScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ConditionalTypeScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConditionalTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ConditionalTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.conditionalType, upperScope, block, false);
      }
    };
    exports2.ConditionalTypeScope = ConditionalTypeScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ForScope.js
var require_ForScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ForScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ForScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ForScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.for, upperScope, block, false);
      }
    };
    exports2.ForScope = ForScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionExpressionNameScope.js
var require_FunctionExpressionNameScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionExpressionNameScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FunctionExpressionNameScope = void 0;
    var definition_1 = require_definition();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionExpressionNameScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.functionExpressionName, upperScope, block, false);
        __publicField(this, "functionExpressionScope");
        if (block.id) {
          this.defineIdentifier(block.id, new definition_1.FunctionNameDefinition(block.id, block));
        }
        this.functionExpressionScope = true;
      }
    };
    exports2.FunctionExpressionNameScope = FunctionExpressionNameScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionScope.js
var require_FunctionScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FunctionScope = void 0;
    var types_1 = require_dist();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block, isMethodDefinition) {
        super(scopeManager, ScopeType_1.ScopeType.function, upperScope, block, isMethodDefinition);
        if (this.block.type !== types_1.AST_NODE_TYPES.ArrowFunctionExpression) {
          this.defineVariable("arguments", this.set, this.variables, null, null);
        }
      }
      // References in default parameters isn't resolved to variables which are in their function body.
      //     const x = 1
      //     function f(a = x) { // This `x` is resolved to the `x` in the outer scope.
      //         const x = 2
      //         console.log(a)
      //     }
      isValidResolution(ref, variable) {
        if (this.block.type === types_1.AST_NODE_TYPES.Program) {
          return true;
        }
        const bodyStart = this.block.body?.range[0] ?? -1;
        return !(variable.scope === this && ref.identifier.range[0] < bodyStart && // the reference is in the parameter part.
        variable.defs.every((d) => d.name.range[0] >= bodyStart));
      }
    };
    exports2.FunctionScope = FunctionScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionTypeScope.js
var require_FunctionTypeScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionTypeScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FunctionTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.functionType, upperScope, block, false);
      }
    };
    exports2.FunctionTypeScope = FunctionTypeScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/GlobalScope.js
var require_GlobalScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/GlobalScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GlobalScope = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var ImplicitGlobalVariableDefinition_1 = require_ImplicitGlobalVariableDefinition();
    var variable_1 = require_variable();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var GlobalScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, block) {
        super(scopeManager, ScopeType_1.ScopeType.global, null, block, false);
        // note this is accessed in used in the legacy eslint-scope tests, so it can't be true private
        __publicField(this, "implicit");
        this.implicit = {
          leftToBeResolved: [],
          set: /* @__PURE__ */ new Map(),
          variables: []
        };
      }
      close(scopeManager) {
        (0, assert_1.assert)(this.leftToResolve);
        for (const ref of this.leftToResolve) {
          if (ref.maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
            const info = ref.maybeImplicitGlobal;
            const node = info.pattern;
            if (node.type === types_1.AST_NODE_TYPES.Identifier) {
              this.defineVariable(node.name, this.implicit.set, this.implicit.variables, node, new ImplicitGlobalVariableDefinition_1.ImplicitGlobalVariableDefinition(info.pattern, info.node));
            }
          }
        }
        this.implicit.leftToBeResolved = this.leftToResolve;
        return super.close(scopeManager);
      }
      defineImplicitVariable(name, options) {
        this.defineVariable(new variable_1.ImplicitLibVariable(this, name, options), this.set, this.variables, null, null);
      }
    };
    exports2.GlobalScope = GlobalScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/MappedTypeScope.js
var require_MappedTypeScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/MappedTypeScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MappedTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var MappedTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.mappedType, upperScope, block, false);
      }
    };
    exports2.MappedTypeScope = MappedTypeScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ModuleScope.js
var require_ModuleScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ModuleScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ModuleScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ModuleScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.module, upperScope, block, false);
      }
    };
    exports2.ModuleScope = ModuleScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/Scope.js
var require_Scope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/Scope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/SwitchScope.js
var require_SwitchScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/SwitchScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SwitchScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var SwitchScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.switch, upperScope, block, false);
      }
    };
    exports2.SwitchScope = SwitchScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/TSEnumScope.js
var require_TSEnumScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/TSEnumScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSEnumScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TSEnumScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.tsEnum, upperScope, block, false);
      }
    };
    exports2.TSEnumScope = TSEnumScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/TSModuleScope.js
var require_TSModuleScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/TSModuleScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSModuleScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TSModuleScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.tsModule, upperScope, block, false);
      }
    };
    exports2.TSModuleScope = TSModuleScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/TypeScope.js
var require_TypeScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/TypeScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.type, upperScope, block, false);
      }
    };
    exports2.TypeScope = TypeScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/WithScope.js
var require_WithScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/WithScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WithScope = void 0;
    var assert_1 = require_assert();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var WithScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.with, upperScope, block, false);
      }
      close(scopeManager) {
        if (this.shouldStaticallyClose()) {
          return super.close(scopeManager);
        }
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach((ref) => this.delegateToUpperScope(ref));
        this.leftToResolve = null;
        return this.upper;
      }
    };
    exports2.WithScope = WithScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/index.js
var require_scope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_BlockScope(), exports2);
    __exportStar(require_CatchScope(), exports2);
    __exportStar(require_ClassFieldInitializerScope(), exports2);
    __exportStar(require_ClassScope(), exports2);
    __exportStar(require_ConditionalTypeScope(), exports2);
    __exportStar(require_ForScope(), exports2);
    __exportStar(require_FunctionExpressionNameScope(), exports2);
    __exportStar(require_FunctionScope(), exports2);
    __exportStar(require_FunctionTypeScope(), exports2);
    __exportStar(require_GlobalScope(), exports2);
    __exportStar(require_MappedTypeScope(), exports2);
    __exportStar(require_ModuleScope(), exports2);
    __exportStar(require_Scope(), exports2);
    __exportStar(require_ScopeType(), exports2);
    __exportStar(require_SwitchScope(), exports2);
    __exportStar(require_TSEnumScope(), exports2);
    __exportStar(require_TSModuleScope(), exports2);
    __exportStar(require_TypeScope(), exports2);
    __exportStar(require_WithScope(), exports2);
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/VisitorBase.js
var require_VisitorBase = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/VisitorBase.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VisitorBase = void 0;
    var visitor_keys_1 = require_dist2();
    function isObject(obj) {
      return typeof obj === "object" && obj != null;
    }
    function isNode(node) {
      return isObject(node) && typeof node.type === "string";
    }
    var _childVisitorKeys, _visitChildrenEvenIfSelectorExists;
    var VisitorBase = class {
      constructor(options) {
        __privateAdd(this, _childVisitorKeys);
        __privateAdd(this, _visitChildrenEvenIfSelectorExists);
        __privateSet(this, _childVisitorKeys, options.childVisitorKeys ?? visitor_keys_1.visitorKeys);
        __privateSet(this, _visitChildrenEvenIfSelectorExists, options.visitChildrenEvenIfSelectorExists ?? false);
      }
      /**
       * Default method for visiting children.
       * @param node the node whose children should be visited
       * @param excludeArr a list of keys to not visit
       */
      visitChildren(node, excludeArr = []) {
        if (node?.type == null) {
          return;
        }
        const exclude = /* @__PURE__ */ new Set([...excludeArr, "parent"]);
        const children = __privateGet(this, _childVisitorKeys)[node.type] ?? Object.keys(node);
        for (const key of children) {
          if (exclude.has(key)) {
            continue;
          }
          const child = node[key];
          if (!child) {
            continue;
          }
          if (Array.isArray(child)) {
            for (const subChild of child) {
              if (isNode(subChild)) {
                this.visit(subChild);
              }
            }
          } else if (isNode(child)) {
            this.visit(child);
          }
        }
      }
      /**
       * Dispatching node.
       */
      visit(node) {
        if (node?.type == null) {
          return;
        }
        const visitor = this[node.type];
        if (visitor) {
          visitor.call(this, node);
          if (!__privateGet(this, _visitChildrenEvenIfSelectorExists)) {
            return;
          }
        }
        this.visitChildren(node);
      }
    };
    _childVisitorKeys = new WeakMap();
    _visitChildrenEvenIfSelectorExists = new WeakMap();
    exports2.VisitorBase = VisitorBase;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/PatternVisitor.js
var require_PatternVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/PatternVisitor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PatternVisitor = void 0;
    var types_1 = require_dist();
    var VisitorBase_1 = require_VisitorBase();
    var _assignments, _callback, _restElements, _rootPattern;
    var PatternVisitor = class extends VisitorBase_1.VisitorBase {
      constructor(options, rootPattern, callback) {
        super(options);
        __privateAdd(this, _assignments, []);
        __privateAdd(this, _callback);
        __privateAdd(this, _restElements, []);
        __privateAdd(this, _rootPattern);
        __publicField(this, "rightHandNodes", []);
        __privateSet(this, _rootPattern, rootPattern);
        __privateSet(this, _callback, callback);
      }
      static isPattern(node) {
        const nodeType = node.type;
        return nodeType === types_1.AST_NODE_TYPES.Identifier || nodeType === types_1.AST_NODE_TYPES.ObjectPattern || nodeType === types_1.AST_NODE_TYPES.ArrayPattern || nodeType === types_1.AST_NODE_TYPES.SpreadElement || nodeType === types_1.AST_NODE_TYPES.RestElement || nodeType === types_1.AST_NODE_TYPES.AssignmentPattern;
      }
      ArrayExpression(node) {
        node.elements.forEach(this.visit, this);
      }
      ArrayPattern(pattern) {
        for (const element of pattern.elements) {
          this.visit(element);
        }
      }
      AssignmentExpression(node) {
        __privateGet(this, _assignments).push(node);
        this.visit(node.left);
        this.rightHandNodes.push(node.right);
        __privateGet(this, _assignments).pop();
      }
      AssignmentPattern(pattern) {
        __privateGet(this, _assignments).push(pattern);
        this.visit(pattern.left);
        this.rightHandNodes.push(pattern.right);
        __privateGet(this, _assignments).pop();
      }
      CallExpression(node) {
        node.arguments.forEach((a) => {
          this.rightHandNodes.push(a);
        });
        this.visit(node.callee);
      }
      Decorator() {
      }
      Identifier(pattern) {
        const lastRestElement = __privateGet(this, _restElements).at(-1);
        __privateGet(this, _callback).call(this, pattern, {
          assignments: __privateGet(this, _assignments),
          rest: lastRestElement?.argument === pattern,
          topLevel: pattern === __privateGet(this, _rootPattern)
        });
      }
      MemberExpression(node) {
        if (node.computed) {
          this.rightHandNodes.push(node.property);
        }
        this.rightHandNodes.push(node.object);
      }
      Property(property) {
        if (property.computed) {
          this.rightHandNodes.push(property.key);
        }
        this.visit(property.value);
      }
      RestElement(pattern) {
        __privateGet(this, _restElements).push(pattern);
        this.visit(pattern.argument);
        __privateGet(this, _restElements).pop();
      }
      SpreadElement(node) {
        this.visit(node.argument);
      }
      TSTypeAnnotation() {
      }
    };
    _assignments = new WeakMap();
    _callback = new WeakMap();
    _restElements = new WeakMap();
    _rootPattern = new WeakMap();
    exports2.PatternVisitor = PatternVisitor;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/Visitor.js
var require_Visitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/Visitor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VisitorBase = exports2.Visitor = void 0;
    var PatternVisitor_1 = require_PatternVisitor();
    var VisitorBase_1 = require_VisitorBase();
    var _options;
    var _Visitor = class _Visitor extends VisitorBase_1.VisitorBase {
      constructor(optionsOrVisitor) {
        super(optionsOrVisitor instanceof _Visitor ? __privateGet(optionsOrVisitor, _options) : optionsOrVisitor);
        __privateAdd(this, _options);
        __privateSet(this, _options, optionsOrVisitor instanceof _Visitor ? __privateGet(optionsOrVisitor, _options) : optionsOrVisitor);
      }
      visitPattern(node, callback, options = { processRightHandNodes: false }) {
        const visitor = new PatternVisitor_1.PatternVisitor(__privateGet(this, _options), node, callback);
        visitor.visit(node);
        if (options.processRightHandNodes) {
          visitor.rightHandNodes.forEach(this.visit, this);
        }
      }
    };
    _options = new WeakMap();
    var Visitor = _Visitor;
    exports2.Visitor = Visitor;
    var VisitorBase_2 = require_VisitorBase();
    Object.defineProperty(exports2, "VisitorBase", { enumerable: true, get: function() {
      return VisitorBase_2.VisitorBase;
    } });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/TypeVisitor.js
var require_TypeVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/TypeVisitor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeVisitor = void 0;
    var types_1 = require_dist();
    var definition_1 = require_definition();
    var scope_1 = require_scope();
    var Visitor_1 = require_Visitor();
    var _referencer;
    var _TypeVisitor = class _TypeVisitor extends Visitor_1.Visitor {
      constructor(referencer) {
        super(referencer);
        __privateAdd(this, _referencer);
        __privateSet(this, _referencer, referencer);
      }
      static visit(referencer, node) {
        const typeReferencer = new _TypeVisitor(referencer);
        typeReferencer.visit(node);
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitFunctionType(node) {
        __privateGet(this, _referencer).scopeManager.nestFunctionTypeScope(node);
        this.visit(node.typeParameters);
        for (const param of node.params) {
          let didVisitAnnotation = false;
          this.visitPattern(param, (pattern, info) => {
            __privateGet(this, _referencer).currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node, info.rest));
            if (pattern.typeAnnotation) {
              this.visit(pattern.typeAnnotation);
              didVisitAnnotation = true;
            }
          });
          if (!didVisitAnnotation && "typeAnnotation" in param) {
            this.visit(param.typeAnnotation);
          }
        }
        this.visit(node.returnType);
        __privateGet(this, _referencer).close(node);
      }
      visitPropertyKey(node) {
        if (!node.computed) {
          return;
        }
        __privateGet(this, _referencer).visit(node.key);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      Identifier(node) {
        __privateGet(this, _referencer).currentScope().referenceType(node);
      }
      MemberExpression(node) {
        this.visit(node.object);
      }
      TSCallSignatureDeclaration(node) {
        this.visitFunctionType(node);
      }
      TSConditionalType(node) {
        __privateGet(this, _referencer).scopeManager.nestConditionalTypeScope(node);
        this.visitChildren(node, ["falseType"]);
        __privateGet(this, _referencer).close(node);
        this.visit(node.falseType);
      }
      TSConstructorType(node) {
        this.visitFunctionType(node);
      }
      TSConstructSignatureDeclaration(node) {
        this.visitFunctionType(node);
      }
      TSFunctionType(node) {
        this.visitFunctionType(node);
      }
      TSImportType(node) {
        this.visit(node.typeArguments);
      }
      TSIndexSignature(node) {
        for (const param of node.parameters) {
          if (param.type === types_1.AST_NODE_TYPES.Identifier) {
            this.visit(param.typeAnnotation);
          }
        }
        this.visit(node.typeAnnotation);
      }
      TSInferType(node) {
        const typeParameter = node.typeParameter;
        let scope = __privateGet(this, _referencer).currentScope();
        if (scope.type === scope_1.ScopeType.functionType || scope.type === scope_1.ScopeType.mappedType) {
          let currentScope = scope.upper;
          while (currentScope) {
            if (currentScope.type === scope_1.ScopeType.functionType || currentScope.type === scope_1.ScopeType.mappedType) {
              currentScope = currentScope.upper;
              continue;
            }
            if (currentScope.type === scope_1.ScopeType.conditionalType) {
              scope = currentScope;
              break;
            }
            break;
          }
        }
        scope.defineIdentifier(typeParameter.name, new definition_1.TypeDefinition(typeParameter.name, typeParameter));
        this.visit(typeParameter.constraint);
      }
      TSInterfaceDeclaration(node) {
        __privateGet(this, _referencer).currentScope().defineIdentifier(node.id, new definition_1.TypeDefinition(node.id, node));
        if (node.typeParameters) {
          __privateGet(this, _referencer).scopeManager.nestTypeScope(node);
          this.visit(node.typeParameters);
        }
        node.extends.forEach(this.visit, this);
        this.visit(node.body);
        if (node.typeParameters) {
          __privateGet(this, _referencer).close(node);
        }
      }
      TSMappedType(node) {
        __privateGet(this, _referencer).scopeManager.nestMappedTypeScope(node);
        __privateGet(this, _referencer).currentScope().defineIdentifier(node.key, new definition_1.TypeDefinition(node.key, node));
        this.visit(node.constraint);
        this.visit(node.nameType);
        this.visit(node.typeAnnotation);
        __privateGet(this, _referencer).close(node);
      }
      TSMethodSignature(node) {
        this.visitPropertyKey(node);
        this.visitFunctionType(node);
      }
      TSNamedTupleMember(node) {
        this.visit(node.elementType);
      }
      TSPropertySignature(node) {
        this.visitPropertyKey(node);
        this.visit(node.typeAnnotation);
      }
      TSQualifiedName(node) {
        this.visit(node.left);
      }
      TSTypeAliasDeclaration(node) {
        __privateGet(this, _referencer).currentScope().defineIdentifier(node.id, new definition_1.TypeDefinition(node.id, node));
        if (node.typeParameters) {
          __privateGet(this, _referencer).scopeManager.nestTypeScope(node);
          this.visit(node.typeParameters);
        }
        this.visit(node.typeAnnotation);
        if (node.typeParameters) {
          __privateGet(this, _referencer).close(node);
        }
      }
      TSTypeParameter(node) {
        __privateGet(this, _referencer).currentScope().defineIdentifier(node.name, new definition_1.TypeDefinition(node.name, node));
        this.visit(node.constraint);
        this.visit(node.default);
      }
      TSTypePredicate(node) {
        if (node.parameterName.type !== types_1.AST_NODE_TYPES.TSThisType) {
          __privateGet(this, _referencer).currentScope().referenceValue(node.parameterName);
        }
        this.visit(node.typeAnnotation);
      }
      // a type query `typeof foo` is a special case that references a _non-type_ variable,
      TSTypeAnnotation(node) {
        this.visitChildren(node);
      }
      TSTypeQuery(node) {
        let entityName;
        if (node.exprName.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
          let iter = node.exprName;
          while (iter.left.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
            iter = iter.left;
          }
          entityName = iter.left;
        } else {
          entityName = node.exprName;
          if (node.exprName.type === types_1.AST_NODE_TYPES.TSImportType) {
            this.visit(node.exprName);
          }
        }
        if (entityName.type === types_1.AST_NODE_TYPES.Identifier) {
          __privateGet(this, _referencer).currentScope().referenceValue(entityName);
        }
        this.visit(node.typeArguments);
      }
    };
    _referencer = new WeakMap();
    var TypeVisitor = _TypeVisitor;
    exports2.TypeVisitor = TypeVisitor;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/ClassVisitor.js
var require_ClassVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/ClassVisitor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassVisitor = void 0;
    var types_1 = require_dist();
    var definition_1 = require_definition();
    var TypeVisitor_1 = require_TypeVisitor();
    var Visitor_1 = require_Visitor();
    var _classNode, _referencer;
    var _ClassVisitor = class _ClassVisitor extends Visitor_1.Visitor {
      constructor(referencer, node) {
        super(referencer);
        __privateAdd(this, _classNode);
        __privateAdd(this, _referencer);
        __privateSet(this, _referencer, referencer);
        __privateSet(this, _classNode, node);
      }
      static visit(referencer, node) {
        const classVisitor = new _ClassVisitor(referencer, node);
        classVisitor.visitClass(node);
      }
      visit(node) {
        if (node && node.type in this) {
          super.visit(node);
        } else {
          __privateGet(this, _referencer).visit(node);
        }
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitClass(node) {
        if (node.type === types_1.AST_NODE_TYPES.ClassDeclaration && node.id) {
          __privateGet(this, _referencer).currentScope().defineIdentifier(node.id, new definition_1.ClassNameDefinition(node.id, node));
        }
        node.decorators.forEach((d) => __privateGet(this, _referencer).visit(d));
        __privateGet(this, _referencer).scopeManager.nestClassScope(node);
        if (node.id) {
          __privateGet(this, _referencer).currentScope().defineIdentifier(node.id, new definition_1.ClassNameDefinition(node.id, node));
        }
        __privateGet(this, _referencer).visit(node.superClass);
        this.visitType(node.typeParameters);
        this.visitType(node.superTypeArguments);
        node.implements.forEach((imp) => this.visitType(imp));
        this.visit(node.body);
        __privateGet(this, _referencer).close(node);
      }
      visitFunctionParameterTypeAnnotation(node) {
        switch (node.type) {
          case types_1.AST_NODE_TYPES.AssignmentPattern:
            this.visitType(node.left.typeAnnotation);
            break;
          case types_1.AST_NODE_TYPES.TSParameterProperty:
            this.visitFunctionParameterTypeAnnotation(node.parameter);
            break;
          default:
            this.visitType(node.typeAnnotation);
        }
      }
      visitMethod(node) {
        if (node.computed) {
          __privateGet(this, _referencer).visit(node.key);
        }
        if (node.value.type === types_1.AST_NODE_TYPES.FunctionExpression) {
          this.visitMethodFunction(node.value, node);
        } else {
          __privateGet(this, _referencer).visit(node.value);
        }
        node.decorators.forEach((d) => __privateGet(this, _referencer).visit(d));
      }
      visitMethodFunction(node, methodNode) {
        if (node.id) {
          __privateGet(this, _referencer).scopeManager.nestFunctionExpressionNameScope(node);
        }
        node.params.forEach((param) => {
          param.decorators.forEach((d) => this.visit(d));
        });
        __privateGet(this, _referencer).scopeManager.nestFunctionScope(node, true);
        let withMethodDecorators = !!methodNode.decorators.length;
        withMethodDecorators || (withMethodDecorators = methodNode.kind !== "set" && node.params.some((param) => param.decorators.length));
        if (!withMethodDecorators && methodNode.kind === "set") {
          const keyName = getLiteralMethodKeyName(methodNode);
          if (keyName != null && __privateGet(this, _classNode).body.body.find((node2) => node2 !== methodNode && node2.type === types_1.AST_NODE_TYPES.MethodDefinition && // Node must both be static or not
          node2.static === methodNode.static && getLiteralMethodKeyName(node2) === keyName)?.decorators.length) {
            withMethodDecorators = true;
          }
        }
        if (!withMethodDecorators && methodNode.kind === "constructor" && __privateGet(this, _classNode).decorators.length) {
          withMethodDecorators = true;
        }
        for (const param of node.params) {
          this.visitPattern(param, (pattern, info) => {
            __privateGet(this, _referencer).currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node, info.rest));
            __privateGet(this, _referencer).referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
          this.visitFunctionParameterTypeAnnotation(param);
        }
        this.visitType(node.returnType);
        this.visitType(node.typeParameters);
        __privateGet(this, _referencer).visitChildren(node.body);
        __privateGet(this, _referencer).close(node);
      }
      visitPropertyBase(node) {
        if (node.computed) {
          __privateGet(this, _referencer).visit(node.key);
        }
        if (node.value) {
          if (node.type === types_1.AST_NODE_TYPES.PropertyDefinition || node.type === types_1.AST_NODE_TYPES.AccessorProperty) {
            __privateGet(this, _referencer).scopeManager.nestClassFieldInitializerScope(node.value);
          }
          __privateGet(this, _referencer).visit(node.value);
          if (node.type === types_1.AST_NODE_TYPES.PropertyDefinition || node.type === types_1.AST_NODE_TYPES.AccessorProperty) {
            __privateGet(this, _referencer).close(node.value);
          }
        }
        node.decorators.forEach((d) => __privateGet(this, _referencer).visit(d));
      }
      visitPropertyDefinition(node) {
        this.visitPropertyBase(node);
        this.visitType(node.typeAnnotation);
      }
      visitType(node) {
        if (!node) {
          return;
        }
        TypeVisitor_1.TypeVisitor.visit(__privateGet(this, _referencer), node);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      AccessorProperty(node) {
        this.visitPropertyDefinition(node);
      }
      ClassBody(node) {
        this.visitChildren(node);
      }
      Identifier(node) {
        __privateGet(this, _referencer).visit(node);
      }
      MethodDefinition(node) {
        this.visitMethod(node);
      }
      PrivateIdentifier() {
      }
      PropertyDefinition(node) {
        this.visitPropertyDefinition(node);
      }
      StaticBlock(node) {
        __privateGet(this, _referencer).scopeManager.nestClassStaticBlockScope(node);
        node.body.forEach((b) => this.visit(b));
        __privateGet(this, _referencer).close(node);
      }
      TSAbstractAccessorProperty(node) {
        this.visitPropertyDefinition(node);
      }
      TSAbstractMethodDefinition(node) {
        this.visitPropertyBase(node);
      }
      TSAbstractPropertyDefinition(node) {
        this.visitPropertyDefinition(node);
      }
      TSIndexSignature(node) {
        this.visitType(node);
      }
    };
    _classNode = new WeakMap();
    _referencer = new WeakMap();
    var ClassVisitor = _ClassVisitor;
    exports2.ClassVisitor = ClassVisitor;
    function getLiteralMethodKeyName(node) {
      if (node.computed && node.key.type === types_1.AST_NODE_TYPES.Literal) {
        if (typeof node.key.value === "string" || typeof node.key.value === "number") {
          return node.key.value;
        }
      } else if (!node.computed && node.key.type === types_1.AST_NODE_TYPES.Identifier) {
        return node.key.name;
      }
      return null;
    }
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/ExportVisitor.js
var require_ExportVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/ExportVisitor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ExportVisitor = void 0;
    var types_1 = require_dist();
    var Visitor_1 = require_Visitor();
    var _exportNode, _referencer;
    var _ExportVisitor = class _ExportVisitor extends Visitor_1.Visitor {
      constructor(node, referencer) {
        super(referencer);
        __privateAdd(this, _exportNode);
        __privateAdd(this, _referencer);
        __privateSet(this, _exportNode, node);
        __privateSet(this, _referencer, referencer);
      }
      static visit(referencer, node) {
        const exportReferencer = new _ExportVisitor(node, referencer);
        exportReferencer.visit(node);
      }
      ExportDefaultDeclaration(node) {
        if (node.declaration.type === types_1.AST_NODE_TYPES.Identifier) {
          this.visit(node.declaration);
        } else {
        }
      }
      ExportNamedDeclaration(node) {
        if (node.source) {
          return;
        }
        if (!node.declaration) {
          this.visitChildren(node);
        } else {
        }
      }
      ExportSpecifier(node) {
        if (node.exportKind === "type" && node.local.type === types_1.AST_NODE_TYPES.Identifier) {
          __privateGet(this, _referencer).currentScope().referenceType(node.local);
        } else {
          this.visit(node.local);
        }
      }
      Identifier(node) {
        if (__privateGet(this, _exportNode).exportKind === "type") {
          __privateGet(this, _referencer).currentScope().referenceType(node);
        } else {
          __privateGet(this, _referencer).currentScope().referenceDualValueType(node);
        }
      }
    };
    _exportNode = new WeakMap();
    _referencer = new WeakMap();
    var ExportVisitor = _ExportVisitor;
    exports2.ExportVisitor = ExportVisitor;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/ImportVisitor.js
var require_ImportVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/ImportVisitor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImportVisitor = void 0;
    var definition_1 = require_definition();
    var Visitor_1 = require_Visitor();
    var _declaration, _referencer;
    var _ImportVisitor = class _ImportVisitor extends Visitor_1.Visitor {
      constructor(declaration, referencer) {
        super(referencer);
        __privateAdd(this, _declaration);
        __privateAdd(this, _referencer);
        __privateSet(this, _declaration, declaration);
        __privateSet(this, _referencer, referencer);
      }
      static visit(referencer, declaration) {
        const importReferencer = new _ImportVisitor(declaration, referencer);
        importReferencer.visit(declaration);
      }
      ImportDefaultSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
      }
      ImportNamespaceSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
      }
      ImportSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
      }
      visitImport(id, specifier) {
        __privateGet(this, _referencer).currentScope().defineIdentifier(id, new definition_1.ImportBindingDefinition(id, specifier, __privateGet(this, _declaration)));
      }
    };
    _declaration = new WeakMap();
    _referencer = new WeakMap();
    var ImportVisitor = _ImportVisitor;
    exports2.ImportVisitor = ImportVisitor;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/Referencer.js
var require_Referencer = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/Referencer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Referencer = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var definition_1 = require_definition();
    var lib_1 = require_lib3();
    var ClassVisitor_1 = require_ClassVisitor();
    var ExportVisitor_1 = require_ExportVisitor();
    var ImportVisitor_1 = require_ImportVisitor();
    var PatternVisitor_1 = require_PatternVisitor();
    var Reference_1 = require_Reference();
    var TypeVisitor_1 = require_TypeVisitor();
    var Visitor_1 = require_Visitor();
    var _hasReferencedJsxFactory, _hasReferencedJsxFragmentFactory, _jsxFragmentName, _jsxPragma, _lib;
    var Referencer = class extends Visitor_1.Visitor {
      constructor(options, scopeManager) {
        super(options);
        __privateAdd(this, _hasReferencedJsxFactory, false);
        __privateAdd(this, _hasReferencedJsxFragmentFactory, false);
        __privateAdd(this, _jsxFragmentName);
        __privateAdd(this, _jsxPragma);
        __privateAdd(this, _lib);
        __publicField(this, "scopeManager");
        this.scopeManager = scopeManager;
        __privateSet(this, _jsxPragma, options.jsxPragma);
        __privateSet(this, _jsxFragmentName, options.jsxFragmentName);
        __privateSet(this, _lib, options.lib);
      }
      populateGlobalsFromLib(globalScope) {
        const flattenedLibs = /* @__PURE__ */ new Set();
        for (const lib of __privateGet(this, _lib)) {
          const definition = lib_1.lib.get(lib);
          if (!definition) {
            throw new Error(`Invalid value for lib provided: ${lib}`);
          }
          flattenedLibs.add(definition);
        }
        for (const lib of flattenedLibs) {
          for (const referencedLib of lib.libs) {
            flattenedLibs.add(referencedLib);
          }
          for (const [name, variable] of lib.variables) {
            globalScope.defineImplicitVariable(name, variable);
          }
        }
        globalScope.defineImplicitVariable("const", {
          eslintImplicitGlobalSetting: "readonly",
          isTypeVariable: true,
          isValueVariable: false
        });
      }
      close(node) {
        while (this.currentScope(true) && node === this.currentScope().block) {
          this.scopeManager.currentScope = this.currentScope().close(this.scopeManager);
        }
      }
      currentScope(dontThrowOnNull) {
        if (!dontThrowOnNull) {
          (0, assert_1.assert)(this.scopeManager.currentScope, "aaa");
        }
        return this.scopeManager.currentScope;
      }
      referencingDefaultValue(pattern, assignments, maybeImplicitGlobal, init) {
        assignments.forEach((assignment) => {
          this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, assignment.right, maybeImplicitGlobal, init);
        });
      }
      /**
       * Searches for a variable named "name" in the upper scopes and adds a pseudo-reference from itself to itself
       */
      referenceInSomeUpperScope(name) {
        let scope = this.scopeManager.currentScope;
        while (scope) {
          const variable = scope.set.get(name);
          if (!variable) {
            scope = scope.upper;
            continue;
          }
          scope.referenceValue(variable.identifiers[0]);
          return true;
        }
        return false;
      }
      referenceJsxFragment() {
        if (__privateGet(this, _jsxFragmentName) == null || __privateGet(this, _hasReferencedJsxFragmentFactory)) {
          return;
        }
        __privateSet(this, _hasReferencedJsxFragmentFactory, this.referenceInSomeUpperScope(__privateGet(this, _jsxFragmentName)));
      }
      referenceJsxPragma() {
        if (__privateGet(this, _jsxPragma) == null || __privateGet(this, _hasReferencedJsxFactory)) {
          return;
        }
        __privateSet(this, _hasReferencedJsxFactory, this.referenceInSomeUpperScope(__privateGet(this, _jsxPragma)));
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitClass(node) {
        ClassVisitor_1.ClassVisitor.visit(this, node);
      }
      visitForIn(node) {
        if (node.left.type === types_1.AST_NODE_TYPES.VariableDeclaration && node.left.kind !== "var") {
          this.scopeManager.nestForScope(node);
        }
        if (node.left.type === types_1.AST_NODE_TYPES.VariableDeclaration) {
          this.visit(node.left);
          this.visitPattern(node.left.declarations[0].id, (pattern) => {
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node.right, null, true);
          });
        } else {
          this.visitPattern(node.left, (pattern, info) => {
            const maybeImplicitGlobal = !this.currentScope().isStrict ? {
              node,
              pattern
            } : null;
            this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node.right, maybeImplicitGlobal, false);
          }, { processRightHandNodes: true });
        }
        this.visit(node.right);
        this.visit(node.body);
        this.close(node);
      }
      visitFunction(node) {
        if (node.type === types_1.AST_NODE_TYPES.FunctionExpression) {
          if (node.id) {
            this.scopeManager.nestFunctionExpressionNameScope(node);
          }
        } else if (node.id) {
          this.currentScope().defineIdentifier(node.id, new definition_1.FunctionNameDefinition(node.id, node));
        }
        this.scopeManager.nestFunctionScope(node, false);
        for (const param of node.params) {
          this.visitPattern(param, (pattern, info) => {
            this.currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node, info.rest));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
          this.visitFunctionParameterTypeAnnotation(param);
          param.decorators.forEach((d) => this.visit(d));
        }
        this.visitType(node.returnType);
        this.visitType(node.typeParameters);
        if (node.body) {
          if (node.body.type === types_1.AST_NODE_TYPES.BlockStatement) {
            this.visitChildren(node.body);
          } else {
            this.visit(node.body);
          }
        }
        this.close(node);
      }
      visitFunctionParameterTypeAnnotation(node) {
        switch (node.type) {
          case types_1.AST_NODE_TYPES.AssignmentPattern:
            this.visitType(node.left.typeAnnotation);
            break;
          case types_1.AST_NODE_TYPES.TSParameterProperty:
            this.visitFunctionParameterTypeAnnotation(node.parameter);
            break;
          default:
            this.visitType(node.typeAnnotation);
            break;
        }
      }
      visitJSXElement(node) {
        if (node.name.type === types_1.AST_NODE_TYPES.JSXIdentifier) {
          if (node.name.name[0].toUpperCase() === node.name.name[0] || node.name.name === "this") {
            this.visit(node.name);
          }
        } else {
          this.visit(node.name);
        }
      }
      visitProperty(node) {
        if (node.computed) {
          this.visit(node.key);
        }
        this.visit(node.value);
      }
      visitType(node) {
        if (!node) {
          return;
        }
        TypeVisitor_1.TypeVisitor.visit(this, node);
      }
      visitTypeAssertion(node) {
        this.visit(node.expression);
        this.visitType(node.typeAnnotation);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      ArrowFunctionExpression(node) {
        this.visitFunction(node);
      }
      AssignmentExpression(node) {
        const left = this.visitExpressionTarget(node.left);
        if (PatternVisitor_1.PatternVisitor.isPattern(left)) {
          if (node.operator === "=") {
            this.visitPattern(left, (pattern, info) => {
              const maybeImplicitGlobal = !this.currentScope().isStrict ? {
                node,
                pattern
              } : null;
              this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
              this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node.right, maybeImplicitGlobal, false);
            }, { processRightHandNodes: true });
          } else if (left.type === types_1.AST_NODE_TYPES.Identifier) {
            this.currentScope().referenceValue(left, Reference_1.ReferenceFlag.ReadWrite, node.right);
          }
        } else {
          this.visit(left);
        }
        this.visit(node.right);
      }
      BlockStatement(node) {
        this.scopeManager.nestBlockScope(node);
        this.visitChildren(node);
        this.close(node);
      }
      BreakStatement() {
      }
      CallExpression(node) {
        this.visitChildren(node, ["typeArguments"]);
        this.visitType(node.typeArguments);
      }
      CatchClause(node) {
        this.scopeManager.nestCatchScope(node);
        if (node.param) {
          const param = node.param;
          this.visitPattern(param, (pattern, info) => {
            this.currentScope().defineIdentifier(pattern, new definition_1.CatchClauseDefinition(param, node));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
        }
        this.visit(node.body);
        this.close(node);
      }
      ClassDeclaration(node) {
        this.visitClass(node);
      }
      ClassExpression(node) {
        this.visitClass(node);
      }
      ContinueStatement() {
      }
      ExportAllDeclaration() {
      }
      ExportDefaultDeclaration(node) {
        if (node.declaration.type === types_1.AST_NODE_TYPES.Identifier) {
          ExportVisitor_1.ExportVisitor.visit(this, node);
        } else {
          this.visit(node.declaration);
        }
      }
      ExportNamedDeclaration(node) {
        if (node.declaration) {
          this.visit(node.declaration);
        } else {
          ExportVisitor_1.ExportVisitor.visit(this, node);
        }
      }
      ForInStatement(node) {
        this.visitForIn(node);
      }
      ForOfStatement(node) {
        this.visitForIn(node);
      }
      ForStatement(node) {
        if (node.init && node.init.type === types_1.AST_NODE_TYPES.VariableDeclaration && node.init.kind !== "var") {
          this.scopeManager.nestForScope(node);
        }
        this.visitChildren(node);
        this.close(node);
      }
      FunctionDeclaration(node) {
        this.visitFunction(node);
      }
      FunctionExpression(node) {
        this.visitFunction(node);
      }
      Identifier(node) {
        this.currentScope().referenceValue(node);
        this.visitType(node.typeAnnotation);
      }
      ImportAttribute() {
      }
      ImportDeclaration(node) {
        (0, assert_1.assert)(this.scopeManager.isModule(), "ImportDeclaration should appear when the mode is ES6 and in the module context.");
        ImportVisitor_1.ImportVisitor.visit(this, node);
      }
      JSXAttribute(node) {
        this.visit(node.value);
      }
      JSXClosingElement(node) {
        this.visitJSXElement(node);
      }
      JSXFragment(node) {
        this.referenceJsxPragma();
        this.referenceJsxFragment();
        this.visitChildren(node);
      }
      JSXIdentifier(node) {
        this.currentScope().referenceValue(node);
      }
      JSXMemberExpression(node) {
        if (node.object.type !== types_1.AST_NODE_TYPES.JSXIdentifier || node.object.name !== "this") {
          this.visit(node.object);
        }
      }
      JSXOpeningElement(node) {
        this.referenceJsxPragma();
        this.visitJSXElement(node);
        this.visitType(node.typeArguments);
        for (const attr of node.attributes) {
          this.visit(attr);
        }
      }
      LabeledStatement(node) {
        this.visit(node.body);
      }
      MemberExpression(node) {
        this.visit(node.object);
        if (node.computed) {
          this.visit(node.property);
        }
      }
      MetaProperty() {
      }
      NewExpression(node) {
        this.visitChildren(node, ["typeArguments"]);
        this.visitType(node.typeArguments);
      }
      PrivateIdentifier() {
      }
      Program(node) {
        const globalScope = this.scopeManager.nestGlobalScope(node);
        this.populateGlobalsFromLib(globalScope);
        if (this.scopeManager.isGlobalReturn()) {
          this.currentScope().isStrict = false;
          this.scopeManager.nestFunctionScope(node, false);
        }
        if (this.scopeManager.isModule()) {
          this.scopeManager.nestModuleScope(node);
        }
        if (this.scopeManager.isImpliedStrict()) {
          this.currentScope().isStrict = true;
        }
        this.visitChildren(node);
        this.close(node);
      }
      Property(node) {
        this.visitProperty(node);
      }
      SwitchStatement(node) {
        this.visit(node.discriminant);
        this.scopeManager.nestSwitchScope(node);
        for (const switchCase of node.cases) {
          this.visit(switchCase);
        }
        this.close(node);
      }
      TaggedTemplateExpression(node) {
        this.visit(node.tag);
        this.visit(node.quasi);
        this.visitType(node.typeArguments);
      }
      TSAsExpression(node) {
        this.visitTypeAssertion(node);
      }
      TSDeclareFunction(node) {
        this.visitFunction(node);
      }
      TSEmptyBodyFunctionExpression(node) {
        this.visitFunction(node);
      }
      TSEnumDeclaration(node) {
        this.currentScope().defineIdentifier(node.id, new definition_1.TSEnumNameDefinition(node.id, node));
        this.scopeManager.nestTSEnumScope(node);
        for (const member of node.body.members) {
          if (member.id.type === types_1.AST_NODE_TYPES.Literal && typeof member.id.value === "string") {
            const name = member.id;
            this.currentScope().defineLiteralIdentifier(name, new definition_1.TSEnumMemberDefinition(name, member));
          } else if (!member.computed && member.id.type === types_1.AST_NODE_TYPES.Identifier) {
            this.currentScope().defineIdentifier(member.id, new definition_1.TSEnumMemberDefinition(member.id, member));
          }
          this.visit(member.initializer);
        }
        this.close(node);
      }
      TSExportAssignment(node) {
        if (node.expression.type === types_1.AST_NODE_TYPES.Identifier) {
          this.currentScope().referenceDualValueType(node.expression);
        } else {
          this.visit(node.expression);
        }
      }
      TSImportEqualsDeclaration(node) {
        this.currentScope().defineIdentifier(node.id, new definition_1.ImportBindingDefinition(node.id, node, node));
        if (node.moduleReference.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
          let moduleIdentifier = node.moduleReference.left;
          while (moduleIdentifier.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
            moduleIdentifier = moduleIdentifier.left;
          }
          this.visit(moduleIdentifier);
        } else {
          this.visit(node.moduleReference);
        }
      }
      TSInstantiationExpression(node) {
        this.visitChildren(node, ["typeArguments"]);
        this.visitType(node.typeArguments);
      }
      TSInterfaceDeclaration(node) {
        this.visitType(node);
      }
      TSModuleDeclaration(node) {
        if (node.id.type === types_1.AST_NODE_TYPES.Identifier && node.kind !== "global") {
          this.currentScope().defineIdentifier(node.id, new definition_1.TSModuleNameDefinition(node.id, node));
        }
        this.scopeManager.nestTSModuleScope(node);
        this.visit(node.body);
        this.close(node);
      }
      TSSatisfiesExpression(node) {
        this.visitTypeAssertion(node);
      }
      TSTypeAliasDeclaration(node) {
        this.visitType(node);
      }
      TSTypeAssertion(node) {
        this.visitTypeAssertion(node);
      }
      UpdateExpression(node) {
        const argument = this.visitExpressionTarget(node.argument);
        if (PatternVisitor_1.PatternVisitor.isPattern(argument)) {
          this.visitPattern(argument, (pattern) => {
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.ReadWrite, null);
          });
        } else {
          this.visitChildren(node);
        }
      }
      VariableDeclaration(node) {
        const variableTargetScope = node.kind === "var" ? this.currentScope().variableScope : this.currentScope();
        for (const decl of node.declarations) {
          const init = decl.init;
          this.visitPattern(decl.id, (pattern, info) => {
            variableTargetScope.defineIdentifier(pattern, new definition_1.VariableDefinition(pattern, decl, node));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
            if (init) {
              this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, init, null, true);
            }
          }, { processRightHandNodes: true });
          this.visit(decl.init);
          this.visitType(decl.id.typeAnnotation);
        }
      }
      WithStatement(node) {
        this.visit(node.object);
        this.scopeManager.nestWithScope(node);
        this.visit(node.body);
        this.close(node);
      }
      visitExpressionTarget(left) {
        switch (left.type) {
          case types_1.AST_NODE_TYPES.TSAsExpression:
          case types_1.AST_NODE_TYPES.TSTypeAssertion:
            this.visitType(left.typeAnnotation);
          // intentional fallthrough
          case types_1.AST_NODE_TYPES.TSNonNullExpression:
            left = left.expression;
        }
        return left;
      }
    };
    _hasReferencedJsxFactory = new WeakMap();
    _hasReferencedJsxFragmentFactory = new WeakMap();
    _jsxFragmentName = new WeakMap();
    _jsxPragma = new WeakMap();
    _lib = new WeakMap();
    exports2.Referencer = Referencer;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/index.js
var require_referencer = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Referencer = void 0;
    var Referencer_1 = require_Referencer();
    Object.defineProperty(exports2, "Referencer", { enumerable: true, get: function() {
      return Referencer_1.Referencer;
    } });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ClassStaticBlockScope.js
var require_ClassStaticBlockScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ClassStaticBlockScope.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClassStaticBlockScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassStaticBlockScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.classStaticBlock, upperScope, block, false);
      }
    };
    exports2.ClassStaticBlockScope = ClassStaticBlockScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/ScopeManager.js
var require_ScopeManager = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/ScopeManager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ScopeManager = void 0;
    var assert_1 = require_assert();
    var scope_1 = require_scope();
    var ClassFieldInitializerScope_1 = require_ClassFieldInitializerScope();
    var ClassStaticBlockScope_1 = require_ClassStaticBlockScope();
    var _options;
    var ScopeManager = class {
      constructor(options) {
        __privateAdd(this, _options);
        __publicField(this, "currentScope");
        __publicField(this, "declaredVariables");
        /**
         * The root scope
         */
        __publicField(this, "globalScope");
        __publicField(this, "nodeToScope");
        /**
         * All scopes
         * @public
         */
        __publicField(this, "scopes");
        this.scopes = [];
        this.globalScope = null;
        this.nodeToScope = /* @__PURE__ */ new WeakMap();
        this.currentScope = null;
        __privateSet(this, _options, options);
        this.declaredVariables = /* @__PURE__ */ new WeakMap();
      }
      isES6() {
        return true;
      }
      isGlobalReturn() {
        return __privateGet(this, _options).globalReturn === true;
      }
      isImpliedStrict() {
        return __privateGet(this, _options).impliedStrict === true;
      }
      isModule() {
        return __privateGet(this, _options).sourceType === "module";
      }
      isStrictModeSupported() {
        return true;
      }
      get variables() {
        const variables = /* @__PURE__ */ new Set();
        function recurse(scope) {
          scope.variables.forEach((v) => variables.add(v));
          scope.childScopes.forEach(recurse);
        }
        this.scopes.forEach(recurse);
        return [...variables].sort((a, b) => a.$id - b.$id);
      }
      /**
       * Get the variables that a given AST node defines. The gotten variables' `def[].node`/`def[].parent` property is the node.
       * If the node does not define any variable, this returns an empty array.
       * @param node An AST node to get their variables.
       */
      getDeclaredVariables(node) {
        return this.declaredVariables.get(node) ?? [];
      }
      /**
       * Get the scope of a given AST node. The gotten scope's `block` property is the node.
       * This method never returns `function-expression-name` scope. If the node does not have their scope, this returns `null`.
       *
       * @param node An AST node to get their scope.
       * @param inner If the node has multiple scopes, this returns the outermost scope normally.
       *                If `inner` is `true` then this returns the innermost scope.
       */
      acquire(node, inner = false) {
        function predicate(testScope) {
          if (testScope.type === scope_1.ScopeType.function && testScope.functionExpressionScope) {
            return false;
          }
          return true;
        }
        const scopes = this.nodeToScope.get(node);
        if (!scopes || scopes.length === 0) {
          return null;
        }
        if (scopes.length === 1) {
          return scopes[0];
        }
        if (inner) {
          for (let i = scopes.length - 1; i >= 0; --i) {
            const scope = scopes[i];
            if (predicate(scope)) {
              return scope;
            }
          }
          return null;
        }
        return scopes.find(predicate) ?? null;
      }
      nestBlockScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.BlockScope(this, this.currentScope, node));
      }
      nestCatchScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.CatchScope(this, this.currentScope, node));
      }
      nestClassFieldInitializerScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassFieldInitializerScope_1.ClassFieldInitializerScope(this, this.currentScope, node));
      }
      nestClassScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ClassScope(this, this.currentScope, node));
      }
      nestClassStaticBlockScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassStaticBlockScope_1.ClassStaticBlockScope(this, this.currentScope, node));
      }
      nestConditionalTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ConditionalTypeScope(this, this.currentScope, node));
      }
      nestForScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ForScope(this, this.currentScope, node));
      }
      nestFunctionExpressionNameScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionExpressionNameScope(this, this.currentScope, node));
      }
      nestFunctionScope(node, isMethodDefinition) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionScope(this, this.currentScope, node, isMethodDefinition));
      }
      nestFunctionTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionTypeScope(this, this.currentScope, node));
      }
      nestGlobalScope(node) {
        return this.nestScope(new scope_1.GlobalScope(this, node));
      }
      nestMappedTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.MappedTypeScope(this, this.currentScope, node));
      }
      nestModuleScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ModuleScope(this, this.currentScope, node));
      }
      nestSwitchScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.SwitchScope(this, this.currentScope, node));
      }
      nestTSEnumScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSEnumScope(this, this.currentScope, node));
      }
      nestTSModuleScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSModuleScope(this, this.currentScope, node));
      }
      nestTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TypeScope(this, this.currentScope, node));
      }
      nestWithScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.WithScope(this, this.currentScope, node));
      }
      nestScope(scope) {
        if (scope instanceof scope_1.GlobalScope) {
          (0, assert_1.assert)(this.currentScope == null);
          this.globalScope = scope;
        }
        this.currentScope = scope;
        return scope;
      }
    };
    _options = new WeakMap();
    exports2.ScopeManager = ScopeManager;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/analyze.js
var require_analyze = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/analyze.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.analyze = analyze;
    var visitor_keys_1 = require_dist2();
    var referencer_1 = require_referencer();
    var ScopeManager_1 = require_ScopeManager();
    var DEFAULT_OPTIONS = {
      childVisitorKeys: visitor_keys_1.visitorKeys,
      emitDecoratorMetadata: false,
      globalReturn: false,
      impliedStrict: false,
      jsxFragmentName: null,
      jsxPragma: "React",
      lib: ["es2018"],
      sourceType: "script"
    };
    function analyze(tree, providedOptions) {
      const options = {
        childVisitorKeys: providedOptions?.childVisitorKeys ?? DEFAULT_OPTIONS.childVisitorKeys,
        emitDecoratorMetadata: false,
        globalReturn: providedOptions?.globalReturn ?? DEFAULT_OPTIONS.globalReturn,
        impliedStrict: providedOptions?.impliedStrict ?? DEFAULT_OPTIONS.impliedStrict,
        jsxFragmentName: providedOptions?.jsxFragmentName ?? DEFAULT_OPTIONS.jsxFragmentName,
        jsxPragma: (
          // eslint-disable-next-line @typescript-eslint/internal/eqeq-nullish
          providedOptions?.jsxPragma === void 0 ? DEFAULT_OPTIONS.jsxPragma : providedOptions.jsxPragma
        ),
        lib: providedOptions?.lib ?? ["esnext"],
        sourceType: providedOptions?.sourceType ?? DEFAULT_OPTIONS.sourceType
      };
      options.lib = options.lib.map((l) => l.toLowerCase());
      const scopeManager = new ScopeManager_1.ScopeManager(options);
      const referencer = new referencer_1.Referencer(options, scopeManager);
      referencer.visit(tree);
      return scopeManager;
    }
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ScopeManager = exports2.Visitor = exports2.Reference = exports2.PatternVisitor = exports2.analyze = void 0;
    var analyze_1 = require_analyze();
    Object.defineProperty(exports2, "analyze", { enumerable: true, get: function() {
      return analyze_1.analyze;
    } });
    __exportStar(require_definition(), exports2);
    var PatternVisitor_1 = require_PatternVisitor();
    Object.defineProperty(exports2, "PatternVisitor", { enumerable: true, get: function() {
      return PatternVisitor_1.PatternVisitor;
    } });
    var Reference_1 = require_Reference();
    Object.defineProperty(exports2, "Reference", { enumerable: true, get: function() {
      return Reference_1.Reference;
    } });
    var Visitor_1 = require_Visitor();
    Object.defineProperty(exports2, "Visitor", { enumerable: true, get: function() {
      return Visitor_1.Visitor;
    } });
    __exportStar(require_scope(), exports2);
    var ScopeManager_1 = require_ScopeManager();
    Object.defineProperty(exports2, "ScopeManager", { enumerable: true, get: function() {
      return ScopeManager_1.ScopeManager;
    } });
    __exportStar(require_variable(), exports2);
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/Scope.js
var require_Scope2 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/Scope.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Scope = void 0;
    var scopeManager = __importStar(require_dist3());
    var Scope;
    (function(Scope2) {
      Scope2.ScopeType = scopeManager.ScopeType;
      Scope2.DefinitionType = scopeManager.DefinitionType;
    })(Scope || (exports2.Scope = Scope = {}));
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/SourceCode.js
var require_SourceCode = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/SourceCode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SourceCode = void 0;
    var eslint_1 = require("eslint");
    var SourceCode = class extends eslint_1.SourceCode {
    };
    exports2.SourceCode = SourceCode;
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/index.js
var require_ts_eslint = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_AST(), exports2);
    __exportStar(require_Config(), exports2);
    __exportStar(require_ESLint(), exports2);
    __exportStar(require_Linter(), exports2);
    __exportStar(require_Parser(), exports2);
    __exportStar(require_ParserOptions(), exports2);
    __exportStar(require_Processor(), exports2);
    __exportStar(require_Rule(), exports2);
    __exportStar(require_RuleTester(), exports2);
    __exportStar(require_Scope2(), exports2);
    __exportStar(require_SourceCode(), exports2);
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-utils/isArray.js
var require_isArray = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-utils/isArray.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isArray = isArray;
    function isArray(arg) {
      return Array.isArray(arg);
    }
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-utils/NoInfer.js
var require_NoInfer = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-utils/NoInfer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-utils/index.js
var require_ts_utils = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-utils/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_isArray(), exports2);
    __exportStar(require_NoInfer(), exports2);
  }
});

// node_modules/@typescript-eslint/utils/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TSUtils = exports2.TSESLint = exports2.JSONSchema = exports2.ESLintUtils = exports2.ASTUtils = void 0;
    exports2.ASTUtils = __importStar(require_ast_utils());
    exports2.ESLintUtils = __importStar(require_eslint_utils3());
    exports2.JSONSchema = __importStar(require_json_schema());
    exports2.TSESLint = __importStar(require_ts_eslint());
    __exportStar(require_ts_estree2(), exports2);
    exports2.TSUtils = __importStar(require_ts_utils());
  }
});

// index.ts
var index_exports = {};
__export(index_exports, {
  PLUGIN_NAME: () => PLUGIN_NAME,
  configs: () => configs,
  default: () => index_default,
  rules: () => rules
});
module.exports = __toCommonJS(index_exports);
var import_yaml_eslint_parser9 = __toESM(require("yaml-eslint-parser"), 1);

// src/rule-allowed-root-keys.ts
var import_yaml_eslint_parser = require("yaml-eslint-parser");

// src/constants.ts
var ALL_LOCALE_CODES = [
  "aa",
  "ab",
  "ae",
  "af",
  "ak",
  "am",
  "an",
  "ar",
  "as",
  "av",
  "ay",
  "az",
  "ba",
  "be",
  "bg",
  "bh",
  "bi",
  "bm",
  "bn",
  "bo",
  "br",
  "bs",
  "ca",
  "ce",
  "ch",
  "co",
  "cr",
  "cs",
  "cu",
  "cv",
  "cy",
  "da",
  "de",
  "dv",
  "dz",
  "ee",
  "el",
  "en",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "ff",
  "fi",
  "fj",
  "fo",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "gn",
  "gu",
  "gv",
  "ha",
  "he",
  "hi",
  "ho",
  "hr",
  "ht",
  "hu",
  "hy",
  "hz",
  "ia",
  "id",
  "ie",
  "ig",
  "ii",
  "ik",
  "io",
  "is",
  "it",
  "iu",
  "ja",
  "jv",
  "ka",
  "kg",
  "ki",
  "kj",
  "kk",
  "kl",
  "km",
  "kn",
  "ko",
  "kr",
  "ks",
  "ku",
  "kv",
  "kw",
  "ky",
  "la",
  "lb",
  "lg",
  "li",
  "ln",
  "lo",
  "lt",
  "lu",
  "lv",
  "mg",
  "mh",
  "mi",
  "mk",
  "ml",
  "mn",
  "mr",
  "ms",
  "mt",
  "my",
  "na",
  "nb",
  "nd",
  "ne",
  "ng",
  "nl",
  "nn",
  "no",
  "nr",
  "nv",
  "ny",
  "oc",
  "oj",
  "om",
  "or",
  "os",
  "pa",
  "pi",
  "pl",
  "ps",
  "pt",
  "qu",
  "rm",
  "rn",
  "ro",
  "ru",
  "rw",
  "sa",
  "sc",
  "sd",
  "se",
  "sg",
  "si",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sq",
  "sr",
  "ss",
  "st",
  "su",
  "sv",
  "sw",
  "ta",
  "te",
  "tg",
  "th",
  "ti",
  "tk",
  "tl",
  "tn",
  "to",
  "tr",
  "ts",
  "tt",
  "tw",
  "ty",
  "ug",
  "uk",
  "ur",
  "uz",
  "ve",
  "vi",
  "vo",
  "wa",
  "wo",
  "xh",
  "yi",
  "yo",
  "za",
  "zh",
  "zu"
];
var ALL_LOCALE_CODES_SET = new Set(ALL_LOCALE_CODES);
var META_KEYS = ["_meta", "_component"];
var DEFAULT_LOCALE = "en";
var MAX_NESTING_DEPTH = 2;
var PH_RE = /\{([A-Za-z_](?:[A-Za-z0-9_-]*[A-Za-z0-9_])?)\}/g;

// src/creator.ts
var import_utils = __toESM(require_dist4(), 1);
var createRule = import_utils.ESLintUtils.RuleCreator(
  (ruleName) => `https://github.com/wojtekjs/eslint-plugin-i18n-yaml#i18n-yaml${ruleName}`
);
var creator_default = createRule;

// src/utils.ts
var isYamlMapping = (node) => !!node && node.type === "YAMLMapping";
var isYamlSequence = (node) => !!node && node.type === "YAMLSequence";
var isLocaleCode = (maybeLocaleCode) => {
  return ALL_LOCALE_CODES_SET.has(maybeLocaleCode);
};

// src/rule-allowed-root-keys.ts
var allowedRootKeys = creator_default({
  name: "allowed-root-keys",
  meta: {
    type: "problem",
    docs: {
      description: "Disallow non-locale or exceptional meta keys at root-level in i18n YAML files"
    },
    messages: {
      disallowedRootKey: "Key '{{key}}' is forbidden at root-level. Permitted keys: [{{allowedKeys}}]"
    },
    schema: [
      {
        type: "object",
        properties: {
          allowedLocales: { type: "array" },
          allowedNonLocaleKeys: { type: "array" }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions: [
    {
      allowedLocales: ALL_LOCALE_CODES,
      allowedNonLocaleKeys: META_KEYS
    }
  ],
  create(context, [options]) {
    const allAllowedKeys = [
      ...options.allowedNonLocaleKeys,
      ...options.allowedLocales
    ];
    return {
      YAMLDocument(doc) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;
        for (const pair of root.pairs) {
          if (!pair.key) continue;
          const key = String((0, import_yaml_eslint_parser.getStaticYAMLValue)(pair.key));
          if (!allAllowedKeys.includes(key)) {
            context.report({
              loc: pair.key?.loc,
              messageId: "disallowedRootKey",
              data: { key, allowedKeys: allAllowedKeys.join(", ") }
            });
          }
        }
      }
    };
  }
});
var rule_allowed_root_keys_default = allowedRootKeys;

// src/rule-deep-key-parity.ts
var import_yaml_eslint_parser2 = require("yaml-eslint-parser");
var deepKeyParity = creator_default({
  name: "deep-key-parity",
  meta: {
    type: "problem",
    docs: {
      description: "Enforce key parity between locales in an i18n YAML file."
    },
    messages: {
      deepKeyDisparity: (
        // `scope` can be 'key' if its second-level or `nested key` if its third-level and deeper
        "Locale '{{reportedLocale}}' is missing {{scope}} '{{missingKey}}' (expected path: {{expectedPath}}) \u2022 Present in: {{localesWithKey}}"
      )
    },
    schema: [
      {
        type: "object",
        properties: {
          singleComprehensiveLocale: {
            type: "string",
            minLength: 2,
            maxLength: 2
          }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions: [
    {
      singleComprehensiveLocale: null
    }
  ],
  create(context, [options]) {
    const singleComprehensiveLocale = options.singleComprehensiveLocale;
    const EMPTY_PATH_SET = /* @__PURE__ */ new Set();
    const EMPTY_LOCALE_SET = /* @__PURE__ */ new Set();
    return {
      YAMLDocument(doc) {
        if (!isYamlMapping(doc.content)) return;
        const { pathsToLocaleMap, localeToPathsMap, allRelPaths, allLocales } = buildIndexes(doc.content);
        if (allLocales.size < 2) return;
        const allRelPathsArray = Array.from(allRelPaths);
        const reportedExpectedPaths = /* @__PURE__ */ new Set();
        for (const localeBlock of doc.content.pairs) {
          if (!localeBlock.key) continue;
          const currentLocale = String((0, import_yaml_eslint_parser2.getStaticYAMLValue)(localeBlock.key));
          if (!isLocaleCode(currentLocale)) continue;
          if (singleComprehensiveLocale != null && singleComprehensiveLocale !== currentLocale)
            continue;
          const presentRelPaths = localeToPathsMap.get(currentLocale) ?? EMPTY_PATH_SET;
          for (const relId of allRelPathsArray) {
            if (presentRelPaths.has(relId)) continue;
            const pathSegments = JSON.parse(relId);
            const expectedPath = `${currentLocale}.${pathSegments.join(".")}`;
            if (reportedExpectedPaths.has(expectedPath)) continue;
            const haveLocalesSet = pathsToLocaleMap.get(relId) ?? EMPTY_LOCALE_SET;
            const localesWithKey = Array.from(haveLocalesSet).map((l) => `'${l}'`).join(", ");
            const missingKey = pathSegments[pathSegments.length - 1];
            const scope = (
              // comparing to 1 because path construction earlier strips the first step of the path (the locale)
              pathSegments.length === 1 ? "key" : "nested key"
            );
            context.report({
              loc: localeBlock.key.loc,
              messageId: "deepKeyDisparity",
              data: {
                reportedLocale: currentLocale,
                scope,
                missingKey,
                expectedPath,
                localesWithKey
              }
            });
            reportedExpectedPaths.add(expectedPath);
          }
        }
      }
    };
  }
});
var rule_deep_key_parity_default = deepKeyParity;
var buildIndexes = (docContent) => {
  const init = {
    localeToPathsMap: /* @__PURE__ */ new Map(),
    pathsToLocaleMap: /* @__PURE__ */ new Map(),
    allRelPaths: /* @__PURE__ */ new Set(),
    allLocales: /* @__PURE__ */ new Set()
  };
  return docContent.pairs.reduce((acc, localeBlock) => {
    if (!localeBlock.key || !localeBlock.value) return acc;
    const stringLocaleKey = String((0, import_yaml_eslint_parser2.getStaticYAMLValue)(localeBlock.key));
    if (!isLocaleCode(stringLocaleKey)) return acc;
    keyDfs(localeBlock.value, stringLocaleKey, [stringLocaleKey], acc);
    return acc;
  }, init);
};
var mapGetSet = (map, key) => {
  let s = map.get(key);
  if (!s) {
    s = /* @__PURE__ */ new Set();
    map.set(key, s);
  }
  return s;
};
var keyDfs = (currNode, locale, currentPath, ctx) => {
  const updateIndexes = (locale2, keyPathSegments) => {
    const keyRelPathId = JSON.stringify(keyPathSegments);
    mapGetSet(ctx.localeToPathsMap, locale2).add(keyRelPathId);
    mapGetSet(ctx.pathsToLocaleMap, keyRelPathId).add(locale2);
    ctx.allRelPaths.add(keyRelPathId);
    ctx.allLocales.add(locale2);
  };
  if (isYamlMapping(currNode)) {
    for (const pair of currNode.pairs) {
      if (!pair.key) continue;
      const keyString = String((0, import_yaml_eslint_parser2.getStaticYAMLValue)(pair.key));
      currentPath.push(keyString);
      updateIndexes(locale, currentPath.slice(1));
      try {
        const pV = pair.value;
        if (pV && (isYamlMapping(pV) || isYamlSequence(pV))) {
          keyDfs(pV, locale, currentPath, ctx);
        }
      } finally {
        currentPath.pop();
      }
    }
  } else if (isYamlSequence(currNode)) {
    for (const item of currNode.entries) {
      if (!item) continue;
      keyDfs(item, locale, currentPath, ctx);
    }
  }
};

// src/rule-default-locale-present.ts
var import_yaml_eslint_parser3 = require("yaml-eslint-parser");
var defaultLocalePresent = creator_default({
  name: "default-locale-present",
  meta: {
    type: "problem",
    docs: {
      description: "Require default language to be present at the YAML root."
    },
    schema: [
      {
        type: "object",
        properties: {
          defaultLocale: { type: "string", minLength: 2 }
        },
        additionalProperties: false
      }
    ],
    messages: {
      // we can have multiple. these are templates for reports we can make. placeholders mean the report MUST take a data arg with the key(s) being the same as the placeholder(s)
      missingDefaultLocale: "Missing default locale '{{defaultLocale}}' at root"
    }
  },
  defaultOptions: [{ defaultLocale: "en" }],
  create(context, [options]) {
    const { defaultLocale } = options;
    return {
      YAMLDocument(doc) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;
        const anchor = (root.loc ?? doc.loc)?.start;
        const hasDefault = root.pairs.some((pair) => {
          if (!pair.key) return false;
          const key = (0, import_yaml_eslint_parser3.getStaticYAMLValue)(pair.key);
          return typeof key === "string" && key === defaultLocale;
        });
        if (!hasDefault) {
          context.report({
            // use just the first key in the YAML as the error point
            loc: { start: anchor, end: anchor },
            messageId: "missingDefaultLocale",
            data: { defaultLocale }
            // required to fill the `defaultLang` placeholder we put in the message.
          });
        }
      }
    };
  }
});
var rule_default_locale_present_default = defaultLocalePresent;

// src/rule-key-order.ts
var import_yaml_eslint_parser4 = require("yaml-eslint-parser");
var keyOrder = creator_default({
  name: "key-order",
  meta: {
    type: "layout",
    fixable: "code",
    docs: {
      description: "Prefer root-level key ordering by meta \u2192 default locale \u2192 all locales \u2192 other keys, with intra-group alphabetical sorting."
    },
    messages: {
      orderedKeys: "Key '{{key}}' (group '{{group}}') is in position {{actualPosition}} but should be in position {{requiredPosition}}. Expected group order: meta (configured order) \u2192 default locale (single key) \u2192 all locales (A-Z) \u2192 other keys (A-Z).",
      suggestedFix: "Sort root keys into meta \u2192 default \u2192 locales (A-Z) \u2192 other (A-Z)."
    },
    schema: [
      {
        type: "object",
        properties: {
          metaKeys: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true
          },
          defaultLocale: { type: "string", minLength: 2 },
          allowedLocales: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true
          }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions: [
    {
      defaultLocale: DEFAULT_LOCALE,
      allowedLocales: ALL_LOCALE_CODES,
      metaKeys: META_KEYS
    }
  ],
  create(context, [options]) {
    const { defaultLocale } = options;
    const keyGroups = {
      meta: {
        expectedGroupPosition: 0,
        permittedKeys: options.metaKeys
      },
      default: {
        expectedGroupPosition: 1,
        permittedKeys: [defaultLocale]
      },
      locales: {
        expectedGroupPosition: 2,
        permittedKeys: (options.allowedLocales ?? ALL_LOCALE_CODES).filter(
          (l) => l !== defaultLocale
        )
      },
      other: { expectedGroupPosition: 3, permittedKeys: [] }
    };
    return {
      YAMLDocument(doc) {
        let didOfferFix = false;
        const root = doc.content;
        if (!isYamlMapping(root)) return;
        const srcText = context.sourceCode.text;
        const [mapStart, mapEnd] = root.range;
        const richRootPairs = buildRichRootPairs(
          root.pairs,
          keyGroups,
          mapStart,
          mapEnd,
          srcText
        );
        const sortedPositionedRichPairs = assignPositions(
          richRootPairs,
          keyGroups
        ).sort(byRank);
        const keyIndexMap = new Map(
          // using originalIndex instead of the key string value allows better handling of duplicate keys
          sortedPositionedRichPairs.map((pair, i) => [pair.originalIndex, i])
        );
        for (const pair of richRootPairs) {
          const expectedPositionInYAML = keyIndexMap.get(pair.originalIndex);
          if (pair.originalIndex !== expectedPositionInYAML) {
            context.report({
              loc: pair.location,
              messageId: "orderedKeys",
              data: {
                key: pair.key,
                group: pair.group,
                // Adding 1 to each to ensure user-facing count is 1-based (not 0-based)
                actualPosition: pair.originalIndex + 1,
                requiredPosition: expectedPositionInYAML + 1
              }
            });
            if (!didOfferFix) {
              const firstChunkStart = richRootPairs[0].chunkStart;
              const prefix = srcText.slice(mapStart, firstChunkStart);
              const chunks = sortedPositionedRichPairs.map(
                (pair2) => pair2.textChunk
              );
              if (chunks[0]) chunks[0] = chunks[0].replace(/^\r?\n+/, "");
              const needsNLBetweenPrefixAndFirst = prefix.length > 0 && // only execute this if there even is a prefix at all
              !/\r?\n$/.test(prefix) && // prefix does NOT already end with \n (Mac) or \r\n (Windows)
              !(chunks[0] && /^\r?\n/.test(chunks[0]));
              const head = prefix + (needsNLBetweenPrefixAndFirst ? "\n" : "");
              const rebuilt = head + // inserting the first chunk outside of the reducer since we don't want to insert new lines in the same way as for the rest
              (chunks[0] ?? "") + chunks.slice(1).reduce((acc, currChunk) => {
                const leftHasNL = /\r?\n$/.test(acc);
                const rightHasNL = /^\r?\n/.test(currChunk);
                return acc + (leftHasNL || rightHasNL ? "" : "\n") + currChunk;
              }, "");
              context.report({
                node: root,
                messageId: "suggestedFix",
                fix(fixer) {
                  return fixer.replaceTextRange([mapStart, mapEnd], rebuilt);
                }
              });
              didOfferFix = true;
            }
          }
        }
      }
    };
  }
});
var rule_key_order_default = keyOrder;
var buildRichRootPairs = (basePairs, keyGroups, mapStart, mapEnd, srcText) => {
  const basePairLen = basePairs.length;
  if (basePairLen === 0) return [];
  const regexCommentPattern = /^(?:\s*(?:#.*)?\r?\n)*\s*$/;
  const chunkStarts = new Array(basePairLen);
  for (let i = 0; i < basePairLen; i++) {
    const pairStart = basePairs[i].range[0];
    const prevEnd = i === 0 ? mapStart : basePairs[i - 1].range[1];
    const between = srcText.slice(prevEnd, pairStart);
    chunkStarts[i] = i === 0 ? pairStart : regexCommentPattern.test(between) ? prevEnd : pairStart;
  }
  return basePairs.flatMap((pair, idx) => {
    if (!pair.key) return [];
    const stringKey = String((0, import_yaml_eslint_parser4.getStaticYAMLValue)(pair.key));
    const keyGroup = getKeyGroup(stringKey, keyGroups);
    const chunkStart = chunkStarts[idx];
    const nextStart = idx < basePairLen - 1 ? chunkStarts[idx + 1] : mapEnd;
    const pairTextChunk = srcText.slice(chunkStart, nextStart);
    return [
      {
        key: stringKey,
        pair,
        group: keyGroup,
        groupPosition: keyGroups[keyGroup].expectedGroupPosition,
        originalIndex: idx,
        location: pair.key.loc,
        textChunk: pairTextChunk,
        chunkStart
      }
    ];
  });
};
var assignPositions = (richPairs, keyGroups) => {
  const collator = new Intl.Collator("en", {
    sensitivity: "base",
    // case- and accent-insensitive
    numeric: true
    // "k2" < "k10"
  });
  const presentKeys = {
    meta: [],
    default: [],
    locales: [],
    other: []
  };
  for (const p of richPairs) presentKeys[p.group].push(p.key);
  const expectedMetaOrder = keyGroups.meta.permittedKeys.filter(
    (k) => presentKeys.meta.includes(k)
  );
  const expectedLocalesOrder = [...presentKeys.locales].sort(collator.compare);
  const expectedOtherOrder = [...presentKeys.other].sort(collator.compare);
  const idx = {
    meta: new Map(expectedMetaOrder.map((k, i) => [k, i])),
    locales: new Map(expectedLocalesOrder.map((k, i) => [k, i])),
    other: new Map(expectedOtherOrder.map((k, i) => [k, i]))
  };
  return richPairs.map((p) => ({
    ...p,
    expectedPositionInGroup: p.group === "meta" ? idx.meta.get(p.key) ?? 0 : p.group === "default" ? 0 : p.group === "locales" ? idx.locales.get(p.key) ?? 0 : idx.other.get(p.key) ?? 0
  }));
};
var getKeyGroup = (key, keyGroups) => {
  if (keyGroups.meta.permittedKeys.includes(key)) return "meta";
  if (key === keyGroups.default.permittedKeys[0]) return "default";
  if (keyGroups.locales.permittedKeys.includes(key)) return "locales";
  return "other";
};
var byRank = (a, b) => a.groupPosition - b.groupPosition || a.expectedPositionInGroup - b.expectedPositionInGroup || a.originalIndex - b.originalIndex;

// src/rule-max-depth.ts
var import_yaml_eslint_parser5 = require("yaml-eslint-parser");
var maxDepth = creator_default({
  name: "max-depth",
  meta: {
    type: "problem",
    docs: {
      description: "Constrain nesting depth in i18n YAML files"
    },
    messages: {
      exceededMaxDepth: "Depth limit exceeded at '{{locale}}.{{path}}': mapping has depth {{currentDepth}} which exceeds the permitted maximum of {{maxDepth}}"
    },
    schema: [
      {
        type: "object",
        properties: {
          maxDepth: { type: "number", minimum: 0 }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions: [
    {
      maxDepth: MAX_NESTING_DEPTH
    }
  ],
  create(context, [options]) {
    const { maxDepth: maxDepth2 } = options;
    return {
      YAMLDocument(doc) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;
        descend(root, 0, [], context, maxDepth2);
      }
    };
  }
});
var rule_max_depth_default = maxDepth;
var descend = (node, currentDepth, path, context, maxDepth2) => {
  if (!isYamlMapping(node)) return;
  for (const pair of node.pairs) {
    if (!pair.key) continue;
    const updatedDepth = currentDepth + 1;
    const updatedPath = path.concat(getKey(pair));
    if (updatedDepth > maxDepth2) {
      context.report({
        loc: node.loc,
        messageId: "exceededMaxDepth",
        data: {
          locale: path[0],
          path: updatedPath.slice(1).join("."),
          currentDepth: updatedDepth,
          maxDepth: maxDepth2
        }
      });
    }
    if (!pair.value) continue;
    descend(pair.value, updatedDepth, updatedPath, context, maxDepth2);
  }
};
var getKey = (pair) => {
  if (!pair || !pair.key) return "";
  return String((0, import_yaml_eslint_parser5.getStaticYAMLValue)(pair.key));
};

// src/rule-placeholder-format.ts
var import_yaml_eslint_parser6 = require("yaml-eslint-parser");
var MESSAGE_IDS = [
  "forbiddenWhitespace",
  "invalidCasing",
  "invalidFirstCharacter",
  "forbiddenReservedKey",
  "forbiddenInvisibleChars",
  "invalidCharset",
  "emptyPlaceholder"
];
var placeholderFormat = creator_default({
  name: "placeholder-format",
  meta: {
    type: "problem",
    docs: {
      description: "Enforce placeholder formatting rules in i18n YAML files."
    },
    schema: [
      {
        type: "object",
        properties: {
          casing: { type: "string", default: "camelCase" },
          mode: { type: "string", default: "standard" },
          checks: {
            type: "object",
            properties: {
              forbiddenWhitespace: { type: "boolean", default: true },
              invalidCasing: { type: "boolean", default: true },
              invalidFirstCharacter: { type: "boolean", default: true },
              forbiddenReservedKey: { type: "boolean", default: true },
              forbiddenInvisibleChars: { type: "boolean", default: true },
              invalidCharset: { type: "boolean", default: true },
              emptyPlaceholder: { type: "boolean", default: true }
            }
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      forbiddenWhitespace: "Spaces/multiple tokens are not permitted inside placeholders",
      invalidCasing: "Placeholders must follow {{chosenCasing}}. '{{raw}}' is invalid",
      invalidFirstCharacter: "Placeholders must start with a letter. '{{raw}}' is invalid",
      forbiddenReservedKey: "Placeholder '{{raw}}' is a reserved key and cannot be used (e.g., `constructor`, `hasOwnProperty`)",
      forbiddenInvisibleChars: "Placeholder '{{raw}}' contains disallowed invisible or control characters",
      invalidCharset: "Placeholder '{{raw}}' contains invalid characters. Only ASCII letters, digits, '_' and '-' are allowed",
      emptyPlaceholder: "Empty placeholders '{}' are not allowed"
    }
  },
  defaultOptions: [
    {
      casing: "camelCase",
      mode: "standard",
      checks: Object.fromEntries(MESSAGE_IDS.map((id) => [id, true]))
    }
  ],
  create(context, [options]) {
    return {
      YAMLDocument(doc) {
        if (!isYamlMapping(doc.content)) return;
        for (const localeBlock of doc.content.pairs) {
          if (!localeBlock.key || !localeBlock.value) continue;
          dfsPhs(localeBlock.value, options, context);
        }
      }
    };
  }
});
var rule_placeholder_format_default = placeholderFormat;
var dfsPhs = (node, opts, ctx) => {
  if (node.type === "YAMLScalar") {
    const v = (0, import_yaml_eslint_parser6.getStaticYAMLValue)(node);
    if (typeof v !== "string") return;
    const phs = getPlaceholdersFromScalar(node, opts.mode, ctx);
    for (const ph of phs) {
      const checks = checkPh(ph.innerPh, opts);
      if (!checks.report) continue;
      reportPhs(ph.innerPh, ph.loc, checks, opts, ctx);
    }
  } else if (isYamlMapping(node)) {
    for (const pair of node.pairs) {
      if (!pair.value) continue;
      dfsPhs(pair.value, opts, ctx);
    }
  } else if (isYamlSequence(node)) {
    for (const item of node.entries) {
      if (!item) continue;
      dfsPhs(item, opts, ctx);
    }
  }
};
var findIcuSpans = (text) => {
  const spans = [];
  for (const m of text.matchAll(PH_FINDER_ICU_ON)) {
    if (!m[0].endsWith(",")) continue;
    let i = (m.index ?? 0) + m[0].length;
    let depth = 1;
    while (i < text.length && depth > 0) {
      const ch = text[i++];
      if (ch === "{") depth++;
      else if (ch === "}") depth--;
    }
    spans.push([m.index ?? 0, i]);
  }
  return spans;
};
var insideAnyIcuBody = (pos, spans) => spans.some(([s, e]) => pos > s && pos < e);
var getPlaceholdersFromScalar = (scalar, mode, ctx) => {
  const icuOn = mode === "icu";
  const src = ctx.sourceCode;
  const [nodeStart, nodeEnd] = scalar.range;
  const raw = src.text.slice(nodeStart, nodeEnd);
  const RE = icuOn ? PH_FINDER_ICU_ON : PH_FINDER_ICU_OFF;
  const icuSpans = icuOn ? findIcuSpans(raw) : [];
  const phs = [];
  for (const m of raw.matchAll(RE)) {
    const fullIdx = m.index;
    const innerPh = m[1];
    if (icuOn && insideAnyIcuBody(fullIdx, icuSpans)) continue;
    const startInMatch = m[0].indexOf(innerPh);
    const absStart = nodeStart + fullIdx + (icuOn ? startInMatch : 0);
    const absEnd = absStart + (icuOn ? innerPh.length : m[0].length);
    phs.push({
      innerPh,
      indexInRaw: fullIdx,
      loc: {
        start: src.getLocFromIndex(absStart),
        end: src.getLocFromIndex(absEnd)
      }
    });
  }
  return phs;
};
var checkPh = (ph, opts) => {
  const checks = {
    report: false,
    forbiddenReservedKey: RESERVED_PLACEHOLDER_KEYS.has(ph),
    emptyPlaceholder: ph.trim().length === 0,
    invalidCasing: !CASING_REGEXES[opts.casing ?? "camelCase"].test(ph)
  };
  for (const [checkName, checkRe] of Object.entries(REGEX_CHECKS)) {
    checks[checkName] = checkRe.test(ph);
  }
  if (Object.values(checks).some((v) => v === true)) {
    checks.report = true;
  }
  return checks;
};
var reportPhs = (ph, phLoc, checks, opts, ctx) => {
  for (const [checkName, checkOutcome] of Object.entries(checks)) {
    if (!checkOutcome || !isMessageId(checkName) || opts.checks[checkName] === false)
      continue;
    ctx.report({
      loc: phLoc,
      messageId: checkName,
      data: {
        raw: ph,
        ...checkName === "invalidCasing" ? { chosenCasing: opts.casing } : {}
      }
    });
  }
};
var isMessageId = (maybeMsgId) => {
  return typeof maybeMsgId === "string" && MESSAGE_IDS.includes(maybeMsgId);
};
var REGEX_CHECKS = {
  // Zero-width / Bidi controls (expand if policy requires more)
  forbiddenInvisibleChars: /[\u200B-\u200D\uFEFF\u200E\u200F\u061C\u202A-\u202E\u2066-\u2069]/,
  // Any whitespace in the inner token
  forbiddenWhitespace: /\s/,
  // Contains invalid chars (anything not ASCII letter/digit or '_'/'-' or spaces (covered by whitespace rule))
  invalidCharset: /[^A-Za-z0-9_\-\s]/,
  // First char is not a letter
  invalidFirstCharacter: /^[^A-Za-z]/
};
var CASING_REGEXES = {
  camelCase: /^[a-z][a-z0-9]*(?:[A-Z][a-z0-9]*)*$/,
  "kebab-case": /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/,
  PascalCase: /^[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)*$/,
  snake_case: /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/,
  SCREAMING_CASE: /^[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*$/
};
var PH_FINDER_ICU_OFF = /(?!\{\{)\{([^}]*)\}/g;
var PH_FINDER_ICU_ON = /(?<!\{)\{(?!\{)\s*([^,}]+?)\s*(?:,|})/g;
var RESERVED_PLACEHOLDER_KEYS = /* @__PURE__ */ new Set([
  // Prototype pollution / object meta
  "__proto__",
  "prototype",
  "constructor",
  // Object.prototype methods
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf",
  // Function / constructor internals
  "apply",
  "bind",
  "call",
  "arguments",
  "caller",
  // Other dangerous/ambiguous ones
  "__defineGetter__",
  "__defineSetter__",
  "__lookupGetter__",
  "__lookupSetter__",
  "eval"
]);
var DEFAULT_CHECKS = Object.fromEntries(
  MESSAGE_IDS.map((id) => [id, true])
);

// src/rule-placeholder-parity.ts
var import_yaml_eslint_parser7 = require("yaml-eslint-parser");

// src/shared-parity.ts
var prepareLocs = (locsArr) => {
  return locsArr.length > 3 ? locsArr.slice(0, 3).join(", ").concat(`, \u2026 (+${locsArr.length - 3})`) : locsArr.join(", ");
};
var formatDisplayKey = (fullPath) => {
  const relPath = fullPath.slice(1);
  if (relPath.length === 0) return "";
  let i = relPath.length - 1;
  const indices = [];
  while (i >= 0 && /^\d+$/.test(relPath[i])) {
    indices.unshift(relPath[i]);
    i--;
  }
  const base = relPath[i];
  if (base !== void 0) {
    return base + indices.map((n) => `[${n}]`).join("");
  }
  return indices.length ? `[${indices.join("][")}]` : relPath[relPath.length - 1];
};

// src/rule-placeholder-parity.ts
var placeholderParity = creator_default({
  name: "placeholder-parity",
  meta: {
    type: "problem",
    docs: {
      description: "Enforce usage of identical placeholders in reciprocal keys across locales."
    },
    schema: [],
    messages: {
      placeholderDisparity: "Placeholder usage for key '{{reportedKey}}' is not consistent across locales ({{variants}}) \u2022 {{usageList}}"
    }
  },
  defaultOptions: [],
  create(context) {
    return {
      YAMLDocument(doc) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;
        const kppMap = /* @__PURE__ */ new Map();
        for (const localeBlock of root.pairs) {
          if (!localeBlock.key || !localeBlock.value) continue;
          const stringLocKey = String((0, import_yaml_eslint_parser7.getStaticYAMLValue)(localeBlock.key));
          if (!isLocaleCode(stringLocKey)) continue;
          dfsPlaceholders(localeBlock.value, [stringLocKey], kppMap);
        }
        for (const v of kppMap.values()) {
          const variants = v.usageMap.size;
          if (variants <= 1) continue;
          for (const loc of v.locations) {
            context.report({
              loc,
              messageId: "placeholderDisparity",
              data: {
                reportedKey: v.key,
                usageList: formatPlaceholderUsageListMessage(v.usageMap),
                variants: `${variants} variants`
              }
            });
          }
        }
      }
    };
  }
});
var rule_placeholder_parity_default = placeholderParity;
var formatPlaceholderUsageListMessage = (usageMap) => {
  let msgArr = [];
  for (const [key, value] of usageMap) {
    const locsArr = Array.from(value).sort();
    const formattedLocs = prepareLocs(locsArr);
    const phsArr = JSON.parse(key).map((k) => `{${k}}`).sort();
    const phs = phsArr.length > 0 ? phsArr.join(", ") : "\u2205";
    msgArr.push({
      locales: locsArr,
      localesCount: locsArr.length,
      placeholders: phsArr,
      displayMsg: formattedLocs + " \u2192 " + phs
    });
  }
  msgArr.sort(
    (a, b) => b.localesCount - a.localesCount || b.placeholders.length - a.placeholders.length || (a.locales[0] ?? "").localeCompare(b.locales[0] ?? "") || a.placeholders.join("|").localeCompare(b.placeholders.join("|"))
  );
  return msgArr.map((m) => m.displayMsg).join("; ");
};
var formatDisplayKey2 = (fullPath) => {
  const relPath = fullPath.slice(1);
  if (relPath.length === 0) return "";
  let i = relPath.length - 1;
  const indices = [];
  while (i >= 0 && /^\d+$/.test(relPath[i])) {
    indices.unshift(relPath[i]);
    i--;
  }
  const base = relPath[i];
  if (base !== void 0) {
    return base + indices.map((n) => `[${n}]`).join("");
  }
  return indices.length ? `[${indices.join("][")}]` : relPath[relPath.length - 1];
};
var updateKppMap = (kppMap, loc, path, phs, locale) => {
  const strId = JSON.stringify(path.slice(1));
  const phsUniqueArray = Array.from(new Set(phs.sort()));
  const phId = JSON.stringify(phsUniqueArray);
  const displayKey = formatDisplayKey2(path);
  if (!kppMap.has(strId)) {
    const keyInfo = {
      key: displayKey,
      usageMap: /* @__PURE__ */ new Map([
        [phId, /* @__PURE__ */ new Set([locale])]
      ]),
      locations: /* @__PURE__ */ new Set([loc])
    };
    kppMap.set(strId, keyInfo);
  } else {
    const keyPhInfo = kppMap.get(strId);
    keyPhInfo?.locations.add(loc);
    if (keyPhInfo?.usageMap.has(phId)) {
      keyPhInfo.usageMap.get(phId)?.add(locale);
    } else {
      keyPhInfo?.usageMap.set(phId, /* @__PURE__ */ new Set([locale]));
    }
  }
};
var dfsPlaceholders = (node, currPath, kppMap) => {
  if (node.type === "YAMLScalar") {
    const phs = [...String(node.value).matchAll(PH_RE)].map((m) => m[1]);
    if (phs && isLocaleCode(currPath[0]) && node.loc) {
      updateKppMap(kppMap, node.loc, currPath, phs, currPath[0]);
    }
  } else if (isYamlMapping(node)) {
    for (const pair of node.pairs) {
      const pV = pair.value;
      if (!pair.key || !pV) continue;
      const stringKey = String((0, import_yaml_eslint_parser7.getStaticYAMLValue)(pair.key));
      currPath.push(stringKey);
      dfsPlaceholders(pV, currPath, kppMap);
      currPath.pop();
    }
  } else if (isYamlSequence(node)) {
    for (const [idx, item] of node.entries.entries()) {
      if (!item) continue;
      currPath.push(String(idx));
      dfsPlaceholders(item, currPath, kppMap);
      currPath.pop();
    }
  }
};

// src/rule-value-parity.ts
var import_yaml_eslint_parser8 = require("yaml-eslint-parser");
var DEFAULT_CHECKS2 = {
  valueType: true,
  arrayLength: true
};
var valueParity = creator_default({
  name: "value-parity",
  meta: {
    type: "problem",
    docs: {
      description: "Enforces value type and shape parity for reciprocal keys across locales."
    },
    schema: [
      {
        type: "object",
        properties: {
          checks: {
            type: "object",
            additionalProperties: false,
            properties: {
              valueType: { type: "boolean", default: true },
              arrayLength: { type: "boolean", default: true }
            }
          },
          ignoredKeys: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
            default: []
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      valueTypeDisparity: "Value types for key '{{reportedKey}}' do not match across locales ({{variants}}) \u2022 {{usageList}}",
      arrayLengthDisparity: "Array lengths for key '{{reportedKey}}' do not match across locales ({{variants}}) \u2022 {{usageList}}"
    }
  },
  defaultOptions: [{ checks: DEFAULT_CHECKS2, ignoredKeys: [] }],
  create(context, [options]) {
    const { checks, ignoredKeys } = options;
    const ignoredKeysSet = new Set(ignoredKeys);
    return {
      YAMLDocument(doc) {
        if (!isYamlMapping(doc.content)) return;
        const kMap = /* @__PURE__ */ new Map();
        for (const localeBlock of doc.content.pairs) {
          if (!localeBlock.key || !localeBlock.value) continue;
          const strKey = String((0, import_yaml_eslint_parser8.getStaticYAMLValue)(localeBlock.key));
          if (!isLocaleCode(strKey)) continue;
          valueDfs(localeBlock.value, kMap, [strKey]);
        }
        for (const [k, v] of kMap) {
          const typeVariants = v.usageMap.size;
          const lenVariants = v.arrLenMap.size;
          if (typeVariants <= 1 && lenVariants <= 1 || ignoreKey(k, ignoredKeysSet))
            continue;
          const isAllValsSeq = Array.from(v.usageMap.keys()).every(
            (k2) => k2 === "sequence"
          );
          if (checks?.arrayLength && lenVariants > 1 && isAllValsSeq) {
            for (const loc of v.locations) {
              context.report({
                loc,
                messageId: "arrayLengthDisparity",
                data: {
                  reportedKey: v.key,
                  usageList: formatValueUsageListMessage(v.arrLenMap),
                  variants: `${lenVariants} variants`
                }
              });
            }
          }
          if (checks?.valueType && typeVariants > 1) {
            for (const loc of v.locations) {
              context.report({
                loc,
                messageId: "valueTypeDisparity",
                data: {
                  reportedKey: v.key,
                  usageList: formatValueUsageListMessage(v.usageMap),
                  variants: `${typeVariants} variants`
                }
              });
            }
          }
        }
      }
    };
  }
});
var rule_value_parity_default = valueParity;
var isIndexPattern = (s) => /^\[\d+\]$/.test(s);
var isBareNumeric = (s) => /^\d+$/.test(s);
var ignoreKey = (stringifiedKeyPath, ignoredKeys) => {
  const parsedKeyPath = JSON.parse(stringifiedKeyPath);
  for (const igKey of ignoredKeys) {
    const trimIgKey = igKey.trim();
    const isIgKeyAnchored = trimIgKey.endsWith(".*");
    const igKeyWithoutSyntacticSugar = isIgKeyAnchored ? trimIgKey.slice(0, -2) : trimIgKey;
    const dotSplitIgKeySegs = igKeyWithoutSyntacticSugar.split(".");
    const hasIgKeyPathSegWildcard = igKeyWithoutSyntacticSugar.includes("*");
    const hasIgKeyMultipleSegs = dotSplitIgKeySegs.length > 1;
    const normalizedIgnoreKey = hasIgKeyMultipleSegs && isLocaleCode(dotSplitIgKeySegs[0]) ? dotSplitIgKeySegs.slice(1).join(".").trim() : igKeyWithoutSyntacticSugar.trim();
    if (!normalizedIgnoreKey || normalizedIgnoreKey === "*") continue;
    if (!normalizedIgnoreKey.includes(".")) {
      if (hasIgKeyPathSegWildcard) {
        for (const i of parsedKeyPath.keys()) {
          if (checkWildcardSegment(normalizedIgnoreKey, parsedKeyPath, i))
            return true;
        }
        continue;
      } else if (isIndexPattern(normalizedIgnoreKey)) {
        if (parsedKeyPath.includes(normalizedIgnoreKey)) return true;
      } else if (isBareNumeric(normalizedIgnoreKey)) {
        for (const seg of parsedKeyPath) {
          if (seg === normalizedIgnoreKey) return true;
        }
      } else {
        for (const ps of parsedKeyPath) {
          if (segEqualsOrBracketed(normalizedIgnoreKey, ps)) return true;
        }
      }
      continue;
    }
    let pathMatching = true;
    let fullPathConsumed = false;
    const splitNormIgKey = normalizedIgnoreKey.split(".");
    for (const [idx, seg] of splitNormIgKey.entries()) {
      if (!pathMatching || idx >= parsedKeyPath.length) break;
      if (seg === "*") continue;
      const isLastSeg = idx === splitNormIgKey.length - 1;
      pathMatching = seg.startsWith("*") || seg.endsWith("*") ? checkWildcardSegment(seg, parsedKeyPath, idx) : segEqualsOrBracketed(seg, parsedKeyPath[idx]);
      if (isLastSeg) fullPathConsumed = true;
    }
    if (pathMatching && fullPathConsumed) return true;
    if ((hasIgKeyMultipleSegs || isIgKeyAnchored) && !hasIgKeyPathSegWildcard) {
      if (checkRootAnchoredPrefixPathMatch(normalizedIgnoreKey, parsedKeyPath))
        return true;
      continue;
    }
  }
  return false;
};
var normalizeKeyPath = (fullPath) => {
  if (fullPath.length <= 1) return [...fullPath];
  const locale = fullPath[0];
  const rel = fullPath.slice(1);
  if (rel.length === 0) return [locale];
  let i = rel.length - 1;
  const idxs = [];
  while (i >= 0 && /^\d+$/.test(rel[i])) {
    idxs.unshift(rel[i]);
    i--;
  }
  if (idxs.length === 0) return [...fullPath];
  const base = rel[i];
  const folded = base !== void 0 ? base + idxs.map((n) => `[${n}]`).join("") : `[${idxs.join("][")}]`;
  const prefix = base !== void 0 ? rel.slice(0, i) : [];
  return [locale, ...prefix, folded];
};
var segEqualsOrBracketed = (ignoreSeg, pathSeg) => {
  if (ignoreSeg === pathSeg) return true;
  if (ignoreSeg.includes("[") || ignoreSeg.includes("*")) return false;
  const base = pathSeg.split("[", 1)[0];
  return base === ignoreSeg;
};
var checkWildcardSegment = (segment, keyPath, idx) => {
  if (segment.startsWith("*") && segment.endsWith("*")) return false;
  if (segment.startsWith("*") && keyPath[idx].endsWith(segment.slice(1)) || segment.endsWith("*") && keyPath[idx].startsWith(segment.slice(0, -1))) {
    return true;
  }
  return false;
};
var checkRootAnchoredPrefixPathMatch = (ignoreKey2, parsedKeyToCheck) => {
  for (const [idx, seg] of ignoreKey2.split(".").entries()) {
    if (!segEqualsOrBracketed(seg, parsedKeyToCheck[idx])) return false;
  }
  return true;
};
var valueDfs = (node, kMap, currPath) => {
  const nodeLen = isYamlSequence(node) ? node.entries.length : 0;
  updateKMap(kMap, {
    path: currPath,
    nodeType: typeTag(node),
    loc: node.loc,
    locale: currPath[0],
    nodeLength: nodeLen
  });
  if (isYamlMapping(node)) {
    for (const pair of node.pairs) {
      if (!pair?.key || !pair?.value) continue;
      const strKey = String((0, import_yaml_eslint_parser8.getStaticYAMLValue)(pair.key));
      currPath.push(strKey);
      valueDfs(pair.value, kMap, currPath);
      currPath.pop();
    }
    return;
  }
  if (node.type === "YAMLSequence") {
    for (const [idx, item] of node.entries.entries()) {
      currPath.push(String(idx));
      if (!item) {
        updateKMap(kMap, {
          path: currPath,
          nodeType: "null",
          loc: node.loc,
          locale: currPath[0],
          nodeLength: 0
        });
        currPath.pop();
        continue;
      }
      valueDfs(item, kMap, currPath);
      currPath.pop();
    }
  }
};
var typeTag = (node) => {
  if (isYamlMapping(node)) return "mapping";
  if (isYamlSequence(node)) return "sequence";
  if (node.type === "YAMLScalar") {
    const v = (0, import_yaml_eslint_parser8.getStaticYAMLValue)(node);
    if (v === null || v === void 0) return "null";
    const t = typeof v;
    return t === "string" || t === "number" || t === "boolean" ? t : "string";
  }
  return "null";
};
var formatValueUsageListMessage = (usageMap) => {
  let msgArr = [];
  for (const [key, value] of usageMap) {
    const locsArr = Array.from(value).sort();
    const formattedLocs = prepareLocs(locsArr);
    msgArr.push({
      locales: locsArr,
      localesCount: locsArr.length,
      valueType: key,
      displayMsg: formattedLocs + " \u2192 " + key
    });
  }
  msgArr.sort(
    (a, b) => b.localesCount - a.localesCount || (a.locales[0] ?? "").localeCompare(b.locales[0] ?? "") || (a.valueType ?? "").localeCompare(b.valueType ?? "")
  );
  return msgArr.map((m) => m.displayMsg).join("; ");
};
var updateKMap = (kMap, keyInfo) => {
  const { loc, path, nodeType, locale } = keyInfo;
  const lastPathSeg = formatDisplayKey(path);
  const compressedPath = normalizeKeyPath(path);
  const strPathId = JSON.stringify(compressedPath.slice(1));
  const arrLenId = JSON.stringify(
    nodeType === "sequence" ? keyInfo.nodeLength : 0
  );
  if (!kMap.has(strPathId)) {
    const newKeyInfo = {
      key: lastPathSeg,
      usageMap: /* @__PURE__ */ new Map([
        [nodeType, /* @__PURE__ */ new Set([locale])]
      ]),
      arrLenMap: /* @__PURE__ */ new Map([
        [arrLenId, /* @__PURE__ */ new Set([locale])]
      ]),
      locations: /* @__PURE__ */ new Set([loc])
    };
    kMap.set(strPathId, newKeyInfo);
  } else {
    const existingKeyInfo = kMap.get(strPathId);
    existingKeyInfo?.locations.add(loc);
    if (existingKeyInfo?.usageMap.has(nodeType)) {
      existingKeyInfo.usageMap.get(nodeType)?.add(locale);
    } else {
      existingKeyInfo?.usageMap.set(nodeType, /* @__PURE__ */ new Set([locale]));
    }
    if (existingKeyInfo?.arrLenMap.has(arrLenId)) {
      existingKeyInfo.arrLenMap.get(arrLenId)?.add(locale);
    } else {
      existingKeyInfo?.arrLenMap.set(arrLenId, /* @__PURE__ */ new Set([locale]));
    }
  }
};

// index.ts
var PLUGIN_NAME = "i18n-yaml";
var rawRules = {
  "default-locale-present": rule_default_locale_present_default,
  "allowed-root-keys": rule_allowed_root_keys_default,
  "deep-key-parity": rule_deep_key_parity_default,
  "placeholder-parity": rule_placeholder_parity_default,
  "max-depth": rule_max_depth_default,
  "key-order": rule_key_order_default,
  "placeholder-format": rule_placeholder_format_default,
  "value-parity": rule_value_parity_default
};
var rules = Object.fromEntries(
  Object.entries(rawRules).map(([k, v]) => [k, v])
);
var configs = {
  recommended: [
    {
      name: "i18n-yaml:recommended",
      files: ["**/*.yml", "**/*.yaml"],
      // or your narrower *.i18n.yml pattern
      languageOptions: { parser: import_yaml_eslint_parser9.default },
      plugins: { [PLUGIN_NAME]: { rules } },
      rules: Object.fromEntries(
        Object.keys(rules).map((name) => [`${PLUGIN_NAME}/${name}`, "warn"])
      )
    }
  ]
};
var index_default = { rules, configs };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PLUGIN_NAME,
  configs,
  rules
});
