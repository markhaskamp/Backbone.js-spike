var PageView = {
  team_list: ko.observableArray([
    { team_name:  "Chicago" },
    { team_name:  "Cincinnati" },
    { team_name:  "Houston" },
    { team_name:  "Pittsburgh" },
    { team_name:  "Milwaukee" },
    { team_name:  "St. Louis" }
    ])
}


function htmlEncode(value){ return $('<div/>').text(value).html(); }
function htmlDecode(value){ return $('<div/>').html(value).text(); }

