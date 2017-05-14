(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"wa_atlas_", frames: [[0,2002,1300,1300],[1302,2002,630,410],[966,3304,600,450],[966,3756,1132,229],[0,3304,964,637],[0,0,2000,2000]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.ball = function() {
	this.spriteSheet = ss["wa_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.champions = function() {
	this.spriteSheet = ss["wa_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.goalpostenlargedtransparenthi = function() {
	this.spriteSheet = ss["wa_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.goalllll = function() {
	this.spriteSheet = ss["wa_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gotzegoalpngcopy = function() {
	this.spriteSheet = ss["wa_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.worldcup = function() {
	this.spriteSheet = ss["wa_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.worldcup();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.071,0.063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,142.4,126), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.worldcup();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.071,0.063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,142.4,126), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.champions();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.795,0.795);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,501,326), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.goalllll();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.427);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1132,97.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.worldcup();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.071,0.063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,142.4,126), null);


(lib.gotze = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gotzegoalpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(281,0,0.291,0.291,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gotze, new cjs.Rectangle(0,0,281,185.7), null);


(lib.ball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.04,0.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_1, new cjs.Rectangle(0,0,52.1,52.1), null);


(lib.trophy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(71.2,63,1,1,0,0,0,71.2,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trophy, new cjs.Rectangle(0,0,142.4,126), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(250.5,163,1,1,0,0,0,250.5,163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,501,326), null);


// stage content:
(lib.wa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Trophy
	this.instance = new lib.trophy();
	this.instance.parent = this;
	this.instance.setTransform(128.2,287,1,1,0,0,0,71.2,63);

	this.instance_1 = new lib.worldcup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(215,224,0.071,0.063);

	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(286.2,474.2,1,1,0,0,0,71.2,63);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(286.2,146.2,1,1,0,0,0,71.2,63);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},179).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:140.8,y:280.1},0).wait(1).to({x:153.4,y:273.3},0).wait(1).to({x:166,y:266.4},0).wait(1).to({x:178.6,y:259.5},0).wait(1).to({x:191.1,y:252.7},0).wait(1).to({x:203.7,y:245.8},0).wait(1).to({x:216.3,y:239},0).wait(1).to({x:228.9,y:232.1},0).wait(1).to({x:241.5,y:225.2},0).wait(1).to({x:254.1,y:218.4},0).wait(1).to({x:266.7,y:211.5},0).wait(1).to({x:279.3,y:204.6},0).wait(1).to({x:291.9,y:197.8},0).wait(1).to({x:304.4,y:190.9},0).wait(1).to({x:317,y:184.1},0).wait(1).to({x:329.6,y:177.2},0).wait(1).to({x:342.2,y:170.3},0).wait(1).to({x:354.8,y:163.5},0).wait(1).to({x:367.4,y:156.6},0).wait(1).to({x:380,y:149.7},0).wait(1).to({x:392.6,y:142.9},0).wait(1).to({x:405.2,y:136},0).to({_off:true},1).wait(277));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).wait(1).to({y:462.6},0).wait(1).to({y:451},0).wait(1).to({y:439.4},0).wait(1).to({y:427.8},0).wait(1).to({y:416.3},0).wait(1).to({y:404.7},0).wait(1).to({y:393.1},0).wait(1).to({y:381.5},0).wait(1).to({y:369.9},0).wait(1).to({y:358.3},0).wait(1).to({y:346.7},0).wait(1).to({y:335.1},0).wait(1).to({y:323.6},0).wait(1).to({y:312},0).wait(1).to({y:300.4},0).wait(1).to({y:288.8},0).wait(1).to({y:277.2},0).wait(1).to({y:265.6},0).wait(1).to({y:254},0).wait(1).to({y:242.4},0).wait(1).to({y:230.9},0).wait(1).to({y:219.3},0).wait(1).to({y:207.7},0).wait(1).to({y:196.1},0).wait(1).to({y:184.5},0).wait(1).to({y:172.9},0).wait(1).to({y:161.3},0).wait(1).to({y:149.7},0).wait(1).to({y:138.2},0).wait(1).to({y:126.6},0).wait(1).to({y:115},0).wait(1).to({y:103.4},0).wait(1).to({y:91.8},0).wait(2).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(239).to({_off:false},0).wait(1).to({y:158},0).wait(1).to({y:169.7},0).wait(1).to({y:181.5},0).wait(1).to({y:193.2},0).wait(1).to({y:205},0).wait(1).to({y:216.8},0).wait(1).to({y:228.5},0).wait(1).to({y:240.3},0).wait(1).to({y:252},0).wait(1).to({y:263.8},0).wait(1).to({y:275.6},0).wait(1).to({y:287.3},0).wait(1).to({y:299.1},0).wait(1).to({y:310.8},0).wait(1).to({y:322.6},0).wait(1).to({y:290},0).wait(1).to({y:257.3},0).wait(1).to({y:224.7},0).wait(1).to({y:192},0).wait(1).to({y:159.4},0).wait(41));

	// Gotzegoal
	this.instance_4 = new lib.gotze();
	this.instance_4.parent = this;
	this.instance_4.setTransform(77.6,206.8,1,1,0,0,0,140.5,92.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).wait(1).to({x:91.1,y:201.6},0).wait(1).to({x:104.6,y:196.5},0).wait(1).to({x:118.1,y:191.3},0).wait(1).to({x:131.6,y:186.1},0).wait(1).to({x:145.1,y:181},0).wait(1).to({x:158.6,y:175.8},0).wait(1).to({x:171.4,y:171.8},0).wait(1).to({x:184.3,y:167.8},0).wait(1).to({x:197.1,y:163.8},0).wait(1).to({x:210,y:159.8},0).wait(1).to({x:222.8,y:155.8},0).wait(1).to({x:235.7,y:151.8},0).wait(1).to({x:248.5,y:147.8},0).wait(1).to({x:259.1,y:144.9},0).wait(1).to({x:269.6,y:142.1},0).wait(1).to({x:280.2,y:139.2},0).wait(1).to({x:290.8,y:136.4},0).wait(1).to({x:301.4,y:133.5},0).wait(1).to({x:311.9,y:130.7},0).wait(1).to({x:322.5,y:127.8},0).wait(1).to({x:329.7,y:125.4},0).wait(1).to({x:336.9,y:123},0).wait(1).to({x:344,y:120.6},0).wait(1).to({x:351.2,y:118.2},0).wait(1).to({x:358.4,y:115.8},0).wait(1).to({x:365.6,y:113.4},0).wait(1).to({x:374.2,y:111.7},0).wait(1).to({x:382.9,y:109.9},0).wait(1).to({x:391.6,y:108.2},0).wait(1).to({x:400.2,y:106.5},0).wait(1).to({x:408.9,y:104.7},0).wait(1).to({x:417.6,y:103},0).wait(1).to({x:422.3,y:116.9},0).wait(1).to({x:427,y:130.7},0).wait(1).to({x:431.7,y:144.6},0).wait(1).to({x:436.4,y:158.4},0).wait(1).to({x:441.1,y:172.3},0).wait(1).to({x:445.8,y:186.1},0).wait(1).to({x:450.4,y:199.9},0).wait(1).to({x:455.2,y:213.8},0).wait(5).to({x:47.6,y:216.2},0).wait(1).to({x:62.9,y:211.7},0).wait(1).to({x:78.3,y:207.2},0).wait(1).to({x:93.6,y:202.7},0).wait(1).to({x:108.9,y:198.3},0).wait(1).to({x:124.2,y:193.8},0).wait(1).to({x:127,y:207.1},0).wait(1).to({x:129.7,y:220.4},0).wait(1).to({x:132.4,y:233.7},0).wait(1).to({x:135.1,y:247},0).wait(1).to({x:137.8,y:260.3},0).wait(1).to({x:140.5,y:273.6},0).wait(1).to({x:139,y:275.7},0).wait(1).to({x:137.5,y:277.8},0).wait(1).to({x:135.9,y:279.9},0).wait(1).to({x:134.4,y:282},0).wait(1).to({x:132.8,y:284.2},0).wait(1).to({x:131.3,y:286.3},0).wait(1).to({x:129.7,y:288.4},0).wait(1).to({x:128.2,y:290.5},0).wait(1).to({x:126.7,y:292.6},0).wait(1).to({x:125.1,y:294.7},0).wait(1).to({x:123.6,y:296.8},0).wait(1).to({x:122,y:298.9},0).wait(1).to({x:120.5,y:301},0).wait(1).to({x:118.9,y:303.2},0).wait(1).to({x:117.7,y:307.6},0).wait(1).to({x:116.5,y:312},0).wait(1).to({x:115.2,y:316.5},0).wait(1).to({x:114,y:320.9},0).wait(1).to({x:112.8,y:325.3},0).wait(1).to({x:111.5,y:329.8},0).wait(1).to({x:110.3,y:334.2},0).wait(1).to({x:109.1,y:338.6},0).wait(1).to({x:107.8,y:343.1},0).wait(1).to({x:106.6,y:347.5},0).wait(1).to({x:105.3,y:352},0).wait(1).to({x:103.1,y:360.8},0).wait(1).to({x:100.9,y:369.7},0).wait(1).to({x:98.6,y:378.6},0).wait(1).to({x:96.4,y:387.5},0).wait(1).to({x:94.1,y:396.4},0).wait(1).to({x:91.9,y:405.2},0).wait(1).to({x:89.7,y:414.1},0).wait(1).to({x:87.4,y:423},0).wait(1).to({x:85.2,y:431.9},0).wait(1).to({x:82.9,y:440.8},0).wait(14).to({x:151.6,y:244.8},0).to({_off:true},1).wait(170));

	// ball
	this.instance_5 = new lib.ball_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(423.2,147,1,1,0,0,0,26,26);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({_off:false},0).wait(1).to({x:427.5,y:147.6},0).wait(1).to({x:431.8,y:148.3},0).wait(1).to({x:436.1,y:148.9},0).wait(1).to({x:440.3,y:149.5},0).wait(1).to({x:444.6,y:150.1},0).wait(1).to({x:448.9,y:150.8},0).wait(1).to({x:453.2,y:151.4},0).wait(1).to({x:457.5,y:152},0).wait(1).to({x:461.8,y:152.7},0).wait(1).to({x:466.1,y:153.3},0).wait(1).to({x:470.3,y:153.9},0).wait(1).to({x:474.6,y:154.5},0).wait(1).to({x:478.9,y:155.2},0).wait(1).to({x:483.2,y:155.8},0).wait(1).to({x:493.9},0).wait(1).to({x:504.5},0).wait(1).to({x:515.2},0).wait(1).to({x:525.9},0).wait(1).to({x:536.5},0).wait(1).to({x:547.2},0).wait(1).to({x:552.1},0).wait(1).to({x:557},0).wait(1).to({x:561.9},0).wait(1).to({x:566.8},0).wait(1).to({x:571.7},0).wait(1).to({x:576.6},0).wait(1).to({x:581.5},0).wait(1).to({x:586.4},0).wait(5).to({x:158.4,y:251},0).wait(1).to({x:173.3,y:246.7},0).wait(1).to({x:188.2,y:242.4},0).wait(1).to({x:203,y:238},0).wait(1).to({x:217.9,y:233.7},0).wait(1).to({x:232.8,y:229.4},0).wait(1).to({x:244},0).wait(1).to({x:255.2},0).wait(1).to({x:266.4},0).wait(1).to({x:277.6},0).wait(1).to({x:288.8},0).wait(1).to({x:300},0).wait(1).to({x:304.1,y:229.1},0).wait(1).to({x:308.2,y:228.7},0).wait(1).to({x:312.4,y:228.4},0).wait(1).to({x:316.5,y:228},0).wait(1).to({x:320.6,y:227.7},0).wait(1).to({x:324.7,y:227.4},0).wait(1).to({x:328.9,y:227},0).wait(1).to({x:333,y:226.7},0).wait(1).to({x:337.1,y:226.4},0).wait(1).to({x:341.2,y:226},0).wait(1).to({x:345.4,y:225.7},0).wait(1).to({x:349.5,y:225.3},0).wait(1).to({x:353.6,y:225},0).wait(1).to({x:357.7,y:224.7},0).wait(1).to({x:361.8,y:224.3},0).wait(1).to({x:366,y:224},0).wait(1).to({x:370.1,y:223.6},0).wait(1).to({x:374.2,y:223.3},0).wait(1).to({x:378.3,y:223},0).wait(1).to({x:382.5,y:222.6},0).wait(1).to({x:386.6,y:222.3},0).wait(1).to({x:390.7,y:222},0).wait(1).to({x:394.8,y:221.6},0).wait(1).to({x:399,y:221.3},0).wait(1).to({x:403.1,y:220.9},0).wait(1).to({x:407.2,y:220.6},0).wait(1).to({x:407.7},0).wait(1).to({x:408.2},0).wait(1).to({x:408.6},0).wait(1).to({x:409.1},0).wait(1).to({x:409.6},0).wait(1).to({x:410.1},0).wait(1).to({x:410.6},0).wait(1).to({x:411},0).wait(1).to({x:411.5},0).wait(1).to({x:412},0).wait(1).to({x:408.8,y:218.2},0).wait(1).to({x:405.6,y:215.8},0).wait(1).to({x:402.4,y:213.4},0).wait(1).to({x:399.2,y:211},0).wait(1).to({x:396,y:208.6},0).wait(1).to({x:392.8,y:206.2},0).wait(1).to({x:385.9,y:204.2},0).wait(1).to({x:378.9,y:202.2},0).wait(1).to({x:372,y:200.2},0).wait(1).to({x:365.1,y:198.2},0).wait(1).to({x:358.1,y:196.2},0).wait(1).to({x:351.2,y:194.2},0).wait(1).to({x:296,y:335},0).to({_off:true},1).wait(170));

	// champions
	this.instance_6 = new lib.champions();
	this.instance_6.parent = this;
	this.instance_6.setTransform(38,396,0.795,0.795);

	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(288.5,559,1,1,0,0,0,250.5,163);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},43).to({state:[{t:this.instance_6}]},26).to({state:[{t:this.instance_7}]},60).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(129).to({_off:false},0).wait(43).to({scaleX:1,scaleY:1,x:286.5,y:536},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:284.5,y:513},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:282.5,y:490},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:280.5,y:467},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:278.5,y:444},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:276.5,y:421},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:274.5,y:398},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:272.5,y:375},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:272.6,y:368.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:362.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:355.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:349.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:272.7,y:342.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:336.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:329.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:272.8,y:323.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:316.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:310.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:303.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:272.9,y:297.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:291},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:273,y:284.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:278},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:271.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:273.1,y:265.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:258.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:273.2,y:252.2},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:245.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:239.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:273.3,y:232.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:226.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:273.4,y:219.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:272.6,y:237},0).wait(1).to({y:236.6},0).wait(1).to({x:272.5,y:236.2},0).wait(1).to({y:235.8},0).wait(1).to({y:235.5},0).wait(1).to({y:235.1},0).wait(1).to({y:234.7},0).wait(1).to({y:234.3},0).wait(1).to({y:233.9},0).wait(1).to({y:233.6},0).wait(1).to({y:233.2},0).wait(1).to({y:232.8},0).wait(1).to({y:232.4},0).wait(1).to({y:232},0).wait(1).to({y:231.6},0).wait(1).to({y:231.3},0).wait(1).to({y:230.9},0).wait(1).to({y:230.5},0).wait(1).to({y:230.1},0).wait(1).to({y:229.7},0).wait(1).to({y:229.3},0).wait(1).to({y:229},0).wait(1).to({y:228.6},0).wait(1).to({y:228.2},0).wait(1).to({y:227.8},0).wait(1).to({y:227.4},0).wait(1).to({y:227},0).wait(1).to({y:226.7},0).wait(1).to({y:226.3},0).wait(1).to({y:225.9},0).wait(1).to({y:225.5},0).wait(1).to({y:225.1},0).wait(1).to({y:224.8},0).wait(1).to({y:224.4},0).wait(1).to({y:224},0).wait(1).to({y:223.6},0).wait(1).to({y:223.2},0).wait(1).to({y:222.8},0).wait(1).to({y:222.5},0).wait(1).to({y:222.1},0).wait(1).to({y:221.7},0).wait(1).to({y:221.3},0).wait(1).to({y:220.9},0).wait(1).to({y:220.5},0).wait(1).to({y:220.2},0).wait(1).to({y:219.8},0).wait(1).to({y:219.4},0).wait(1).to({y:245},0).wait(1).to({y:270.6},0).wait(1).to({y:296.2},0).wait(1).to({y:321.8},0).wait(1).to({y:301.3},0).wait(1).to({y:280.8},0).wait(1).to({y:260.4},0).wait(1).to({y:239.9},0).wait(1).to({y:219.4},0).wait(1).to({y:246.6},0).wait(1).to({y:273.8},0).wait(1).to({y:301},0).wait(1).to({y:328.2},0).wait(1).to({y:355.4},0).to({_off:true},1).wait(35));

	// banner
	this.instance_8 = new lib.Symbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1016.8,232.9,1,1,0,0,0,566,48.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(130).to({_off:false},0).wait(1).to({x:976.1},0).wait(1).to({x:935.5},0).wait(1).to({x:894.8},0).wait(1).to({x:854.2},0).wait(1).to({x:813.5},0).wait(1).to({x:772.9},0).wait(1).to({x:732.2},0).wait(1).to({x:691.5},0).wait(1).to({x:650.9},0).wait(1).to({x:610.2},0).wait(1).to({x:569.6},0).wait(1).to({x:529},0).wait(1).to({x:488.3},0).wait(1).to({x:447.7},0).wait(1).to({x:407},0).wait(1).to({x:366.3},0).wait(1).to({x:325.7},0).wait(1).to({x:285},0).wait(1).to({x:244.4},0).wait(1).to({x:203.7},0).wait(1).to({x:163.1},0).wait(1).to({x:122.4},0).wait(1).to({x:81.8},0).wait(1).to({x:41.1},0).wait(1).to({x:0.4},0).wait(1).to({x:-40.2},0).wait(1).to({x:-80.9},0).wait(1).to({x:-121.5},0).wait(1).to({x:-162.2},0).wait(1).to({x:-202.8},0).wait(1).to({x:-243.5},0).wait(1).to({x:-284.2},0).wait(1).to({x:-324.8},0).wait(1).to({x:-365.5},0).wait(1).to({x:-406.1},0).wait(1).to({x:-446.8},0).wait(1).to({x:-487.4},0).wait(1).to({x:-528.1},0).wait(1).to({x:-568.8},0).wait(1).to({x:660},0).to({_off:true},1).wait(129));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaChQgMgMAAgQQAAgRALgLQAMgMAPAAQARAAAMAMQALALAAARQAAAQgLAMQgMAMgRAAQgPAAgLgMgAgEA7QgCgcgJgnIgNg2QgMgvAAgVQAAgSAMgMQALgMARAAQASAAALAMQAMALAAATQAAASgMAyIgNA2QgHAbgDAog");
	this.shape.setTransform(455.1,306.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaChQgMgMAAgQQAAgRALgLQAMgMAPAAQARAAAMAMQALALAAARQAAAQgLAMQgMAMgRAAQgPAAgLgMgAgEA7QgCgcgJgnIgNg2QgMgvAAgVQAAgSAMgMQALgMARAAQASAAALAMQAMALAAATQAAASgMAyIgNA2QgHAbgDAog");
	this.shape_1.setTransform(438.5,306.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaChQgMgMAAgQQAAgRALgLQAMgMAPAAQARAAAMAMQALALAAARQAAAQgLAMQgMAMgRAAQgPAAgLgMgAgEA7QgCgcgJgnIgNg2QgMgvAAgVQAAgSAMgMQALgMARAAQASAAALAMQAMALAAATQAAASgMAyIgNA2QgHAbgDAog");
	this.shape_2.setTransform(421.8,306.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbCqQgOgDgVgJQgMgFgHAAQgGAAgIAFQgGAFgFAKIgJAAIAAh9IAJAAQAKA1AgAbQAeAcAjAAQAbAAAQgPQAQgPAAgUQAAgLgGgLQgGgLgNgKQgMgKgggQQgtgWgUgPQgUgPgKgUQgLgTAAgXQAAgoAdgcQAdgbAsAAQAQAAAPAEQALACARAJQAQAHAGAAQAHAAAEgEQADgDADgPIAIAAIACBuIgKAAQgGgqgcgZQgcgZgfAAQgZAAgPANQgOAOAAARQAAALAFAIQAHAMAQALQALAIApAVQA6AcAUAZQAUAZAAAhQAAApggAeQghAegyAAQgOAAgOgDg");
	this.shape_3.setTransform(399.9,306.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB3CpIjfkSIAADRQAAAdAOAKQANAKAQAAIAIAAIAAAJIh1AAIAAgJQAbgBALgLQALgKAAgbIAAjpIgHgIQgLgNgIgFQgIgEgPAAIAAgJIB1AAICjDMIAAiNQAAgegJgLQgMgOgbABIAAgJIBtAAIAAAJQgVACgHAFQgHAEgEAKQgEAJAAAYIAAESg");
	this.shape_4.setTransform(367.4,307.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiIBvQgngwAAhAQAAhKAzgxQAygxBJADQBOgDAyAxQAxAxAABKQAAA9glAwQgxBAhZAAQhYAAgxg9gAhDhsQgUAmAABGQAABVAeAoQAVAdAkAAQAZAAARgNQAWgPAMgjQAMgiAAg3QAAhBgMggQgNghgTgNQgTgOgYAAQgtAAgXAvg");
	this.shape_5.setTransform(330.2,307);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhWClIAAgJIALAAQAPAAAIgEQAHgEADgJQADgFAAgZIAAjZQAAgZgDgHQgCgGgIgFQgJgEgOAAIgLAAIAAgJICsAAIAAAJIgLAAQgOAAgIAEQgHAEgDAIQgEAGAAAZIAADZQAAAZAEAHQACAGAJAFQAHAFAOgBIALAAIAAAJg");
	this.shape_6.setTransform(300.9,306.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiKClIAAgJQAXAAAJgDQAHgFAEgHQADgGAAgbIAAjWQAAgcgDgGQgDgHgJgEQgIgEgXAAIAAgJICPAAQBIAAAfAZQAfAZAAAmQAAAhgUAXQgUAVgjAIQgYAGg3ABIAABcQgBAaAEAIQADAGAIAFQAIADAXAAIAAAJgAgPgCIALAAQAdAAAQgRQAQgTABgkQgBglgQgRQgQgSgeABIgKAAg");
	this.shape_7.setTransform(275.9,306.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA1ClIAAgJIAMAAQAOAAAIgEQAHgEADgJQADgFAAgZIAAj0Ih+EsIgFAAIiBkrIAADpQAAAYABAGQADAMAKAIQALAIAXgBIAAAJIhyAAIAAgJIAEAAQALABAJgEQAKgEAFgGQAEgGADgMIABgZIAAjQQAAgZgDgHQgDgGgIgFQgIgEgOAAIgLAAIAAgJICIAAIBcDZIBajZICHAAIAAAJIgMAAQgOAAgJAEQgGAEgDAIQgDAGAAAZIAADZQAAAZADAHQACAGAIAFQAJAFANgBIAMAAIAAAJg");
	this.shape_8.setTransform(237.2,306.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQCpIAAgJIAGAAQATAAAIgGQAGgDAAgHIgCgKIgHgSIgSgpIh0AAIgOAgQgGAQAAALQAAANALAHQAGAEAaACIAAAJIhuAAIAAgJQASgDALgMQAMgMARglIB1kIIAFAAIB3EOQARAnALAKQAJAIAPABIAAAJgAhPA4IBjAAIgwhwg");
	this.shape_9.setTransform(195.4,306.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAMClIAAgJIALAAQAOAAAJgEQAGgEAEgJQACgFAAgZIAAhmIh0AAIAABmQAAAZADAHQADAGAIAFQAIAFAOgBIALAAIAAAJIitAAIAAgJIALAAQAPAAAIgEQAHgEADgJQADgFAAgZIAAjZQAAgZgDgHQgCgGgJgFQgIgEgOAAIgLAAIAAgJICtAAIAAAJIgLAAQgOAAgJAEQgGAEgEAIQgDAGAAAZIAABeIB0AAIAAheQAAgZgCgHQgDgGgIgFQgJgEgNAAIgLAAIAAgJICtAAIAAAJIgLAAQgPAAgIAEQgHAEgDAIQgDAGAAAZIAADZQAAAZADAHQACAGAJAFQAIAFAOgBIALAAIAAAJg");
	this.shape_10.setTransform(158,306.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhGCYQgpgWgXgnQgWgoAAgtQAAguAZgrQAZgqAqgYQAqgXAuAAQAjAAAnAPQAWAJAGAAQAIAAAGgGQAGgFABgNIAKAAIAAByIgKAAQgKgsgegYQgdgYglAAQgfAAgZARQgaASgMAdQgPAlAAAtQAAAsALAkQALAlAYATQAXASAmAAQAgAAAagOQAagNAcghIAAAcQgbAdgeANQgfANgoAAQg0AAgpgVg");
	this.shape_11.setTransform(120.1,306.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},265).wait(35));

	// goals
	this.instance_9 = new lib.goalpostenlargedtransparenthi();
	this.instance_9.parent = this;
	this.instance_9.setTransform(237,101,0.494,0.494);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(69).to({_off:false},0).wait(60).to({_off:true},1).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(332,424,142.4,126);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#006600",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/wa_atlas_.png", id:"wa_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;