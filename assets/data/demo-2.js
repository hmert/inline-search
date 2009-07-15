$(function() {
  $('input[name=keywords]').keyup(function(){
    $('ul.users li').search($(this).val())
  })
})