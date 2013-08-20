/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {

    $("#btLogar").click(function() {
        var _cpf = $("#txtCpf").val();
        var _senha = $("#txtSenha").val();

        ConsumirWebServiceLogin(_cpf, _senha);

        var store = new Lawnchair({name: 'pontoMB'}, function(store) {
            var user = {
                key: 'userInfo',
                cpf: _cpf
            };
            store.save(user);
        });
    });

    function ConsumirWebServiceLogin(cpf, senha) {
        $.support.cors = true;
        $.ajax({
            type: "GET",
            url: "http://177.72.160.246:8080/WebService/ServicoMobile.svc/User/Login/?cpf="
                    + cpf + "&senha=" + senha,
            dataType: "json",
            cache: false,
            async: false,
            error: function(error) {
                alert(error);
            },
            success: function(data) {
                if (data.WS_LoginResult.Erro === null) {
                    $.mobile.changePage("#dadosUser", null, true, true);
                    $("#lbNomeUser").text(data.WS_LoginResult.Nome);
                    $("#lbCpfUser").text(cpf);
                    $("#lbNascUser").text(data.WS_LoginResult.DtNascimento);
                    $("#lbPisUser").text(data.WS_LoginResult.PIS);
                    $("#lbFuncUser").text(data.WS_LoginResult.Funcao);
                    $("#lbEmpUser").text(data.WS_LoginResult.Empresa);
                } else {
                    $.mobile.changePage("#dadosUser", null, true, true);
                    alert(data.WS_LoginResult.Erro);
                }
            }
        });
    }

    $("#bt_CartaoPonto").click(function() {
        window.location.replace("cartaoPonto.html");
    })
});
