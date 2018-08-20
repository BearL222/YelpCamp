var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://pixabay.com/get/eb3db30a29fd063ed1584d05fb1d4e97e07ee3d21cac104496f3c47fa5e8b4b9_340.jpg",
        description: "Laid-Back Camp (ゆるキャン△ Yurukyan) is a Japanese manga series by Afro, serialized in Houbunsha's seinen manga magazine Manga Time Kirara Forward since July 2015.[1] It has been collected in six tankōbon volumes. The manga is licensed in North America by Yen Press. An anime television series adaptation by C-Station aired in Japan from January 4[2][3] to March 22, 2018; the anime was co-financed and licensed by Crunchyroll"
    },
    {
        name: "Forest View",
        image: "https://pixabay.com/get/e136b60d2af51c22d2524518b7444795ea76e5d004b0144296f5c77ba2ecb4_340.jpg",
        description: "Laid-Back Camp (ゆるキャン△ Yurukyan) is a Japanese manga series by Afro, serialized in Houbunsha's seinen manga magazine Manga Time Kirara Forward since July 2015.[1] It has been collected in six tankōbon volumes. The manga is licensed in North America by Yen Press. An anime television series adaptation by C-Station aired in Japan from January 4[2][3] to March 22, 2018; the anime was co-financed and licensed by Crunchyroll"
    },
    {
        name: "Ice View",
        image: "https://pixabay.com/get/eb30b00d21f0053ed1584d05fb1d4e97e07ee3d21cac104496f3c47fa5e8b4b9_340.jpg",
        description: "Laid-Back Camp (ゆるキャン△ Yurukyan) is a Japanese manga series by Afro, serialized in Houbunsha's seinen manga magazine Manga Time Kirara Forward since July 2015.[1] It has been collected in six tankōbon volumes. The manga is licensed in North America by Yen Press. An anime television series adaptation by C-Station aired in Japan from January 4[2][3] to March 22, 2018; the anime was co-financed and licensed by Crunchyroll"
    }
]

function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function(err) {
        // if(err) {
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        
        // // add some campgrounds
        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if(err) {
        //             console.log(err);
        //         } else {
        //             console.log("New campground added");
        //             // create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    });

    // comment some campgrounds
}

module.exports = seedDB;