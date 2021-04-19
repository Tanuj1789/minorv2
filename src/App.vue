<template>
  <div id="app">
  <div class="flex-row">
  <div >
    <nav>
           <ul>
         <li @click="fun">
        {{username}}'s Space
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>
  <div>
    <nav>
           <ul>
         <li @click="setfalse" >
          <router-link to="/" class="" > Home </router-link>
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
  </div>
  <div>
    <nav>
           <ul>
         <li>
       <router-link to="/Sospage" class=""> SOS </router-link>
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
    </div>
  </div>
  <hr style="height:2px colour:black">
  <div  v-if="show==true" >
  <Login @uname="changename($event)"/>
  </div>
  <div v-else>
      <router-view> </router-view>
    </div>
     <div class="flex-row" >
      <!-- <img src="@/assets/logo.png" class="circle"/>
        <img src="@/assets/logo.png" class="circle"/>
        <img src="@/assets/logo.png" class="circle">
        <img src="@/assets/logo.png" class="circle"/>
        <img src="@/assets/logo.png" class="circle"/> -->
    </div>
  </div>

</template>

<script>

import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
    Login,
  },
  data(){
    return {
      username:"Guest",
      show:false,
    }
  },
  methods :{
    changename(name,value){
      console.log("insidechangename");
      console.log(name);
        this.username=name;
        this.show=value;
    },
    fun(){
      this.show=!this.show;
      this.username="Guest";
    },
    setfalse(){
      this.show=false;
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
  flex-grow: 1;
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
  background:
    radial-gradient(
     at center, #3498db, #9b59b6
    );
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
