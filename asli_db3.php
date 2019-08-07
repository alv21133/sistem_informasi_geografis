
<div style="overflow: scroll; width: 100%; height: 100%; border: 10px solid black;">
<canvas id="peta" width="getwidth()" height="getheight()"  style=""></canvas>
</div>
<p id="demo">aaaaaaaaa	</p>
<?php
	include 'config.php';
	$sql = "SELECT * FROM node";
	
	$result = $conn->query($sql);
	$isi= [];

	while($row = $result->fetch_assoc()) {
		$isi[count($isi)]=$row;
	};
?>
<script>
	
	window.onload=function () {
		canv=document.getElementById("peta");
		canv.width = 60+<?php echo $isi[count($isi)-1]['x']; ?>*60;
		canv.height =60+<?php echo $isi[count($isi)-1]['y']; ?>*60;
		ctx=canv.getContext("2d");	
		game();
	}
	function getRndInteger(min, max) {
  			return Math.floor(Math.random() * (max - min)) + min;
		}
	class titik {
		constructor(id,x,y,block,parentid,g,h,jalan) {
			this.id=id;
			this.x=x;
			this.y=y;
			this.block=block;
			this.parentid=parentid
			this.g=g;
			this.h=h;
			this.jalan = jalan;
		}
	}
	node = [];
	<?php 
	foreach ($isi as $i) {
		echo "node[node.length] = new titik({$i['id']}, {$i['x']}, {$i['y']},{$i['block']},null,null,null,{$i['jalan']});";
	}

	?>
	function game() {
		for(var i=0;i<node.length;i++) {
			if(node[i].block==1) {
				ctx.fillStyle="#E0E0E0";
				ctx.fillRect(node[i].x*60,node[i].y*60,60,60);
				ctx.fillStyle="red";
				ctx.fillText("block="+node[i].block,(node[i].x*60+12),(node[i].y*60+20));
				ctx.fillText("id="+node[i].id,(node[i].x*60+12),(node[i].y*60+30));
				ctx.fillText("x="+node[i].x,(node[i].x*60+12),(node[i].y*60+40));
				ctx.fillText("y="+node[i].y,(node[i].x*60+12),(node[i].y*60+50));
				}
			if(node[i].block==0) {
			ctx.fillStyle="white";
			ctx.fillRect(node[i].x*60,node[i].y*60,60,60);
			ctx.fillStyle="blue";

			ctx.fillText("jl="+node[i].f,(node[i].x*60+12),(node[i].y*60+20));
			ctx.fillText("id="+(node[i].g),(node[i].x*60+12),(node[i].y*60+30));
			ctx.fillText("x="+node[i].h,(node[i].x*60+12),(node[i].y*60+40));
			ctx.fillText("y="+node[i].y,(node[i].x*60+12),(node[i].y*60+50));
			}
		}
									
	}
</script>
<script type="text/javascript" src="ruteastarfix2.js"></script>