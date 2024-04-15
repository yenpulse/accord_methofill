app.register("S04_Subcutaneous_Administration", function() {

  const references = '1. Braun J, <i>et al.</i> <i>Arthritis Rheum.</i> 2008;58(1):73–81. 2. Schiff MH, <i>et al.</i> <i>Ann Rheum Dis.</i> 2014;73:1549–1551. 3. Harris E, <i>et al.</i> <i>Eur J Rheumatol.</i> 2018;5(2):85–91. <br>4. Rutkowska-Sak L, <i>et al.</i> <i>Rheumatologia.</i> 2009;47(4):207–211.';

  return {
    events: {
      "tap [data-overlay]": "toggleOverlay"
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences(references);
    },
    toggleOverlay: function(event) {
      const overlayId = event.target.getAttribute('data-overlay');
      const overlay = app.view.get('overlay-content');
      if (overlay)
        overlay.open(`<img class="popup-background" src="assets/${overlayId}.png" alt="...">`);
    }
  }

});