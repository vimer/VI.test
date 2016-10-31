<?php
	$salted = '123456{eri29s69kjk0ko8400wsc488g80c8s0}';
    $digest = hash('sha256', $salted, true);
	echo "第一组".base64_encode($digest)."\n";
	for ($i=1; $i<3; ++$i) {
		$digest = hash('sha256', $digest.$salted, true);
	}
	//echo $digest;
	echo base64_encode($digest);
	//echo "123456"."asd"
?>
