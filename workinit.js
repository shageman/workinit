(function($) {
  var compareOptions = function(a,b) {
    var result = a.value.toLowerCase() > b.value.toLowerCase();
    return (result) ? 1 : -1;
  };

  var sortSelectOptions = function($select) {
    var $sorted_options = $select.children("option").sort(compareOptions);
    $select.append($sorted_options);
  };

  var initSelect2 = function($select) {
    var selectWidth = 400;
    var extId = chrome.i18n.getMessage("@@extension_id");
    var select2CssUrl = "chrome-extension://" + extId + "/lib/select2-3.3.1/select2.css";
    $("<link rel='stylesheet' type='text/css' href='" + select2CssUrl + "'>").appendTo("head");

    $select.css({width: selectWidth});
    $select.select2();
  };

  $(document).on("mouseover", "select", function(){
    var minOptionCount = 10;
    $select = $(this);

    if ($select.data("workinit.sorted") === true ||
          $select.children("option").size() < minOptionCount) {
      return;
    }

    $select.data("workinit.sorted", true);

    sortSelectOptions($select);
    initSelect2($select);
  });

})(jQuery);
