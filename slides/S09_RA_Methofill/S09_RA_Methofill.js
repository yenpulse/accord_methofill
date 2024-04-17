app.register("S09_RA_Methofill", function() {

  return {
    events: {
      "tap [data-overlay]": "toggleOverlay"
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('');
    },
    toggleOverlay: function(event) {
      const overlayId = event.target.getAttribute('data-overlay');
      const overlay = app.view.get('overlay-content');
      if (overlay)
        overlay.open(`<img class="popup-background" src="assets/${overlayId}.jpg" alt="...">`);
    }
  }

});