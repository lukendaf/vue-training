const app = Vue.createApp({
  data() {
    return {
      name: 'Max',
      age: 31,
      imageUrl: 'http://www.mizenwatch.com/images/Resize%20of%20Tranq1.JPG',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
