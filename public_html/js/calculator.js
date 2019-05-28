$(document).ready(function() { // Ждём загрузки страницы	   
	
	
	/*$('input[name=first]').on("keyup", function() {
		this.value = this.value.replace(/ /g,"");
		this.value = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	});*/
	
	
	
	$("input[name=send]").click( function () { // Событие нажатия на кнопку "Расчёт"
		var action = $("select[name=action]").val(); // Получаем значение действия, которое нужно выполнить
		var first = $("input[name=first]").val() * 1; // Переменная первого числа
		var result; // Переменная результата
		result = first * 0.2; //  складываем
		var res;
		res = result.toFixed();
		var k = res.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

		$("input[name=result]").val(result); // записываем результат
		$(".resultat .summ").html(k); // записываем результат
		$(".resultat .rub").html("руб.");
		
		
	});
	
	
	
});

// Accordeon for FAQ

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}