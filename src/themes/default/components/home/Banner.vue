<template>
  <section>
    <div class="row mx-0">
      <div class="col-lg-2 pl-0">
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
      <div class="col-lg-3 col-sm-12">
        <div class="row" v-for="(img, i) in staticImage" :key="i">
          <img :src="img.src" alt="" class="m-2 w-100">
        </div>
      </div>
      <div class="col-lg-7 col-sm-12">
        <v-carousel class="my-2">
          <v-carousel-item
            v-for="(img,i) in carouselImages"
            :key="i"
            :src="img.src"
          ></v-carousel-item>
        </v-carousel>
        <div class="row w-100">
          <div class="col-lg-3 text-xs-center">
            <button class="btn sale-btn">Siêu giảm giá tháng 12</button>
          </div>
          <div class="col-lg-3 text-xs-center">
            <button class="btn sale-btn">Siêu giảm giá tháng 12</button>
          </div>
          <div class="col-lg-3 text-xs-center">
            <button class="btn sale-btn">Siêu giảm giá tháng 12</button>
          </div>
          <div class="col-lg-3 text-xs-center">
            <button class="btn sale-btn">Siêu giảm giá tháng 12</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'list',
    data() {
      return {
        staticImage: [
          {
            src: 'https://phongvu.vn/media/banner/pv-banner-390x190-b0f18.jpg'
          },
          {
            src: 'https://phongvu.vn/media/banner/pv-banner-390x190(15).png'
          },
          {
            src: 'https://phongvu.vn/media/banner/pv-banner-390x190-7e8da.jpg'
          },
        ],
        carouselImages: [
          {
            src: "https://phongvu.vn/media/banner/pv-banner-660x390-e7885.jpg",
          },
          {
            src: "https://phongvu.vn/media/banner/pv-banner-635x397-8e65c.jpg",
          },
          {
            src: "https://phongvu.vn/media/banner/pv-banner-635x397-34a51.jpg",
          },
          {
            src: "https://phongvu.vn/media/banner/pv-banner-660x390-21564.png",
          },
        ]
      }
    }
  }
</script>
<style>
  .sale-btn {
    height: 8.5rem;
    font-size: 16px;
    border: 1px solid;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .v3-cat-menu-item {
    padding: 0;
  }
</style>
