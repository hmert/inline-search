
$(function(){
  var speed = 300
  
  $('.source pre').hide()
  
  $('.source a').toggle(function(){
    $(this).next('pre').slideDown(speed)
  }, function(){
    $(this).next('pre').slideUp(speed)
  })
  
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