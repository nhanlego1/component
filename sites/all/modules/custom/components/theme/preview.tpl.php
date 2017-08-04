<?php
/**
 * Created by PhpStorm.
 * User: splasher
 * Date: 7/3/17
 * Time: 4:14 PM
 */
?>
<?php drupal_add_css($node->field_css_code[LANGUAGE_NONE][0]['value'],'inline') ?>
<!--<style>--><?php //print $node->field_css_code[LANGUAGE_NONE][0]['value'] ?><!--</style>-->
<?php print $node->field_html_code[LANGUAGE_NONE][0]['value'] ?>
