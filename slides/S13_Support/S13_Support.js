app.register("S13_Support", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('');
    }
  }

});