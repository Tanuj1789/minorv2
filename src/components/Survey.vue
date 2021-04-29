<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="quiz-header">
        <h5>Manage Your Stress!</h5>
      </div>
      <div class="step-progress" :style="{ width: progress + '%' }"></div>
      <div
        class="quiz-main"
        v-for="(element, index) in questions.slice(a, b)"
        :key="index"
      >
        <div class="box-question">
          <h6>Question {{ b }}/{{ questions.length }}</h6>
          <p>
            {{ element.question }}
          </p>
        </div>
        <div class="box-suggestions">
          <ul>
            <li
              v-for="(item, index) in element.suggestions"
              :key="index"
              v-bind:class="{one : chosen[index]}"
              @click="selectResponse(item)"
            >
              {{ item.suggestion }}
            </li>
          </ul>
        </div>
      </div>
      <div class="box-score" v-if="end">
        <h2>Your score is:</h2>
        <h1> {{score}} </h1>
        <br>
        <p> Your mental health is <p/> <h1><b>{{msg}} </b></h1>
        <br>
        <p>  {{state}} </p>
        <div class="btn-restart">
          <button @click="restart" v-if="progress > 100">
            Restart <i class="ffas fa-sync"></i>
          </button>
        </div>
      </div>
      <div class="quiz-footer">
        <div class="box-button" v-if="progress < 100">
          <button
            @click="skipQuestion"
            :style="!next ? 'background-color:rgb(106,128,202)' : ''"
          >
            Skip
          </button>
          <button
            @click="nextQuestion"
            :style="next ? 'background-color:rgb(106,128,202)' : ''"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "Survey",
  data() {
    return {
      score:0,
      state:"",
      msg: "",
      myclass:"",
      chosen: [0,0,0,0],
      questions: [
        {
          question:
            "I found myself getting upset by quite trivial things.",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I tended to over-react to situations",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I found it difficult to relax",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I found myself getting upset rather easily",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I felt that I was using a lot of nervous energy",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I found myself getting impatient when I was delayed in any way (eg, lifts, traffic lights, being kept waiting)",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I felt that I was rather touchy",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I found it hard to wind down",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },{
          question:
            "I found that I was very irritable",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },{
          question:
            "I found it hard to calm down after something upset me",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I found it difficult to tolerate interruptions to what I was doing",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I was in a state of nervous tension",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },{
          question:
            "I found it difficult to tolerate interruptions to what I was doing",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I was intolerant of anything that kept me from getting on with what I was doing",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
        {
          question:
            "I found myself getting agitated",
          suggestions: [
            { suggestion: "Never", val: "0" },
            { suggestion: "Almost Never", val: "1" },
            { suggestion: "Sometimes", val: "2" },
            { suggestion: "Often", val: "3" },
          ],
        },
      ],
      a: 0,
      b: 1,
      x:  -1,
      select: false,
      current: null,
      end: 0,
      next: false,
      progress: 0,
    };
  },
  methods: {
    setcurrent(c) {
      console.log(c);
    },
    // onchange(e) {
    //   console.log("helloWorld");
    //   console.log(e.target.value);
    // },
    selectResponse(item) {
      console.log(item.val);
      var x=parseInt(item.val,10);
      if(x===0)
      {
          this.chosen[0]=1;
          this.chosen[1]=0;
          this.chosen[2]=0;
          this.chosen[3]=0;
      }

      else if(x===1){
            this.chosen[0]=0;
            this.chosen[1]=1;
            this.chosen[2]=0;
            this.chosen[3]=0;
      }
      else if(x===2)
      {
            this.chosen[0]=0;
            this.chosen[1]=0;
            this.chosen[2]=1;
            this.chosen[3]=0;
      }
      else if(x===3)
      {
            this.chosen[0]=0;
            this.chosen[1]=0;
            this.chosen[2]=0;
            this.chosen[3]=1;
      }

      console.log(this.chosen);
      this.select = true;
      this.next = true;
      if(this.score>=0 && this.score<=14)
      {
          this.msg="Normal";
          this.state="This suggests that you experience very little stress and anxiety in your life.You find it easy to relax, which allows you to be calm and engage positively with daily challenges. When certain situations make you anxious, you show good control over your physical reactions"
      }
      else if(this.score<=18)
      {
          this.msg="Mild";
          this.state="This suggests that you experience very little to mild stress and anxiety in your daily life. Though you find it easy to relax, you also are manage to manage stressful experiences easily. "
      }
      else if(this.score<=25)
      {
        this.msg="Moderate";
        this.state="This suggests that you experience an average amount of stress and anxiety in your life.Though you’re often able to manage stressful experiences, sometimes you may find it hard to relax. This can make you irritable, emotional, and in some situations, it can make you feel anxious."
      }
      else if(this.score<=33)
      {
        this.msg="Severe";
        this.state="This suggests that you experience a little more than the average amount of stress and anxiety in your life.You’re often unable to manage stressful experiences, and find it hard to relax. Occasionally, you may notice that you feel physical symptoms of this anxiety—heavy breathing, a pounding heart, or sweatiness in your palms."
      }
      else
      {
          this.msg="Extremely Severe";
          this.state="This suggests that you experience too much stress and anxiety in your life.You may find it hard to relax, which can make you irritable and emotional. Feeling this way causes you to be tense and makes it hard to be flexible when meeting daily challenges. When you are anxious you may notice physical symptoms—heavy breathing, a pounding heart, or sweatiness."
      }
      if(this.x===-1)
      this.x=x;
    },

    nextQuestion() {
      if (!this.next) {
        return;
      }
      this.chosen[0]=0;
      this.chosen[1]=0;
      this.chosen[2]=0;
      this.chosen[3]=0;
      this.progress = this.progress + 100 / this.questions.length;
      this.a++;
      this.b++;
      this.select = false;
      this.next = false;
      this.score+=this.x;
      this.x=-1;
      if (this.a === 15) this.end = true;
    },
    skipQuestion() {
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length  === this.a) {
        this.next = false;
      } else {
        this.a++;
        this.b++;
      }
      if (this.a === 15) this.end = true;
    },
    restart() {

      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>


<style scoped>
* {
  font-family: "Poppins", sans-serif;
  font-size: small;
  /* margin-top:; */
  letter-spacing: 2px;
}

.container-app {
  margin-top:5%;
  display: flex;
   width: 100%;
  height: 100%;
  justify-self: flex-end;
}

.container-quiz {
  display: flex;
  align-self: center;
  width: 50%;
  height: 80%;
  background-color: white;
  text-align: center;
  flex-flow: column;
  border: 1px solid #e7eae0;
  border-radius: 10px;
  /* position: absolute; */
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.quiz-header {
  display: flex;
  width: 100%;
  height: 35%;
  border-bottom: 1px solid #e7eae0;
  justify-content: center;
  align-items: center;
  background-color: #e7eae0;
  border-radius: 10px 10px 0px 0px;
}
.container-quiz .box {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
}
.quiz-main {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
}
.quiz-footer {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  border-top: 1px solid #e7eae0;
  background-color: #e7eae0;
  border-radius: 0px 0px 10px 10px;
}

.box-question {
  margin-top: 20px;
}

.box-suggestions {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: auto;
}

.box-question p {
  margin-top: 20px;
}

.box-score {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
}

.box-score h2 {
  margin-top: 40px;
}
.btn-restart {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 50px;
}
.btn-restart button {
  width: 100px;
  height: 25px;
  outline: none;
  border: 0;
  color: white;
  font-size: 12px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  background-color: rgb(106, 128, 202);
}
ul {
  display: flex;
  width: 80%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}

ul li {
  list-style: none;
  line-height: 2;
  border: 1px solid #cdd2d2;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}
li:hover {
  background-color: #e7eae0;
}
.box-button {
  display: flex;
  width: 100%;
}
.box-button button {
  width: 100px;
  height: 25px;
  outline: none;
  border: 0;
  color: white;
  font-size: 12px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  background-color: #a09f9ff5;
}
li.none{
    background-color:white;
}
li.zero {
  border: 1px solid rgb(100, 148, 237);
  background-color: rgb(100, 148, 237);
  color: white;
  font-weight: 600;
}
li.one {
  border: 1px solid rgb(100, 148, 237);
  background-color: rgb(100, 148, 237);
  color: white;
  font-weight: 600;
}
/* li.incorrect {
  border: 1px solid red;
  background-color: red;
  color: white;
  font-weight: 600;
} */
.step-progress {
  display: flex;
  width: 100%;
  height: 5px;
  background-color: rgb(106, 128, 202);
  transition: 0.5s;
}
@media Screen and (max-width: 900px) {
  .container-quiz {
    width: 60%;
  }
}
@media Screen and (max-width: 720px) {
  .container-quiz {
    width: 80%;
  }
  .box-button button {
    width: 100px;
  }
}
</style>