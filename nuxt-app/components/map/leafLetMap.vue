<template>

            <div class="rounded-2xl overflow-hidden w-full h-60"  dir="ltr" >
              <l-map dir="ltr" ref="map" v-model:zoom="zoom" :center="[36.299, 59.601]" :useGlobalLeaflet="false" >
                <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  layer-type="base"
                  name="OpenStreetMap"
                ></l-tile-layer>
                <l-marker  :lat-lng="marker">
                    
<l-tooltip>
    <div>Bloom shop</div>
    </l-tooltip>
    
    
    <l-popup>
    <div class="w-28 bg-transparent">
    <div class="card-header">
      <h3 class="card-title"> اطلاعات آدرس</h3>
    </div>
      <div class=" h-auto"></div>
    
    </div>
    
    </l-popup>
                
                    </l-marker> 
              </l-map>
            </div>
       
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon ,LTooltip ,LPopup } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon ,
    LTooltip ,
    LPopup
    
  },
  data() {
    return {
      zoom: 15,
       marker:[36.299, 59.601]
    };
  },
};
</script>

<style></style>