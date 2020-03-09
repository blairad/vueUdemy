new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '200px',
      height: '200px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  computed: {
    
  },
  methods: {
    startEffect: function() {
      let vm = this;
      setInterval( function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;

      },1000)
  },
  startProgress: function() {
    let vm = this;
    let width = 0;
    setInterval(function(){
      width = width += 10;
      vm.progressBar.width = width + 'px';
      
    }, 500)
    
  }
}
});
