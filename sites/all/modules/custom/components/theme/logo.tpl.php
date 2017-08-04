<?php
/**
 * Created by PhpStorm.
 * User: splasher
 * Date: 7/18/17
 * Time: 10:58 AM
 */
?>
<?php if($node): ?>
 <img class="<?php print $node->field_class[LANGUAGE_NONE][0]['value'] ?>" src="<?php print url($node->field_logo[LANGUAGE_NONE][0]['value']) ?>"/>
<?php endif; ?>
