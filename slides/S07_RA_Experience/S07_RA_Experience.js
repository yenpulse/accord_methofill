app.register("S07_RA_Experience", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Lopez-Olivo MA, <i>et al.</i> <i>Cochrane Database Syst Rev.</i> 2014;(6):CD000957.');
    }
  }

});