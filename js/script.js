// задание переменной для создания уникального контейнера для дела
var i = 0;


$(function () {
	// if ($('.wrapper-todo').text() == " ") {
	// 	$('.empty').css('display', 'block');
	// }
	// else { $('.empty').css('display', 'none'); };

	$('.confirm').click(function () {
		
		i = i + 1;
		
		
		var title = $('#title').val(); // Извлечение текста из инпута в переменную
		var discription = $('#discription').val();
		
		$('.listTODO').append('<div class="todo' + i + '"></div>');
		// добавление названия дела
		$('.todo' + i).prepend('<div class="todo-name' + i + '"><span></span><img class="remove" src="img/clear-button.png"></div>');
		$('.todo' + i).css('background-color', '#fff');
		$('.todo-name' + i + ' span').text(title);
		$('.todo-name' + i).css({
			'font-size': '16px',
			'padding': '20px 0 20px 20px',
			'border-bottom': '1px solid #f7f7f7'
		});
		$('.todo-name' + i + ' img').css({
			'padding-left': '20px',
			'padding-top': '5px',
			'cursor': 'pointer'
		});
		// добавление описания дела
		$('.todo' + i).append('<div class="todo-discription' + i + '"></div>');
		$('.todo-discription' + i).text(discription);
		$('.todo-discription' + i).css({
			'font-size': '14px',
			'color': '#8993ad',
			'padding': '10px 0 10px 20px',
			'min-height': '85px'
		});
	});
	// удаление дела по нажатию на крест 
	$('.listTODO').on('click', '.remove', function (e) {
		var classDel = $(this).parent().parent().attr('class'); //получает имя класса элемента
		console.log(classDel);
		$('.'+classDel).remove();
		// e.preventDefault();
		// return false;
	});

	// $("div").click(function(e){
	// 	alert($(this).attr('class'));
	// 	e.preventDefault();
	// 	return false;
	// })
});









