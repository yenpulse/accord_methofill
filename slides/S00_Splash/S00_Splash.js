app.register("S00_Splash", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('dark');
      app.registry.get("ag-references").setReferences('');
    }
  }

});