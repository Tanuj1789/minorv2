<template>
  <div id="app">
  <div class="flex-column" >
  <div class="flex-row flex-wrap" >
  <div>
    <nav>
           <ul>
         <li @click="setfalse" >
           Home
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>
  <div>
    <nav>
           <ul>
         <li @click="fun" >
            {{username}}'s Space
             <Login @uname="uname"/>
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>

  <div v-if='this.username!="Guest"'>
    <nav>
           <ul>
         <li @click="fun3" >
            Survey
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>

  <div>
    <nav>
           <ul>
         <li @click="fun2">
       <router-link to="/Sospage" class=""> SOS </router-link>
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>

    <div>
    <nav>
           <ul>
         <li @click="fun4">
       <router-link to="/Chatbox" class=""> Start Chat </router-link>
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>

  </div>
  <!-- <hr style="height:2px colour:black"> -->
  <div >
  <div  v-if="show==1" >
       <Login @uname="uname"/>
  </div>
  <div v-else-if="show==0">
      <Home v-bind:name="username" v-bind:email="email" v-bind:doctor="doctor" v-bind:sDate="sDate"/>
   </div>
   <div v-else-if="show==3">
     <Survey/>
     </div>
    <div v-else-if="show==4">
     <Chatbox/>
     <iframe v-if="show==4"
            style="border: none;"
            height="600px"
            width="400px"
            src="https://widget.kommunicate.io/chat?appId=YOUR_APP_ID"
            allow="microphone; geolocation;"
        >
      </iframe>
     </div>
   <div v-else>
      <Sospage/>
   </div>
   </div>
  </div>
  </div>

</template>

<script>

import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Sospage from './components/Sospage.vue'
import Survey from './components/Survey.vue'
import Chatbox from './components/Chatbox.vue'
export default {
  name: 'App',
  components: {
    Login,
    Home,
    Sospage,
    Survey,
    Chatbox,
  },
  data(){
    return {
      username:"Guest",
      email:"",
      show:0,
      doctor: "Not Assigned",
      sDate: "Not Scheculed"
    }
  },
  mounted()
    {

  },
  methods :{
    uname({uName,email,dName,sDate}){
      console.log("insidechangename");
        this.username=uName;
        this.email=email;
        this.doctor=dName;
        this.sDate=sDate;
        console.log(this.date);
        console.log("from uname");
        console.log(this.doctor);
        this.show=!this.show;
        console.log("from App");
        console.log(this.email);
    },
    fun(){
      this.show=1;
      this.username="Guest";
      this.doctor="Not Assigned";
      this.sDate="Not Scheduled";
    },
    fun2()
    {
      this.show=2;
    },
    fun3()
    {
      this.show=3;
    },
    fun4()
    {
      (function(d, m){
        var kommunicateSettings =
            {"appId":"9a2713693424ef4fba721e8f62eed13f","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
      this.show=4;
    },
    setfalse(){
      this.show=0;
      console.log(this.$loggedin);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left:25%;
  margin-right:25%;
  background: #70e1f5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ffd194, #70e1f5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ffd194, #70e1f5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  min-height: 100vh;
  display:flex;
  flex-direction: column;
}
.flex-row{
  display:flex;
  justify-content: space-between;
  align-content:center;
  align-items:center;
  flex-wrap:wrap;


}
.flex-column{
  display:flex;
  flex-direction: column;
}
.flex-wrap{
  flex-wrap:wrap;
}
.flex-end{
  display:flex;
  justify-content: flex-end;
  align-content: space-around;
  flex-grow: 1;
}
.circle{
  max-width:60%;
  flex-wrap:nowrap;
  border-radius:50%;

}
body {
  /* position:fixed; */
  top:0px;
  left:0px;
  height:100%;
  width:100%;
  background: #0a020e;
  background:url("D:\\Programming\\minorv2\\src\\assets\\bg1.jpeg");
  /* background-repeat: no-repeat; */
  /* background-size: cover; */

}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    --c:#a24857;
    color: var(--c);
    font-size: 16px;
    border: 0.3em solid var(--c);
    color:black;

    border-radius: 0.5em;
    width: 12em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    margin: 1em;
}

nav ul li span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}

nav ul li:hover {
    color: white;
}

nav ul li:hover span {
    transform: translateY(0) scale(2);
}

nav ul li span:nth-child(1) {
    --n: 1;
}

nav ul li span:nth-child(2) {
    --n: 2;
}

nav ul li span:nth-child(3) {
    --n: 3;
}

nav ul li span:nth-child(4) {
    --n: 4;
}
</style>
