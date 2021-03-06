<% if config[:frontend_framework] == 'foundation' %>
// =require foundation/_foundation.js
// =require foundation/_foundation.alerts.js
// =require foundation/_foundation.clearing.js
// =require foundation/_foundation.cookie.js
// =require foundation/_foundation.dropdown.js
// =require foundation/_foundation.forms.js
// =require foundation/_foundation.joyride.js
// =require foundation/_foundation.magellan.js
// =require foundation/_foundation.orbit.js
// =require foundation/_foundation.placeholder.js
// =require foundation/_foundation.reveal.js
// =require foundation/_foundation.section.js
// =require foundation/_foundation.tooltips.js
// =require foundation/_foundation.topbar.js
<% elsif config[:frontend_framework] == 'bootstrap' %>
// =require vendor/jquery.js
// =require bootstrap/_bootstrap-transition.js
// =require bootstrap/_bootstrap-alert.js
// =require bootstrap/_bootstrap-button.js
// =require bootstrap/_bootstrap-carousel.js
// =require bootstrap/_bootstrap-collapse.js
// =require bootstrap/_bootstrap-dropdown.js
// =require bootstrap/_bootstrap-modal.js
// =require bootstrap/_bootstrap-scrollspy.js
// =require bootstrap/_bootstrap-tab.js
// =require bootstrap/_bootstrap-tooltip.js
// =require bootstrap/_bootstrap-popover.js
// =require bootstrap/_bootstrap-typeahead.js
// =require bootstrap/_bootstrap-affix.js
<% end %>

// =require main/_plugins.js
// =require main/_main.js
// =require main/_ga.js