<template>
    <div style="display:flex">
        <div class="aside-div">
            <slot name="aside"></slot>
        </div>
        <div class="map-div">
            <slot name="map"></slot>
        </div>
        <div></div>
    </div>
</template>

<style scoped>
.map-div {
  width: 85%;
  height: 600px;
}
.aside-div {
  width: 15%;
  height: 600px;
}
.button-style {
  margin-left: 20px;
  margin-top: 20px;
  width: 100px;
  background-color: #FF69B4;
  border-color: #FF69B4;
}
.button-style:hover {
  background-color: rgb(109, 34, 207);
  border-color: rgb(109, 34, 207);
}
</style>
