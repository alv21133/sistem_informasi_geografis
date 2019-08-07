	var start =node[0];
	var dest = node[106];
	node[start.id-1].h=h=Math.abs(start.x-dest.x)+Math.abs(start.y-dest.y);
	node[start.id-1].f=node[start.id-1].g+node[start.id-1].h;
	var openlist = [start];
	var closelist=[];
	while(openlist.length!=0 && !closelist.includes(dest)) {
		while(openlist.length!=0 && !closelist.includes(dest)) {
			closelist[closelist.length]=openlist[0];
			openlist.splice(0,1);
		}
		let unique = [...new Set(closelist)];
		closelist= unique;

		if(!closelist.includes(dest)) {
			extend();	
		}
		if(!closelist.includes(dest) && openlist.length<1) {
			extended();
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
	function extend() {
	for(var tot=0;tot<(node[node.length-1].id) && openlist.length<1;tot++) {
		for(cl=closelist.length-1;cl>=0 && openlist.length<1;cl--) {
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
							node[tot].g=parent.g+1;
							node[tot].parentid=parent.id-1;
							node[tot].h=Math.abs(node[tot].x-dest.x)+Math.abs(node[tot].y-dest.y);
							node[tot].f=node[tot].g+node[tot].h;
								if (node[tot].h<parent.h && node[tot].f<=parent.f) {
									openlist[openlist.length]=node[tot];
								}
					}
				}
			}
		}
	}

	function extended() {
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
								node[tot].g=parent.g+1;
								node[tot].parentid=parent.id-1;
								node[tot].h=Math.abs(node[tot].x-dest.x)+Math.abs(node[tot].y-dest.y);
								node[tot].f=node[tot].g+node[tot].h;
								openlist[openlist.length]=node[tot];
						}
					}
				}
			}
		}
	}

	console.log(closelist);