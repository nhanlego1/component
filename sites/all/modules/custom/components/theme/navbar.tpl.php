<?php
/**
 * Created by PhpStorm.
 * User: splasher
 * Date: 7/17/17
 * Time: 5:01 PM
 */
?>
<?php if ($node): ?>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <?php if(isset($node->field_menu_link[LANGUAGE_NONE])): ?>
            <?php foreach($node->field_menu_link[LANGUAGE_NONE] as $key => $link): ?>
              <li><a class="<?php print $node->field_class[LANGUAGE_NONE][$key]['value'] ?>" target="<?php print $node->field_menu_target[LANGUAGE_NONE][$key]['value'] ?>" href="<?php print $link['value'] ?>"><?php print $node->field_menu_title[LANGUAGE_NONE][$key]['value'] ?></a></li>
            <?php endforeach; ?>
        <?php endif; ?>
        </ul>
      </div>
    </div>
  </nav>
<?php endif; ?>
