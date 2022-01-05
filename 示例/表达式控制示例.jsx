var mainComp = app.project.activeItem;
var mainLayer = mainComp.selectedLayers[0];

// 在选中层中定位效果组
var effectGroup = mainLayer.property("ADBE Effect Parade");

// 一般需要遵循以下步骤防止出错
// 1. 添加滑块到效果组
var slider1 = effectGroup.addProperty("ADBE Slider Control");
// 2. 给滑块起名
slider1.name = "l1"
// 3. 为滑块注册索引，避免添加其他类型的表达式控制时出错
var slider1Index = slider1.propertyIndex;

var slider2 = effectGroup.addProperty("ADBE Slider Control");
slider2.name = "l2"
var slider2Index = slider2.propertyIndex;

var slider3 = effectGroup.addProperty("ADBE Slider Control");
slider3.name = "l3"
var slider3Index = slider3.propertyIndex;

var slider4 = effectGroup.addProperty("ADBE Slider Control");
slider4.name = "l4"
var slider4Index = slider4.propertyIndex;

var point1 = effectGroup.addProperty("ADBE Point Control");
point1.name = "p1";
var point1Index = point1.propertyIndex;
effectGroup.property(point1Index).property("ADBE Point Control-0001").expression = "[100, 100]"

// 4. 为滑块设置默认值, 同一次添加的控制器用相同的后缀索引
effectGroup.property(slider1Index).property("ADBE Slider Control-0001").expression = "10";

effectGroup.property(slider2Index).property("ADBE Slider Control-0001").expression = "20";

effectGroup.property(slider3Index).property("ADBE Slider Control-0001").expression = "30";

effectGroup.property(slider4Index).property("ADBE Slider Control-0001").expression = "40";