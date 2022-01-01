var myExpression = "amp = 4; \nfreq = 2.0; \ndecay = 4.0; \nn = 0; \nif(numKeys > 0) { \n\tn = nearestKey(time).index; \n\tif(key(n).time > time) { \n\t\tn--; \n\t } \n } \nif(n == 0) { \n\tt = 0; \n } else { \n\tt = time - key(n).time; \n } \nif(n > 0 && t < 1) { \n\tv = velocityAtTime(key(n).time - thisComp.frameDuration / 10); \n\tvalue +\n\t\t((v / 100) * amp * Math.sin(freq * t * 2 * Math.PI)) / Math.exp(decay * t); \n } else { \n\tvalue; \n } ";

if (app.project.activeItem.selectedProperties[0] == null) {
    alert('Please select a property')
} else {
    app.project.activeItem.selectedProperties[0].expression = myExpression;
}