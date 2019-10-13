const CleanCSS = require('clean-css');
const HTMLMin = require('html-minifier');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images');

    // Inline and minify CSS
    eleventyConfig.addFilter('cssmin', code => {
        return new CleanCSS({}).minify(code).styles;
    });

    // Minify HTML
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
        if (outputPath.endsWith('.html')) {
            return HTMLMin.minify(content, {
                useShortDocType: true,
                removeComments: true,
                collapseWhitespace: true
            });
        }
        return content;
    });

    return {
        templateFormats: [
            'md',
            'njk',
            'html'
        ],
        markdownTemplateEngine: 'njk',
        htmlTemaplteEngine: 'njk',
        passthroughFileCopy: true,
        pathPrefix: '/'
    };
};
