<?php
	$salted = '123456{$2a$10$QQms0l0s0vWoAdCdo7i0y.}';
    $digest = hash('sha256', $salted, true);
	echo "第一组".base64_encode($digest)."\n";
	for ($i=1; $i<3; ++$i) {
		$digest = hash('sha256', $digest.$salted, true);
	}
	//echo $digest;
	echo base64_encode($digest);
	//echo "123456"."asd"
?>
