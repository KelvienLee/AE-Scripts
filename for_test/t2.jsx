// The function I posted returns an array with all the properties that have keys, from there you can loop through each prop using your code:

// Gets all properties with keyframes in a layer

function getPropsWithKeys(layer) {
  var numRootProps = layer.numProperties;

  var propsWithKeys = [];

  for (var i = 0; i < numRootProps; i++) {
    var prop = layer(i + 1);

    var isGroup = prop.numProperties && prop.numProperties > 0;

    if (isGroup) {
      for (var j = 0; j < prop.numProperties; j++) {
        var subProp = prop.property(j + 1);

        var isSubGroup = subProp.numProperties && subProp.numProperties > 0;

        if (isSubGroup) {
          for (var k = 0; k < subProp.numProperties; k++) {
            var subSubProp = subProp.property(k + 1);

            if (subSubProp.numKeys > 0) {
              propsWithKeys.push(subSubProp);
            }
          }
        } else {
          if (subProp.numKeys > 0) {
            propsWithKeys.push(subProp);
          }
        }
      }
    } else {
      if (prop.numKeys > 0) {
        propsWithKeys.push(prop);
      }
    }
  }

  return propsWithKeys;
}

// Usage

var keyedProps = getPropsWithKeys(app.project.activeItem.layers[1]);

for (var i = 0; i < keyedProps.length; i++) {
  var curProp = keyedProps;

  var numKeys = curProp.numKeys;

  for (var j = 0; j < numKeys; j++) {
    // do your custom easing HERE with curKey

    curProp.setValueAtKey(j + 1, [10, 10, 10]);
  }
}
