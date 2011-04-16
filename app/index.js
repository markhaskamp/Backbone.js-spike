var ea = new EventAggregator;
var event_key = { PAGE_LOAD: "page_load" };

$(document).ready( function() {
  ea.subscribe(event_key.PAGE_LOAD, 'doc_ready', eddie);

  ea.publish('page_load');
});


function eddie() {
  console.log('eddie would go');
}
