<template>
  <div>
    <div id="header">
      <div>
        <img src="../assets/images/common/1.png" alt />
      </div>
      <span>
        玩味儿
        <p>www.a1a1.cn</p>
      </span>
    </div>
    <div id="left">
      <div>
        <img src="../assets/images/common/9C2EF74227F2E0D642DAC2E82F45E03E.png" alt />
      </div>
    </div>
    <div class="right">
      <form action="html/login.html" method="post">
        <label>用户名：</label>
        <img src="../assets/images/common/user.jpg" alt />
        <input
          type="text"
          name="user_number"
          id="username"
          maxlength="11"
          onkeyup="value=value.replace(/[^\d]/g,'')"
          placeholder="请输入手机号"
          value
          onfocus="showTips('usernamespan','用户名为数字！')"
          onblur="check('username','用户名不能为空！','usernamespan')"
        />
        <span id="usernamespan"></span>
        <br />
        <br />
        <br />
        <label>密码：</label>
        <img src="../assets/images/common/password.jpg" alt />
        <input
          type="password"
          name="user_password"
          id="password"
          value
          placeholder="请输入您密码"
          onfocus="showTips('passwordspan','密码必填！')"
          onblur="check('password','密码不能为空！','passwordspan')"
        />
        <span id="passwordspan"></span>
        <br />
        <br />
        <br />
        <input
          type="text"
          name="captcha"
          id="user_yzm"
          placeholder="请输入验证码"
          value
          style="width:100px;padding:0;margin-left:100px;font-size:13px"
          onfocus="showTips('user_yzmspan','验证码必填！')"
          onblur="check('user_yzm','验证码不能为空！','user_yzmspan')"
        />
        <span id="user_yzmspan"></span>
        <img
          src="html/验证码.html"
          onclick="this.src='html/验证码.html?'+new Date().getTime();"
          alt
          style="width:120px;height:30px"
        />
        <br />
        <br />
        <div class="right_bottom">
          <input type="submit" value="登录" id="submit" style="width:340px;padding:0;height:40px" />
          <a
            href="register.html"
            style="color:#ccc;position:absolute;right:60px;bottom:0;text-decoration: underline;"
            id="grandfather"
          >还未注册，请先注册</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {}
}
</script>
<style scoped lang="scss">
</style>
