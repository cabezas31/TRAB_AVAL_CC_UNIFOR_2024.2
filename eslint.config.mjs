/* eslint-disable no-magic-numbers */
import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        rules: {
            "eol-last": "error",
            indent: [
                "error",
                4,
                {
                    SwitchCase: 1,
                },
            ],
            "linebreak-style": "off",
            "max-len": ["error", 120],
            "max-lines-per-function": ["warn", 30],
            "object-curly-spacing": ["error", "always"],
            quotes: ["error", "double"],
            "quote-props": ["error", "as-needed"],
            semi: ["error", "always"],
            "no-magic-numbers": ["error", { ignore: [0, 1] }],
            "consistent-return": "error",
            "max-lines": [
                "error",
                { max: 300, skipBlankLines: true, skipComments: true },
            ],
            complexity: ["error", 5],
            "max-params": ["error", 4],
            "no-duplicate-imports": "error",
            "prefer-const": "error",
            "no-unused-expressions": [
                "error",
                { allowShortCircuit: true, allowTernary: true },
            ],
            "prefer-template": "error",
        },
        ignores: ["**/node_modules/**"]
    },
];

