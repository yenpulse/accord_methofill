app.register("S13_Device_004", function () {
  return {
    events: {
      "tap [data-goto]": "navigate",
    },
    navigate: function (event) {
      var link = event.target;
      var path;

      if (!link.hasAttribute("data-goto")) {
        link = link.parentNode;
      }

      path = link.getAttribute("data-goto");
      if (path) {
        app.goTo(path);
      }
    },
  };
});

