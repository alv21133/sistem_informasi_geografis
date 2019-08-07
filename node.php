<script type="text/javascript">
	var node = [];

</script>

<?php
	include 'config.php';
	$query= 'select * from node';
	$node= $conn->query($query);
	$titik = ['id'];
	while($nodes=$node->fetch_assoc()) {
		 array_push($titik['id'], $nodes['id']);
	}

	echo "r";
	print_r($titik);

?>