<?php
	include 'config.php';
	$sql = "SELECT * FROM node";
	$sqll = "SELECT * FROM LOKASI";
	$jalan = "SELECT * FROM jalan";
	$result = $conn->query($sql);
	$resultt = $conn->query($sqll);
	$resultjl = $conn->query($jalan);
	$isi= [];
	$isii = [];
	$isijl = [];

	while($row = $result->fetch_assoc()) {
		$isi[count($isi)]=$row;
	};
	while ($roww = $resultt->fetch_assoc()) {
		$isii[count($isii)]=$roww;
	}
	while ($rowjl = $resultjl->fetch_assoc()) {
		$isijl[count($isijl)]=$rowjl;
	}
?>

<center>
	<select id="algoritma">
		<option>Dijkstra</option>
		<option>Astar Manhattan</option>
		<option>Astar Euclidean</option>
	</select>
	<button onclick="hitung()">Tampilkan/Sembunyikan Perhitungan</button>
	<br>
	<select name="start" id="start">
		<?php
			foreach($isii as $lok) {
				echo "<option value={$lok['titik_jalan']}>{$lok['nama']}</option>";
			}
		?>
	</select>
	<button onclick="SelectElement('start','dest')">Balik</button>
	<br>
	<br>
	<select name="dest" id="dest">
		<?php
			foreach($isii as $lok) {
				echo "<option value={$lok['titik_jalan']}>{$lok['nama']}</option>";
			}
		?>
	</select>
	<button onclick="pilih_algoritma(
	document.getElementById('algoritma').options[document.getElementById('algoritma').selectedIndex].value,
	document.getElementById('start').options[document.getElementById('start').selectedIndex].value, 
	document.getElementById('dest').options[document.getElementById('dest').selectedIndex].value)">Cari </button>
	<div style="overflow: scroll; width: 100%; height: 90%; border: 5px solid black;">
		<canvas id="peta" width="getwidth()" height="getheight()"  style=""></canvas>
	</div>
	<button onclick="zoomin()">zoom in</button>
	<button onclick="zoomout()">zoom out</button>


</center>

<p id="demo">aaaaaaaaa	</p>
<p id="jalan">rrr</p>
<script>
	var perhitungan = -1;
	var kotak=60;
	window.onload=function () {
		canv=document.getElementById("peta");
		canv.width = kotak+<?php echo $isi[count($isi)-1]['x']; ?>*kotak;
		canv.height =kotak+<?php echo $isi[count($isi)-1]['y']; ?>*kotak;
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
	class lok {
		constructor(nama,titik_posisi) {
			this.nama=nama;
			this.titik_posisi=titik_posisi;
		}
	}
	class jalan {
		constructor(id,nama) {
			this.id=id;
			this.nama=nama;
		}
	}
	var rute =[];
	node = [];
	lokasi=[];
	jalans=[];
	<?php 
	foreach ($isi as $i) {
		echo "node[node.length] = new titik({$i['id']}, {$i['x']}, {$i['y']},{$i['block']},null,null,null,{$i['jalan']});";
	}
	foreach($isii as $locate) {
		echo "lokasi[lokasi.length] = new lok('{$locate['nama']}', {$locate['titik_posisi']});";
	}
	foreach($isijl as $jl) {
		echo "jalans[jalans.length] = new jalan('{$jl['id']}', '{$jl['nama']}');";
	}
	?>
	function game() {
		if(rute.length<1) {
			for(var i=0;i<node.length;i++) {
				if(node[i].block==1) {
					ctx.fillStyle="#E0E0E0";
					ctx.fillRect(node[i].x*kotak,node[i].y*kotak,kotak,kotak);
				}
				if(node[i].block==0) {
					ctx.fillStyle="white";
					ctx.fillRect(node[i].x*kotak,node[i].y*kotak,kotak,kotak);
					if(perhitungan==1) {
						ctx.fillStyle="black";
						ctx.fillText("id="+(node[i].id-1),(node[i].x*kotak+22),(node[i].y*kotak+10));
						ctx.fillText("x="+node[i].x,(node[i].x*kotak+22),(node[i].y*kotak+20));
						ctx.fillText("y="+node[i].y,(node[i].x*kotak+22),(node[i].y*kotak+30));
						ctx.fillText("g="+node[i].g,(node[i].x*kotak+22),(node[i].y*kotak+40));
						ctx.fillText("h="+parseFloat(node[i].h).toFixed(2),(node[i].x*kotak+22),(node[i].y*kotak+50));
					}
				}
			}
		} else {
			for(var i=0;i<node.length;i++) {
				if(node[i].block==1) {
					ctx.fillStyle="#E0E0E0";
					ctx.fillRect(node[i].x*kotak,node[i].y*kotak,kotak,kotak);
				}
				if(node[i].block==0) {
					ctx.fillStyle="white";
					ctx.fillRect(node[i].x*kotak,node[i].y*kotak,kotak,kotak);
					
					if(perhitungan==1) {
						ctx.fillStyle="black";
						ctx.fillText("id="+(node[i].id-1),(node[i].x*kotak+22),(node[i].y*kotak+10));
						ctx.fillText("x="+node[i].x,(node[i].x*kotak+22),(node[i].y*kotak+20));
						ctx.fillText("y="+node[i].y,(node[i].x*kotak+22),(node[i].y*kotak+30));
						ctx.fillText("g="+node[i].g,(node[i].x*kotak+22),(node[i].y*kotak+40));
						ctx.fillText("h="+parseFloat(node[i].h).toFixed(2),(node[i].x*kotak+22),(node[i].y*kotak+50));
					}
				}
				if(rute.includes(node[i].id-1)) {
					ctx.fillStyle="blue";
					ctx.fillRect(node[i].x*kotak,node[i].y*kotak,kotak,kotak);
					if(perhitungan==1) {
						ctx.fillStyle="black";
						ctx.fillText("id="+(node[i].id-1),(node[i].x*kotak+22),(node[i].y*kotak+10));
						ctx.fillText("x="+node[i].x,(node[i].x*kotak+22),(node[i].y*kotak+20));
						ctx.fillText("y="+node[i].y,(node[i].x*kotak+22),(node[i].y*kotak+30));
						ctx.fillText("g="+node[i].g,(node[i].x*kotak+22),(node[i].y*kotak+40));
						ctx.fillText("h="+parseFloat(node[i].h).toFixed(2),(node[i].x*kotak+22),(node[i].y*kotak+50));

					}
				}
			}
		}
		for(var i=0; i<lokasi.length;i++) {
			ctx.fillStyle="black";
						ctx.beginPath();
						ctx.arc(node[lokasi[i].titik_posisi-1].x*kotak,node[lokasi[i].titik_posisi-1].y*kotak,kotak/2, 0, 2 * Math.PI);
						ctx.stroke();
						ctx.fill();
						ctx.textAlign = "center";
						ctx.fillText(lokasi[i].nama,(node[lokasi[i].titik_posisi-1].x*kotak),(node[lokasi[i].titik_posisi-1].y*kotak)+kotak);
		}							
	}

	function zoomout() {
		if(kotak>10) {
			kotak=kotak-10;
			canv.width = kotak+<?php echo $isi[count($isi)-1]['x']; ?>*kotak;
			canv.height =kotak+<?php echo $isi[count($isi)-1]['y']; ?>*kotak;
			game();
		}
		else {
			alert("zoom out maksimal");
		}
	}
	function zoomin() {
		if(kotak<100) {
		kotak=kotak+10;
		canv.width = kotak+<?php echo $isi[count($isi)-1]['x']; ?>*kotak;
		canv.height =kotak+<?php echo $isi[count($isi)-1]['y']; ?>*kotak;
		game();
		}
	}
	function SelectElement(id, idd)
	{    
	    var element = document.getElementById(id);
	    var elements=document.getElementById(idd);
	    var elementss = element.value;
	    element.value = elements.value;
	    elements.value = elementss;
	}
	function pilih_algoritma(a,s,d) {
		var timestart= performance.now();
		var openlist = [];
		var closelist = [];
		if(a=="Dijkstra") {
			cari_rute(s,d);
		}
		if(a=="Astar Manhattan") {
			cari_ruteman(s,d);
		}
		if(a=="Astar Euclidean") {
			cari_ruteu(s,d);
		}
		console.log(performance.now()-timestart);
		game();
	}
	function hitung() {
		perhitungan=perhitungan*-1;
		game();
	}
</script>
<script type="text/javascript" src="rutefix.js"></script>
<script type="text/javascript" src="ruteastarfix.js"></script>
<script type="text/javascript" src="ruteastarfix2.js"></script>