module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:vue/recommended',
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        indent: ['error', 4, { SwitchCase: 1 }],
    },
};
