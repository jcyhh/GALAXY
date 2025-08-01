<template>
    <cus-nav title="充值">
        <img src="@/assets/layout/25.png" class="img52">
    </cus-nav>

    <div class="pl30 pr30 mt40">

        <div class="mainCard size28">
            <div class="flex jb ac">
                <div class="opc6">币种</div>
                <div>USDT</div>
            </div>
            <div class="flex jb ac mt30">
                <div class="opc6">链</div>
                <div>USDT</div>
            </div>
            <div class="flex jb mt30">
                <div class="opc6">充值地址</div>
                <div class="flex1 ml70 flex ac tr">
                    <div class="br flex1">0xalifuiewhgouerg564vbfd8sv69a45s8xc4asc4as86cs</div>
                    <img src="@/assets/layout/26.png" class="img24 ml16">
                </div>
            </div>
        </div>

        <div class="flex jc mt110">
            <div class="card flex jc ac">
                <QRCode value="https://blog.csdn.net/Dandrose" :size="200" :bordered="false" />
            </div>
        </div>

        <div class="flex jc mt68">
            <div class="btn flex ac">扫描上方二维码</div>
        </div>

        <div class="size24 mt80 lh40">
            1、请勿向上述地址充值任何非USDT资产，否则资产不可找回。<br>
            2、最小充值金额为:0.01USDT,小于最小金额的充值将不会上账且无法退回。
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.card{
    width: 480px;
    height: 480px;
    background-image: url("@/assets/layout/27.png");
    background-size: 100% 100%;
}
.btn{
    height: 80px;
    border-radius: 10px;
    background-color: #FFFFFF1A;
    border: 1px solid #FFFFFF;
    padding: 0 58px;
}
</style>