<template>
  <div class="hello">
    <!-- banner -->
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in banner" :key="index">
             <img :src="item.img" alt="">
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
    <!--无理由退货-->
    <div class="mind-label">
        <ul class="promise">
            <li>48小時發貨</li>
            <li>7天無理由退貨</li>
            <li>免運費</li>
        </ul>
    </div>
    <!-- 价格 -->
    <div class="price">
        <div class="all-price">
            <span class="detail">NT $1137</span>
            <span class="original-price">
                <s>原價： NT $2274.12</s>
            </span>
            <span class="original-price">節省： NT $1137</span>
        </div>
        <div class="baokuan">
            <span>爆款</span>
            <span>限量款</span>
            <span>限時搶購</span>
        </div>
        <div class="purchased">已搶購
            <b>2704</b>件
            <img src="../../static/images/proccess-50.gif" alt="">
        </div>
        <div class="purchased" style="display:none">已搶購
            <b>3000</b>件
            <img src="../../static/images/proccess-70.gif" alt="">
        </div>
        <div class="purchased" style="display:none">已搶購
            <b>3500</b>件
            <img src="../../static/images/proccess-90.gif" alt="">
        </div>
        <div class="time-limit">
            <p class="lf">限時搶購</p>
            <p class="rt">距結束
                 <span>{{days}}</span>天
                <span>{{hours}}</span>時
                <span>{{minutes}}</span>分
                <span>{{seconds}}</span>秒</p>
        </div>
        <div class="selling">
            舒適透氣 【無束縛天然有機棉】 寶寶乖乖睡
        </div>
    </div>
    <!-- 商品详情 -->
    <div class="product-detail">
        <ul class="main-tab">
            <li class="selected-tab">
                <a href="#detail">商品詳情</a>
            </li>
            <li>
                <a href="#params">商品參數</a>
            </li>
            <li>
                <a href="#evaluate">評價(1023)</a>
            </li>
        </ul>
        <!-- 商品详情 -->
        <div class="product-desc" id="detail">
            <p v-for="(item,index) in productDetail" :key="index">
                <img :src="item.imgSrc" alt="">
            </p>
        </div>
        <!-- 商品参数 -->
        <div class="product-params" id="params">
            <p>
                <strong>貨號 : </strong>長頸鹿
                <strong>品牌 : </strong>妙皮麥兜
                <strong>是否進口 : </strong>否
                <strong>貨源類別 : </strong>現貨
                <strong>適用年齡 : </strong>幼兒裝(1-3歲),嬰兒裝(0-1歲)
                <strong>款式 : </strong>信封式
                <strong>面料 : </strong>純棉(95%及以上)
                <strong>里料 : </strong>純棉(95%及以上)
                <strong>填充物 : </strong>聚酯纖維
                <strong>是否可拆袖 : </strong>是
                <strong>是否可拆洗 : </strong>是
                <strong>厚薄 : </strong>加厚
                <strong>拉鏈質地 : </strong>樹脂/注塑
                <strong>圖案 : </strong>卡通
                <strong>適合季節 : </strong>冬季,秋季
                <strong>產地 : </strong>岑河
                <strong>長度 : </strong>110cm
                <strong>顏色 : </strong>黃色,淺藍色,粉色
                <strong>尺寸 : </strong>120CM,100CM
                <strong>產品類別 : </strong>睡袋
                <strong>適用年齡段 : </strong>兒童</p>
        </div>
        <!-- 客户评价 -->
        <div class="product-evaluate" id="evaluate">
            <div class="title">客戶評價
                <i class="num">(2284)</i>
            </div>
            <div id="pingjia" class="pingjia">
                <ul class="allpj" id="allpj">
                    <li v-for="(item,index) in comment" :key="index">
                        <span class="comment-id">{{item.commentId}}</span>
                        <span class="comment-name">{{item.commentName}}</span>
                        <span class="comment-star four-stars"></span>
                        <span class="comment-date">{{item.commentTime}}</span>
                        <p>{{item.commentContent}}</p>
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>
    <!--买家须知 -->
    <div class="info">
        <table>
            <tbody>
                <tr>
                    <th>買家須知</th>
                    <td>如果有任何質量問題及任何不滿，無憂退貨！我們不售假貨，7天無理由退貨！</td>
                </tr>
                <tr>
                    <th>聯繫我們</th>
                    <td>
                        <p>郵箱：support@martdealer.com</p>
                        <p>官網：www.martdealer.com</p>
                        <p>Skype：support@martdealer.com</p>
                        <p>Line：martdealer.com</p>
                    </td>
                </tr>
                <tr>
                    <th>溫馨提示</th>
                    <td>聯系我們時請附上您的姓名和聯系方式以便我們及時與您的問題，祝您購物愉快！</td>
                </tr>
            </tbody>
        </table>
        <ul class="support-tag">
            <li class="quality">
                <span></span>
                <h6>正品保障</h6>
            </li>
            <li class="online">
                <span></span>
                <h6>在線支付</h6>
            </li>
            <li class="deliver">
                <span></span>
                <h6>貨到付款</h6>
            </li>
            <li class="time">
                <span></span>
                <h6>48小時發貨</h6>
            </li>
        </ul>
    </div>
    <!-- 立即购买 -->
    <div class="fixbar">
        <div class="order-query"><a href="order.html"><span></span>訂單查詢</a></div>
        <div class="order-btn" id="order" @click="sendParams">立即購買</div>
      
       
    </div>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  data () {
    return {
     swiperOption: {
        direction: 'horizontal',
        loop: true,
        speed:300,
        autoplay : {
            delay:3000
          },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      },
      banner:[
        {"img":'../../static/images/banner5.jpg'},
        {"img":'../../static/images/banner4.jpg'},
        {"img":'../../static/images/banner3.jpg'},
        {"img":'../../static/images/banner2.jpg'},
        {"img":'../../static/images/banner1.jpg'}
      ],
      productDetail:[
        {"imgSrc":"../../static/images/product_01.jpg"},
        {"imgSrc":"../../static/images/product_02.jpg"},
        {"imgSrc":"../../static/images/product_03.jpg"},
        {"imgSrc":"../../static/images/product_04.jpg"},
        {"imgSrc":"../../static/images/product_05.jpg"},
        {"imgSrc":"../../static/images/product_06.jpg"},
        {"imgSrc":"../../static/images/product_07.jpg"},
        {"imgSrc":"../../static/images/product_08.jpg"},
        {"imgSrc":"../../static/images/product_09.jpg"},
        {"imgSrc":"../../static/images/product_10.jpg"},
        {"imgSrc":"../../static/images/product_11.jpg"},
        {"imgSrc":"../../static/images/product_12.jpg"}

      ],
      comment:[
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"还不错，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"还不错，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"还不错，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"还不错，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"还不错，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"真心好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"真心好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"真心好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"真心好用，会回购"},
        {"commentId":"******58753","commentName":"韓**","commentTime":"2018-04-13","commentContent":"真心好用，会回购"}
      ],
     endTime:'2018-04-20 14:00:00',
     days:0,
     hours:0,
     minutes:0,
     seconds:0,
     flag:false
    }
  },
  created () {
    //倒计时
     let time = setInterval(()=>{
        if(this.flag == true){
            clearInterval(time);
            this.days=0;
            this.hours=0;
            this.minutes=0;
            this.seconds=0

        }else{
            this.timeDown();
        }
        
    },1000);  
  },

  mounted(){
      $(".main-tab li").click(function(){
        $(this).addClass("selected-tab").siblings("li").removeClass("selected-tab");
      });
    //   评价列表动效
     setInterval(()=>{
        this.evaluate();
     },3000);  
      // 导航悬停效果
    $(window).load(function(){
        //首先获取导航栏距离浏览器顶部的高度
        var top = $('.product-detail').offset().top;
        var top1 = $("#detail").offset().top;
        var top2 = $("#params").offset().top;
   
        var top3 = $("#evaluate").offset().top;
        
        //开始监控滚动栏scroll
        $(document).scroll(function(){
            //获取当前滚动栏scroll的高度并赋值
            var scrTop = $(window).scrollTop()+84;
            //开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
            if(scrTop >= top){
                $('.main-tab').css({'position':'fixed','top':'0','width':'100%','max-width':'640px','background':'#fff'});
                // 判断在某个区域被选中
                if(scrTop>=top1&&scrTop<top2){
                   $(".main-tab li").eq(0).addClass("selected-tab").siblings("li").removeClass("selected-tab");
                }else if(scrTop>=top2&&scrTop<top3){
                   $(".main-tab li").eq(1).addClass("selected-tab").siblings("li").removeClass("selected-tab");
                }else if(scrTop>=top3){
                    $(".main-tab li").eq(2).addClass("selected-tab").siblings("li").removeClass("selected-tab");
                }
            }else{//否则清空悬浮
                $('.main-tab').css({'position':'','top':''});
            };
            

        })
    })  
  },
  methods:{
     timeDown(){
        //   倒计时
        var nowTime=new Date();
        let endTime=new Date(Date.parse(this.endTime.replace(/-/g,"/")));
        let leftTime = endTime.getTime() - nowTime.getTime();
        this.days = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        this.hours = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        this.minutes= Math.floor(leftTime / 1000 / 60 % 60);
        this.seconds= Math.floor(leftTime/ 1000 % 60);
        if(leftTime <= 0){
            this.flag = true
        }
   
     },
    //  评价列表动效
     evaluate(){
         let temp=this.comment[this.comment.length-1];
         this.comment.pop();
         this.comment.unshift(temp);
         $('ul.allpj li:first').css("height","0px");
         $('ul.allpj li:first').animate({height: '+74px'}, "normal");     
     },
      sendParams () {
        this.$router.push({
            name: 'Purchase',
            params: { 
                name: 'url', 
                dataObj: this.banner
            }
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import '../../static/css/index.css';

</style>
