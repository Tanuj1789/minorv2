<template>
  <div >
    <form @submit.prevent="login()">
      <div>
        <label for="name">Name</label>
        <input name="name" v-model="name" placeholder="name">
      </div>
      <div>
        <label for="age">age</label>
        <input name="age" v-model="age" placeholder="age" type="number">
      </div>
      <div>
        <label for="date">Date</label>
        <input name="date" v-model="date" placeholder="date">
      </div>
      <div>
        <label for="doctor">Doctor Type</label>
        <input name="doctor" v-model="doctor" placeholder="doctor name">
      </div>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>
<script>
export default {
  name: "Booksession",
  data() {
    return {
      name: "",
      age: "",
      date: "",
      doctor: ""
    };
  },
  methods: {
    async login() {
      const { name, age, date, doctor } = this;
      const res = await fetch(
        "https://SomberHandsomePhysics--five-nine.repl.co/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            age,
            date,
            doctor
          })
        }
      );
      const data = await res.json();
      console.log(data);
    }
  }
};
</script>