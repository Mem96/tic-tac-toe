<template>
    <div @click="$emit('clickOnCell')" class='cell' :style="{color: fontColor}">
        <span>{{value}}</span>
    </div>
</template>

<script>
export default{
    props: {
        value: String,
        fontColor: String,
    }
}
</script>

<style>
    .cell{
        width: 40px;
        height: 40px;
        margin: 20px;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        border: 3px solid transparent
    }
    .cell:hover{
        border: 3px dotted rgb(81, 139, 162);
        border-radius: 50%;
    }
</style>
