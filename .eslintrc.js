module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
    ],
    rules: {
        'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
        indent: ['error', 4, { SwitchCase: 1 }],
    },
    globals: {},
};