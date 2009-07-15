$(function(){
  $('input[name=search]').click(function(){
    var keywords = $('input[name=keywords]').val()
    $('table.vehicles tbody tr').search(keywords, function(keywords){
      var matches = $.map(this.children('td'), function(td){
        return $(td).text().match(keywords)
      })
      return !matches.length
    })
  })
})