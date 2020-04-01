<template>
  <Layout :show-back-link="false">
    <div>
      <code v-if="device">{{ device.label }}</code>
      <vue-web-cam
        ref="webcam"
        :device-id="deviceId"
        width="100%"
        @started="onStarted"
        @stopped="onStopped"
        @error="onError"
        @cameras="onCameras"
        @camera-change="onCameraChange"
      />
      <!--       <div class="grid">
        <div class="cards" v-for="edge in computeCards" :key="edge.id">
          <CardLayout class="card-layout" :item="edge" />
        </div>
      </div> -->
    </div>
  </Layout>
</template>

/*
<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</page-query>
*/

<script>
import CardLayout from "~/components/CardLayout.vue";
import { WebCam } from "vue-web-cam";

export default {
  components: {
    CardLayout,
    "vue-web-cam": WebCam
  },
  data: function () {
    return {
      img: null,
      camera: null,
      deviceId: null,
      devices: []
    };
  },
  metaInfo() {
    return {
      title: this.$page.metadata.siteName,
      meta: [
        {
          name: "description",
          content: this.$page.metadata.siteDescription
        }
      ]
    };
  },
  created: function () {},
  mounted: function () {},
  watch: {
    camera: function (id) {
      this.deviceId = id;
    },
    devices: function () {
      // Once we have a list select the first one
      const [first, ...tail] = this.devices;
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    }
  },
  beforeDestroy() {},
  computed: {
    device: function () {
      return this.devices.find(n => n.deviceId === this.deviceId);
    }
  },
  methods: {
    onCapture() {
      this.img = this.$refs.webcam.capture();
    },
    onStarted(stream) {
      console.log("On Started Event", stream);
    },
    onStopped(stream) {
      console.log("On Stopped Event", stream);
    },
    onStop() {
      this.$refs.webcam.stop();
    },
    onStart() {
      this.$refs.webcam.start();
    },
    onError(error) {
      console.log("On Error Event", error);
    },
    onCameras(cameras) {
      this.devices = cameras;
      console.log("On Cameras Event", cameras);
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log("On Camera Change Event", deviceId);
    }
  }
};
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1248px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
