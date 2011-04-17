var PageView = Backbone.View.extend({
    initialize: function() {
      this.model = new TeamList();
      console.log('PageView. initialize(). enter');
      _.bindAll(this, 'render', 'close');
      this.model.bind('change', this.render);
      this.model.view = this;
    },

    events: {
      "huh?" : "PAGE_LOAD"
    },
      
  render: function() {
    var html_str = "";
    _.each(this.model.get('team_list'), function(team) {
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
    droppable_team = PageView.get_droppable_team();
    draggable_index = TeamList.get_index_for_team(draggable_team_html);
    droppable_index = TeamList.get_index_for_team(droppable_team);

    if (draggable_index !== null || droppable_index !== null) {
      TeamList.reorder_teams(draggable_index, droppable_index);
    }

    ea.publish(event_key.RENDER_TEAMS);
  },

  get_droppable_team: function() {
    return ($('.dragged_over').html());
  },

});
