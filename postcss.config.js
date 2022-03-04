const postcssImport = require('postcss-import')

module.exports = {
    plugins: [
        postcssImport({
            plugins: [
                require('postcss-preset-env'),
                require('stylelint'),
                require('postcss-browser-reporter'),
            ],
        }),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer'),
        require('postcss-browser-reporter'),
    ],
}

// https://ismamz.github.io/postcss-utilities
// https://github.com/postcss/postcss-browser-reporter
// https://github.com/azat-io/postcss-responsive-images
// https://github.com/CSSSR/postcss-easy-z
// https://github.com/arccoza/postcss-aspect-ratio
// https://github.com/hail2u/node-css-mqpacker
// https://github.com/ChristianMurphy/postcss-combine-duplicated-selectors
