<template>
  <div>
    <v-toolbar color="rgb(66, 115, 177)" fixed>
      <a href="#"
         class="navbar-brand p-0"><img src="https://phongvu.vn/skin/frontend/default/pv_mob_amp/images/logo.svg" alt=""
                                       height="100%"></a>
      <div class="dropdown">
        <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-list-ul"></i> &nbsp; Sản phẩm
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <ol class="megamenu-nav-primary responsive" id="megamenu-nav-main">
            <li class="cat-menu-item">
              <a class="v3-cat-menu-item" data-cat-id="1205"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_BuildPC"></i></span>
                <span class="v3-cat-menu-name">Máy Tính Để Bàn</span>
              </a>
            </li>
            <li class="cat-menu-item">
              <a class="v3-cat-menu-item" data-cat-id="1201"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Laptop"></i></span>
                <span class="v3-cat-menu-name">Laptop</span>
                <i class="v3-cat-menu-hot pvi-icon_CatHot" style="transition-delay: 0.1s;"></i>
              </a>
            </li>
            <li class="cat-menu-item">
              <a class="v3-cat-menu-item" data-cat-id="1202"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_ComputerComponent"></i></span>
                <span class="v3-cat-menu-name">Linh Kiện Máy Tính</span>
              </a>
            </li>
            <li class="cat-menu-item">
              <a class="v3-cat-menu-item" data-cat-id="1323"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Tivi"></i></span>
                <span class="v3-cat-menu-name">Tivi - Smart TV</span>
                <i class="v3-cat-menu-new pvi-icon_CatNew" style="transition-delay: 0.1s;"></i>
              </a>
            </li>
            <li class="cat-menu-item">
              <a class="v3-cat-menu-item" data-cat-id="1203"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Monitor"></i></span>
                <span class="v3-cat-menu-name">Màn Hình Máy Tính</span>
              </a>
            </li>
            <li class="cat-menu-item">
              <a class="v3-cat-menu-item" data-cat-id="1204"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Disk"></i></span>
                <span class="v3-cat-menu-name">Ổ cứng HDD/SSD</span>
              </a>
            </li>
            <li class="cat-menu-item ">
              <a class="v3-cat-menu-item" data-cat-id="1207"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_GamingGear"></i></span>
                <span class="v3-cat-menu-name">Chuột, Bàn phím, Tay Cầm</span>
              </a>
            </li>
            <li class="cat-menu-item ">
              <a class="v3-cat-menu-item" data-cat-id="1208"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Sound"></i></span>
                <span class="v3-cat-menu-name">Tai Nghe &amp; Loa</span>
              </a>
            </li>
            <li class="cat-menu-item ">
              <a class="v3-cat-menu-item" data-cat-id="1319"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Office"></i></span>
                <span class="v3-cat-menu-name">Máy In</span>
              </a>
            </li>
            <li class="cat-menu-item ">
              <a class="v3-cat-menu-item" data-cat-id="1211"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Accessories"></i></span>
                <span class="v3-cat-menu-name">Phụ Kiện &amp; Phần Mềm</span>
              </a>
            </li>
            <li class="cat-menu-item ">
              <a class="v3-cat-menu-item" data-cat-id="1206"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Office"></i></span>
                <span class="v3-cat-menu-name">Thiết Bị Văn Phòng</span>
              </a>
            </li>
            <li class="cat-menu-item ">
              <a class="v3-cat-menu-item" data-cat-id="1210"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Network"></i></span>
                <span class="v3-cat-menu-name">Thiết Bị Mạng &amp; An Ninh</span>
              </a>
            </li>
            <li class="cat-menu-item ">
              <a class="v3-cat-menu-item" data-cat-id="567"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Brand"></i></span>
                <span class="v3-cat-menu-name">Thương Hiệu Uy Tín</span>
              </a>
            </li>
            <li class="cat-menu-item expand-item" style="display: none;">
              <a class="v3-cat-menu-item" data-cat-id="1340"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_SampleProduct "></i></span>
                <span class="v3-cat-menu-name">Hàng Trưng Bày</span>
              </a>
            </li>
            <li class="cat-menu-item expand-item" style="display: none;">
              <a class="v3-cat-menu-item" data-cat-id="1413"
                 href="#">
                <span class="v3-cat-menu-icon"><i class="pvi-Menuicon_Disk"></i></span>
                <span class="v3-cat-menu-name">Western Digital</span>
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div class="w-50" style="position: relative">
        <input type="text" class="search-input" data-search-engine="phongvu"
               data-search-url="https://phongvu.vn/searchpves/"
               data-get-search-suggestion-url="https://search.phongvu.vn/api/"
               placeholder="Nhập tên sản phẩm, mã sản phẩm, từ khóa cần tìm...." value=""
               style="background-color: #fff">
        <span class="search-btn" data-search-url="https://phongvu.vn/searchpves/" title="Tìm kiếm sản phẩm"
              style="background: none;">
        <i class="pvi-icon_Search fa-pv-search" aria-hidden="true"></i>
      </span>
      </div>
      <div class="col-xs-3 v3-header-right-block" style="height: 64px;">
        <div class="col-xs-4 v3-header-sale">
          <a class="v3-header-sale-item" target="_blank" href="#">
            <i class="v3-sale-icon pvi-Headericon_Promotion"></i>
            <div class="header-right-description">
              <div class="v3-header-sale-text">Chương trình khuyến mãi</div>
            </div>
          </a>
        </div>
        <div class="col-xs-3 v3-header-login">
          <div class="v3-header-login-item" @click="showLoginModal=true">
            <i class="v3-user-icon pvi-icon_UserCircle"></i>
            <div class="header-right-description">
              <div class="header-login-register">Đăng nhập Đăng ký</div>
              <div class="chat-sale-asia-code">Mã NV: <span></span></div>
            </div>
          </div>
        </div>
        <div class="col-xs-3 v3-header-tracking-order">
          <a class="v3-header-tracking-order-item" href="#" data-toggle="modal">
            <i class="v3-header-tracking-order-icon pvi-Headericon_TrackingOrder"></i>
            <div class="header-right-description">
              <div class="v3-header-tracking-order-text">Kiểm tra đơn hàng</div>
            </div>
          </a>
        </div>

        <div class="col-xs-2 v3-header-cart">
          <a class="header-cart-view-cart" href="#" title="Xem giỏ hàng">
            <i class="pvi-Headericon_Cart">
            </i>
          </a>
        </div>

      </div>
    </v-toolbar>
    <div class="row v3-content-section v3-header-navigation-content sub-nav" style="">
      <div class="container text-right">
        <div class="col-xs-3 v3-header-menu" style="display: none;">
          <i class="pvi-icon_Menu" style="margin: 0px 10px 0px 0px;"></i>Danh mục sản phẩm

        </div>

        <div class="v3-header-navigation-item recently-product-item header-navigation-recently-products">
          <i class="fa fa-angle-down"></i>
          Sản phẩm vừa xem
        </div>
        <a class="v3-header-navigation-item header-navigation-showroom" href="https://phongvu.vn/contact/">
          <i class="pvi-icon_Showroom"></i>
          Hệ thống Showroom
        </a>
        <a class="v3-header-navigation-item header-navigation-contact" href="tel:19001835">
          <i class="pvi-icon_Contact"></i>
          1900 1835
        </a>
        <a class="v3-header-navigation-item header-navigation-tracking-warranty" data-toggle="modal"
           data-target="#trackingWarrantyModal">
          <i class="pvi-icon_Warranty1"></i>
          Kiểm tra bảo hành
        </a>
        <div class="v3-header-navigation-item bell-item header-navigation-notification">
          <span class="v3-notification-count" style="display: inline;">6</span>
          <i class="pvi-icon_Bell"></i>
          Thông báo
          <i class="fa fa-angle-down bell-down-icon"></i>

        </div>
        <a class="v3-header-navigation-item header-navigation-buildpc" href="https://phongvu.vn/buildpc/">
          <i class="pvi-icon_BuildPC"></i>
          Xây dựng cấu hình
        </a>

        <a class="v3-header-navigation-item header-navigation-fb-chat">
          <i class="pvi-icon_Chat"></i>
          Tư vấn mua hàng
        </a>
      </div>
    </div>
    <transition name="loginModal">
      <login-modal v-if="showLoginModal" @close="showLoginModal = false"></login-modal>
    </transition>
  </div>
</template>
<script>
  import LoginModal from "./LoginModal";

  export default {
    data() {
      return {
        showLoginModal: false,
      }
    },
    components: {
      'login-modal': LoginModal,
    }
  }
</script>
<style>
  .navbar-brand {
    width: 45px;
  }

  .dropdown:hover > .dropdown-menu {
    display: block;
  }

  #megamenu-nav-main {
    z-index: 1201;
  }

  .dropdown > .dropdown-toggle:active {
    /*Without this, clicking will make it sticky*/
    pointer-events: none;
  }

  #dropdownMenuButton {
    text-decoration: none;
    color: #fff;
  }

  #dropdownMenuButton:after {
    content: none;
  }

  .v-text-field.v-text-field--solo .v-input__control {
    min-height: 42px;
    padding: 0;
  }

  .v3-header-right-block {
    width: 40%;
  }

  .v3-header-cart {
    width: 30%;
  }

  .v3-cat-menu-icon {
    width: 50px;
  }

  #megamenu-nav-main {
    width: 25rem;
  }

  .sub-nav {
    height: 45px;
    top: 63px;
    position: fixed;
    z-index: 1;
    background-color: #f5f5f5;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
  }

  .loginModal-enter {
    opacity: 0;
  }

  .loginModal-leave-active {
    opacity: 0;
  }

  .loginModal-enter .loginModal-container,
  .loginModal-leave-active .loginModal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .v3-header-sale {

  }

  .v3-header-tracking-order {
    padding-left: 40px;
  }

  .v3-header-login {
    color: #fff;
  }

  .v3-header-cart {

  }
</style>
