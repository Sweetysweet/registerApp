<template lang="pug">
.toggle-wrapper
  label.toggle
    input(
        type="checkbox"
        :checked="mode === 'dark' ? 'checked' : false"
        @change="$emit('toggle')")
    span.toggler.round
</template>

<script>
export default {
  name: "Toggle",
  props: ["mode"],
};
</script>
<style lang="sass">
.toggle
    position: relative
    display: inline-block
    width: 60px
    height: 34px
    input
        opacity: 0
        width: 0
        height: 0
    .toggler
        position: absolute
        cursor: pointer
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: #15202B
        transition: 0.4s
        &:before
            position: absolute
            content: ''
            height: 26px
            width: 26px
            left: 4px
            bottom: 4px
            background-color: #fff
            transition: 0.4s

    input:checked + .toggler
        background-color: #2196f3
    input:focus + .toggler
        box-shadow: 0 0 2px #2196f3
    input:checked + .toggler:before
        transform: translateX(26px)
    .toggler.round
        border-radius: 34px
    .toggler.round:before
        border-radius: 50%
</style>