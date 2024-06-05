<?php
$numbers = array(1, 1);
for ($i=1; $i<= 100; $i++) {
  $new_number = $numbers[$i - 1] + $numbers[$i];
  array_push($numbers, $new_number);
}
foreach ($numbers as $number){
    echo "$number \n";
}
?>
