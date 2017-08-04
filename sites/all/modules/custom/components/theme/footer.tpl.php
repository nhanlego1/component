<?php
/**
 * Created by PhpStorm.
 * User: splasher
 * Date: 7/18/17
 * Time: 10:58 AM
 */
?>
<?php if($node): ?>
  <footer id="footer" class="footer-wrapper">
      <?php print $node->body[LANGUAGE_NONE][0]['value'] ?>
  </footer>
<?php endif; ?>
