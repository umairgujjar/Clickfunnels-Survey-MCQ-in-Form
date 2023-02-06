<script>
$(function(){
  $('.row[data-title~="question"] .elSelectFormBox .elInputLabel').hide();
  $('[data-title~="last-step"]').hide();
  $('.row[data-title~="question"]').hide();
  $('.row[data-title~="question"]').first().show();
  
  $('.row[data-title~="question"] .elBTN').click(function(e){
	  e.preventDefault();
	  var thisROw = $(this).parents('.row');
	  var btnArray = thisROw.find('.elBTN');
	  var kitnwa = btnArray.index(this);
	  //console.log(kitnwa);
	  thisROw.find("select option:eq("+kitnwa+")").attr("selected", "selected");
  });
});
</script>
