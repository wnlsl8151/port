$(window).on('load', function () {
  setInterval(function () {
    $('.intro').addClass('move', 1000);
  }, 3000);
});

$('.main_headwrap')
  .delay(3800)
  .animate({ opacity: 1 }, function () {
    $('.main_headline').delay(800).animate({ opacity: 1 });
  });

$(window).resize(function () {
  if (window.innerWidth < 780) {
    $('.main_headwrap').css({
      width: '350px',
      height: '350px',
    });
  } else {
    $('.main_headwrap').css({
      width: '450px',
      height: '450px',
    });
  }
});

function darkmode() {
  var bodySelector = document.body;
  bodySelector.classList.toggle('dark-mode');
}

$(window).on('load', function () {
  setInterval(function () {
    $('.cursor').css({
      opacity: 1,
    });

    $('.cursor-pointer').css({
      opacity: 1,
    });
  }, 5000);
});

$(window).mousemove(function (e) {
  var agent = navigator.userAgent.toLowerCase();
  var cursorX = e.pageX - 20;
  var cursorY = e.pageY - 20;

  if (
    (navigator.appName == 'Netscape' &&
      navigator.userAgent.search('Trident') != -1) ||
    agent.indexOf('msie') != -1
  ) {
    $('.cursor').css({
      top: cursorY,
      left: cursorX,
    });
    $('.cursor-pointer').css({
      top: e.pageY,
      left: e.pageX,
    });

    $('button, a').hover(
      function () {
        $('.cursor').css('backgroundColor', 'rgba(255,252,243,0.5)');
      },
      function () {
        $('.cursor').css('backgroundColor', 'transparent');
      }
    );
  } else {
    $('.cursor, .cursor-pointer').css({
      transform: 'translate(' + e.pageX + 'px,' + e.pageY + 'px)',
    });

    $('button, a').hover(
      function () {
        $('.cursor-pointer').css('backgroundColor', 'rgba(255,252,243,0.9)');
        $('.cursor, .cursor-pointer').addClass('hover');
      },
      function () {
        $('.cursor-pointer').css('mixBlendMode', 'none');
        $('.cursor, .cursor-pointer').removeClass('hover');
      }
    );
  }
});

$(document).mouseup(function (e) {
  if ($('.header-gnb').has(e.target).length === 0) {
    $('.menu-btn, .header-gnb, .profile-wrap').removeClass('active');
  }

  $('.header-menu-wrap .menu-btn').click(function () {
    $('.menu-btn, .header-gnb, .profile-wrap').toggleClass('active');
  });
});

$('.header-gnb-item').click(function () {
  $('.menu-btn, .header-gnb, .profile-wrap').removeClass('active');
});

$('.header-gnb-item')
  .children('a')
  .hover(
    function () {
      $(this).siblings('p').css({
        transform: 'translateX(0px)',
        opacity: 1,
      });
    },
    function () {
      $(this).siblings('p').css({
        transform: 'translateX(10px)',
        opacity: 0,
      });
    }
  );
