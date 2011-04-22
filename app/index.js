var ea = new EventAggregator;
var event_key = { PAGE_LOAD: "page_load", TEAM_DROP: "team_drop",  RENDER_TEAMS: "render_teams" };

$(document).ready( function() {
  $('.team').live('mouseover', function() { $(this).css('cursor', 'move'); });
  $('.team').live('mouseout',  function() { $(this).css('cursor', 'default'); });

  ea.subscribe(event_key.PAGE_LOAD, 'doc_ready', PageView.show_team_list);
  ea.subscribe(event_key.TEAM_DROP, 'doc_ready', PageView.handle_team_drop);
  ea.subscribe(event_key.RENDER_TEAMS, 'doc_ready', PageView.show_team_list);

  $('#teams_container').droppable({
    drop: function(m, d) { ea.publish(event_key.TEAM_DROP, d.draggable.html()); }
  });

  ea.publish(event_key.PAGE_LOAD);
});

