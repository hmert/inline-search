
// Inline Search - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

(function($){
  
  $.search = function(elements, search, filter) {
    filter = $.search.filters[filter] || filter || $.search.filters['by substring']
    $(elements).each(function() {
      $(this)[filter.call($(this), search) ? 'hide' : 'show']()
    })
  }
  
  $.search.filters = {
    'by substring' : function(search) {
      return ! this.text().match(search)  
    },
    
    'by keyword' : function(search) {
      var words = this.text().split(' ')
      var keywords = search.split(' ')
      for (var i = 0, len = keywords.length; i < len; ++i)
        for (var j = 0, jlen = words.length; j < jlen; ++j)
          if (keywords[i] == words[j])
            return false
      return true
    }
  }
  
})(jQuery)