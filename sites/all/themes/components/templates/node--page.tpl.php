<?php
/**
 * Template automatic for page
 */
$layout = false;
if (isset($node->field_template[LANGUAGE_NONE])) {
    $layout = node_load($node->field_template[LANGUAGE_NONE][0]['target_id']);
}

?>
<?php if ($layout): ?>
    <?php drupal_add_css($layout->field_css_code[LANGUAGE_NONE][0]['value'], 'inline') ?>
<?php endif; ?>
<?php if ($template): ?>
    <?php print $template?>
<?php endif; ?>

