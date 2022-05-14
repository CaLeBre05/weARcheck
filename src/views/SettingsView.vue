<template>
    <div>
        <FoldoutBox>
            <template #boxTitle>
               Titel
                </template>
            <template #boxText>
                Hallo mein Name ist Kathy und ich habe eine aufklappare Box gemacht und die teste ich jetzt was passiert wenn ich einen sehr langen Text einfüge.
                </template>
        </FoldoutBox>
        </div>
</template>

<script>
import FoldoutBox from '../components/FoldoutBox.vue';
export default {
    components: {
        FoldoutBox,
    },
};
</script>

<style>

</style>