app.register("ag-navigation", function() {

  let navigation = null;
  let buttonPrevious = null;
  let buttonNext = null;

  return {
    setButtonState: function(button, hidden) {
      if (hidden)
        button.classList.add('hidden');
      else
        button.classList.remove('hidden');
    },
    updateNavigation: function(current) {
      this.setButtonState(buttonPrevious, current.index <= 0);
      this.setButtonState(buttonNext, current.index >= current.length - 1);
    },
    updateBackground: function(color) {
      navigation.setAttribute('data-background', color);
    },

    events: {
      "tap .nav-previous": () => app.slideshow.left(),
      "tap .nav-next": () => app.slideshow.right()
    },
    onRender: () => {
      navigation = document.querySelector('.navigation');
      buttonPrevious = document.querySelector('.nav-previous');
      buttonNext = document.querySelector('.nav-next');
    },
    onEnter: (current) => {
      app.registry.get("ag-navigation").updateNavigation(current);
    },
    setBackground: (color) => {
      app.registry.get("ag-navigation").updateBackground(color);
    },
  }

});