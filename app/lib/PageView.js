
var TeamView = Backbone.View.extend({

    initialize: function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.model.view = this;
    },

  render: function() {
    this.paint_html();
    this.setup_drag_and_drop();
  },

  get_droppable_team: function() {
    return ($('.dragged_over').html());
  },
  
  paint_html: function() {
    var html_str = "";

    _.each(this.model.get('team_list'), function(team) {
      html_str += '\n<div class="team">' + team + '</div>';
    });

    $('div#teams_container').html(html_str);
  },

  setup_drag_and_drop: function() {
    $('.team').draggable({
      revert: 'invalid',
      opacity: '0.50',
      zIndex: 2700
    });

    $('.team').droppable({ hoverClass: 'dragged_over' });
  }

});
