  $(document).ready(function () {
    $(".holemenu").click(function () {
      if ($(this).find(".mssgsubmenu ").hasClass("activemenu")) {
        $(".mssgsubmenu").removeClass("activemenu");
        $(".clickpara").removeClass("activecontent");
      } else {
        $(".mssgsubmenu").removeClass("activemenu");
        $(".clickpara").removeClass("activecontent");
        $(this).find(".mssgsubmenu").addClass("activemenu");
        var gettext = $(this).find(".textspan").text().toLowerCase();
        var activeClassName = gettext + "_para";
        // alert(activeClassName);
        $("." + activeClassName).addClass("activecontent");
      }
    });
  });
  $(".menuicon").click(function () {
    if ($(".menubar .menuUL").hasClass("activeMenu")) {
      $(".menubar .menuUL").removeClass("activeMenu");
      $(".menuicon").removeClass("activeclasss");
    } else {
      $(".menubar .menuUL").addClass("activeMenu");
      $(".menuicon").addClass("activeclasss");
    }
  });
