var app = new Vue ( {
    el: " #root",
    data: {
        counterPhoto:0,
        photos: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"

        ]
    },
    methods: {
        prevPhoto: function () {
            this.counterPhoto --;
            //se l'indice dell'array è < di 0 siamo a -1. 
            if (this.counterPhoto < 0){
                this.counterPhoto = (this.photos.length - 1);
            }
        },
        nextPhoto: function () {
            this.counterPhoto ++;
            if (this.counterPhoto > (this.photos.length - 1)) {
                this.counterPhoto=0;
            }


        },


    }


})

console.log (app);
