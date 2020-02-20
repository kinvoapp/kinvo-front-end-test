<script type="text/javascript">
    $(function(){
        $("#txtBusca").keyup(function () {
            var texto = $(this).val();

            $("#ulItens li").css("display", "block");
            $("#ulItens li").each(function () {
                if ($(this).text().indexOf(texto) < 0)
                    $(this).css("display", "none");
            });
        });
});
</script>