// 类型，尺寸，名字
var window = new Window("palette", undefined);
// 方向
window.orientation = "column";

// "group" 和 "panel" 可以相互嵌套

var buttonSize = [30, 30];

// 组件类型一："panel"  带标题的窗口
var windowPanelOne = window.add("panel", undefined, "window panel one");
windowPanelOne.orientation = "column";
var panelInPanel1 = windowPanelOne.add(
  "panel",
  undefined,
  "panel1 in panelOne"
);

panelInPanel1.orientation = "row";

buttonOne = panelInPanel1.add("button", undefined, "b1");
buttonTwo = panelInPanel1.add("button", undefined, "b2");
buttonThree = panelInPanel1.add("button", undefined, "b3");

buttonOne.size = buttonSize;
buttonTwo.size = [40, 30];
buttonThree.size = [50, 30];
var panelInPanel2 = windowPanelOne.add(
  "panel",
  undefined,
  "panel2 in panelOne"
);

// 组件类型二： "group"  分组，不带名称
// 第一个组件窗口
var windowGroupOne = window.add("group", undefined, "windowGroupOne");
// 组件窗口方向
windowGroupOne.orientation = "row";
// 窗口组件
var panelOne = windowGroupOne.add("panel", undefined, "panel One");
var panelTwo = windowGroupOne.add("panel", undefined, "panel Two");

// 第二个组件窗口
var windowGroupTwo = window.add("group", undefined, "windowGroupTwo");
windowGroupTwo.orientation = "column";
// 窗口组件
var panelThree = windowGroupTwo.add("panel", undefined, "panel Three");
var panelFour = windowGroupTwo.add("panel", undefined, "panel Four");

window.center();
window.show();
