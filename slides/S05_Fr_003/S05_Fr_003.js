app.register("S05_Fr_003", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. EMJ. 2021;6(3):33–39. 2. Schiff M, <i>et al.</i> <i>Rheumatol Ther.</i> 2017;4:445–463.');
    }
  }

});