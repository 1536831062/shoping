<!DOCTYPE html> 
<html> 
<head> 
   <meta charset="utf-8"> 
   <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
   <title></title> 
   <link rel="stylesheet" href="css/index.css" rel="external nofollow" > 
   <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js" type="text/javascript" charset="utf-8"></script> 
   <script src="js/index.js" type="text/javascript" charset="utf-8" async defer></script> 
	<script type="text/javascript">
		$(function(){ 
 var mark=0; 
 $(".car").on("click",function(){ 
   if(mark==0){ 
     $("#carlist").animate({marginRight:"0px"},500) 
     mark=1; 
   }else{ 
     $("#carlist").animate({marginRight:"-260px"},500) 
     mark=0 
   } 
 }) 
  
  
 //点击购买按钮添加至购物车 
 var buyButton=$(".buy"); 
 buyButton.on("click",BuyClick) 
 
 function BuyClick(){ 
   var thingsName=$(this).parents("li").find(".things_name").text(); 
   var thingsPrice=$(this).parent().find("i").text(); 
   var thingsImage=$(this).parents("li").find("img").attr("src"); 
   var kNum=$(this).parents("li").attr("num") 
   var Geshu=1; 
   $(this).off("click").text("已经添加至购物车"); 
        
   $(".list").append('<div class="select things" num='+kNum+'><img src='+thingsImage+'/><p class="name">'+thingsName+'</p><p class="price">$<i>'+thingsPrice+'</i></p><ul class="caozuo"><li class="zengjian"><span class="minus">-<span>1<span class="add">+</li><li class="del">删除</li></ul></div>'); 
   countTotalPrice(); 
   totalGeshu(); 
     
   //点击加号添加商品个数 
     
   $(".add").off("click").on("click",function(){ 
     Geshu=parseInt($(this).parent().find("span:nth-of-type(2)").text()) 
     Geshu++ 
     $(this).parent().find("span:nth-of-type(2)").text(Geshu) 
     countTotalPrice(); 
     totalGeshu(); 
   }) 
     
   //动态生成的元素点击减号减少商品个数 
   $(".minus").off("click").on("click",function(){ 
     Geshu=parseInt($(this).parent().find("span:nth-of-type(2)").text()); 
     if(Geshu>1){ 
       Geshu--; 
       $(this).parent().find("span:nth-of-type(2)").text(Geshu) 
     }else{ 
       Geshu==1; 
     } 
     countTotalPrice(); 
     totalGeshu(); 
   }) 
     
   //删除购物车内的商品 
   var del=$(".del"); 
   del.each(function(){ 
     $(this).off("click").on("click",function(){ 
       var delName=$(this).parents(".things").find(".name").text(); 
       $(this).parents(".things").remove(); 
       countTotalPrice(); 
       totalGeshu(); 
       var oldBtn=$("#container ul li").find("span:contains("+delName+")").parents("li").find(".buy") 
       oldBtn.on("click",BuyClick).text("点击购买") 
     }) 
   }) 
  
   //计算总价函数 
   function countTotalPrice(){       
     var totalPrice=0,listThings=$(".list").find(".things"); 
     for (var i=0;i<listThings.length;i++) { 
       var this_geshu=parseInt(listThings.eq(i).find(".zengjian span:nth-of-type(2)").text()); 
       var this_price=parseInt(listThings.eq(i).find(".price i").text()); 
       totalPrice+=this_geshu*this_price; 
     } 
     $(".total span").eq(1).text(totalPrice); 
     totalGeshu(); 
   } 
     
   //购物车上的商品总数 
   function totalGeshu(){ 
     var listThings=$(".list").find(".things"); 
     if (listThings.length>0) { 
       var totalGeshu=0; 
       listThings.each(function(){ 
         var this_geshu=parseInt($(this).find(".zengjian span:nth-of-type(2)").text()); 
         totalGeshu+=this_geshu; 
       }) 
       $(".carLogo span").html(totalGeshu) 
     } else{ 
       $(".carLogo span").css("display","none") 
     } 
   } 
 } 
})
	</script>
</head> 
<body> 
   <div id="banner"></div> 
   <div id="container"> 
    <ul> 
      <li num="1"><img src="images/1.jpg"/><span class="things_name">2014年春季爆品A<p>$<i>10</i><span class="buy">点击购买</p></li> 
      <li num="2"><img src="images/2.jpg"/><span class="things_name">2014年春季爆品B<p>$<i>20</i><span class="buy">点击购买</p></li> 
      <li num="3"><img src="images/3.jpg"/><span class="things_name">2014年春季爆品C<p>$<i>30</i><span class="buy">点击购买</p></li> 
      <li num="4"><img src="images/4.jpg"/><span class="things_name">2014年春季爆品D<p>$<i>40</i><span class="buy">点击购买</p></li> 
    </ul> 
   </div> 
     
   <div id="carlist"> 
    <div class="car"> 
      <div> 
        <span class="carLogo"><span><img src="images/car.png"/> 
        <span class="txt">购<br />物<br />车 
      </div> 
        
    </div> 
    <div class="list"> 
      <!--此处添加动态元素-->
      <div class="total"> 
        <span>总价：<span>0元 
      </div> 
    </div> 
   </div> 
   <script type="text/javascript"> 
    function view(){ 
          return{ 
            w:document.documentElement.clientWidth, 
            h:document.documentElement.clientHeight 
          }; 
        } 
        document.body.style.height=view().h+"px"; 
   </script> 
</body> 
</html> 
