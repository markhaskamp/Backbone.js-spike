// define TeamView as a Backbone View
var TeamView = Backbone.View.extend({

    initialize: function() {
      // underscore's <code>.bindAll</code>. <code>this</code> means this object when used in <code>render</code> method.
      _.bindAll(this, 'render');
      // bind the model's _change_ event to <code>this.render</code>
      this.model.bind('change', this.render);
    },

  get_droppable_team: function() {
    return ($('.dragged_over').html());
  },
  
  render: function() {
    this.paint_html();
    this.setup_drag_and_drop();
  },

  paint_html: function() {
    var html_str = "";

    // underscore's _each_. knockout's _get_.
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
