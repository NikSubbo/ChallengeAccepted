const mongoose = require("mongoose");
const Challenge = require('./challenges');


mongoose.connect('mongodb+srv://Ranko:g9P32q6aj8cn3m1A@cluster0-1xb8w.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to the Database'))
.catch((err) => console.log(err));


const urls = ['https://res.cloudinary.com/dof2kpigs/image/upload/v1589899033/images_ueofdg.jpg',
 'https://res.cloudinary.com/dof2kpigs/image/upload/v1589899033/2162a51fd8ec2707db1bcbe810f1f654_qjkje8.jpg',
 'https://res.cloudinary.com/dof2kpigs/image/upload/v1589899033/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_xpzrbc.jpg',
 'https://res.cloudinary.com/dof2kpigs/image/upload/v1589899033/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_1_xsemev.jpg'
];

const seed = async (urls) => {
  for(let i = 0; i < urls.length; i++) {
    await Challenge.create({
      url: urls[i],
      hashtags: [i]
    })
  }
}

// seed(urls);
