$(document).ready(function(){
    $('a.scrollto').click(function(){

        $("html, body").animate({scrollTop: $("form").offset().top-300}, 1000);

        event.preventDefault();

    });

    var scrollTop = localStorage.getItem('offsetTop');
    $(window).scrollTop(scrollTop);
    localStorage.setItem('offsetTop', 0);
    $('select').on('change', function () {
        var offsetTop = $(this).offset();
        offsetTop = offsetTop.top - 100;
        localStorage.setItem('offsetTop', offsetTop);
        location.href = '/?country_code=' + $(this).val();
    });
});

/* FIX-FIX-FIX */
(function () {
  var breakpoint = 999;

  function checkPosition(selector, container, screenHeight) {
    //позиционирование попапа по вертикали

    var cont = selector,
      contHeight = cont.offsetHeight;

    if (contHeight > screenHeight) {
      container.style.margin = '40px auto';
    }
    else {
      var top = (screenHeight - contHeight) / 2;
      container.style.margin = top + 'px auto 20px';
    }
  }

  function modalPosition(screenHeight) {
    //расчет ширины и вывод ее в html, функция вызывается при загрузке страницы, а так же при ресайзе
    var container = document.querySelector('.ever-popup  .ever-popup__inner');
    if (container) {

      var desktop = document.querySelector('#cloneThis'),
        mobile = document.querySelector('#cloneMobileThis');


      if (desktop) {
        checkPosition(desktop, container, screenHeight);
        if (window.innerWidth >= breakpoint) {
          container.style.width = desktop.offsetWidth + 'px';
        }
        if (!mobile) {
          container.style.width = desktop.offsetWidth + 'px';
        }
      }
      if (mobile) {
        checkPosition(mobile, container, screenHeight);
        if (window.innerWidth <= breakpoint) {
          container.style.width = mobile.offsetWidth + 'px';
        }
      }
    }
  }

  var modalBtn = document.querySelectorAll('.ever-popup-btn');
  for (var i = 0; i < modalBtn.length; i++) {
    modalBtn && modalBtn[i].addEventListener('click', function () {
      modalPosition(window.innerHeight);
    });
  }
})();


function normalPrice() {
	let oldPrice = document.querySelector(".x_price_previous").textContent.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.');
	let newPrice = document.querySelector(".x_price_current").textContent.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.');

	let oldPriceLast = document.querySelectorAll(".x_price_previous");
	for (let i = 0; i < oldPriceLast.length; i++) {
		oldPriceLast[i].textContent = oldPrice;
	}
	let newPriceLast = document.querySelectorAll(".x_price_current");
	for (let i = 0; i < newPriceLast.length; i++) {
		newPriceLast[i].textContent = newPrice;
	}
}
normalPrice()