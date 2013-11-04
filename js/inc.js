$("#btnTranslate").click(function() {
	var languageSrc = $("#languageSrc").val();
	var languageOut = $("#languageOut").val();
	var textSrc = $("#textSrc").val();
	var textOut = "aguarde a tradução";
	$("#textOut").val(textOut);

	if($("#textSrc").val() == "")
	    {
			$("#textOut").val("Digite um texto para tradução!");
	    }
	else
	    {
			var urlJsonTraduz =  'http://api.mymemory.translated.net/get?q='+textSrc+'&langpair='+languageSrc+'|'+languageOut+'';
			$.getJSON(urlJsonTraduz, function(result) {
				   textOut = result.matches[0].translation;
				   $("#textOut").val(textOut);
			});
	    }   
});			

$("#changeLg").click(function() {
	var languageSrc = $("#languageSrc").val();
	var languageOut = $("#languageOut").val();
	
	console.log($("#languageSrc").val());
	console.log($("#languageOut").val());
	
	$("#languageSrc").val(languageOut);
	$("#languageOut").val(languageSrc);
});