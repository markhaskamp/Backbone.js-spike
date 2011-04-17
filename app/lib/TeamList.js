var TeamList = Backbone.Model.extend({
  initialize: function() {
    this.set({'team_list': ["Chicago",
                            "Cincinnati",
                            "Houston",
                            "Milwaukee",
                            "Pittsburgh",
                            "St. Louis"]});
  },

  get_index_for_team: function(team_html) {
    team_html = $.trim(team_html);

    for(i=0; i<this.get('team_list').length; i++) {
      if ($.trim(this.get('team_list')[i]) === team_html) {
        return(i);
      }
    }

    return null;
  },

  reorder_teams: function(over_ndx, under_ndx) {
    new_list = [];

    for (i=0; i<under_ndx; i++) {
      new_list.push(this.get('team_list')[i]);
    }
    new_list.push(this.get('team_list')[over_ndx]);

    for (i=under_ndx+1; i<=over_ndx; i++) {
      new_list[i] = this.get('team_list')[i-1];
    }

    for (i=over_ndx+1; i<this.get('team_list').length; i++) {
      new_list.push(this.get('team_list')[i]);
    }

    this.set({"team_list": new_list});
  },

  handle_team_drop: function(draggable_team_html, droppable_teM) {
    draggable_index = this.get_index_for_team(draggable_team_html);
    droppable_index = this.get_index_for_team(droppable_team);

    if (draggable_index !== null || droppable_index !== null) {
      this.reorder_teams(draggable_index, droppable_index);
      this.change();
    }

  },
});
