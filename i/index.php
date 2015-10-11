<?php

	require('imageIpsum.php');
	require('ss-ga.class.php');

	ssga_track( 'UA-YOUR_NUMBER', 'yoursite.com', '/page.php' )

	// Class initialized
	$ipsumHandler = new imageIpsum('./originals/', './resized/', 'CHANGE_THIS_TO_YOUR_IPSUM_NAME');
	
	if (isset($_GET['x']) && isset($_GET['y'])) {
		$width = min($_GET['x'], 2000);
		$heigt = min($_GET['y'], 2000);

		// open the file in a binary mode
		$name = $ipsumHandler->serve($width, $heigt);
		$fp = fopen($name, 'rb');

		// send the right headers
		header("Content-Type: image/jpg");
		header("Content-Length: " . filesize($name));

		// dump the picture and stop the script
		fpassthru($fp);
		exit;
	}
	else{
		echo 'Give me a fucking resolution!2 (x and y get variables, max size 2000x2000)';
	}

?>