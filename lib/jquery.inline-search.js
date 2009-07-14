
// Inline Search - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

(function($){
  var filters = {
    'by keyword' : function(keywords) {
      return ! this.text().match(keywords)
    }
  }
  
  $.search = function(elements, keywords, filter) {
    var filter = filters[filter] || filter || filters['by keyword']
    $(elements).each(function() {
      if (filter.call($(this), keywords))
        $(this).hide()
      else
        $(this).show()
    })
  }
})(jQuery)