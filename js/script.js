// TODO:
// 1 кнопка для сворачивания описания
// 2 Сообщение СПИСОК ПУСТ...    ++++++
// 3 сохранение введенных данных в localStorage
// 4 дата добавления задания
// 5 кнопка выполнено
// 6 Возможно на дату

//-----------------------------------------

// задание переменной для создания уникального контейнера для дела
var i = 0;
// Функция проверки пустоты списка, если пустой то выводит надпись. как вызывать эту функцию - просто писать emptyWrapper()
const emptyWrapper = () => {
	if ($('.wrapper-todo').text() == "") {
		$('.empty').css('display', 'block');
	}
	else { $('.empty').css('display', 'none'); };
};

// функция выполняется при полном формировании DOM-модели
$(function () {

	// выполнение функции через заданный интервал
	setInterval(emptyWrapper, 10);

	// следит за кликом на кнопку создания Нового дела
	$('.confirm').click(function () {

		// изменение индекса для создания уникального элемента Нового дела
		i = i + 1;
		
		// Извлечение текста из инпута в переменную
		var title = $('#title').val(); 
		var discription = $('#discription').val();
		
		// добавление контейнера для нового дела
		$('.wrapper-todo').append('<div class="todo' + i + '"></div>');

		// добавление названия дела
		$('.todo' + i).prepend('<div class="todo-name' + i + '"><span></span><img class="remove" src="img/clear-button.png"></div>');
		$('.todo' + i).css('background-color', '#fff');
		$('.todo-name' + i + ' span').text(title);
		// задание стилей для заголовка дела
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
		
		// задание стилей для заголовка дела
		$('.todo-discription' + i).css({
			'font-size': '14px',
			'color': '#8993ad',
			'padding': '10px 0 10px 20px',
			'min-height': '85px'
		});
	});

	// удаление дела по нажатию на крест 
	$('.wrapper-todo').on('click', '.remove', function (e) {
		//получает имя класса элемента
		var classDel = $(this).parent().parent().attr('class');
		// удаление элемента по-полученному классу
		$('.' + classDel).remove();
		emptyWrapper();
	});
});









