<template>
    <h1>
        Hello, {{ name }}!
    </h1>
</template>

<script>
export default {
    name: 'Hello',
    props: {
        name: {
            type: String,
            default: 'world',
        },
    },
};
</script>
