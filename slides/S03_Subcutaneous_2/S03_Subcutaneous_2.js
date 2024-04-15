app.register("S03_Subcutaneous_2", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Harris E, <i>et al.</i> <i>Eur J Rheumatol.</i> 2018;5(2):85–91.');
    }
  }

});