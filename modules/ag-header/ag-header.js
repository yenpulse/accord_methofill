app.register("ag-header", function() {
  
  let header = null;

  return {
    events: {
      "tap [data-goto]": "navigate",
    },
    onRender: () => {
      self = this;
      header = document.querySelector('[data-module="ag-header"]');
    },
    onEnter: (current) => {
      app.registry.get('ag-header').setHeader(current.index);
    },
    setHeader: function(currentIndex) {
      if (currentIndex < 1) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      header.setAttribute('data-slide', currentIndex);
    },
    navigate: function(event) {
      var link = event.target;
      var path;
      var regex = new RegExp(/app\./);

      if (link) {
        if (!link.hasAttribute('data-goto')) link = link.parentNode;
        path = link.getAttribute('data-goto');
        if (path) {
          if (regex.test(path)) {
              eval(path);
          }
          else {
            app.goTo(path);
          }
        }
      }
    }
  }

});