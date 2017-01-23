<?php get_header(); ?>

                <div class="container">
                    <div class="row home-row">
                        <div class="home-banner">
                            <?php echo do_shortcode('[supsystic-slider id=1 position="center"]') ?>
                            <div class="home-banner-caption">
                                <div class="home-banner-caption-inner">
                                    <a href="<?php echo esc_url( get_permalink( get_page_by_title( 'Enroll' ) ) ); ?>">
                                            <?php echo the_content(); ?>
                                    </a>
                                </div><!--/home-banner caption inner-->
                            </div><!--/home-banner caption-->
                        </div><!--/home-banner-->

                        <div class="home-banner-bottom-caption">
                            <div class="home-banner-bottom-caption-inner">
                                <p>Data Transfer Couldn't Be Easier</p>
                            </div>
                        </div>
                    </div><!--/row-->
                    <div class="row home-row home-cta-row">
                        <div class="home-ctas home-accuracy">
                            <div class="home-ctas-inner">
                                <?php 
                                    $homequery = new WP_Query(array( 'name' => 'accuracy', 'post_type' => 'page' ));
                                    
                                    while ( $homequery->have_posts() ) : $homequery->the_post();
                                ?>
                                    <h2><?php echo the_title(); ?></h2>
                                    <?php echo the_content(); ?>

                                <?php
                                    endwhile;
                                    wp_reset_postdata();
                                ?> 
                            </div>        
                        </div>
                        <div class="home-ctas home-reproducibility">
                            <div class="home-ctas-inner">
                                <?php 
                                    $homequery = new WP_Query(array( 'name' => 'reproducibility', 'post_type' => 'page' ));
                                    
                                    while ( $homequery->have_posts() ) : $homequery->the_post();
                                ?>
                                    <h2><?php echo the_title(); ?></h2>
                                    <?php echo the_content(); ?>

                                <?php
                                    endwhile;
                                    wp_reset_postdata();
                                ?>
                            </div>        
                        </div>
                        <div class="home-ctas home-flexibility">
                            <div class="home-ctas-inner">
                                <?php 
                                    $homequery = new WP_Query(array( 'name' => 'flexibility', 'post_type' => 'page' ));
                                    
                                    while ( $homequery->have_posts() ) : $homequery->the_post();
                                ?>
                                    <h2><?php echo the_title(); ?></h2>
                                    <?php echo the_content(); ?>

                                <?php
                                    endwhile;
                                    wp_reset_postdata();
                                ?> 
                            </div>        
                        </div>
                    </div><!--/row-->
                    <div class="row home-row home-cta-row">
                        <div class="home-ctas home-speed">
                            <div class="home-ctas-inner">
                                <?php 
                                    $homequery = new WP_Query(array( 'name' => 'speed', 'post_type' => 'page' ));
                                    
                                    while ( $homequery->have_posts() ) : $homequery->the_post();
                                ?>
                                    <h2><?php echo the_title(); ?></h2>
                                    <?php echo the_content(); ?>

                                <?php
                                    endwhile;
                                    wp_reset_postdata();
                                ?>  
                            </div>
                        </div>
                        <div class="home-ctas">
                                <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/block-logo.png" alt="logo" id="block-logo"/>
                        </div>
                        <div class="home-ctas home-ease">
                            <div class="home-ctas-inner">
                                <?php 
                                    $homequery = new WP_Query(array( 'name' => 'ease-of-use', 'post_type' => 'page' ));
                                    
                                    while ( $homequery->have_posts() ) : $homequery->the_post();
                                ?>
                                    <h2><?php echo the_title(); ?></h2>
                                    <?php echo the_content(); ?>

                                <?php
                                    endwhile;
                                    wp_reset_postdata();
                                ?>
                            </div>    
                        </div>
                    </div><!--/row-->
                </div><!--/container--> 
                <div class="container">
                    <div class="home-row home-about-row"><!--about-->

                        <div class="try-stat"><!--try-stat-->
                        <h2>Try Stat/Transfer Today!</h2>
                        <div class="try-button">
                            <a href="<?php echo esc_url( get_permalink( get_page_by_title( 'download' ))); ?>">
                                <button type="button" class="btn btn-info btn-block">Download A Free Demo</button>
                            </a>
                        </div>

                        </div><!--/try-stat--> 
                </div>
                <div class="container">
                    <div class="home-row home-users-row"><!--users-->
                        <h2>STAT/TRANSFER USERS</h2>
                        <?php echo do_shortcode('[supsystic-slider id=2 position="center"]') ?>
                    </div><!--/users-->
                </div>
                
            </div>
<!--<small class="small-label">front-page.php</small>-->


<?php get_footer(); ?>
