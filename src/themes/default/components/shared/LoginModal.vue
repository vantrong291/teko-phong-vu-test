<template>
  <div id="loginModal" class="modal fade in" role="dialog" style="z-index: 1040; display: block; padding-right: 15px;">
    <div class="midModalWrapper">
      <div class="modal-dialog modal-lg modal-v2 modal-container">

        <div class="modal-content modal-login modal-mobile">
          <div class="modal-body modal-body-v2 row">
            <button type="button" class="close-button close-lg mt--10" @click="$emit('close')">
              ×
            </button>
            <div class="col-xs-12">
              <!--<div class="panel panel-login modal-login no-border">-->
                <!--<div class="panel-heading modal-login panel-heading-v2 no-border row no-margin">-->
                  <!--<div class="col-xs-4 header-item activee"><a class="lg-tabs active" id="login-form-link">Đăng nhập</a></div>-->
                  <!--<div class="col-xs-4 header-item"><a class="lg-tabs" id="register-form-link">Đăng ký</a>-->
                  <!--</div>-->
                  <!--<div class="col-xs-4 header-item"><a class="lg-tabs" id="link-form-link">Liên kết</a>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="panel-body modal-login panel-login-v2">-->
                  <!--<div class="col-lg-12 col-lg-v2">-->
                    <!--<form id="login-form" role="form">-->
                      <!--<div class="form-group text-center"><span class="error-message" id="error-login"></span></div>-->
                      <!--<div class="form-group form-tele-login">-->
                        <!--<i class="pvi-id"></i>-->
                        <!--<input type="text" name="telephone" id="telephone-login" tabindex="1" class="form-control" placeholder="Số điện thoại" value="" pattern="(\\+84|0)\\d{9,10}">-->
                      <!--</div>-->
                      <!--<div class="form-group form-password-login">-->
                        <!--<i class="pvi-password"></i>-->
                        <!--<input type="password" name="password" id="password-login" tabindex="2" class="form-control" placeholder="Mật khẩu" onkeypress="handleEnterLogin(event)">-->
                      <!--</div>-->
                      <!--<button type="button" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login">Đăng nhập-->
                      <!--</button>-->
                      <!--<div class="form-group text-center mt-15">-->
                        <!--<span tabindex="5" class="forgot-password">Quên mật khẩu?</span>-->
                      <!--</div>-->
                      <!--<div class="strike"><span>Hoặc đăng nhập bằng</span></div>-->
                      <!--<div class="col-sm-8 col-sm-offset-2">-->
                        <!--<button type="button" tabindex="4" class="form-control btn btn-facebook" onclick="checkLoginState()">-->
                          <!--<i class="fb-image-white pvi-facebook-white"></i>Facebook-->
                        <!--</button>-->
                      <!--</div>-->
                    <!--</form>-->
                    <!--<form id="register-form" role="form" class="header-hidden">-->
                      <!--<div class="form-group text-center"><span class="error-message" id="error-registry"></span></div>-->
                      <!--<input type="text" name="email" id="register-name" tabindex="1" class="form-control mb-10" placeholder="Họ và tên" value="">-->
                      <!--<input type="email" name="email" id="register-email" tabindex="1" class="form-control mb-10" placeholder="Địa chỉ email" value="">-->
                      <!--<input type="text" name="telephone" id="register-telephone" tabindex="1" class="form-control mb-10" placeholder="Số điện thoại" value="" pattern="(\\+84|0)\\d{9,10}">-->
                      <!--<input type="password" name="password" id="register-password" tabindex="2" class="form-control mb-10" placeholder="Mật khẩu">-->
                      <!--<input type="password" name="confirm-password" id="register-confirm-password" tabindex="2" class="form-control mb-10" placeholder="Nhập lại mật khẩu" onkeypress="handleEnterRegister(event)">-->
                      <!--<button type="button" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register">Đăng ký-->
                      <!--</button>-->
                    <!--</form>-->
                    <!--<form id="link-form" role="form" class="header-hidden">-->
                      <!--<div class="form-group text-center"><span class="error-message" id="error-link"></span></div>-->
                      <!--<div class="form-group text-center">-->
                        <!--<span class="forget-text">Vui lòng nhập số điện thoại của bạn và chúng tôi sẽ gửi cho bạn một tin nhắn chứa mật khẩu. Mật khẩu có thể dùng để đăng nhập nhanh vào Phong Vũ</span>-->
                      <!--</div>-->
                      <!--<input type="text" name="telephone" id="link-telephone" tabindex="1" class="form-control" placeholder="Số điện thoại" value="" onkeypress="handleEnterLink(event)" pattern="(\\+84|0)\\d{9,10}">-->
                      <!--<button type="button" name="link-submit" id="link-submit" tabindex="4" class="form-control btn btn-register">Liên kết-->
                      <!--</button>-->
                    <!--</form>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <v-tabs
                centered
                color="cyan"
                dark
                icons-and-text
              >
                <v-tabs-slider color="yellow"></v-tabs-slider>

                <v-tab>
                  Đăng nhập
                  <v-icon>phone</v-icon>
                </v-tab>

                <v-tab>
                  Đăng ký
                  <v-icon>favorite</v-icon>
                </v-tab>

                <v-tab>
                  Liên kết
                  <v-icon>account_box</v-icon>
                </v-tab>

                <v-tab-item>
                  <v-form class="mx-5 my-5">
                    <v-text-field
                      label="Số điện thoại"
                      prepend-icon="person"
                    ></v-text-field>
                    <v-text-field
                      label="Mật khẩu"
                      prepend-icon="domain"
                    ></v-text-field>
                    <button class="btn btn-success btn-lg w-100 my-5">Đăng nhập</button>
                    <div class="form-group text-center mt-15">
                      <span tabindex="5" class="forgot-password">Quên mật khẩu?</span>
                    </div>
                    <div class="strike"><span>Hoặc đăng nhập bằng</span></div>
                    <div class="col-sm-8 col-sm-offset-2">
                      <button type="button" tabindex="4" class="form-control btn btn-facebook" onclick="checkLoginState()">
                        <i class="fb-image-white pvi-facebook-white"></i>Facebook
                      </button>
                    </div>
                  </v-form>
                </v-tab-item>
                <v-tab-item>
                  <v-form class="mx-5 my-5">
                    <form id="register-form" role="form" class="header-hidden" style="display: block;">
                      <v-text-field
                        label="Họ và tên"
                        prepend-icon="person"
                      ></v-text-field>
                      <v-text-field
                        label="Địa chỉ email"
                        prepend-icon="person"
                      ></v-text-field>
                      <v-text-field
                        label="Số điện thoại"
                        prepend-icon="person"
                      ></v-text-field>
                      <v-text-field
                        label="Mật khẩu"
                        prepend-icon="person"
                      ></v-text-field>
                      <v-text-field
                        label="Nhập lại mật khẩu"
                        prepend-icon="person"
                      ></v-text-field>
                      <button type="button" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register">Đăng ký
                      </button>
                    </form>
                  </v-form>
                </v-tab-item>
                <v-tab-item>
                  <v-form class="mx-5 my-5">
                    <div class="form-group text-center"><span class="error-message" id="error-link"></span></div>
                    <div class="form-group text-center">
                      <span class="forget-text">Vui lòng nhập số điện thoại của bạn và chúng tôi sẽ gửi cho bạn một tin nhắn chứa mật khẩu. Mật khẩu có thể dùng để đăng nhập nhanh vào Phong Vũ</span>
                    </div>
                    <v-text-field
                      label="Số điện thoại"
                      prepend-icon="person"
                    ></v-text-field>
                    <button type="button" name="link-submit" id="link-submit" tabindex="4" class="form-control btn btn-register">Liên kết
                    </button>
                  </v-form>
                </v-tab-item>
              </v-tabs>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LoginModal",
        data() {
          return {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        }
    }
</script>

<style lang="scss">

  #loginModal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    .midModalWrapper {
      vertical-align: middle;
      .modal-container {
        margin-top: 10%;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        .v-tabs__bar {
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          a:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
  .modal-dialog {
    pointer-events: inherit !important;
  }

</style>
