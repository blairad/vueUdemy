new Vue ({
    el: "#exercise",

    data: {
        name: "andrew",
        age: 34,
        img: "https://images.squarespace-cdn.com/content/v1/563ffa29e4b01aca66bb2bfc/1449273263563-DGLO417ISUWDCQO477YW/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/1.jpg?format=1500w",
        value: ''
    },
    methods: {
        about: function(){
            return `I am ${this.name} and I am ${this.age}`
        },
        multiply: function(){
            return this.age * 3;
        },
        random: function(num){
            return Math.floor(Math.random() * Math.floor(num))
        },
        yourName: function(event){
            this.value = event.target.value
        }
    }
})