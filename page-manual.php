<?php
/*
*Template Name: Manual Page
*/

get_header(); 
?>

        <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
    <div class="container">
        <div class="row support-banner">
            <div class="support-container">
                <div class="support-banner-background">
                    <div class="support-title">
                        <h1><?php the_title(); ?></h1>
                    </div>
                </div><!--/.support-banner-background-->
                
 
                <div class="support-content">
                    <?php the_content();?>
                    <iframe style="width:90%;height:800px" src="<?php echo esc_url( get_template_directory_uri() ); ?>/manual/index.php">
                        
                    </iframe>
                </div><!--/.support-content-->
                <?php endwhile; else:?>
                <article class="col-md-9">
                    <div class="entry">
                        <p class="lead"><?php _e('Sorry, this page does not exist. Try searching for one.'); ?></p>
                        <?php get_search_form(); ?>
                    </div>
                </article>
                <?php endif; ?>
            </div><!--/.suppoer-container-->
        </div><!--/row-->
    </div>

<!--page-support.php-->

<?php get_footer(); ?>