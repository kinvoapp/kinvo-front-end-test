//Java Script responsavel por fazer a pesquisa...
$(document).ready(function() {
  $(".search").keyup(function () {

    //Declaração de variaveis.
    var searchTerm = $(".search").val();
    var listItem = $('.results tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });
    //Estruturas responsveis pela pesquisa de dados.
  $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','false');
  });

  $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
  });

  var jobCount = $('.results tbody tr[visible="true"]').length;
    $('.counter').text(jobCount + ' item');

  //Estrutura Condicional "If" responsavel por exibir a mensagem contida em ".no-result">
  if(jobCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}
		  });
});