<template>
    <cus-nav title="兑换">
        <img src="@/assets/layout/25.png" class="img52">
    </cus-nav>

    <div class="pl30 pr30 pt40">

        <div class="flex jb ac">
            <div class="size28 opc6">发送</div>
            <div class="size26">可用: 125.68 USDT</div>
        </div>

        <div class="mainCard mt30 flex ac">
            <input type="number" placeholder="0.00" class="flex1 size28 bold">
            <div class="mainColor size24 ml30">全部</div>
            <div class="line ml20 mr20"></div>
            <div class="size28">收益USDT</div>
        </div>

        <div class="mainLine mt90 rel">
            <img src="@/assets/layout/29.png" class="pic29">
        </div>
        <div class="size28 mt60 opc6">接收</div>

        <div class="mainCard mt30 flex ac">
            <div class="flex1 size28 bold">0.00</div>
            <div class="line ml20 mr20"></div>
            <div class="size28">USDT</div>
        </div>

        <div class="mainBtn mt120">确认</div>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.line{
    width: 1px;
    height: 40px;
    background-color: #FFFFFF33;
}
.pic29{
    width: 60px;
    height: 60px;
    position: absolute;
    left: 315px;
    top: -30px;
}
</style>