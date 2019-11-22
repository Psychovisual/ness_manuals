jQuery(document).ready(function(){
	var language = 1;

	$( "#elvis" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1QaIFTSmfmFb2KX-MY8kVEcvisW4AGrJsG1kZjD-tlPE/edit"); 
		} else {
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1SaKDsDGlVxt6NHOJ_VUTDaGd9KTvmzeXw4lqEqiRD30/edit"); 
		}	
	});
	$( "#contentstation" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1FqfaoYI_BQIYPdC9zJQDwoqDDH9lTXWPeg6N1m4wes0/edit"); 
		} else {
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1iFo2TGzR3-UTwqO5YH_tdHGYhxRQSxLt1C2WTOiykmY/edit"); 	
		}		
	});
	$( "#brixwire" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1HpYmupTEkxUnSbFf6m5L-OkHwrO_i9Hg_-aIzuqZMi0/edit"); 
		} else {
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1pVKV8A1HJHTePQjGTOiiIebjpCJcRQY4XBTFfijAsNs/edit"); 
		}		
	});
	$( "#indesign" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1EwMo5VOWLw1MTXTB0OnfRwqvQwQRn-uQ95WxfHbvtM4/edit"); 
		} else {
			// Doesn't exist
		}	
	});
	$( "#jd" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1cSyAtgLWoeCp9IOQpItZWrjdXvG9IilbDS6i7bQ_gGI/edit"); 
		} else {
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1Ger-OJqIortG--42aY-wGXZBKGzdixUEeiqUIUTOCsg/edit"); 
		}		
	});
	$( "#jb" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1O_rkguqurzx3QHfxUN9mA7QGWEfVW1-vmT0eCbWg-ek/edit"); 
		} else {
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1P7y3YYtGV_1WegpyKi3jl98W8pTq034kuYrDhD_NrU4/edit"); 
		}		
	});
	$( "#mtp" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1Jq1V9njec1yv8FLQn3k9FtHxjk_5vG2SpywIabk-aSE/edit"); 
		} else {
			// Doesn't exist
		}
	});
	$( "#claro" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1KjmZDsGLxS51HI70_BqLAf_IQizQ8TMkTUY9nCQbN44/edit"); 
		} else {
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1Af_X3khc2AnfCAOD7houmcgVdUQkB2Pz1FxDtogoxEU/edit"); 
		}		
	});
	$( "#imageworkflow" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/19HN-PNuyXPhrp5cVBNd7i1BEHzFEyNlH9NVkXiU7wDM/edit"); 
		} else {
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1DudRx1qXei1acecb7fIJiUQARntgvvjN1kYKPsZb-Uw/edit"); 
		}		
	});
	$( "#cockpit" ).click(function() {
		if(language == 1){
			// Doesn't exist
		} else {
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1UAqH-7lJxP5gLw_mYa340FF6iYDkFJIwSx8EkwUZsy8/edit"); 
		}		
	});
	$( "#videos" ).click(function() {
		if(language == 1){
			$( "#conteniframe" ).attr('src',"https://drive.google.com/drive/folders/1s2Qck0mtCEBb2xlOvtuKbSB2nf_8mjtc"); 
		} else {
			$( "#conteniframe" ).attr('src',"https://drive.google.com/drive/folders/1s2Qck0mtCEBb2xlOvtuKbSB2nf_8mjtc"); 
		}	
	});

	$( "#deutsch" ).click(function() {
		language = 1;
		localStorage.setItem('language', '1');
		$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1QaIFTSmfmFb2KX-MY8kVEcvisW4AGrJsG1kZjD-tlPE/edit");
		$('.cockpit').hide();
		$('.mtp').show();
		$('.jd').show(); 
	});
	$( "#francais" ).click(function() {
		language = 2;
		localStorage.setItem('language', '2');
		$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1SaKDsDGlVxt6NHOJ_VUTDaGd9KTvmzeXw4lqEqiRD30/edit"); 
		$('.mtp').hide();
		$('.jd').hide(); 
		$('.cockpit').show();
	});

	$( document ).ready(function() {
		var tmpLanguage = localStorage.getItem('language');
		if(tmpLanguage != undefined){
			language = tmpLanguage; 
		}
		if(tmpLanguage == 2){
			$( "#conteniframe" ).attr('src',"https://docs.google.com/document/d/1SaKDsDGlVxt6NHOJ_VUTDaGd9KTvmzeXw4lqEqiRD30/edit");
			$('.mtp').hide();
			$('.jd').hide();
		} else {
			$('.cockpit').hide();
		}
	});

});

