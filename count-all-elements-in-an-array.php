<!DOCTYPE html>
<html lang="en">
<head>
    <title>Example of Counting an Array Values in PHP</title>
</head>
<body>

<?php
$days = array(array('sun', 'mon'), "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
 
// Printing array size
echo 'Total number of elements in the $days array is - ' . count($days[0]);
echo "<br>";
echo 'Total number of elements in the $days array is - ' . sizeof($days);
?>

</body>
</html>