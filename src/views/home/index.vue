<template>
    <div>
        <hello />
    </div>
</template>

<script>
/* eslint-disable import/extensions, import/no-unresolved */
import Hello from '$components/hello';
/* eslint-enable import/extensions, import/no-unresolved */

export default {
    name: 'Home',
    components: {
        Hello,
    },
};
</script>
