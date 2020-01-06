<template>
  <div>
    <Header title="城市选择" :show="show" :left="left" />
    <van-loading type="spinner" color="#f00" v-if="loading"/>
    <div id="content" v-else>
      <van-index-bar :sticky="false">
        <van-index-anchor v-for="item in cityData" :key="item.id" :index="item.index">
          <span class="indexWord">{{item.index}}</span>
          <van-cell :title="list.nm" v-for="list in item.list" :key="list.id" @click="chooseCity(list)" />
        </van-index-anchor>
      </van-index-bar>
    </div>
    <TabBar />
  </div>
</template>
<script>
  import TabBar from '@/components/TabBar';
  import Header from '@/components/Header';
  export default {
    name: 'search',
    data() {
      return {
        show: false,
        left: false,
        cityData: '',
        indexList: '',
        loading:true
      }
    },
    mounted() {
      let cityData = window.localStorage.getItem('cityData');
      if (cityData) {
        this.cityData = JSON.parse(cityData);
        this.loading=false
      } else {
        this.axios.get('/api/cityList').then((res) => {
          console.log(res);
          const msg = res.data.msg;
          if (msg === "ok") {
            const data = res.data.data.cities;
            let cityData = this.formatCityLis(data)
            this.cityData = cityData;
            this.loading=false
            window.localStorage.setItem('cityData', JSON.stringify(cityData))
          }
        })
      }
    },
    methods: {
      selectInfo(e) {
        console.log(e);
      },
      chooseCity(city) {
        let nm=city.nm,id=city.id;
        window.localStorage.setItem('nm',nm)
        window.localStorage.setItem('id',id)
        this.$store.commit('city/City_Info',{nm,id})
       this.$router.push('/movie')
      },
      formatCityLis(citys) {
        let CityList = [];
        let HotList = [];
        for (var i = 0; i < citys.length; i++) {
          let firstLetter = citys[i].py.substring(0, 1).toUpperCase();
          if (toCom(firstLetter)) {
            CityList.push({
              index: firstLetter,
              list: [{
                nm: citys[i].nm,
                id: citys[i].id
              }]
            })
          } else {
            for (var j = 0; j < CityList.length; j++) {
              if (CityList[j].index === firstLetter) {
                CityList[j].list.push({
                  nm: citys[i].nm,
                  id: citys[i].id
                })
              }
            }
          }
        }
        CityList.sort((n1, n2) => {
          if (n1.index > n2.index) {
            return 1;
          } else if (n1.index < n2.index) {
            return -1
          } else {
            return 0
          }
        })

        function toCom(firstLetter) {
          for (var i = 0; i < CityList.length; i++) {
            if (CityList[i].index === firstLetter) {
              return false
            }
          }
          return true;
        }
        return CityList;
      }
    },
    components: {
      TabBar,
      Header,
    }
  }
</script>

<style>
</style>
