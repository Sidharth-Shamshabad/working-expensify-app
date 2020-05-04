import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVyrh1CnxWWMpz2Ge1GwFda5sA95tsYXU",
    authDomain: "expensify-848da.firebaseapp.com",
    databaseURL: "https://expensify-848da.firebaseio.com",
    projectId: "expensify-848da",
    storageBucket: "expensify-848da.appspot.com",
    messagingSenderId: "182756410844",
    appId: "1:182756410844:web:e3d326b4f04df45c8efb19",
    measurementId: "G-13T0KWG7CY"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
firebase.analytics();

export {firebase, database as default};






























// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 93283947933
// });

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 5900,
//     createdAt: 93283912933
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 93283933933
// });

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'Angular python'
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Sidharth Shamshabad',
//     age: 18,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Albany',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Seattle',
//     'job/company': 'Amazon'
// });

// const removeVar = database.ref();
// removeVar.remove().then(() => {
//     console.log('Data was removed.');
// }).catch((e) => {
//     console.log('Did not remove data', e);
// });