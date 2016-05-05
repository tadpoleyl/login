'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 created by fly on 2016/2/23 0023
 */

window.addEventListener('load', function () {
    var doc = document;

    var data = {
        viewWidth: doc.documentElement.clientWidth,
        viewHeight: doc.documentElement.clientHeight,
        loadingImgArr: [],
        main: $('#fly-main'),
        header: $('.fly-header'),
        canvas: $('#fly-stage')[0],
        userCanvas: $("#canvas")[0],
        pwdCanvas: $("#canvas-pwd")[0],
        username: $("input[name='username']"),
        password: $('input[type="password"]'),
        login: $('#login'),
        loginMask: $("#fly-main .fly-login-mask"),
        loginBtn: $(".btn-login"),
        regBtn: $(".btn-reg"),
        btnOK: $('#fly-main .login-btn span'),
        rayen: $(".button--rayen"),
        goToReg: $('#fly-main .go-to-reg'),
        goToLogin: $('#fly-main .go-to-login'),
        regBox: $('#fly-main .fly-reg-box'),
        loginBox: $('#fly-main .fly-login-box'),
        animationEnd: 'onwebkitanimationend' in window ? 'webkitAnimationEnd' : 'animationend',
        transitionEnd: 'onwebkittransitionend' in window ? 'webkitTransitionEnd' : 'transitionend'
    };

    var utilMethods = {
        init: function init() {
            var self = this;
            self.setDefault();

            window.addEventListener('resize', function () {
                self.setDefault(doc.documentElement.clientWidth);
                var size = self.setSize(doc.documentElement.clientHeight);
            });

            var size = self.setSize();
            var containerWidth = 600;
            var containerHeight = 600;
            var zHeight = 100;
            var borderRadius = 50;
            var zColor = '#e4dbdc';
            var dashOffset = 4;


            var canvas = document.getElementById('fly-stage'),
                stage = new createjs.Stage(canvas),
                centerContainer = new createjs.Container().set({
                x: (size.width - containerWidth) / 2,
                y: (size.height - containerHeight) / 2
            });

            //createjs.Touch.enable(stage);
            stage.enableMouseOver(10);
            //stage.mouseEnabled = true;
            stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

            var z1 = new createjs.Shape();
            z1.graphics.beginFill(zColor).setStrokeStyle(5).beginStroke('#fff').drawRoundRect(0, 0, containerWidth, zHeight, borderRadius).endFill();

            var z1_1 = new createjs.Shape().set({ x: z1.x - dashOffset / 2, y: z1.y - dashOffset / 2 });
            z1_1.dashCmd = z1_1.graphics.setStrokeDash([14, 10]).command;
            z1_1.graphics.setStrokeStyle(3).beginStroke('#aaaaaa').drawRoundRect(0, 0, containerWidth + dashOffset, zHeight + dashOffset, borderRadius).endFill();

            var z2 = new createjs.Shape().set({ x: containerWidth, y: 0 });
            z2.graphics.beginFill(zColor).setStrokeStyle(5).beginStroke('#fff').drawRoundRect(0, 0, containerHeight * 1.2, zHeight, borderRadius).endFill();
            z2.regX = containerWidth + 140;
            z2.regY = 50;
            z2.rotation = -45;

            var z2_1 = new createjs.Shape().set({ x: z2.x - dashOffset / 2, y: z2.y - dashOffset / 2 });
            z2_1.dashCmd = z2_1.graphics.setStrokeDash([14, 10]).command;
            z2_1.graphics.setStrokeStyle(3).beginStroke('#aaaaaa').drawRoundRect(0, 0, containerHeight * 1.2, zHeight + dashOffset, borderRadius).endFill();
            z2_1.regX = z2.regX;
            z2_1.regY = z2.regY;
            z2_1.rotation = -45;

            var z3 = new createjs.Shape().set({ x: zHeight / 1.6, y: containerHeight - zHeight * 1.62 });
            z3.graphics.beginFill(zColor).setStrokeStyle(5).beginStroke('#fff').drawRoundRect(0, 0, containerWidth, zHeight, borderRadius).endFill();

            var z3_1 = new createjs.Shape().set({ x: z3.x - dashOffset / 2, y: z3.y - dashOffset / 2 });
            z3_1.dashCmd = z3_1.graphics.setStrokeDash([14, 10]).command;
            z3_1.graphics.setStrokeStyle(3).beginStroke('#aaaaaa').drawRoundRect(0, 0, containerWidth + dashOffset, zHeight + dashOffset, borderRadius).endFill();

            var zFill1 = new createjs.Shape().set({ y: 2 });
            zFill1.graphics.beginFill(zColor).moveTo(containerWidth - 85, 0).lineTo(containerWidth - 175, zHeight - 6).lineTo(containerWidth - 32, zHeight - 6).lineTo(containerWidth, zHeight / 2).lineTo(containerWidth - 40, 0).endFill(); //.drawRoundRect(containerWidth-180,0,150,zHeight-6,0);

            var zFill2 = new createjs.Shape().set({ y: 2 });
            zFill2.graphics.beginFill(zColor).moveTo(120, z3.y).lineTo(236, z3.y - 1).lineTo(140, z3.y + zHeight - 6).lineTo(120, z3.y + zHeight - 6).endFill(); //.drawRect(120,z3.y,120,zHeight-6);

            var zFill3 = new createjs.Shape().set({ y: 0 });
            zFill3.graphics.beginFill("#fff").drawRect(containerWidth - 80, -1, 20, 3);

            var zFill4 = new createjs.Shape().set({ y: 2 });
            zFill4.graphics.beginFill("#fff").drawRoundRect(containerWidth - 185, zHeight - 6, 20, 3, 1);

            var zFill5 = new createjs.Shape().set({ y: 2 });
            zFill5.graphics.beginFill('#fff').drawRoundRect(230, z3.y - 5, 6, 6, 3);

            var zFill6 = new createjs.Shape().set({ y: 2 });
            zFill6.graphics.beginFill('#fff').drawRoundRect(120, z3.y + zHeight - 6, 20, 4, 0);

            var line1 = new createjs.Shape();
            line1.graphics.beginStroke('#bdb8b8').moveTo(containerWidth - 73, 3).lineTo(containerWidth - 162, zHeight - 6);

            var line2 = new createjs.Shape();
            line2.graphics.beginStroke('#bdb8b8').moveTo(228, z3.y + 3).lineTo(136, z3.y + zHeight - 6);

            var linearGradientRect1 = new createjs.Shape().set({ x: 0, y: 35 });
            linearGradientRect1.graphics.beginLinearGradientFill(["rgba(255,152,0,1)", "rgba(200,191,107,.1)"], [0, 1], 0, 0, 0, 200).drawRoundRect(0, 0, containerWidth - zHeight, zHeight * 1.1, 45);

            var linearGradientRect2 = new createjs.Shape().set({ x: containerWidth + 92, y: -50 });
            linearGradientRect2.graphics.beginLinearGradientFill(["rgba(171,157,187,1)", "rgba(156,169,194,.3)"], [0, 1], 0, 0, 0, 740).drawRoundRect(0, 0, containerWidth, zHeight * 1.1, 70);
            linearGradientRect2.regX = z2.regX;
            linearGradientRect2.regY = z2.regY;
            linearGradientRect2.rotation = -45;

            var linearGradientRect3 = new createjs.Shape().set({ x: z3.x, y: containerHeight - zHeight - 50 });
            linearGradientRect3.graphics.beginLinearGradientFill(["rgba(255,139,0,1)", "rgba(255,139,0,.1)"], [0, 1], 0, 0, 0, 170).drawRoundRect(0, 0, containerWidth, zHeight * 1.4, 45);

            var cloudImg = new createjs.Bitmap('./static/images/c-center.png').set({ x: 180, y: 120 });
            cloudImg.scaleX = .8;
            cloudImg.scaleY = .8;
            this.cloudImg = cloudImg;

            var devicePc = new createjs.Bitmap('./static/images/pc.png').set({
                scaleX: .7,
                scaleY: .7,
                y: z3.y + 15,
                x: containerWidth / 5
            });
            var deviceMobile = new createjs.Bitmap('./static/images/mobile.png').set({
                scaleX: 1,
                scaleY: 1,
                y: z3.y + 20,
                x: containerWidth / 2
            });
            var devicePad = new createjs.Bitmap('./static/images/pad.png').set({
                scaleX: .7,
                scaleY: .7,
                y: z3.y + 20,
                x: containerWidth / 1.5
            });

            var shapeArr = [linearGradientRect1, linearGradientRect2, linearGradientRect3, z1, z1_1, z3, z3_1, z2, z2_1, zFill1, zFill2, zFill3, zFill4, zFill5, zFill6, line1, line2, cloudImg, devicePc, deviceMobile, devicePad],
                lineArr = [],
                componentsArr = [],
                waitingComArr = [],
                imgArr = ['a', 'v', 'i', 't', 'v1', 'z-ai', 'z-e', 'z-i', 'z-m', 'z-ps', 'z-t'];
            imgArr = imgArr.map(function (item) {
                return './static/images/' + item + '.png';
            });
            shapeArr.forEach(function (item) {
                centerContainer.addChild(item);
            });

            var Cueline = function () {
                //提示线。

                function Cueline() {
                    var option = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                    _classCallCheck(this, Cueline);

                    var s = this;
                    //   [s.endX, s.endY] = [option.endX, option.endY];
                    s.draw();
                }

                _createClass(Cueline, [{
                    key: 'draw',
                    value: function draw() {
                        var container = new createjs.Container();

                        var line = new createjs.Shape();
                        line.graphics.setStrokeStyle(1).beginStroke("#f90").moveTo(containerWidth / 2 + 20, containerHeight / 2 - 20).lineTo(containerWidth / 3.5, devicePc.y).endFill();

                        var line1 = new createjs.Shape();
                        line1.graphics.setStrokeStyle(1).beginStroke("#f90").moveTo(containerWidth / 2 + 20, containerHeight / 2 - 20).lineTo(containerWidth / 1.9, deviceMobile.y).endFill();

                        var line2 = new createjs.Shape();
                        line2.graphics.setStrokeStyle(1).beginStroke("#f90").moveTo(containerWidth / 2 + 20, containerHeight / 2 - 20).lineTo(containerWidth / 1.4, devicePad.y).endFill();

                        container.addChild(line, line1, line2);
                        this.container = container;
                        this.container.visible = false;
                        centerContainer.addChild(container);
                    }
                }, {
                    key: 'show',
                    value: function show() {
                        this.container.visible = true;
                    }
                }, {
                    key: 'hide',
                    value: function hide() {
                        this.container.visible = false;
                    }
                }]);

                return Cueline;
            }();

            self.cueLine = new Cueline();

            var Z1FlyLine = function () {
                function Z1FlyLine(option) {
                    _classCallCheck(this, Z1FlyLine);

                    var _ref = [].concat(_toConsumableArray(option));

                    this.sx = _ref[0];
                    this.sy = _ref[1];
                    this.height = _ref[2];
                    this.hitX = _ref[3];
                    this.hitY = _ref[4];
                    this.regX = _ref[5];
                    this.regY = _ref[6];
                    this.color = _ref[7];
                    this.index = _ref[8];
                    this.rotation = _ref[9];


                    this.draw();
                }

                _createClass(Z1FlyLine, [{
                    key: 'draw',
                    value: function draw() {
                        var shape = new createjs.Shape();
                        this.shape = shape;
                        shape.graphics.beginStroke(this.color || "#bab4b4").setStrokeStyle(1).moveTo(this.sx, this.sy).lineTo(this.sx, this.sy + this.height).endStroke();
                        var _ref2 = [this.regX, this.regY, this.rotation || 0];
                        shape.regX = _ref2[0];
                        shape.regY = _ref2[1];
                        shape.rotation = _ref2[2];


                        centerContainer.addChildAt(shape, this.index || 8);
                    }
                }, {
                    key: 'roll',
                    value: function roll() {
                        if (!this.shape) {
                            return;
                        }
                        this.shape.x = this.shape.x + 1;

                        this.die();
                    }
                }, {
                    key: 'die',
                    value: function die() {
                        if (this.shape.x >= this.hitX) {
                            centerContainer.removeChild(this.shape);
                            lineArr.shift();
                            this.shape = null;
                        }
                    }
                }]);

                return Z1FlyLine;
            }();

            var Z2FlyLine = function (_Z1FlyLine) {
                _inherits(Z2FlyLine, _Z1FlyLine);

                function Z2FlyLine(option) {
                    var step = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

                    _classCallCheck(this, Z2FlyLine);

                    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Z2FlyLine).call(this, option));

                    var _ref3 = [].concat(_toConsumableArray(option));

                    _this.rotation = _ref3[0];

                    _this.name = self.getGuid();
                    _this.step = step;
                    return _this;
                }

                _createClass(Z2FlyLine, [{
                    key: 'roll',
                    value: function roll() {
                        if (!this.shape) {
                            return;
                        }
                        this.shape.x = this.shape.x - this.step;
                        this.shape.y = this.shape.y + this.step;

                        this.die();
                    }
                }, {
                    key: 'delLine',
                    value: function delLine() {
                        var _this2 = this;

                        lineArr.forEach(function (line, i) {
                            line.name === _this2.name && lineArr.splice(i, 1);
                        });
                    }
                }, {
                    key: 'die',
                    value: function die() {
                        if (this.shape.y >= this.hitY) {
                            centerContainer.removeChild(this.shape);
                            this.delLine();
                            this.shape = null;
                        }
                    }
                }]);

                return Z2FlyLine;
            }(Z1FlyLine);

            var Components = function () {
                function Components(option) {
                    _classCallCheck(this, Components);

                    var s = this;
                    s.src = option.img;
                    s.x = option.x;
                    s.y = option.y;
                    s.scale = option.scale;
                    s.w = 0;
                    s.h = 0;
                    var image = new Image();
                    image.onload = function () {
                        s.w = this.width * (s.scale || 1);
                        s.h = this.height * (s.scale || 1);
                    };
                    image.src = s.src;
                    this.image = image;
                    s.container = option.container || centerContainer;
                    s.draw();
                }

                _createClass(Components, [{
                    key: 'draw',
                    value: function draw() {}
                }, {
                    key: 'roll',
                    value: function roll() {}
                }]);

                return Components;
            }();

            var ProduceCom = function (_Components) {
                _inherits(ProduceCom, _Components);

                //加工的组件类。

                function ProduceCom() {
                    var option = arguments.length <= 0 || arguments[0] === undefined ? { x: 0, y: 0, scale: 1 } : arguments[0];

                    _classCallCheck(this, ProduceCom);

                    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProduceCom).call(this, option));
                }

                _createClass(ProduceCom, [{
                    key: 'draw',
                    value: function draw() {
                        var img = new createjs.Bitmap(this.src).set({ x: this.x, y: this.y, scale: 1 });
                        this.img = img;
                        centerContainer.addChildAt(img, centerContainer.getChildIndex(cloudImg) - 1);
                    }
                }, {
                    key: 'roll',
                    value: function roll() {
                        if (!this.img) {
                            return;
                        }
                        centerContainer.setChildIndex(this.img, centerContainer.getChildIndex(cloudImg) - 1);
                        if (this.img.x <= containerWidth - 10 - this.w && !this.back) {
                            this.img.x += .5;
                        } else {
                            //开始转弯
                            this.back = true;
                            this.img.x -= .4;
                            this.img.y += .4;
                            if (this.img.y > 160) {
                                centerContainer.removeChild(this.img);
                                self.produce();
                                this.img = null;
                                this.image = null;
                            }
                        }
                    }
                }]);

                return ProduceCom;
            }(Components);

            var WaittingForProduceCom = function (_Components2) {
                _inherits(WaittingForProduceCom, _Components2);

                function WaittingForProduceCom(option) {
                    _classCallCheck(this, WaittingForProduceCom);

                    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(WaittingForProduceCom).call(this, option));

                    var s = _this4;


                    /* s.x = s.left ? self.r(0, centerContainer.x) : self.r(centerContainer.x + containerWidth, data.viewWidth);
                     s.y = self.r(0, data.viewHeight);*/
                    var _ref4 = [self.r(120, 180), self.r(-.6, .6), self.r(-.6, .6), true, 0, false, self.getGuid(), 0];
                    s.life = _ref4[0];
                    s.speedX = _ref4[1];
                    s.speedY = _ref4[2];
                    s.start = _ref4[3];
                    s.iNow = _ref4[4];
                    s.canMove = _ref4[5];
                    s.name = _ref4[6];
                    s.angle = _ref4[7];
                    s.left = s.x <= centerContainer.x;
                    return _this4;
                }

                _createClass(WaittingForProduceCom, [{
                    key: 'starting',
                    value: function starting() {

                        this.start = true;
                    }
                }, {
                    key: 'stop',
                    value: function stop() {
                        this.start = false;
                    }
                }, {
                    key: 'draw',
                    value: function draw() {
                        var _this5 = this;

                        var bitMap = new createjs.Bitmap(this.src).set({
                            x: this.x,
                            y: this.y,
                            scaleX: this.scale,
                            scaleY: this.scale
                        });

                        bitMap.cursor = 'pointer';
                        this.img = bitMap;
                        bitMap.on("mousedown", function (e) {
                            _this5.stop();
                            _this5.canMove = true;
                        });
                        bitMap.on('pressmove', function (e) {
                            if (_this5.canMove) {

                                if (!_this5.one && bitMap.x + _this5.w > centerContainer.x && bitMap.x < centerContainer.x + zHeight && bitMap.y + _this5.h > centerContainer.y - 20 && bitMap.y < centerContainer.y + zHeight) {
                                    // self.comDanger(bitMap,stage);

                                }

                                var x = e.stageX - _this5.w / 2,
                                    y = e.stageY - _this5.h / 2;
                                x < 0 && (x = 0);
                                y <= 0 && (y = 0);
                                x > data.viewWidth - _this5.w / 2 && (x = data.viewWidth - _this5.w);
                                y > data.viewHeight - _this5.h / 2 && (y = data.viewHeight - _this5.h);
                                _this5.img.x = x;
                                _this5.img.y = y;
                            }
                        });
                        bitMap.on("rollover", function (e) {
                            //鼠标移动到图片上面触发

                            _this5.stop();
                            bitMap.scaleX += .2;
                            bitMap.scaleY += .2;
                        });
                        bitMap.on("rollout", function (e) {
                            bitMap.scaleX -= .2;
                            bitMap.scaleY -= .2;
                            _this5.starting();
                            if (!_this5.canMove) return;
                            if (bitMap.x + _this5.w > centerContainer.x && bitMap.x < centerContainer.x + zHeight && bitMap.y + _this5.h > centerContainer.y - 20 && bitMap.y < centerContainer.y + zHeight) {
                                componentsArr.push(new ProduceCom({
                                    img: _this5.src,
                                    x: 0,
                                    y: (zHeight - 10 - _this5.h) / 2,
                                    scale: 1
                                }));
                                if (!_this5.left) {
                                    min = containerWidth + containerWidth;
                                    maxW = data.viewWidth - 100;
                                } else {
                                    min = 0;
                                    maxW = centerContainer.x;
                                }

                                waitingComArr.push(new WaittingForProduceCom({
                                    img: _this5.src,
                                    x: self.r(min, maxW),
                                    y: self.r(0, maxH),
                                    scale: .8
                                }));
                                _this5.stop();
                                _this5.die(bitMap);
                            } else {
                                _this5.canMove = false;
                                _this5.one = false;
                            }
                        });
                        stage.addChild(bitMap);
                    }
                }, {
                    key: 'die',
                    value: function die(img) {
                        //死亡
                        waitingComArr.forEach(function (com, i) {
                            com.name = img.name && waitingComArr.splice(i, 1);
                        });
                        stage.removeChild(img);
                        this.img = null;
                    }
                }, {
                    key: 'roll',
                    value: function roll() {

                        var s = this;
                        if (!s.img) return;

                        if (s.start) {

                            s.img.x += s.speedX;
                            s.img.y += s.speedY;

                            s.img.x <= 0 && (s.speedX *= -1);
                            s.img.y <= 0 && (s.speedY *= -1);
                            s.img.y >= data.viewHeight - 100 && (s.speedY *= -1);

                            s.img.x > data.viewWidth - 100 && (s.speedX *= -1);

                            s.iNow++;
                            if (s.iNow >= s.life) {
                                s.life = self.r(s.life, s.life + 150);
                                s.iNow = 0;
                                self.r(-1, 1) > 0 && (s.speedX *= -1);
                                self.r(-1, 1) > 0 && (s.speedY *= -1);
                            }
                        }
                    }
                }]);

                return WaittingForProduceCom;
            }(Components);

            stage.addChild(centerContainer);

            var min = 0,
                maxW = centerContainer.x,
                maxH = data.viewHeight - 100;
            for (var i = 0; i < imgArr.length; i++) {
                if (i % 2 === 1) {
                    min = containerWidth + containerWidth;
                    maxW = data.viewWidth - 100;
                } else {
                    min = 0;
                    maxW = centerContainer.x;
                }
                waitingComArr.push(new WaittingForProduceCom({
                    img: imgArr[i],
                    x: self.r(min, maxW),
                    y: self.r(0, maxH),
                    scale: .8
                }));
            }

            for (var _i = 10; _i >= 0; _i--) {

                lineArr.push(new Z1FlyLine([borderRadius * (_i + 1), 4, zHeight - 8, containerWidth - 85 - borderRadius * (_i + 1)]));
                lineArr.push(new Z1FlyLine([borderRadius * (_i + 1) + 20, z3.y + 5, zHeight - 8, containerWidth - 58 - borderRadius * (_i + 1) + 20, 4, '', '', '', centerContainer.getChildIndex(z2) - 1]));
            }
            for (var k = 0; k < 16; k++) {
                lineArr.push(new Z2FlyLine([363 - 13 * k * 4, 374 + 12 * k / 25, zHeight - 4, 0, z3.y - 34 * k, '', '', '', centerContainer.getChildIndex(cloudImg) - 1, -45]));
            }

            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            createjs.Ticker.on("tick", tick, this);

            var iNow = 0,
                iNow1 = 0;

            function tick(evt) {
                z1_1.dashCmd.offset += 1;
                z2_1.dashCmd.offset += 1.47;
                z3_1.dashCmd.offset += 1;

                componentsArr.forEach(function (c) {
                    return c.roll();
                });
                waitingComArr.forEach(function (c) {
                    return c.roll();
                });

                lineArr.forEach(function (item) {
                    return item.roll();
                });

                iNow++;
                if (iNow % 50 === 0) {
                    iNow = 0;
                    lineArr.push(new Z1FlyLine([borderRadius, 4, zHeight - 8, containerWidth - 85, 4]));
                    lineArr.push(new Z1FlyLine([borderRadius + 20, z3.y + 5, zHeight - 8, containerWidth - 65, 4, '', '', '', centerContainer.getChildIndex(z2) - 1]));
                }
                iNow1++;
                if (iNow1 % 35 === 0) {
                    //iNow1 = 0;
                    if (iNow1 === 35) {
                        this.line = this.line || new Z2FlyLine([363, 376, zHeight - 4, 0, z3.y, '', '', '', centerContainer.getChildIndex(cloudImg) - 1, -45], 1.03);
                        lineArr.push(this.line);
                    } else {
                        iNow1 = 70;
                        lineArr.push(new Z2FlyLine([363, 376, zHeight - 4, 0, z3.y, '', '', null, centerContainer.getChildIndex(cloudImg) - 1, -45]));
                    }
                }
                stage.update(evt);
            }

            //  self.loginAction();
            self.domInit();
        },
        domInit: function domInit() {
            var _this6 = this;

            data.goToReg.on("click", function () {
                data.loginBox.addClass('hide');
                data.regBox.addClass('show');
            });

            data.goToLogin.on('click', function () {
                data.loginBox.removeClass('hide');
                data.regBox.removeClass('show');
            });

            data.btnOK.on('mousedown', function (e) {
                $(e.target).addClass("shadow");
            }).on('mouseup', function (e) {
                $(e.target).removeClass("shadow").addClass("hide").parent().find('.loading').addClass("show");
            });

            data.loginBtn.on("click", function () {
                data.loginMask.addClass('show');

                data.loginBtn[0].btn = data.loginBtn[0].btn || 1;
                data.goToLogin.trigger("click");
                if (data.loginBtn[0].btn === 1) {
                    data.loginBtn[0].btn = 2;
                    _this6.loginAction();
                }
            });

            data.regBtn.on("click", function () {
                data.loginMask.addClass('show');

                data.regBtn[0].btn = data.regBtn[0].btn || 1;

                data.goToReg.trigger("click");

                if (data.regBtn[0].btn === 1) {
                    data.regBtn[0].btn = 2;
                    _this6.loginAction();
                }
            });

            // data.regBtn.trigger('click');

            $('.reg-input').on('focus', function (e) {
                $(e.target).val().length <= 0 && $(e.target).siblings('.mark').addClass('blur');
            }).on('blur', function (e) {
                $(e.target).val().length <= 0 && $(e.target).siblings('.mark').removeClass('blur');
            });

            $(".close").on('click', function () {
                data.loginMask.removeClass('show');
            });

            $(document).on('keydown', function (e) {
                e.keyCode === 27 && data.loginMask.removeClass('show');
            });
        },
        comDanger: function comDanger(bmp, stage) {
            var _this7 = this;

            bmp.show = bmp.show || 123;
            if (bmp.show === 123) {
                var tween;

                (function () {
                    bmp.show = 1;
                    bmp.sourceRect = new createjs.Rectangle(0, 0, 125, 192);
                    bmp = bmp.clone();
                    //bmp.x += 230;
                    var filters = [new createjs.BlurFilter(16, 16, 2)];
                    var fx = _this7.getFXBitmap(bmp, filters, 0, 0, 125, 192);
                    tween = createjs.Tween.get(fx, { loop: true }).to({ alpha: 1 }, 2500).wait(1000).to({ alpha: 0 }, 2500);


                    tween.on("change", function () {
                        bmp.alpha = 1 - Math.pow(fx.alpha, 3);
                    });
                    stage.addChild(bmp, fx);
                })();
            }
        },
        getFXBitmap: function getFXBitmap(source, filters, x, y, w, h) {
            // cache the source, so we can grab a rasterized image of it:
            source.cache(x, y, w, h);

            // create a new Bitmap, using the source's cacheCanvas:
            var bmp = new createjs.Bitmap(source.cacheCanvas);

            // add the filters, and cache to apply them
            bmp.filters = filters;
            bmp.cache(0, 0, w, h);

            // offset the bmp's registration to account for the cache offset:
            bmp.regX = -x;
            bmp.regY = -y;
            bmp.x = source.x;
            bmp.y = source.y;
            bmp.alpha = 0;

            // uncache the source:
            source.uncache();

            return bmp;
        },
        produce: function produce() {
            //开始加工...
            var self = this;
            self.cueLine.show();
            createjs.MotionGuidePlugin.install(createjs.Tween);
            createjs.Tween.get(this.cloudImg, { loop: false }, false).to({ rotation: 14 }, 400).to({ rotation: 0 }, 400).to({ rotation: -7 }, 200).to({ rotation: 0 }, 200).call(function (e) {
                return self.cueLine.hide();
            });
        },
        r: function r(min, max) {
            return min + (max - min) * Math.random();
        },
        loginAction: function loginAction() {
            var _this8 = this;

            var all = data.login.find("*");
            var aSpan = $('.input-box .placeholder');
            data.username.on("focus", function () {
                if (data.username.val().length <= 0) {
                    aSpan.eq(0).css('transform', 'scale(.8) translate(-10px,-30px)');
                    _this8.sinLine({
                        canvas: data.userCanvas,
                        input: data.username
                    });
                }
            }).on('blur', function () {
                if (data.username.val().length <= 0) {
                    aSpan.eq(0).css('transform', 'scale(1) translate(0,0)');
                    _this8.sinLine({

                        canvas: data.userCanvas,
                        input: data.username,
                        isBack: true
                    });
                }
            });

            data.password.on("focus", function () {
                if (data.password.val().length <= 0) {
                    aSpan.eq(1).css('transform', 'scale(.8) translate(-10px,-30px)');
                    _this8.sinLine({
                        canvas: data.pwdCanvas,
                        input: data.password
                    });
                }
                all.each(function (i, n) {
                    $(n).addClass("password");
                });
            }).on('blur', function () {
                all.each(function (i, n) {
                    $(n).removeClass("password");
                });

                if (data.password.val().length <= 0) {
                    aSpan.eq(1).css('transform', 'scale(1) translate(0,0)');
                    _this8.sinLine({
                        canvas: data.pwdCanvas,
                        input: data.password,
                        isBack: true
                    });
                }
            });
        },
        getGuid: function getGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
            });
        },
        sinLine: function sinLine() {
            var option = arguments.length <= 0 || arguments[0] === undefined ? { isBack: false } : arguments[0];

            var canvas = option.canvas,
                isBack = option.isBack,
                input = option.input;

            canvas.width = $(canvas).parent().width();
            var context = canvas.getContext("2d"),
                width = canvas.width,
                height = canvas.height,
                m = Math,
                scale = 50,
                ang = 0,
                value = height * .6,
                deg = m.ceil(width / m.PI * 4),
                k = isBack ? -10 : 10;
            input.css("borderBottom", 'none');
            var t = setInterval(function () {
                ang += k;
                context.clearRect(0, 0, width, height);
                context.beginPath();
                for (var i = 0; i < deg; i++) {
                    context.lineTo(m.PI * i / 180 * scale, .3 * m.sin(m.PI * (i - ang) / 180) * scale / 2 + value);
                }
                context.stroke();
                if (m.abs(ang) > width) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.beginPath();
                    context.moveTo(0, value);
                    context.lineTo(width, value);
                    context.stroke();
                    clearInterval(t);
                }
            }, 18);
        },
        setSize: function setSize() {
            var height = arguments.length <= 0 || arguments[0] === undefined ? data.viewHeight : arguments[0];
            var width = arguments.length <= 1 || arguments[1] === undefined ? data.viewWidth : arguments[1];


            data.main.height(height - data.header.height());
            data.canvas.width = width;
            data.canvas.height = height - data.header.height();

            data.login.css({ top: $('.fly-login-box').offset().top - data.login.height() - $('.fly-header').height() + 10 });

            data.rayen.css({ marginTop: (data.header.height() - 30) / 2 });
            return { width: width, height: height };
        },
        setDefault: function setDefault() {
            var width = arguments.length <= 0 || arguments[0] === undefined ? data.viewWidth : arguments[0];

            doc.getElementsByTagName('html')[0].style.fontSize = width / 10 + 'px';
        },
        addShadow: function addShadow(obj) {
            obj.addClass('shadow');
            setTimeout(function () {
                obj.removeClass('shadow');
            }, 200);
        }
    };
    utilMethods.init();
});