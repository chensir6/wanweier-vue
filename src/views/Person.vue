<template>
  <div>
    <Header :citiesinfo="citiesinfo"/>
    <div class="body_header">
      <div id="tou">
        <div class="img">
          <img src />
        </div>
        <button>更改头像</button>
        <div class="genggai">
          <span>×</span>
          <form action="html/uppicture.html" method="post" enctype="multipart/form-data">
            <canvas id="cvs" width="100px" height="100px"></canvas>
            <input type="file" id="upload" name="user_picture" />
            <input type="submit" value="确定" id="submit" style="right:20px" />
          </form>
        </div>
        <a href="javascript:;">更改资料</a>
        <div class="content">
          <label for>昵称：</label>
          <span></span>
          <br />
          <label for>爱好：</label>
          <span></span>
          <br />
          <label for>个人坐标：</label>
          <span></span>
          <br />
          <label for>个性签名：</label>
          <span></span>
          <br />
        </div>
      </div>
      <div id="ziliao">
        <span>×</span>
        <form action="html/uppicture.html" name method="post" enctype="multipart/form-data">
          <div>
            <label for>昵称：</label>
            <input type="text" name="user_name" value />
            <br />
            <br />
            <label for>爱好：</label>
            <input type="text" name="user_like" value />
            <br />
            <br />
            <label for>个人坐标：</label>
            <input type="text" name="user_area" value />
            <br />
            <br />
            <label for>个性签名：</label>
            <textarea name="user_qm" id="textarea" maxlength="50" cols="30" rows="3"></textarea>
          </div>
          <input type="submit" value="提交" id="submit" name />
        </form>
      </div>
    </div>
    <div class="body_bottom">
      <div id="body_bottom1">
        <a href="#1" class="active">我的帖子</a>|
        <a href="#1">我的评论</a>|
        <a href="#1">我的回复</a>
        <div style="display:block;" id="div1"></div>
        <div id="div1">即将上线</div>
        <div id="div1">即将上线</div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Person',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      citiesinfo: []
    }
  },
  methods () {

  },
  beforeMount () {
    this.citiesinfo = JSON.parse(sessionStorage.getItem('cities'))
  }
}
</script>
<style scoped lang="scss">
</style>
