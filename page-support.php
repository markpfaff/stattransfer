<?php
//page-support.php
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
                    <!--start mobile search-->
                <div class="support-search">
                    <form class="" action="<?php bloginfo('siteurl'); ?>/" role="search" method="GET">
                        <div class="input-group">
                            <input type="text" class="form-control" id="s" name="s" placeholder="Search" <?php if ( $search_terms !== '' ) { echo ' value="' . $search_terms . '"'; } ?> />
                            <span class="input-group-btn">
                                <button class="btn btn-primary" type="submit">Search</button>
                            </span>
                        </div>
                    </form>
                </div><!--/.support-search-->
                <div class="support-content">
                    <?php the_content();?>
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