app.register("S05_Rheumatoid_Arthritis", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('');
    }
  }

});