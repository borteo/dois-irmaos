$(function(){$("body").removeClass("preload"),$(".loading").removeClass("loading"),$("#multimedia").length>0&&$(".group h3").on("click",function(){var e=$(this).closest(".group").children(".group-content"),i=e.find("img");e.hasClass("active")?e.slideUp().removeClass("active"):e.slideDown(function(){i.unveil()}).addClass("active")})});