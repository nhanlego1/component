<?php
/**
 * Created by PhpStorm.
 * User: splasher
 * Date: 7/17/17
 * Time: 10:14 AM
 */
global $user;
?>

<div id="form-wrapper-export-component" class="form-export-component-wrapper">
    <i class="close-button fa fa-close"></i>

    <form method="post" class="form-export-component">
        <?php if($node && $node->uid==$user->uid): ?>
            <h2>Update your design</h2>
            <input type="text" value="<?php print $node->title ?>" required="required" id="title-component" class="title-component"
                   placeholder="What is your desgin name" name="title"/>
        <?php else: ?>
            <h2>Save as Component</h2>
            <input type="text" required="required" id="title-export-component" class="title-component"
                   placeholder="What is component's name?" name="title"/>
            <input type="text" required="required" id="icon-component" class="icon-component"
                   placeholder="What is component's icon? EX: fa-grid" name="title"/>
            <span>The Component icon is font awesome code. EX: fa-run</span>
        <?php endif; ?>
        <input type="hidden" id="html-export-component" class="html-export-component" name="html" value/>
        <input type="hidden" id="css-export-component" class="css_export-component" name="css"/>
        <input type="submit" class="submit-component" value="Save"/>
    </form>
</div>
