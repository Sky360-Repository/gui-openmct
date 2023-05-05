function customContextMenuPlugin() {
    return function install(openmct) {
      // Add the context menu action to the plugin implementation
      openmct.actions.register({
        key: 'myCustomAction',
        name: 'Edit Image Mask',
        cssClass: 'icon-pencil',
        applicableTo: function (objectPath) {
          const object = objectPath[0];
          return object.type === 'my.custom.type';
        },
        invoke: function (objectPath) {
          const object = objectPath[0];
          console.log('Custom action invoked for', object);
        },
      });

      openmct.on('start', function () {
        // Wait for the DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function () {
          const stream = document.getElementById('stream');
          if (stream) {
            stream.addEventListener('contextmenu', function (event) {
              event.preventDefault(); // Prevent the default context menu
              // Check if the object type matches 'my.custom.type'
              const objectPath = openmct.router.path;
              const object = objectPath[0];
              if (object.type === 'my.custom.type') {
                // Invoke the custom context menu action
                openmct.actions.invoke(openmct.actions.get('myCustomAction', objectPath));
              }
            });
          }
        });
      });
    };
  }
