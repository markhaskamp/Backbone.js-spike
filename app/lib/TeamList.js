var TeamList = {
  team_list: ["Chicago",
              "Cincinnati",
              "Houston",
              "Milwaukee",
              "Pittsburgh",
              "St. Louis"],

  get_index_for_team: function(team_html) {
    team_html = $.trim(team_html);

    for(i=0; i<TeamList.team_list.length; i++) {
      if ($.trim(TeamList.team_list[i]) === team_html) {
        return(i);
      }
    }

    return null;
  },

  reorder_teams: function(draggable_team, droppable_team) {
    draggable_ndx = this.get_index_for_team(draggable_team);
    droppable_ndx = this.get_index_for_team(droppable_team);

    new_list = [];

    for (i=0; i<droppable_ndx; i++) {
      new_list.push(TeamList.team_list[i]);
    }
    new_list.push(TeamList.team_list[draggable_ndx]);

    for (i=droppable_ndx+1; i<=draggable_ndx; i++) {
      new_list[i] = TeamList.team_list[i-1];
    }

    for (i=draggable_ndx+1; i<TeamList.team_list.length; i++) {
      new_list.push(TeamList.team_list[i]);
    }

    TeamList.team_list = new_list;
  }
};
