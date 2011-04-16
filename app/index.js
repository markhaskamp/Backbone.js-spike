var ea = new EventAggregator;
var event_key = { PAGE_LOAD: "page_load" };

$(document).ready( function() {
  ea.subscribe(event_key.PAGE_LOAD, 'doc_ready', PageView.show_team_list);

  ea.publish('page_load');
});

