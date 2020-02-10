$(document).ready(function(){
    
    var urlString = "https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation";

    $.ajax ({
        url : urlString, 
        type : "get",
        dataType : "json",
        success: function(data){
            console.log(data);

            var objetivo = data;

            $("saldoBruto").val(objetivo.data.summary.grossBalance);
            $("valorAplicado").val(objetivo.data.appliedValue);
            $("ganhoDeCapital").val(objetivo.data.capitalGains);
            $("totalDistribuidos").val(objetivo.data.earnings);
            $("yield").val(objetivo.data.yield);
        } , 
        error : function(erro){
            console.log(erro);
        }
    });

});