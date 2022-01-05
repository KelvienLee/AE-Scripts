// 父子级关系绑定，最后选中的为父级
// Date: 2022-01-05
// Version: 1.0
// Author: Kelvin Lee

function setParent() {
    var mainComp = app.project.activeItem;
    var layers = mainComp.selectedLayers;
    var parentLayerIndex = layers.length - 1;
    if (layers !== null) {
        for (var i = 0; i < layers.length - 1; i++) {
            layers[i].setParentWithJump(layers[parentLayerIndex])
        }
    }
}

setParent();

