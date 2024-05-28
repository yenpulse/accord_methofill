app.register("S12_Patient_Satisfaction", function() {

  const screens = 6;
  let index = 0;
  let backgrounds = [];

  return {
    events: {
      "tap [data-screen]": "updateScreen"
    },
    onRender: function(el) {
      backgrounds = document.querySelectorAll('#S12_Patient_Satisfaction .background');
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Hunt K. EMJ. 2021;6(3):34–40.');
    },
    onExit: function() {
      this.setScreen(0);
    },
    updateScreen: function(event) {
      const screen = parseInt(event.target.getAttribute('data-screen'));
      this.setScreen(screen);
    },
    setScreen: function(screen) {
      if (screen !== index) {
        backgrounds[screen].classList.add('active');
        backgrounds[index].classList.remove('active');
        index = screen;
      } else if (screen + 1 < screens) {
        backgrounds[screen + 1].classList.add('active');
        backgrounds[index].classList.remove('active');
        index = screen + 1;
      }
    },
  }

});