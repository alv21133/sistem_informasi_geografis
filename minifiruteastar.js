var start=node[10];console.log(node.length);var dest=node[1812],ol2=[];node[start.id-1].h=h=Math.abs(start.x-dest.x)+Math.abs(start.y-dest.y),node[start.id-1].f=node[start.id-1].g+node[start.id-1].h;var openlist=[start],closelist=[],fcount=[],hcount=[];for(ol2=[];0!=openlist.length&&!closelist.includes(dest);){for(;0!=openlist.length&&!closelist.includes(dest);)closelist[closelist.length]=openlist[0],openlist.splice(0,1);closelist=[...new Set(closelist)];for(var tot=0;tot<node[node.length-1].id&&openlist.length<1;tot++)if(null!=node[tot])for(cl=0;cl<closelist.length&&openlist.length<1;cl++){var parent=closelist[cl];closelist.includes(node[tot])||(closelist[cl].x==node[tot].x-1&&closelist[cl].y==node[tot].y&&0==node[tot].block||closelist[cl].x==node[tot].x+1&&closelist[cl].y==node[tot].y&&0==node[tot].block||closelist[cl].x==node[tot].x&&closelist[cl].y==node[tot].y-1&&0==node[tot].block||closelist[cl].x==node[tot].x&&closelist[cl].y==node[tot].y+1&&0==node[tot].block)&&(node[tot].g=parent.g+1,node[tot].parentid=parent.id-1,node[tot].h=Math.abs(node[tot].x-dest.x)+Math.abs(node[tot].y-dest.y),node[tot].f=node[tot].g+node[tot].h,node[tot].h<parent.h&&node[tot].f<=parent.f&&(openlist[openlist.length]=node[tot]))}openlist=[...new Set(openlist)]}var rute=[dest.id-1];for(console.log(closelist);!rute.includes(start.id-1);)rute[rute.length]=node[rute[rute.length-1]].parentid;rute.reverse(),document.getElementById("demo").innerHTML="rutenya adalah : "+rute;