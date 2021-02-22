//== Eleventy Config File ==//

module.exports = function(eleventyConfig) {

  // Add passthrough directories
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');

  // Home sections collection
  eleventyConfig.addCollection('sections', collection => {

    return collection.getFilteredByGlob('sections/*.md');

  });

  // Manual passthrough template extensions
  return {

    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'

  };

};
