<template>
  <topic :is-edit="true" />
</template>

<script>
import Topic from './components/Topic'
export default {
  name: 'EditTopic',
  components: { Topic }
}
</script>
