var PageView = {
  show_team_list: function() {

    var html_str = "";
    _.each(TeamList.team_list, function(team) {
      html_str += '\n<div class="team">' + team + '</div>';
    });

    $('div#teams_container').html(html_str);
  }

}
