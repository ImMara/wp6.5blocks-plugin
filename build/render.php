<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

 	$year = date("Y");
	$display;
	if(!empty($attributes['startYear']) && !empty($attributes['showStartYear'])) {
		$display = $attributes['startYear'] . ' - ' . $year;
	}else{
		$display = $year;
	}
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	Copyright : <?= $display ?>
</p>
