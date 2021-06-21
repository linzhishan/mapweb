function $(id)
    {return document.getElementById(id);}
    
    function creatediv(className)
    {
        var div=document.createElement('div');
        div.className=className;
        return div;
    }
    var flag=false;
    var speed=5;
    var clock=null;
    var state=0;
    function chushihua()
    {
        flag=true;
        for(var i=0;i<4;i++)
            createhang();
    }
    function start()
    {
        if(!flag)
        {
            chushihua();
        }
    }

    $('beijing').onclick=function(ev)
    {ev=ev||event;
        judge(ev);}

    
        clock=window.setInterval('time()',35);
    
    function judge(ev)
    {
        if(ev.target.className.indexOf('white')==-1&&ev.target.className.indexOf('kuai')!=-1)
            {ev.target.parentNode.dianji1=1;}
        if(ev.target.className.indexOf('white')!=-1)
        {
            ev.target.className='kuai';
            ev.target.parentNode.dianji2=1;
            fenshu();
        }
    }
    function end()
    {
        var hangs=beijing1.childNodes;
        for(let i=0;i<hangs.length;i++)
            {if(hangs[i].dianji1==1)
                fail();}
        if(hangs.length==6&&hangs[hangs.length-1].dianji2!=1)
            { fail();}
    }
    function fail()
    {
      clearInterval(clock);
      flag=false;
      confirm('最终得分'+parseInt($('fenshu').innerHTML));
      var beijing1=$('beijing1');
      beijing1.innerHTML='';
      $('fenshu').innerHTML=0; 
      beijing1.style.top='-408px'
    }
    function createhang()
    {
        var beijing1=$('beijing1');
        var hang=creatediv('hang');
        var a=creatkuai();
        // alert(beijing1);
         beijing1.appendChild(hang);//添加行为背景1的子节点。
        for(var i=0;i<4;i++)
        {
            hang.appendChild(creatediv(a[i]));
        }
        if (beijing1.firstChild==null)
            {beijing1.appendChild(hang);}
        else {beijing1.insertBefore(hang,beijing1.firstChild);}
    }
    function creatkuai()
    {
        var arr=['kuai','kuai','kuai','kuai'];
        var i=Math.floor(Math.random()*4);
        arr[i]='kuai white';
        return arr;
    }
    function time()
    {
        var beijing1=$('beijing1');
        var top=parseInt(window.getComputedStyle(beijing1,null)['top']);
       if (speed + top > 0) {
  top = 0;
} else {
  top += speed;
  
}
 
        beijing1.style.top=top+'px';//不断移动top的值
        end();
        if(top==0)
            {createhang();
                beijing1.style.top='-102px';
                delhang();
            }
    }
    function speedup()
    {speed+=2;
    if(speed==20)
    {alert('太强了');
     }
     }
    function delhang()
    {
        var beijing1=$('beijing1');
        if(beijing1.childNodes.length=6)
        {
            beijing1.removeChild(beijing1.lastChild);
        }
    }
    function fenshu()
    {
        var newfenshu=parseInt($('fenshu').innerHTML)+1;
        $('fenshu').innerHTML=newfenshu;
        if(newfenshu%10==0)
        {speedup();
        }
}
