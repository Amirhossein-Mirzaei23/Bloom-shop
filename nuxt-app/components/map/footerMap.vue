<template>

    <div class="p-5"  >
    <div class="rounded-xl overflow-hidden" style="height:400px; width:400px;" dir="rtl" >

        <l-map ref="map"   v-model:center="center" :use-global-leaflet="false"  :zoom="12"  >
<l-tile-layer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
layer-type="base"
name="OpenStreetMap"
></l-tile-layer>


<l-marker  :lat-lng="marker">
<l-icon
:icon-size="20 "
class-name=" bg-opacity-75 flex rounded-circle z-index-2   ">
<img class="mx-auto " src="https://cdn.iconscout.com/icon/premium/png-512-thumb/map-marker-4287155-3553998.png?f=webp&w=256">
</l-icon>

<l-tooltip>
<div>Bloom shop</div>
</l-tooltip>


<l-popup>
<div class="card bg-transparent">
<div class="card-header">
  <h3 class="card-title"> اطلاعات آدرس</h3>
</div>
  <div class="card-body card-scroll h-auto">
   
  <div class="row">
         اپدیت شده در:
    <div class="w-40  mb-3 "  >
      <strong class="flex flex-row-reverse"  >
     <span> {{ 22/22/22 }} </span><span>  {{ 22/22/22 }} ,</span>
    
    </strong>
    </div>
  </div>
  <div class="row">
    کاربر:
   
    <div class="w-96 mb-3"  >
      <strong>Bloom shop</strong>
    </div>
    
  </div>
 
 
</div>

</div>

</l-popup>
</l-marker> 
<!---start poin marker-->




</l-map>
    </div>
</div>
  </template>
  
  <script setup  >
  import{ref} from 'vue'
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer , LMarker, LIcon , LPopup ,LTooltip} from "@vue-leaflet/vue-leaflet";

  let zoom  = 12

let center = ref([36.299, 59.601] )
let marker = ref([36.299, 59.601] )

  </script>
  
  <style></style>