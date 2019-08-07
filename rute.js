	var start =node[2];
	var dest = node[60];
	var openlist = [start];
	var closelist = [];
	while(openlist.length!=0 && !closelist.includes(dest)) {
		while(openlist.length!=0 && !closelist.includes(dest)) {
			closelist[closelist.length]=openlist[0];
			openlist.splice(0,1);
		}
		let unique = [...new Set(closelist)];
		closelist= unique;
		for(var tot=0;tot<(node[node.length-1].id);tot++) {
			if(node[tot]!=null) {
				for(cl=closelist.length-1;cl>=0;cl--) {
					var parent = closelist[cl];
					if(!closelist.includes(node[tot])) {
						if(			
							(((closelist[cl].x == (node[tot].x)-1) && (closelist[cl].y == (node[tot].y)))
							&& (node[tot].block==0) )
							||
							(((closelist[cl].x == (node[tot].x)+1) && (closelist[cl].y == (node[tot].y)))
							&& (node[tot].block==0) )
							||
							(((closelist[cl].x == (node[tot].x)) && (closelist[cl].y == (node[tot].y)-1))
							&& (node[tot].block==0) )
							||
							(((closelist[cl].x == (node[tot].x)) && (closelist[cl].y == (node[tot].y)+1))
							&& (node[tot].block==0) )
							) {
								node[tot].parentid=parent.id-1;
								openlist[openlist.length]=node[tot];
						}
					}
				}
			}
		}
		let test = [...new Set(openlist)];
		 openlist= test;
	}

	var rute = [dest.id-1];
		while(!rute.includes(start.id-1)) {
			rute[rute.length]=node[rute[rute.length-1]].parentid;
		}
	rute.reverse();

	document.getElementById("demo").innerHTML = "rutenya adalah : "+rute;