//== Eleventy Config File ==//

module.exports = function(eleventyConfig) {

  // Add passthrough directories
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('admin');

  // Manual passthrough template extensions
  return {

    templateFormats: ['md', 'html', 'yml', 'css', 'js', 'liquid', 'njk'],
    passthroughFileCopy: true

  };

};
