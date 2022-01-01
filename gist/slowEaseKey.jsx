// 2022-01-01 U型悬停类关键帧生成脚本
// Author: Kelvin Lee
// AfterEffects Version: 18.0 (2021)

// 第一个关键帧的数值
var keyOneIn = new KeyframeEase(0.5, 5)
var keyOneOut = new KeyframeEase(0.75, 5)

// 第二个关键帧的数值
var keyTwoIn = new KeyframeEase(0.5, 100)
var keyTwoOut = new KeyframeEase(0.75, 100)

// 第三个关键帧的数值
var keyThreeIn = new KeyframeEase(0.5, 5)
var keyThreeOut = new KeyframeEase(0.75, 5)


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
                    props[k].setTemporalEaseAtKey(keys[0], [keyOneIn], [keyOneOut])
                    props[k].setTemporalEaseAtKey(keys[1], [keyTwoIn], [keyTwoOut])
                    props[k].setTemporalEaseAtKey(keys[2], [keyThreeIn], [keyThreeOut])
                    break;

                // ThreeD: scale,
                case 6414:
                    props[k].setTemporalEaseAtKey(keys[0], [keyOneIn, keyOneIn, keyOneIn], [keyOneOut, keyOneOut, keyOneOut])
                    props[k].setTemporalEaseAtKey(keys[1], [keyTwoIn, keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut, keyTwoOut])
                    props[k].setTemporalEaseAtKey(keys[2], [keyThreeIn, keyThreeIn, keyThreeIn], [keyThreeOut, keyThreeOut, keyThreeOut])
                    break;

                //  TwoD_SPATIAL, anchor point
                case 6415:
                    props[k].setTemporalEaseAtKey(keys[0], [keyOneIn], [keyOneOut])
                    props[k].setTemporalEaseAtKey(keys[1], [keyTwoIn], [keyTwoOut])
                    props[k].setTemporalEaseAtKey(keys[2], [keyThreeIn], [keyThreeOut])
                    break;

                //  TwoD
                case 6416:
                    props[k].setTemporalEaseAtKey(keys[0], [keyOneIn, keyOneIn], [keyOneOut, keyOneOut])
                    props[k].setTemporalEaseAtKey(keys[1], [keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut])
                    props[k].setTemporalEaseAtKey(keys[2], [keyThreeIn, keyThreeIn], [keyThreeOut, keyThreeOut])
                    break;

                // OneD:rotation,opacity,x-position, y-position
                case 6417:
                    props[k].setTemporalEaseAtKey(keys[0], [keyOneIn], [keyOneOut])
                    props[k].setTemporalEaseAtKey(keys[1], [keyTwoIn], [keyTwoOut])
                    props[k].setTemporalEaseAtKey(keys[2], [keyThreeIn], [keyThreeOut])
                    break;

                // default:
                default:
                    undefined

            }
        }
    }
}

handelKeyEase()
