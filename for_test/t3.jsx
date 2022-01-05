var comp = app.project.activeItem;
var layer = comp.selectedLayers[0];
// var prop = layer.selectedProperties[0];
// alert(prop.name)

// alert(prop.propertyValueType)


var curComp = app.project.activeItem;

var curLay = curComp.selectedLayers[0];

var effectsProperty = curLay.Effects;

var slider1 = effectsProperty.addProperty("ADBE Slider Control");
slider1.name = "Control_1"
var sliderIndex = slider1.propertyIndex;

var slider2 = slider1.addProperty("ADBE Slider Control");
slider2.name = 'fuck';
effectsProperty.property(sliderIndex).property("ADBE Slider Control-0002").expression = "200";



// var coords = effectsProperty.addProperty("ADBE Point3D Control");

// var coordsIndex = coords.propertyIndex;

effectsProperty.property(sliderIndex).property("ADBE Slider Control-0001").expression = "100";

// effectsProperty.property(coordsIndex).property("ADBE Point3D Control-0001").expression = "[5,5,5]";


alert('1')