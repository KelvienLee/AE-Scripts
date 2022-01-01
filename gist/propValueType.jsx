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
                    alert('13')
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
                    alert('14')
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
                    alert('15')
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
                    alert('16')
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
                    alert('17')
                    break;

                // COLOR
                case 6418:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn, keyOneIn, keyOneIn], [keyOneOut, keyOneOut, keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn, keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut, keyTwoOut])
                        }
                    };
                    alert('18')
                    break;

                // CUSTOM_VALUE
                case 6419:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn, keyOneIn, keyOneIn], [keyOneOut, keyOneOut, keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn, keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut, keyTwoOut])
                        }
                    };
                    alert('19')
                    break;

                // MARKER
                case 6420:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn, keyOneIn, keyOneIn], [keyOneOut, keyOneOut, keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn, keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut, keyTwoOut])
                        }
                    };
                    alert('20')
                    break;

                // LAYER_INDEX
                case 6421:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn], [keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn], [keyTwoOut])
                        }
                    };
                    alert('21')
                    break;

                // mask_index
                case 6422:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn], [keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn], [keyTwoOut])
                        }
                    };
                    break;

                // shape
                case 6423:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn, keyOneIn, keyOneIn], [keyOneOut, keyOneOut, keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn, keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut, keyTwoOut])
                        }
                    };
                    break;

                // text_document
                case 6424:
                    for (var t = 0; t < keys.length; t++) {
                        if (t % 2 == 0) {
                            props[k].setTemporalEaseAtKey(keys[t], [keyOneIn, keyOneIn, keyOneIn], [keyOneOut, keyOneOut, keyOneOut])
                        } else {
                            props[k].setTemporalEaseAtKey(keys[t], [keyTwoIn, keyTwoIn, keyTwoIn], [keyTwoOut, keyTwoOut, keyTwoOut])
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

alert('1')