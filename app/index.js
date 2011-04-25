var team_view;
var team_list;

$(document).ready( function() {
  team_list = new TeamList();
  // The model for TeamView is <code>team_list</code>
  team_view = new TeamView({model: team_list});

  $('.team').live('mouseover', function() { $(this).css('cursor', 'move'); });
  $('.team').live('mouseout',  function() { $(this).css('cursor', 'default'); });

  $('#teams_container').droppable({
    drop: function(m, d) { 
      droppable_team = team_view.get_droppable_team();
      team_list.handle_team_drop(d.draggable.html(), droppable_team);
    }
  });

  // use backbone's <code>.set</code> command
  team_list.set({team_list: ["Chicago", 
                             "Cincinnati", 
                             "Houston",
                             "Milwaukee",
                             "Pittsburgh",
                             "St. Louis"]});

});
