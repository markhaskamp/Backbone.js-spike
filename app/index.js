// ### event-based javascript with knockout
var droppable_team = null;

$(document).ready( function() {
  $('.team').live('mouseover', function() { $(this).css('cursor', 'move'); });
  $('.team').live('mouseout',  function() { $(this).css('cursor', 'default'); });

  // slurp in knockout bindings defined in PageView.js
  ko.applyBindings(PageView);

  $('.team').draggable({ zIndex: 2700, opacity: 0.50, revert: 'invalid' });
  $('.team').droppable({
    hoverClass: "dragged_over",
    over: function() { droppable_team = $('.dragged_over').html(); },
    drop: function(m, d) { 
            PageView.handle_team_drop($.trim(d.draggable.html())); 
          }
  });

});

