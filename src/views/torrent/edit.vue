<template>
  <torrent :is-edit="true" />
</template>

<script>
import Torrent from './components/Torrent'
export default {
  name: 'EditTorrent',
  components: { Torrent }
}
</script>
