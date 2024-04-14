<template>
    <div class="container">
        <div class="instagram-wrapper">
            <div>
                <h1>INSTAGRAM</h1>
            </div>
            <div>
                <p><a href="https://www.instagram.com/kharybulbul.restaurants/">@kharybulbul.restaurants</a></p>
            </div>
        </div>
        <div class="gallery-item" v-for="(item, index) in katalog" :key="index">
          <a href="https://www.instagram.com/kharybulbul.restaurants/"><img :src="item.image" alt="" /></a>
        </div>
    </div>
</template>
<script>
export default {
name:'homeInsta',
    setup() {
    const katalog = [
      { image: require('@/assets/discover-1.jpg') },
      { image: require('@/assets/discover-2.jpg') },
      { image: require('@/assets/discover-3.jpg') },
      { image: require('@/assets/discover-1.jpg') },
    ];
    return{
    katalog
    }
    },


}
</script>
<style scoped>
a{
text-decoration: none;

}
.container{
margin-top:200px ;
margin-left: 50px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  
}
.instagram-wrapper{
width: 27%;
}

.gallery-item img{
 width: 100%;
 height: 250px;
 margin: 15px;
}
</style>