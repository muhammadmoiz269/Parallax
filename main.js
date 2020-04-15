// var layer1=document.getElementById("layer1");
// scroll=window.pageYOffset;
// window.addEventListener("scroll",function(e)
// {
//     var offset=window.pageYOffset;
//     scroll=offset;
//     layer1.style.width=(100+scroll/5) + '%';
// })

// var layer2=document.getElementById("layer2");
// scroll=window.pageYOffset;
// window.addEventListener("scroll",function(e)
// {
//     var offset=window.pageYOffset;
//     scroll=offset;
//     layer2.style.width=(100+scroll/5) + '%';
//     layer2.style.left=scroll/50 + '%';
// })

// var text=document.getElementById("text");
// scroll=window.pageYOffset;
// window.addEventListener("scroll",function(e)
// {
//     var offset=window.pageYOffset;
//     scroll=offset;
//     layer2.style.width=(100+scroll/5) + '%';
//     text.style.top= -scroll/20 + '%';
// })



var head=document.getElementById("heading")
var p1=document.getElementById("p1")
var p2=document.getElementById("p2")
var p3=document.getElementById("p3")
var p4=document.getElementById("p4")
var p5=document.getElementById("p5")
var p6=document.getElementById("p6")
var p7=document.getElementById("p7")
var p8=document.getElementById("p8")
var p9=document.getElementById("p9")
var p10=document.getElementById("p10")

var pack1=document.getElementById("pack1")
var pack2=document.getElementById("pack2")
var pack3=document.getElementById("pack3")


var go=document.getElementById("go")
var where=document.getElementById("where")
var feel=document.getElementById("feel")
var alive=document.getElementById("alive")
var btn=document.getElementById("btn")







function parallax(element,speed,direction)
{
    var scrollYvalue=window.scrollY;

    switch (direction) {
        case "up":
            element.style.transform=`translateY(-${scrollYvalue*speed}px)`;
            break;

            case "down":
                element.style.transform=`translateY(${scrollYvalue*speed}px)`;
                break;
    
        default:
            break;
    }
}


window.addEventListener("scroll",function()
{
   
 
    
    if(window.scrollY>=300)
    {
        head.classList.add('fadein')
        head.classList.remove('fadeout')
    }
    
    else{
        head.classList.remove('fadein')
        head.classList.add('fadeout')

    }

    if(window.scrollY>=300)
    {
        p1.classList.add('parain1')
        p2.classList.add('parain2')
        p3.classList.add('parain3')
        p4.classList.add('parain4')
        p5.classList.add('parain5')
        p6.classList.add('parain6')
        p7.classList.add('parain7')
        p8.classList.add('parain8')
        p9.classList.add('parain9')
        p10.classList.add('parain10')
       
       
        


        p1.classList.remove('fadeout')
        p2.classList.remove('fadeout')
        p3.classList.remove('fadeout')
        p4.classList.remove('fadeout')
        p5.classList.remove('fadeout')
        p6.classList.remove('fadeout')
        p7.classList.remove('fadeout')
        p8.classList.remove('fadeout')
        p9.classList.remove('fadeout')
        p10.classList.remove('fadeout')
        
    }
    else{
        p1.classList.remove('parain1')
        p2.classList.remove('parain2')
        p3.classList.remove('parain3')
        p4.classList.remove('parain4')
        p5.classList.remove('parain5')
        p6.classList.remove('parain6')
        p7.classList.remove('parain7')
        p8.classList.remove('parain8')
        p9.classList.remove('parain9')
        p10.classList.remove('parain10')

       

        p1.classList.add('fadeout')
        p2.classList.add('fadeout')
        p3.classList.add('fadeout')
        p4.classList.add('fadeout')
        p5.classList.add('fadeout')
        p6.classList.add('fadeout')
        p7.classList.add('fadeout')
        p8.classList.add('fadeout')
        p9.classList.add('fadeout')
        p10.classList.add('fadeout')
        

    }
    
    if(window.scrollY>300)
    {
        
        counter("mountain",0,200,2000);
        counter("Visitors",0,500,2000);
        counter("lakes",0,300,2500);


       

        
    }
    if(window.scrollY>700)
    {
        go.classList.add('go')
        where.classList.add('where')
        feel.classList.add('feel')
        alive.classList.add('alive')
        btn.classList.add('btn')


        go.classList.remove('fadeout')
        where.classList.remove('fadeout')
        feel.classList.remove('fadeout')
        alive.classList.remove('fadeout')
        btn.classList.remove('fadeout')
        
    }
    else{
        
        where.classList.remove('where')
        go.classList.remove('go')
        feel.classList.remove('feel')
        alive.classList.remove('alive')
        btn.classList.remove('btn')

        go.classList.add('fadeout')
        where.classList.add('fadeout')
        feel.classList.add('fadeout')
        alive.classList.add('fadeout')
        btn.classList.add('fadeout')



    }

   
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end>start ? 1 : -1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=increment;
            obj.textContent=current;
            if(current==end)
            {
                clearInterval(timer);
            }
        },step)

    }

  
    
    
})

//fade Function
function fade(element,position)
{
    var screenHeight=window.innerHeight
    var elementPositionfromTop=(element.getBoundingClientRect().top)*2;
    var screenPositionCalculation= screenHeight * (position/100);
    //  console.log(elementPositionfromTop)
    // console.log("scrren")
    // console.log(screenPositionCalculation)
    if(elementPositionfromTop<= screenPositionCalculation)
    {
        element.classList.add('fadein')
       
        
        
    }

    else{
        element.classList.remove('fadein')
        
    }


}


