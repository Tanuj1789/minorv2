<template>
     <div >
    <form >
      <div>
        <label for="q1" >Q1. In the last couple of days, how often have you been upset because of something that happened unexpectedly? </label>
        <input name="q1" v-model="q1" type = "radio" value=0 > Never
        <input name="q1" v-model="q1" type = "radio"  value =1> Almost Never
        <input name="q1" v-model="q1" type = "radio" value =2> Sometimes
        <input name="q1" v-model="q1" type = "radio" value =3> Often
        <input name="q1" v-model="q1" type = "radio" value =4> Fairly Often
       </div>
       <br><br>

      <div>
        Q2. In the last couple of days, how often have you felt that you were unable to control the important things in your life? <br><br>
        <label for="q2">Name</label>
        <input name="q2" v-model="q2" type = "radio" value =0> Never
        <input name="q2" v-model="q2" type = "radio" value =1> Almost Never
        <input name="q2" v-model="q2" type = "radio" value =2> Sometimes
        <input name="q2" v-model="q2" type = "radio" value =3> Often
        <input name="q2" v-model="q2" type = "radio" value =4> Fairly Often
       </div>
       <br><br>
       <div>
         Q3. In the last couple of days, how often have you felt nervous and “stressed”? <br><br>
        <label for="q3">Name</label>
        <input name="q3" v-model="q3" type = "radio" value =0> Never
        <input name="q3" v-model="q3" type = "radio" value =1> Almost Never
        <input name="q3" v-model="q3" type = "radio" value =2> Sometimes
        <input name="q3" v-model="q3" type = "radio" value =3> Often
        <input name="q3" v-model="q3" type = "radio" value =4> Fairly Often
       </div>
       <br><br>
       <div>
        Q4. In the last couple of days, how often have you felt confident about your ability to handle your personal problems? <br><br>
        <label for="q4">Name</label>
        <input name="q4" v-model="q4" type = "radio" value =0> Never
        <input name="q4" v-model="q4" type = "radio" value =1> Almost Never
        <input name="q4" v-model="q4" type = "radio" value =2> Sometimes
        <input name="q4" v-model="q4" type = "radio" value =3> Often
        <input name="q4" v-model="q4" type = "radio" value =4> Fairly Often
       </div>
       <br><br>
       <div>
         Q5. In the last couple of days, how often have you felt that things
were going your way? <br><br>
        <label for="q5">Name</label>
        <input name="q5" v-model="q5" type = "radio" value =0> Never
        <input name="q5" v-model="q5" type = "radio" value =1> Almost Never
        <input name="q5" v-model="q5" type = "radio" value =2> Sometimes
        <input name="q5" v-model="q5" type = "radio" value =3> Often
        <input name="q5" v-model="q5" type = "radio" value =4> Fairly Often
       </div>
       <br><br>

      <input type="button" value="Submit" @click="fun">
    </form>
  </div>
</template>
<script>
export default {
    name:'Survey',
    data(){
    return {
      q1:4,
      q2:4,
      q3:4,
      q4:4,
      q5:4,
      meanofdata:0,
    }
    },
    methods:{
        fun()
        {
            this.q1=parseInt(this.q1);
            this.q2=parseInt(this.q2);
            this.q3=parseInt(this.q3);
            this.q4=parseInt(this.q4);
            this.q5=parseInt(this.q5);
            var ans=(this.q1+this.q2+this.q2+this.q4+this.q5)/5;
            this.meanofdata=ans;
            console.log(this.meanofdata);

        }
    }

}
</script>
