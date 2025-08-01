<template>
    <img src="@/assets/layout/5.png" class="bg">
    <div class="gap80"></div>
    <div class="pl30 pr30 rel">

        <div class="top pt22">
            <div class="pl178 pr30 flex jb ac">
                <div>
                    <div class="size36 bold">PS12345678</div>
                    <div class="size24 opc6 mt10">邀请码:123456</div>
                </div>
                <div class="tag flex ac">
                    <div class="mr10 size20 ">设置</div>
                    <img src="@/assets/layout/18.png" class="img36">
                </div>
            </div>
            <div class="line mt22">
                <img src="@/assets/layout/17.png" class="pic17">
            </div>
            <div class="mt40 bold size48 pl30">400</div>
            <div class="pl30 mt10 opc6 size24">团队人数</div>
            <div class="size24 pl30 mt40">
                <span class="opc6 mr20">小区业绩</span>
                <span class="size28 mr50">100</span>
                <span class="opc6 mr20">团队业绩</span>
                <span class="size28">100</span>
            </div>
            <div class="level flex col jc ae">
                <div class="mainColor size36 bold">VO</div>
                <div class="size24 mt8">当前等级</div>
            </div>
        </div>

        <div class="share mt40 flex col jc">
            <div class="size28 bold">邀请好友一起玩吧!</div>
            <div class="flex mt24">
                <div class="btn">去邀请</div>
            </div>
        </div>

        <div class="stat mt40 flex col jb size26">
            <div class="flex jb">
                <div class="opc8">今日分享收益</div>
                <div>1.06</div>
            </div>
            <div class="flex jb">
                <div class="opc8">今日宝箱收益</div>
                <div>1.06</div>
            </div>
            <div class="flex jb">
                <div class="opc8">今日管理收益</div>
                <div>1.06</div>
            </div>
            <div class="flex jb">
                <div class="opc8">累计分享收益</div>
                <div>1.06</div>
            </div>
            <div class="flex jb">
                <div class="opc8">累计宝箱收益</div>
                <div>1.06</div>
            </div>
            <div class="flex jb">
                <div class="opc8">累计管理收益</div>
                <div>1.06</div>
            </div>
        </div>

        <div class="mt40">
            <div class="card">
                <div class="size30 bold tabs flex ac">团队列表</div>
                <div class="pl30 pr30">
                    <div class="item" v-for="(item,index) in 10" :key="index">
                        <div class="flex jb size28">
                            <div>备注</div>
                            <div class="mainColor">100</div>
                        </div>
                        <div class="flex jb opc8 size20 mt14">
                            <div>2025.06.26 12:26:56</div>
                            <div>USDT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="gap40"></div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.bg{
    width: 120vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
}
.top{
    height: 420px;
    background-image: url("@/assets/layout/16.png");
    background-size: 100% 100%;
    position: relative;
    .tag{
        height: 56px;
        border: 1px solid #FFFFFF;
        border-radius: 28px;
        padding: 0 20px;
    }
    .line{
        height: 18px;
        background-color: #FFFFFF;
        position: relative;
        .pic17{
            width: 126px;
            height: 208px;
            position: absolute;
            left: 28px;
            bottom: -30px;
        }
    }
    .level{
        width: 220px;
        height: 108px;
        background: linear-gradient(to right, #86EE3300, #86EE3333);
        position: absolute;
        right: 1px;
        top: 178px;
        padding-right: 28px;
    }
}
.share{
    height: 160px;
    background-image: url("@/assets/layout/19.png");
    background-size: 100% 100%;
    padding-left: 30px;
    .btn{
        height: 40px;
        border-radius: 10px;
        padding: 0 20px;
        background-color: $main-color;
        color: #000000;
        font-size: 20px;
        line-height: 40px;
    }
}
.stat{
    height: 468px;
    background-image: url("@/assets/layout/20.png");
    background-size: 100% 100%;
    padding: 40px 30px;
}
.card{
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    background-color: #00000033;
    .tabs{
        height: 98px;
        background-color: #FFFFFF1A;
        padding: 0 30px;
    }
    .item{
        padding: 40px 0 30px 0;
        border-bottom: 1px solid #FFFFFF4D;
    }
}
</style>