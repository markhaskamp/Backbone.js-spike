var PageView = {
  show_team_list: function() {

    var html_str = "";
    _.each(TeamList.team_list, function(team) {
      html_str += '\n<div class="team">' + team + '</div>';
    });

    $('div#teams_container').html(html_str);
    $('.team').draggable({
      revert: 'invalid',
      opacity: '0.50',
      zIndex: 2700
    });

    $('.team').droppable({ hoverClass: 'dragged_over' });
  },

  handle_team_drop: function(team_html) {
    // reorder teams

    ea.publish(event_key.RENDER_TEAMS);
  }
}
