(function($) {
  var minOptionCount = 10;

  var compareOptions = function(a,b) {
    var result = a.value.toLowerCase() > b.value.toLowerCase();
    return (result) ? 1 : -1;
  };

  var sortSelectOptions = function() {
    $select = $(this);

    if ($select.data("workinit.sorted") || $select.children("option").size() < minOptionCount) {
      return;
    }

    $select.data("workinit.sorted", true);

    var $sorted_options = $select.children("option").sort(compareOptions);
    $select.append($sorted_options);
  };

  $(document).on("mousedown", "select", sortSelectOptions);
})(jQuery);
