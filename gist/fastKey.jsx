// 2022-01-01 疾驰类关键帧生成脚本
// Author: Kelvin Lee

// 第一个关键帧的数值
var keyOneIn = new KeyframeEase(0.5, 100)
var keyOneOut = new KeyframeEase(0.75, 100)

// 第二个关键帧的数值
var keyTwoIn = new KeyframeEase(0.5, 100)
var keyTwoOut = new KeyframeEase(0.75, 100)



function handelKeyEase() {
    var mainComp = app.project.activeItem;
    var layers = mainComp.selectedLayers;
    for (var i = 0; i < layers.length; i++) {
        var props = layers[i].selectedProperties;
        for (var k = 0; k < props.length; k++) {
            var keys = props[k].selectedKeys;

            switch (props[k].propertyValueType) {
                // ThreeD_SPATIAL: anchor point,position,
                case 6413:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn], [keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn], [keyTwoOut])
                        }
                    };
                    break;

                // ThreeD: scale,
                case 6414:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn, keyOneIn, keyOneIn], [keyOneOut, keyOneOut, keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn, keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut, keyTwoOut])
                        }
                    };
                    break;

                //  TwoD_SPATIAL, anchor point
                case 6415:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            // props[k].setTemporalEaseAtKey(keys[t], [keyOneIn, keyOneIn], [keyOneOut, keyOneOut])
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn], [keyOneOut])
                        } else {
                            // props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut])
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn], [keyTwoOut])
                        }
                    };
                    break;

                //  TwoD
                case 6416:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn, keyOneIn], [keyOneOut, keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut])
                        }
                    };
                    break;

                // OneD:rotation,opacity,x-position, y-position
                case 6417:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn], [keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn], [keyTwoOut])
                        }
                    };
                    break;

                // default:
                default:
                    undefined

            }
        }
    }
}

handelKeyEase()
