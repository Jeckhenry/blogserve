<template>
    <div class="animations">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>


<style scoped lang="scss">
.animations{
    clear: both;
    @keyframes move {
        20% {transform: scaleY(1.0)}
        40% {transform: scaleY(0.8)}
        60% {transform: scaleY(0.6)}
        80% {transform: scaleY(0.8)}
        100% {transform: scaleY(1.0)}
    }
    &>div{
        width: 5px;
        height: 20px;
        background: #2db7f5;
        margin-right:5px; 
        float: left;
        animation: move 1.4s linear infinite;
    }
    &>div:nth-of-type(4){
        animation-delay: 0.8s;
    }
    &>div:nth-of-type(3){
        animation-delay: 0.6s;
    }
    &>div:nth-of-type(2){
        animation-delay: 0.4s;
    }
    &>div:nth-of-type(1){
        animation-delay: 0s;
    }
}
</style>