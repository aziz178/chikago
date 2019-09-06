// var x=5
// var y=2
// var z=x+y
// console.log(z);

// var a=5
// var b=2
// var c=5 
// console.log(a==b);
// console.log(a==c);

// var i;
// for(i=0;i<10;i++){console.log(i);
// }

// var i=0
// while(i<10){console.log(i),i++;}

// var myarray=[1,2,3,4]
// console.log(myarray[3])//returns4

// var myarray=[1,2,3,4];
// var otherarray=["1","2","3"];
// console.log(myarray);

// var myarray=[1,2,3,4,]
// myarray.push(5);
// alert(myarray)



// var myarray=[1,2,3,4,5]
// myarray.pop();
// console.log(myarray);

// function mean(a,b,c)
// {return((a+b+c)/3);}
// console.log(mean(2,2,2));

// var getid=document.getElementById("mypara").innerHTML;
 
var txt = document.getElementById("messi");
function italic(){
    if(txt.style.fontStyle=="italic"){
        txt.style.fontStyle="normal"
    }else txt.style.fontStyle="italic";
}

function bold(){
    if(txt.style.fontWeight=="bold"){
        txt.style.fontWeight="normal"
    }else txt.style.fontWeight="bold";
}
function underline(){
    if(txt.style.textDecoration=="underline"){
        txt.style.textDecoration="none"
    }else txt.style.textDecoration="underline";}

    function sizechange(){
        var size = document.getElementById("ronaldo").value
        txt.style.fontSize=size;
    }
    function stylechange(){
        var style = document.getElementById("gomez").value
        txt.style.fontFamily=style;
    }
    $(".but").hover(function(){
        $(this).css("opacity","0.5")
        $(this).find("button").show()
    },function(){
        $(this).css("opacity","1")
        $(this).find("button").hide()
    
    });
    $(".but button").click(function(){
        $("#ex1").modal()
    })

    
