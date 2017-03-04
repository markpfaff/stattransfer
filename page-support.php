<?php
//page-support.php
get_header(); 
?>
    <div class="container">
        <div class="row support-banner">
            <div class="support-title">
                <h1><?php echo the_title(); ?></h1>
            </div>
        </div><!--/row-->
        <div class="support-buttons">
            <div class="support-button">
                <a href="<?php echo esc_url( get_permalink( get_page_by_title( 'faq' ))); ?>">
                    <button type="button" class="btn btn-info btn-block">FAQ</button>
                </a>
            </div>
            <div class="support-button">
                <a href="<?php echo esc_url( get_permalink( get_page_by_title( 'manual' ))); ?>">
                    <button type="button" class="btn btn-info btn-block">Manual</button>
                </a>
            </div>
            <div class="support-button">
                <a href="<?php echo esc_url( get_permalink( get_page_by_title( 'ask' ))); ?>">
                    <button type="button" class="btn btn-info btn-block">Ask A Question</button>
                </a>
            </div>
        </div>
        
    </div>

<!--page-support.php-->

<?php get_footer(); ?>