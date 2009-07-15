
// Inline Search - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

(function($){
  
  $.search = function(elements, search, filter) {
    filter = $.search.filters[filter] || filter || $.search.filters['by substring']
    $(elements).each(function() {
      $(this)[filter.call($(this), search) ? 'hide' : 'show']()
    })
  }
  
  $.fn.search = function(search, filter) {
    return $.search(this, search, filter)
  }
  
  $.search.filters = {
    'by substring' : function(search) {
      return ! this.text().match(search)  
    },
    
    'by keyword' : function(search) {
      var words = this.text().split(' ')
      var keywords = search.split(' ')
      for (var i = 0, len = keywords.length; i < len; ++i)
        if ($.inArray(keywords[i], words) != -1)
          return false
      return true
    }
  }
  
  $.search.version = '0.0.1'
  
})(jQuery)