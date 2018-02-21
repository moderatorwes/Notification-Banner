  // MW-Notification Banner
   $.get( "/api/v2/help_center/"+$('html').attr('lang').toLowerCase()+"/articles.json?label_names=alert" ).done(function( data ) {
     
   $.each(data.articles, function(index,item) {
     
     var style1 = '<div class="ns-box ns-bar ns-effect-slidetop ns-type-notice ns-show"><div class="ns-box-inner"><span class="megaphone"></span></i><p><a href="'+ item.html_url + '">' + item.title + '</a>' + item.body + '</p></div><span class="ns-close"></span></div>'
           
     $('.alertbox').append(style1);
   });
   $('.ns-close').on('click',function(){
    $(".alertbox").remove();
  });
    
  });
