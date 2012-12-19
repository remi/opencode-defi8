$(function() {
  var $firstCard = null, timeoutActive = false;
  $("li").bind("click", function() {
    var $this = $(this)
    if (!$this.is(".down, .done")) { return false; }
    if (timeoutActive == true) { return false; }

    if ($firstCard == null) {
      $this.trigger("flip")
      $firstCard = $this
    } else {
      $this.trigger("flip")

      if ($firstCard.data("id") == $this.data("id")) {
        $("ul").trigger('checkCompletion')
        $firstCard.addClass("done")
        $this.addClass("done")
        $firstCard = null
      } else {
        timeoutActive = true
        $(".fail").show()
        setTimeout(function() { $(".fail").hide() }, 100)
        setTimeout(function() { $(".fail").show() }, 200)
        setTimeout(function() { $(".fail").hide() }, 300)
        setTimeout(function() {
          $this.trigger('flip')
          $firstCard.trigger('flip')
          $firstCard = null
          timeoutActive = false
        }, 500)
      }
    }

  }).bind("flip", function() {
    $(this).toggleClass("down")
  })

  $("ul").bind("checkCompletion", function() {
    if ($(this).children(".down").length == 0) {
      $("ul").addClass("done")
      $(".success").addClass("shown")
      $("html, body").animate({ scrollTop: 0 }, { duration: 500 })
    }
  })
})
