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

        <input name="q2" v-model="q2" type = "radio" value =0> Never
        <input name="q2" v-model="q2" type = "radio" value =1> Almost Never
        <input name="q2" v-model="q2" type = "radio" value =2> Sometimes
        <input name="q2" v-model="q2" type = "radio" value =3> Often
        <input name="q2" v-model="q2" type = "radio" value =4> Fairly Often
       </div>
       <br><br>
       <div>
         Q3. In the last couple of days, how often have you felt nervous and “stressed”? <br><br>

        <input name="q3" v-model="q3" type = "radio" value =0> Never
        <input name="q3" v-model="q3" type = "radio" value =1> Almost Never
        <input name="q3" v-model="q3" type = "radio" value =2> Sometimes
        <input name="q3" v-model="q3" type = "radio" value =3> Often
        <input name="q3" v-model="q3" type = "radio" value =4> Fairly Often
       </div>
       <br><br>
       <div>
        Q4. In the last couple of days, how often have you felt confident about your ability to handle your personal problems? <br><br>

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

        <input name="q5" v-model="q5" type = "radio" value =0> Never
        <input name="q5" v-model="q5" type = "radio" value =1> Almost Never
        <input name="q5" v-model="q5" type = "radio" value =2> Sometimes
        <input name="q5" v-model="q5" type = "radio" value =3> Often
        <input name="q5" v-model="q5" type = "radio" value =4> Fairly Often
       </div>
       <br><br>
       <div>
         Q6. In the last couple of days, how often have you found that you could not cope with all the things that you had to do? <br><br>

        <input name="q6" v-model="q6" type = "radio" value =0> Never
        <input name="q6" v-model="q6" type = "radio" value =1> Almost Never
        <input name="q6" v-model="q6" type = "radio" value =2> Sometimes
        <input name="q6" v-model="q6" type = "radio" value =3> Often
        <input name="q6" v-model="q6" type = "radio" value =4> Fairly Often
       </div>
       <br><br>
       <div>
        Q7. In the last couple of days, how often have you been able to control irritations in your life?  <br><br>

        <input name="q7" v-model="q7" type = "radio" value =0> Never
        <input name="q7" v-model="q7" type = "radio" value =1> Almost Never
        <input name="q7" v-model="q7" type = "radio" value =2> Sometimes
        <input name="q7" v-model="q7" type = "radio" value =3> Often
        <input name="q7" v-model="q7" type = "radio" value =4> Fairly Often
       </div>
       <br><br><div>
          Q8. In the last couple of days, how often have you felt that you were on top of things?<br><br>

        <input name="q8" v-model="q8" type = "radio" value =0> Never
        <input name="q8" v-model="q8" type = "radio" value =1> Almost Never
        <input name="q8" v-model="q8" type = "radio" value =2> Sometimes
        <input name="q8" v-model="q8" type = "radio" value =3> Often
        <input name="q8" v-model="q8" type = "radio" value =4> Fairly Often
       </div>
       <br><br><div>
          Q9. In the last couple of days,  how often have you been angry because of things that were outside of your control? <br><br>

        <input name="q9" v-model="q9" type = "radio" value =0> Never
        <input name="q9" v-model="q9" type = "radio" value =1> Almost Never
        <input name="q9" v-model="q9" type = "radio" value =2> Sometimes
        <input name="q9" v-model="q9" type = "radio" value =3> Often
        <input name="q9" v-model="q9" type = "radio" value =4> Fairly Often
       </div>
       <br><br><div>
         Q10. In the last couple of days, how ofte have you felt difficulties were piling up so high that you could not overcome them? <br><br>

        <input name="q10" v-model="q10" type = "radio" value =0> Never
        <input name="q10" v-model="q10" type = "radio" value =1> Almost Never
        <input name="q10" v-model="q10" type = "radio" value =2> Sometimes
        <input name="q10" v-model="q10" type = "radio" value =3> Often
        <input name="q10" v-model="q10" type = "radio" value =4> Fairly Often
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
      q6:4,
      q7:4,
      q8:4,
      q9:4,
      q10:4,
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
            this.q6=parseInt(this.q6);
            this.q7=parseInt(this.q7);
            this.q8=parseInt(this.q8);
            this.q9=parseInt(this.q9);
            this.q10=parseInt(this.q10);
            var ans=(this.q1+this.q2+this.q2+this.q4+this.q5+this.q6+this.q7+this.q8+this.q9+this.q10)/10;
            this.meanofdata=ans;
            console.log(this.meanofdata);
        }
    }

}
</script>