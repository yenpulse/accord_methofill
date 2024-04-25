app.register("S14_Device_005", function() {

  let index = 0;
  let backgrounds = [];

  return {
    events: {
      "tap [data-screen]": "updateScreen"
    },
    onRender: function(el) {
      backgrounds = document.querySelectorAll('#S14_Device_005 .background');
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
      }
    },
  }

});