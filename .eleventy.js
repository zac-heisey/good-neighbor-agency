//== Eleventy Config File ==//

module.exports = function(eleventyConfig) {

  // Add passthrough directories & files
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('_redirects');

  // Sections collection (sorted by 'order' field)
  eleventyConfig.addCollection('sections', collection => {

    return collection.getFilteredByGlob('sections/*.md')
      .sort((a, b) => a.data.order > b.data.order ? 1 : -1);

  });

  /* Markdown-It 'markdownify' filter
   * source: https://github.com/BradCoffield/kidlitconnection/commit/e42a6dee1021be4b1869e4b62582230aed5db84e)
  */
  const md = require('markdown-it')({

    html: true,
    linkify: true,
    typographer: true,

  });

    eleventyConfig.addFilter('markdownify', (markdownString) =>
    md.render(markdownString)

  );

  // Manual passthrough template extensions
  return {

    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'

  };

};
