<template>
  <div class="flex-column">
    <div class="flex-column" >
      <p> Selfcare Guide </p>
      <div class="flex-row space-between" style="flex-wrap:wrap">
        <div class="flex-column">
            <div><a :href="urlmeditation" target="_blank"><img src="@/assets/2nd image.jpeg" class="circle border-r" @click="fun" /></a></div>
             <div> <p> Meditation</p></div>
        </div>
        <div class="flex-column">
            <div><a :href="urlremote" target="_blank"><img src="@/assets/3rd image.jpeg" class="circle border-r"/></a></div>
             <div> <p> Remote Wellness </p></div>
        </div>
        <div class="flex-column">
            <div><a :href="urlstress" target="_blank"><img src="@/assets/Stress.jpg" class="circle border-r"/></a></div>
             <div> <p> Stress </p></div>
        </div>
        <div class="flex-column">
            <div><a :href="urlsleep" target="_blank"><img src="@/assets/sleep.jpeg" class="circle border-r"/></a></div>
             <div> <p> Sleep </p></div>
        </div>
      <hr style="width:80%;height:2px;background-color:gray">

        </div>
         <p> My  4 AM FRIEND </p>
      <div class="flex-row" style="min-width:100%;">
        <div class="bigimage"></div>
        <div style="display:flex; flex-direction:column;justify-content:center;flex-grow:1">
        <nav>
           <ul>
         <li style="height:100%">
     <a> Analyse Wellbeing </a>
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
        </div>;
      </div>
    </div>
    <br>
    <hr style="width:50%;height:2px;background-color:gray">
    <div class="flex-column" >

      <div class="flex-row">

      <div class="flex-row" style="min-width:100%;">
        <div class="bigimage"></div>
        <div v-if="this.doctor=='Not Assigned'" style="display:flex; flex-direction:column;justify-content:center;flex-grow:1">
        <!-- <b-button pill variant="success" >Start A chat</b-button> -->
         <nav>
           <ul>
         <li style="width:80%">
           Click on Guest's Space
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
      </div>
      <div v-else style="display:flex; flex-direction:column;justify-content:center;flex-grow:1">
        {{dr}}
        <br>
        {{sd}}
        <nav>
           <ul>
         <li @click="updateshow">
           Book Session
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
    <div v-if="show==true">
      <Booksession v-bind:email="email" v-bind:name="name" @udoctor="udoctor" />
      </div>
      </div>
    </div>

  </div>
  <div v-if="this.show==true">
  <router-view></router-view>
  </div>
    </div>

  </div>

</template>

<script>
import Booksession from './Booksession.vue';

export default {

  name: 'Home',
  props: ['name','email','doctor','sDate']
,

  components:{
    Booksession,

  },
  methods:{

    fun()
    {
      console.log("printing doctor");
        console.log(this.doctor);

    },
    updateshow()
    {
      this.show=1;
      console.log("From Home", this.email);

    },
      udoctor({doctor,sDate}){
      console.log("insidechangename");

        this.dr=doctor;
        this.sd=sDate;
        this.show=!this.show;
    },

  },
  data(){
    return {
      show:false,
      dr:this.doctor,
      sd:this.sDate,
      urlmeditation: "https://markmanson.net/meditation/",
      urlremote: "https://www.flexjobs.com/employer-blog/how-companies-can-use-meditation/",
      urlstress: "https://www.berries.com/blog/stress-relief-activities",
      urlsleep: "https://www.psycom.net/sleep-deprivation-test/",
    }
  },

}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.flex-column{
  display:flex;
  flex-direction:column;
  flex-grow: 1;
  justify-content: space-around;
}
.border-r{
  border: solid 3px black;
  border-radius:50%;
  opacity:0.7;
  max-width:25%;

  /* padding:1%; */
}
.bigimage{
  background-image: url("D:\\Programming\\minorv2\\src\\assets\\panda.png");
  background-repeat: no-repeat;
  min-height:40vh;
  min-width:20% ;
  flex-grow:2;
}
.bigimage:hover{
  transform:scale(1.2);
  transition-duration: .2s;
  filter:drop-shadow(-5px 0px 5px chartreuse);
}
.flex-end{
  justify-content: flex-end;
}
.space-between{
    display:flex;
    justify-content: space-around;
    flex-grow:1;
}
</style>
