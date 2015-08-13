wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
);
wow.init();
jQuery(document).ready(function ($) {

  /** Placehold = http://www.caindev.com/blog/2013/02/16/html5-placeholder-fallback-crappy-old-browsers/ */
  // If placeholder isn't supported.
  if (!Modernizr.input.placeholder) {
    // For every element that has a placeholder attribute
    $('[placeholder]').each(function () {
      var $this = $(this),
        placeholderValue = $this.attr('placeholder');
      // if field is empty, put the placeholder in it
      if ($this.val() == '') {
        $this.val(placeholderValue);
        $this.addClass('hasPlaceholderText');
      }
      // Add/remove placeholder on focus/blur
      $this.focus(function () {
        // Hide the placeholder so the user can enter
        // their own text
        if ($this.val() == placeholderValue) {
          $this.val('');
          $this.removeClass('hasPlaceholderText');
        }
      }).blur(function () {
        // If the user didn't enter any text, show the
        // placeholder text again.
        if ($this.val() == '' || $this.val() == placeholderValue) {
          $this.val(placeholderValue);
          $this.addClass('hasPlaceholderText');
        }
      });
      // If the user submits the form, remove the placeholder
      // if it is still there.
      $this.closest('form').submit(function () {
        if ($this.val() == $this.attr('placeholder')) {
          $this.val('');
        }
      });
    });
  }

  /*$('input[type="tel"]').mask("(99)9999-9999?");
  $('#contato').each(function(){
    $(this).validate({
      errorPlacement: function(label, element){
        real_label = label.clone();
        real_label.addClass('alert alert-danger').insertAfter(element);
        element.blur(function(){
          $(this).next('label.error').fadeOut(200);
        });
        element.focus(function(){
          $(this).next('label.error').fadeIn(200);
        });
        /!*element.next('label.error').mouseover(function () {
         $(this).animate({  opacity:0, top:'100%' }, 1500).css('display','none');
         }).mouseout(function () {
         $(this).animate({ opacity:0, top:'100%' }, 1500).css('display','none');
         })*!/
      },
      rules:{
        contato_nome:{ required:true, minlength:4 },
        contato_email:{ required:true, email:true }
      },
      messages:{
        contato_nome:{ required:'Preencha o campo nome.', minlength:'No mínimo 4 letras' },
        contato_email:{ required:'Informe o seu email.', email:'Ops, informe um email válido' }
      },
      submitHandler:function ( form ) {
        var dados = $('#contato').serialize();
        console.log(dados);
        $.ajax({
          type:"POST",
          url:"send.php",
          data:dados,
          dataType:'html',
          success:function (data) {
            //alert(data);//$('#resposta').html(data).addClass('alert-success');
            $('.validation-alert').html(data).animate({opacity:1}, 1000).mouseover(function (){
              $(this).animate({ opacity:0 }, 1000);
            });
            $('#contato')[0].reset();

            /!** https://developers.google.com/analytics/devguides/collection/analyticsjs/events?hl=pt-br *!/
            /!**
             *  ‘Email’ is the event category
             *  ‘click to email’ is the event action
             *  ‘himanshu@google.com’ is the event label.
             *  Read more: http://www.optimizesmart.com/event-tracking-guide-google-analytics-simplified-version/#ixzz3TWB1Wcsl
             *  *!/
            ga('send', 'event', 'Contato', 'Enviado Formulário', 'Contato');
          }
        });
        return false;
      }
    });
  });*/
  $('input[type="range"]#softwares').slider({
    min:$(this).attr('min'),
    max:$(this).attr('max'),
    step:$(this).attr('step'),
    tooltip:'always',
    tooltip_position:'bottom'
    }).on('slide', function(){
    console.log($(this).val());
    // After Effects
    /*<li class="corel-draw">Corel Draw</li>
     <li class="photoshop"> Photoshop</li>
     <li class="illustrator">Illustrator</li>
     <li class="indesign">Indesign</li>
     <li class="after-effects">After Effects</li>
     <li class="phpstorm">PhpStorm</li>*/
    if($(this).val() < 48) {
      $('li.after-effects').removeClass('grean');
      $('li.phpstorm').removeClass('grean');
      $('li.corel-draw').removeClass('grean');
      $('li.photoshop').removeClass('grean');
      $('li.illustrator').removeClass('grean');
      $('li.indesign').removeClass('grean');
    }
    if($(this).val() > 49) {
      $('li.after-effects').addClass('grean');
      /** reset collors */
      $('li.phpstorm').removeClass('grean');
      $('li.corel-draw').removeClass('grean');
      $('li.photoshop').removeClass('grean');
      $('li.illustrator').removeClass('grean');
      $('li.indesign').removeClass('grean');
    }
    if($(this).val() > 60) {
      $('li.phpstorm').addClass('grean');
      /** reset collors */
      $('li.after-effects').removeClass('grean');
      $('li.corel-draw').removeClass('grean');
      $('li.photoshop').removeClass('grean');
      $('li.illustrator').removeClass('grean');
      $('li.indesign').removeClass('grean');
    }
    if($(this).val() > 70) {
      $('li.indesign').addClass('grean');
      /** reset collors */
      $('li.corel-draw').removeClass('grean');
      $('li.photoshop').removeClass('grean');
      $('li.illustrator').removeClass('grean');
      $('li.after-effects').removeClass('grean');
      $('li.phpstorm').removeClass('grean');
    }
    if($(this).val() > 80) {
      $('li.illustrator').addClass('grean');
      /** reset collors */
      $('li.corel-draw').removeClass('grean');
      $('li.photoshop').removeClass('grean');
      $('li.indesign').removeClass('grean');
      $('li.after-effects').removeClass('grean');
      $('li.phpstorm').removeClass('grean');
    }
    if($(this).val() > 90) {
      $('li.photoshop').addClass('grean');
      $('li.corel-draw').addClass('grean');
      /** reset collors */
      $('li.illustrator').removeClass('grean');
      $('li.indesign').removeClass('grean');
      $('li.after-effects').removeClass('grean');
      $('li.phpstorm').removeClass('grean');
    }
  }).data('slider');
  $('ul.list-softwares li').removeClass('grean').each(function(){
    $(this).click(function() {
      console.log($(this).data());
      /*$('input[type="range"]#linguagens').slider({
       value:$(this).data('skill'), focus:true
       });*/
      if($(this).data('skill') > 50) {
        $(this).addClass('grean');
      }
      if($(this).data('skill') > 60) {
        $(this).addClass('grean');
      }
      if($(this).data('skill') > 70) {
        $(this).addClass('grean');
      }
      if($(this).data('skill') > 80) {
        $(this).addClass('grean');
      }
      if($(this).data('skill') > 90) {
        $(this).addClass('grean');
      }
      $('input[type="range"]#softwares').slider('setValue', $(this).data('skill'));
    });
  });

  $('input[type="range"]#linguagens').slider({
    min:$(this).attr('min'),
    max:$(this).attr('max'),
    step:$(this).attr('step'),
    tooltip:'always',
    tooltip_position:'bottom'
  }).on('slide', function(){
    console.log($(this).val());
    // After Effects
    /* <li class="html5">HTML 5</li>
     <li class="css3">CSS 3</li>
     <li class="javascript">JavaScript</li>
     <li class="ruby">Ruby on Raills</li>
     <li class="php">PHP</li>*/
    if($(this).val() < 48) {
      $('li.ruby').removeClass('teal');
      $('li.html5').removeClass('teal');
      $('li.css3').removeClass('teal');
      $('li.javascript').removeClass('teal');
      $('li.php').removeClass('teal');
    }
    if($(this).val() > 49) {
      $('li.ruby').addClass('teal');
      /** reset collors */
      $('li.html5').removeClass('teal');
      $('li.css3').removeClass('teal');
      $('li.javascript').removeClass('teal');
      $('li.php').removeClass('teal');
    }
    if($(this).val() > 60) {
      $('li.javascript').addClass('teal');
      /** reset collors */
      $('li.html5').removeClass('teal');
      $('li.css3').removeClass('teal');
      $('li.ruby').removeClass('teal');
      $('li.php').removeClass('teal');
    }
    if($(this).val() > 70) {
      $('li.php').addClass('teal');
      /** reset collors */
      $('li.html5').removeClass('teal');
      $('li.ruby').removeClass('teal');
      $('li.javascript').removeClass('teal');
      $('li.css3').removeClass('teal');
    }
    if($(this).val() > 80) {
      $('li.css3').addClass('teal');
      /** reset collors */
      $('li.ruby').removeClass('teal');
      $('li.html5').removeClass('teal');
      $('li.javascript').removeClass('teal');
      $('li.php').removeClass('teal');
    }
    if($(this).val() > 90) {
      $('li.html5').addClass('teal');
      /** reset collors */
      $('li.ruby').removeClass('teal');
      $('li.css3').removeClass('teal');
      $('li.javascript').removeClass('teal');
      $('li.php').removeClass('teal');
    }
  }).data('slider');


  $('ul.list-language li').each(function(){
    $(this).removeClass('teal').click(function() {
      console.log($(this).data());
      /*$('input[type="range"]#linguagens').slider({
        value:$(this).data('skill'), focus:true
      });*/
      if($(this).data('skill') > 50) {
        $(this).addClass('teal');
      }
      if($(this).data('skill') > 60) {
        $(this).addClass('teal');
      }
      if($(this).data('skill') > 70) {
        $(this).addClass('teal');
      }
      if($(this).data('skill') > 80) {
        $(this).addClass('teal');
      }
      if($(this).data('skill') > 90) {
        $(this).addClass('teal');
      }
      $('input[type="range"]#linguagens').slider('setValue', $(this).data('skill'));
    });
  });



});