<?php 
  if(empty($comments)) {
    return null;
  }
 ?>

<ol class="comments">
  <?php foreach($comments as $comment): ?>
    <li>
      <article class="comment">
      <p class="comment__content"><?php echo $comment['comment']; ?></p>
      </article>
    </li>
  <?php endforeach; ?>
</ol>
</hr>