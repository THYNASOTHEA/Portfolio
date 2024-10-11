<template>
    		<!-- top-area Start -->
		<header class="top-area">
			<div class="header-area">
				<!-- Start Navigation -->
			    <nav class="navbar navbar-default bootsnav navbar-fixed dark no-background">

			        <div class="container">

			            <!-- Start Header Navigation -->
			            <div class="navbar-header">
			                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i class="fa fa-bars"></i>
			                </button>
			                <a class="navbar-brand" href="/">{{$t('thynasothea')}}</a>
			            </div><!--/.navbar-header-->
			            <!-- End Header Navigation -->

			            <!-- Collect the nav links, forms, and other content for toggling -->
			            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                <li class=" smooth-menu active"></li>
                                <li><router-link class="smooth-menu" to="/">{{$t('home')}}</router-link></li>
                                <li><router-link class="smooth-menu" to="/aboutus">{{$t('about')}}</router-link></li>
                                <li><router-link class="smooth-menu" to="/experience">{{$t('experience')}}</router-link></li>
                                <li><router-link class="smooth-menu" to="/blog">{{$t('blog')}}</router-link></li>
                                <li><router-link class="smooth-menu" to="/contact">{{$t('contact')}}</router-link></li>
                                <li class="nav-item">
                                    <button type="button" class="btn btn-outline-primary me-2" @click="changeLanguage">
                                      <img v-if="this.$i18n.locale == 'en'" src="../assets/khflag1.png" alt="KH-Flag" width="60" height="30" />
                                      <img v-if="this.$i18n.locale !== 'en'" src="../assets/egflag1.png" alt="KH-Flag" width="60" height="30" />
                                    </button>
                                  </li>

			                </ul><!--/.nav -->
			            </div><!-- /.navbar-collapse -->
			        </div><!--/.container-->
			    </nav><!--/nav-->
			    <!-- End Navigation -->
			</div><!--/.header-area-->

		    <div class="clearfix"></div>

		</header><!-- /.top-area-->
		<!-- top-area End -->
</template>
<script>
export default {
  data() {
    return {
      navs: [
        {
          name: 'home',
          path: '/',
        },
        {
          name: 'about',
        },
        {
          name: 'services',
          path: '/service',
        },
        {
          name: 'courses',
          path: '/courses',
        },
        {
          name: 'team',
          path: '/team',
        },
        {
          name: 'register',
          path: '/register',
        },
      ],
    };
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale == 'en') {
        this.$i18n.locale = 'khm';
      } else {
        this.$i18n.locale = 'en';
      }
    },
  },
};
</script>