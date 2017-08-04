<?php
/**
 * Created by PhpStorm.
 * User: splasher
 * Date: 7/17/17
 * Time: 10:12 AM
 */
global $user;
?>
<div id="form-wrapper-save" class="form-save-wrapper">
    <i class="close-button fa fa-close"></i>

    <form method="post" class="form-save">
        <?php if($node && $node->uid==$user->uid): ?>
            <h2>Update your design</h2>
            <input type="text" value="<?php print $node->title ?>" required="required" id="title-component" class="title-component"
                   placeholder="What is your desgin name" name="title"/>
        <?php else: ?>
            <h2>Saving your design</h2>
            <input type="text" required="required" id="title-component" class="title-component"
                   placeholder="What is your desgin name" name="title"/>
        <?php endif; ?>
        <input type="hidden" id="html-component" class="html-component" name="html" value/>
        <input type="hidden" id="nid-component" class="nid-component" value="<?php isset($node) ? print $node->nid : false; ?>" name="nid" value/>
        <input type="hidden" id="css-component" class="css-component" name="css"/>
        <input type="hidden" id="image-component" class="image-component" name="image"/>
        <input type="submit" class="submit-component" value="Save"/>
    </form>
</div>
