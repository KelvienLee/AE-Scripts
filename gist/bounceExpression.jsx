// 2022-01-01 弹性表达式脚本
// Author: Kelvin Lee
// AfterEffects Version: 18.0 (2021)

var myExpression = "amp = 4; // 振幅 \nfreq = 2.0; // 频率 \ndecay = 4.0;  // 延迟（数值越低延迟越高）\nn = 0; \nif(numKeys > 0) { \n\tn = nearestKey(time).index; \n\tif(key(n).time > time) { \n\t\tn--; \n\t } \n } \nif(n == 0) { \n\tt = 0; \n } else { \n\tt = time - key(n).time; \n } \nif(n > 0 && t < 1) { \n\tv = velocityAtTime(key(n).time - thisComp.frameDuration / 10); \n\tvalue +\n\t\t((v / 100) * amp * Math.sin(freq * t * 2 * Math.PI)) / Math.exp(decay * t); \n } else { \n\tvalue; \n } ";

function bounceEasyKey() {
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
                        props[k].expression = myExpression;
                        props[k].setInterpolationTypeAtKey(keys[keys.length - 1], KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR)
                    }
                    break;

                // ThreeD: scale,
                case 6414:
                    for (var t = 0; t < keys.length; t++) {
                        props[k].expression = myExpression;
                        props[k].setInterpolationTypeAtKey(keys[keys.length - 1], KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR)
                    }
                    break;

                //  TwoD_SPATIAL, anchor point
                case 6415:
                    for (var t = 0; t < keys.length; t++) {
                        props[k].expression = myExpression;
                        props[k].setInterpolationTypeAtKey(keys[keys.length - 1], KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR)
                    }
                    break;

                //  TwoD
                case 6416:
                    for (var t = 0; t < keys.length; t++) {
                        props[k].expression = myExpression;
                        props[k].setInterpolationTypeAtKey(keys[keys.length - 1], KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR)
                    }
                    break;

                // OneD:rotation,opacity,x-position, y-position
                case 6417:
                    for (var t = 0; t < keys.length; t++) {
                        props[k].expression = myExpression;
                        props[k].setInterpolationTypeAtKey(keys[keys.length - 1], KeyframeInterpolationType.LINEAR, KeyframeInterpolationType.LINEAR)
                    }
                    break;

                // default:
                default:
                    undefined

            }
        }
    }
}

bounceEasyKey()
