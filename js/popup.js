/*
 * PopUp for jQuery
 * http://www.kubbox.com/
 *
 * Copyright (c) 2014 Kubbox
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: december 23, 2014
 * Version: 0.1
 */
(function($){
	$.popup = {};
	$.popup.opciones = {
		width 		: 'auto',
		height  	: 'auto',
		background	: 'rgba(0,0,0,0.4)',
		tiempo		: 500,
		piel		: '#fff',
		titulo 		:{
			align : 'center',
			size  : '20px',
			family: 'Helvetica Neue'
		},
		texto 		:{
			align : 'center',
			size  : '16px',
			family: 'Helvetica Neue'
		},
		bordeRadius : '0'
	}
	$.popup.add = function(params){
		try {
			return PopUp.add(params || {});
		} catch(e) {		
			var err = 'Error del PopUp: ' + e;
			console.error(err, params);		
		}		
	}
	var PopUp ={
		add:function(params){
			if(typeof(params) == 'string'){
				params = {texto:params};
			}
			if(params.texto === null){
				throw 'Un texto vacio ?????'; 
			}
			var titulo = params.titulo.text || '',
				texto  = params.texto.text,
				width  = params.width || $.popup.opciones.width,
				height = params.height || $.popup.opciones.height;
			$('body').append('<div id="alda-popup"></div>');
			$('#alda-popup').css({
				'display'	: 'none',
				'position'	: 'fixed',
				'top'		: '0',
				'bottom'	: '0',
				'left'		: '0',
				'right'		: '0',
				'background': params.background || $.popup.opciones.background
			});
			$('#alda-popup').append('<div id="alda-body"></div>');
			$('#alda-body').css({
				'position'  : 'absolute',
				'width'		: width,
				'height'	: height,
				'background': params.piel || $.popup.opciones.piel,
				'top'		: '50%',
				'left'		: '50%',
				'padding'		: '15px',
				'border-radius' : params.borderRadius || $.popup.opciones.bordeRadius,
				'-webkit-box-shadow'	: '2px 2px 12px 0px rgba(188, 188, 188, 1)',
				'-moz-box-shadow'		: '2px 2px 12px 0px rgba(188, 188, 188, 1)',
				'box-shadow '			: '2px 2px 12px 0px rgba(188, 188, 188, 1)'
			});

			$('#alda-body').append('<div id="alda-close"></div><div id="alda-titulo"></div><div id="alda-contenido"></div>');
			$('#alda-close').css({
				'position'			: 'absolute',
				'top' 				: '-15px',
				'right'				: '-15px',
				'background-image'	: 'url(img/close.png)',
				'background-repeat' : 'no-repeat',
				'width'				: '30px',
				'height'			: '30px',
				'cursor'			: 'pointer'
			});

			$('#alda-titulo').html(titulo);
			$('#alda-contenido').html(texto);

			$('#alda-titulo').css({
				'text-align' 		: params.titulo.align || $.popup.opciones.titulo.align,
				'font-size'			: params.titulo.size || $.popup.opciones.titulo.size,
				'font-family'		: params.titulo.family || $.popup.opciones.titulo.family,
				'margin'			: '10px 0px'
			});

			$('#alda-contenido').css({
				'text-align' 		: params.texto.align || $.popup.opciones.texto.align,
				'font-size'			: params.texto.size || $.popup.opciones.texto.size,
				'font-family'		: params.texto.family || $.popup.opciones.texto.family
			});

			$('#alda-close').click(function(){
				$('#alda-popup').fadeOut(500, function() {
					$('#alda-popup').remove();
				});
			});


			$('#alda-popup').fadeIn(params.tiempo || $.popup.opciones.tiempo);
			$('#alda-body').css({
				'margin-top'	: '-'+(($('#alda-body').height()/2)+15)+'px',
				'margin-left'	: '-'+(($('#alda-body').width()/2)+15)+'px'
			});
		}
	}
})(jQuery)