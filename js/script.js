// TODO:
// 1 кнопка для сворачивания описания +++++
// 2 Сообщение СПИСОК ПУСТ...    ++++++
// 3 сохранение введенных данных в localStorage
// 4 дата добавления задания
// 5 кнопка выполнено
// 6 Возможно на дату
// 7 Проверка заполнености формы +++++
// 8 Как стирать данные из инпутов после отсылки дела?

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
// функция проверки заполнения полей, при прохождении проверки функция добавления поля
const emptyInput = () => {
	if ($('#title').val() == "" || $('#discription').val() == "") {
		if ($('#title').val() == "") {$('.titleTODO').append('<div class="warning">ЗАПОЛНИТЕ ПОЛЕ</div>') };
		if ($('#discription').val() == "") {$('.discriptionTODO').append('<div class="warning">ЗАПОЛНИТЕ ПОЛЕ</div>') };
	}
	else {
		$('.warning').remove();
		confirmButton();
	}
		
};

// функция добавления нового поля создания Нового дела
const confirmButton = () => {
	
		// изменение индекса для создания уникального элемента Нового дела
		i = i + 1;
	
		// Извлечение текста из инпута в переменную
		var title = $('#title').val(); 
		var discription = $('#discription').val();
		
		// добавление контейнера для нового дела
		$('.wrapper-todo').append('<div class="todo' + i + '"></div>');

		// добавление названия дела
		$('.todo' + i).prepend('<div class="todo-name' + i + '"><span></span><img class="remove" src="img/clear-button.png"><img class="collapse" src="img/strelka.png"></div>');
		$('.todo' + i).css('background-color', '#fff');
		$('.todo-name' + i + ' span').text(title);
		// задание стилей для заголовка дела
		$('.todo-name' + i).css({
			'position': 'relative',
			'font-size': '16px',
			'padding': '20px 20px 20px 20px',
			'border-bottom': '1px solid #f7f7f7'
		});
		// стиль для кнопки крест
		$('.remove').css({
			'padding-left': '20px',
			'padding-top': '5px',
			'cursor': 'pointer'
		});
				// стиль для кнопки сворачивания описания
		$('.collapse').css({
			'position': 'absolute',
			'left': '455px',
			'top': '25px',
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
};

// функция выполняется при полном формировании DOM-модели
$(function () {
	
	// выполнение функции через заданный интервал, проверяет наличие дел в списке и добавляет\удаляет СПИСОК ПУСТ...
	setInterval(emptyWrapper, 10);

	// следит за кликом на кнопку создания Нового дела и выполняет функция
	$('.confirm').click(function () { emptyInput();});
	

	// удаление дела по нажатию на крест и сворачивание или разворачивание описания при нажатии на стрелку 
	$('.wrapper-todo').on('click', '.collapse, .remove', function () {
		//получает имя класса элемента
		var whatClass = $(this).attr('class');
		// если класс remove то удаляем элемент в котором нажата кнопка
		if (whatClass == "remove") {
			// получение класса элемента Списка дел
			var classDel = $(this).parent().parent().attr('class');
			// удаление
			$('.' + classDel).fadeOut();
		}
		// в другом случае сворачиваем описание
		else {
			//получает имя класса элемента в котором нажата кнопка
			var classCollapseParent = $(this).parent().parent().attr('class');
			// получаем элемент с описанием дела
			var classCollapse = $('.' + classCollapseParent).children('div:last');
			// получаем класс элемент с описанием дела
			var colapse = classCollapse.attr('class');
			// условный цикл определяющий скрыто или нескрыто описание 
			if ($('.' + colapse).is(':visible')) {
				// скрываем описание изменяя свойство css display:none
				$('.' + colapse).fadeOut();
				}
			else {
				// показываем описание изменяя свойство css display: block при помощи метода fadeIn (плавное изменеие прозрачности)
				$('.' + colapse).fadeIn();
				}
			};
	});
});









