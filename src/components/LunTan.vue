<template>
    <div class="luntan" id="luntan">
        <div class="post" id="post">
            <div id="file">
                <!--表单上传照片-->
                <form action="html/upboard.html" method="post" name="" enctype="multipart/form-data">
                    <textarea id="text" class="content" maxlength="200" name="board_content" wrap="hard"
                        placeholder="在这里可以分享您的收获。。。"></textarea>
                    <canvas id="cvs" width="200px" height="100px"></canvas>
                    <div id="picture">
                        <input type="file" class="upload_pic" id="upload" name="myFile" />
                        <img src="../assets/images/common/FB0D6F4853CB56E6EF03F833C0063F9A.png" alt="" id="auto_img" value="custom"
                            title="自定义背景">
                        <p>请插入图片</p>
                    </div>
                    <input type="button" value="取消" name="reset" id="reset" class="reset" />
                    <input type="submit" value="发表" name="submit" id="submit" class="submit" />
                </form>
            </div>
        </div>
    </div>
</template>