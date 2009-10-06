
// Inline Search - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

;(function($){
  
  /**
   * Search _elements_ for _keywords_ using _filter_
   * and _lookup_ function.
   *
   * @param  {jQuery} elements
   * @param  {string} keywords
   * @param  {string, function} filter
   * @param  {function} lookup
   * @return {jQuery}
   * @api private
   */
  
  $.search = function(elements, keywords, filter, lookup) {
    keywords = $.trim(keywords)
    lookup = $.search.lookups[lookup] || lookup || function(){ return this }
    filter = $.search.filters[filter] || filter || $.search.filters['by substring']
    if (!keywords.length) filter = function(){ return false }
    return elements.each(function() {
      lookup.call($(this))[filter.call($(this), keywords) ? 'hide' : 'show']()
    })
  }
  
  /**
   * Search for _keywords_ using _filter_.
   *
   * @param  {string} keywords
   * @param  {string, function} filter
   * @param  {hash} options
   * @return {jQuery}
   * @api public
   */
  
  $.fn.search = function(keywords, filter, options) {
    options = options || {}
    return $.search(this, keywords, filter, options.remove)
  }
  
  // --- Filters
  
  $.search.filters = {
    'by substring': function(search) {
      return ! this.text().match(search)  
    },
    
    'by keyword': function(search) {
      var words = this.text().split(' ')
      var keywords = search.split(' ')
      for (var i = 0, len = keywords.length; i < len; ++i)
        if (words.indexOf(keywords[i]) != -1)
          return false
      return true
    }
  }
  
  // --- Lookups
  
  $.search.lookups = {
    parent: function() {
      return this.parent()
    }
  }
  
  // --- Version
  
  $.search.version = '1.0.0'
  
})(jQuery)