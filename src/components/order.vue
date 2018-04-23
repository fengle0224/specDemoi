<template>
  <div class="order">
    <h2>訂單查詢</h2>
    <h6>請輸入您的訂單號或者物流單號</h6>
    <div class="order-sn">
        <div class="input-infor">
            <input type="text" class="input-text"  name="orderId" v-model="orderId">
        </div>
        <label class="query-btn" @click="queryOrder">查詢</label>
    </div>
    <div class="order-state" v-show="orderState"></div>
    <ul class="support-tag">
        <li>
            <span></span>
            <h6>正品保障</h6>
        </li>
        <li>
            <span></span>
            <h6>在線支付</h6>
        </li>
        <li>
            <span></span>
            <h6>貨到付款</h6>
        </li>
        <li>
            <span></span>
            <h6>7天鑒賞期</h6>
        </li>
    </ul>
    <div class="order-tips">溫馨提示：收到貨品后如果有任何問題，請及時通過電子郵件support@martdealer.com與我們聯繫，我們將竭誠為您服務！</div>
    <router-link to="/"><div class="back-home">返回首頁</div></router-link>
  </div>
</template>

<script>
export default {
  name:"order",
  data(){
      return{
          orderId:'',
          orderState:false
      }
  },
  methods:{
      queryOrder(){
        // axios.post('/user', {
        //     orderId: this.orderId,
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .order{
        background: #fff;
    }
    h2 {
        padding-top: 40px;
        font-size: 24px;
        color: #464646;
        text-align: center;
        font-weight: 400;
        font-style: normal;
        word-wrap: break-word;
    }
    h6 {
        color: #b7b7b7;
        text-align: center;
        margin-top: 10px;
        font-size: 12px;
    }
    .order-sn {
        margin: 30px 35px 0;
        height: 30px;
    }
    .order-sn .input-infor {
        width: calc(100% - 103px);
        height: 100%;
        float: left;
    }
    .order-sn .input-infor input {
        border: 1px solid #b7b7b7;
        width: 100%;
        height: 100%;
        padding-left: 6px;
    }
    .order-sn .query-btn {
        width: 95px;
        height: 100%;
        display: inline-block;
        margin-left: 8px;
        /* float: left; */
        background: #df1d25;
        font-size: 15px;
        color: #fff;
        line-height: 30px;
        text-align:center;
        cursor:pointer;
    }
    .order-state {
        font-size: 24px;
        color: #df1d25;
        text-align: center;
        margin-top: 55px;
    }
    .support-tag {
        width: 100%;
        padding: 20px 18px 0;
        overflow: hidden;
        margin-top: 42px;
    }
    .support-tag li {
        width: 70px;
        height: 60px;
        text-align: center;
        float: left;
        margin-left: calc((100% - 280px)/ 3);
    }
    .support-tag li:first-child {
        margin-left: 0;
    }
    .support-tag li span {
        width: 21px;
        height: 25px;
        display: inline-block;
        background: url(../../static/images/support-tag.png) no-repeat;
        background-size: contain;
    }
    .support-tag li h6 {
        font-size: 13px;
        color: #df1d25;
        margin-top: 7px;
        text-align: center;
    }
    .order-tips {
        margin: 20px 0 0;
        padding: 10px 25px;
        background: #eee;
        color: #8f8f94;
        line-height: 20px;
        font-size:12px;
    }
    .back-home {
        background: #df2027;
        background-size: 20px 20px;
        color: #fff;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
        cursor:pointer;
        text-align:center;
    }
</style>
