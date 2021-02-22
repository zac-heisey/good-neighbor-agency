//== Eleventy Config File ==//

module.exports = function(eleventyConfig) {

  // Add passthrough directories
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');

  // Sections collection (sorted by 'order' field)
  eleventyConfig.addCollection('sections', collection => {

    return collection.getFilteredByGlob('sections/*.md')
      .sort((a, b) => a.data.order > b.data.order ? 1 : -1);

  });

  // Manual passthrough template extensions
  return {

    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'

  };

};
