
// Inline Search - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

(function($){
  var filters = {
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
  
  $.search = function(elements, search, filter) {
    filter = filters[filter] || filter || filters['by substring']
    $(elements).each(function() {
      $(this)[filter.call($(this), search) ? 'hide' : 'show']()
    })
  }
})(jQuery)