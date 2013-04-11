
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1469,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.play("signStart");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_start-01}","click",function(sym,e){sym.play("startGame");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'frogStates'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8500,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",908,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3792,function(sym,e){sym.play("state2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6953,function(sym,e){sym.play("state3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_body}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bill}","click",function(sym,e){var myStep=sym.getVariable("stepFrog");if(myStep==="1"){sym.play("jump1");}
if(myStep==="2"){sym.play("jump2");}
if(myStep==="3"){sym.play("jump3");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",89,function(sym,e){sym.setVariable("stepFrog","1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.setVariable("stepFrog","2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.setVariable("stepFrog","3");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2335,function(sym,e){playRippleEffect(2);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5250,function(sym,e){playRippleEffect(3);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8327,function(sym,e){playRippleEffect(1);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1116,function(sym,e){var mySymbolObject=sym.getSymbol("bubbleTip");mySymbolObject.getSymbolElement().animate({opacity:0},500);});
//Edge binding end
})("frogStates");
//Edge symbol end:'frogStates'

//=========================================================

//Edge symbol: 'myDuck'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6250,function(sym,e){sym.play(0);});
//Edge binding end
})("myDuck");
//Edge symbol end:'myDuck'

//=========================================================

//Edge symbol: 'roseauxWind'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){sym.play(0);});
//Edge binding end
})("roseauxWind");
//Edge symbol end:'roseauxWind'

//=========================================================

//Edge symbol: 'bubbleTip'
(function(symbolName){})("bubbleTip");
//Edge symbol end:'bubbleTip'
})(jQuery,AdobeEdge,"EDGE-6279111");