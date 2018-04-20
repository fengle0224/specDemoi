<template>
  <div class="ionfo">
   <div class="success">
        <img src="http://lp.martdealer.com/source/v11/m/images/success.png" alt="">
        <span class="line1">{{msg}}</span>
        <span class="line2">請保持手機暢通，我們會盡快為您發貨。<br>祝您購物愉快！</span>
    </div>
    <div id="orderDetail">
      <ul class="order-list clearfix">
          <li class="order-number gray">
              訂單號 ：<i id="orderNum">J18041710102166610</i>
          </li>
          <li class="clearfix order-detail">
              <div class="img-show">
                  <img src="https://s3.amazonaws.com/lp.martdealer.com/web/image/20171103/b374ad3ad7fb4e728edcac26776ca65c.jpg" alt="">
              </div>
              <div class="detail-show">
                  <div class="product-name">
                    <span class="product-title">SM-新款嬰兒睡袋秋冬季加厚純棉可拆袖新生兒童睡袋全棉寶寶防踢被子</span><span class="sale-tag"></span>
                  </div>
                  <div class="product-detail">
                      <div class="attr">
                          <span class="gray">尺寸:100CM;顏色:淺藍色;</span>
                          <span class="gray">数量：1</span>
                          <span class="gray">货到付款</span>
                      </div>
                     
                         <div class="pay">
                          <span class="gray">
                              <span class="orange">總計：<i>1137</i></span>
                          </span>
                        </div>
                     
                     
                  </div>
              </div>
          </li>
      </ul>
    </div>
     <router-link to="/">
    <div class="back-home">再買壹件</div>
     </router-link>
  </div>
</template>

<script>
export default {
  name: "success",
  data() {
    return {
      msg: "提交成功",
      items:[]
    };
  },
  created(){
    this.items=JSON.parse(window.localStorage.getItem("itemss"))
    console.log(this.items);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.success {
  padding: 5rem 0 3rem;
  background: #fff;
}
.success img {
  margin: 0 auto;
  display: block;
  width: 75px;
  height: 75px;
}
.success .line1 {
  line-height: 56px;
  display: block;
  font-size: 26px;
  text-align: center;
  color: #464646;
  padding-top: 4px;
}
.success .line2 {
  line-height: 24px;
  display: block;
  font-size: 14px;
  color: #b7b7b7;
  text-align: center;
  margin-top: 4px;
}
.order-list {
    background: #fff;
    margin: 18px 0 0;

  }
  .order-list .order-number {
    padding-top: 8px;
    line-height: 38px;
    color: #aaa;
    font-size: 14px;
    padding-left: 12px;
}
.order-list .order-detail {
    padding: 20px;
    margin: 6px 0;
    background: #fafafa;
    overflow: hidden;
}
.order-list .order-detail .img-show {
    width: 24%;
    float: left;
}
.order-list li img {
    width: 100%;
    display: block;
}
.order-list .order-detail .detail-show {
    width: 76%;
    padding-left: 14px;
    float: left;
}
.order-list .product-name {
    color: #313131;
    line-height: 20px;
    font-size: 14px;
}
.order-list .product-name .product-title {
    margin-right: 10px;
}
.order-list .product-name .sale-tag {
    font-size: 12px;
    color: #fff;
    background: #df2027;
    border-radius: 3px;
    padding: 1px 5px;
    display: none;
}
.product-detail .attr {
    margin-top: 9px;
}
.product-detail .attr span {
    margin-right: 10px;
    font-size: 12px;
    color: #aaa;
}
.product-detail .attr span {
    margin-right: 10px;
    font-size: 12px;
    color: #aaa;
}
.product-detail .attr span {
    margin-right: 10px;
    font-size: 12px;
    color: #aaa;
}
.order-list .pay {
    padding-top: 6px;
    font-size: 12px;
    line-height: 22px;
}
.order-list .pay .orange {
    font-size: 14px;
}
.orange, .red {
    color: #df2027;
}
i{
  font-style:normal;
}
.back-home {
    background: #df2027;
    background-size: 20px 20px;
    color: #fff;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    position: fixed;
    bottom: 0;
    width: 100%;
    cursor: pointer;
    max-width: 640px;
    margin: 0 auto;
}
</style>
