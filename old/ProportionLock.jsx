var comp = app.project.activeItem;
var myExpression = "var xValue = values(0) + effect(\"ProportionLock\")(\"Slider\"); \nvar yValue = values(1) - effect(\"ProportionLock\")(\"Slider\");\n[xValue, yValue]"

if (app.project.activeItem.selectedLayers[0] == null) {
    alert("Please select a layer")
} else {
    var layer = comp.selectedLayers[0];
    if (layer.selectedProperties[0] == null) {
        alert('Please select a property')
    } else {
        var fx = layer.Effects.addProperty('ADBE Slider Control');
        fx.name = "ProportionLock"
        var property = layer.selectedProperties[0];
        property.expression = myExpression;
    }
}




