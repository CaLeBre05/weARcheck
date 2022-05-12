<template>
    <div>Scan
        <BackButton @click="goBack"></BackButton>
    </div>
</template>

<script>
import BackButton from '@/components/backButton.vue';

export default {
    name: "ScanView",
    components: {
    BackButton
},
};
</script>
