function cari_ruteu(s,d) {
	var start =node[s-1];
	var dest = node[d-1];
	node[start.id-1].g=0;
	node[start.id-1].h=h=Math.sqrt(Math.abs((Math.pow(start.x-dest.x,2))+(Math.pow(start.y-dest.y,2))));
	node[start.id-1].f=node[start.id-1].g+node[start.id-1].h;
	openlist = [start];
	closelist=[];
	while(openlist.length!=0 && !closelist.includes(dest)) {
		while(openlist.length!=0 && !closelist.includes(dest)) {
			closelist[closelist.length]=openlist[0];
			openlist.splice(0,1);
		}
		let unique = [...new Set(closelist)];
		closelist= unique;

		if(!closelist.includes(dest)) {
			extendeu(dest);	
		}
		if(!closelist.includes(dest) && openlist.length<1) {
			extendedeu(dest);

		}
		let test = [...new Set(openlist)];
		 openlist= test;	
	}

	rute = [dest.id-1];
		while(!rute.includes(start.id-1)) {
			rute[rute.length]=node[rute[rute.length-1]].parentid;
		}
	rute.reverse();
	var jalanrute = [];
	for(i=0;i<rute.length;i++) {
		jalanrute[jalanrute.length] = node[rute[i]].jalan;
	}
	let jl = [...new Set(jalanrute)];
	jalanrute = jl;
	for(i=0;i<jalanrute.length;i++) {
		if(jalanrute[i]==0)
		jalanrute.splice(i,1);
	}
	for(i=0;i<jalanrute.length;i++) {
		jalanrute[i]=jalans[jalanrute[i]-1].nama;
	}
	document.getElementById("demo").innerHTML = "rutenya adalah : "+rute;
	document.getElementById("jalan").innerHTML = "jalannya adalah : "+jalanrute;
	}
	function extendedeu(dd) {
	for(cl=closelist.length-1;cl>=0;cl--) {
		if(node[closelist[cl].id] != null && !closelist.includes(node[closelist[cl].id])) {
			if(node[closelist[cl].id].block==0 && node[closelist[cl].id].x==closelist[cl].x && node[closelist[cl].id].y==closelist[cl].y+1) {
				node[closelist[cl].id].parentid=closelist[cl].id-1;
				openlist[openlist.length]=node[closelist[cl].id];
				node[closelist[cl].id].g=closelist[cl].g+1;
				node[closelist[cl].id].h=Math.sqrt(Math.abs((Math.pow(node[closelist[cl].id].x-dd.x,2))+(Math.pow(node[closelist[cl].id].y-dd.y,2))));
				node[closelist[cl].id].f=node[closelist[cl].id].g+node[closelist[cl].id].h;
				}
			}
		if(node[closelist[cl].id-2] != null && !closelist.includes(node[closelist[cl].id-2])) {
			if(node[closelist[cl].id-2].block==0 && node[closelist[cl].id-2].x==closelist[cl].x && node[closelist[cl].id-2].y==closelist[cl].y-1) {
				node[closelist[cl].id-2].parentid=closelist[cl].id-1;
				openlist[openlist.length]=node[closelist[cl].id-2];
				node[closelist[cl].id-2].g=closelist[cl].g+1;
				node[closelist[cl].id-2].h=Math.sqrt(Math.abs((Math.pow(node[closelist[cl].id-2].x-dd.x,2))+(Math.pow(node[closelist[cl].id-2].y-dd.y,2))));
				node[closelist[cl].id-2].f=node[closelist[cl].id-2].g+node[closelist[cl].id-2].h;
			}
		}
		if(node[closelist[cl].id+105] != null && !closelist.includes(node[closelist[cl].id+105]))  {
			if(node[closelist[cl].id+105].block==0 && node[closelist[cl].id+105].x==closelist[cl].x+1 && node[closelist[cl].id+105].y==closelist[cl].y) {
				node[closelist[cl].id+105].parentid=closelist[cl].id-1;
				openlist[openlist.length]=node[closelist[cl].id+105];
				node[closelist[cl].id+105].g=closelist[cl].g+1;
				node[closelist[cl].id+105].h=Math.sqrt(Math.abs((Math.pow(node[closelist[cl].id+105].x-dd.x,2))+(Math.pow(node[closelist[cl].id+105].y-dd.y,2))));
				node[closelist[cl].id+105].f=node[closelist[cl].id+105].g+node[closelist[cl].id+105].h;
			}
		}
		if(node[closelist[cl].id-107] != null && !closelist.includes(node[closelist[cl].id-107])) {
			if(node[closelist[cl].id-107].block==0 && node[closelist[cl].id-107].x==closelist[cl].x-1 && node[closelist[cl].id-107].y==closelist[cl].y) {
				node[closelist[cl].id-107].parentid=closelist[cl].id-1;
				openlist[openlist.length]=node[closelist[cl].id-107];
				node[closelist[cl].id-107].g=closelist[cl].g+1;
				node[closelist[cl].id-107].h=Math.sqrt(Math.abs((Math.pow(node[closelist[cl].id-107].x-dd.x,2))+(Math.pow(node[closelist[cl].id-107].y-dd.y,2))));
				node[closelist[cl].id-107].f=node[closelist[cl].id-107].g+node[closelist[cl].id-107].h;
				}
			}
		}
	}

		function extendeu(dd) {
			for(cl=closelist.length-1;cl>=0;cl--) {
				if(openlist.length<1 && node[closelist[cl].id] != null  && !closelist.includes(node[closelist[cl].id])) {
					if(node[closelist[cl].id].block==0 && node[closelist[cl].id].x==closelist[cl].x && node[closelist[cl].id].y==closelist[cl].y+1) {
						node[closelist[cl].id].parentid=closelist[cl].id-1;
						node[closelist[cl].id].g=closelist[cl].g+1;
						node[closelist[cl].id].h=Math.sqrt(Math.abs((Math.pow(node[closelist[cl].id].x-dd.x,2))+(Math.pow(node[closelist[cl].id].y-dd.y,2))));
						node[closelist[cl].id].f=node[closelist[cl].id].g+node[closelist[cl].id].h;
						if (node[closelist[cl].id].h<closelist[cl].h && (node[closelist[cl].id].f<=closelist[cl].f || Math.abs(node[closelist[cl].id].f+closelist[cl].f))) {
							openlist[openlist.length]=node[closelist[cl].id];
						}
					}
				}
				if(openlist.length<1 && node[closelist[cl].id-2] != null && !closelist.includes(node[closelist[cl].id-2])) {
					if(node[closelist[cl].id-2].block==0 && node[closelist[cl].id-2].x==closelist[cl].x && node[closelist[cl].id-2].y==closelist[cl].y-1) {
						node[closelist[cl].id-2].parentid=closelist[cl].id-1;
						node[closelist[cl].id-2].g=closelist[cl].g+1;
						node[closelist[cl].id-2].h=Math.sqrt(Math.abs((Math.pow(node[closelist[cl].id-2].x-dd.x,2))+(Math.pow(node[closelist[cl].id-2].y-dd.y,2))));
						node[closelist[cl].id-2].f=node[closelist[cl].id-2].g+node[closelist[cl].id-2].h;
						if (node[closelist[cl].id-2].h<closelist[cl].h && (node[closelist[cl].id-2].f<=closelist[cl].f || Math.abs(node[closelist[cl].id-2].f+closelist[cl].f))) {
							openlist[openlist.length]=node[closelist[cl].id-2];
						}
					}
				}
				if(openlist.length<1 && node[closelist[cl].id+105] != null && !closelist.includes(node[closelist[cl].id+105]) ) {
					if(node[closelist[cl].id+105].block==0 && node[closelist[cl].id+105].x==closelist[cl].x+1 && node[closelist[cl].id+105].y==closelist[cl].y) {
						node[closelist[cl].id+105].parentid=closelist[cl].id-1;
						node[closelist[cl].id+105].g=closelist[cl].g+1;
						node[closelist[cl].id+105].h=Math.sqrt(Math.abs((Math.pow(node[closelist[cl].id+105].x-dd.x,2))+(Math.pow(node[closelist[cl].id+105].y-dd.y,2))));
						node[closelist[cl].id+105].f=node[closelist[cl].id+105].g+node[closelist[cl].id+105].h;
						if (node[closelist[cl].id+105].h<closelist[cl].h && (node[closelist[cl].id+105].f<=closelist[cl].f || Math.abs(node[closelist[cl].id+105].f+closelist[cl].f))) {
							openlist[openlist.length]=node[closelist[cl].id+105];
						}
					}
				}
				if(openlist.length<1 && node[closelist[cl].id-107] != null && !closelist.includes(node[closelist[cl].id-107])) {
					if(node[closelist[cl].id-107].block==0 && node[closelist[cl].id-107].x==closelist[cl].x-1 && node[closelist[cl].id-107].y==closelist[cl].y) {
						node[closelist[cl].id-107].parentid=closelist[cl].id-1;
						node[closelist[cl].id-107].g=closelist[cl].g+1;
						node[closelist[cl].id-107].h=Math.sqrt(Math.abs((Math.pow(node[closelist[cl].id-107].x-dd.x,2))+(Math.pow(node[closelist[cl].id-107].y-dd.y,2))));
						node[closelist[cl].id-107].f=node[closelist[cl].id-107].g+node[closelist[cl].id-107].h;
						if (node[closelist[cl].id-107].h<closelist[cl].h && (node[closelist[cl].id-107].f<=closelist[cl].f || Math.abs(node[closelist[cl].id-107].f+closelist[cl].f))) {
							openlist[openlist.length]=node[closelist[cl].id-107];
						}
					}
				}
			}
		 }

