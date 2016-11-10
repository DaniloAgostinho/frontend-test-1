$(function() {
	// Evento de clique do elemento: ul#menu li.parent > a
	$('ul#menu li.parent > a').click(function() {
		// Expande ou retrai o elemento ul.sub-menu dentro do elemento pai (ul#menu li.parent)
		$('ul.sub-menu', $(this).parent()).slideToggle('fast', function() {
			// Depois de expandir ou retrair, troca a classe 'aberto' do <a> clicado
			$(this).parent().toggleClass('aberto');
		});
		return false;
	});
});
