<template>
  <div class="purchase">
    <!-- 属性选择 -->
    <div class="choose-attr">
      <div class="product-detail">
        <div class="lf pic">
          <img :src="img" alt="">
        </div>
        <div class="lf info">
          <p>SM-新款嬰兒睡袋秋冬季加厚純棉可拆袖新生兒童睡袋全棉寶寶防踢被子</p>
          <p class="price">{{price}}</p>
         
        </div>
      </div>
      <div class="product-info">
        <ul class="attribute">
          <li class="size clearfix" data-attributeid="3876">
            <span class="name"><i>*</i>顏色</span>
            <ul class="num">
                <li :class="{active:selected_good.name===item.name}" @click="selected(item)"  v-for="(item,index) in check_spec_repeat(allAttr)"
                 :key="index">{{item.name}}</li>
            </ul>
          </li>
          <li class="size" data-attributeid="3877">
            <span class="name"><i>*</i>尺寸</span>
            <ul class="num">
              <li :class="{active:selected_good.option1===item.option1&&selected_good.name===item.name,disabled:selected_good.name!==item.name}"
                @click="selectedName(item)"  v-for="(item,index) in check_option1_repeat(allAttr)" :key="index">{{item.option1}}</li>
            </ul>
          </li>
          <li class="size" data-attributeid="3877">
            <span class="name"><i>*</i>套餐</span>
            <ul class="num">
              <li :class="{active:selected_good.option2===item.option2&&selected_good.option1===item.option1&&selected_good.name===item.name,disabled:selected_good.option1!==item.option1}"
                @click="selectedOption1(item)" v-for="(item,index) in check_option2_repeat(allAttr)" :key="index">{{item.option2}}</li>
            </ul>
          </li>
          <li class="amount">
            <span class="name"><i>*</i>數量</span>
            <div class="product_amount_wrapper">  
              <div class="input-group">
                <button class="btn btn-left" type="button" @click="minus()">-</button>
                <input type="text" name="product_amount"  v-model="num" id="amount" class="product_amount">
                <button class="btn btn-right" type="button" @click="add()">+</button>
              </div>
            </div>
          </li>
        </ul>
        <p class="attr-tips"><i>溫馨提示：</i>如需不同樣式或者多個尺碼，請與我們留言。</p>
      </div>
    </div>
    <form>
    <!-- 提交地址信息 -->
    <div class="address">
         <div class="form-group">
            <label class="text-left">
                <i class="red">*</i><span class="name">姓名:</span>
            </label>
            <div class="input-infor">
                <input type="text" class="necessary text-left" v-model="submit.name" id="firstName" placeholder="請輸入您的姓名" name="name">
            </div>
        </div>
        
        <div class="form-group">
            <label class="form-list text-left">
                <i class="red">*</i><span class="name">行動電話:</span>
            </label>
            <div class="input-infor">
                <input type="tel" class="necessary  text-left" v-model="submit.phone" id="phone" placeholder="請輸入您的手機號碼或者電話號" name="phone">
            </div>
        </div>
        <div class="form-group">
            <label class="form-list text-left">
                <i class="red">*</i><span class="name">地址:</span>
            </label>
            <div class="input-infor" id="chooseArea">
                <v-distpicker :province="submit.province"  :city="submit.city" :area="submit.area"  @selected="onSelected"></v-distpicker>
            </div>
        </div>
        <div class="form-group">
            <label class="form-list text-left"><span class="name" style="display:none;">詳細地址:</span></label>
            <div class="input-infor">
                <input type="text" class="necessary  text-left" id="address" placeholder="您的詳細地址" v-model="submit.detailAddress">
            </div>
        </div>
        <div class="form-group">
            <label class="form-list text-left text-contact">
                <i class="red">*</i><span class="name">至少選擇壹種聯系方式<i>（便於我們給您發送物流單號）</i></span>
            </label>
        </div>
        <div class="form-group">
            <label class="form-list text-left text-choose">
                <span class="name">電子信箱:</span>
            </label>
            <div class="input-infor">
                <input  name="email" type="email" class="text-left contact" id="email" placeholder="" v-model="submit.email">
                
            </div>
        </div>
        <div class="form-group">
            <label class="form-list text-left text-choose">
               <span class="name">Facebook:</span>
            </label>
            <div class="input-infor">
                 <input type="text" class="text-left contact" id="facebook" placeholder="" v-model="submit.facebook" name="facebook" >
            </div>
        </div>
        <div class="form-group">
            <label class="form-list text-left text-choose">
               <span class="name">Line:</span>
            </label>
            <div class="input-infor">
                 <input type="text" class="text-left contact" id="line" placeholder="" v-model="submit.line">
            </div>
        </div>
        <div class="form-group pay">
            <label class="form-list text-left">
                <i class="red">*</i><span class="name">付費方式:</span>
            </label>
            <div class="input-infor">
                <label for="cash">貨到付款</label>
                <input type="radio" name="pay" value="0" v-model="submit.value" class="necessary" id="cash" checked="checked">
            </div>
            <div class="input-infor">
                <label for="paypal" class="paypal"></label>
                <input type="radio" name="pay" value="1" class="necessary" id="paypal" v-model="submit.value" >
            </div>
        </div>
        <div class="form-group">
            <label class="form-list text-left">
                <span class="name">留言:</span>
            </label>
            <div class="input-infor">
                <input type="text" class="text-left" id="message" placeholder="如您有需求請告訴我們" v-model="submit.message">
            </div>
        </div>
     
       
    </div>
    <!-- 温馨提示 -->
    <div class="address-tips1">
      <p>温馨提示：</p>
      <p>本產品實際使用效果根據個人情況而定，不保證每位用戶能享受到所宣傳的效果。如有問題請及時通過電子郵件support@martdealer.com與我們聯繫。我們將竭誠為您服務！</p>
    </div>
    <!-- 最新购买信息 -->
    <div class="address-tips2">
        <div class="scroll_div">
            <ul class="origin">
                <li v-for="(item,index) in newPurchase" :key=index class="anim">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
    <!-- 立即购买 -->
    <div class="fixbar">
        <div class="order-query total-price">合計：{{price*num}}</div>
        <div class="order-btn now" id="order" @click="toBuy">立即購買</div>
    </div>
      </form>
      <div class="alert" v-show="show" style="margin-top: -29.5px;">{{info}}</div>
    </div>

</template>
<script>
import axios from 'axios';
import VDistpicker from '../../static/js/v-distpicker.js'
export default {
  name: "Purchase",
  components: { 
    VDistpicker
  },
  data() {
    return {
      newPurchase: [
        "【最新購買】 李**(908756545) 5分鐘前購買",
        "【最新購買】 陳**(908768548) 8分鐘前購買",
        "【最新購買】 王**(908766544) 10分鐘前購買",
        "【最新購買】 吳**(908764544) 12分鐘前購買",
        "【最新購買】 張**(908756545) 13分鐘前購買",
        "【最新購買】 沈**(908768548) 15分鐘前購買",
        "【最新購買】 陳**(908766544) 17分鐘前購買",
        "【最新購買】 劉**(908764544) 21分鐘前購買",
        "【最新購買】 李**(908756545) 22分鐘前購買",
        "【最新購買】 張**(908766544) 25分鐘前購買",
        "【最新購買】 趙**(908764544) 3分鐘前購買",
        "【最新購買】 李**(908756545) 5分鐘前購買",
        "【最新購買】 陳**(908768548) 8分鐘前購買",
        "【最新購買】 王**(908766544) 10分鐘前購買",
        "【最新購買】 吳**(908764544) 12分鐘前購買",
        "【最新購買】 張**(908756545) 13分鐘前購買"
      ],
      allAttr: [
        {
          id: 174067,
          name: "一一一一",
          sku: null,
          option1: "緑色",
          option2: "测试1",
          price: 1888,
          img: "../../static/images/banner1.jpg"
        },
        {
          id: 194843,
          name: "一一一一",
          sku: null,
          option1: "黑色",
          option2: "测试2",
          price: 1000,
          img: "../../static/images/banner1.jpg"
        },
        {
          id: 174068,
          name: "二二二二",
          sku: null,
          option1: "間金黑面",
          option2: "测试1",
          price: 1888,
          img: "../../static/images/banner2.jpg"
        },
        {
          id: 194852,
          name: "二二二二",
          sku: null,
          option1: "間金黑面",
          option2: "测试2",
          price: 1999,
          img: "../../static/images/banner2.jpg"
        },
        {
          id: 174070,
          name: "三三三三",
          sku: null,
          option1: "藍色",
          option2: "测试1",
          price: 1888,
          img: "../../static/images/banner4.jpg"
        },
        {
          id: 194854,
          name: "三三三三",
          sku: null,
          option1: "藍色",
          option2: "测试2",
          price: 1999,
          img: "../../static/images/banner4.jpg"
        },
        {
          id: 194853,
          name: "四四四四",
          sku: null,
          option1: "黑色",
          option2: "测试1",
          price: 1999,
          img: "../../static/images/banner3.jpg"
        },
        {
          id: 174069,
          name: "四四四四",
          sku: null,
          option1: "黑色",
          option2: "测试2",
          price: 1888,
          img: "../../static/images/banner3.jpg"
        }
      ],
      newIndex: -1,
      img: "../../static/images/banner1.jpg",
      price: 1888,
      selected_good: {
        name: "",
        option1: "",
        option2: "",
        price: 0,
        img: ""
      },
      id: 0,
      num: 1,
      appData: {
        language: "tw"
      },
      submit: {
        name: "",
        phone: "",
         province: "台湾省",
         city: "",
         area: "",
        detailAddress: "",
        email: "",
        facebook: "",
        line: "",
        value: "",
        message: ""
      },
      info: "",
      show: false,
    };
  },
  methods: {
    // 省市区选择
    onSelected: function (data) {
        this.submit.city=data.city.value;
        this.submit.area=data.area.value;
      },
    //最新购买消息循环显示 
    scroll() {
      let temp = this.newPurchase[0];
      this.newPurchase.shift();
      this.newPurchase.push(temp);
      $(".scroll_div").css("top", "0px");
     $(".scroll_div").animate({ top:"-34px" }, "slow");
    },

    // 字符串排序
    by: function(name) {
      return function(o, p) {
        var a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
          a = o[name];
          b = p[name];
          if (a === b) {
            return 0;
          }
          if (typeof a === typeof b) {
            return a < b ? -1 : 1;
          }
          return typeof a < typeof b ? -1 : 1;
        } else {
          throw "error";
        }
      };
    },
    // 一级菜单点击事件
    selected(item) {
      this.selected_good.name = item.name;
      // 选取对应图片
      let imgArr = [];
      for (let i in this.allAttr) {
        if (this.allAttr[i].name == this.selected_good.name) {
          if (imgArr.indexOf(this.allAttr[i].img) < 0) {
            this.img = this.allAttr[i].img;
          }
        }
      }
       this.selected_good.option1=null;
       this.selected_good.option2=null;
    },
    // 二级菜单点击事件
    selectedName(item) {
      this.selected_good.option1=null;
       this.selected_good.option2=null;
      this.selected_good.option1 = item.option1;

      
    },
    // 三级菜单点击事件
    selectedOption1(item) {
      this.selected_good.option2 = item.option2;
     
      // 选取对应价格
      for (let i in this.allAttr) {
        if (
          this.allAttr[i].name == this.selected_good.name &&
          this.allAttr[i].option1 == this.selected_good.option1 &&
          this.allAttr[i].option2 == this.selected_good.option2
        ) {
          this.price = this.allAttr[i].price;
          this.id = this.allAttr[i].id;
        }
      }
    },
    // 一级去重
    check_spec_repeat(list) {
      let arr = [];
      return list.filter(function(i) {
        if (arr.indexOf(i.name) < 0) {
          arr.push(i.name);
          return true;
        }
        return false;
      });
    },
    // 二级数组去重并重新排列
    check_option1_repeat(list) {
      let templist = [];
      let option1list = [];
      if (this.selected_good.name) {
        for (let i in list) {
          if (list[i].name === this.selected_good.name) {
            if (option1list.indexOf(list[i].option1) < 0) {
              templist.push(list[i]);
              option1list.push(list[i].option1);
            }
          }
        }
        for (var i in list) {
          if (option1list.indexOf(list[i].option1) < 0) {
            //查找二级规格是否已经存在
            templist.push(list[i]);
            option1list.push(list[i].option1);
          }
        }
      } else {
        for (var i in list) {
          if (option1list.indexOf(list[i].option1) < 0) {
            templist.push(list[i]);
            option1list.push(list[i].option1);
          }
        }
      }
      return templist.sort(this.by("option1"));
    },
    // 三级数组去重并重新排列
    check_option2_repeat(list) {
      let templist = [];
      let option2list = [];
      if (this.selected_good.option1) {
        for (let i in list) {
          if (list[i].name === this.selected_good.name&&list[i].option1 === this.selected_good.option1) {
            if (option2list.indexOf(list[i].option2) < 0) {
              templist.push(list[i]);
              option2list.push(list[i].option2);
            }
          }
        }
        for (var i in list) {
          if (option2list.indexOf(list[i].option2) < 0) {
            templist.push(list[i]);
            option2list.push(list[i].option2);
          }
        }
      } else {
        for (var i in list) {
          if (option2list.indexOf(list[i].option2) < 0) {
            templist.push(list[i]);
            option2list.push(list[i].option2);
          }
        }
      }
     
      return templist.sort(this.by("option2"));
    },
    // 数量减小
    minus() {
      if (this.num > 1) {
        this.num = this.num - 1;
      }
    },
    // 数量增加
    add() {
      this.num = this.num + 1;
    },
    //表单验证
    toBuy() {
      var TW_phone = /^([-_－—\s\(]?)([\(]?)((((0?)|((00)?))(((\s){0,2})|([-_－—\s]?)))|(([\)]?)[+]?))(886)?([\)]?)([-_－—\s]?)([\(]?)[0]?[1-9]{1}([-_－—\s\)]?)[0-9]{2}[-_－—]?[0-9]{3}[-_－—]?[0-9]{3}$/;
      var Email=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if (this.id == 0) {
        this.info = "请选择商品相对应的规格";
        this.show = true;
      } else if (this.submit.name == "") {
        this.info = "请输入您的姓名";
        this.show = true;
      } else if (this.submit.phone == "") {
        this.info = "请输入您的电话";
        this.show = true;
      } else if (!TW_phone.test(this.submit.phone)) {
        this.info = "请输入您电话的正确格式";
        this.show = true;
      } else if (this.submit.city == "") {
        this.info = "请输入您所在的城市";
        this.show = true;
      } else if (this.submit.area == "") {
        this.info = "请输入您所在的区或县";
        this.show = true;
      } else if (this.submit.detailAddress == "") {
        this.info = "请输入您所在的详细地址";
        this.show = true;
      } else if (this.submit.value == "") {
        this.info = "请输入您的付款方式";
        this.show = true;
      } else if (
        this.submit.email == "" &&
        this.submit.facebook == "" &&
        this.submit.line == ""
      ) {
        this.info = "请至少选择一种联系方式";
        this.show = true;
      }else if( this.submit.email !== "" && !Email.test(this.submit.email)){
           this.info = "您邮箱格式不正确";
           this.show = true;
      }else{
        //  axios.post("/user", {
        //   id:this.id,
        //   info:this.submit,
        // })
        // .then(function(response) {
        //   console.log(response);
        // })
        // .catch(function(error) {
        //   console.log(error);
        // });
        var items={price:this.price,num:this.num,img:this.img,price:this.price,name:this.selected_good.name,option1:this.selected_good.option1,option2:this.selected_good.option2,value:this.submit.value};
        localStorage.setItem("itemss",JSON.stringify(items));
        this.$router.push({
            name: 'Success',
            params: { 
                dataObj: items
            }
        })
      }

      if (this.show == true) {
        setTimeout(() => {
          this.show = false;
        }, 3000);
      }

    }
  },
  mounted() {
    setInterval(() => {
      this.scroll();
    }, 2000);
    $(".distpicker-address-wrapper").children("select").eq(0).css("display","none");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  line-height: 2.8rem;
  padding: 1rem;
  background: #252525;
  opacity: 0.8;
  font-size: 1.7rem;
  position: fixed;
  top: 50%;
  width: 100%;
  border-radius: 5px;
  z-index: 10000;
  color: #fff;
  text-align: center;
  max-width: 640px;
  min-width: 320px;
}
/* 属性选择 */
div.choose-attr {
  background: #fff;
  width: 100%;
  overflow: hidden;
}
div.product-detail {
  overflow: hidden;
  border-bottom: 1px solid #e5e5e5;
}
div.product-detail .pic {
  width: 30%;
  padding: 18px;
}
div.product-detail .pic img {
  width: 100%;
}
div.product-detail .info {
  width: 70%;
  padding: 18px 18px 0 0;
}
div.product-detail .info p {
  width: 100%;
}
p.price {
  color: #df2027;
  line-height: 35px;
}
div.product-info {
  padding: 18px;
}
ul.attribute .name {
  color: #464646;
  padding-top: 14px;
  display: inline-block;
}
ul.attribute .name i,
.text-left i {
  color: #df2027;
  margin-right: 5px;
  font-style: normal;
  font-size: 12px;
}
ul.attribute .num {
  padding: 0 0 6px 3px;
}
ul.attribute .num li {
  padding: 0 12px;
  font-size: 16px;
  height: 32px;
  line-height: 32px;
  margin-right: 12px;
  display: inline-block;
  border: 1px solid #c1c2c4;
  cursor: pointer;
  border-radius: 3px;
  margin-top: 9px;
}
ul.attribute .num li.active {
  border-color: #e5463b;
  color: #e5463b;
}
ul.attribute .num li.disabled {
  background: #efefef;
  color: #999;
  border-color: #ccc;
  box-shadow: none;
  cursor: not-allowed;
}
.product_amount_wrapper {
  /* width: 40%; */
  margin-top: 9px;
}
.input-group {
  display: table;
  border-collapse: separate;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1.42857143;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  background-color: #fff;
  cursor: pointer;
}
.btn.btn-left {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn.btn-right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.product_amount {
  display: inline-block;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  text-align: center;
}
.attr-tips {
  font-size: 12px;
  color: #464646;
  margin: 20px 0;
}
.attr-tips i {
  font-style: normal;
  color: #df2027;
}
/*地址信息*/
.address {
  margin-top: 12px;
  padding: 8px 0 0 18px;
  background: url(../../static/images/border.png) 0.5rem top repeat-x #fff;
}
.form-group {
  font-size: 15px;
  padding: 18px 0;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 0;
  overflow: hidden;
}
.text-left {
  padding-left: 0;
  font-size: 16px;
  color: #464646;
  width: 28%;
  float: left;
  margin-bottom: 1px;
}
.text-left.text-contact {
  width: 100%;
}
label.text-left.text-choose {
  font-size: 14px;
  padding-left: 15px;
  position: relative;
  top: 2px;
}

.input-infor {
  width: 72%;
  float: left;
}
.input-infor input {
  display: block;
  width: 100%;
  font-size: 15px;
  margin-top: 1px;
  border: none;
}
.input-infor .select {
  font-size: 14px;
  width: 45%;
  float: left;
  border: 1px solid #ddd;
  padding: 5px 0 5px 12px;
}
.input-infor .select:last-child {
  margin-left: 15px;
}
.form-group.pay > label {
  margin-top: 27px;
}
.form-group.pay .input-infor {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 18px;
}
input[type="radio"] {
  float: left;
  margin: 4px 12px 0 0;
  width: auto;
}
.form-group.pay .input-infor .paypal {
  width: 60px;
  height: 21px;
  display: inline-block;
  background: url(../../static/images/paypal.png) center center no-repeat;
  background-size: 60px auto;
}
.form-group.pay .input-infor:last-child {
  padding: 6px 0 0;
  margin-left: 28%;
  border-bottom: none;
}
.address-tips1 {
  margin-top: 12px;
  padding: 18px;
  background: #fff;
  color: #b3b3b3;
  font-size: 14px;
  line-height: 24px;
}
.address-tips2 {
  padding: 12px 0 55px 0;
  background: #f3f3f3;
  color: #878686;
  position: relative;
  height: 190px;
  overflow: hidden;
  line-height: 26px;
}
.address-tips2 .scroll_div {
  width: 100%;
  position: absolute;
  top: 0;
}
.address-tips2 li {
  padding: 4px 12px;
  background: #f3f3f3;
}
.address-tips2 li:nth-child(odd) {
  background: #ededed;
}
div.order-query.total-price {
  width: 55%;
  color: #df2027;
}
div.order-btn.now {
  width: 45%;
}
</style>
