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

  handle_team_drop: function(draggable_team_html) {
    draggable_index = TeamList.get_index_for_draggable_team(draggable_team_html);
    droppable_index = TeamList.get_index_for_droppable_team();

    if (draggable_index !== null || droppable_index !== null) {
      TeamList.reorder_teams(draggable_index, droppable_index);
    }

    ea.publish(event_key.RENDER_TEAMS);
  }
}
