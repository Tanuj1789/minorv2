
<template>
        <div >
        <nav>
            <ul>
              <li>
            Book Session
            <span></span><span></span><span></span><span></span>
          </li>
          </ul>
          </nav>
          <br>
        <form  v-on:submit="saveTherapist" class="flex-column">
        <input type="text" placeholder="Doctor name" v-model="drname"/>
        <input type="date" id="start" v-model="date" name="trip-start" value="yyyy-mm-dd" min="2000-01-01" max="2022-12-31"/>
        <div style="margin-top:10%;margin-left:50%;">
        <button>
        Submit </button>
        </div>
        </form>
        </div>
</template>
<script>
import {names } from "../firebase";
export default {
  name: "Booksession",
  data() {
    return {
      drname: "",
      date: ""
    };
  },
  props:['email','name'],
  methods: {
      saveTherapist:
      function (e)
      {
        e.preventDefault();
        console.log("adding new user");
        names.push({
            name: this.name,
            email: this.email,
            drname:this.drname,
            date: this.date,
          });
          this.$emit('udoctor',{doctor:this.drname,sDate:this.date})

      },
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
.main {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* background: black; */
  min-width: 80%;
  /* background: pink; */
}
.inputbox {
  margin-top: 2%;
}
h2 {
  color: white;
  font-size: 40px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
h3 {
  color: white;
  font-size: 20px;
  font-style: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
}
.row {
  display: flex;
  margin-top: 5%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-evenly;
  justify-self: center;
  align-items: center;
  flex-grow: 1;
  /* margin-right:2%;    */
  border: solid 3px white;
  flex-wrap: wrap;
  /* padding:5%; */
  /* background:yellow; */
}
input {
  min-height: 30px;
  /* min-width: 100px; */
  border-radius: 5%;
  border: solid 3px black;
  color: white;
  font-weight: 400;
  font-size: 25px;
  background: #232526; /* fallback for old browsers */
  margin-left:10%;
  margin-top:2%;
  width:80%;
  background: -webkit-linear-gradient(
    to right,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

textarea {
  width: 100%;
  border-radius: 5%;
  border: solid 3px black;
  color: white;
  font-weight: 400;
  font-size: 25px;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
input:active {
  height: 43px;
  width: 343px;
}
input:hover {
  box-shadow: 2px 2px 20px black;
}
::placeholder {
  color: whitesmoke;
  opacity: 0.8;
  font-weight: 10;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 0.3mm;
  font-size: 20px;
  padding: 8px;
}
.footerImage {
  min-width: 20%;
  max-width: 30%;
  max-height:10%;
  /* background: chartreuse; */
  filter: grayscale(50%);
}
.footerImage:hover {
  min-width: 20%;
  max-width: 30%;
  max-height:10%;
  filter: grayscale(0%);
  filter:drop-shadow(0px 3px 10px white)
}
button{
  font-family: 'Ubuntu', sans-serif;
  /* position: absolute; */
    /* top: 50%; */
  /* left: 50%; */
  display:flex;
     align-items: center;
    justify-content: center;
  flex-direction:column ;
  transform: translate(-50%, -50%);
  width: 170px;
  height: 40px;
  line-height: 1;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  border: 3px solid black;
  background: #fff;
  color: black;
  border-radius: 40px;
  cursor: pointer;
  overflow: hidden;
  transition: all .35s;
}
button:hover{
  background: #8C82FC;
  background:grey;
  color: #fff;
}
</style>