const CleanCSS = require('clean-css');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images');

    eleventyConfig.addFilter('cssmin', function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    return {
        templateFormats: [
            'md',
            'njk',
            'html',
            'css'
        ],
        markdownTemplateEngine: 'njk',
        htmlTemaplteEngine: 'njk',
        passthroughFileCopy: true,
        pathPrefix: '/'
    };
};
