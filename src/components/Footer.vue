<template>
  <div class="footer">
    <div class="register">
      <div class="d1">
        <span>
          <p>让旅游者快乐的旅行</p>旅行不是一次出行，也不只是一个假期。旅行是一个过程，一次发现。是一个自我发现的过程。真正的旅行让我们直面自我。
          旅行不仅让我们看到世界，更让我们看到自己在其中的位置。
        </span>
      </div>
      <div class="d2"><a href="#1">联系我们</a></div>
    </div>
    <!-- 尾部  -->
    <div class="footer-related">
      <div class="footer-article">
        <dl class="col-article">
          <dt>荆楚名胜</dt>
          <dd>
            <a href="#">武汉黄鹤楼</a>
            <a href="#">荆州古城</a>
            <a href="#">咸宁温泉</a>
            <a href="#">十堰武当山</a>
            <a href="#">神农架林区</a>
          </dd>
        </dl>
        <dl class="col-article">
          <dt>荆楚美食</dt>
          <dd>
            <a href="#">热干面</a>
            <a href="#">三鲜豆皮</a>
            <a href="#">荆州锅盔</a>
            <a href="#">潜江小龙虾</a>
            <a href="#">恩施公婆饼</a>
          </dd>
        </dl>
        <dl class="col-article">
          <dt>帮助中心</dt>
          <dd>
            <a href="#">问题反馈</a>
            <a href="#">玩味儿介绍</a>
            <a href="#">商务合作</a>
            <a href="#">加入我们</a>
          </dd>
        </dl>
        <div class="col-code">
          <div class="code">
            <img src="../assets/images/common/wx.png" alt="微信公众号" />
          </div>
          <p>官方微信公众号</p>
        </div>
      </div>
      <div class="footer-info">
        <p class="nav-bottom">
          <a href="#">团队简介</a>
          <em>|</em>
          <a href="#">玩味儿趣事论坛</a>
        </p>
        <p class="copyright">
          www.a1a1.cn @2019 玩味儿版权所有
          <em></em>
          <a href="#" rel="nofollow">鄂ICP备5201314号</a>
        </p>
        <p class="company-info">湖北省武汉市洪山区</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  width: 80%;
  min-width: 1100px;
  margin: 30px auto;
}
.register {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0 45px;
  background: url(../assets/images/common/register_bg.png) no-repeat center center #4FB2D9;
}
.register .d1 { flex: 100 1 auto; }
.register span { display: block; width: 680px; color: #666; font-size: 16px; padding-left: 100px; line-height: 30px; }
.register span p { height: 30px; color: #fff; font-size: 20px; margin-bottom: 20px; }
.register .d2 { flex: 1 1 auto; }
.register .d2 a {
  display: block;
  width: 64px;
  height: 21px;
  padding: 10px 40px;
  background-color: #e4393c;
  color: white;
  border-radius: 20px;
  margin-right: 100px;
}
.footer-related {
  height: 330px;
  background-color: #373d41;
  color: #666;
}
.footer-related a { color: #666; }
.footer-article {
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #4b5054;
  margin: 0 45px;
}
.col-article { width: 330px; height: 124px; }
.col-article dt { color: #d7d8d9; margin: 0 0 15px; }
.col-article dd { width: 233px; display: flex; flex-wrap: wrap; border-right: 1px solid #4b5054 }
.col-article dd a { color: #9b9ea0; font-size: 12px; width: 116px; padding: 0 0 6px; }
.code img { width: 120px; height: 120px; }
.footer-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.footer-info .nav-bottom { padding: 20px 0 5px; }
.footer-info .nav-bottom a, em { font-size: 14px; color: #9b9ea0; padding: 0 8px; }
.footer-info .copyright, .company-info { font-size: 12px; padding: 5px 0; }
.col-code p { font-size: 14px; text-align: center; }
</style>
