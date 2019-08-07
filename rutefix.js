function cari_rute(s,d) {
	var start =node[s-1];
	var dest = node[d-1];
	var openlist = [start];
	var closelist = [];
	while(openlist.length!=0 && !closelist.includes(dest)) {
		while(openlist.length!=0 && !closelist.includes(dest)) {
			closelist[closelist.length]=openlist[0];
			openlist.splice(0,1);
		}
		let unique = [...new Set(closelist)];
		closelist= unique;
				for(cl=closelist.length-1;cl>=0;cl--) {
					if(node[closelist[cl].id] != null && !closelist.includes(node[closelist[cl].id])) {
						if(node[closelist[cl].id].block==0 && node[closelist[cl].id].x==closelist[cl].x && node[closelist[cl].id].y==closelist[cl].y+1) {
							node[closelist[cl].id].parentid=closelist[cl].id-1;
							openlist[openlist.length]=node[closelist[cl].id];
						}
					}
					if(node[closelist[cl].id-2] != null && !closelist.includes(node[closelist[cl].id-2])) {
						if(node[closelist[cl].id-2].block==0 && node[closelist[cl].id-2].x==closelist[cl].x && node[closelist[cl].id-2].y==closelist[cl].y-1) {
							node[closelist[cl].id-2].parentid=closelist[cl].id-1;
							openlist[openlist.length]=node[closelist[cl].id-2];
						}
					}
					if(node[closelist[cl].id+105] != null && !closelist.includes(node[closelist[cl].id+105])) {
						if(node[closelist[cl].id+105].block==0 && node[closelist[cl].id+105].x==closelist[cl].x+1 && node[closelist[cl].id+105].y==closelist[cl].y) {
							node[closelist[cl].id+105].parentid=closelist[cl].id-1;
							openlist[openlist.length]=node[closelist[cl].id+105];
						}
					}
					if(node[closelist[cl].id-107] != null && !closelist.includes(node[closelist[cl].id-107])) {
						if(node[closelist[cl].id-107].block==0 && node[closelist[cl].id-107].x==closelist[cl].x-1 && node[closelist[cl].id-107].y==closelist[cl].y) {
							node[closelist[cl].id-107].parentid=closelist[cl].id-1;
							openlist[openlist.length]=node[closelist[cl].id-107];
						}
					}
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
	console.log(jalan);
	document.getElementById("demo").innerHTML = "rutenya adalah : "+rute;
	document.getElementById("jalan").innerHTML = "jalannya adalah : "+jalanrute;
	console.log(closelist);
	document.getElementById("demo").innerHTML = "rutenya adalah : "+rute;
}