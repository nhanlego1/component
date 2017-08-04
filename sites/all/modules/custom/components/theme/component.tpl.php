<?php
/**
 * Created by PhpStorm.
 * User: splasher
 * Date: 7/3/17
 * Time: 11:55 AM
 */
?>
<?php if ($nodes): ?>
  <script type="text/javascript">
    <?php foreach ($nodes as $node): ?>

    <?php
    $data = str_replace('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">','',components_minify($node->field_html_code[LANGUAGE_NONE][0]['value'],'html'));
    $data = preg_replace('/^.+\n/', '', $data);

    ?>


        blockManager.add('<?php print str_replace(' ', '', $node->title) ?>', {
            label: '<?php print $node->title ?>',
            category:'Custom',
            content: '<?php print $data ?>',
            attributes: {
                class: 'fa <?php print $node->field_icon[LANGUAGE_NONE][0]['value'] ?>'
            }
        });

    <?php endforeach; ?>
  </script>
<?php endif; ?>
