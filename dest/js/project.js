 Vue.component('meaning-button',{
  template:'\
  <button @click = "changeWord">{{ meaning }}</button>\
  ',
  props: ['meaning', 'first', 'second'],
  data: function data() {
    return {
      item: [
        meaning: '',
      ]
    };
  },
  methods: {
    changeWord: function changeWord(){
      this.$emit('change-word', this.first, this.second)
    }
  }
 });

 Vue.component('wakamono-kotoba',{
  template:'\
  <div class="bl_wakamono">\
    <p class="bl_wakamono_1stText">{{ first }}</p>\
    <p class="bl_wakamono_2ndText">{{ second }}</p>\
  </div>\
  ',
  props: ['first', 'second']
 });

 var vm = new Vue({
   el: '#main',
   data: {
     first:'若者',
     second:'言葉'
   },
   methods: {
    changeWord: function changeWord(first,second){
      this.first = first,
      this.second　= second
    }
   }
 })

vm.$mount('#main');