$(function () {
  $('.plus')
      .unbind('click')
      .bind('click', function bindEventFunc(e) {
        var value = $(this).siblings('input').val();
        $(this).siblings('input').val(parseInt(value) + 1);
        var price = $(this).parent().parent().prev().find("b").text().substring(1);
        $(this).parent().parent().next().find("b").text("");
        var total = (parseFloat(value) + 1)*parseFloat(price);
         $(this).parent().parent().next().find("b").text("￥" + total);
        e.preventDefault();
        sumNumber();
        sumTotalPrice();
      });
      sumTotalPrice();
      //计算总价
  function sumTotalPrice() {
    var tr = $('input[name="checkbox_2"]');
    var number = 0;
    for (var i = 0; i < tr.length; i++) {
      if ($(tr[i]).prop('checked')) {
        var value = $(tr[i]).parent().siblings().eq(4).find('b').text().substring(1);
        number += parseFloat(value);
      }
    }
      $('.total_text').text("");
      $('.total_text').text(number);
  };

  $('#all')
      .unbind('click')
      .bind('click', function bindEventFunc(e) {
         $('.shopChoice').prop('checked', $(this).prop('checked'));
        var ul = $('.shopChoice').parent().parent().next().find('ul');
        for (var i = 0; i < ul.length; i++) {
          var childs = $(ul[i]).find('li').first().find('input');
          $(childs).prop('checked', $(this).prop('checked'));
        }
        sumNumber();
        sumTotalPrice()
         e.stopPropagation();
      });

  $('.shopChoice')
      .unbind('click')
      .bind('click', function bindEventFunc(e) {
         var ul = $(this).parent().parent().next().find('ul');
         for (var i = 0; i < ul.length; i++) {
            var childs = $(ul[i]).find('li').first().find('input');
            $(childs).prop('checked', $(this).prop('checked'));
         }
         sumNumber();
        sumTotalPrice()
         e.stopPropagation();
      });
  $('.son_check')
      .unbind('click')
      .bind('click', function bindEventFunc(e) {
        sumNumber();
        sumTotalPrice()
         e.stopPropagation();
      });
  
  function sumNumber() {
    var tr = $('input[name="checkbox_2"]');
    var sum = 0;
    for (var i = 0; i < tr.length; i++) {
      if ($(tr[i]).prop('checked')) {
        var value = $(tr[i]).parent().siblings().eq(3).find('input').val();
        sum += parseInt(value);
      }
    }
    $('.piece_num').text("");
    $('.piece_num').text(sum);
  };

});