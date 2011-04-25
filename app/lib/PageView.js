var PageView = {
  // knockout observableArray  
  // _index.haml_ makes the binding with a <code>data-bind</code> attribute
  team_list: ko.observableArray([
    { team_name:  "Chicago",    order: 0 },
    { team_name:  "Cincinnati", order: 1 },
    { team_name:  "Houston",    order: 2 },
    { team_name:  "Pittsburgh", order: 3 },
    { team_name:  "Milwaukee",  order: 4 },
    { team_name:  "St. Louis",  order: 5 }
    ]),

    handle_team_drop: function(draggable_team_html) {
      droppable_team = this.get_droppable_team();
      draggable_index = this.get_index_for_team($.trim(draggable_team_html));
      droppable_index = this.get_index_for_team(droppable_team);

      if (draggable_index !== null || droppable_index !== null) {
        this.reorder_teams(draggable_index, droppable_index);
        $('.team').draggable({ zIndex: 2700, opacity: 0.50, revert: 'invalid' });
        $('.team').droppable({
          hoverClass: "dragged_over",
          over: function() { droppable_team = $('.dragged_over').html(); },
          drop: function(m, d) { 
            PageView.handle_team_drop($.trim(d.draggable.html())); 
          }
        });
      }
    },

    get_droppable_team: function() {
      return ($.trim(droppable_team));
    },

    get_index_for_team: function(team_html) {
      team_html = $.trim(team_html);

      for(i=0; i<this.team_list().length; i++) {
        if (this.team_list()[i].team_name === team_html) {
          return(i);
        }
      }

      return null;
    },

    reorder_teams: function(over_ndx, under_ndx) {

      for (i=under_ndx; i<over_ndx; i++) {
        this.team_list()[i].order = i+1
      }

      this.team_list()[over_ndx].order = under_ndx


      this.team_list.sort(
        function(left, right) {
          return (left.order === right.order ? 0 : (left.order < right.order ? -1 : 1));
        });
    }
}

