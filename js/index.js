
function enter(event) {
  if (event.keyCode == 13) {
    wikiSearch();
  }
}

function wikiSearch() {
  $(".results").empty();
  var str = $("#search").val();
  if (str.length > 0) {
    $.get("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + encodeURI(str) + "&prop=revisions&rvprop=content&format=json", function(result) {
      if (result.length !== 0) {
        $.each(result[1], function(index, data) {
          var descr = result[2][index].length > 1 ? result[2][index].split(".")[0] + "..." : "...";

          $('.results').append("<div class ='search-item'><a href='" + result[3][index] + "' target = '_blank'><strong>" + data + "</strong><p>" + descr + "</p></a></div>");
        });
      } else {
        $('.results').append("<p>No results :(</p>");
      }
    }, "jsonp");
  } else {

    $('.results').append("<p>No results :(</p>");
  
}
$(".w").click(function() {
    $(".results").empty();
    $("#search").val(''); 
  });
}