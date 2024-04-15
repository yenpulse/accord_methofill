Accelerator Change Log
======================
### Version 1.4.11 2021-05-05
- Update client detection

### Version 1.4.10 2020-10-14
- Bump version

### Version 1.4.9 2020-10-07
- Fix ag-overlay bug

### Version 1.4.8 2020-08-28
- Fix app.remote.setup
- Fix slide ids on runtime
- Fix localization
- Fix slide thumbnail navigation
- Update ag-overlay to allow dynamic views
- Add support for Remote provisioning

### Version 1.4.7 2017-10-11
- Allow to switch slides in remote app

### Version 1.4.6 2017-09-04
- Add dynamic agenda module
- Fix in ag-overlay module

### Version 1.4.5 2017-05-17
- Download file from server in localize plugin - improvement for Safari
- Fix ag-viewer module
- Fix remote problem - blank page at startup

### Version 1.4.4 2016-09-22
- Resolve problem with inconsistent slide animations in nested presentations    
- Add configuration for iPlanner: lockedOrientation and bounce    

### Version 1.4.3 2016-07-28
- Add configuration for localize feature

### Version 1.4.2 2016-07-18
- Fixed bug with slide:enter event

### Version 1.4.1 2016-07-18

- Fixed bug with slide:enter event
- Fixed a bug that prevented multiple usage of the video-module.

### Version 1.4.0 2016-03-20

- Presentation now a regular view!
- Fixed major bug: state classes mirrored between slides
- Fixed minor bug in plugins module

### Version 1.3.0 2016-02-02

- Added config for changing transition speed
- Added slide:render event
- Updated app.register method to not overwrite if registered multiple times
- Fixed bug with slide:enter event in IE11
- Fixed minor bug when preloading slides

### Version 1.2.0 2015-11-19

- Accelerator now provided in a single minified file
- Jade and Markdown can now be used as template files

### Version 1.1.0 2015-10-15

- Fixed slideshow module to update classes after update to model
- Fixed a bug that could cause some problems in Safari
- Fixed bug with shareable toggle input
- Improved CSS refresh after update to source
- Updated to load livereload.js only if in develop mode
- Removed modules from Accelerator folder. They are now separate.
- Lazy loading properly implemented
- Added app.slideshow.pathExist API
- Added onhashchange listener to allow standard links
- Added confirm message API
- Added notice message API
- Updated bundled agnitio.js to 1.6.1

### Version 1.0.0 2015-09-03
- Initial release