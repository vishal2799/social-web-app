// import axios from 'axios'
// let users = [
//     {
//       name: "Santa Monica",
//       userId: 1995,
//       amount: "$10,800",
//       due: "12/05/1995"
//     },
//     {
//       name: "Stankonia",
//       userId: 2000,
//       amount: "$8,000",
//       due: "10/31/2000"
//     },
//     {
//       name: "Ocean Avenue",
//       userId: 2003,
//       amount: "$9,500",
//       due: "07/22/2003"
//     },
//     {
//       name: "Tubthumper",
//       userId: 1997,
//       amount: "$14,000",
//       due: "09/01/1997"
//     },
//     {
//       name: "Wide Open Spaces",
//       userId: 1998,
//       amount: "$4,600",
//       due: "01/27/2998"
//     }
//   ];

//   const getUserss = (email, password) => {
//     let url = "http://localhost:3000/login";
//     axios.post(url, {
//         email,
//         password
//       })
//       .then(function (response) {
//         saveUser(response.data);
//         setIsLoading(false);
//         <Navigate to="/" replace={true} />
//     })
//       .catch(function (error) {
//         setIsLoading(false);
//       });
//   };

//   const getPosts = (id) => {
//     let posts;
//     let userIds = [1, 2, 4];
//     userIds = userIds.join("&userId=");
//     let url = "http://localhost:3000/posts?userId=" + userIds;
//     let token = localStorage.getItem('user');
//     token = JSON.parse(token).accessToken;
//     axios.get(url, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })
//     .then(function (res) {
//         posts = res.data;
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
//   }
  
//   export function getUsers() {
//     return users;
//   }

//   export function getUser(userId) {
//     return users.find(
//       user => user.userId === userId
//     );
//   }

//   export function deleteUser(userId) {
//     users = users.filter(
//       user => user.userId !== userId
//     );
//   }