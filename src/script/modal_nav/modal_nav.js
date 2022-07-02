import "./modal_nav.scss";

/*** jQuery ***/
var jquery = require("jquery");
window.$ = window.jQuery = jquery;
//require("jquery-ui-dist/jquery-ui.js");

jQuery(function() {
  // グローバルヘッダーメニュー表示非表示
  $('#hamburger-button').on('click', function(e) {
    e.preventDefault();
    $('div#overlay').toggle();
    $('div#modal-area').toggle(300);
    $('div#global-menu-wrapper').toggle(500);
    return false;
  });
  // メニュー表示時の右上のアイコンのアニメーション
  $('#hamburger-button').on('click', function(e) {
    e.preventDefault();
    $('#top').toggleClass('top').toggleClass('top_close');
    $('#middle').toggleClass('middle').toggleClass('middle_close');
    $('#bottom').toggleClass('bottom').toggleClass('bottom_close');

    //flag = (true && flag) ? false : true;

    return false;
  });


  // リンククリック時にオーバーレイを強制非表示
  $('div#modal-area div#global-menu-wrapper .global-menu-area .menu-list .menu-item a').on('click', function(e) {
    $('div#overlay').fadeOut();
    $('div#modal-area').fadeOut();
    $('div#global-menu-wrapper').fadeOut();
    // 右上のアイコンも自動で戻す
    $('#top').addClass('top').removeClass('top_close');
    $('#middle').addClass('middle').removeClass('middle_close');
    $('#bottom').addClass('bottom').removeClass('bottom_close');

    //flag = (true && flag) ? false : true;

  });

});
