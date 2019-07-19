<template>
  <topic :is-edit="false" />
</template>

<script>
import Topic from './components/Topic'
export default {
  name: 'CreateTopic',
  components: { Topic }
}
</script>
