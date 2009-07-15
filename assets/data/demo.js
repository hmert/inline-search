
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
  
  $('input[name=keywords2]').keyup(function(){
    $('ul.users li').search($(this).val())
  })
  
  $('input[name=keywords3]').keyup(function(){
    $('ul.users2 li').search($(this).val(), 'by keyword')
  })
})