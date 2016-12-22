$(document).ready(function (){
    var content = $('.myContent');
    var ul1 = $('#myUL1');
    var ul2 = $('#myUL2');
    var listUl2 = $('#ListULS');
    
    var numOfItems = 0;
    var totalSpace = 0;
    var breakWidths = [];
    
    var totalSizeLi = 0;
    // Get instant state
//    ul1.children().outerWidth(function (i, w) {
//        totalSpace += w;
//        numOfItems += 1;
//        breakWidths.push(totalSpace);
//    });
    
    totalSpace = ul1.width();
    numOfItems = $("#myUL1>li").size();
    
    console.log('valor del al primero UL1: '+$('#myUL1').width());
    console.log('tamanio de elementos en ul1: '+$("#myUL1>li").size());
    
    var availableSpace, numOfVisibleItems, requiredSpace;
    
    function clearVar(){
        totalSizeLi = 0;
        breakWidths = [];
    }
    
    function check(){
        
        for(var i = 0; i < numOfItems; i++){
            var liElement=$("#myUL1>li").get(i);
            totalSizeLi=totalSizeLi+$(liElement).width();
            breakWidths.push(totalSizeLi);
        }
        // Get instant state
        console.log('Este es el valor inicial contenedor: '+$('.myContent').width());
        console.log('valor del al UL1: '+$('#myUL1').width());
        console.log('total espacio: '+totalSpace);
        console.log('numero de items: '+numOfItems);
        console.log(breakWidths);
        
        //console.log('run afther to refres...');
        
        availableSpace = (content.width() - 120);
        numOfVisibleItems = ul1.children().length;
        requiredSpace = breakWidths[numOfVisibleItems - 1];
        //console.log('required space: '+requiredSpace);
        if (requiredSpace > availableSpace) {
            ul1.children().last().prependTo(listUl2);
            numOfVisibleItems -= 1;
            check();
            //console.log(numOfVisibleItems);
            // There is more than enough space
          } else if (availableSpace > breakWidths[numOfVisibleItems]) {
            listUl2.children().first().appendTo(ul1);
            numOfVisibleItems += 1;
            //console.log(numOfVisibleItems);
          }
          clearVar();
          // Update the button accordingly
        //$btn.attr("count", numOfItems - numOfVisibleItems);
        if (numOfVisibleItems === numOfItems) {
          ul2.hide();
        } else {
            ul2.show();
        };
    }    
    check();
  // Window listeners
  $(window).resize(function() {
    if($(window).width() > 768){
        check();
        $('#myUL2').smartmenus();
    }else{
        var ul1 = $('#myUL1');
        var ul2 = $('#myUL2');
        var listUl2 = $('#ListULS');
        if(listUl2.size()>0){
            for(var i=0; i<listUl2.size(); i++){
                listUl2.children().first().appendTo(ul1);
            }
            ul2.hide();
        }
    }
  });
});
