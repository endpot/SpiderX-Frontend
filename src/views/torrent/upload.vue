<template>
  <torrent :is-edit="false" />
</template>

<script>
import Torrent from './components/Torrent'
export default {
  name: 'UploadTorrent',
  components: { Torrent }
}
</script>
