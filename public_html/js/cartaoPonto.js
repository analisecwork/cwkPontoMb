/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {

    var _cpf;

    var store = new Lawnchair({name: 'pontoMB'}, function(store) {
        store.get('userInfo', function(user) {
            _cpf = user.cpf;
        });
    });

    function InserirLinhasCartaoPonto(dia, marcacao, saldo, ref) {
        var html = "<div class=ui-block-a>" + dia + "</div>";
        html += "<div class=ui-block-b>" + marcacao + "</div>";
        html += "<div class=ui-block-c>" + saldo + "</div>";
        $("#insertAfter" + ref).after(html);
    }
    
    $("#lb_Jornada0").click(function () {
       window.location.replace("jornada.html");
    });
    $("#lb_Jornada1").click(function () {
       window.location.replace("jornada.html");
    });
    $("#lb_Jornada2").click(function () {
       window.location.replace("jornada.html");
    });

    GetDadosCartaoPonto();

    function GetDadosCartaoPonto() {
        $.support.cors = true;
        $.ajax({
            type: "GET",
            url: "http://177.72.160.246:8080/WebService/ServicoMobile.svc/User/CartaoPonto/?cpf=" + _cpf,
            dataType: "json",
            cache: false,
            async: false,
            error: function(error) {
                document.write('Ajax Error: ' + error);
            },
            success: function(data) {
                for (var j = 0; j < data.WS_GetCartaoPontoResult[0].qntCartoesMes; j++) {
                    var _dia = data.WS_GetCartaoPontoResult[0].listaCartaoPonto[j].Dia + "<br/>";
                        _dia += data.WS_GetCartaoPontoResult[0].listaCartaoPonto[j].Data;
                    var _marc = data.WS_GetCartaoPontoResult[0].listaCartaoPonto[j].EntradaSaida1 + "<br/>";
                    _marc += data.WS_GetCartaoPontoResult[0].listaCartaoPonto[j].EntradaSaida2;
                    var _saldo = data.WS_GetCartaoPontoResult[0].listaCartaoPonto[j].HorasTrabalhadas;
                    
                    $("#lb_TotalHoras0").text(data.WS_GetCartaoPontoResult[0].qntHorasMensais);  
                    $("#lb_Mes0").text(data.WS_GetCartaoPontoResult[0].mes);
                    $("#lb_Jornada0").html(data.WS_GetCartaoPontoResult[0].jornada);
                    InserirLinhasCartaoPonto(_dia, _marc, _saldo, "0");
                }
                for (var j = 0; j < data.WS_GetCartaoPontoResult[1].qntCartoesMes; j++) {
                    var _dia = data.WS_GetCartaoPontoResult[1].listaCartaoPonto[j].Dia + "<br/>";
                        _dia += data.WS_GetCartaoPontoResult[1].listaCartaoPonto[j].Data;
                    var _marc = data.WS_GetCartaoPontoResult[1].listaCartaoPonto[j].EntradaSaida1 + "<br/>";
                        _marc += data.WS_GetCartaoPontoResult[1].listaCartaoPonto[j].EntradaSaida2;
                    var _saldo = data.WS_GetCartaoPontoResult[1].listaCartaoPonto[j].HorasTrabalhadas;
                    
                    
                    $("#lb_TotalHoras1").text(data.WS_GetCartaoPontoResult[1].qntHorasMensais);  
                    $("#lb_Mes1").text(data.WS_GetCartaoPontoResult[1].mes);
                    $("#lb_Jornada1").html(data.WS_GetCartaoPontoResult[1].jornada);
                    InserirLinhasCartaoPonto(_dia, _marc, _saldo, "1");
                }
                for (var j = 0; j < data.WS_GetCartaoPontoResult[2].qntCartoesMes; j++) {
                    var _dia = data.WS_GetCartaoPontoResult[2].listaCartaoPonto[j].Dia + "<br/>";
                        _dia += data.WS_GetCartaoPontoResult[2].listaCartaoPonto[j].Data;
                    var _marc = data.WS_GetCartaoPontoResult[2].listaCartaoPonto[j].EntradaSaida1 + "<br/>";
                        _marc += data.WS_GetCartaoPontoResult[2].listaCartaoPonto[j].EntradaSaida2;
                    var _saldo = data.WS_GetCartaoPontoResult[2].listaCartaoPonto[j].HorasTrabalhadas;
                    
                    $("#lb_TotalHoras2").text(data.WS_GetCartaoPontoResult[2].qntHorasMensais);  
                    $("#lb_Mes2").text(data.WS_GetCartaoPontoResult[2].mes);
                    $("#lb_Jornada2").html(data.WS_GetCartaoPontoResult[2].jornada);
                    InserirLinhasCartaoPonto(_dia, _marc, _saldo, "2");
                }
            }
        });
    }

});