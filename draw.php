

<canvas id="peta" width="3300" height="5220"  style="margin: 10%; border: 10px solid black;"></canvas>


<script type="text/javascript" src="node.js"></script>

<script>
	window.onload=function () {
		canv=document.getElementById("peta");
		ctx=canv.getContext("2d");	
		game();
	}
	function getRndInteger(min, max) {
  			return Math.floor(Math.random() * (max - min)) + min;
		}
	class titik {
		constructor(id,x,y,block,parentid,g,h) {
			this.id=id;
			this.x=x;
			this.y=y;
			this.block=block;
			this.parentid=parentid
			this.g=g;
			this.h=h;
		}
	}
	
	function game() {
		for (var i=0;i<55;i++) {
			for (var j=0;j<87;j++) {
			if(node[j][i]==1) {
				ctx.fillStyle="#E0E0E0";
				ctx.fillRect(i*60,j*60,60,60);
				}
			if(node[j[i]]==0) {
				ctx.fillStyle="white";
				ctx.fillRect(i*60,j*60,60,60);
				}
			
			}	 						
		}
	}
</script>